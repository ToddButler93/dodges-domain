import { Card } from "~/components/ui/card";

export default function T3PatchHistory() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Patch History</h1>
        </Card>
        <div>
          <p>
          TRIBES 3: Rivals Playtest #2 - Patch Notes
            TRIBES 3: Rivals | 12.07.2023 | Prophecy Games

            LOADOUTS

                Weapons
                    Fusion Mortar
                        Adjusted projectile speed
                        Adjusted projectile arc
                    Shotgun
                        Updated spread pattern
                    Spinfusors
                        Adjusted all Spinfusors passive reload times
                    Bolt Launcher
                        Adjusted passive reload time
                    Nova Colt
                        Kickback adjusted
                    Repair Tool added to Medium and Heavy loadouts
                        The Repair Tool can be used to heal Base Turrets, Generators and Radars
                    Honorfusor
                        Damage reduced by 100
                    Heavy Honorfusor
                        Damage reduced by 150
                Packs and Grenades
                    Overall ability balance pass
                    Team Portal
                        Friendly players use the Team Portal by stepping through the portal rather than using an interact button
                      Turret Pack
                          Deployable Turret now depletes energy on hit
                      Explosive Nitron
                          Reduced damage
                          Added damage and impulse falloff
                      Impact Nitron
                          Added damage and impulse falloff
                      Spinfusor Disc added to Heavy loadout
                  Perks
                      Perks enabled
                      Egocentric Perk added
                          Reduces self damage by 20%
                      Rage Perk added
                          Rage gives players +50 energy, reduces their mass by 25%, and makes them immune to self-damage for 15 seconds after an enemy grabs their flag while they are within 240 meters of the flag. 
                          Rage is disabled once the player takes damage, or reaches the 15 second limit. Rage will not activate if they are holding the flag.

              GAMEPLAY

                  Movement
                      Improved the jetpack’s thrust acceleration to allow for better steering and micro adjustments. 
                      Added a configurable setting, Jetpack Lateral Angle, to control the jetpack thrust angle when attempting to jetpack laterally (i.e. holding W/S/A/D). Applying a low value adjusts jet thrust less vertically and more laterally, whereas a higher angle accelerates more upward, at the cost of lateral thrust.
                      Added more directional control while skiing. 
                      Addressed an issue where players could occasionally feel “glued” to a surface while skiing.
                  General
                      Social tab added to the main lobby.
                          Players can now party up with two other players.
                      FOV range increased to 70-120.
                      Loadout tab removed from main lobby. 
                      Generators added
                          Generators added to bases. Destroying an enemy base Generator will disable turrets and reduce Radar capacity. 
                      Inventory Stations added
                          Inventory Stations can be found in spawn rooms. They will update player loadouts and refresh health, energy and ammo. 
                      Radars
                          Radars now show all player locations on the minimap.
                          If a team’s Radar is destroyed, then only friendly players and enemies within 150 meters of them will be shown on minimap.
                      Base Turrets
                          Base Turrets now have shields they will regen while the Generator is active.
                      Recall now refreshes loadout, even if the player stays in the same class.
                      Added a “Change Class” keybind. This is defaulted to ‘K.’
                      Jetpacks will continue to burn any fuel regenerated if the player holds down their jetpack keybind (default SPACE).
                      Players can impulse a dropped flag with weapons that have knockback.
                      The scoreboard tracks returning flags..
                      Current flag holder is now shown on the scoreboard.
                      Score added to the match result screen.
                      Base Turret health increased.


              MAPS

                  New map, Drydock, with a larger size.
                  New spawn rooms added to each map.
                      Players will be able to update their loadout without recalling or dying whenever they make changes in the spawn rooms. 
                  Katabatic
                      Lighting adjustments


              FIXES

                  Fixed an issue where some enemy jetpacks and the enemy flag would have conflicting team coloring effects.
                  Fixed an issue where turrets could pick up the flag.
                  Fixed an issue where projectiles could not do full damage on direct hits.
                  Fixed an issue where the “Open Scoring” top-bar message could get stuck on.
                  Fixed an issue where the flag could fall through the world. If the flag happens to move to an invalid playspace, a failsafe feature will reset the flag back at base. 
                  Fixed an issue where Base Turrets could try to shoot players while they were out of range.


              KNOWN ISSUES

                  Party invites and friend requests have a delay when accepting and updating queues.
                  Players may have a red Fresnels sometimes get stuck on
          </p>
        </div>
      </div>
    </>
  );
}
