import { NextRequest, NextResponse } from 'next/server';
import { tokenBlacklistMiddleware } from './middleware/tokenBlacklist';
import { adminMiddleware } from './middleware/adminToken';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Run security checks first. If they return a response, we stop processing.
  const blacklistResponse = await tokenBlacklistMiddleware(request);
  if (blacklistResponse) return blacklistResponse;

  if (
    pathname.startsWith('/api/admin') ||
    pathname.startsWith('/roles/developers/admins') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api/badges') ||
    pathname.startsWith('/api/badge-templates') ||
    pathname.startsWith('/resources/upload')
  ) {
    const adminResponse = await adminMiddleware(request);
    // The admin middleware can return a redirect or an error, which we should respect.
    // If its status is 200, it's a signal to continue, so we fall through.
    if (adminResponse && adminResponse.status !== 200) {
      return adminResponse;
    }
  }

  // If all checks passed, prepare the response and add security headers.
  const response = NextResponse.next();

  const csp = [
    "default-src 'self'",
    // Vercel Analytics and Google Fonts require specific loosening of the policy.
    "script-src 'self' 'unsafe-inline' https://vercel.live",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data: https://*.googleusercontent.com", // For Google avatars
    "font-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "connect-src 'self' https://vitals.vercel-insights.com/v1/vitals https://vercel.live",
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Permissions-Policy', "camera=(), microphone=(), geolocation=()");

  return response;
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};
