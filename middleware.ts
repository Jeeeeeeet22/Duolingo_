import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    /**
     * Match everything except:
     * - Next.js internals like /_next
     * - Static assets like .js, .css, .png, etc.
     * - Stripe webhook route (excluded from Clerk)
     */
    '/((?!_next|.*\\.(?:js|css|png|jpg|jpeg|svg|ico|woff|woff2|ttf|eot)|api/webhooks/stripe).*)',
    // Always match other API routes
    '/(api|trpc)(.*)',
  ],
};
