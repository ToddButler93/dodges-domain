import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env.mjs";
export type Player = {
  user: User;
  team: number;
  captain: number;
  pickOrder: number;
};

export type Queue = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  name: string;
};

export type MatchInfo = {
  timestamp: number;
  completionTimestamp: number;
  winningTeam: number;
  name: string;
  queue: Queue;
  players: Player[];
};

async function getData<T>(url: string) {
  const res = await fetch(url, {
    next: { revalidate: 900 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // Handle non-2xx responses gracefully
    console.error(url + " is down");
    return null;
  }

  return res.json() as T;
}
export const matchHistoryRouter = createTRPCRouter({
  getMatches: publicProcedure.query(async () => {
    const matchHistoryURL = env.MATCH_HISTORY_URL;
    const currentUnixTimeSeconds =
      Math.floor(new Date().getTime()) - 30 * 24 * 60 * 60 * 1000;
    const matches = await getData<MatchInfo[]>(
      `${matchHistoryURL}${currentUnixTimeSeconds}`,
    );
    return matches;
  }),
});
