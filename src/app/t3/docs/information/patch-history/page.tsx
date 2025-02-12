import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export default function T3PatchHistory() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Patch History</h1>
        </Card>
        <div>
          <h2>TRIBES 3: Rivals | 12.07.2023 | Prophecy Games</h2>
          <Button asChild><Link href="https://store.steampowered.com/news/app/2687970/view/3864714743492222462">Source</Link>
          </Button><h3>LOADOUTS</h3>
          <ul className="list-inside list-disc">
            <li>Weapons</li>
            <ul className="ml-8 list-inside list-disc">
              <li>Fusion Mortar</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Adjusted projectile speed</li>
                <li>Adjusted projectile arc</li>
              </ul>
              <li>Shotgun</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Updated spread pattern</li>
              </ul>
              <li>Spinfusors</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Adjusted all Spinfusors passive reload times</li>
              </ul>
              <li>Bolt Launcher</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Adjusted passive reload time</li>
              </ul>
              <li>Nova Colt</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Kickback adjusted</li>
              </ul>
              <li>Repair Tool added to Medium and Heavy loadouts</li>
              <ul className="ml-10 list-inside list-disc">
                <li>
                  The Repair Tool can be used to heal Base Turrets, Generators
                  and Radars
                </li>
              </ul>
              <li>Honorfusor</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Damage reduced by 100</li>
              </ul>
              <li>Heavy Honorfusor</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Damage reduced by 150</li>
              </ul>
              <li>Packs and Grenades</li>
              <li>Overall ability balance pass</li>
              <li>Team Portal</li>
              <ul className="ml-10 list-inside list-disc">
                <li>
                  Friendly players use the Team Portal by stepping through the
                  portal rather than using an interact button
                </li>
              </ul>
              <li>Turret Pack</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Deployable Turret now depletes energy on hit</li>
              </ul>
              <li>Explosive Nitron</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Reduced damage</li>
                <li>Added damage and impulse falloff</li>
              </ul>
              <li>Impact Nitron</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Added damage and impulse falloff</li>
              </ul>
              <li>Spinfusor Disc added to Heavy loadout</li>
            </ul>
            <li>Perks</li>
            <ul className="ml-8 list-inside list-disc">
              <li>Perks enabled</li>
              <li>Egocentric Perk added</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Reduces self damage by 20%</li>
              </ul>
              <li>Rage Perk added</li>
              <ul className="ml-10 list-inside list-disc">
                <li>
                  Rage gives players +50 energy, reduces their mass by 25%, and
                  makes them immune to self-damage for 15 seconds after an enemy
                  grabs their flag while they are within 240 meters of the flag.
                </li>
                <li>
                  Rage is disabled once the player takes damage, or reaches the
                  15 second limit. Rage will not activate if they are holding
                  the flag.
                </li>
              </ul>
            </ul>
          </ul>
          <h3>GAMEPLAY</h3>
          <ul className="list-inside list-disc">
            <li>Movement</li>
            <ul className="ml-8 list-inside list-disc">
              <li>
                Improved the jetpack’s thrust acceleration to allow for better
                steering and micro adjustments.
              </li>
              <li>
                Added a configurable setting, Jetpack Lateral Angle, to control
                the jetpack thrust angle when attempting to jetpack laterally
                (i.e. holding W/S/A/D). Applying a low value adjusts jet thrust
                less vertically and more laterally, whereas a higher angle
                accelerates more upward, at the cost of lateral thrust.
              </li>
              <li>Added more directional control while skiing.</li>
              <li>
                Addressed an issue where players could occasionally feel “glued”
                to a surface while skiing.
              </li>
            </ul>
            <li>General</li>
            <ul className="ml-8 list-inside list-disc">
              <li>Social tab added to the main lobby.</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Players can now party up with two other players.</li>
              </ul>
              <li>FOV range increased to 70-120.</li>
              <li>Loadout tab removed from main lobby.</li>
              <li>Generators added</li>
              <ul className="ml-10 list-inside list-disc">
                <li>
                  Generators added to bases. Destroying an enemy base Generator
                  will disable turrets and reduce Radar capacity.
                </li>
              </ul>
              <li>Inventory Stations added</li>
              <ul className="ml-10 list-inside list-disc">
                <li>
                  Inventory Stations can be found in spawn rooms. They will
                  update player loadouts and refresh health, energy and ammo.
                </li>
              </ul>
              <li>Radars</li>
              <ul className="ml-10 list-inside list-disc">
                <li>Radars now show all player locations on the minimap.</li>
                <li>
                  If a team’s Radar is destroyed, then only friendly players and
                  enemies within 150 meters of them will be shown on minimap.
                </li>
              </ul>

              <li>Base Turrets</li>
              <ul className="ml-10 list-inside list-disc">
                <li>
                  Base Turrets now have shields they will regen while the
                  Generator is active.
                </li>
              </ul>
              <li>
                Recall now refreshes loadout, even if the player stays in the
                same class.
              </li>
              <li>Added a “Change Class” keybind. This is defaulted to ‘K.’</li>
              <li>
                Jetpacks will continue to burn any fuel regenerated if the
                player holds down their jetpack keybind (default SPACE).
              </li>
              <li>
                Players can impulse a dropped flag with weapons that have
                knockback.
              </li>
              <li>The scoreboard tracks returning flags..</li>
              <li>Current flag holder is now shown on the scoreboard.</li>
              <li>Score added to the match result screen.</li>
              <li>Base Turret health increased.</li>
            </ul>
          </ul>
          <h3>MAPS</h3>
          <ul className="list-inside list-disc">
            <li>New map, Drydock, with a larger size.</li>
            <li>New spawn rooms added to each map.</li>

            <ul className="ml-8 list-inside list-disc">
              <li>
                Players will be able to update their loadout without recalling
                or dying whenever they make changes in the spawn rooms.
              </li>
            </ul>
            <li>Katabatic</li>
            <ul className="ml-8 list-inside list-disc">
              <li>Lighting adjustments</li>
            </ul>
          </ul>
          <h3>FIXES</h3>
          <ul className="list-inside list-disc">
            <li>
              Fixed an issue where some enemy jetpacks and the enemy flag would
              have conflicting team coloring effects.
            </li>
            <li>Fixed an issue where turrets could pick up the flag.</li>
            <li>
              Fixed an issue where projectiles could not do full damage on
              direct hits.
            </li>
            <li>
              Fixed an issue where the “Open Scoring” top-bar message could get
              stuck on.
            </li>
            <li>
              Fixed an issue where the flag could fall through the world. If the
              flag happens to move to an invalid playspace, a failsafe feature
              will reset the flag back at base.{" "}
            </li>
            <li>
              Fixed an issue where Base Turrets could try to shoot players while
              they were out of range.
            </li>
          </ul>

          <h3>KNOWN ISSUES</h3>
          <ul className="list-inside list-disc">
            <li>
              Party invites and friend requests have a delay when accepting and
              updating queues.
            </li>
            <li>Players may have a red Fresnels sometimes get stuck on</li>
          </ul>
        </div>
      </div>
    </>
  );
}
