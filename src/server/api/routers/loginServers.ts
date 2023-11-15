import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type ServerInfo = {
  locked: boolean;
  map: string;
  mode: string;
  name: string;
  players: string[];
  type: string;
};

export type LoginServerInfo = {
  online_players_list: string[];
  online_servers_list: ServerInfo[];
};

async function getData<T>(url: string) {
  const res = await fetch(url, {
    next: { revalidate: 15 },
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

function sortByPlayers(serverList: ServerInfo[]): ServerInfo[] {
  return [...serverList].sort(
    (a, b) => (b.players?.length || 0) - (a.players?.length || 0),
  );
}
export const loginServerRouter = createTRPCRouter({
  getPUGLoginData: publicProcedure.query(async () => {
    const pugLoginData = await getData<LoginServerInfo>(
      "http://ta.dodgesdomain.com:9080/detailed_status",
    );

    const sortedPugServers = sortByPlayers(
      pugLoginData?.online_servers_list ?? [],
    );

    return sortedPugServers;
  }),
  getCommunityLoginData: publicProcedure.query(async () => {
    const communityLoginData = await getData<LoginServerInfo>(
      "http://ta.kfk4ever.com:9080/detailed_status",
    );
    const sortedCommunityServers = sortByPlayers(
      communityLoginData?.online_servers_list ?? [],
    );
    return sortedCommunityServers;
  }),
});
