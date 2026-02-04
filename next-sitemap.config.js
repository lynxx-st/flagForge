/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');
const { Client } = require('@notionhq/client');
const mongoose = require('mongoose');

const APP_DIR = path.join(process.cwd(), 'app');
const PAGE_FILE_REGEX = /^page\.[jt]sx?$/;

const isRouteGroup = (segment) => segment.startsWith('(') && segment.endsWith(')');
const isDynamicSegment = (segment) => segment.startsWith('[') && segment.endsWith(']');

const collectPageFiles = (dir, results = []) => {
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectPageFiles(fullPath, results);
      continue;
    }

    if (PAGE_FILE_REGEX.test(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
};

const buildRouteLastmod = () => {
  const routeLastmod = new Map();
  const pageFiles = collectPageFiles(APP_DIR);

  for (const filePath of pageFiles) {
    const relativePath = path.relative(APP_DIR, filePath);
    const dirName = path.dirname(relativePath);
    const segments = dirName === '.' ? [] : dirName.split(path.sep);
    const routeSegments = segments.filter((segment) => !isRouteGroup(segment));

    if (routeSegments.some(isDynamicSegment)) {
      continue;
    }

    const routePath = `/${routeSegments.join('/')}`;
    const stats = fs.statSync(filePath);
    routeLastmod.set(routePath === '/' ? '/' : routePath, stats.mtime.toISOString());
  }

  return routeLastmod;
};

const routeLastmod = buildRouteLastmod();

const SITEMAP_EXCLUDE = [
  '/roles/developers/*',
  '/roles/developers',
  '/profile',
  '/home',
  'resources/uploads',
  '/unauthorized',
];

const fetchBlogEntries = async () => {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    console.warn('Notion env vars missing, skipping blog sitemap entries.');
    return [];
  }

  try {
    const notion = new Client({ auth: apiKey });
    const response = await notion.databases.query({ database_id: databaseId });

    return response.results
      .map((page) => {
        const properties = page.properties ?? {};
        const status = properties.Status?.select?.name;
        const publishedDate =
          properties['Publish Date']?.date?.start ||
          properties['Published Date']?.date?.start;
        const slug =
          properties.Slug?.rich_text?.[0]?.plain_text?.trim() || page.id;

        return {
          id: page.id,
          slug,
          status,
          lastmod: page.last_edited_time || publishedDate || page.created_time,
        };
      })
      .filter((post) => {
        if (!post.status) return true;
        return post.status.toLowerCase() === 'published';
      })
      .map((post) => ({
        loc: `/blogs/${encodeURIComponent(post.slug)}`,
        lastmod: post.lastmod,
        changefreq: 'monthly',
        priority: 0.6,
      }));
  } catch (error) {
    console.warn('Failed to fetch Notion blog posts for sitemap.', error);
    return [];
  }
};

const ensureConnection = async (mongoUrl) => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongoUrl, {
      maxPoolSize: 10,
      minPoolSize: 1,
      maxIdleTimeMS: 30000,
      bufferCommands: false,
    });
  } else if (mongoose.connection.readyState === 2) {
    // If connecting, wait for it to be ready
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (mongoose.connection.readyState === 1) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }
  return mongoose.connection;
};

const fetchPublicUserEntries = async () => {
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    console.warn('MONGO_URL is missing, skipping public user sitemap entries.');
    return [];
  }

  try {
    const connection = await ensureConnection(mongoUrl);
    if (!connection.db) return [];

    const users = await connection.db
      .collection('users')
      .find({}, { projection: { name: 1, updatedAt: 1, createdAt: 1 } })
      .toArray();

    return users
      .map((user) => {
        const name = typeof user?.name === 'string' ? user.name.trim() : '';
        if (!name) return null;
        const slug = name.replace(/\s+/g, '-');
        const lastmod = user.updatedAt || user.createdAt;

        return {
          loc: `/user/${encodeURIComponent(slug)}`,
          lastmod: lastmod ? new Date(lastmod).toISOString() : undefined,
          changefreq: 'weekly',
          priority: 0.4,
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.warn('Failed to fetch public users for sitemap.', error);
    return [];
  }
};

const fetchPublicProblemEntries = async () => {
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    console.warn('MONGO_URL is missing, skipping public problem sitemap entries.');
    return [];
  }

  try {
    const connection = await ensureConnection(mongoUrl);
    if (!connection.db) return [];

    const problems = await connection.db
      .collection('questions')
      .find({}, { projection: { _id: 1, updatedAt: 1, createdAt: 1 } })
      .toArray();

    return problems
      .map((problem) => ({
        loc: `/problems/${problem._id.toString()}`,
        lastmod: (problem.updatedAt || problem.createdAt) ? new Date(problem.updatedAt || problem.createdAt).toISOString() : undefined,
        changefreq: 'weekly',
        priority: 0.8,
      }));
  } catch (error) {
    console.warn('Failed to fetch public problems for sitemap.', error);
    return [];
  }
};


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://flagforge.xyz';

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  autoLastmod: false,
  exclude: SITEMAP_EXCLUDE,
  additionalPaths: async () => {
    const [blogEntries, userEntries, problemEntries] = await Promise.all([
      fetchBlogEntries(),
      fetchPublicUserEntries(),
      fetchPublicProblemEntries(),
    ]);

    // Disconnect after all fetches are done
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }

    return [...blogEntries, ...userEntries, ...problemEntries];
  },
  transform: async (config, path) => {
    // Custom priority for landing and global pages
    let priority = config.priority;
    if (path === '/') {
      priority = 1.0;
    } else if (['/about', '/contact', '/blogs', '/authentication', '/resources', '/problems', '/leaderboard', '/archives', '/event-scoreboards'].includes(path)) {
      priority = 0.9;
    }

    const lastmod = routeLastmod.get(path);

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: lastmod ?? undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt'],
        disallow: SITEMAP_EXCLUDE,
      }
    ],
    additionalSitemaps: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap1.xml`,
      `${SITE_URL}/sitemap.txt`,
    ],
  },
};
