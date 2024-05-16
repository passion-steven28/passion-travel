import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if (!auth().userId && isProtectedRoute(req)) {
        console.log(auth().userId, 'not logged in')
        // Add custom logic to run before redirecting

        return auth().redirectToSignIn();
    } else {
        console.log(auth().userId, 'logged in')
        // Add custom logic to run after redirecting
    }
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};