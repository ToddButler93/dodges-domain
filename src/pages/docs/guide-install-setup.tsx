import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Callout,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Divider,
} from "@tremor/react";

export default function GuideInstallSetup() {
  return (
    <>
      <Head>
        <title>Dodges Domain</title>
        <meta
          name="description"
          content="Dodges Domain, the output of his small brain."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex max-w-6xl flex-col gap-3 bg-zinc-900">
        <h1 className="text-6xl">Installation</h1>
        <Divider>Step 1 - Download Tribes Ascend</Divider>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              <Link href="https://store.steampowered.com/app/17080/Tribes_Ascend/">
                <h1 className=" text-center">Tribes: Ascend on Steam</h1>
                <Image
                  src="/static/img/tribes-ascend-logo.png"
                  width={500}
                  height={500}
                  style={{ objectFit: "contain" }}
                  alt=""
                />
              </Link>
              <Link className="w-full" href="steam://install/17080/">
                <Button className="w-full" size="xl" color="teal">
                  Install Via Steam
                </Button>
              </Link>
              <Accordion>
                <AccordionHeader>
                  Manual Install (not recommended)
                </AccordionHeader>
                <AccordionBody className="flex flex-col gap-3">
                  <Link
                    className="flex items-center justify-center"
                    href="https://f000.backblazeb2.com/file/tribes-zip/Tribes_Ascend_Parting_Gifts.zip"
                  >
                    <Button className="w-full" size="xl" color="teal">
                      Manual Download
                    </Button>
                  </Link>
                  <p>Extract game files and use the launcher below.</p>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
        <Divider>Step 2 - Download the Tribes Launcher</Divider>
        <div className="flex flex-col gap-3">
          <Callout title="Note" color="teal">
            Make sure to extract this before running!
          </Callout>

          <Link href="https://github.com/mcoot/TribesLauncherSharp/releases/latest">
            <Button size="xl" color="teal">
              Download Tribes Launcher Sharp
            </Button>
          </Link>

          <Callout title="Info" color="teal">
            You will need the{" "}
            <Link href="https://aka.ms/vs/17/release/vc_redist.x86.exe">
              Microsoft Visual C++ x86 Redistributes
            </Link>{" "}
            if you don&apos;t have them already installed.
          </Callout>
        </div>
        <Divider>Step 3 - Extract and Launch the Tribes Launcher</Divider>
        <div className="flex flex-col gap-3">
          <p>
            In the Tribes Launcher, select the Community for your login server,
            hit Login and inject TAMods.
          </p>
          <p>
            Once injected, the Play Now button will show whether you are in OOTB
            or GOTY mode. There is a button on the main menu to switch. You need
            to be in GOTY mode to play on GOTY servers and OOTB mode to play on
            OOTB servers.
          </p>
        </div>
      </div>
    </>
  );
}
