import Head from "next/head";
import Link from "next/link";
import { Image } from "@mantine/core";
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
                alt=""
                radius="md"
                src="/static/img/maps/acheron-river.png"
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Andromeda</p>
            <Link href="/docs/custommaps/trctf-andromeda">
              <Image alt="" radius="md" src="/static/img/maps/andromeda2.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Ascent</p>
            <Link href="/docs/custommaps/trctf-ascent">
              <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
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
                alt=""
                radius="md"
                src="/static/img/maps/blues-v011.jpeg"
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Crash</p>
            <Link href="/docs/custommaps/trctf-crash">
              <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Deserted Valley</p>
            <Link href="/docs/custommaps/trctf-desertedvalley">
              <Image
                alt=""
                radius="md"
                src="/static/img/maps/deserted-valley-overview.png"
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
              <Image alt="" radius="md" src="/static/img/maps/eclipse2.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Fracture</p>
            <Link href="/docs/custommaps/trctf-fracture">
              <Image alt="" radius="md" src="/static/img/maps/fra.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Incidamus</p>
            <Link href="/docs/custommaps/trctf-incidamus">
              <Image alt="" radius="md" src="/static/img/maps/incid.jpg" />
            </Link>
          </Card>
        </div>
      </Flex>
      <Flex className="max-w-8xl">
        <div className="flex flex-col  gap-6 md:flex-row">
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Meridian</p>
            <Link href="/docs/custommaps/trctf-meridian">
              <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Oceanus</p>
            <Link href="/docs/custommaps/trctf-oceanus">
              <Image alt="" radius="md" src="/static/img/maps/oce.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Periculo</p>
            <Link href="/docs/custommaps/trctf-periculo">
              <Image
                alt=""
                radius="md"
                src="/static/img/maps/periculo-features.png"
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
                alt=""
                radius="md"
                src="/static/img/maps/phlegathon-river.png"
              />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Polaris</p>
            <Link href="/docs/custommaps/trctf-polaris">
              <Image alt="" radius="md" src="/static/img/maps/polaris2.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Styx</p>
            <Link href="/docs/custommaps/trctf-styx/">
              <Image alt="" radius="md" src="/static/img/maps/sty.jpg" />
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
            <p className=" text-center text-3xl">Elysian Battleground</p>
            <Link href="/docs/custommaps/trarena-elysianbattleground">
              <Image alt="" radius="md" src="/static/img/maps/eb.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Ruins</p>
            <Link href="/docs/custommaps/trarena-ruins">
              <Image alt="" radius="md" src="/static/img/maps/ruins2.jpg" />
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
              <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Air Arena</p>
            <Link href="/docs/custommaps/trctfblitz-airarena">
              <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
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
            <p className=" text-center text-3xl">Treacherous Pass</p>
            <Link href="/docs/custommaps/trctf-treacherouspass">
              <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
            </Link>
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Maze Runner</p>
            <Link href="/docs/custommaps/trctfblitz-mazerunner">
              <Image alt="" radius="md" src="/static/img/maps/ascent2.jpg" />
            </Link>
          </Card>
        </div>
      </Flex>
    </>
  );
}
