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
      <Card
        className="max-w-8xl bg-black py-12 text-center text-6xl"
        color="green"
      >
        <h1 className="py-6">Gameplay Guides</h1>
        <Link href="/docs/gameplay/guide-quick/">
          <Button size="xl" color="teal">
            PUG Guide
          </Button>
        </Link>
      </Card>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className="mx-auto gap-6">
          <Link href="/docs/gameplay/guide-offense">
            <Card className="mx-auto max-w-xl">
              <p className=" text-center text-3xl text-slate-50">Offense</p>
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt="Picture of the author"
              />
            </Card>
          </Link>
          <Link href="/docs/gameplay/guide-cap">
            <Card className="mx-auto max-w-xl">
              <p className=" text-center text-3xl text-slate-50">Capping</p>
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
            </Card>
          </Link>
          <Link href="/docs/gameplay/guide-hof">
            <Card className="mx-auto max-w-xl">
              <p className=" text-center text-3xl text-slate-50">
                Heavy on Flag
              </p>
              <Image
                src="/static/img/maps/acheron-spawn.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt="Picture of the author"
              />
            </Card>
          </Link>
        </Grid>
      </Flex>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className=" mx-auto gap-6">
          <Link href="/docs/gameplay/guide-defense">
            <Card className="mx-auto max-w-xl">
              <p className=" text-center text-3xl text-slate-50">Defense</p>
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
            </Card>
          </Link>
          <Link href="/docs/gameplay/guide-snipe">
            <Card className="mx-auto max-w-xl">
              <p className=" text-center text-3xl text-slate-50">Snipe</p>
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt="Picture of the author"
              />
            </Card>
          </Link>
        </Grid>
      </Flex>
    </>
  );
}
