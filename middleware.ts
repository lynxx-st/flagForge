import { NextRequest, NextResponse } from 'next/server';
import { tokenBlacklistMiddleware } from './middleware/tokenBlacklist';
import { adminMiddleware } from './middleware/adminToken';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const blacklistResponse = await tokenBlacklistMiddleware(request);
  if (blacklistResponse instanceof NextResponse) {
    return blacklistResponse;
  }

  if (
    pathname.startsWith('/api/admin') ||
    pathname.startsWith('/roles/developers/admins') ||
    pathname.startsWith('/api/badges') ||
    pathname.startsWith('/api/badge-templates') ||
    pathname.startsWith('/resources/upload')
  ) {
    const adminResponse = await adminMiddleware(request);
    if (adminResponse instanceof NextResponse) {
      return adminResponse;
    }
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://accounts.google.com https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' https://lh3.googleusercontent.com https://prod-files-secure.s3.us-west-2.amazonaws.com data: https://pagead2.googlesyndication.com https://www.google.com https://*.cdninstagram.com https://*.fbcdn.net;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com https://stats.g.doubleclick.net https://*.vercel-analytics.com;
    frame-src 'self' https://googleads.g.doubleclick.net https://accounts.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
  `;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    'Content-Security-Policy',
    cspHeader.replace(/\s{2,}/g, ' ').trim()
  );

  return response;
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};
