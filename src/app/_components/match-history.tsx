import {
  BackgroundImage,
  Badge,
  Card,
  Flex,
  Grid,
  GridCol,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

import type { Key } from "react";

type Player = {
  user: User;
  team: number;
  captain: number;
  pickOrder: number;
};

type Queue = {
  id: number;
  name: string;
};

type User = {
  id: number;
  name: string;
};

type MatchInfo = {
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

export default async function MatchHistoryComponent() {
  const currentUnixTimeSeconds =
    Math.floor(new Date().getTime()) - 30 * 24 * 60 * 60 * 1000;

  console.log(currentUnixTimeSeconds);

  const matchHistory = await getData<MatchInfo[]>(
    `http://50.116.36.119/api/server/631438713183797258/games/${currentUnixTimeSeconds}`,
  );

  if (matchHistory == null)
    return <div>Match History currently unavailable.</div>;

  // Use matchHistory data to render your component
  return (
    <>
      {matchHistory ? (
        <Flex className="flex max-w-6xl flex-col">
          <Title className="p-6 text-center">Match History</Title>
          <SimpleGrid
            cols={{ base: 1, sm: 1, lg: 1 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {matchHistory.reverse().map((match: MatchInfo, index: Key) => (
              <Card key={index}>
                <BackgroundImage
                  radius="md"
                  src="/static/img/maps/acheron-river.png"
                  className="p-3"
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
                    </>
                  </Group>

                  <Grid>
                    <>
                      {" "}
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
                                            <span>{player.user.name} (c)</span>
                                          )}
                                          {player.captain !== 1 && (
                                            <span>{player.user.name}</span>
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
                                            <span>{player.user.name} (c)</span>
                                          )}
                                          {player.captain !== 1 && (
                                            <span>{player.user.name}</span>
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
                                            <span>{player.user.name} (c)</span>
                                          )}
                                          {player.captain !== 1 && (
                                            <span>{player.user.name}</span>
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
                                            <span>{player.user.name} (c)</span>
                                          )}
                                          {player.captain !== 1 && (
                                            <span>{player.user.name}</span>
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
        </Flex>
      ) : (
        <Card>Loading...</Card>
      )}
    </>
  );
}
