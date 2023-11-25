"use client";

import Link from "next/link";
import {
  Image,
  Divider,
  Button,
  Accordion,
  Alert,
  Card,
  Title,
  Grid,
  GridCol,
  HoverCard,
  Group,
  HoverCardDropdown,
  Text,
  HoverCardTarget,
  Paper,
  ListItem,
  List,
  Container,
} from "@mantine/core";
import { FaPlus } from "react-icons/fa6";

import classes from "./install.module.css";
export default function GuideInstallSetup() {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-6 pe-8 pt-6">
        <Paper className="flex flex-col gap-6 shadow-xl">
          <Grid justify="center" align="stretch">
            <GridCol
              span={{ base: 12, sm: 5.5 }}
              className="flex items-center justify-evenly gap-3 p-6"
            >
              <Card className="flex grow flex-col justify-between gap-3">
                <a
                  href="https://store.steampowered.com/app/17080/Tribes_Ascend/"
                  target="_blank"
                >
                  <Image
                    alt=""
                    height={200}
                    src="/static/img/tribes-ascend-logo.png"
                  />
                  <Divider />
                </a>
                <HoverCard
                  width={400}
                  radius="md"
                  shadow="xl"
                  withinPortal
                  openDelay={50}
                  closeDelay={50}
                  transitionProps={{ transition: "scale-y" }}
                >
                  <HoverCardTarget>
                    <Button
                      component="a"
                      href="steam://install/17080/"
                      size="xl"
                      radius="xl"
                      styles={{
                        inner: { fontSize: 24 },
                      }}
                    >
                      Install Via Steam
                    </Button>
                  </HoverCardTarget>
                  <HoverCardDropdown className="flex flex-col gap-3 text-center">
                    <Text size="sm">Steam install is recommended.</Text>{" "}
                    <div className={classes.dropdownFooter}>
                      <div className="flex flex-row justify-between">
                        <Button
                          component="a"
                          target="_blank"
                          href="https://f000.backblazeb2.com/file/tribes-zip/Tribes_Ascend_Parting_Gifts.zip"
                          variant="default"
                        >
                          Manual Download
                        </Button>
                        <Button
                          component={Link}
                          href="/docs/linux-install"
                          variant="default"
                        >
                          Using Linux?
                        </Button>
                      </div>
                    </div>
                  </HoverCardDropdown>
                </HoverCard>
              </Card>
            </GridCol>
            <GridCol
              span={{ base: 4, sm: 1 }}
              className="flex items-center justify-center gap-3"
            >
              <FaPlus size={64} />
            </GridCol>
            <GridCol
              span={{ base: 12, sm: 5.5 }}
              className="flex justify-evenly gap-3 p-6"
            >
              <Card className="flex grow flex-col justify-between">
                <a
                  href="https://github.com/mcoot/TribesLauncherSharp/releases/latest"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src="https://www.tamods.org/assets/images/tamods-logo-83781dca7e008d9db0a74439960ce873.png"
                  />
                  <Divider />
                </a>

                <HoverCard
                  width={400}
                  radius="md"
                  shadow="md"
                  withinPortal
                  openDelay={50}
                  closeDelay={50}
                  transitionProps={{ transition: "scale-y" }}
                >
                  <HoverCardTarget>
                    <Button
                      component="a"
                      href="https://github.com/mcoot/TribesLauncherSharp/releases/latest"
                      target="_blank"
                      size="xl"
                      radius="xl"
                      styles={{
                        inner: { fontSize: 24 },
                      }}
                    >
                      Download
                    </Button>
                  </HoverCardTarget>
                  <HoverCardDropdown className="flex flex-col gap-3 text-center">
                    <Text size="sm">Please extract before launching.</Text>
                    <div className={classes.dropdownFooter}>
                      <Group justify="space-between">
                        <Alert title="Warning" color="orange">
                          <Text className="pb-3 text-start">
                            You will need the{" "}
                            <Link href="https://aka.ms/vs/17/release/vc_redist.x86.exe">
                              Microsoft Visual C++ x86 Redistributes
                            </Link>{" "}
                            if you don&apos;t have them already installed.
                          </Text>
                          <Button
                            component={Link}
                            href="https://aka.ms/vs/17/release/vc_redist.x86.exe"
                            variant="default"
                          >
                            C++ Redist Download
                          </Button>
                        </Alert>
                      </Group>
                    </div>
                  </HoverCardDropdown>
                </HoverCard>
              </Card>
            </GridCol>
          </Grid>
        </Paper>
        <Divider>Extract and Launch the Tribes Launcher</Divider>
        <Paper className="flex flex-grow justify-center pe-6 shadow-xl">
          <List
            listStyleType="ordered"
            className="flex max-w-xl flex-col gap-3 pe-6"
          >
            <Title className="text-center">Instructions</Title>
            <ListItem>Launch the Tribes Launcher.</ListItem>
            <ListItem>
              Select the Community or PUG for your login server, hit Launch,
              wait for your game to start then hit inject on your launcher to
              enable TA Mods.
            </ListItem>
            <ListItem>
              Once injected, the Play Now button will show whether you are in
              OOTB or GOTY mode. There is a button on the main menu to switch.
              You need to be in GOTY mode to play on GOTY servers and OOTB mode
              to play on OOTB servers.
            </ListItem>
          </List>
        </Paper>
        <Divider />
        <Paper className="max-w-6xl pb-6">
          <Container size="sm">
            <Title ta="center">Troubleshooting</Title>

            <Accordion variant="separated">
              <Accordion.Item value="IDKWHERETRIBESIS">
                <Accordion.Control>
                  Launcher doesn&apos;t know where Tribes is installed?
                </Accordion.Control>
                <Accordion.Panel>
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
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="IHEARBUTCANTSEE">
                <Accordion.Control>
                  I hear the inject sound, but nothing about my game changes
                </Accordion.Control>
                <Accordion.Panel>
                  <p>
                    <Link href="https://aka.ms/vs/17/release/vc_redist.x86.exe">
                      Microsoft Visual C++ redistributes
                    </Link>{" "}
                    must be installed.
                  </p>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="FAILTOJOIN">
                <Accordion.Control>
                  I keep failing to join a server
                </Accordion.Control>
                <Accordion.Panel>
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
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="COMMUNITYMAP">
                <Accordion.Control>
                  Can&apos;t join a server with a community made map
                </Accordion.Control>
                <Accordion.Panel>
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
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="PACKAGEINSTALLERROR">
                <Accordion.Control>
                  I get an error when I start the game after installing packages
                </Accordion.Control>
                <Accordion.Panel>
                  <List listStyleType="ordered">
                    <ListItem>
                      <p>
                        In your &quot;Tribes Ascend&quot; install folder, go to
                        \TribesGame\CookedPC\Maps\ and delete all files.
                      </p>
                      <Link href="#launcher-doesnt-know-where-tribes-is-installed">
                        Not sure where Tribes is installed?
                      </Link>
                    </ListItem>
                    <ListItem>
                      <p>
                        Now, in &quot;Steam&quot;, you will need to verify your
                        files.
                      </p>
                      <p>
                        In your games library you need to right click on
                        &quot;Tribes Ascend&quot; and hit
                        &quot;Properties&quot;.
                      </p>
                      <Image
                        src="/static/img/install/steam-properties.png"
                        alt=""
                        h={200}
                        w="auto"
                        fit="contain"
                      />
                      <p>
                        Select the &quot;Local files&quot; tab and click the
                        &quot;Verify integrity of game files...&quot; button.
                        This will re-download the missing files you just deleted
                        from the base game via steam.
                      </p>
                      <Image
                        src="/static/img/install/steam-local-files.png"
                        alt=""
                        h={200}
                        w="auto"
                        fit="contain"
                      />
                    </ListItem>
                    <ListItem>
                      <p>
                        Once complete, in your &quot;Tribes Launcher&quot; hit
                        the &quot;Advanced&quot; tab and hit &quot;Reinstall
                        TAMods&quot;. Hit &quot;Yes&quot; on the prompt and then
                        hit &quot;Update&quot; to start the process.
                      </p>
                      <Image
                        src="/static/img/install/launcher-advanced-tab.png"
                        alt=""
                        h={200}
                        w="auto"
                        fit="contain"
                      />
                      <p>
                        Now, under the &quot;Packages&quot; Tab you can install
                        the custom packages that were removed earlier. This
                        should just be the custom maps and assets packages.
                      </p>
                      <Image
                        src="/static/img/install/launcher-packages-tab.png"
                        alt=""
                        h={200}
                        w="auto"
                        fit="contain"
                      />
                    </ListItem>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="IDK">
                <Accordion.Control>
                  I&apos;m having issues not stated here with the launcher
                </Accordion.Control>
                <Accordion.Panel>
                  <p>
                    When in doubt, under the &quot;Advanced&quot; tab hit
                    &quot;Reinstall TAMods&quot;. This should allow you to
                    reinstall packages as well.
                  </p>
                  <Image
                    src="/static/img/install/launcher-advanced-tab.png"
                    alt=""
                    h={200}
                    w="auto"
                    fit="contain"
                  />
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
        </Paper>
      </div>
    </>
  );
}
