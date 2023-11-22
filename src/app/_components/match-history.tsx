import {
  BackgroundImage,
  Badge,
  Card,
  Flex,
  Grid,
  GridCol,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

import type { Key } from "react";
import type { MatchInfo, Player } from "~/server/api/routers/matchHistory";
import { api } from "~/trpc/server";

export default async function MatchHistoryComponent() {
  const currentUnixTimeSeconds =
    Math.floor(new Date().getTime()) - 30 * 24 * 60 * 60 * 1000;

  console.log(currentUnixTimeSeconds);

  const matchHistory = await api.matches.getMatches.query();

  if (matchHistory == null)
    return <div>Match History currently unavailable.</div>;

  // Use matchHistory data to render your component
  return (
    <>
      {matchHistory ? (
        <Flex className="flex max-w-8xl flex-col gap-6 py-6">
          <Paper shadow="md" className="gap-3 p-6">
          <Title className="pb-6 text-center">Match History</Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: "md" }}
            verticalSpacing={{ base: 10, sm: "md" }}
          >
            {matchHistory.reverse().map((match: MatchInfo, index: Key) => (
              <Card shadow="md" key={index}>
                <BackgroundImage
                  radius="md"
                  src="/static/img/maps/acheron-river.png"
                  className="p-3 grow"
                >
                  <Group
                    className="grid grid-flow-col justify-between"
                    mt="md"
                    mb="xs"
                  >
                    <>
                      {match.queue.name === "PUGz" ? (
                        <Badge bg={"teal"} variant="dark">
                          PUG
                        </Badge>
                      ) : match.queue.name === "2v2" ? (
                        <Badge bg={"orange"} variant="dark">
                          2v2
                        </Badge>
                      ) : match.queue.name === "lag2v2" ? (
                        <Badge bg={"blue"} variant="dark">
                          Lag 2v2
                        </Badge>
                      ) : match.queue.name === "OvD" ? (
                        <Badge bg={"purple"} variant="dark">
                          OvD
                        </Badge>
                      ) : (
                        <Badge bg={"red"} variant="dark">
                          2v2
                        </Badge>
                      )}
                      <Badge bg={"black"} variant="dark">
                        {new Date(match.completionTimestamp).toLocaleString()}
                      </Badge>
                    </>
                  </Group>

                  <Grid>
                    <>
                      {match.winningTeam !== 0 ? (
                        <>
                          <GridCol
                            span={6}
                            className="bg-green-800 bg-opacity-50 p-3 backdrop-blur-sm"
                          >
                            <>
                              {match.players.map(
                                (player: Player, index: Key) =>
                                  player.team === match.winningTeam ? (
                                    <>
                                      <Text variant="dark" key={index}>
                                        <>
                                          {player.captain === 1 && (
                                            <strong className=" text-slate-50">
                                              {player.user.name} (c)
                                            </strong>
                                          )}
                                          {player.captain !== 1 && (
                                            <span className=" text-slate-50">{player.user.name}</span>
                                          )}
                                        </>
                                      </Text>
                                    </>
                                  ) : (
                                    <></>
                                  ),
                              )}
                            </>
                          </GridCol>
                          <GridCol
                            span={6}
                            className="bg-red-800 bg-opacity-50 p-3 backdrop-blur-sm"
                          >
                            <>
                              {match.players.map(
                                (player: Player, index: Key) =>
                                  player.team === match.winningTeam ? (
                                    <></>
                                  ) : (
                                    <>
                                      <Text variant="dark" key={index}>
                                        <>
                                          {player.captain === 1 && (
                                            <strong  className=" text-slate-50">
                                              {player.user.name} (c)
                                            </strong>
                                          )}
                                          {player.captain !== 1 && (
                                            <span className=" text-slate-50">{player.user.name}</span>
                                          )}
                                        </>
                                      </Text>
                                    </>
                                  ),
                              )}
                            </>
                          </GridCol>
                        </>
                      ) : (
                        <>
                          <GridCol
                            span={6}
                            className="bg-yellow-800 bg-opacity-50 p-3 backdrop-blur-sm"
                          >
                            <>
                              {match.players.map(
                                (player: Player, index: Key) =>
                                  player.team === 1 ? (
                                    <>
                                      <Text variant="dark" key={index}>
                                        <>
                                          {player.captain === 1 && (
                                            <strong className=" text-slate-50">
                                              {player.user.name} (c)
                                            </strong>
                                          )}
                                          {player.captain !== 1 && (
                                            <span className=" text-slate-50">{player.user.name}</span>
                                          )}
                                        </>
                                      </Text>
                                    </>
                                  ) : (
                                    <></>
                                  ),
                              )}
                            </>
                          </GridCol>
                          <GridCol
                            span={6}
                            className="bg-yellow-800 bg-opacity-50 p-3 backdrop-blur-sm"
                          >
                            <>
                              {match.players.map(
                                (player: Player, index: Key) =>
                                  player.team === 1 ? (
                                    <></>
                                  ) : (
                                    <>
                                      <Text variant="dark" key={index}>
                                        <>
                                          {player.captain === 1 && (
                                            <strong className=" text-slate-50">
                                              {player.user.name} (c)
                                            </strong>
                                          )}
                                          {player.captain !== 1 && (
                                            <span className=" text-slate-50">{player.user.name}</span>
                                          )}
                                        </>
                                      </Text>
                                    </>
                                  ),
                              )}
                            </>
                          </GridCol>
                        </>
                      )}
                    </>
                  </Grid>
                </BackgroundImage>
              </Card>
            ))}
          </SimpleGrid>
        </Paper></Flex>
      ) : (
        <Card>Loading...</Card>
      )}
    </>
  );
}
