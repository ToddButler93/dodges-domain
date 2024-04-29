import Link from "next/link";
import { Alert } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";

export default function T3GuideConfig() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Tribes 3 Configuration</h1>
        </Card>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <p>
              Your <b className="">Tribes.ini</b> is the config file for your{" "}
              graphical settings. It is located under{" "}
              <b>Documents\My Games\Tribes Ascend\TribesGame\Config\</b>
            </p>
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              <Card className="flex flex-col gap-3 p-3 shadow-xl">
                <Link
                  download="tribes.ini"
                  target="_blank"
                  href="https://utfs.io/f/76e0e31f-e135-4dbc-9ee1-c8d641b8cd8b-jk7hvp.ini"
                >
                  <Image
                    width={1500}
                    height={1500}
                    src="https://utfs.io/f/b6d64b8a-be70-459e-b652-2d3b6ca560c7-ni4r8u.png"
                    alt="Dodges tribes.ini"
                  />
                </Link>

                <Button asChild>
                  <Link
                    download="tribes.ini"
                    target="_blank"
                    href="https://utfs.io/f/76e0e31f-e135-4dbc-9ee1-c8d641b8cd8b-jk7hvp.ini"
                  >
                    Tribes.ini
                  </Link>
                </Button>
                <p>
                  This <b>Tribes.ini</b> is for people with weaker systems or{" "}
                  who are after a competitive edge.
                </p>
              </Card>
              <Card className="flex flex-col gap-3 p-3 shadow-xl">
                <Link
                  download="tribes.ini"
                  target="_blank"
                  href="https://utfs.io/f/f5dd26d4-ecc8-41a0-aeec-3e136baf5239-ts4htm.ini"
                >
                  <Image
                    width={1500}
                    height={1500}
                    src="https://utfs.io/f/313600e4-c482-435d-a8db-50fd09ff448e-97snnn.png"
                    alt="Pretty tribes.ini"
                  />
                </Link>
                <Button asChild>
                  <Link
                    download="tribes.ini"
                    target="_blank"
                    href="https://utfs.io/f/f5dd26d4-ecc8-41a0-aeec-3e136baf5239-ts4htm.ini"
                  >
                    &quot;Pretty&quot; Tribes.ini
                  </Link>
                </Button>
                <p>
                  This <b>Tribes.ini</b> is for people with a super-strong{" "}
                  system and prioritize looks over a competitive edge.
                </p>
              </Card>
            </div>
            <Separator />
            <div>
              <Alert title="Note" className="bg-teal-800 text-zinc-100">
                <p className="text-start">
                  All ini&quot;s provided are for 1080p resolution. Manually{" "}
                  alter this by changing <b>ResX=1920</b> and <b>ResY=1080</b>{" "}
                  to your native monitor resolution. HUD Elements can be toggled{" "}
                  with the{" "}
                  <Link className="text-teal-200" href={"#in-game-settings"}>
                    in game settings
                  </Link>
                  .
                </p>
              </Alert>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              <Card className="flex flex-col gap-3 p-3 shadow-xl">
                <h3>Required Tweaks</h3>
                <ul className="list-disc p-3">
                  <li>
                    Set all instances of <b>bForceStaticTerrain=False</b> to{" "}
                    <b>bForceStaticTerrain=True</b>. This will stop terrain from{" "}
                    popping in.
                  </li>
                  <li>
                    Set <b>OneFrameThreadLag=False</b>. This can help with mouse{" "}
                    responsiveness.
                  </li>
                  <li>
                    Set <b>m_bTinyWeaponsEnabled=True</b>. This will make your{" "}
                    weapons take up less screen space.
                  </li>
                </ul>
              </Card>
              <Card className="flex flex-col gap-3 p-3 shadow-xl">
                <h3>Recommended Tweaks</h3>
                <ul className="list-disc p-3">
                  <li>
                    Set <b>Bloom=True</b> to <b>Bloom=False</b>
                  </li>
                  <li>
                    Set <b>MotionBlur=True</b> to <b>MotionBlur=False</b>
                  </li>
                  <li>
                    To set a frame rate cap, set <b>bSmoothFrameRate=true</b>{" "}
                    and
                    <b>MaxSmoothedFrameRate=X</b> where X is the frame rate your{" "}
                    wish to cap your game at.
                  </li>
                  <li>Set FogVolumes=False to make smoke clouds smaller.</li>
                  <li>
                    Set <b>SpeedTreeLeaves=False</b> and{" "}
                    <b>SpeedTreeFronds=False</b> to hide tree leaves and some{" "}
                    branches.
                  </li>
                  <li>
                    Set <b>AllowRadialBlur=False</b> to remove some of the{" "}
                    distortions from weapon impacts.
                  </li>
                  <li>
                    Set <b>Borderless=False</b> to improve input lag on certain{" "}
                    systems.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3 shadow-xl">
          <h2>TribesInput.ini</h2>
          <div>
            <Button asChild>
              <Link
                download="tribes.ini"
                target="_blank"
                href="https://utfs.io/f/ae32c748-fa36-4727-858c-efe42c344b32-gojldb.ini"
              >
                Dodges TribesInput.ini
              </Link>
            </Button>
          </div>
          <Separator></Separator>
          <p>
            Your <b>TribesInput.ini</b> is the config file for your key{" "}
            bindings.
          </p>
          <p>
            The main thing I&quot;d make sure is that you have{" "}
            <b>bEnableMouseSmoothing</b> set to <b>false</b>.
          </p>
          <p>
            It is located under &quot;Documents\My Games\Tribes{" "}
            Ascend\TribesGame\Config\&quot;
          </p>
          <p>
            A sensitivity of approximately 4.501 at maximum zoom will cause{" "}
            issues with mouse input. 5+ sensitivity is recommended.
          </p>
          <p>
            This is my personal <b>TribesInput.ini</b>. Contains some of the{" "}
            autocompletes for official and custom server admins.
          </p>
          <p>
            You must set this to <b>Read Only</b> otherwise the game will{" "}
            overwrite the file.
          </p>
        </div>
        <div className="flex flex-col gap-6 p-3 shadow-xl">
          <h2>TAMods</h2>

          <div>
            <Button asChild>
              <Link
                download="tribes.ini"
                target="_blank"
                href="https://utfs.io/f/8d1426d4-2bc3-41af-b66b-74876675b56b-rnj6dk.lua"
              >
                Dodges TAMods Config.lua
              </Link>
            </Button>
          </div>
          <Separator></Separator>
          <p>
            It is recommended to delete the default crosshair and either use the{" "}
            Tribes Ascend crosshair or create your own. If you choose to create{" "}
            your own I&quot;d recommend disabling the default crosshair within{" "}
            ubermenu so you keep hit markers.
          </p>
        </div>
      </div>
    </>
  );
}
