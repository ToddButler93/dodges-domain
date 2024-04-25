import Link from "next/link";
import { Alert } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function GuideConfig() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <Card className="grow py-6 text-center shadow-xl">
            <h1>Tribes Ascend Configuration</h1>
          </Card>
          <div className="flex flex-col gap-6">
            <p className="text-xl">
              Your <b className=" text-xl">Tribes.ini</b> is the config file for
              your graphical settings. It is located under{" "}
              <b>Documents\My Games\Tribes Ascend\TribesGame\Config\</b>
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Card className="flex flex-col gap-3 p-3 shadow-xl">
                <Link href="/static/text/dodges-ini/tribes.ini">
                  <img
                    src="/static/img/dodge-ini.png"
                    alt="Dodges tribes.ini"
                  />
                </Link>

                <Button asChild>
                  <Link href="/static/text/dodges-ini/tribes.ini">
                    Tribes.ini
                  </Link>
                </Button>
                <p className="text-xl">
                  This <b>Tribes.ini</b> is for people with weaker systems or
                  who are after a competitive edge.
                </p>
              </Card>
              <Card className="flex flex-col gap-3 p-3 shadow-xl">
                <Link href="/static/text/dodges-pretty-ini/tribes.ini">
                  <img
                    src="/static/img/dodge-pretty-ini.png"
                    alt="Pretty tribes.ini"
                  />
                </Link>
                <Button asChild>
                  <Link href="/static/text/dodges-pretty-ini/tribes.ini">
                    &quot;Pretty&quot; Tribes.ini
                  </Link>
                </Button>
                <p className="text-xl">
                  This <b>Tribes.ini</b> is for people with a super-strong
                  system and prioritize looks over a competitive edge.
                </p>
              </Card>
            </div>
            <Separator />
            <div>
              <Alert title="Note" color="teal">
                <p className="text-start text-xl">
                  All ini&quot;s provided are for 1080p resolution. Manually
                  alter this by changing <b>ResX=1920</b> and <b>ResY=1080</b>{" "}
                  to your native monitor resolution. HUD Elements can be toggled
                  with the{" "}
                  <Link href={"#in-game-settings"}>in game settings</Link>.
                </p>
              </Alert>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-3">
              <Card className="flex flex-col gap-3 p-3 shadow-xl">
                <h3>Required Tweaks</h3>
                <ul className="list-disc p-3">
                  <li>
                    Set all instances of <b>bForceStaticTerrain=False</b> to{" "}
                    <b>bForceStaticTerrain=True</b>. This will stop terrain from
                    popping in.
                  </li>
                  <li>
                    Set <b>OneFrameThreadLag=False</b>. This can help with mouse
                    responsiveness.
                  </li>
                  <li>
                    Set <b>m_bTinyWeaponsEnabled=True</b>. This will make your
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
                    <b>MaxSmoothedFrameRate=X</b> where X is the frame rate your
                    wish to cap your game at.
                  </li>
                  <li>Set FogVolumes=False to make smoke clouds smaller.</li>
                  <li>
                    Set <b>SpeedTreeLeaves=False</b> and
                    <b>SpeedTreeFronds=False</b> to hide tree leaves and some
                    branches.
                  </li>
                  <li>
                    Set <b>AllowRadialBlur=False</b> to remove some of the
                    distortions from weapon impacts.
                  </li>
                  <li>
                    Set <b>Borderless=False</b> to improve input lag on certain
                    systems.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-3 shadow-xl">
          <h2>TribesInput.ini</h2>
          <div>
            <Button asChild>
              <Link href="/static/text/dodges-input-ini/tribesinput.ini">
                Dodges TribesInput.ini
              </Link>
            </Button>
          </div>
          <Separator></Separator>
          <p className="text-xl">
            Your <b>TribesInput.ini</b> is the config file for your key
            bindings.
          </p>
          <p className="text-xl">
            The main thing I&quot;d make sure is that you have
            <b>bEnableMouseSmoothing</b> set to <b>false</b>.
          </p>
          <p className="text-xl">
            It is located under &quot;Documents\My Games\Tribes
            Ascend\TribesGame\Config\&quot;
          </p>
          <p className="text-xl">
            A sensitivity of approximately 4.501 at maximum zoom will cause
            issues with mouse input. 5+ sensitivity is recommended.
          </p>
          <p className="text-xl">
            This is my personal <b>TribesInput.ini</b>. Contains some of the
            autocompletes for official and custom server admins.
          </p>
          <p className="text-xl">
            You must set this to <b>Read Only</b> otherwise the game will
            overwrite the file.
          </p>
        </div>
        <div className="flex flex-col gap-6 p-3 shadow-xl">
          <h2>TAMods</h2>

          <div>
            <Button asChild>
              <Link href="/static/text/dodges-config-lua/config.lua">
                Dodges TAMods Config.lua
              </Link>
            </Button>
          </div>
          <Separator></Separator>
          <p className="text-xl">
            It is recommended to delete the default crosshair and either use the
            Tribes Ascend crosshair or create your own. If you choose to create
            your own I&quot;d recommend disabling the default crosshair within
            ubermenu so you keep hit markers.
          </p>
        </div>
      </div>
    </>
  );
}
