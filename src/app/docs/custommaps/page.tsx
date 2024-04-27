"use client";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";

export default function CustomMaps() {
  return (
    <>
      <div className="flex flex-col gap-6 px-6">
        <Card className="grow py-6 text-center">
          <h1>Tribes Ascend Quick PUG Guide</h1>
        </Card>
        <Button asChild>
          <Link href="/docs/guide-install-setup">Install Community Maps</Link>
        </Button>
        <Separator />
        <Card className="grow py-6 text-center">
          <h1>CTF</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Acheron</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/acheron-spawn.png"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Andromeda</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/andromeda2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Ascent</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/ascent2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Blues</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Crash</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Deserted Valley</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/deserted-valley-overview.png"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Eclipse</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/eclipse2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Fracture</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/fra.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Incidamus</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/incid.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Meridian</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TOOD
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Oceanus</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/oce.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Periculo</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/periculo-features.png"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Phlegethon</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/phlegathon-overview.png"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Polaris</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/polaris2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Styx</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/sty.jpg"
            />
          </Card>
        </div>
        <Separator />
        <Card className="grow py-6 text-center">
          <h1>Arena</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Elysian Battleground</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/eb.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Ruins</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/ruins2.jpg"
            />
          </Card>
        </div>

        <Separator />
        <Card className="grow py-6 text-center">
          <h1>CTF Blitz</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Broadside</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="/static/img/maps/broadside-overview.png"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Air Arena</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
        </div>

        <Separator />
        <Card className="grow py-6 text-center">
          <h1>Miscellaneous Maps</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Treacherous Pass</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Maze Runner</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" //TODO
            />
          </Card>
        </div>
      </div>
    </>
  );
}
