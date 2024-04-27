import Link from "next/link";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import Image from "next/image";
import { NavBar } from "~/components/navbar";

export default function HomePage() {
  return (
    <main className="">
      <NavBar />
      <div className="flex min-h-screen w-full flex-col items-center pb-6">
        <div className="flex relative max-h-[720px] w-screen items-center overflow-y-clip bg-cover bg-center bg-no-repeat">
          <video
            width="100%"
            height="100%"
            autoPlay={true}
            muted
            loop
            preload="auto"
            playsInline
            className="content-center"
          >
            <source
              src="/static/video/kata-ds-bounce.webm"
              type="video/webm"
            ></source>
            Your browser does not support .webm video.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-3 parent">
            <Image
              alt=""
              src="/static/img/tribes-ascend-logo.png"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
            <Button asChild size="lg">
              <Link href="/docs/guide-install-setup">
                Install Tribes Ascend
              </Link>
            </Button>
            <Button
              className="bg-gradient-to-b from-amber-400 to-red-500 text-zinc-950"
              asChild
              size="lg"
            >
              <Link href="/t3">Looking for Tribes 3: Rivals?</Link>
            </Button>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 p-6">
          <Card className="grid-col grid items-center justify-center rounded-md drop-shadow-md">
            <CardHeader>
              <CardTitle className="text-center text-nowrap">Gameplay Guides</CardTitle>
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
                    src="/static/video/kata-ds-bounce.webm"
                    type="video/webm"
                  ></source>
                  Your browser does not support .webm video.
                </video>
              </Link>
            </CardContent>
          </Card>
          <Card className="grid-col grid items-center justify-center rounded-md drop-shadow-md">
            <CardHeader>
              <CardTitle className="text-center text-nowrap">Map Development</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/docs/development/guide-map-dev">
                <Image
                  src="/static/img/maps/oce.jpg"
                  width={500}
                  height={500}
                  alt=""
                  className=""
                />
              </Link>
            </CardContent>
          </Card>

          <Card className="grid-col grid items-center justify-center rounded-md drop-shadow-md">
            <CardHeader>
              <CardTitle className="text-center text-nowrap">Community Maps</CardTitle>
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
