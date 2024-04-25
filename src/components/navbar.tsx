"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "~/lib/utils";
import {
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
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

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
  {
    icon: FaWeightHanging,
    title: "Heavy on Flag",
    description: "Unavailable - Needs writing.", // [VSDF]
    link: "", // /docs/gameplay/guide-hof
  },
  {
    icon: FaShield,
    title: "Defense",
    description: "Unavailable - Needs writing.", // [VSDB]
    link: "", // /docs/gameplay/guide-defense
  },
  {
    icon: RxCrosshair1,
    title: "Sniping",
    description: "Unavailable - Needs writing.", // [VSDD]
    link: "", // /docs/gameplay/guide-snipe
  },
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
    <div className="flex justify-between sticky top-0 z-50 h-[60px] w-full px-3 gap-3 bg-slate-950">
      <Link href={"/"} className="flex flex-row items-center gap-3">
        <img src="/static/img/blueplate.png" alt="" className="h-8 w-8" />
        <h1 className="invisible md:visible">Dodges Domain</h1>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Installation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-3">
                <div className="flex flex-row justify-between p-6">
                  <h1>Tribes Installation</h1>
                </div>
              </div>
              <Separator />
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {installMenuData.map((component) => (
                  <div className="flex flex-row items-center gap-3">
                    <component.icon />
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.link}
                    >
                      {component.description}
                    </ListItem>
                  </div>
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
            <NavigationMenuTrigger>Gameplay Guides</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-3">
                <div className="flex flex-row justify-between p-6">
                  <h1>Gameplay Guides</h1>
                </div>
                <Separator />
              </div>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {pugMenuData.map((component) => (
                  <div className="flex flex-row items-center gap-3">
                    <component.icon />
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.link}
                    >
                      {component.description}
                    </ListItem>
                  </div>
                ))}
                {gameplayMenuData.map((component) => (
                  <div className="flex flex-row items-center gap-3">
                    <component.icon />
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.link}
                    >
                      {component.description}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Map Development</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-3">
                <div className="flex flex-row justify-between p-6">
                  <h1>Map Development</h1>
                </div>
                <Separator />
              </div>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {mapDevelopmentMenuData.map((component) => (
                  <div className="flex flex-row items-center gap-3">
                    <component.icon />
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.link}
                    >
                      {component.description}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Game Information</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-3">
                <div className="flex flex-row justify-between p-6">
                  <h1>Game Information</h1>
                </div>
                <Separator />
              </div>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {tribesLiveInfoMenuData.map((component) => (
                  <div className="flex flex-row items-center gap-3">
                    <component.icon />
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.link}
                    >
                      {component.description}
                    </ListItem>
                  </div>
                ))}
                {tribesInfoMenuData.map((component) => (
                  <div className="flex flex-row items-center gap-3">
                    <component.icon />
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.link}
                    >
                      {component.description}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center pe-3">
        <ModeToggle />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
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
