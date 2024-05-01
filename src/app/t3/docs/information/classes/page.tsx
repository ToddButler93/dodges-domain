import { Card } from "~/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Suspense } from "react";

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
              <TabsTrigger value="lo">Light Offense</TabsTrigger>
              <TabsTrigger value="ld">Light Defense</TabsTrigger>
              <TabsTrigger value="mo">Medium Offense</TabsTrigger>
              <TabsTrigger value="md">Medium Defense</TabsTrigger>
              <TabsTrigger value="ho">Heavy Offense</TabsTrigger>
              <TabsTrigger value="hd">Heavy Defense</TabsTrigger>
            </TabsList>
            <TabsContent value="lo" className="flex flex-col gap-3 ps-6">
              <h2>Light Offense</h2>
              <div className="grid grid-cols-2">
                <div className="flex flex-col">
                  <p>Primary role: Capper</p>
                  <ul className="list-disc p-3">
                    <li>No flag drag</li>
                    <li>Extended reach for flags</li>
                  </ul>
                  <h3>Loadout</h3>
                  <ul className="list-disc p-3">
                    <h4>Primary</h4>
                    <ul className="list-disc p-3">
                      <li>Spinfusor</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Secondary</h4>
                    <ul className="list-disc p-3">
                      <li>Chaingun</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Tertiary</h4>
                    <ul className="list-disc p-3">
                      <li>Shocklance</li>
                      <li>Shotgun</li>
                    </ul>
                    <h4>Grenade</h4>
                    <ul className="list-disc p-3">
                      <li>Explosive Nitron</li>
                      <li>Shotgun</li>
                    </ul>
                  </ul>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
            </TabsContent>
            <TabsContent value="ld" className="flex flex-col gap-3 ps-6">
              <h2>Light Defense</h2>
              <div className="grid grid-cols-2">
                <div className="flex flex-col">
                  <p>Primary role: Chase</p>
                  <ul className="list-disc p-3">
                    <li>Flag drag</li>
                    <li>Increased damage vs capper</li>
                    <li>Self damage decreased when enemy has the flag</li>
                  </ul>
                  <h3>Loadout</h3>
                  <ul className="list-disc p-3">
                    <h4>Primary</h4>
                    <ul className="list-disc p-3">
                      <li>Spinfusor</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Secondary</h4>
                    <ul className="list-disc p-3">
                      <li>Chaingun</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Tertiary</h4>
                    <ul className="list-disc p-3">
                      <li>Shocklance</li>
                      <li>Shotgun</li>
                    </ul>
                    <h4>Grenade</h4>
                    <ul className="list-disc p-3">
                      <li>Explosive Nitron</li>
                      <li>Shotgun</li>
                    </ul>
                  </ul>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
            </TabsContent>
            <TabsContent value="mo" className="flex flex-col gap-3 ps-6">
              <h2>Medium Offense</h2>
              <div className="grid grid-cols-2">
                <div className="flex flex-col">
                  <p>Primary role: Clear/Base destruction</p>
                  <ul className="list-disc p-3">
                    <li>Flag drag</li>
                    <li>Increased damage vs enemy base assets</li>
                  </ul>
                  <h3>Loadout</h3>
                  <ul className="list-disc p-3">
                    <h4>Primary</h4>
                    <ul className="list-disc p-3">
                      <li>Spinfusor</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Secondary</h4>
                    <ul className="list-disc p-3">
                      <li>Chaingun</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Tertiary</h4>
                    <ul className="list-disc p-3">
                      <li>Shocklance</li>
                      <li>Shotgun</li>
                    </ul>
                    <h4>Grenade</h4>
                    <ul className="list-disc p-3">
                      <li>Explosive Nitron</li>
                      <li>Shotgun</li>
                    </ul>
                  </ul>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
            </TabsContent>
            <TabsContent value="md" className="flex flex-col gap-3 ps-6">
              <h2>Medium Defense</h2>
              <div className="grid grid-cols-2">
                <div className="flex flex-col">
                  <p>Primary role: Base Defense</p>
                  <ul className="list-disc p-3">
                    <li>Flag drag</li>
                    <li>Increase speed of repair tool</li>
                  </ul>
                  <h3>Loadout</h3>
                  <ul className="list-disc p-3">
                    <h4>Primary</h4>
                    <ul className="list-disc p-3">
                      <li>Spinfusor</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Secondary</h4>
                    <ul className="list-disc p-3">
                      <li>Chaingun</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Tertiary</h4>
                    <ul className="list-disc p-3">
                      <li>Shocklance</li>
                      <li>Shotgun</li>
                    </ul>
                    <h4>Grenade</h4>
                    <ul className="list-disc p-3">
                      <li>Explosive Nitron</li>
                      <li>Shotgun</li>
                    </ul>
                  </ul>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
            </TabsContent>
            <TabsContent value="ho" className="flex flex-col gap-3 ps-6">
              <h2>Heavy Offense</h2>
              <div className="grid grid-cols-2">
                <div className="flex flex-col">
                  <p>Primary role: Clear/Base destruction</p>
                  <ul className="list-disc p-3">
                    <li>High flag drag</li>
                    <li>Higher damage output??</li>
                  </ul>
                  <h3>Loadout</h3>
                  <ul className="list-disc p-3">
                    <h4>Primary</h4>
                    <ul className="list-disc p-3">
                      <li>Spinfusor</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Secondary</h4>
                    <ul className="list-disc p-3">
                      <li>Chaingun</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Tertiary</h4>
                    <ul className="list-disc p-3">
                      <li>Shocklance</li>
                      <li>Shotgun</li>
                    </ul>
                    <h4>Grenade</h4>
                    <ul className="list-disc p-3">
                      <li>Explosive Nitron</li>
                      <li>Shotgun</li>
                    </ul>
                  </ul>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
            </TabsContent>
            <TabsContent value="hd" className="flex flex-col gap-3 ps-6">
              <h2>Heavy Defense</h2>
              <div className="grid grid-cols-2">
                <div className="flex flex-col">
                  <p>Primary role: Heavy on Flag / Heavy Defense</p>
                  <ul className="list-disc p-3">
                    <li>High flag drag</li>
                    <li>Extended reach for flags</li>
                  </ul>
                  <h3>Loadout</h3>
                  <ul className="list-disc p-3">
                    <h4>Primary</h4>
                    <ul className="list-disc p-3">
                      <li>Spinfusor</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Secondary</h4>
                    <ul className="list-disc p-3">
                      <li>Chaingun</li>
                      <li>Bolt Launcher</li>
                    </ul>
                    <h4>Tertiary</h4>
                    <ul className="list-disc p-3">
                      <li>Shocklance</li>
                      <li>Shotgun</li>
                    </ul>
                    <h4>Grenade</h4>
                    <ul className="list-disc p-3">
                      <li>Explosive Nitron</li>
                      <li>Shotgun</li>
                    </ul>
                  </ul>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://cdn1.epicgames.com/spt-assets/28f7b2fa11de437db22450f7f43b584d/tribes-3-rivals-8j2mp.jpg"
                  alt={""}
                />
              </div>
            </TabsContent>
          </Tabs>
        </Suspense>
      </div>
    </>
  );
}
