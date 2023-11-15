import Link from "next/link";

import { Button, Card, Group, SimpleGrid, Text } from "@mantine/core";

import Image from "next/image";

import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.post.getAll.query();

  console.log(data);

  return (
    <>
      <div className="relative">
        <Group
          mah={720}
          className="bg-hero-section flex w-screen items-center overflow-y-clip bg-cover bg-center bg-no-repeat"
        >
          <video
            width="100%"
            height="100%"
            autoPlay={true}
            muted
            loop
            preload="auto"
            playsInline
            className="content-center"
          >
            <source
              src="/static/video/kata-ds-bounce.webm"
              type="video/webm"
            ></source>
            Your browser does not support .webm video.
          </video>
          <Group className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              alt=""
              src="/static/img/tribes-ascend-logo.png"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
            <Button
              component={Link}
              href="/docs/guide-install-setup"
              size="xl"
              radius="xl"
            >
              Install Tribes Ascend
            </Button>
          </Group>
        </Group>
      </div>
      <SimpleGrid cols={{ base: 1, md: 3 }} className=" p-6 gap-6">
        <Card shadow="md" radius="md" className="grid grid-col items-center justify-center gap-3">
          <Text className=" text-center text-3xl">Gameplay Guides</Text>
          <Link href="/docs/gameplay/guide-quick">
            <video
              width="500px"
              height="auto"
              autoPlay={true}
              muted
              loop
              preload="auto"
            >
              <source
                src="/static/video/kata-ds-bounce.webm"
                type="video/webm"
              ></source>
              Your browser does not support .webm video.
            </video>
          </Link>
        </Card>
        <Card shadow="md" radius="md" className="grid grid-col items-center justify-center gap-3">
          <Text className=" text-center text-3xl">Map Development</Text>
          <Link href="/docs/development/guide-map-dev">
            <Image
              src="/static/img/maps/oce.jpg"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </Link>
        </Card>
        <Card shadow="md" radius="md" className="grid grid-col items-center justify-center gap-3">
          <Text className=" text-center text-3xl">Community Maps</Text>
          <Link href="/docs/custommaps/">
            <Image
              src="/static/img/maps/acheron-spawn.png"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </Link>
        </Card>
      </SimpleGrid>
      <div className="max-w-8xl flex flex-col py-6 pt-12 text-center ">
        <div className="max-w-8xl div div-col gap-6 px-32 text-center text-6xl">
          {data?.map((post) => (
            <div className="py-6 text-center" key={post.id}>
              {post.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
