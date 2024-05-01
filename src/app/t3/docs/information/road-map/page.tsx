import Image from "next/image";
import Link from "next/link";
import { Card } from "~/components/ui/card";

export default function T3RoadMap() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Tribes 3 Road Map</h1>
        </Card>
        <div className="flex flex-col gap-3">
          <Link href="https://utfs.io/f/fc971701-7eed-409a-9981-3c21e108fd8d-3m3flw.png">
            <Image
              width={10000}
              height={10000}
              src="https://utfs.io/f/fc971701-7eed-409a-9981-3c21e108fd8d-3m3flw.png"
              alt={"Tribes 3 Road Map"}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
