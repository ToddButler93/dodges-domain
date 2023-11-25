import {
  Button,
  Code,
  Title,
  Image,
  Text,
  Card,
  Container,
  Paper,
  SimpleGrid,
  Alert,
  List,
  ListItem,
  Space,
} from "@mantine/core";
import Link from "next/link";

export default function GuideConfig() {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-6 pe-6 pt-6">
        <Paper className="flex flex-col gap-6 shadow-xl">
          <Container size="xl">
            <Container size="sm">
              <Title>Configuration Guide</Title>
              <Text className="text-xl">
                Your <Code className=" text-xl">Tribes.ini</Code> is the config
                file for your graphical settings. It is located under{" "}
                <Code>Documents\My Games\Tribes Ascend\TribesGame\Config\</Code>
              </Text>
            </Container>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <Card className="flex flex-col gap-3 shadow-xl">
                <Link href="/static/text/dodges-ini/tribes.ini">
                  <Image
                    src="/static/img/dodge-ini.png"
                    alt='Dodge"s tribes.ini'
                  />
                </Link>

                <Button
                  component={Link}
                  href="/static/text/dodges-ini/tribes.ini"
                  size="xl"
                  radius="xl"
                  styles={{
                    inner: { fontSize: 24 },
                  }}
                >
                  Dodge&quot;s Tribes.ini
                </Button>
                <Text className="text-xl">
                  This <Code>Tribes.ini</Code> is for people with weaker systems
                  or who are after a competitive edge.
                </Text>
              </Card>
              <Card className="flex flex-col gap-3 shadow-xl">
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
                    inner: { fontSize: 24 },
                  }}
                >
                  Dodge&quot;s &quot;Pretty&quot; Tribes.ini
                </Button>
                <Text className="text-xl">
                  This <Code>Tribes.ini</Code> is for people with a super-strong
                  system and prioritize looks over a competitive edge.
                </Text>
              </Card>
            </SimpleGrid>
            <Space h="md" />
            <Container size="sm">
              <Alert title="Note" color="teal">
                <Text className="text-start text-xl">
                  All ini&quot;s provided are for 1080p resolution. Manually
                  alter this by changing <Code>ResX=1920</Code> and{" "}
                  <Code>ResY=1080</Code> to your native monitor resolution. HUD
                  Elements can be toggled with the{" "}
                  <Link href={"#in-game-settings"}>in game settings</Link>.
                </Text>
              </Alert>
            </Container>
            <Space h="md" />
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <Card className="flex flex-col gap-3 shadow-xl">
                <Title order={3}>Required Tweaks</Title>
                <List listStyleType="disc" className="pe-6">
                  <ListItem>
                    Set all instances of <Code>bForceStaticTerrain=False</Code>{" "}
                    to <Code>bForceStaticTerrain=True</Code>. This will stop
                    terrain from popping in.
                  </ListItem>
                  <ListItem>
                    Set <Code>OneFrameThreadLag=False</Code>. This can help with
                    mouse responsiveness.
                  </ListItem>
                  <ListItem>
                    Set <Code>m_bTinyWeaponsEnabled=True</Code>. This will make
                    your weapons take up less screen space.
                  </ListItem>
                </List>
              </Card>
              <Card className="flex flex-col gap-3 shadow-xl">
                <Title order={3}>Recommended Tweaks</Title>
                <List withPadding listStyleType="disc" className="pe-6">
                  <ListItem>
                    Set <Code>Bloom=True</Code> to <Code>Bloom=False</Code>
                  </ListItem>
                  <ListItem>
                    Set <Code>MotionBlur=True</Code> to{" "}
                    <Code>MotionBlur=False</Code>
                  </ListItem>
                  <ListItem>
                    To set a frame rate cap, set{" "}
                    <Code>bSmoothFrameRate=true</Code> and
                    <Code>MaxSmoothedFrameRate=X</Code> where X is the frame
                    rate your wish to cap your game at.
                  </ListItem>
                  <ListItem>
                    Set FogVolumes=False to make smoke clouds smaller.
                  </ListItem>
                  <ListItem>
                    Set <Code>SpeedTreeLeaves=False</Code> and
                    <Code>SpeedTreeFronds=False</Code> to hide tree leaves and
                    some branches.
                  </ListItem>
                  <ListItem>
                    Set <Code>AllowRadialBlur=False</Code> to remove some of the
                    distortions from weapon impacts.
                  </ListItem>
                  <ListItem>
                    Set <Code>Borderless=False</Code> to improve input lag on
                    certain systems.
                  </ListItem>
                </List>
              </Card>
            </SimpleGrid>
          </Container>
        </Paper>
        <Paper className="flex flex-col px-6 text-xl shadow-xl">
          <Container size="sm">
            <div>
              <Title order={2}>TribesInput.ini</Title>
              <div>
                <Button
                  component={Link}
                  href="/static/text/dodges-input-ini/tribesinput.ini"
                  size="xl"
                  radius="xl"
                  styles={{
                    inner: { fontSize: 24 },
                  }}
                >
                  Dodges TribesInput.ini
                </Button>
              </div>
              <Space h="sm"></Space>
              <Text className="text-xl">
                Your <Code>TribesInput.ini</Code> is the config file for your
                key bindings.
              </Text>
              <Text className="text-xl">
                The main thing I&quot;d make sure is that you have
                <Code>bEnableMouseSmoothing</Code> set to <Code>false</Code>.
              </Text>
              <Text className="text-xl">
                It is located under &quot;Documents\My Games\Tribes
                Ascend\TribesGame\Config\&quot;
              </Text>
              <Text className="text-xl">
                A sensitivity of approximately 4.501 at maximum zoom will cause
                issues with mouse input. 5+ sensitivity is recommended.
              </Text>
              <Text className="text-xl">
                This is my personal <Code>TribesInput.ini</Code>. Contains some
                of the autocompletes for official and custom server admins.
              </Text>
              <Text className="text-xl">
                You must set this to <Code>Read Only</Code> otherwise the game
                will overwrite the file.
              </Text>
            </div>
          </Container>
        </Paper>
        <Paper className="flex flex-col px-6 pb-6 text-xl shadow-xl">
          <Container size="sm">
            <Title order={2}>TAMods</Title>

            <div>
              <Button
                component={Link}
                href="/static/text/dodges-config-lua/config.lua"
                size="xl"
                radius="xl"
                styles={{
                  inner: { fontSize: 24 },
                }}
              >
                Dodges TAMods Config.lua
              </Button>
            </div>
            <Space h="sm"></Space>
            <Text className="text-xl">
              It is recommended to delete the default crosshair and either use
              the Tribes Ascend crosshair or create your own. If you choose to
              create your own I&quot;d recommend disabling the default
              crosshair within ubermenu so you keep hit markers.
            </Text>
          </Container>
        </Paper>
      </div>
    </>
  );
}
