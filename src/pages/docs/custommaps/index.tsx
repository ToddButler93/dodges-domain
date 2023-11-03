import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Card, Grid, Flex, Button } from "@tremor/react";

import { api } from "~/utils/api";

export default function CustomMaps() {
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
        <h1 className="py-6">Community Maps</h1>
        <Link href="/docs/guide-install-setup">
          <Button size="xl" color="teal">
            Install Community Maps
          </Button>
        </Link>
      </Card>
      <Card
        className="max-w-8xl bg-black py-3 text-center text-6xl"
        color="green"
      >
        <h1 className="py-6">CTF</h1>
      </Card>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className="mx-auto gap-6">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Acheron</p>
            <Link href="/docs/custommaps/trctf-acheron">
              <Image
                src="/static/img/maps/acheron-river.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Andromeda</p>
            <Link href="/docs/custommaps/trctf-andromeda">
              <Image
                src="/static/img/maps/andromeda.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Ascent</p>
            <Link href="/docs/custommaps/trctf-ascent">
              <Image
                src="/static/img/maps/ascent2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
        </Grid>
      </Flex>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className=" mx-auto gap-6">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Blues</p>
            <Link href="/docs/custommaps/trctf-blues">
              <Image
                src="/static/img/maps/blues-v011.jpeg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Crash</p>
            <Link href="/docs/custommaps/trctf-crash">
              <Image
                src="/static/img/maps/ascent2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">
              Deserted Valley
            </p>
            <Link href="/docs/custommaps/trctf-desertedvalley">
              <Image
                src="/static/img/maps/deserted-valley-overview.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
        </Grid>
      </Flex>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className=" mx-auto gap-6">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Eclipse</p>
            <Link href="/docs/custommaps/trctf-eclipse">
              <Image
                src="/static/img/maps/eclipse.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Fracture</p>
            <Link href="/docs/custommaps/trctf-fracture">
              <Image
                src="/static/img/maps/fra.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Incidamus</p>
            <Link href="/docs/custommaps/trctf-incidamus">
              <Image
                src="/static/img/maps/incid.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
        </Grid>
      </Flex>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className=" mx-auto gap-6">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Meridian</p>
            <Link href="/docs/custommaps/trctf-meridian">
              <Image
                src="/static/img/maps/ascent2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Oceanus</p>
            <Link href="/docs/custommaps/trctf-oceanus">
              <Image
                src="/static/img/maps/oce.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Periculo</p>
            <Link href="/docs/custommaps/trctf-periculo">
              <Image
                src="/static/img/maps/periculo-features.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
        </Grid>
      </Flex>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className=" mx-auto gap-6">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Phlegethon</p>
            <Link href="/docs/custommaps/trctf-phlegethon">
              <Image
                src="/static/img/maps/phlegathon-river.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Polaris</p>
            <Link href="/docs/custommaps/trctf-polaris">
              <Image
                src="/static/img/maps/polaris.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Styx</p>
            <Link href="/docs/custommaps/trctf-styx/">
              <Image
                src="/static/img/maps/sty.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
        </Grid>
      </Flex>
      <Card
        className="max-w-8xl bg-black py-3 text-center text-6xl"
        color="green"
      >
        <h1 className="py-6">Arena</h1>
      </Card>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className=" mx-auto gap-6">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">
              Elysian Battleground
            </p>
            <Link href="/docs/custommaps/trarena-elysianbattleground">
              <Image
                src="/static/img/maps/eb.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Ruins</p>
            <Link href="/docs/custommaps/trarena-ruins">
              <Image
                src="/static/img/maps/ruins.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
        </Grid>
      </Flex>

      <Card
        className="max-w-8xl bg-black py-3 text-center text-6xl"
        color="green"
      >
        <h1 className="py-6">CTF Blitz</h1>
      </Card>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className=" mx-auto gap-6">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Broadside</p>
            <Link href="/docs/custommaps/trctfblitz-broadside">
              <Image
                src="/static/img/maps/ascent2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Air Arena</p>
            <Link href="/docs/custommaps/trctfblitz-airarena">
              <Image
                src="/static/img/maps/ascent2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
        </Grid>
      </Flex>

      <Card
        className="max-w-8xl bg-black py-3 text-center text-6xl"
        color="green"
      >
        <h1 className="py-6">Miscellaneous Maps</h1>
      </Card>
      <Flex className="max-w-8xl">
        <Grid numItemsMd={1} numItemsLg={3} className=" mx-auto gap-6">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">
              Treacherous Pass
            </p>
            <Link href="/docs/custommaps/trctf-treacherouspass">
              <Image
                src="/static/img/maps/ascent2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Maze Runner</p>
            <Link href="/docs/custommaps/trctfblitz-mazerunner">
              <Image
                src="/static/img/maps/ascent2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
        </Grid>
      </Flex>
    </>
  );
}
