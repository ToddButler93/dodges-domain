import Head from "next/head";
import Link from "next/link";
import { Button, Callout } from "@tremor/react";

export default function Home() {

  return (
    <>
      <Head>
        <title>Dodges Domain</title>
        <meta name="description" content="Dodges Domain, the output of his small brain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col max-w-6xl bg-zinc-900 gap-3">
        <h1 className="text-5xl">Installation</h1>
        <h2 className="text-2xl">Step 1 - Install via Steam</h2>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <iframe src="https://store.steampowered.com/widget/17080/" width="100%" height="190"></iframe>
          </div>
            Or
            <Link href="https://f000.backblazeb2.com/file/tribes-zip/Tribes_Ascend_Parting_Gifts.zip">
              <Button size="xl" color="teal">
              Manual Download
              </Button>
            </Link>
        </div>
        <h2 className="text-4xl">Step 2 - Download the Tribes Launcher</h2>
        <div className="flex flex-col gap-3">
              <Callout
              title="Note"
              color="teal"
            >
              Make sure to extract this before running!
            </Callout>
            
            <Link href="https://github.com/mcoot/TribesLauncherSharp/releases/latest">
              <Button size="xl" color="teal">
              Download Tribes Launcher Sharp
              </Button>
            </Link>
            
            <Callout
              title="Info"
              color="teal"
            >
              You will need the <Link href="https://aka.ms/vs/17/release/vc_redist.x86.exe">Microsoft Visual C++ x86 Redistributes</Link> if you don't have them already installed.
            </Callout>
        </div>
        <h2 className="text-4xl">Step 3 - Download the Tribes Launcher</h2>
        <div className="flex flex-col gap-3">
          <p>Extract and Launch the Tribes Launcher.</p>
          <p>In the Tribes Launcher, select the Community for your login server, hit Login and inject TAMods.</p>
          <p>Once injected, the Play Now button will show whether you are in OOTB or GOTY mode. There is a button on the main menu to switch. You need to be in GOTY mode to play on GOTY servers and OOTB mode to play on OOTB servers.</p>
        </div>
      </div>
    </>
  );
}
