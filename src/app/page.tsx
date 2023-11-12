import Link from "next/link";

import { Button, Group } from "@mantine/core";

import Image from "next/image";

import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.post.getAll.query();

  console.log(data);

  return (
    <>
      <div className="relative">
        <div className="bg-hero-section flex max-h-[50] w-screen items-center bg-cover bg-center bg-no-repeat">
          <video
            inset-0
            object-cover
            width="100%"
            autoPlay={true}
            muted
            loop
            preload="metadata"
          >
            <source
              src="/static/video/kata-ds-bounce.webm"
              type="video/webm"
            ></source>
            Your browser does not support .webm video.
          </video>
          <Group className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              alt=""
              src="/static/img/tribes-ascend-logo.png"
              width={500}
              height={500}
              className=" max-w-md"
            />
            <Button
              component={Link}
              href="/docs/guide-install-setup"
              size="xl"
              radius="xl"
            >
              Install Tribes Ascend
            </Button>
          </Group>
        </div>
      </div>
      <div className="max-w-8xl flex flex-col py-12 text-center ">
        <div className="max-w-8xl div div-col gap-6 px-32 text-center text-6xl">
          {data?.map((post) => (
            <div className="py-6 text-center" key={post.id}>
              {post.content}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-8xl ">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="mx-auto max-w-4xl">
            <p className=" text-center text-3xl">Gameplay Guides</p>
            <Link href="/docs/gameplay/guide-quick">
              <video
                width="500px"
                height="auto"
                autoPlay={true}
                muted
                loop
                preload="metadata"
              >
                <source
                  src="/static/video/kata-ds-bounce.webm"
                  type="video/webm"
                ></source>
                Your browser does not support .webm video.
              </video>
            </Link>
          </div>
          <div className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Play Tribes Ascend</p>
            <Link href="/docs/guide-install-setup">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </div>
          <div className="mx-auto max-w-xl">
            <p className=" text-center text-3xl">Community Maps</p>
            <Link href="/docs/custommaps/">
              <Image
                src="/static/img/maps/acheron-spawn.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
