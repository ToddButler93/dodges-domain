"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "~/lib/utils";
import { FaBars, FaChevronRight, FaGun, FaSteam } from "react-icons/fa6";
import { FaEdit, FaHistory } from "react-icons/fa";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";

const installMenuData = [
  {
    icon: FaSteam,
    title: "Tribes 3 Steam Page",
    description: "Purchase & play via steam!",
    link: "https://store.steampowered.com/app/2687970/TRIBES_3_Rivals/",
  },
  {
    icon: FaEdit,
    title: "Configuration Guide",
    description: "Configuring Tribes 3: Rivals!",
    link: "/t3/docs/guide-config",
  },
];

// const gameplayMenuData = [
//   {
//     icon: FaGun,
//     title: "Offense",
//     description: "[VSAA]",
//     link: "/t3/docs/gameplay/guide-offense",
//   },
//   {
//     icon: FaFlag,
//     title: "Capping",
//     description: "[VSAF]",
//     link: "/t3/docs/gameplay/guide-cap",
//   },
//   {
//     icon: FaWeightHanging,
//     title: "Heavy on Flag",
//     description: "Unavailable - Needs writing.", // [VSDF]
//     link: "", // /t3/docs/gameplay/guide-hof
//   },
//   {
//     icon: FaShield,
//     title: "Defense",
//     description: "Unavailable - Needs writing.", // [VSDB]
//     link: "", // /t3/docs/gameplay/guide-defense
//   },
//   {
//     icon: RxCrosshair1,
//     title: "Chasing",
//     description: "Unavailable - Needs writing.", // [VSDD]
//     link: "", // /t3/docs/gameplay/guide-chase
//   },
// ];

const tribesInfoMenuData = [
  {
    icon: FaHistory,
    title: "Road Map",
    description: "Early Access Road Map",
    link: "/t3/docs/information/road-map",
  },
  {
    icon: FaGun,
    title: "Classes",
    description: "Tribes 3: Rivals Weapon Information",
    link: "/t3/docs/information/classes",
  },
  {
    icon: FaHistory,
    title: "Patch History",
    description: "Tribes 3: Rivals Patch History",
    link: "/t3/docs/information/patch-history",
  },
  {
    icon: FaHistory,
    title: "Links",
    description: "External Resources",
    link: "/t3/docs/information/links",
  },
];

export function NavBarT3() {
  return (
    // TODO: Header Background/text variables
    <div className="sticky top-0 z-50 flex h-[60px] w-screen justify-between gap-3 bg-gradient-to-b from-orange-500 to-red-900 px-3">
      <Link href={"/t3"} className="flex flex-row items-center gap-3 pe-3">
        <Image
          width={500}
          height={500}
          alt=""
          src="https://utfs.io/f/a1dd52b8-5b9e-432d-9a7b-b713f2aaf928-whylmk.png"
          className="h-8 w-8 min-w-8"
        />
        <h4 className="text-nowrap bg-transparent py-3 text-zinc-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]  max-xl:hidden">
          Dodges Domain
        </h4>
        <h4 className="text-nowrap bg-transparent py-3 text-zinc-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] lg:hidden">
          Dodges Domain
        </h4>
      </Link>
      <NavigationMenu className="max-lg:hidden">
        <NavigationMenuList className=" text-zinc-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
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
                {tribesInfoMenuData.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.link}
                  >
                    <div className="flex flex-row flex-nowrap items-center gap-3 transition-all duration-300 hover:text-teal-500 active:text-teal-500">
                      <component.icon
                        color="teal"
                        className="h-10 w-10 p-1 dark:bg-zinc-800"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm">{component.title}</p>
                        <p className="text-xs">{component.description}</p>
                      </div>
                    </div>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Installation
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-row justify-between p-6">
                <h3>Tribes 3 Installation</h3>
              </div>
              <Separator />
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {installMenuData.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.link}
                  >
                    <div className="flex flex-row flex-nowrap items-center gap-3 transition-all duration-300 hover:text-teal-500 active:text-teal-500">
                      <component.icon
                        color="teal"
                        className="h-10 w-10 p-1 dark:bg-zinc-800"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm">{component.title}</p>
                        <p className="text-xs">{component.description}</p>
                      </div>
                    </div>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/t3/docs/gameplay/guide-quick" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + " bg-transparent"}
              >
                Competitive Guide
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/t3/docs/maps" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + " bg-transparent"}
              >
                Maps
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3 pe-3">
        <ModeToggle />
        <div className="flex items-center lg:hidden">
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
                  <SheetTitle className="pb-6">Dodges Domain</SheetTitle>
                </SheetHeader>
                <div className="flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-b from-amber-400 to-red-500 p-3 text-lg font-semibold text-zinc-950 hover:text-zinc-950">
                  <SheetClose asChild>
                    <Link href="/">Looking for Tribes Ascend?</Link>
                  </SheetClose>
                </div>
                <Collapsible className="grid gap-3 pe-6 pt-6">
                  <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    Installation Guides
                    <FaChevronRight className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  {installMenuData.map((component) => (
                    <CollapsibleContent key={component.title}>
                      <SheetClose asChild>
                        <Link
                          className="flex w-full items-center text-lg font-semibold"
                          href={component.link}
                        >
                          <div className="flex grow flex-row items-center gap-6 rounded p-3 hover:bg-accent">
                            <component.icon className="h-10 w-10 rounded p-2 text-primary dark:bg-zinc-800" />
                            <div className="flex flex-row gap-2">
                              {component.title}
                            </div>
                          </div>
                        </Link>
                      </SheetClose>
                    </CollapsibleContent>
                  ))}
                </Collapsible>
                <div className="flex w-full items-center gap-3 pe-6 pt-6 text-lg font-semibold">
                  <SheetClose asChild>
                    <Link href="/t3/docs/gameplay/guide-quick">
                      Competitive Guide
                    </Link>
                  </SheetClose>
                </div>
                <div className="flex w-full items-center gap-3 pe-6 pt-6 text-lg font-semibold">
                  <SheetClose asChild>
                    <Link href="/t3/docs/maps">Maps</Link>
                  </SheetClose>
                </div>
                <Collapsible className="grid gap-3 pe-6 pt-6">
                  <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    Tribes Information
                    <FaChevronRight className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  {tribesInfoMenuData.map((component) => (
                    <CollapsibleContent key={component.title}>
                      <SheetClose asChild>
                        <Link
                          className="flex w-full items-center text-lg font-semibold"
                          href={component.link}
                        >
                          <div className="flex grow flex-row items-center gap-6 rounded p-3 hover:bg-accent">
                            <component.icon className="h-10 w-10 rounded p-2 text-primary dark:bg-zinc-800" />
                            <div className="flex flex-row gap-2">
                              {component.title}
                            </div>
                          </div>
                        </Link>
                      </SheetClose>
                    </CollapsibleContent>
                  ))}
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
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
