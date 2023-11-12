import {
  Badge,
  Card,
  CardSection,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

import type { Key } from "react";

type ServerInfo = {
  locked: boolean;
  map: string;
  mode: string;
  name: string;
  players: string[];
  type: string;
};

type LoginServerInfo = {
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

export default async function ServerBrowserComponent() {
  const pugLoginData = await getData<LoginServerInfo>(
    "http://ta.dodgesdomain.com:9080/detailed_status",
  );

  const communityLoginData = await getData<LoginServerInfo>(
    "http://ta.kfk4ever.com:9080/detailed_status",
  );

  if (pugLoginData == null && communityLoginData == null)
    return <div>The PUG login server is currently unavailable.</div>;

  const sortedPugServers = sortByPlayers(
    pugLoginData?.online_servers_list ?? [],
  );

  const sortedCommunityServers = sortByPlayers(
    communityLoginData?.online_servers_list ?? [],
  );
  return (
    <>
      {sortedPugServers || sortedCommunityServers ? (
        <Flex className="flex max-w-6xl flex-col">
          <Title className="p-6 text-center">PUG Login Server</Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {sortedPugServers
              .filter((server: ServerInfo) => server.name && server.map)
              .map((server: ServerInfo, index: Key) => (
                <Card key={index}>
                  <CardSection>
                    <Image
                      alt=""
                      radius="md"
                      src="/static/img/maps/acheron-river.png"
                    />
                  </CardSection>
                  <Text fw={500} size="lg" mt="md">
                    {server.name}
                  </Text>
                  <Text fw={500}>
                    {server.type} | {server.map}
                  </Text>
                  <Group className="grid grid-flow-col" mt="md" mb="xs">
                    <Badge color="pink" variant="light">
                      PUG
                    </Badge>
                    {server.players && server.players.length > 0 ? (
                      <>
                        <Badge color="teal" variant="light">
                          Players: {server.players.length}
                        </Badge>
                      </>
                    ) : (
                      <Badge color="red" variant="light">
                        Players: 0
                      </Badge>
                    )}
                  </Group>
                </Card>
              ))}
          </SimpleGrid>
          <Title className="p-6 text-center">Community Login Server</Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {sortedCommunityServers
              .filter((server: ServerInfo) => server.name && server.map)
              .map((server: ServerInfo, index: Key) => (
                <Card key={index}>
                  <CardSection>
                    <Image
                      alt=""
                      radius="md"
                      src="/static/img/maps/acheron-river.png"
                    />
                  </CardSection>
                  <Text fw={500} size="lg" mt="md">
                    {server.name}
                  </Text>
                  <Text fw={500}>
                    {server.type} | {server.map}
                  </Text>
                  <Group
                    justify="space-between"
                    className="grid grid-flow-col"
                    mt="md"
                    mb="xs"
                  >
                    <Badge color="blue" variant="light">
                      Community
                    </Badge>
                    {server.players && server.players.length > 0 ? (
                      <>
                        <Badge color="teal" variant="light">
                          Players: {server.players.length}
                        </Badge>
                      </>
                    ) : (
                      <Badge color="red" variant="light">
                        Players: 0
                      </Badge>
                    )}
                  </Group>
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
