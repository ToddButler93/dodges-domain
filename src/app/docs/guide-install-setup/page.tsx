import Link from "next/link";

import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { Button } from "~/components/ui/button";
import { Alert } from "~/components/ui/alert";
import Image from "next/image";

export default function GuideInstallSetup() {
  return (
    <>
      <div className="flex flex-col gap-6 grow">
        <Card className="grow p-6 text-center">
          <h1 className="flex flex-row justify-center">
            Tribes Ascend Installation
          </h1>
        </Card>
        <Card className="flex flex-col items-center justify-between gap-6 p-3">
          <Link
            passHref={true}
            href="https://github.com/Dylan-B-D/ta-launcher/releases/download/0.1.3-beta/TA.Launcher.V2_0.1.3_x64_en-US.msi"
            target="_blank"
          >
            <Image
              width={150}
              height={150}
              alt=""
              src="https://utfs.io/f/46SbhTOA8sVNL6KLn4EYEcJ7qUwa2frl1pIRDez4ObuiMgGX"
            />
          </Link>
          <HoverCard openDelay={50} closeDelay={50}>
            <HoverCardTrigger href="https://github.com/Dylan-B-D/ta-launcher/releases/download/0.1.3-beta/TA.Launcher.V2_0.1.3_x64_en-US.msi">
              <Button>Download TA Launcher</Button>
            </HoverCardTrigger>
            <HoverCardContent className="p-center flex flex-col gap-3">
              <Button asChild>
                <Link href="steam://install/17080/">Steam Install</Link>
              </Button>
              <Button asChild>
                <Link href="https://f000.backblazeb2.com/file/tribes-zip/Tribes_Ascend_Parting_Gifts.zip">
                  Manual Download
                </Link>
              </Button>

              <Button asChild>
                <Link href="/docs/linux-install">Using Linux?</Link>
              </Button>
              <Alert className="bg-orange-900 text-zinc-100">
                <p className="p-start pb-3">
                  You will need the{" "}
                  <Link
                    passHref={true}
                    href="https://aka.ms/vs/17/release/vc_redist.x86.exe"
                  >
                    Microsoft Visual C++ x86 Redistributes
                  </Link>{" "}
                  if you don&apos;t have them already installed.
                </p>
                <Button asChild>
                  <Link
                    passHref={true}
                    href="https://aka.ms/vs/17/release/vc_redist.x86.exe"
                  >
                    C++ Redist Download
                  </Link>
                </Button>
              </Alert>
            </HoverCardContent>
          </HoverCard>
        </Card>
        <Separator />
        <div className="flex flex-grow flex-col">
          <h2>Instructions</h2>
          <div className="flex flex-col justify-center gap-3">
            <p>
              Use the{" "}
              <Link
                passHref={true}
                href="https://github.com/Dylan-B-D/ta-launcher/releases/download/0.1.3-beta/TA.Launcher.V2_0.1.3_x64_en-US.msi"
                target="_blank"
              >
                MSI installer
              </Link>{" "}
              to install TA Launcher.
            </p>
            <p>
              Follow the on-screen instructions within TA Launcher to download
              Tribes Ascend.
            </p>
            <p>
              When you get to the Packages step, select the Recommended option
              for community maps.
            </p>
            <Alert className="flex flex-col gap-3 bg-teal-800 p-6 text-zinc-100">
              <p>
                The Play Now button will indicate whether you’re in OOTB or GOTY
                mode.
              </p>
              <div>
                <p>
                  Use the button in the main menu to switch game modes as
                  needed:
                </p>
                <ul className="list-disc ps-6">
                  <li>GOTY Mode for GOTY servers.</li>
                  <li>OOTB Mode for OOTB servers.</li>
                </ul>
              </div>
            </Alert>
          </div>
        </div>
        <Separator />
        <div className="flex flex-grow flex-col">
          <h3 className="content-center">Troubleshooting</h3>
          <div className="flex flex-col justify-center gap-3">
            <Accordion type="single" collapsible>
              <AccordionItem value="IDKWHERETRIBESIS">
                <AccordionTrigger className="text-xl">
                  Launcher doesn&apos;t know where Tribes is installed?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Usually it&apos;s &quot;C:\Program Files
                    (x86)\Steam\SteamApps\Common\Tribes\Binaries\Win32\TribesAscend.exe&quot;.
                    If you aren&apos;t sure and installed the game via
                    &quot;Steam&quot;, follow this video to get the correct
                    directory.
                  </p>
                  <video
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                    className="h-1/3"
                  >
                    <source
                      src="https://utfs.io/f/74dfea14-a764-4061-9ff9-4c3c90a9915f-2pmbfd.webm"
                      type="video/webm"
                    ></source>
                    Your browser does not support .webm video.
                  </video>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="IHEARBUTCANTSEE">
                <AccordionTrigger className="text-xl">
                  I don&apos;t see an option to swap game modes
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    <Link
                      passHref={true}
                      href="https://aka.ms/vs/17/release/vc_redist.x86.exe"
                    >
                      Microsoft Visual C++ redistributes
                    </Link>{" "}
                    must be installed.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="FAILTOJOIN">
                <AccordionTrigger className="text-xl">
                  Unable to join a server
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Probably have the wrong game mode selected for that server,
                    community servers are labelled &quot;OOTB&quot; or
                    &quot;GOTY&quot; to show their game mode. Go back to the
                    main menu and select &quot;Switch to OOTB&quot; or
                    &quot;Switch to GOTY&quot; like this video.
                  </p>

                  <video
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                    className="max-h-screen"
                  >
                    <source
                      src="https://utfs.io/f/91f248ce-1489-4b2b-a596-aa675e4e0e50-fsg59a.webm"
                      type="video/webm"
                    ></source>
                    Your browser does not support .webm video.
                  </video>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="COMMUNITYMAP">
                <AccordionTrigger className="text-xl">
                  Can&apos;t join a server with a community made map
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    To play on a server hosting a community made map you only
                    need the latest version of the map. In the server browser,
                    community made maps will be listed as &quot;Arx
                    Novena&quot;.
                  </p>
                  <p>
                    The files can be obtained through the Packages tab of TA
                    Launcher by clicking the Recommended option.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
