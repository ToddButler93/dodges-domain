import { authMiddleware } from "@clerk/nextjs";
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  //TODO setup public/private pages
  publicRoutes: [
    "/",
    "/api/trpc/post.getAll",
    "/docs/guide-install-setup",
    "/docs/custommaps",
  ],
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
