"use client";

import Link from "next/link";
import { Image, Divider, Button, Accordion, Alert } from "@mantine/core";

export default function GuideInstallSetup() {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-3">
        <h1 className="text-6xl">Installation</h1>
        <Divider>Step 1 - Download Tribes Ascend</Divider>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              <Link href="https://store.steampowered.com/app/17080/Tribes_Ascend/">
                <h1 className=" text-center">Tribes: Ascend on Steam</h1>
                <Image alt="" src="/static/img/tribes-ascend-logo.png" />
              </Link>

              <Button
                component={Link}
                href="steam://install/17080/"
                size="xl"
                radius="xl"
                styles={{
                  root: { backgroundColor: "teal" },
                  label: { color: "white" },
                  inner: { fontSize: 24 },
                }}
              >
                Install Via Steam
              </Button>
            </div>
          </div>
          <Accordion>
            <Accordion.Item value="ManualInstall">
              <Accordion.Control>
                Manual Install (not recommended)
              </Accordion.Control>
              <Accordion.Panel className="flex flex-col gap-3">
                <Button
                  component={Link}
                  href="https://f000.backblazeb2.com/file/tribes-zip/Tribes_Ascend_Parting_Gifts.zip"
                  size="xl"
                  radius="xl"
                  styles={{
                    root: { backgroundColor: "teal" },
                    label: { color: "white" },
                    inner: { fontSize: 24 },
                  }}
                >
                  Manual Download
                </Button>
                <p>Extract game files and use the launcher below.</p>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
        <Divider>Step 2 - Download the Tribes Launcher</Divider>
        <div className="flex flex-col gap-3">
          <Alert title="Note" color="teal">
            Make sure to extract this before running!
          </Alert>
          <Button
            component={Link}
            href="https://github.com/mcoot/TribesLauncherSharp/releases/latest"
            size="xl"
            radius="xl"
            styles={{
              root: { backgroundColor: "teal" },
              label: { color: "white" },
              inner: { fontSize: 24 },
            }}
          >
            Download Tribes Launcher Sharp
          </Button>

          <Alert title="Info" color="teal">
            You will need the{" "}
            <Link href="https://aka.ms/vs/17/release/vc_redist.x86.exe">
              Microsoft Visual C++ x86 Redistributes
            </Link>{" "}
            if you don&apos;t have them already installed.
          </Alert>
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
        <Divider>Linux Installation</Divider>
        <a
          className="btn btn-lg btn-primary mb-4 mr-3"
          href="/docs/linux-install"
        >
          Linux Guide<i className="fa-solid fa-download ml-2 "></i>
        </a>
        <Divider>Troubleshooting</Divider>
        <Divider>Launcher doesn't know where Tribes is installed?</Divider>
        <p>
          Usually it's "C:\Program Files
          (x86)\Steam\SteamApps\Common\Tribes\Binaries\Win32\TribesAscend.exe".
          If you aren't sure and installed the game via `Steam`, follow this
          video to get the correct directory.
        </p>
        <video
          width="auto"
          height="100%"
          autoPlay
          muted
          loop
          preload="metadata"
        >
          <source
            src="/static/video/install-location.webm"
            type="video/webm"
          ></source>
          Your browser does not support .webm video.
        </video>
        <Divider>
          I hear the inject sound, but nothing about my game changes
        </Divider>
        <p>
          Microsoft Visual C++ redistributes must be installed, an easy all in
          one installer is
          [here](https://github.com/abbodi1406/vcredist/releases/latest)
        </p>
        <Divider>I keep failing to join a server</Divider>
        <p>
          Probably in the wrong game mode for that server, community servers are
          labelled `OOTB` or `GOTY` to show their game mode. Go back to the main
          menu and select `Switch to OOTB` or `Switch to GOTY` like this video.
        </p>
        <video
          width="auto"
          height="100%"
          autoPlay
          muted
          loop
          preload="metadata"
        >
          <source src="/static/video/game-mode.webm" type="video/webm"></source>
          Your browser does not support .webm video.
        </video>
        <Divider>Can't join a server with a community made map</Divider>
        <p>
          To play on a server hosting a community made map you only need the
          latest version of the map. In the server browsers current state,
          community made maps come up as Arx Novena.
        </p>
        <p>
          [Follow this section of the guide ](#playing-community-maps) to
          install common community maps here first. Then try [reinstalling
          TAMods](#im-having-issues-not-stated-here-with-the-launcher) and the
          packages.
        </p>
        <p>On occasion you will have to contact the owner for the files.</p>
        <Divider>
          I get a Package Install Error while installing the map packs
        </Divider>
        <p>
          We've ran into a few issues with peoples files being set to read only.
          You need to go to where [Tribes Ascend is
          installed](#launcher-doesnt-know-where-tribes-is-installed) and locate
          the file in the error message. Right click and select `Properties` and
          de-select `Read Only` then close the launcher and try to install it
          again. This will be fixed by the next launcher update.
        </p>
        <Divider>
          I get an error when I start the game after installing packages
        </Divider>
        <p>
          This should only occur when you have manually installed the maps
          previously. This fix will require some redownloading.
        </p>
        <Divider>Step 1</Divider>
        <p>
          In your `Tribes Ascend` install folder, go to
          \TribesGame\CookedPC\Maps\ and delete all files.
        </p>
        [Not sure where Tribes is
        installed?](#launcher-doesnt-know-where-tribes-is-installed)
        <Divider>Step 2</Divider>
        <p>Now, in `Steam`, you will need to verify your files.</p>
        <p>
          In your games library you need to right click on `Tribes Ascend` and
          hit `Properties`.
        </p>
        <Image
          src="/static/img/install/steam-properties.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          alt=""
        />
        <p>
          Select the `Local files` tab and click the `Verify integrity of game
          files...` button. This will re-download the missing files you just
          deleted from the base game via steam.
        </p>
        <Image
          src="/static/img/install/steam-local-files.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          alt=""
        />
        <Divider>Step 3</Divider>
        <p>
          Once complete, in your `Tribes Launcher` hit the `Advanced` tab and
          hit `Reinstall TAMods`. Hit `Yes` on the prompt and then hit `Update`
          to start the process.
        </p>
        <Image
          src="/static/img/install/launcher-advanced-tab.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          alt=""
        />
        <p>
          Now, under the `Packages` Tab you can install the custom packages that
          were removed earlier. This should just be the custom maps and assets
          packages.
        </p>
        <Image
          src="/static/img/install/launcher-packages-tab.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          alt=""
        />
        <Divider>I'm having issues not stated here with the launcher</Divider>
        <p>
          When in doubt, under the `Advanced` tab hit `Reinstall TAMods`. This
          should allow you to reinstall packages as well.
        </p>
        <Image
          src="/static/img/install/launcher-advanced-tab.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
    </>
  );
}
