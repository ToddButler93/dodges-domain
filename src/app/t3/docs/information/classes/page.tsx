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
import { RxTriangleDown } from "react-icons/rx";

type T3Class = {
  name: string;
  armor: string;
  health: number;
  energy: number;
  speed: number;
  mass: number;
  image: string;
  icon: string;
  description: string;
  abilities: string[];
  weapons1: Weapon[];
  weapons2: Weapon[];
  weapons3: Weapon[];
  belts: Weapon[];
  packs: Weapon[];
};
interface T3ClassProps {
  t3class: T3Class;
}

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

const lightSpinfusor: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Light Spinfusor",
  damage: "600",
  fireRate: 0.46,
  reloadLength: 1.17,
  magazineSize: 1,
  description:
    "A lighter framed spinfusor built to support efficient damage at high speeds",
};
const boltLauncher: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Bolt Launcher",
  damage: "580",
  fireRate: 0.46,
  reloadLength: 1.27,
  magazineSize: 1,
  description:
    "A lighter framed spinfusor built to support efficient damage at high speeds",
};
const lightChaingun: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Light Chaingun",
  damage: "35",
  fireRate: 0.1,
  reloadLength: 0,
  magazineSize: 180,
  description: "Large magazine fully automatic weapon",
};

const phaseRifle: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Phase Rifle",
  damage: "5-480",
  fireRate: 1,
  reloadLength: 2,
  magazineSize: 4,
  description: "Sniper rifle with high damage at the cost of energy",
};
const sparrowPistol: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Sparrow Pistol",
  damage: "80",
  fireRate: 0.18,
  reloadLength: 1.4,
  magazineSize: 12,
  description: "A quick firing sidearm that can finish targets off at range",
};

const shotgun: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Shotgun",
  damage: "05x9",
  fireRate: 0.85,
  reloadLength: 1.95,
  magazineSize: 2,
  description:
    "A double barrel shotgun great for finishing off targets at close range",
};
const shocklance: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Shocklance",
  damage: "750 - 2250",
  fireRate: 0.38,
  reloadLength: 1.5,
  magazineSize: 1,
  description:
    "The Shocklance fires a short but very high damaging beam of energy that deals triple damage from behind",
};
const explosiveNitron: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Explosive Nitron",
  damage: "",
  fireRate: 0,
  reloadLength: 0,
  magazineSize: 0,
  description:
    "A grenade that applies a large amount of knockback with fair damage, but  does not force flag drops",
};
const chaffGrenade: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Chaff Grenade",
  damage: "",
  fireRate: 0,
  reloadLength: 0,
  magazineSize: 0,
  description:
    "Enemies caught within the explosion radius no longer see player carets, names, or healthbars for a short time",
};
const smokeGrenade: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Smoke Grenade",
  damage: "",
  fireRate: 0,
  reloadLength: 0,
  magazineSize: 0,
  description: "This grenade covers a large area with Smoke",
};
const impactNitron: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Impact Nitron",
  damage: "",
  fireRate: 0,
  reloadLength: 0,
  magazineSize: 0,
  description: "",
};
const blinkPack: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Blink Pack",
  damage: "",
  fireRate: 0,
  reloadLength: 0,
  magazineSize: 0,
  description:
    "Instantly teleport a short distance, while retaining your speed",
};
const thrustPack: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Thrust Pack",
  damage: "",
  fireRate: 0,
  reloadLength: 0,
  magazineSize: 0,
  description:
    "Activate for a directional burst of speed at the cost of energy",
};
const stealthPack: Weapon = {
  image: "/static/img/BE-Light-Spinfusor.jpg",
  name: "Stealth Pack",
  damage: "",
  fireRate: 0,
  reloadLength: 0,
  magazineSize: 0,
  description: "Activate for temporary invisibility",
};

const pathfinderClassData: T3Class = {
  name: "Pathfinder (Light Offense)",
  armor: "Light",
  health: 1000,
  energy: 100,
  speed: 3,
  mass: 1,
  image: "/static/img/BE-Light-Spinfusor.jpg",
  icon: "/static/img/BE-Light-Spinfusor.jpg",
  description:
    "Serve as a premier objective runner with extended reach and enhanced aerodynamics while holding the flag.",
  abilities: [
    "Passive:",
    "No longer suffer from drag while holding a flag",
    "Increases pickup range for flags by 50%",
  ],
  weapons1: [lightSpinfusor, boltLauncher],
  weapons2: [lightChaingun, phaseRifle],
  weapons3: [sparrowPistol, shocklance, shotgun],
  belts: [explosiveNitron, chaffGrenade, smokeGrenade],
  packs: [blinkPack, thrustPack, stealthPack],
};

const sentinalClassData: T3Class = {
  name: "Sentinal (Light Defense)",
  armor: "Light",
  health: 1000,
  energy: 100,
  speed: 3,
  mass: 1,
  image: "/static/img/BE-Light-Spinfusor.jpg",
  icon: "/static/img/BE-Light-Spinfusor.jpg",
  description:
    "Utilize your quick speed and energy buffs to chase down and eliminate enemies holding your flag.",
  abilities: [
    "When the enemy is holding your flag:",
    "Gain +20% energy regeneration",
    "Deal an additional 25% damage to the flag carrier",
    "35% reduced self damage",
    "35% increase self impulse",
  ],
  weapons1: [lightSpinfusor, boltLauncher],
  weapons2: [lightChaingun, phaseRifle],
  weapons3: [sparrowPistol, shocklance, shotgun],
  belts: [impactNitron, explosiveNitron, chaffGrenade],
  packs: [blinkPack, thrustPack, stealthPack],
};
const raiderClassData: T3Class = {
  name: "Raider (Medium Offense)",
  armor: "Medium",
  health: 1500,
  energy: 100,
  speed: 2,
  mass: 2,
  image: "/static/img/BE-Light-Spinfusor.jpg",
  icon: "/static/img/BE-Light-Spinfusor.jpg",
  description:
    "Employ your combination of mobility and firepower to harass defenders and assault the enemy base.",
  abilities: [
    "Passive:",
    "20% Increase to your throw power when throwing a flag",
    "Deal 25% bonus damage to base assets",
  ],
  weapons1: [lightSpinfusor, boltLauncher],
  weapons2: [lightChaingun, phaseRifle],
  weapons3: [sparrowPistol, shocklance, shotgun],
  belts: [impactNitron, explosiveNitron, chaffGrenade],
  packs: [blinkPack, thrustPack, stealthPack],
};
const technicianClassData: T3Class = {
  name: "Technician (Medium Defense)",
  armor: "Medium",
  health: 1500,
  energy: 100,
  speed: 2,
  mass: 2,
  image: "/static/img/BE-Light-Spinfusor.jpg",
  icon: "/static/img/BE-Light-Spinfusor.jpg",
  description:
    "Act as the first responder towards upkeeping your base installations, and as a strong defensive support.",
  abilities: [
    "Passive:",
    "Your repair tool is 50% more effective",
    "While within 125 meters of your base:",
    "Gain additional vertical thrust and jet control",
  ],
  weapons1: [lightSpinfusor, boltLauncher],
  weapons2: [lightChaingun, phaseRifle],
  weapons3: [sparrowPistol, shocklance, shotgun],
  belts: [impactNitron, explosiveNitron, chaffGrenade],
  packs: [blinkPack, thrustPack, stealthPack],
};
const doombringerClassData: T3Class = {
  name: "Doombringer (Heavy Offense)",
  armor: "Heavy",
  health: 2250,
  energy: 100,
  speed: 1,
  mass: 3,
  image: "/static/img/BE-Light-Spinfusor.jpg",
  icon: "/static/img/BE-Light-Spinfusor.jpg",
  description:
    "Use your powerful weapons and armor to clear enemy bases, destroy installations, and distract enemy defenders.",
  abilities: [
    "Passive:",
    "Health nuggets now restore an additional 750 health",
    "Weapon and Grenade explosion radius is increased by 10%:",
  ],
  weapons1: [lightSpinfusor, boltLauncher],
  weapons2: [lightChaingun, phaseRifle],
  weapons3: [sparrowPistol, shocklance, shotgun],
  belts: [impactNitron, explosiveNitron, chaffGrenade],
  packs: [blinkPack, thrustPack, stealthPack],
};
const juggernautClassData: T3Class = {
  name: "Juggernaut (Heavy Defense)",
  armor: "Heavy",
  health: 2250,
  energy: 100,
  speed: 1,
  mass: 3,
  image: "/static/img/BE-Light-Spinfusor.jpg",
  icon: "/static/img/BE-Light-Spinfusor.jpg",
  description:
    "Stand as an immovable object, acting as the primary defender of your team's flag stand.",
  abilities: [
    "Passive:",
    "Gain +60% increased mass",
    "Deal damage to enemies you collide with",
    "While standing within 20 meters of your base:",
    "+15% damage resistance",
    "Passive health and ammo regeneration",
  ],
  weapons1: [lightSpinfusor, boltLauncher],
  weapons2: [lightChaingun, phaseRifle],
  weapons3: [sparrowPistol, shocklance, shotgun],
  belts: [impactNitron, explosiveNitron, chaffGrenade],
  packs: [blinkPack, thrustPack, stealthPack],
};

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
              <T3Class t3class={pathfinderClassData} />
            </TabsContent>
            <TabsContent value="ld" className="flex flex-col gap-3 ps-6">
              <T3Class t3class={sentinalClassData} />
            </TabsContent>
            <TabsContent value="mo" className="flex flex-col gap-3 ps-6">
              <T3Class t3class={raiderClassData} />
            </TabsContent>
            <TabsContent value="md" className="flex flex-col gap-3 ps-6">
              <T3Class t3class={technicianClassData} />
            </TabsContent>
            <TabsContent value="ho" className="flex flex-col gap-3 ps-6">
              <T3Class t3class={doombringerClassData} />
            </TabsContent>
            <TabsContent value="hd" className="flex flex-col gap-3 ps-6">
              <T3Class t3class={juggernautClassData} />
            </TabsContent>
          </Tabs>
        </Suspense>
      </div>
    </>
  );
}

function T3Class(props: T3ClassProps) {
  const {
    name,
    armor,
    health,
    energy,
    speed,
    mass,
    abilities,
    description,
    weapons1,
    weapons2,
    weapons3,
    belts,
    packs,
  } = props.t3class;

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          {armor === "Light" && <FaChevronDown />}
          {armor === "Medium" && <RxTriangleDown />}
          {armor === "Heavy" && <RxTriangleDown />} {/* TODO Add heavy icon */}
          <h3>{name}</h3>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-2 justify-between ">
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
                {speed > 0 ? <FaDiamond /> : <BsDiamond />}
                {speed > 1 ? <FaDiamond /> : <BsDiamond />}
                {speed > 2 ? <FaDiamond /> : <BsDiamond />}
              </div>
              <p>Mass:</p>
              <div className="flex flex-row items-center gap-1">
                {mass > 0 ? <FaDiamond /> : <BsDiamond />}
                {mass > 1 ? <FaDiamond /> : <BsDiamond />}
                {mass > 2 ? <FaDiamond /> : <BsDiamond />}
              </div>
            </div>
            <p className="flex py-3 pe-3">{description}</p>
            <ul className="list-disc px-3">
              {abilities.map((ability, index) =>
                ability.endsWith(":") ? (
                  <b key={index}>{ability}</b>
                ) : (
                  <li key={index}>{ability}</li>
                ),
              )}
            </ul>
          </div>
          <Image
            width={1000}
            height={1000}
            src={pathfinderClassData.image}
            alt={pathfinderClassData.name}
          />
        </div>
        <div>
          <div className="grid grid-cols-2">
            <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
              Weapon 1
            </h4>
            <div className="gap-2 bg-blue-950  bg-opacity-40" />
          </div>
          <Separator className="bg-blue-800" />
          <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2 ">
            {weapons1.map((component) => (
              <WeaponItem key={component.name} weapon={component} />
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
              Weapon 2
            </h4>
            <div className="gap-2 bg-blue-950  bg-opacity-40" />
          </div>
          <Separator className="bg-blue-800" />
          <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
            {weapons2.map((component) => (
              <WeaponItem key={component.name} weapon={component} />
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
              Weapon 3
            </h4>
            <div className="gap-2 bg-blue-950  bg-opacity-40" />
          </div>
          <Separator className="bg-blue-800" />
          <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
            {weapons3.map((component) => (
              <WeaponItem key={component.name} weapon={component} />
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
              Belt
            </h4>
            <div className="gap-2 bg-blue-950  bg-opacity-40" />
          </div>
          <Separator className="bg-blue-800" />
          <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
            {belts.map((component) => (
              <WeaponItem key={component.name} weapon={component} />
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <h4 className="bg-blue-800 bg-opacity-90 px-3 text-zinc-50">
              Pack
            </h4>
            <div className="gap-2 bg-blue-950  bg-opacity-40" />
          </div>
          <Separator className="bg-blue-800" />
          <div className="grid grid-cols-4 gap-2 pt-1 max-md:grid-cols-2">
            {packs.map((component) => (
              <WeaponItem key={component.name} weapon={component} />
            ))}
          </div>
        </div>
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
            {props.weapon.magazineSize > 0 &&
              props.weapon.damage != "" &&
              props.weapon.fireRate > 0 &&
              props.weapon.reloadLength > 0 && (
                <>
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
                </>
              )}
            <p>{props.weapon.description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
