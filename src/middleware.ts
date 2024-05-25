import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { registerUser } from "./app/_server/registerUser";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if (!auth().userId && isProtectedRoute(req)) {
        // Add custom logic to run before redirecting
        console.log(auth().userId, 'not logged in')

        return auth().redirectToSignIn();
    } else {
        // Add custom logic to run after redirecting
        console.log(auth().userId, 'logged in')
        registerUser();
    }
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};