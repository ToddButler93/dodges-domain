import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Card, Flex, Button } from "@mantine/core";

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
      <Card className="max-w-8xl py-12 text-center" color="green">
        <h1 className="py-6 text-6xl">Community Maps</h1>
        <Link href="/docs/guide-install-setup">
          <Button size="xl" color="teal">
            Install Community Maps
          </Button>
        </Link>
      </Card>
      <Card className="max-w-8xl py-3 text-center text-6xl" color="green">
        <h1 className="py-6">CTF</h1>
      </Card>
      <Flex className="max-w-8xl ">
        <div className="flex flex-col  gap-6 md:flex-row">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Acheron</p>
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
            <p className=" text-center text-3xl">Andromeda</p>
            <Link href="/docs/custommaps/trctf-andromeda">
              <Image
                src="/static/img/maps/andromeda2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Ascent</p>
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
        </div>
      </Flex>
      <Flex className="max-w-8xl">
        <div className="flex flex-col  gap-6 md:flex-row">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Blues</p>
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
            <p className=" text-center text-3xl">Crash</p>
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
            <p className=" text-center text-3xl">
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
        </div>
      </Flex>
      <Flex className="max-w-8xl">
        <div className="flex flex-col  gap-6 md:flex-row">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Eclipse</p>
            <Link href="/docs/custommaps/trctf-eclipse">
              <Image
                src="/static/img/maps/eclipse2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Fracture</p>
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
            <p className=" text-center text-3xl">Incidamus</p>
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
        </div>
      </Flex>
      <Flex className="max-w-8xl">
        <div className="flex flex-col  gap-6 md:flex-row">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Meridian</p>
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
            <p className=" text-center text-3xl">Oceanus</p>
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
            <p className=" text-center text-3xl">Periculo</p>
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
        </div>
      </Flex>
      <Flex className="max-w-8xl">
        <div className="flex flex-col  gap-6 md:flex-row">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Phlegethon</p>
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
            <p className=" text-center text-3xl">Polaris</p>
            <Link href="/docs/custommaps/trctf-polaris">
              <Image
                src="/static/img/maps/polaris2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Styx</p>
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
        </div>
      </Flex>
      <Card className="max-w-8xl py-3 text-center text-6xl" color="green">
        <h1 className="py-6">Arena</h1>
      </Card>
      <Flex className="max-w-8xl">
        <div className="flex flex-col  gap-6 md:flex-row">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">
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
            <p className=" text-center text-3xl">Ruins</p>
            <Link href="/docs/custommaps/trarena-ruins">
              <Image
                src="/static/img/maps/ruins2.jpg"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </Card>
        </div>
      </Flex>

      <Card className="max-w-8xl py-3 text-center text-6xl" color="green">
        <h1 className="py-6">CTF Blitz</h1>
      </Card>
      <Flex className="max-w-8xl">
        <div className="flex flex-col  gap-6 md:flex-row">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Broadside</p>
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
            <p className=" text-center text-3xl">Air Arena</p>
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
        </div>
      </Flex>

      <Card className="max-w-8xl py-3 text-center text-6xl" color="green">
        <h1 className="py-6">Miscellaneous Maps</h1>
      </Card>
      <Flex className="max-w-8xl">
        <div className="flex flex-col  gap-6 md:flex-row">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">
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
            <p className=" text-center text-3xl">Maze Runner</p>
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
        </div>
      </Flex>
    </>
  );
}
