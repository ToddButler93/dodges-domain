import Link from "next/link";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import Image from "next/image";

export default function T3HomePage() {
  return (
    <main className="">
      <div className="flex min-h-screen w-full flex-col items-center pb-6">
        <div className="relative flex max-h-[720px] w-screen items-center overflow-y-clip bg-cover bg-center bg-no-repeat">
          <Image
            width={10000}
            height={10000}
            src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
            alt={""}
          />
          <div className="parent absolute inset-0 flex flex-col items-center justify-center gap-3 p-16">
            <Image
              alt=""
              src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-logo-m9e2d.png"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
            <Button
              className="bg-gradient-to-b from-teal-400 to-teal-700 p-3"
              asChild
              size="lg"
            >
              <Link href="/">Looking for Tribes Ascend?</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-3 p-6 sm:grid-cols-1 md:grid-cols-3">
          <Card className="grid-col grid items-center justify-center rounded-md drop-shadow-md">
            <CardHeader>
              <CardTitle className="text-nowrap text-center">
                Competitive Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/t3/docs/gameplay/guide-quick">
                <Image
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
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
              <CardTitle className="text-nowrap text-center">
                Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/docs/development/guide-map-dev">
                <Image
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
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
              <CardTitle className="text-nowrap text-center">
                Maps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/t3/docs/maps/">
                <Image
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
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
