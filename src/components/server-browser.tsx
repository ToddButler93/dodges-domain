import type { Key } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  type ServerInfo,
  getCommunityLoginData,
  getPUGLoginData,
} from "~/server/api/loginServers";
import Image from "next/image";
import { mapToImageName } from "~/server/utils/mapFileName";

const serverTypeColors: Record<string, string> = {
  CTF: "bg-blue-600",
  CTFBlitz: "bg-teal-600",
  Arena: "bg-orange-600",
  CAH: "bg-green-600",
  TDM: "bg-pink-600",
  Rabbit: "bg-purple-600",
};
export async function ServerBrowserCommunity() {
  const sortedCommunityServers = await getCommunityLoginData();

  if (sortedCommunityServers == null)
    return <div>The Community login server is currently unavailable.</div>;

  return (
    <>
      {sortedCommunityServers ? (
        <div className="grid grid-cols-1 gap-3 transition-all sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {sortedCommunityServers
            .filter((server: ServerInfo) => server.name && server.map)
            .map(async (server: ServerInfo, index: Key) => (
              <Card
                className="relative flex flex-col gap-3 rounded-xl pb-3 shadow"
                key={index}
              >
                <div className="absolute left-3 top-3">
                  <Badge
                    className={serverTypeColors[server.type] ?? "bg-red-600"}
                  >
                    {server.type}
                  </Badge>
                </div>
                <div className="absolute right-3 top-3">
                  {server.players && server.players.length > 0 ? (
                    <Badge className="bg-teal-600">
                      Players: {server.players.length}
                    </Badge>
                  ) : (
                    <Badge className="bg-red-600">Players: 0</Badge>
                  )}
                </div>
                <div>
                  <Image
                    width={1500}
                    height={1500}
                    alt={server.map}
                    className="rounded-xl"
                    src={await mapToImageName(server.map)}
                  />
                </div>
                <p className="pe-3 ps-3 text-lg">{server.name}</p>
                <p className="pe-3 ps-3 text-sm">{server.map}</p>
              </Card>
            ))}
        </div>
      ) : (
        <Card>Loading...</Card>
      )}
    </>
  );
}

export default async function ServerBrowserPUG() {
  const sortedPugServers = await getPUGLoginData();

  if (sortedPugServers == null)
    return <div>The PUG login server is currently unavailable.</div>;

  return (
    <>
      {sortedPugServers ? (
        <div className="grid grid-cols-1 gap-3 transition-all sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {sortedPugServers
            .filter((server: ServerInfo) => server.name && server.map)
            .map(async (server: ServerInfo, index: Key) => (
              <Card
                className="relative flex flex-col gap-3 rounded-xl pb-3 shadow"
                key={index}
              >
                <div className="absolute left-3 top-3">
                  <Badge
                    className={serverTypeColors[server.type] ?? "bg-red-600"}
                  >
                    {server.type}
                  </Badge>
                </div>
                <div className="absolute right-3 top-3">
                  {server.players && server.players.length > 0 ? (
                    <Badge className="bg-teal-600">
                      Players: {server.players.length}
                    </Badge>
                  ) : (
                    <Badge className="bg-red-600">Players: 0</Badge>
                  )}
                </div>
                <div>
                  <Image
                    width={1500}
                    height={1500}
                    alt={server.map}
                    className="rounded-xl"
                    src={await mapToImageName(server.map)}
                  />
                </div>
                <p className="pe-3 ps-3 text-lg">{server.name}</p>
                <p className="pe-3 ps-3 text-sm">{server.map}</p>
              </Card>
            ))}
        </div>
      ) : (
        <Card>Loading...</Card>
      )}
    </>
  );
}
