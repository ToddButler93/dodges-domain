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
import { Separator } from "./ui/separator";

const serverTypeColors: Record<string, string> = {
  CTF: "bg-blue-600",
  CTFBlitz: "bg-teal-600",
  Arena: "bg-orange-600",
  CAH: "bg-green-600",
  TDM: "bg-pink-600",
  Rabbit: "bg-purple-600",
};

export default async function ServerBrowserComponent() {
  const sortedPugServers = await getPUGLoginData();

  const sortedCommunityServers = await getCommunityLoginData();

  if (sortedPugServers == null && sortedCommunityServers == null)
    return <div>The login servers are currently unavailable.</div>;

  return (
    <>
      {sortedPugServers || sortedCommunityServers ? (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Card className="grow p-6 text-center">
              <h1>PUG Login Server</h1>
            </Card>
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
                        className={
                          serverTypeColors[server.type] ?? "bg-red-600"
                        }
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
          </div>
          <Separator />
          <div className="flex flex-col gap-3">
            <Card className="grow pb-3 pt-6 text-center">
              <h1>Community Login Server</h1>
            </Card>
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
                        className={
                          serverTypeColors[server.type] ?? "bg-red-600"
                        }
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
          </div>
        </div>
      ) : (
        <Card>Loading...</Card>
      )}
    </>
  );
}
