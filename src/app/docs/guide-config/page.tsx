import { Button, Code, Title, Image, Text, Card } from "@mantine/core";
import Link from "next/link";

export default function GuideConfig() {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-6 px-6">
        <div className="flex flex-col gap-6 pt-6">
          <Title>Configuration Guide</Title>
          <Title order={2}>In game settings</Title>

          <Title order={2}>Tribes.ini</Title>

          <Text>
            Your <Code>Tribes.ini</Code> is the config file for your graphical
            settings.
          </Text>

          <Text>
            It is located under &quot;Documents\My Games\Tribes
            Ascend\TribesGame\Config\&quot;
          </Text>
          <Card className="flex flex-col gap-6">
            <Link href="/static/text/dodges-ini/tribes.ini">
              <Image src="/static/img/dodge-ini.png" alt='Dodge"s tribes.ini' />
            </Link>

            <Button
              component={Link}
              href="/static/text/dodges-ini/tribes.ini"
              size="xl"
              radius="xl"
              styles={{
                root: { backgroundColor: "teal" },
                label: { color: "white" },
                inner: { fontSize: 24 },
              }}
            >
              Dodge&quot;s Tribes.ini
            </Button>
            <Text>
              This <Code>Tribes.ini</Code> is for people with weaker systems or
              who are after a competitive edge.
            </Text>
          </Card>
          <Card className="flex flex-col gap-6">
            <Link href="/static/text/dodges-pretty-ini/tribes.ini">
              <Image
                src="/static/img/dodge-pretty-ini.png"
                alt='Dodge"s pretty tribes.ini'
              />
            </Link>
            <Button
              component={Link}
              href="/static/text/dodges-pretty-ini/tribes.ini"
              size="xl"
              radius="xl"
              styles={{
                root: { backgroundColor: "teal" },
                label: { color: "white" },
                inner: { fontSize: 24 },
              }}
            >
              <Text>Dodge&quot;s &quot;Pretty&quot; Tribes.ini</Text>
            </Button>
            <Text>
              This <Code>Tribes.ini</Code> is for people with a super-strong
              system and prioritize looks over a competitive edge.
            </Text>
          </Card>

          <Text>
            Note: All ini&quot;s provided are for 1080p resolution. Manually
            alter this by changing ResX=1920 and ResY=1080 to your native
            monitor resolution. HUD Elements can be enabled within the{" "}
            <Link href={"#in-game-settings"}>in game settings</Link>.
          </Text>
          <Title order={3}>Required Tweaks</Title>

          <Text>
            Set all instances of <Code>bForceStaticTerrain=False</Code> to
            <Code>bForceStaticTerrain=True</Code>. This will stop terrain from
            popping in.
          </Text>
          <Text>
            Set <Code>OneFrameThreadLag=False</Code>. This can help with mouse
            responsiveness.
          </Text>
          <Text>
            Set <Code>m_bTinyWeaponsEnabled=True</Code>. This will make your
            weapons take up less screen space.
          </Text>
          <Title order={3}>Recommended Tweaks</Title>

          <Text>
            Set <Code>Bloom=True</Code> to <Code>Bloom=False</Code>
          </Text>
          <Text>
            Set <Code>MotionBlur=True</Code> to <Code>MotionBlur=False</Code>
          </Text>
          <Text>
            To set a frame rate cap, set <Code>bSmoothFrameRate=true</Code> and
            <Code>MaxSmoothedFrameRate=X</Code> where X is the frame rate your
            wish to cap your game at.
          </Text>
          <Text>Set FogVolumes=False to make smoke clouds smaller.</Text>
          <Text>
            Set <Code>SpeedTreeLeaves=False</Code> and
            <Code>SpeedTreeFronds=False</Code> to hide tree leaves and some
            branches.
          </Text>
          <Text>
            Set <Code>AllowRadialBlur=False</Code> to remove some of the
            distortions from weapon impacts.
          </Text>
          <Text>
            Set <Code>Borderless=False</Code> to improve input lag on certain
            systems.
          </Text>
          <Title order={2}>TribesInput.ini</Title>

          <Text>
            Your <Code>TribesInput.ini</Code> is the config file for your key
            bindings.
          </Text>
          <Text>
            The main thing I&quot;d make sure is that you have
            <Code>bEnableMouseSmoothing</Code> set to <Code>false</Code>.
          </Text>
          <Text>
            It is located under &quot;Documents\My Games\Tribes
            Ascend\TribesGame\Config\&quot;
          </Text>
          <Text>
            A sensitivity of approximately 4.501 at maximum zoom will cause
            issues with mouse input. 5+ sensitivity is recommended.
          </Text>
          <Button
            component={Link}
            href="/static/text/dodges-input-ini/tribesinput.ini"
            size="xl"
            radius="xl"
            styles={{
              root: { backgroundColor: "teal" },
              label: { color: "white" },
              inner: { fontSize: 24 },
            }}
          >
            Dodge&quot;s TribesInput.ini
          </Button>

          <Text>
            This is my personal <Code>TribesInput.ini</Code>. Contains some of
            the autocompletes for official and custom server admins.
          </Text>
          <Text>
            You must set this to <Code>Read Only</Code> otherwise the game will
            overwrite the file.
          </Text>
          <Title order={2}>TAMods</Title>

          <Text>
            It is recommended to delete the default crosshairs and either use
            the Tribes Ascend crosshairs or create your own. If you choose to
            create your own I&quot;d recommend disabling the default crosshairs
            within ubermenu so you keep hitmarkers.
          </Text>
          <Button
            component={Link}
            href="/static/text/dodges-config-lua/config.lua"
            size="xl"
            radius="xl"
            styles={{
              root: { backgroundColor: "teal" },
              label: { color: "white" },
              inner: { fontSize: 24 },
            }}
          >
            <Text>Dodge&quot;s TAMods Config.lua</Text>
          </Button>
        </div>
      </div>
    </>
  );
}
