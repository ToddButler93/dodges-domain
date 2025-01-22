import type { Key } from "react";
import {
  getMatchHistory,
  type MatchInfo,
  type Player,
} from "~/server/api/matchHistory";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import Image from "next/image";

export default async function MatchHistoryComponent() {
  const matchHistory = await getMatchHistory();

  if (matchHistory == null)
    return <div>Match History currently unavailable.</div>;

  // Use matchHistory data to render your component
  return (
    <>
      {matchHistory ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {matchHistory.reverse().map((match: MatchInfo, index: Key) => (
            <Card className="shadow-md" key={index}>
              <Image
                src="https://utfs.io/f/99f42db1-4d19-496a-9168-472d01d6327c-2cr5.jpg"
                width={500}
                height={500}
                className="grow rounded-md p-3"
                alt={""}
              />
              <div className="grid grid-flow-col justify-between px-3">
                  {match.queue.name === "PUGz" ? (
                    <Badge className="bg-teal-700">PUG</Badge>
                  ) : match.queue.name === "2v2" ? (
                    <Badge className="bg-orange-700">2v2</Badge>
                  ) : match.queue.name === "lag2v2" ? (
                    <Badge className="bg-blue-700">Lag 2v2</Badge>
                  ) : match.queue.name === "OvD" ? (
                    <Badge className="bg-purple-700">OvD</Badge>
                  ) : (
                    <Badge className="bg-red-700">2v2</Badge>
                  )}
                  <Badge className="dark:bg-zinc-200 bg-zinc-800 dark:text-zinc-800 text-zinc-200">
                    {new Date(match.completionTimestamp).toLocaleString()}
                  </Badge>
              </div>

              <div className="grid pt-3">
                <>
                  {match.winningTeam !== 0 ? (
                    <>
                      <div className="col-span-6 bg-green-800 bg-opacity-50 p-3 backdrop-blur-sm">
                        <>
                          {match.players.map((player: Player, index: Key) =>
                            player.team === match.winningTeam ? (
                              <>
                                <p key={index}>
                                  <>
                                    {player.captain === 1 && (
                                      <strong className=" dark:text-zinc-50">
                                        {player.user.name} (c)
                                      </strong>
                                    )}
                                    {player.captain !== 1 && (
                                      <span className=" dark:text-zinc-50">
                                        {player.user.name}
                                      </span>
                                    )}
                                  </>
                                </p>
                              </>
                            ) : (
                              <></>
                            ),
                          )}
                        </>
                      </div>
                      <div className="col-span-6 bg-red-800 bg-opacity-50 p-3 backdrop-blur-sm">
                        <>
                          {match.players.map((player: Player, index: Key) =>
                            player.team === match.winningTeam ? (
                              <></>
                            ) : (
                              <>
                                <p key={index}>
                                  <>
                                    {player.captain === 1 && (
                                      <strong className=" dark:text-zinc-50">
                                        {player.user.name} (c)
                                      </strong>
                                    )}
                                    {player.captain !== 1 && (
                                      <span className=" dark:text-zinc-50">
                                        {player.user.name}
                                      </span>
                                    )}
                                  </>
                                </p>
                              </>
                            ),
                          )}
                        </>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-span-6 bg-yellow-800 bg-opacity-50 p-3 backdrop-blur-sm">
                        <>
                          {match.players.map((player: Player, index: Key) =>
                            player.team === 1 ? (
                              <>
                                <p key={index}>
                                  <>
                                    {player.captain === 1 && (
                                      <strong className=" text-zinc-50">
                                        {player.user.name} (c)
                                      </strong>
                                    )}
                                    {player.captain !== 1 && (
                                      <span className=" text-zinc-50">
                                        {player.user.name}
                                      </span>
                                    )}
                                  </>
                                </p>
                              </>
                            ) : (
                              <></>
                            ),
                          )}
                        </>
                      </div>
                      <div className="col-span-6 bg-yellow-800 bg-opacity-50 p-3 backdrop-blur-sm">
                        <>
                          {match.players.map((player: Player, index: Key) =>
                            player.team === 1 ? (
                              <></>
                            ) : (
                              <>
                                <p key={index}>
                                  <>
                                    {player.captain === 1 && (
                                      <strong className=" text-zinc-50">
                                        {player.user.name} (c)
                                      </strong>
                                    )}
                                    {player.captain !== 1 && (
                                      <span className=" text-zinc-50">
                                        {player.user.name}
                                      </span>
                                    )}
                                  </>
                                </p>
                              </>
                            ),
                          )}
                        </>
                      </div>
                    </>
                  )}
                </>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>Loading...</Card>
      )}
    </>
  );
}
