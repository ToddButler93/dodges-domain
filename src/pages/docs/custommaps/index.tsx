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
            <Link href="/docs/custommaps/trctf-offense">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Andromeda</p>
            <Link href="/docs/custommaps/trctf-cap">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Ascent</p>
            <Link href="/docs/custommaps/trctf-hof">
              <Image
                src="/static/img/maps/acheron-spawn.png"
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
            <Link href="/docs/custommaps/trctf-defense">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Crash</p>
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
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
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
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
            <Link href="/docs/custommaps/trctf-defense">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Fracture</p>
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Incidamus</p>
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
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
            <Link href="/docs/custommaps/trctf-defense">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Oceanus</p>
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Periculo</p>
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
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
            <Link href="/docs/custommaps/trctf-defense">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Polaris</p>
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
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
                src="/static/img/dodge-pretty-ini.png"
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
            <Link href="/docs/custommaps/trctf-defense">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Ruins</p>
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
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
            <Link href="/docs/custommaps/trctf-defense">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Air Arena</p>
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
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
            <Link href="/docs/custommaps/trctf-defense">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl text-slate-50">Maze Runner</p>
            <Link href="/docs/custommaps/trctf-snipe">
              <Image
                src="/static/img/dodge-pretty-ini.png"
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
