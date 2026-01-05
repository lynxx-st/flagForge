import { NextRequest, NextResponse } from 'next/server';
import { tokenBlacklistMiddleware } from './middleware/tokenBlacklist';
import { adminMiddleware } from './middleware/adminToken';

export async function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Note: The `img-src` domains are derived from the `images` configuration in `next.config.mjs`.
  // If you change the image domains there, you must also update them here.
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}' 'unsafe-inline';
    img-src 'self' blob: data: writeup.flagforge.xyz flagforge.xyz github.com lh3.googleusercontent.com prod-files-secure.s3.us-west-2.amazonaws.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  // Create new request headers so we can pass the nonce to the server.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  // Check other middlewares first.
  const blacklistResponse = await tokenBlacklistMiddleware(request);
  if (blacklistResponse) {
    // If a middleware returns a response, we add the CSP header to it and return.
    blacklistResponse.headers.set('Content-Security-Policy', cspHeader);
    return blacklistResponse;
  }

  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith('/api/admin') ||
    pathname.startsWith('/roles/developers/admins') ||
    pathname.startsWith('/api/badges') ||
    pathname.startsWith('/api/badge-templates') ||
    pathname.startsWith('/resources/upload')
  ) {
    const adminResponse = await adminMiddleware(request);
    if (adminResponse) {
      adminResponse.headers.set('Content-Security-Policy', cspHeader);
      return adminResponse;
    }
  }

  // If no other middleware has returned a response, we're allowing the request to proceed.
  // We create a response that forwards the request with our modified headers (including the nonce).
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Finally, we set the CSP header on the response that will be sent to the client.
  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};
