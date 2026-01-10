import { NextRequest, NextResponse } from 'next/server';
import { tokenBlacklistMiddleware } from './middleware/tokenBlacklist';
import { adminMiddleware } from './middleware/adminToken';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const blacklistResponse = await tokenBlacklistMiddleware(request);
  if (blacklistResponse && blacklistResponse instanceof NextResponse) return blacklistResponse;

  if (
    pathname.startsWith('/api/admin') ||
    pathname.startsWith('/roles/developers/admins') ||
    pathname.startsWith('/api/badges') ||
    pathname.startsWith('/api/badge-templates') ||
    pathname.startsWith('/resources/upload')
  ) {
    const adminResponse = await adminMiddleware(request);
    if (adminResponse && adminResponse instanceof NextResponse) return adminResponse;
  }

  const response = NextResponse.next();

  // Add Content Security Policy
  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://accounts.google.com https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' https://lh3.googleusercontent.com https://prod-files-secure.s3.us-west-2.amazonaws.com data: https://pagead2.googlesyndication.com https://www.google.com https://*.cdninstagram.com https://*.fbcdn.net;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self' https://www.google-analytics.com https://stats.g.doubleclick.net https://*.vercel-analytics.com;
    frame-src 'self' https://googleads.g.doubleclick.net https://accounts.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
  `.replace(/\s{2,}/g, ' ').trim();
  response.headers.set('Content-Security-Policy', csp);

  // Other security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=()');

  return response;
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};
