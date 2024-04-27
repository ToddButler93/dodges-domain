import type { Key } from "react";
import {
  getMatchHistory,
  type MatchInfo,
  type Player,
} from "~/server/api/matchHistory";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default async function MatchHistoryComponent() {
  const currentUnixTimeSeconds =
    Math.floor(new Date().getTime()) - 30 * 24 * 60 * 60 * 1000;

  console.log(currentUnixTimeSeconds);

  const matchHistory = await getMatchHistory();

  if (matchHistory == null)
    return <div>Match History currently unavailable.</div>;

  // Use matchHistory data to render your component
  return (
    <>
      {matchHistory ? (
        <div className="max-w-8xl flex flex-col gap-6 py-6">
          <div className="gap-3 p-6 shadow-md">
            <h1 className="pb-6 text-center">Match History</h1>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {matchHistory.reverse().map((match: MatchInfo, index: Key) => (
                <Card className="shadow-md" key={index}>
                  <Image
                    src="/static/img/maps/acheron-river.png"
                    width={500}
                    height={500}
                    className="grow rounded-md p-3"
                    alt={""}
                  />
                  <div className="grid grid-flow-col justify-between">
                    <>
                      {match.queue.name === "PUGz" ? (
                        <Badge className="text-teal-500">PUG</Badge>
                      ) : match.queue.name === "2v2" ? (
                        <Badge className="text-orange-500">2v2</Badge>
                      ) : match.queue.name === "lag2v2" ? (
                        <Badge className="text-blue-500">Lag 2v2</Badge>
                      ) : match.queue.name === "OvD" ? (
                        <Badge className="text-purple-500">OvD</Badge>
                      ) : (
                        <Badge className="text-red-500">2v2</Badge>
                      )}
                      <Badge className="text-black-500">
                        {new Date(match.completionTimestamp).toLocaleString()}
                      </Badge>
                    </>
                  </div>

                  <div className="grid">
                    <>
                      {match.winningTeam !== 0 ? (
                        <>
                          <div className="col-span-6 bg-green-800 bg-opacity-50 p-3 backdrop-blur-sm">
                            <>
                              {match.players.map(
                                (player: Player, index: Key) =>
                                  player.team === match.winningTeam ? (
                                    <>
                                      <p key={index}>
                                        <>
                                          {player.captain === 1 && (
                                            <strong className=" text-slate-50">
                                              {player.user.name} (c)
                                            </strong>
                                          )}
                                          {player.captain !== 1 && (
                                            <span className=" text-slate-50">
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
                              {match.players.map(
                                (player: Player, index: Key) =>
                                  player.team === match.winningTeam ? (
                                    <></>
                                  ) : (
                                    <>
                                      <p key={index}>
                                        <>
                                          {player.captain === 1 && (
                                            <strong className=" text-slate-50">
                                              {player.user.name} (c)
                                            </strong>
                                          )}
                                          {player.captain !== 1 && (
                                            <span className=" text-slate-50">
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
                              {match.players.map(
                                (player: Player, index: Key) =>
                                  player.team === 1 ? (
                                    <>
                                      <p key={index}>
                                        <>
                                          {player.captain === 1 && (
                                            <strong className=" text-slate-50">
                                              {player.user.name} (c)
                                            </strong>
                                          )}
                                          {player.captain !== 1 && (
                                            <span className=" text-slate-50">
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
                              {match.players.map(
                                (player: Player, index: Key) =>
                                  player.team === 1 ? (
                                    <></>
                                  ) : (
                                    <>
                                      <p key={index}>
                                        <>
                                          {player.captain === 1 && (
                                            <strong className=" text-slate-50">
                                              {player.user.name} (c)
                                            </strong>
                                          )}
                                          {player.captain !== 1 && (
                                            <span className=" text-slate-50">
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
          </div>
        </div>
      ) : (
        <Card>Loading...</Card>
      )}
    </>
  );
}
