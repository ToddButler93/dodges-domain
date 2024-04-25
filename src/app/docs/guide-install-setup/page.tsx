import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

import { Card, CardHeader } from "~/components/ui/card";
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

export default function GuideInstallSetup() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className=" grow justify-center p-6">
          <h1 className="flex flex-row justify-center">
            Tribes Ascend Installation
          </h1>
        </Card>
        <div className="flex flex-row justify-evenly gap-3 p-6">
          <Card className="flex flex-col items-center justify-between gap-3 p-3">
            <a
              href="https://store.steampowered.com/app/17080/Tribes_Ascend/"
              target="_blank"
            >
              <img
                alt=""
                height={200}
                src="/static/img/tribes-ascend-logo.png"
              />
            </a>
            <Separator />
            <HoverCard
              openDelay={50}
              closeDelay={50}
            >
              <HoverCardTrigger>
                <Button asChild>
                  <a href="steam://install/17080/">Install Via Steam</a>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="p-center flex flex-col gap-3">
                <p>Steam install is recommended.</p>{" "}
                <div>
                  <div className="flex flex-row justify-between">
                    <Button asChild>
                      <a href="https://f000.backblazeb2.com/file/tribes-zip/Tribes_Ascend_Parting_Gifts.zip">
                        Manual Download
                      </a>
                    </Button>

                    <Button asChild>
                      <a href="/docs/linux-install">Using Linux?</a>
                    </Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Card>
          <div className="flex items-center justify-center gap-3">
            <FaPlus size={64} />
          </div>
          <Card className="flex flex-col items-center justify-between gap-3 p-3">
            <Link
              passHref={true}
              href="https://github.com/mcoot/TribesLauncherSharp/releases/latest"
              target="_blank"
            >
              <img
                alt=""
                src="https://www.tamods.org/assets/images/tamods-logo-83781dca7e008d9db0a74439960ce873.png"
              />
            </Link>
            <Separator />

            <HoverCard
              openDelay={50}
              closeDelay={50}
            >
              <HoverCardTrigger>
                <Button asChild>
                  <a href="https://github.com/mcoot/TribesLauncherSharp/releases/latest">
                    Download
                  </a>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="p-center flex flex-col gap-3">
                <p>Please extract before launching.</p>
                <div>
                  <div className=" justify-between">
                    <Alert color="orange">
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
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Card>
        </div>
        <Separator />
        <div className="flex flex-grow justify-center">
          <ul className="flex max-w-2xl flex-col gap-3">
            <h1>Instructions</h1>
            <li>Extract and launch the Tribes Launcher.</li>
            <li>
              Select the Community or PUG for your login server, hit Launch,
              wait for your game to start then hit inject on your launcher to
              enable TA Mods.
            </li>
            <li>
              Once injected, the Play Now button will show whether you are in
              OOTB or GOTY mode. There is a button on the main menu to switch.
              You need to be in GOTY mode to play on GOTY servers and OOTB mode
              to play on OOTB servers.
            </li>
          </ul>
        </div>
        <Separator />
        <div className="flex flex-row justify-center p-6">
          <div className="flex max-w-2xl flex-col justify-center">
            <h1 className=" content-center">Troubleshooting</h1>

            <Accordion type="single" collapsible>
              <AccordionItem value="IDKWHERETRIBESIS">
                <AccordionTrigger>
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
                    className=" h-1/3"
                  >
                    <source
                      src="/static/video/install-location.webm"
                      type="video/webm"
                    ></source>
                    Your browser does not support .webm video.
                  </video>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="IHEARBUTCANTSEE">
                <AccordionTrigger>
                  I hear the inject sound, but nothing about my game changes
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
                <AccordionTrigger>
                  I keep failing to join a server
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
                      src="/static/video/game-mode.webm"
                      type="video/webm"
                    ></source>
                    Your browser does not support .webm video.
                  </video>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="COMMUNITYMAP">
                <AccordionTrigger>
                  Can&apos;t join a server with a community made map
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    To play on a server hosting a community made map you only
                    need the latest version of the map. In the server browsers
                    current state, community made maps come up as Arx Novena.
                  </p>
                  <p>
                    <Link href="#playing-community-maps">
                      Follow this section of the guide
                    </Link>{" "}
                    to install common community maps here first. Then try{" "}
                    <Link href="#im-having-issues-not-stated-here-with-the-launcher">
                      reinstalling TAMods
                    </Link>{" "}
                    and the packages.
                  </p>
                  <p>
                    On occasion you will have to contact the owner for the
                    files.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="PACKAGEINSTALLERROR">
                <AccordionTrigger>
                  I get an error when I start the game after installing packages
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li>
                      <p>
                        In your &quot;Tribes Ascend&quot; install folder, go to
                        \TribesGame\CookedPC\Maps\ and delete all files.
                      </p>
                      <Link href="#launcher-doesnt-know-where-tribes-is-installed">
                        Not sure where Tribes is installed?
                      </Link>
                    </li>
                    <li>
                      <p>
                        Now, in &quot;Steam&quot;, you will need to verify your
                        files.
                      </p>
                      <p>
                        In your games library you need to right click on
                        &quot;Tribes Ascend&quot; and hit
                        &quot;Properties&quot;.
                      </p>
                      <img
                        src="/static/img/install/steam-properties.png"
                        alt=""
                        height={400}
                        width="auto"
                        className="contain-size"
                      />
                      <p>
                        Select the &quot;Local files&quot; tab and click the
                        &quot;Verify integrity of game files...&quot; button.
                        This will re-download the missing files you just deleted
                        from the base game via steam.
                      </p>
                      <img
                        src="/static/img/install/steam-local-files.png"
                        alt=""
                        height={200}
                        width="auto"
                        className="contain-size"
                      />
                    </li>
                    <li>
                      <p>
                        Once complete, in your &quot;Tribes Launcher&quot; hit
                        the &quot;Advanced&quot; tab and hit &quot;Reinstall
                        TAMods&quot;. Hit &quot;Yes&quot; on the prompt and then
                        hit &quot;Update&quot; to start the process.
                      </p>
                      <img
                        src="/static/img/install/launcher-advanced-tab.png"
                        alt=""
                        height={200}
                        width="auto"
                        className="contain-size"
                      />
                      <p>
                        Now, under the &quot;Packages&quot; Tab you can install
                        the custom packages that were removed earlier. This
                        should just be the custom maps and assets packages.
                      </p>
                      <img
                        src="/static/img/install/launcher-packages-tab.png"
                        alt=""
                        height={200}
                        width="auto"
                        className="contain-size"
                      />
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="IDK">
                <AccordionTrigger>
                  I&apos;m having issues not stated here with the launcher
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    When in doubt, under the &quot;Advanced&quot; tab hit
                    &quot;Reinstall TAMods&quot;. This should allow you to
                    reinstall packages as well.
                  </p>
                  <img
                    src="/static/img/install/launcher-advanced-tab.png"
                    alt=""
                    height={200}
                    width="auto"
                    className="contain-size"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
