import Link from "next/link";
import Image from "next/image";

import { Button } from "@mantine/core";

import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.post.getAll.query();

  console.log(data);

  return (
    <>
      <div className="max-w-8xl flex flex-col py-12 text-center " color="green">
        <div className="max-w-8xl div div-col gap-6 px-32 text-center text-6xl">
          {data?.map((post) => (
            <div className="py-6 text-center" key={post.id}>
              {post.content}
            </div>
          ))}
        </div>
        <h1 className="py-6 text-6xl">Dodge&apos;s Domain</h1>
        <Button
          component={Link}
          href="/docs/guide-install-setup"
          size="xl"
          radius="xl"
          styles={{
            root: { backgroundColor: "teal" },
            label: { color: "white" },
            inner: { fontSize: 24 },
          }}
        >
          Install Tribes Ascend
        </Button>
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
