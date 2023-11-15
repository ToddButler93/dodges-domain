import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { matchHistoryRouter } from "./routers/matchHistory";
import { loginServerRouter } from "./routers/loginServers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  matches: matchHistoryRouter,
  pugLoginData: loginServerRouter,
  communityLoginData: loginServerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
