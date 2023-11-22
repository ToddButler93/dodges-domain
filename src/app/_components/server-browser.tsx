import {
  Badge,
  Card,
  CardSection,
  Flex,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

import type { Key } from "react";
import type { ServerInfo } from "~/server/api/routers/loginServers";
import { api } from "~/trpc/server";

export default async function ServerBrowserComponent() {
  const sortedPugServers = await api.pugLoginData.getPUGLoginData.query();

  const sortedCommunityServers =
    await api.communityLoginData.getCommunityLoginData.query();

  if (sortedPugServers == null && sortedCommunityServers == null)
    return <div>The PUG login server is currently unavailable.</div>;

  return (
    <>
      {sortedPugServers || sortedCommunityServers ? (
        <Flex className="flex max-w-7xl flex-col gap-6 py-6">
          <Paper shadow="md" className="gap-3 p-3">
          <Title className=" pb-6 text-center">PUG Login Server</Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: "md" }}
            verticalSpacing={{ base: 10, sm: "md" }}
          >
            {sortedPugServers
              .filter((server: ServerInfo) => server.name && server.map)
              .map((server: ServerInfo, index: Key) => (
                <Card shadow="md" key={index}>
                  <CardSection>
                    <Image
                      alt=""
                      src="/static/img/maps/acheron-river.png"
                    />
                  </CardSection>
                  <Text fw={500} size="xl" mt="md">
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
          </SimpleGrid></Paper>
          <Paper shadow="md" className="gap-3 p-6">
          <Title className="pb-6 text-center">Community Login Server</Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: "md" }}
            verticalSpacing={{ base: 10, sm: "md" }}
          >
            {sortedCommunityServers
              .filter((server: ServerInfo) => server.name && server.map)
              .map((server: ServerInfo, index: Key) => (
                <Card shadow="md" key={index}>
                  <CardSection>
                    <Image
                      alt=""
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
          </SimpleGrid></Paper>
        </Flex>
      ) : (
        <Card>Loading...</Card>
      )}
    </>
  );
}
