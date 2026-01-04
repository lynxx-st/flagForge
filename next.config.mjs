/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['writeup.flagforge.xyz', 'flagforge.xyz', 'github.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://flagforge.xyz",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // 🛡️ Sentinel: Re-enabled Content-Security-Policy.
          // 'unsafe-inline' for styles and 'unsafe-eval' for scripts are required for Next.js dev mode and some libraries.
          // This is a significant improvement over no CSP, but should be hardened further in the future by removing them.
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https://lh3.googleusercontent.com https://prod-files-secure.s3.us-west-2.amazonaws.com data:; font-src 'self'; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=(), payment=()",
          },
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Server",
            value: "",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
