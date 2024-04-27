import type { Key } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  type ServerInfo,
  getCommunityLoginData,
  getPUGLoginData,
} from "~/server/api/loginServers";
import Image from "next/image";

export default async function ServerBrowserComponent() {
  const sortedPugServers = await getPUGLoginData();

  const sortedCommunityServers = await getCommunityLoginData();

  if (sortedPugServers == null && sortedCommunityServers == null)
    return <div>The PUG login server is currently unavailable.</div>;

  return (
    <>
      {sortedPugServers || sortedCommunityServers ? (
        <div className="flex max-w-7xl flex-col gap-6 py-6">
          <div className="gap-3 p-3 shadow">
            <h1 className=" p-center pb-6">PUG Login Server</h1>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
              {sortedPugServers
                .filter((server: ServerInfo) => server.name && server.map)
                .map((server: ServerInfo, index: Key) => (
                  <Card className="shadow" key={index}>
                    <div>
                      <Image
                        width={500}
                        height={500}
                        alt=""
                        src="/static/img/maps/oce.jpg"
                      />
                    </div>
                    <p>{server.name}</p>
                    <p>
                      {server.type} | {server.map}
                    </p>
                    <div className="grid grid-flow-col">
                      <Badge color="pink">PUG</Badge>
                      {server.players && server.players.length > 0 ? (
                        <>
                          <Badge color="teal">
                            Players: {server.players.length}
                          </Badge>
                        </>
                      ) : (
                        <Badge color="red">Players: 0</Badge>
                      )}
                    </div>
                  </Card>
                ))}
            </div>
          </div>
          <div className="gap-3 p-6 shadow">
            <h1 className="p-center pb-6">Community Login Server</h1>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 "></div>
            {sortedCommunityServers
              .filter((server: ServerInfo) => server.name && server.map)
              .map((server: ServerInfo, index: Key) => (
                <Card key={index}>
                  <div>
                    <Image
                      width={500}
                      height={500}
                      alt=""
                      src="/static/img/maps/oce.jpg"
                    />
                  </div>
                  <p>{server.name}</p>
                  <p>
                    {server.type} | {server.map}
                  </p>
                  <div className="grid grid-flow-col justify-between">
                    <Badge color="blue">Community</Badge>
                    {server.players && server.players.length > 0 ? (
                      <>
                        <Badge color="teal">
                          Players: {server.players.length}
                        </Badge>
                      </>
                    ) : (
                      <Badge color="red">Players: 0</Badge>
                    )}
                  </div>
                </Card>
              ))}
          </div>
        </div>
      ) : (
        <Card>Loading...</Card>
      )}
    </>
  );
}
