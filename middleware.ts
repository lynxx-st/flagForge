import { NextRequest, NextResponse } from 'next/server';
import { tokenBlacklistMiddleware } from './middleware/tokenBlacklist';
import { adminMiddleware } from './middleware/adminToken';

export async function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  // A robust Content Security Policy with nonce-based script execution and strict-dynamic handling.
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://va.vercel-scripts.com;
    style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://lh3.googleusercontent.com https://prod-files-secure.s3.us-west-2.amazonaws.com https://*.cdninstagram.com https://*.fbcdn.net https://pagead2.googlesyndication.com https://www.google.com;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com https://stats.g.doubleclick.net https://*.vercel-analytics.com;
    frame-src 'self' https://googleads.g.doubleclick.net https://accounts.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
  `;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set(
    'Content-Security-Policy',
    cspHeader.replace(/\s{2,}/g, ' ').trim()
  );

  const { pathname } = request.nextUrl;

  const blacklistResponse = await tokenBlacklistMiddleware(request);
  if (blacklistResponse && blacklistResponse instanceof NextResponse) {
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
    if (adminResponse && adminResponse instanceof NextResponse) {
      return adminResponse;
    }
  }

  // Continue with the modified headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  requestHeaders.forEach((value, key) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};
