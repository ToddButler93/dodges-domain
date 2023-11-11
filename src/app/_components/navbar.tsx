"use client";

import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import logo from "../../../public/static/img/blueplate.png";

import {
  ColorSchemeScript,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  FaDownload,
  FaFlag,
  FaGamepad,
  FaGun,
  FaPlus,
  FaShield,
  FaWeightHanging,
} from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RxCrosshair1 } from "react-icons/rx";
import classes from "./navbar.module.css";
import { ColorSchemeToggle } from "./themeToggle";

const installMenuData = [
  {
    icon: FaDownload,
    title: "Installation Guide",
    description: "TODO: Write description",
    link: "/docs/guide-install-setup",
  },
  {
    icon: FaEdit,
    title: "Configuration Guide",
    description: "TODO: Write description",
    link: "/docs/guide-config",
  },
];

const pugMenuData = [
  {
    icon: FaGamepad,
    title: "PUG Guide",
    description: "TODO: Write description",
    link: "/docs/gameplay/guide-quick",
  },
];

const gameplayMenuData = [
  {
    icon: FaGun,
    title: "Offense",
    description: "TODO: Write description",
    link: "/docs/servers/guide-offense",
  },
  {
    icon: FaFlag,
    title: "Capping",
    description: "TODO: Write description",
    link: "/docs/servers/guide-cap",
  },
  {
    icon: FaWeightHanging,
    title: "Heavy on Flag",
    description: "TODO: Write description",
    link: "/docs/servers/guide-hof",
  },
  {
    icon: FaShield,
    title: "Defense",
    description: "TODO: Write description",
    link: "/docs/servers/guide-defense",
  },
  {
    icon: RxCrosshair1,
    title: "Sniping",
    description: "TODO: Write description",
    link: "/docs/servers/guide-snipe",
  },
];

const mapDevelopmentMenuData = [
  {
    icon: FaGamepad,
    title: "Map Development",
    description: "TODO: Write description",
    link: "/docs/development/guide-map-dev",
  },
  {
    icon: FaGamepad,
    title: "Using UDK",
    description: "TODO: Write description",
    link: "/docs/development/guide-udk-basics",
  },
];

const tribesLiveInfoMenuData = [
  {
    icon: FaGamepad,
    title: "Server Browser",
    description: "TODO: Write description",
    link: "/server-browser",
  },
  {
    icon: FaGamepad,
    title: "Match History",
    description: "TODO: Write description",
    link: "/match-history",
  },
];

const tribesInfoMenuData = [
  {
    icon: FaGamepad,
    title: "Patch History",
    description: "TODO: Write description",
    link: "/docs/information",
  },
  {
    icon: FaGamepad,
    title: "Weapon Data",
    description: "TODO: Write description",
    link: "/docs/information/weapon-data",
  },
  {
    icon: FaGamepad,
    title: "Game Server Hosting",
    description: "TODO: Write description",
    link: "/docs/servers/guide-hosting",
  },
];

export function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [installLinksOpened, { toggle: toggleInstallLinks }] =
    useDisclosure(false);
  const [gameplayLinksOpened, { toggle: toggleGameplayLinks }] =
    useDisclosure(false);
  const [mapDevelopmentLinksOpened, { toggle: toggleMapDevelopmentLinks }] =
    useDisclosure(false);
  const [
    tribesInformationLinksOpened,
    { toggle: toggleTribesInformationLinks },
  ] = useDisclosure(false);

  const installLinks = installMenuData.map((item) => (
    <UnstyledButton
      component={Link}
      href={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group
        wrap="nowrap"
        align="flex-start"
        className="transition-all duration-300 hover:text-teal-500 active:text-teal-500"
      >
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color="teal" />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const gameplayLinks = gameplayMenuData.map((item) => (
    <UnstyledButton
      component={Link}
      href={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group
        wrap="nowrap"
        align="flex-start"
        className="transition-all duration-300 hover:text-teal-500 active:text-teal-500"
      >
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color="teal" />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const pugLinks = pugMenuData.map((item) => (
    <UnstyledButton
      component={Link}
      href={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group
        wrap="nowrap"
        align="flex-start"
        className="transition-all duration-300 hover:text-teal-500 active:text-teal-500"
      >
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color="teal" />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  const mapDevelopmentLinks = mapDevelopmentMenuData.map((item) => (
    <UnstyledButton
      component={Link}
      href={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group
        wrap="nowrap"
        align="flex-start"
        className="transition-all duration-300 hover:text-teal-500 active:text-teal-500"
      >
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color="teal" />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  const tribesInformationLinks = tribesInfoMenuData.map((item) => (
    <UnstyledButton
      component={Link}
      href={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group
        wrap="nowrap"
        align="flex-start"
        className="transition-all duration-300 hover:text-teal-500 active:text-teal-500"
      >
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color="teal" />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  const tribesLiveInformationLinks = tribesLiveInfoMenuData.map((item) => (
    <UnstyledButton
      component={Link}
      href={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group
        wrap="nowrap"
        align="flex-start"
        className="transition-all duration-300 hover:text-teal-500 active:text-teal-500"
      >
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color="teal" />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box className="sticky top-0 z-50 w-full">
      <header className={classes.header}>
        <ColorSchemeScript />
        <Group justify="space-between" w="100%" h="100%">
          <Link href={"/"} className="flex flex-row items-center justify-start">
            <Image src={logo} alt="" className="h-8 w-8" />
            <Title className={classes.link}>Dodges Domain</Title>
          </Link>
          <Group h="100%" gap={0} visibleFrom="md">
            <HoverCard
              width={600}
              position="bottom-start"
              radius="md"
              shadow="md"
              withinPortal
              openDelay={50}
              closeDelay={50}
              transitionProps={{ transition: "scale-y" }}
            >
              <HoverCard.Target>
                <Link href="/docs/guide-install-setup" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Tribes Installation
                    </Box>
                  </Center>
                </Link>
              </HoverCard.Target>
              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Tribes Installation</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {installLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Quick Setup:
                      </Text>
                    </div>
                    <Button
                      component={Link}
                      href="steam://install/17080/"
                      variant="default"
                    >
                      Steam Install
                    </Button>
                    <FaPlus />
                    <Button
                      component={Link}
                      href="https://github.com/mcoot/TribesLauncherSharp/releases/latest"
                      variant="default"
                    >
                      Download Tribes Launcher
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={600}
              position="bottom-start"
              radius="md"
              shadow="md"
              withinPortal
              openDelay={50}
              closeDelay={50}
              transitionProps={{ transition: "scale-y" }}
            >
              <HoverCard.Target>
                <Link href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Gameplay Guides
                    </Box>
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>How to Play</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>
                <Divider my="sm" />

                <SimpleGrid>{pugLinks}</SimpleGrid>

                <Divider my="sm" label="Roles" />

                <SimpleGrid cols={2} spacing={0}>
                  {gameplayLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between"></Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={600}
              position="bottom-start"
              radius="md"
              shadow="md"
              withinPortal
              openDelay={50}
              closeDelay={50}
              transitionProps={{ transition: "scale-y" }}
            >
              <HoverCard.Target>
                <Link href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Map Development
                    </Box>
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Developing Tribes Ascend Maps</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>
                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {mapDevelopmentLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        UDK 2011
                      </Text>
                    </div>
                    <Button
                      component={Link}
                      href="steam://install/17080/"
                      variant="default"
                    >
                      Download UDK
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link href="/docs/custommaps" className={classes.link}>
              Community Maps
            </Link>
            <HoverCard
              width={600}
              position="bottom-start"
              radius="md"
              shadow="md"
              withinPortal
              openDelay={50}
              closeDelay={50}
              transitionProps={{ transition: "scale-y" }}
            >
              <HoverCard.Target>
                <Link href="/docs/information" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Tribes Information
                    </Box>
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>General Tribes Information</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>
                <Divider my="sm" />
                <SimpleGrid cols={2} spacing={0}>
                  {tribesLiveInformationLinks}
                </SimpleGrid>
                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {tribesInformationLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">

                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
          <Group visibleFrom="lg">
            <ColorSchemeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="md"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="md"
        zIndex={50}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <UnstyledButton className={classes.link} onClick={toggleInstallLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Installation
              </Box>
            </Center>
          </UnstyledButton>
          <Collapse in={installLinksOpened}>{installLinks}</Collapse>
          <UnstyledButton
            className={classes.link}
            onClick={toggleGameplayLinks}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Gameplay Guides
              </Box>
            </Center>
          </UnstyledButton>
          <Collapse in={gameplayLinksOpened}>
            {pugLinks}
            {gameplayLinks}
          </Collapse>
          <UnstyledButton
            className={classes.link}
            onClick={toggleMapDevelopmentLinks}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Map Development
              </Box>
            </Center>
          </UnstyledButton>
          <Collapse in={mapDevelopmentLinksOpened}>
            {mapDevelopmentLinks}
          </Collapse>
          <Link href="/docs/custommaps" className={classes.link}>
            Community Maps
          </Link>
          <UnstyledButton
            className={classes.link}
            onClick={toggleTribesInformationLinks}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Tribes Information
              </Box>
            </Center>
          </UnstyledButton>
          <Collapse in={tribesInformationLinksOpened}>
            {tribesLiveInformationLinks}
            {tribesInformationLinks}
          </Collapse>
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <ColorSchemeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
