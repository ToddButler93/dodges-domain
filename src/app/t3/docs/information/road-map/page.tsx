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
          <Link href="/static/img/t3/T3_Roadmap.png">
            <Image
              width={10000}
              height={10000}
              src="/static/img/t3/T3_Roadmap.png"
              alt={""}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
