import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/decide(.*)',
  // '/registration-form(.*)',
  '/certificate(.*)',
  '/meeting(.*)',
  '/profile(.*)',
  '/certificate(.*)',
  
]);

export default clerkMiddleware((auth, req) => {


  if (!auth().userId && isProtectedRoute(req)) {

    // Add custom logic to run before redirecting

    return auth().redirectToSignIn();
  }

});

export const config = { matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']};