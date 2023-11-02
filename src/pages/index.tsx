import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Card, Grid, Flex, Button } from "@tremor/react";

import { api } from "~/utils/api";

export default function Home() {
  const { data } = api.post.getAll.useQuery();

  console.log(data);

  return (
    <>
      <Head>
        <title>Dodges Domain</title>
        <meta
          name="description"
          content="Dodges Domain, the output of his small brain."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex className="max-w-8xl flex flex-col gap-6 px-32 text-center text-6xl">
        {data?.map((post) => (
          <Card className="py-6 text-center" key={post.id}>
            {post.content}
          </Card>
        ))}
      </Flex>
      <Card
        className="max-w-8xl bg-black py-12 text-center text-6xl"
        color="green"
      >
        <h1 className="py-6">Dodge&apos;s Domain</h1>
        <Link href="/docs/guide-install-setup">
          <Button size="xl" color="teal">
            Install Tribes Ascend
          </Button>
        </Link>
      </Card>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className="mx-auto gap-6">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">
              Gameplay Guides
            </p>
            <Link href="/docs/gameplay/guide-quick">
              <video
                width="500px"
                height="auto"
                autoPlay={true}
                muted
                loop
                preload="metadata"
              >
                <source
                  src="/static/video/kata-ds-bounce.webm"
                  type="video/webm"
                ></source>
                Your browser does not support .webm video.
              </video>
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">
              Play Tribes Ascend
            </p>
            <Link href="/docs/guide-install-setup">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}

              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">
              Community Maps
            </p>
            <Link href="/docs/custommaps/">
              <Image
                src="/static/img/maps/acheron-spawn.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}

              />
            </Link>
          </Card>
        </Grid>
      </Flex>
    </>
  );
}
