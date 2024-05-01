import { Card } from "~/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Suspense } from "react";
import { FaChevronDown, FaGamepad } from "react-icons/fa6";
import { BiPlusMedical } from "react-icons/bi";
import { MdBolt } from "react-icons/md";
import { FaDiamond } from "react-icons/fa6";
import { BsDiamond } from "react-icons/bs";
import { Separator } from "~/components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import React from "react";

type T3Class = {
  name: string;
  health: number;
  energy: number;
  speed: number;
  mass: number;
  image: string;
  icon: string;
  description: string;
  passive: string[];
};
interface T3ClassProps {
  t3class: T3Class;
}
const pathfinderClassData: T3Class = {
  name: "Pathfinder (Light Offense)",
  health: 1000,
  energy: 100,
  speed: 3,
  mass: 1,
  image: "/static/img/BE-Light-Spinfusor.jpg",
  icon: "/static/img/BE-Light-Spinfusor.jpg",
  description: "Serve as a premier objective runner with extended reach and enhanced aerodynamics while holding the flag.",
  passive: ["No longer suffer from drag while holding a flag", "Increases pickup range for flags by 50%"],
};

type Weapon = {
  name: string;
  image: string;
  damage: string;
  fireRate: number;
  reloadLength: number;
  magazineSize: number;
  description: string;
};
interface WeaponProps {
  weapon: Weapon;
}

const pathfinderWeapon1Data: Weapon[] = [
  {
    image: "/static/img/BE-Light-Spinfusor.jpg",
    name: "Light Spinfusor",
    damage: "600",
    fireRate: 0.46,
    reloadLength: 1.17,
    magazineSize: 1,
    description:
      "A lighter framed spinfusor built to support efficient damage at high speeds",
  },
  {
    image: "/static/img/BE-Light-Spinfusor.jpg",
    name: "Bolt Launcher",
    damage: "580",
    fireRate: 0.46,
    reloadLength: 1.27,
    magazineSize: 1,
    description:
      "A lighter framed spinfusor built to support efficient damage at high speeds",
  },
];
const pathfinderWeapon2Data: Weapon[] = [
  {
    image: "/static/img/BE-Light-Spinfusor.jpg",
    name: "Light Chaingun",
    damage: "35",
    fireRate: 0.1,
    reloadLength: 0,
    magazineSize: 180,
    description: "Large magazine fully automatic weapon",
  },
  {
    image: "/static/img/BE-Light-Spinfusor.jpg",
    name: "Phase Rifle",
    damage: "5-480",
    fireRate: 1,
    reloadLength: 2,
    magazineSize: 4,
    description: "Sniper rifle with high damage at the cost of energy",
  },
];
const pathfinderWeapon3Data: Weapon[] = [
  {
    image: "/static/img/BE-Light-Spinfusor.jpg",
    name: "Sparrow Pistol",
    damage: "80",
    fireRate: 0.18,
    reloadLength: 1.4,
    magazineSize: 12,
    description: "A quick firing sidearm that can finish targets off at range",
  },
  {
    image: "/static/img/BE-Light-Spinfusor.jpg",
    name: "Shotgun",
    damage: "05x9",
    fireRate: 0.85,
    reloadLength: 1.95,
    magazineSize: 2,
    description:
      "A double barrel shotgun great for finishing off targets at close range",
  },
  {
    image: "/static/img/BE-Light-Spinfusor.jpg",
    name: "Shocklance",
    damage: "750 - 2250",
    fireRate: 0.38,
    reloadLength: 1.5,
    magazineSize: 1,
    description:
      "The Shocklance fires a short but very high damaging beam of energy that deals triple damage from behind",
  },
];

export default function T3Classes() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Classes</h1>
        </Card>
        <Suspense>
          <Tabs
            defaultValue="lo"
            className="flex flex-row justify-center max-sm:flex-col max-sm:items-center"
          >
            <TabsList className="flex flex-col items-start justify-start py-1 dark:bg-zinc-800 dark:text-zinc-100">
              <TabsTrigger value="lo">
                <div className="flex flex-row items-center gap-3">
                  <FaGamepad />
                  <div>
                    <h4>Pathfinder</h4>
                    <p>Light Offense</p>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="ld">
                <div className="flex grow flex-row items-center gap-3">
                  <FaGamepad />
                  <div>
                    <h4>Sentinel</h4>
                    <p>Light Defense</p>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="mo">
                <div className="flex flex-row items-center gap-3">
                  <FaGamepad />
                  <div>
                    <h4>Raider</h4>
                    <p>Medium Offense</p>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="md">
                <div className="flex flex-row items-center gap-3">
                  <FaGamepad />
                  <div>
                    <h4>Technician</h4>
                    <p>Light Defense</p>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="ho">
                <div className="flex flex-row items-center gap-3">
                  <FaGamepad />
                  <div>
                    <h4>Doombringer</h4>
                    <p>Heavy Offense</p>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="hd">
                <div className="flex flex-row items-center gap-3">
                  <FaGamepad />
                  <div>
                    <h4>Juggernaut</h4>
                    <p>Heavy Defense</p>
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="lo" className="flex flex-col gap-3 ps-6">
              <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <T3Class t3class={pathfinderClassData}/>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 1
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2 ">
                  {pathfinderWeapon1Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 2
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon2Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 3
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon3Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ld" className="flex flex-col gap-3 ps-6">
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <T3Class t3class={pathfinderClassData}/>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 1
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2 ">
                  {pathfinderWeapon1Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 2
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon2Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 3
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon3Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mo" className="flex flex-col gap-3 ps-6">
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <T3Class t3class={pathfinderClassData}/>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 1
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2 ">
                  {pathfinderWeapon1Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 2
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon2Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 3
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon3Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="md" className="flex flex-col gap-3 ps-6">
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <T3Class t3class={pathfinderClassData}/>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 1
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2 ">
                  {pathfinderWeapon1Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 2
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon2Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 3
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon3Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ho" className="flex flex-col gap-3 ps-6">
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <T3Class t3class={pathfinderClassData}/>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 1
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2 ">
                  {pathfinderWeapon1Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 2
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon2Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 3
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon3Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="hd" className="flex flex-col gap-3 ps-6">
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <T3Class t3class={pathfinderClassData}/>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 1
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2 ">
                  {pathfinderWeapon1Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 2
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon2Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
                      Weapon 3
                    </h4>
                    <div className="gap-2 bg-blue-950  bg-opacity-40" />
                  </div>
                  <Separator className="bg-blue-800" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
                  {pathfinderWeapon3Data.map((component) => (
                    <WeaponItem key={component.name} weapon={component} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Suspense>
      </div>
    </>
  );
}

function T3Class(props: T3ClassProps) {
  const { name, health, energy, speed, mass, passive } = props.t3class;

  return (
    <div>
      <div className="flex flex-row items-center gap-3">
        <FaChevronDown />
        <h3>{name}</h3>
      </div>
      <div className="grid grid-cols-2 justify-between">
        <p>Health:</p>
        <div className="flex flex-row items-center gap-1">
          <BiPlusMedical />
          {health}
        </div>
        <p>Energy:</p>
        <div className="flex flex-row items-center gap-1">
          <MdBolt />
          {energy}
        </div>
        <p>Speed:</p>
        <div className="flex flex-row items-center gap-1">
          <FaDiamond />
          <FaDiamond />
          <FaDiamond />
        </div>
        <p>Mass:</p>
        <div className="flex flex-row items-center gap-1">
          <FaDiamond />
          <BsDiamond />
          <BsDiamond />
        </div>
      </div>
      <div className="pt-6">
        <b>Passive:</b>
        <ul className="list-disc p-3">
        {passive.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WeaponItem(props: WeaponProps) {
  return (
    <HoverCard key={props.weapon.name}>
      <HoverCardTrigger asChild>
        <Card className="flex flex-col items-center rounded-none bg-zinc-700 p-1 text-zinc-50 hover:bg-blue-800">
          <Image
            width={200}
            height={200}
            src={props.weapon.image}
            alt={props.weapon.name}
          />
          {props.weapon.name}
        </Card>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col">
          <div>
            <h3 className="text-nowrap">{props.weapon.name}</h3>
          </div>
          <div className="flex flex-col gap-1">
            <Image
              width={400}
              height={400}
              src={props.weapon.image}
              alt={props.weapon.name}
            />
            <Separator />
            <div className="grid grid-cols-2 gap-2">
              {props.weapon.damage != "" && (
                <div className="flex flex-row justify-between gap-1">
                  <p>Damage</p>
                  <p>{props.weapon.damage}</p>
                </div>
              )}
              {props.weapon.fireRate > 0 && (
                <div className="flex flex-row justify-between gap-1">
                  <p>Fire Rate</p>
                  <p>{props.weapon.fireRate}</p>
                </div>
              )}
              {props.weapon.reloadLength > 0 && (
                <div className="flex flex-row justify-between gap-1">
                  <p>Reload Length</p>
                  <p>{props.weapon.reloadLength}</p>
                </div>
              )}
              {props.weapon.magazineSize > 0 && (
                <div className="flex flex-row justify-between gap-1">
                  <p>Magazine Size</p>
                  <p>{props.weapon.magazineSize}</p>
                </div>
              )}
            </div>
            <Separator />
            <p>{props.weapon.description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
