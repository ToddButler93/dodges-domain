"use client";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";

export default function T3Maps() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Tribes 3 Maps</h1>
        </Card>
        <Card className="grow p-6 text-center">
          <h2>CTF</h2>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="py-3 text-center">Katabatic</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <h3 className="py-3 text-center">Wavemist</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <h3 className="py-3 text-center">DryDock</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <h3 className="py-3 text-center">‍Dangerous Crossing</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <h3 className="py-3 text-center">Torment</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <h3 className="py-3 text-center">Hollow</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <h3 className="py-3 text-center">Raindance</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <h3 className="py-3 text-center">Moonrise</h3>
            <p className="text-center">TBA</p>
            {/* <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            /> */}
          </Card>
          <Card>
            <h3 className="py-3 text-center">New Map #9</h3>
            <p className="text-center">TBA</p>
            {/* <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            /> */}
          </Card>
        </div>

        <Separator />
        <Card className="grow p-6 text-center">
          <h2>TDM / Honorball</h2>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card>
            <h3 className="py-3 text-center">Honor Dome</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <h3 className="py-3 text-center">Ice Dome</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
          <Card>
            <h3 className="py-3 text-center">Magma Dome</h3>
            <Image
              width={1500}
              height={1500}
              alt=""
              className="rounded"
              src="" // TODO
            />
          </Card>
        </div>
      </div>
    </>
  );
}
