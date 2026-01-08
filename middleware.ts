import { NextRequest, NextResponse } from 'next/server';
import { tokenBlacklistMiddleware } from './middleware/tokenBlacklist';
import { adminMiddleware } from './middleware/adminToken';

export async function middleware(request: NextRequest) {
  // 1. Run essential security middleware first
  const blacklistResponse = await tokenBlacklistMiddleware(request);
  if (blacklistResponse && blacklistResponse instanceof NextResponse) {
    return blacklistResponse; // Return early for redirects
  }

  const { pathname } = request.nextUrl;

  // 2. Handle admin routes, which have their own security checks
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

  // 3. For all other pages, apply a strict Content Security Policy
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://accounts.google.com https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' https://lh3.googleusercontent.com https://prod-files-secure.s3.us-west-2.amazonaws.com data: https://pagead2.googlesyndication.com https://www.google.com https://*.cdninstagram.com https://*.fbcdn.net;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com https://stats.g.doubleclick.net https://*.vercel-analytics.com;
    frame-src 'self' https://googleads.g.doubleclick.net https://accounts.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
  `.replace(/\s{2,}/g, ' ').trim();

  // Create new headers to pass the nonce to server components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  // Create the final response with the modified request headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set the CSP on the response
  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};
