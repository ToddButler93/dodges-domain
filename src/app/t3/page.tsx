import Link from "next/link";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import Image from "next/image";

export default function T3HomePage() {
  return (
    <main className="">
      <div>
        <div className="relative">
          <div className="flex max-h-[720px] w-screen items-center overflow-y-clip bg-cover bg-center bg-no-repeat">
            <Image
              width={10000}
              height={10000}
              className="content-center"
              src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
              alt={""}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-6">
                <Image
                  alt=""
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-logo-m9e2d.png"
                  width={500}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
                <Button asChild size="lg">
                  <Link href="https://store.steampowered.com/app/2687970/TRIBES_3_Rivals/">
                    Get Tribes 3: Rivals
                  </Link>
                </Button>
                <Button variant="secondary" asChild size="lg">
                  <Link href="/">Looking for Tribes: Ascend?</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 p-6">
          <Card className="grid-col grid items-center justify-center rounded-md drop-shadow-md">
            <CardHeader>
              <CardTitle className="text-center">Gameplay Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/docs/gameplay/guide-quick">
                <video
                  width="500px"
                  height="auto"
                  autoPlay={true}
                  muted
                  loop
                  preload="auto"
                >
                  <source
                    src="https://utfs.io/f/b8660dcd-42d5-457e-8b98-7ecdf8f3dffd-cuncsc.webm"
                    type="video/webm"
                  ></source>
                  Your browser does not support .webm video.
                </video>
              </Link>
            </CardContent>
          </Card>
          <Card className="grid-col grid items-center justify-center rounded-md drop-shadow-md">
            <CardHeader>
              <CardTitle className="text-center">Map Development</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/docs/development/guide-map-dev">
                <Image
                  src="/static/img/maps/oce.jpg"
                  width={500}
                  height={500}
                  alt=""
                  className="object-contain"
                />
              </Link>
            </CardContent>
          </Card>

          <Card className="grid-col grid items-center justify-center rounded-md drop-shadow-md">
            <CardHeader>
              <CardTitle className="text-center">Community Maps</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/docs/custommaps/">
                <Image
                  src="/static/img/maps/acheron-spawn.png"
                  width={500}
                  height={500}
                  alt=""
                  className="object-contain"
                />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
