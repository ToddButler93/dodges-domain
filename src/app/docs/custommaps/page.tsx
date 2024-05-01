"use client";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";

export default function CustomMaps() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Community Made Maps</h1>
        </Card>
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/docs/guide-install-setup">Install Community Maps</Link>
          </Button>
        </div>
        <Card className="grow p-6 text-center">
          <h1>CTF</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <p className=" py-3 text-center text-3xl">Acheron</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/9e5b51fc-07f1-452b-a12d-f9103787ca25-o0x8sg.png"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Andromeda</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/b0e2daef-aa74-4700-9bea-d9d3be399687-c0o2y1.jpg"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Ascent</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/517f714f-a7f1-4ad7-8863-72b6b60ee875-bwelpk.jpg"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Blues</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Crash</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Deserted Valley</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/9c284427-0812-4dcb-af6f-38d85273d7a5-uclcr2.png"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Eclipse</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/fa141bd2-e4b2-4e07-b3dd-b342472a18b9-d303wr.jpg"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Fracture</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/d4af37d3-616b-4ad1-ac74-0e696b5b566d-26fp.jpg"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Incidamus</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/29a1f116-4f10-46ab-a68d-5671ccb44300-1nqqux.jpg"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Meridian</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TOOD
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Oceanus</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/99f42db1-4d19-496a-9168-472d01d6327c-2cr5.jpg"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Periculo</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/56d30310-a245-40cd-b6d5-93b0eea55410-u33ju1.png"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Phlegethon</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/4e49d81d-5383-46de-8059-418a0bb1b63e-ywd9iw.png"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Polaris</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/1d38c69c-dfba-457d-a432-6b9d0d650185-8xh2kq.jpg"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Styx</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/c3d66a27-74f8-402e-8f08-79933be46a43-2g54.jpg"
            />
          </Card>
        </div>
        <Separator />
        <Card className="grow p-6 text-center">
          <h1>Arena</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card>
            <p className=" py-3 text-center text-3xl">Elysian Battleground</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/fc3d415c-7a82-4bfc-9c49-9776200391df-2hp.jpg"
            />
          </Card>
          <Card>
            <p className=" py-3 text-center text-3xl">Ruins</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/938208c1-95d8-4e3a-ab94-6c81b5b68d80-f7ptmh.jpg"
            />
          </Card>
        </div>

        <Separator />
        <Card className="grow p-6 text-center">
          <h1>CTF Blitz</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card>
            <p className=" py-3 text-center text-3xl">Broadside</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="https://utfs.io/f/be7be31f-59e9-451c-8c1b-3ac850f999e6-jqvz71.png"
            />
          </Card>
          <Card>
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
        <Card className="grow p-6 text-center">
          <h1>Miscellaneous Maps</h1>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card>
            <p className=" py-3 text-center text-3xl">Treacherous Pass</p>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
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
