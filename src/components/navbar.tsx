"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "~/lib/utils";
import {
  FaBars,
  FaChevronRight,
  FaDownload,
  FaFlag,
  FaGamepad,
  FaGun,
  FaPlus,
  FaShield,
  FaWeightHanging,
} from "react-icons/fa6";
import { RxCrosshair1 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";

const installMenuData = [
  {
    icon: FaDownload,
    title: "Installation Guide",
    description: "Get Tribes Ascend running!",
    link: "/docs/guide-install-setup",
  },
  {
    icon: FaEdit,
    title: "Configuration Guide",
    description: "Configuring Tribes Ascend!",
    link: "/docs/guide-config",
  },
];

const pugMenuData = [
  {
    icon: FaGamepad,
    title: "PUG Guide",
    description: "[VGCG]",
    link: "/docs/gameplay/guide-quick",
  },
];

const gameplayMenuData = [
  {
    icon: FaGun,
    title: "Offense",
    description: "[VSAA]",
    link: "/docs/gameplay/guide-offense",
  },
  {
    icon: FaFlag,
    title: "Capping",
    description: "[VSAF]",
    link: "/docs/gameplay/guide-cap",
  },
  // {
  //   icon: FaWeightHanging,
  //   title: "Heavy on Flag",
  //   description: "Unavailable - Needs writing.", // [VSDF]
  //   link: "", // /docs/gameplay/guide-hof
  // },
  // {
  //   icon: FaShield,
  //   title: "Defense",
  //   description: "Unavailable - Needs writing.", // [VSDB]
  //   link: "", // /docs/gameplay/guide-defense
  // },
  // {
  //   icon: RxCrosshair1,
  //   title: "Sniping",
  //   description: "Unavailable - Needs writing.", // [VSDD]
  //   link: "", // /docs/gameplay/guide-snipe
  // },
];

const mapDevelopmentMenuData = [
  {
    icon: FaGamepad,
    title: "Map Development",
    description: "Setting up UDK for Tribes Ascend map development.",
    link: "/docs/development/guide-map-dev",
  },
  {
    icon: FaGamepad,
    title: "Using UDK",
    description: "How to use UDK to make Tribes Ascend maps.",
    link: "/docs/development/guide-udk-basics",
  },
];

const tribesLiveInfoMenuData = [
  {
    icon: FaGamepad,
    title: "Server Browser",
    description: "Work in Progress",
    link: "/server-browser",
  },
  {
    icon: FaGamepad,
    title: "Match History",
    description: "Work in Progress",
    link: "/match-history",
  },
];

const tribesInfoMenuData = [
  {
    icon: FaGamepad,
    title: "Patch History",
    description: "Patch History for Tribes Ascend.",
    link: "/docs/information/patch-history",
  },
  {
    icon: FaGamepad,
    title: "Weapon Data",
    description: "Weapon Data for Tribes Ascend.",
    link: "/docs/information/weapon-data",
  },
  {
    icon: FaGamepad,
    title: "Game Server Hosting",
    description: "How to host Tribes Ascend servers, powered by TAServer.",
    link: "/docs/servers/guide-hosting",
  },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavBar() {
  return (
    // TODO: Header Background/text variables
    <div className="sticky top-0 z-50 flex h-[60px] w-screen justify-between gap-3 bg-zinc-800 px-3">
      <Link href={"/"} className="flex flex-row items-center gap-3 pe-3">
        <img
          src="/static/img/blueplate.png"
          alt=""
          className="h-8 w-8 min-w-8"
        />
        <h3 className="text-nowrap bg-transparent py-3 text-zinc-100  max-lg:hidden">
          Dodges Domain
        </h3>
        <h3 className="text-nowrap bg-transparent py-3 text-zinc-100  md:hidden">
          Dodges Domain
        </h3>
      </Link>
      <NavigationMenu className="max-md:hidden">
        <NavigationMenuList className="text-zinc-100">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Installation
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-row justify-between p-6">
                <h3>Tribes Installation</h3>
              </div>
              <Separator />
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {installMenuData.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.link}
                  >
                    <div className="flex flex-row items-center gap-3">
                      <component.icon />
                      {component.description}
                    </div>
                  </ListItem>
                ))}
              </ul>
              <Separator />
              <ul className="flex items-center justify-between gap-3 p-6 ">
                <Button asChild>
                  <a href="steam://install/17080/">Steam install</a>
                </Button>
                <FaPlus />
                <Button asChild>
                  <a href="https://github.com/mcoot/TribesLauncherSharp/releases/latest">
                    Download Tribes Launcher
                  </a>
                </Button>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Gameplay Guides
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-3">
                <div className="flex flex-row justify-between p-6">
                  <h3>Gameplay Guides</h3>
                </div>
                <Separator />
              </div>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {pugMenuData.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.link}
                  >
                    <div className="flex flex-row items-center gap-3">
                      <component.icon />
                      {component.description}
                    </div>
                  </ListItem>
                ))}
                {gameplayMenuData.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.link}
                  >
                    <div className="flex flex-row items-center gap-3">
                      <component.icon />
                      {component.description}
                    </div>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Map Development
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-3">
                <div className="flex flex-row justify-between p-6">
                  <h3>Map Development</h3>
                </div>
                <Separator />
              </div>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {mapDevelopmentMenuData.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.link}
                  >
                    <div className="flex flex-row items-center gap-3">
                      <component.icon />
                      {component.description}
                    </div>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Game Information
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-3">
                <div className="flex flex-row justify-between p-6">
                  <h3>Game Information</h3>
                </div>
                <Separator />
              </div>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {tribesLiveInfoMenuData.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.link}
                  >
                    <div className="flex flex-row items-center gap-3">
                      <component.icon />
                      {component.description}
                    </div>
                  </ListItem>
                ))}
                {tribesInfoMenuData.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.link}
                  >
                    <div className="flex flex-row items-center gap-3">
                      <component.icon />
                      {component.description}
                    </div>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3 pe-3">
        <ModeToggle />
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="flex flex-col items-center justify-center"
                size="icon"
                variant="outline"
              >
                <FaBars className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <ScrollArea className="h-[720px]">
                <SheetHeader>
                  <SheetTitle>Dodges Domain</SheetTitle>
                  <SheetDescription>
                    <Button
                      className="bg-gradient-to-b from-amber-400 to-red-500 text-zinc-950"
                      asChild
                      size="lg"
                    >
                      <Link href="/t3">Looking for Tribes 3: Rivals?</Link>
                    </Button>
                  </SheetDescription>
                </SheetHeader>
                <Collapsible className="grid gap-3 pt-6 pe-6">
                  <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    Installation Guides
                    <FaChevronRight className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {installMenuData.map((component) => (
                      <Link
                        className="flex w-full items-center text-lg font-semibold"
                        href={component.link}
                      >
                        <div className="flex grow flex-row items-center gap-6 rounded p-3 hover:bg-accent">
                          <component.icon className="h-10 w-10 rounded p-2 text-primary dark:bg-zinc-800" />
                          <div className="flex flex-row gap-2">
                            <b>{component.title}</b>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="grid gap-3 pt-6 pe-6">
                  <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    Gameplay Guides
                    <FaChevronRight className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {gameplayMenuData.map((component) => (
                      <Link
                        className="flex w-full items-center text-lg font-semibold"
                        href={component.link}
                      >
                        <div className="flex grow flex-row items-center gap-6 rounded p-3 hover:bg-accent">
                          <component.icon className="h-10 w-10 rounded p-2 text-primary dark:bg-zinc-800" />
                          <div className="flex flex-row gap-2">
                            <b>{component.title}</b>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="grid gap-3 pt-6 pe-6">
                  <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    Map Development
                    <FaChevronRight className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {mapDevelopmentMenuData.map((component) => (
                      <Link
                        className="flex w-full items-center text-lg font-semibold"
                        href={component.link}
                      >
                        <div className="flex grow flex-row items-center gap-6 rounded p-3 hover:bg-accent">
                          <component.icon className="h-10 w-10 rounded p-2 text-primary dark:bg-zinc-800" />
                          <div className="flex flex-row gap-2">
                            <b>{component.title}</b>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
                <div className="flex w-full items-center gap-3 pt-6 pe-6 text-lg font-semibold">
                  <Link href="/docs/custommaps">Community Maps</Link>
                </div>
                <Collapsible className="grid gap-3 pt-6 pe-6">
                  <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    Tribes Information
                    <FaChevronRight className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {tribesInfoMenuData.map((component) => (
                      <Link
                        className="flex w-full items-center text-lg font-semibold"
                        href={component.link}
                      >
                        <div className="flex grow flex-row items-center gap-6 rounded p-3 hover:bg-accent">
                          <component.icon className="h-10 w-10 rounded p-2 text-primary dark:bg-zinc-800" />
                          <div className="flex flex-row gap-2">
                            <b>{component.title}</b>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li key={title}>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
