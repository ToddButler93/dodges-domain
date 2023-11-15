"use client";
import Head from "next/head";
import Link from "next/link";
import { Image, SimpleGrid, Card, Button } from "@mantine/core";

export default function CustomMaps() {
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
      <h1 className="py-6 text-6xl">Community Maps</h1>
      <Button
        component={Link}
        href="/docs/guide-install-setup"
        size="xl"
        radius="xl"
        styles={{
          root: { backgroundColor: "teal" },
          label: { color: "white" },
          inner: { fontSize: 24 },
        }}
      >
        Install Community Maps
      </Button>
      <div className="max-w-8xl py-3 text-center text-6xl" color="green">
        <h1 className="py-6">CTF</h1>
      </div>

      <SimpleGrid cols={{ base: 1, sm:2, md: 3, xl:4 }} className="gap-6 p-6">
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Acheron</p>
          <Image alt="" radius="md" src="/static/img/maps/acheron-river.png" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Andromeda</p>
          <Image alt="" radius="md" src="/static/img/maps/andromeda2.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Ascent</p>
          <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Blues</p>
          <Image alt="" radius="md" src="/static/img/maps/blues-v011.jpeg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Crash</p>
          <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Deserted Valley</p>
          <Image
            alt=""
            radius="md"
            src="/static/img/maps/deserted-valley-overview.png"
          />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Eclipse</p>
          <Image alt="" radius="md" src="/static/img/maps/eclipse2.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Fracture</p>
          <Image alt="" radius="md" src="/static/img/maps/fra.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Incidamus</p>
          <Image alt="" radius="md" src="/static/img/maps/incid.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Meridian</p>
          <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Oceanus</p>
          <Image alt="" radius="md" src="/static/img/maps/oce.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Periculo</p>
          <Image
            alt=""
            radius="md"
            src="/static/img/maps/periculo-features.png"
          />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Phlegethon</p>
          <Image
            alt=""
            radius="md"
            src="/static/img/maps/phlegathon-river.png"
          />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Polaris</p>
          <Image alt="" radius="md" src="/static/img/maps/polaris2.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Styx</p>
          <Image alt="" radius="md" src="/static/img/maps/sty.jpg" />
        </Card>
      </SimpleGrid>
      <div className="max-w-8xl py-3 text-center text-6xl" color="green">
        <h1 className="py-6">Arena</h1>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} className=" gap-6 p-6">
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Elysian Battleground</p>
          <Image alt="" radius="md" src="/static/img/maps/eb.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Ruins</p>
          <Image alt="" radius="md" src="/static/img/maps/ruins2.jpg" />
        </Card>
      </SimpleGrid>

      <div className="max-w-8xl py-3 text-center text-6xl" color="green">
        <h1 className="py-6">CTF Blitz</h1>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} className=" gap-6 p-6">
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Broadside</p>
          <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Air Arena</p>
          <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
        </Card>
      </SimpleGrid>

      <div className="max-w-8xl py-3 text-center text-6xl" color="green">
        <h1 className="py-6">Miscellaneous Maps</h1>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} className=" gap-6 p-6">
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Treacherous Pass</p>
          <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
        </Card>
        <Card className="mx-auto max-w-xl">
          <p className=" text-center text-3xl">Maze Runner</p>
          <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
        </Card>
      </SimpleGrid>
    </>
  );
}
