"use client";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

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
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/acheron-river.png"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Andromeda</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/andromeda2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Ascent</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/ascent2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Blues</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/blues-v011.jpeg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Crash</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/ascent2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Deserted Valley</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/deserted-valley-overview.png"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Eclipse</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/eclipse2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Fracture</p>
            <img alt="" className="rounded" src="/static/img/maps/fra.jpg" />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Incidamus</p>
            <img alt="" className="rounded" src="/static/img/maps/incid.jpg" />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Meridian</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/ascent2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Oceanus</p>
            <img alt="" className="rounded" src="/static/img/maps/oce.jpg" />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Periculo</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/periculo-features.png"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Phlegethon</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/phlegathon-river.png"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Polaris</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/polaris2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Styx</p>
            <img alt="" className="rounded" src="/static/img/maps/sty.jpg" />
          </Card>
        </div>
        <Separator />
        <Card className="grow py-6 text-center">
          <h1>Arena</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Elysian Battleground</p>
            <img alt="" className="rounded" src="/static/img/maps/eb.jpg" />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Ruins</p>
            <img alt="" className="rounded" src="/static/img/maps/ruins2.jpg" />
          </Card>
        </div>

        <Separator />
        <Card className="grow py-6 text-center">
          <h1>CTF Blitz</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Broadside</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/ascent2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Air Arena</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/ascent2.jpg"
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
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/ascent2.jpg"
            />
          </Card>
          <Card className="mx-auto max-w-xl">
            <p className=" py-3 text-center text-3xl">Maze Runner</p>
            <img
              alt=""
              className="rounded"
              src="/static/img/maps/ascent2.jpg"
            />
          </Card>
        </div>
      </div>
    </>
  );
}
