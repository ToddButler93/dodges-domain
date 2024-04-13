import { Title, List, ListItem, Divider } from "@mantine/core";

export default function PatchHistory() {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-3">
<Title>Patch History</Title>
<Title order={2}> 2016</Title>

<Title order={3}> Tribes: Ascend Version 1.4.2913.0 (Parting Gifts)</Title>

2016/9/28

<Title order={4}> Gameplay</Title>
<List>
<ListItem>Screenshake has been completely removed from the game.</ListItem>
<ListItem>Ammo/Health pickups</ListItem>
<ListItem>Lifespan has been reduced to 15s from 60s.</ListItem>
<ListItem>Health gained from pickup reduced to 300 from 400.</ListItem>
</List>
<Title order={4}> Equipment Changes</Title>
<List>
<ListItem>Sidearms and Automatics have been merged into the same category across all classes, renamed to Bullet.</ListItem>
<ListItem>Light Spinfusor and Light Blinksfusor</ListItem>
  - Direct hit damage increased to 750 from 725.
  - Splash damage increased to 600 from 580.
<ListItem>Sparrow, Eagle Pistol, and Nova Colt</ListItem>
  - Damage decreased to 80 from 95.
<ListItem>NJ5 SMG</ListItem>
  - Clip size reduced to 12 from 20.
<ListItem>Honorfusor added to Medium armor.</ListItem>
  - Provides direct hit damage only, no splash damage.
  - Direct hit damage of 875.
  - Located in the “Specialty” weapon category.
  - Locks Advanced Repair Tool into the third slot.
  - Has 50% inheritance.
<ListItem>Thumper DX returns to Medium armor.</ListItem>
  - Base damage of 700 with rapid damage falloff to 140.
  - Direct hit damage of 875.
  - Ammo count increased to 26 from 10.
<ListItem>Thrown Discs</ListItem>
  - Removed from the game.
<ListItem>Chaingun</ListItem>
  - Damage decreased to 70 from 80.
<ListItem>Heavy Armor</ListItem>
  - Weapon slots reduced to 3 from 4.
  </List>
<Title order={4}> Vehicles</Title>
<List>
<ListItem>Grav Cycle</ListItem>
  - Gravity scaling lowered to 1.0 from 1.2.
  - Damage done to other players hit directly by the vehicle reverted to pre-OOTB values.
  - Increased max movement speed to 2750 from 2500.
  - Pilot weapon ammunition lowered to 12 from 24.
  - Pilot weapon damage increased to 180 from 80.
  - Pilot weapon damage radius increased to 200 from 150.
  - Pilot weapon damage versus Beowulf increased to 1.6 from 1.0 (direct hit damage of 360).
<ListItem>Beowulf</ListItem>
  - Base damage lowered to 1000 from 1250.
  - Minimum splash damage reduced to 25% from 50%.
  - Damage multiplier against Beowulf increased to 3 from 2.
  - Damage multiplier against Grav Cycle lowered to 1.5 from 3.
  - Damage multiplier against base assets increased to 2.5 from 2.0.
  </List>
<Title order={4}> Misc.</Title>
<List>
<ListItem>Fixed base upgrade messages showing up in certain help suggestions.</ListItem>
<ListItem>Fixed collision issues on Hellfire.</ListItem>
<ListItem>Fixed issue allowing players to get out of the playable map space when exiting vehicles in specific locations.</ListItem>
<ListItem>Fixed issues with the thrust pack not thrusting or thrusting too much. It now thrusts just right.</ListItem>
<ListItem>Fixed issue with the Elf Projector being able to maintain lock through a wall.</ListItem>
<ListItem>Fixed the Medium Spinfusor kill icon being incorrect.</ListItem>
<ListItem>Fixed issue with being able to equip items in Target Practice or Roaming that were supposed to be locked.</ListItem>
<ListItem>Due to the change in the number of weapons a Heavy can have equipped and the merging of Sidearm and Automatic weapon categories, all weapon loadouts have been reset.</ListItem>
<ListItem>Addressed deadstop issues in all maps when skiing/jetting along the creativity wall.</ListItem>
<ListItem>Resolved client performance issues when near the creativity wall.</ListItem>
<ListItem>The patcher is no longer required to run the game and is completely standalone.</ListItem>
<ListItem>The in-game web browser has been removed from the game and will no longer install Flash as a prerequisite.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.3.2878.0</Title>

2016/3/30

<Title order={4}> Gameplay</Title>
<List>
<ListItem>Hellfire is now available to play for CTF and Blitz and has been added to all appropriate server map rotations.</ListItem>
<ListItem>Votekick percentage increased to 45%, up from 35%</ListItem>
<ListItem>Changed votekick message to include player who initiated the votekick.</ListItem>
  - &apos;Vote by [votekick_starter]: kick [kickable_player]?&apos;
<ListItem>Ammo pickups now yield the same 400 hp heal on all armor types when picked up.</ListItem>
  - Light Heals for 400 HP, up from 300.
  - Medium Heals for 400 hp, down from 462.
  - Heavy Heals for 400 hp, down from 520.
<ListItem>Blueshift has been removed from map rotations by community request. This map will still be available to play on custom servers.</ListItem>
</List>
<Title order={4}> Equipment Changes</Title>
<List>
<ListItem>Automatic Weapons</ListItem>
  - All rapid fire weapons have had RNG based spread completed removed in favor for precise shots based on player skill only.
  - The following weapons have had their damage falloff values adjusted to 80% damage at range. This is to normalize the falloff between other similar weapons.
    - Falcon
    - NJ4
    - X1 LMG
<ListItem>Saber Launcher</ListItem>
  - May now fire without locking a target. This will result a dumbfire missile with no tracking ability, similar to the old Titan Launcher.
  - Tracking Missile
    - Target vehicle is locked with the same previous method and timing
    - Damage increased to 1350, up from 1200
    - Impulsed increased to 85000, up from 80000
    - Range increased to 360, up from 220
  - Dumbfire Missile
    - Damage set to 375
    - Direct impact damage multiplier set to 2.0
    - Impulse set to 85000
    - Range set to 300
    - Speed set to 3000
    - Inheritance set to 50%
    - Size set to 15
<ListItem>Mortar Launcher</ListItem>
  - Mortar direct impact timer increased to 0.75 seconds, up from 0.5 seconds.
  - When hitting a vehicle the shorter timer is now used.
  - Damage lowered to 1300, down from 1400.
  - Direct hit bonus increased to 1.154, up from 1.0. Now deals 1500 damage on direct impact.
  - Minimum damage decreased to 600 damage at max range.
<ListItem>Thrown Disks</ListItem>
  - Decreased damage to 350, down from 600.
  - Increased direct hit multiplier to 2.0, up from 1.5. Now deals 700 damage on direct impact.
<ListItem>Heavy weapons impulse reduction</ListItem>
  - The following weapons have had their impulse values reduced to 85,000 down from 90,000.
    - Heavy Spinfusor
    - Heavy Bolt Launcher
    - Heavy Blinksfusor
<ListItem>Plasma Gun</ListItem>
  - Fire interval reduced to 0.5, down from 0.6
  - Damage reduced to 270, down from 280.
<ListItem>NJ5 returns to Medium armor.</ListItem>
  - Fire interval set to 0.2
  - Damage set to 150
  - Falls off to 80% damage at at max range of 6000.
<ListItem>Impact Nitron</ListItem>
  - Increased radius to 400, up from 350.
<ListItem>Shocklance</ListItem>
  - Damage increased to 600, up from 500.
  - No longer drains energy for up to 250 bonus damage.
  - Damage dealt from behind remains at 2x.
  - Removed impulse given to hit target.
<ListItem>Fixed a long standing issue where beams from sniper rifles would not connect with a target when successfully hit at long distances.</ListItem>
<ListItem>Fixed an issue preventing players from equipping a repair tool at a repair station when they have the ELF gun equipped.</ListItem>
<ListItem>Fixed an issue where the Flak Cannon / EFG would not reload at various stages in its clip.</ListItem>
<ListItem>Fixed an issue where the Flak Cannon / EFG would award multiple kills on a single target.</ListItem>
</List>
<Title order={4}> Vehicles</Title>
<List>
<ListItem>Vehicle ejection speeds have been increased.</ListItem>
  - Light ejects at 50% vehicle speed, up from 40%
  - Medium ejects at 40% vehicle speed, up from 35%
<ListItem>GravCycle</ListItem>
  - Health reduced to 1400, down from 2200.
<ListItem>Shrike</ListItem>
  - Health reduced to 1400, down from 2800
  - Energy regeneration per second reduced to 10, down from 20
  - Reduced impulse from weapon to 2500, down from 10,000
  - Explosion radius reduced to 200, down from 250
<ListItem>Fixed an issue where many projectiles were being killed on direct impact with a vehicle and not dealing damage to them, especially while stationary.</ListItem>
</List>
<Title order={4}> Misc.</Title>
<List>
<ListItem>Additional network optimizations to improve performance.</ListItem>
<ListItem>Tweaked load balancing logic to try and keep players on the same physical server between map transitions.</ListItem>
<ListItem>Lowered minimum mip settings to allow players to adjust their INI settings for extremely low texture resolutions.</ListItem>
<ListItem>Fixed an issue where the weapon HUD would turn back on after match completed even though it had been disabled.</ListItem>
<ListItem>Fixed an issue where the laser targeter target location wasn’t being properly set while in 3rd person camera mode.</ListItem>
<ListItem>Fixed an issue where empty perks were being shown in the spectator hud.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.2.2866.1</Title>

2016/1/28

<Title order={4}> Equipment Changes</Title>
<List>
<ListItem>Heavy Armor</ListItem>
  - Increased mass by 7%
  - Decreased initial jetpack impulse by 25%
<ListItem>Most Impact class explosive weapons have received a reduction in radius size.</ListItem>
  - Light Armor
    - Light Spinfusor radius reduced to 360, down from 400
    - Light Blinksfusor radius reduced to 360, down from 400
    - Bolt Launcher radius reduced to 400, down from 500
  - Medium Armor
    - Spinfusor radius reduced to 360, down from 425
    - Blinksfusor radius reduced to 360, down from 425
    - Twinfusor radius reduced to 300, down from 320
    - Thumper radius reduced to 400, down from 530
  - Heavy Armor
    - Heavy Spinfusor radius reduced to 360, down from 450
    - Heavy Blinksfusor radius reduced to 360, down from 450
    - Heavy Twinfusor radius reduced to 300, down from 340
    - Heavy Bolt Launcher radius reduced to 400, down from 565
    - Grenade Launcher explosion radius reduced to 500, down from 530.
<ListItem>Fusion Mortar</ListItem>
  - “The Deluxe Mortar Launcher was a fan favorite, so these changes are to bring the fusion mortar more in line with the feel of the DXML”
  - Radius reduced to 650, down from 700.
  - Increased bounce damping to 80%, up from 75% (DXML)
  - Removed direct hit bonus.
  - Now deals full damage (1400) on direct hit.
  - Jackal radius increased to 400, up from 350
<ListItem>Phase Rifle</ListItem>
  - Locks an Energy pack in your pack slot.
  - Phase Rifle sets your energy pool max to 75, 90 with Rage active.
  - Damage per energy increased to 5.333 per energy consumed. Up from 3.
  - Fully charged shot consuming 75 energy deals 400 damage. up from 375.
  - Fully charged shot consuming 90 energy, after Rage buff, deals 480. up from 450.
  - With a max energy of 75, time to regen to full charged shot reduced to 5.35 seconds, down from 8.9 seconds.
<ListItem>BXT1</ListItem>
  - Locks an Energy pack in your pack slot
  - Charge mechanic removed
  - Deals 250 damage in scope or out
  - Range increased to 20,000, up from 10,000
  - Falloff starts at 2,000 and falls off to 100 damage at max range
<ListItem>Saber Launcher</ListItem>
  - No longer locks onto airborne players
  - Projectile speed increased to 845, up from 650.
<ListItem>Sparrow, Eagle, and Nova Colt</ListItem>
  - Damage increased to 95, up from 85
  - Magazine size increased to 15, up from 12.
    - Increased ammo carry numbers to support larger magazines.
<ListItem>Shock Lance</ListItem>
  - Now deals 500 base damage, regardless of how much energy is available.
  - Consumes up to 50 energy, or less depending how much energy is available.
  - Damage is calculated as Energy Consumed x 5
  - Total damage is doubled when target is struck in the back.
<ListItem>Flak Cannon</ListItem>
  - Reduced projectile size to 25, down from 30.
  - Lowered damage per connecting shot to 65, down from 75.
<ListItem>Plasma Gun</ListItem>
  - Damage increased to 280, up from 230.
  - Carried ammo increased to 54, up from 48.
<ListItem>Chain Gun</ListItem>
  - Damage increased to 80, up from 75.
<ListItem>Ammo adjustments</ListItem>
  - Assault Rifle max ammo increased to 216, up from 192.
  - NJ4 SMG max ammo increased to 270, up from 240
  - Nova Blaster max ammo increased to 54, up from 48
  - Sawed Off max ammo reduced to 24, down from 60.
<ListItem>Belt Items</ListItem>
  - T5 Grenade is now available to the Light Armor.
    - Explodes after 2 seconds
    - Damage is 800, falls off to 400 at max range
    - Explosion radius is 600
  - Blackout Grenade radius increased to 600, up from 550
  - Cluster Grenade radius increased to 550, up from 500
  - EMP Grenade radius increased to 600, up from 550.
  - Sticky Grenade radius increased to 600, up from 550.
<ListItem>Drop Station deployables no longer require generators to be up to function.</ListItem>
<ListItem>Stealth pack reveal speed increased to 150, up from 100. This is the Tribes:Ascend 1.0 value.</ListItem>
<ListItem>Fixed an issue where Drop Stations were still functional after being destroyed.</ListItem>
<ListItem>Fixed an issue where Chaff Grenades could permanently jam a friendly player.</ListItem>
<ListItem>Fixed an issue where the Heavy Blinksfusor had incorrect reload speeds. It is now in line with the standard heavy spinfusor.</ListItem>
<ListItem>Fixed an issue where Nova Blaster MX could still have upgrades affecting various weapon stats.</ListItem>
</List>
<Title order={4}> Vehicles</Title>
<List>
<ListItem>Vehicles are now generated on a team wide timer.</ListItem>
  - “At the beginning of the round vehicle timers are started. Once each vehicle&apos;s timer has completed, 1 vehicle is generated, up to the limit per vehicle type. Once that vehicle is taken, it is moved from “Generated”, to in play. The vehicle in play still affects the ability to generate more vehicles of that type. For example: The server has limited shrikes to 1. Once generated, that shrike may be claimed by a player. Because the server has limited shrikes to 1, no additional shrikes will be generated until the shrike has been destroyed.”
  - All of the following values are modifiable through custom server settings.
  - Each vehicle type has:
    - Max number in play.
    - Length of time before each vehicle type is generated.
    - Max of one Generated, or “On Deck”. If this vehicle is not claimed and the timer reaches zero, the timer resets to the max time and restarts.
  - Default Values:
    - Grav Cycle
      - Max in play 4
      - Max of 1 on deck
      - Generation time 30 seconds
    - Shrike
      - Max in play 2
      - Max of 1 on deck
      - Generation time 90 seconds
    - Beowulf
      - Max in play 2
      - Max of 1 on deck
      - Generation time 60 seconds
    - Grav Cycle
      - Fire interval increased to 0.1 seconds, up from 0.08 seconds
      - Damage multiplyer vs base assets reduced to 2, down from 4.
    - Shrike
      - Fire interval increased to 0.125 seconds, up from 0.1 seconds.
      - Ammo pool reduced to 9, down from 12.
      - Burst fire count reduced to 3 shots.
      </List>
<Title order={4}> Gameplay</Title>
<List>
<ListItem>Pressing Q now selects your weapon that was previously in hand.</ListItem>
<ListItem>Grenade throw speed increased by 25%.</ListItem>
<ListItem>Votekick now only requires 35% of all players in the server to vote “Yes” to pass. Reduced down from 70%</ListItem>
<ListItem>Lifetime for bullet based projectiles has been increased to 1 second, up from 0.5 seconds. This will increase the range of the projectile back to Tribes:Ascend 1.0 ranges.</ListItem>
<ListItem>Ammo pickups now restore 20% of your energy pool when picked up. Healing has not changed.</ListItem>
<ListItem>Inventory stations no longer refill your energy. This is to prevent energy based weapons from circumventing the recharge time.</ListItem>
<ListItem>Fixed an issue where vehicle stations were not taking bonus damage from base asset damage modifiers.</ListItem>
<ListItem>Fixed an issue in blueshift where players could abuse the team blocker on the boosters.</ListItem>
<ListItem>Everyone may enter the booster, but only friendlies get the boost applied. This will allow an enemy to return his flag inside the booster.</ListItem>
</List>
<Title order={4}> Misc.</Title>
<List>
<ListItem>Music and flag audio queues have been fixed on maps introduced in 1.1.</ListItem>
<ListItem>Fixed issues with banning equipment where some banned equipment would unintentionally ban other equipment while customizing a server.</ListItem>
<ListItem>Fixed an issue where long distance explosions would not play their explosion FX. This was most obvious on the Mortar Launcher.</ListItem>
<ListItem>Fixed an issue on perdition where ragdolls would catapult out of the map.</ListItem>
<ListItem>Fixed an issue where the armor select UI would not go up to 100% even though a player had unlocked all items available.</ListItem>
</List>
<Title order={2}> 2015</Title>

<Title order={3}> Tribes: Ascend Version 1.1.2860.0 (Out of the Blue)</Title>

2015/12/10

<Title order={4}> Tribes: Ascend Out of the Blue Patch Overview</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/dt9NGBCME9g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Notes
<List>
<ListItem>We want to thank /r/Tribes for all the support and constructive feedback over the many PTS cycles. We couldn’t have done this without you!</ListItem>
<ListItem>We will be upgrading Tribes starting Thursday, December 10th, at 10:00 AM EST (5:00 PM CEST)</ListItem>
<ListItem>Expected downtime will be around 6 hours.</ListItem>
<ListItem>Server hardware in Live is being upgraded during this downtime.</ListItem>
<ListItem>Due to the dramatic changes to the underlying game, all in-game purchases have been reverted and all Tribes Gold and XP refunded to your account. If you have previously purchased the Ultimate Weapon Pack or Game of the Year it will be re-added to your account. If there is any Tribes Gold on your account you will be automatically gifted the Ultimate Weapon Pack.</ListItem>
<ListItem>All saved loadouts have be reset.</ListItem>
</List>
<Title order={4}> New CTF Maps</Title>

Ice Coaster
<List>
<ListItem>“Ice Coaster is a large map inspired by the Tribes 1 legacy map Rollercoaster.”</ListItem>
<ListItem>Supports CTF and Blitz game modes.</ListItem>
</List>
Perdition
<List>
<ListItem>“Perdition is a small sized CTF map inspired by the Tribes 2 legacy map Damnation.”</ListItem>
<ListItem>Supports CTF and TDM game modes.</ListItem>
</List>
Terminus
<List>
<ListItem>“A brand new medium sized map inspired by Katabatic and Arx Novena.”</ListItem>
<ListItem>Supports CTF and Blitz game modes.</ListItem>
</List>
<Title order={4}> Class Changes</Title>

“With the new armor selection system in place of classes we have brought full loadout customization to Tribes:Ascend for the first time. The new baseline default loadout bring back the classic Disk + Chain + Grenade Launcher combination. ”
Light Armor

Health increased to 1000, up from 900

Equip 3 weapons

Health regen rate has been slowed to 5 seconds for a full heal, up from 4 seconds.

Gain Rage buff when the flag comes off the stand and you are nearby.

Default loadout:
<List>
<ListItem>Light Spinfusor</ListItem>
<ListItem>Light Assault Rifle</ListItem>
<ListItem>Light Grenade Launcher</ListItem>
<ListItem>Impact Nitron</ListItem>
<ListItem>Thrust Pack</ListItem>
</List>
Medium Armor

Health increased to 1500, up from 1200

Equip 3 weapons

Medium armor is now 10% larger

Health regen rate has been slowed to 6 seconds for a full heal, up from 4 seconds.

Vehicles have 25% more energy while piloting

Default Loadout:
<List>
<ListItem>Spinfusor</ListItem>
<ListItem>Assault Rifle</ListItem>
<ListItem>Grenade Launcher</ListItem>
<ListItem>AP Grenade</ListItem>
<ListItem>Shield Pack</ListItem>
</List>
Heavy Armor

Health increased to 2600, up from 2400

Increased mass by 15%

Equip 4 weapons

Energy regeneration increased to 12, up from 10

Health regen rate has been slowed to 7 seconds for a full heal, up from 4 seconds.

Body blocking deals damage to other players

Default Loadout:
<List>
<ListItem>Heavy Spinfusor</ListItem>
<ListItem>Chaingun</ListItem>
<ListItem>Fusion Mortar</ListItem>
<ListItem>Auto Shotgun</ListItem>
<ListItem>Frag Grenade</ListItem>
<ListItem>Heavy Shield Pack</ListItem>
</List>
There are now 9 custom loadouts per armor and they are no longer purchased.

<Title order={4}> Equipment Changes</Title>

“The new weapon class system is flexible enough to allow players to create interesting loadouts while limiting similar weapons from being equipped. This will prevent annoying double ground pound, or triple chain loadouts.”

All armor, belt items, packs, and weapons have been rebalanced. Please refer to our weapon stats spreadsheet for more information.

Replaced primary and secondary weapon restrictions with a weapon class system to limit equipping of similar weapons in all weapon slots.
<List>
<ListItem>Impact Explode on impact</ListItem>
<ListItem>Automatics Rapid fire weaponry</ListItem>
<ListItem>Timed Fuse timed explosives</ListItem>
<ListItem>Sidearms Small backup weaponry</ListItem>
<ListItem>Short Range High damage short range weaponry</ListItem>
<ListItem>Speciality Armor specific weaponry</ListItem>
</List>
New Heavy Weapon: EFG

“The EFG fires a matrix of concentrated Electronic Flux that sap energy on enemy contact.”

Added to Heavy’s Close Range weapons class.

Behavior
<List>
<ListItem>Fires 7 projectiles that explode on impact.</ListItem>
<ListItem>Fire interval set to 0.75</ListItem>
<ListItem>Magazine contains 8 shots.</ListItem>
<ListItem>Projectile size set to 30.</ListItem>
<ListItem>Speed set to 9000.</ListItem>
<ListItem>Inherits 50% of the player&apos;s velocity.</ListItem>
</List>
Damage
<List>
<ListItem>Damage set to 45 per hit.</ListItem>
<ListItem>Sap 6 energy per hit.</ListItem>
<ListItem>Falloff distance set to 128.</ListItem>
<ListItem>Damage falloff starts at 50% distance and scales to a minimum of 50% damage at max range.</ListItem>
<ListItem>Deals 200% bonus damage to vehicles and base assets.</ListItem>
</List>
New Medium Weapon: ELF Projector

“The Electronic Flux, or ELF, Projector focuses and drains the energy from enemies nearby. The process also causes minor injury to the armor wearer.”

Added to Medium’s Specialty weapons class

Behavior
<List>
<ListItem>Locks a target by aiming and firing at them, then keeps the target locked within a 75 degree cone as you continue to fire the weapon.</ListItem>
<ListItem>Lock is lost if the distance is greater than 1250 or the target leaves the cone.</ListItem>
<ListItem>Base Turrets that are being drained by the ELF Projector lock up and shut down for the duration of the attack.</ListItem>
</List>
Damage

Drains energy away from target at a rate of 30% per second. Note: this does not pause the enemy&apos;s energy regeneration rate.

Drains health at a rate of 5% health per second on players.

These rates are increased to 60% / 10% on vehicles and 90% / 20% on base assets.

New Weapon Flak Cannon added to Medium Armor Short Range weapon class.
<List>
<ListItem>“The Flak cannon fires a matrix of superheated bouncing balls of plasma that explode on enemy contact.”</ListItem>
<ListItem>Fires 9 projectiles that bounce up to 3 times slowing down each impact.</ListItem>
<ListItem>Each projectile hits for 75 damage</ListItem>
<ListItem>Projectile speed set to 9000</ListItem>
<ListItem>Projectile size set to 30</ListItem>
<ListItem>+25% damage to vehicles</ListItem>
<ListItem>+100% damage to base assets</ListItem>
<ListItem>Magazine size set to 4</ListItem>
</List>
The following weapons now have 100% inheritance.
<List>
<ListItem>“At the community’s request, a set of 100% inheritance automatic weapons have been added to each armor that are great for chasing.”</ListItem>
<ListItem>Light: Falcon SMG</ListItem>
<ListItem>Medium: NJ4 SMG</ListItem>
<ListItem>Heavy: X1 LMG</ListItem>
<ListItem>Blinksfusors</ListItem>
</List>
“The best chasing spinfusors without a doubt. 100% inheritance, 100% intuitive.”
<List>
<ListItem>Blinksfusor on light armor renamed to “Light Blinksfusor” for consistency.</ListItem>
<ListItem>New Weapon Blinksfusor added to Medium Impact weapons class.</ListItem>
<ListItem>New Weapon Heavy Blinksfusor added to Heavy Impact weapons class.</ListItem>
</List>
Bolt Launcher, Heavy Bolt Launcher, and Thumper
<List>
<ListItem>Now have damage values in line with spinfusors.</ListItem>
<ListItem>Slightly higher reload time than a Spinfusor, but larger splash radius.</ListItem>
</List>
BXT1
<List>
<ListItem>“The New BXT1 is a self charging sniper rifle that doesn’t drain energy to fire. It has a faster charge rate and refire time but damage caps out earlier than the Phase Rifle and it also suffers from damage falloff at range. It’s charge time doubled while moving faster than 100 sanics. Damage is gained exponentially over time while in scope, this means the BXT1 needs to be at least 50% charged before you start to see higher damage numbers gained. This weapon is best used for medium range sniping support.”</ListItem>
<ListItem>Fire interval reduced to 1.25, down from 1.5 seconds.</ListItem>
<ListItem>Aim charge time remains at 4 seconds, but at speeds over 100 sanics, charge time is cut in half to 2 seconds.</ListItem>
<ListItem>Minimum damage reduced to 50.</ListItem>
<ListItem>Max damage at full charge reduced to 250.</ListItem>
<ListItem>Falls off to 50% damage at max range.</ListItem>
<ListItem>Locks an Energy pack in your pack slot.</ListItem>
</List>
Click to fire (semi-automatic) sidearms are now hold to fire. These weapons will fire at their old max fire rates.
<List>
<ListItem>“Greatly reduces the impact ping has on re-fire rates on these weapons. It may also save a few mice from early deaths.”</ListItem>
<ListItem>Throwing Knives</ListItem>
<ListItem>Sparrow</ListItem>
<ListItem>Nova Blaster</ListItem>
<ListItem>Eagle Pistol</ListItem>
<ListItem>Nova Blaster MX</ListItem>
<ListItem>Nova Colt</ListItem>
</List>
Fusion Mortar projectiles now explode after 0.5 seconds on player impact.
Jackal
<List>
<ListItem>Fire interval decreased to 0.25 seconds, down from 0.35 seconds</ListItem>
<ListItem>Projectiles no longer blow up without being attached to something. If you detonate while a projectile is in the air it will fizzle out and no damage will be dealt from that projectile.</ListItem>
</List>
Laser targeter has returned, it can be selected by pressing L by default.
<List>
<ListItem>Places a marker on screen for teammates so they may more accurately hit distant targets.</ListItem>
<ListItem>Laser targeter must remain stationary for 1 second before the target is relayed to teammates.</ListItem>
<ListItem>Can be used to mark objects of interest for teammates.</ListItem>
<ListItem>Compensates for inheritance on the teammates screen.</ListItem>
</List>
Phase Rifle
<List>
<ListItem>“The new Phase Rifle works much like the Laser Rifle from previous Tribes titles. It charges slowly, but does not suffer from any falloff damage at range. Damage is linearly gained over time based on energy regeneration rate. The \* Phase Rifle is also more powerful post flag grab due to the gained Rage buff. ”</ListItem>
<ListItem>Damage per energy increased to 3 per energy consumed.</ListItem>
<ListItem>Fully charged shot consuming 125 energy deals 375 damage.</ListItem>
<ListItem>Fully charged shot consuming 150 energy, after Rage buff, deals 450.</ListItem>
<ListItem>No falloff to damage at range.</ListItem>
<ListItem>Locks an Energy pack in your pack slot.</ListItem>
</List>
Plasma Gun and Plasma Cannon

“Plasma weapons have been adjusted to better fit in the automatic weapon slot. They fire slightly faster and the projectile speed is higher. This will feel more like a rapid fire disk launcher with lower damage. Plasma shots have a very small area of splash damage, but will hit for solid damage on direct shots.”

Flight time set to 1 second on all plasma weapons
Plasma Gun (Medium)
<List>
<ListItem>Refire interval reduced to 0.6, down from 0.74.</ListItem>
<ListItem>Splash damage set to 230,</ListItem>
<ListItem>Direct shots deal 345.</ListItem>
<ListItem>Falloff Range set to 250, minimum damage at max range is 69.</ListItem>
<ListItem>Projectile Speed increased to 3920, up from 3200.</ListItem>
<ListItem>+25% more damage to vehicles</ListItem>
<ListItem>+100% more damage to base assets.</ListItem>
</List>
Plasma Cannon (Heavy)
<List>
<ListItem>Refire interval reduced to 0.6, down from 0.74.</ListItem>
<ListItem>Damage reduced to 300, 450 being dealt on direct shots.</ListItem>
<ListItem>Falloff Range set to 300, minimum damage at max range is 120.</ListItem>
<ListItem>Projectile Speed increased to 3920, up from from 3200.</ListItem>
<ListItem>+100% more damage to vehicles</ListItem>
<ListItem>+200% more damage to base assets.</ListItem>
</List>
Shocklance
<List>
<ListItem>Shocklance pulls 50 energy. If 50 energy isn’t available the remaining energy is drained and damage is scaled.</ListItem>
<ListItem>Damage is calculated as 15 damage per energy consumed, 750 damage at max.</ListItem>
<ListItem>Damage dealt from behind is still doubled for a max damage of 1500.</ListItem>
<ListItem>Range increased to 768.</ListItem>
</List>
Twinfusors
<List>
<ListItem>“The twinfusors will now deal less impulse to targets leading to more accurate follow up shots. 2 twinfusor disks will now impart the same impulse as 1 spinfusor disk. They also reward consistent direct shots by dealing increased direct impact damage but have a smaller falloff range.”</ListItem>
<ListItem>Removed self impulse modifier that reduced impulse by 50% resulting in the weapon dealing 41% of a normal spinfusor disk’s impulse.</ListItem>
<ListItem>Reduced impulse values to 50% of a normal disk.</ListItem>
</List>
Belt Items

“To reduce grenade spam and defensive stacking belt item numbers have been reduced. Maximum Belt item deployed numbers have also been reduced.”

New Chaff Grenade replaces Smoke Grenades and has been added to light armor belt items.
<List>
<ListItem>Jams for you and your allies nearby for 3 seconds after being deployed.</ListItem>
<ListItem>Reveals any stealthed players nearby.</ListItem>
</List>
Deployable like Mines and Claymores have had their carry number reduced to 1, this will require the player to go and resupply if they want more.

Deployable explosives are now limited to 2 deployed per player.
EMP Grenade
<List>
<ListItem>Energy drain now falls off with distance from explosion and no longer drains 160 energy guaranteed.</ListItem>
</List>
Fractal grenades now fire 20 shots in 3 seconds. =
<List>
<ListItem>Damage reduced to 125 damage per hit.</ListItem>
<ListItem>Grenade counts have been reduced to 2 across the board to reduce spam.</ListItem>
</List>
Packs
Drop Station (Medium Armor)
<List>
<ListItem>1 deployable light inventory station.</ListItem>
<ListItem>“The drop station deployable only has the ability to change weapons within your current armor class and refill ammo. It does not swap between armor classes, and it will not kick off health regeneration.”</ListItem>
<ListItem>- 25 Energy</ListItem>
<ListItem>- 50% Ammo</ListItem>
</List>
Heavy Energy Pack
<List>
<ListItem>- 25 Energy</ListItem>
<ListItem>Passive energy gain from damage taken.</ListItem>
</List>
Heavy Shield Pack
<List>
<ListItem>Increased damage blocked by 120 energy to 750.</ListItem>
<ListItem>Health regen timer is now reset while being hit even if your shield pack is active.</ListItem>
  -25% impulse while active.
</List>
Heavy Utility Pack
<List>
<ListItem>+25% Energy Regen speed</ListItem>
<ListItem>+100% Ammo</ListItem>
</List>
  -15% Mass

Light Energy Pack
<List>
<ListItem>“This pack is selected and locked in the pack slot when you have the BXT1 or the Phase rifle equipped. It is also available for any light armor to equip even if these weapons are not selected.”</ListItem>
<ListItem>- 25 Energy</ListItem>
<ListItem>- 15% Impulse</ListItem>
</List>
Shield Pack
<List>
<ListItem>Health regen timer is now reset while being hit even if your shield pack is active.</ListItem>
</List>
Stealth Pack
<List>
<ListItem>Drain increased to 6.5, up from 5. This will yield 15 seconds of stealth from a full energy pool.</ListItem>
</List>
Thrust Pack
<List>
<ListItem>After Rage is activated thrust will accelerate the player at 50% of the flag grabbers speed at the time the flag was grabbed. This boost is only usable one time during rage. If the pack is activated again it will behave as a regular thrust pack.</ListItem>
</List>
Utility Pack (Medium) \ Light Utility Pack
<List>
<ListItem>- 20% Energy Regen speed</ListItem>
<ListItem>- 50% More ammo</ListItem>
</List>
Melee has been buffed to 1000 damage.

Weapons that were purely statistical side-grades have been removed from the game. They may return in some form in the future.

<Title order={4}> Vehicles</Title>

“Vehicles have long needed some love. Most leave the pilot and passenger completely vulnerable to attack from players flying above you, speeds are slower than a modestly skilled player, and the weapons were completely cumbersome. This lead to the Shrike Ram being the only viable usage of vehicles. We understand that many competitive players will generally still want these banned, but to the general Tribes:Ascend public population vehicles were, and still are, a fun part of the game. This is a first pass, and we will likely make additional changes to vehicles in the future.”
Grav Cycle

“Grav Cycles are still the least armored vehicle, making them easy kills for other vehicles and players equipped with weapons that deal extra damage to vehicles. They are however the fastest vehicle available now.”
<List>
<ListItem>Health increased to 2200, up from 1400.</ListItem>
<ListItem>Grav cycle now ejects the player without killing him.</ListItem>
<ListItem>Player may still take damage even while on the bike.</ListItem>
</List>
Locomotion
<List>
<ListItem>“The Grav Cycle is now the fastest vehicle in Tribes while boosting.”</ListItem>
<ListItem>Gravity scaling increased to 1.2, up from 0.8.</ListItem>
<ListItem>Speed remains at 2500</ListItem>
<ListItem>Boost Speed increased to 5000, up from 3750</ListItem>
<ListItem>Boost energy drain remains at 20.</ListItem>
<ListItem>Energy pool remains at 100</ListItem>
<ListItem>Energy recharge rate increased to 15, up from 13.</ListItem>
</List>
Weapon
<List>
<ListItem>“The Grav Cycle is equipped with dual rapid fire small AoE forward facing guns.</ListItem>
<ListItem>The dual guns fire 24 shots quickly before needing to be reloaded. They also deal</ListItem>
<ListItem>25% more damage on direct hits.”</ListItem>
<ListItem>Fire interval reduced to 0.08 seconds, down from 0.15.</ListItem>
<ListItem>Ammo pool increased to 24, up from 8.</ListItem>
<ListItem>Reload time reduced to 2 seconds, down from 4 seconds.</ListItem>
<ListItem>Projectile speed increased to 9000, up from 4000.</ListItem>
<ListItem>Projectile size reduced to 25, down from 42.</ListItem>
<ListItem>Impulse reduced to 5000, down from 15000</ListItem>
<ListItem>Damage reduced to 80, down from 250.</ListItem>
<ListItem>Falloff distance 150, down from 200.</ListItem>
<ListItem>Direct hit bonus added and set to 25%</ListItem>
</List>
Impact with player
<List>
<ListItem>“Even though the Grav Cycle is fast, it doesn’t ram all that hard unless at it’s at boosted speeds.”</ListItem>
<ListItem>Min damage speed increased to 1500, up from 800.</ListItem>
<ListItem>Min damage remains at 100.</ListItem>
<ListItem>Max damage speed increased to 3500, up from 1900.</ListItem>
<ListItem>Max damage reduced to 1000, down from 2400.</ListItem>
</List>
Impact with vehicle
<List>
<ListItem>Min damage speed increased to 1500, up from 500.</ListItem>
<ListItem>Min damage increased to 250, up from 100.</ListItem>
<ListItem>Max damage speed increased to 3500, up from 2100.</ListItem>
<ListItem>Max damage reduced to 2000, up from 2500.</ListItem>
</List>
Impact with immovable object
<List>
<ListItem>Min damage speed remains at 1000.</ListItem>
<ListItem>Min damage increased to 250, up from 100.</ListItem>
<ListItem>Max damage speed increased to 3500, up from 2100.</ListItem>
<ListItem>Max damage increased to 1000, up from 300.</ListItem>
</List>
Shrike

“The updated Shrike is 25% faster and but has slightly less health. A player in Light armor equipped with a Jackal or Shocklance can take Shrikes down quickly.”
<List>
<ListItem>Health reduced to 2800, up from 3200.</ListItem>
</List>
Locomotion
<List>
<ListItem>Speed increased to 2500, up from 2000.</ListItem>
<ListItem>Boost Speed increased to 3750, up from 3000.</ListItem>
<ListItem>Boost energy drain increased from 25, up from 20.</ListItem>
<ListItem>Energy pool increased to 100, up from 70.</ListItem>
<ListItem>Energy recharge rate increased to 20, up from 7.</ListItem>
</List>
Weapon
<List>
<ListItem>“The Shrike is equipped with 3 vollies of 4 rockets that may be rapid fired back to back, or single click burst fired to be conserved. It then must wait 4 seconds while it’s rocket pods reload.“</ListItem>
<ListItem>Fire interval reduced to 0.1 seconds, down from 0.25.</ListItem>
<ListItem>Ammo pool increased to 12, up from 4.</ListItem>
<ListItem>Burst fire count remains at 4 shots.</ListItem>
<ListItem>Reload time remains at 4 seconds.</ListItem>
<ListItem>Projectile speed increased to 18000, up from 8500.</ListItem>
<ListItem>Projectile size reduced to 25, down from 42.</ListItem>
<ListItem>Impulse reduced to 10000, down from 85000</ListItem>
<ListItem>Damage reduced to 160, down from 350.</ListItem>
<ListItem>Falloff distance 250, down from 320.</ListItem>
<ListItem>Direct hit bonus added and set to 25%</ListItem>
</List>
Impact with player
<List>
<ListItem>“Ram speeds have been adjusted to make killing players on impact not happen</ListItem>
<ListItem>100% of the time. The pilot must be boosting and likely need to come from the side or head on to kill a player in light armor.“</ListItem>
<ListItem>Min damage speed increased to 1500, up from 200.</ListItem>
<ListItem>Min damage increased to 100, up from 75.</ListItem>
<ListItem>Max damage speed increased to 3000, up from 2200.</ListItem>
<ListItem>Max damage reduced to 1000, down from 1800.</ListItem>
</List>
Impact with vehicle
<List>
<ListItem>Min damage speed increased to 1500, up from 500.</ListItem>
<ListItem>Min damage increased to 250, up from 100.</ListItem>
<ListItem>Max damage speed increased to 3000, up from 2100.</ListItem>
<ListItem>Max damage remains at 2500.</ListItem>
<ListItem>Impact with immovable object</ListItem>
<ListItem>Min damage speed increased to 700, up from 400.</ListItem>
<ListItem>Min damage increased to 250, up from 200.</ListItem>
<ListItem>Max damage speed increased to 2500, up from 2400.</ListItem>
<ListItem>Max damage increased to 2500, up from 2000.</ListItem>
</List>
Beowulf
<List>
<ListItem>Health remains at 8000.</ListItem>
</List>
Locomotion
<List>
<ListItem>Speed increased to 1250, up from 750.</ListItem>
<ListItem>Boost Speed increased to 1875, up from 938.</ListItem>
<ListItem>Boost energy drain increased from 25, up from 20.</ListItem>
<ListItem>Energy pool increased to 100, up from 80.</ListItem>
<ListItem>Energy recharge rate increased to 10, up from 8.</ListItem>
</List>
Weapon

Main Cannon
<List>
<ListItem>Main gun Damage increased to 1250, up from 1000.</ListItem>
<ListItem>Main gun Falloff radius increased to 800, up from 750.</ListItem>
<ListItem>Main gun Direct hit bonus reduced to 25%, down from 50%.</ListItem>
<ListItem>Gravity increased by 100%.</ListItem>
<ListItem>Now gives mid-air accolades when getting mid-air kills.</ListItem>
<ListItem>Fire interval reduced to 3 seconds, down from 4.</ListItem>
<ListItem>Projectile size reduced to 25, down from 42.</ListItem>
<ListItem>Damage remains at 1000.</ListItem>
<ListItem>Falloff distance remains at 750.</ListItem>
<ListItem>Direct hit bonus reduced to 50%, down from 100%</ListItem>
<ListItem>Damage bonus vs Shrikes increased to 200%, up from 150%</ListItem>
<ListItem>Damage bonus vs Grav Cycle increased to 200%, up from 100%</ListItem>
<ListItem>Damage bonus vs Base Assets increased to 100%, up from 80%</ListItem>
</List>
Gunner
<List>
<ListItem>Fire interval reduced to 0.1 second, down from 0.11.</ListItem>
<ListItem>Reload time reduced to 2 seconds, down from 4.</ListItem>
<ListItem>Projectile size reduced to 25, down from 50.</ListItem>
<ListItem>Projectile speed increased to 21000, up from 18000.</ListItem>
<ListItem>Damage decreased to 85, down from 100.</ListItem>
</List>
Impact with player
<List>
<ListItem>“Ramming damage dealt to players has been lowered as slow moving vehicles shouldn’t deal much damage to enemies on impact.”</ListItem>
<ListItem>Max damage speed increased to 1800, up from 1600.</ListItem>
<ListItem>Min damage speed increased to 1000, up from 800.</ListItem>
<ListItem>Min damage reduced to 100, down from 500.</ListItem>
<ListItem>Max damage reduced to 500, down from 1000.</ListItem>
</List>
Impact with vehicle
<List>
<ListItem>Max damage speed reduced to 1800, down from 2100.</ListItem>
<ListItem>Min damage speed reduced to 600, down from 500.</ListItem>
<ListItem>Min damage increased to 500, up from 100.</ListItem>
<ListItem>Max damage remains at 2500.</ListItem>
</List>
Impact with immovable object
<List>
<ListItem>Max damage speed reduced to 1800, down from 2100.</ListItem>
<ListItem>Min damage speed increased to 1200, up from 1000.</ListItem>
<ListItem>Min damage remains at 100.</ListItem>
<ListItem>Max damage reduced to 250, down from 400.</ListItem>
</List>
Damage to vehicles
<List>
<ListItem>“All damage to vehicles has been adjusted to normalize the playing field a little better. Weapons that specialize in killing vehicles now deal 25% - 50% more damage. Vehicle health values have been reduced to compensate. This makes weapons that previously did not specialize in killing vehicles somewhat stronger, and weapons that were super strong against vehicles somewhat weaker.”</ListItem>

<ListItem>Bullet based weapons now deal damage to vehicles/base assets</ListItem>
  - vs Generators 80%
  - vs Shrike 65%
  - vs Beowulf 50%
  - vs Grav Cycle 50%
  - vs Base Turret/Sensors 100%
  </List>
Vehicles no longer require credits to purchase.

Vehicle station may now be Destroyed/Repaired.
<List>
<ListItem>4000 health, no shield.</ListItem>
<ListItem>Must be repaired to 75% health before the station is active once again.</ListItem>
</List>
Vehicle eject inheritance adjusted per armor class.
<List>
<ListItem>40% for light down from 100%</ListItem>
<ListItem>35% for medium down from 100%</ListItem>
<ListItem>30% for heavy down from 50%</ListItem>
</List>
Fixed an issue where projectiles didn’t inherit any vehicle velocity when shooting as a passenger.

<Title order={4}> Gameplay</Title>

+25% self impulse on all explosive weapons.

Self impulse will not knock you up off the ground unless the angle of the explosion is that it should knock you up. This allows well placed explosives to add impulse in the player&apos;s intended direction.
Automatic weapons projectile flight distance/lifetime is now shorter.
<List>
<ListItem>Automatic projectile&apos;s flight time reduced to 0.5 seconds, down from 1 second.</ListItem>
<ListItem>This results in a flight distance of 10500 units, down from 21000.</ListItem>
</List>
Ammo drops now give health when picked up.
<List>
<ListItem>Light armor heals 30%</ListItem>
<ListItem>Medium armor heals 25%</ListItem>
<ListItem>Heavy armor heals 20%</ListItem>
</List>
Base asset upgrades have been removed and the stats adjusted accordingly.
Sensor
<List>
<ListItem>“Shields on base assets only mitigate damage and can now be worn down over time instead of completely prevent damage from slower rate of fire weapons such as the disk launcher.”</ListItem>
<ListItem>Health increased to 4000, up from 3500.</ListItem>
<ListItem>Shield increased to 1000, down from 1600</ListItem>
<ListItem>Shield now regenerates over 4 seconds, down from 1.7 seconds.</ListItem>
<ListItem>Now requires 75% health to re-activate after death.</ListItem>
<ListItem>Range set to 20000, roughly equal to a rank 4 sensor.</ListItem>
</List>
Base Turret
<List>
<ListItem>“The new Base Turrets operate like Tribes 2 base turrets. They no longer destroy players in 1 shot and the serve primarily as area denial.”</ListItem>
<ListItem>Health reduced to 4000, up from 3500.</ListItem>
<ListItem>Shields reduced to 1000, down from 1600</ListItem>
<ListItem>Shield now regenerates over 4 seconds, down from 1.7 seconds</ListItem>
<ListItem>Requires 75% health to re-activate after death.</ListItem>
<ListItem>Projectile speed reduced to 3500, down from 4000.</ListItem>
<ListItem>Damage reduced to 350 down from 650</ListItem>
<ListItem>Range reduced to 350 down from 700</ListItem>
<ListItem>Fire interval to reduced to 1.3 down from 2.5</ListItem>
</List>
Generator
<List>
<ListItem>Health set to 12000, roughly equal to a rank 4 generator.</ListItem>
<ListItem>Now requires 75% health to re-activate after death.</ListItem>
<ListItem>Self Heal time set to 4 minutes, roughly equal to a rank 3 generator.</ListItem>
</List>
Call-ins removed

Credits have been removed from the game.

Damage numbers have been shifted vertically on all bullet based weapons to make target easier to see while hitting.

Deployable explosives have had their damage reduced and impulse increased.

Each armor type now has 9 free loadouts slots

Explosive damage falloff has been converted to linear falloff, with a minimum damage.

Instant-fire weapons have had their impulse values removed.

Max Impulse falloff area has been clamped. Within 40% of the falloff radius 100% of the impulse is applied. This range is similar to the old banded damage impulse areas.

Numerous stealth gameplay adjustments

A stealthed player may not pick up or return the flag.

Stealth pack may not be active while the flag is being carried.
Perks have been removed from the game. Some aspects of signature perks have preserved in other devices/armor.
<List>
<ListItem>“Perks falsely offered customization to your class. There were only bad choices that a player could make by not equipping a specific perk. For example Quickdraw was required to duel another player and if you didn’t have it you were very likely going to lose the fight. It was the rock-paper-scissors type gameplay that perks promoted that did not fit with the new more flexible loadout choices.”</ListItem>
<ListItem>Weapon switch speed increased by 50%. (Previously Quickdraw)</ListItem>
<ListItem>Turrets take longer to target all players. (Previously Stealthy)</ListItem>
<ListItem>Ammo drops heal players that pick them up (Previously Survivalist)</ListItem>
<ListItem>Rage buff reduces player mass (Previously Lightweight)</ListItem>
<ListItem>Light armor gains Rage when friendly flag is taken off it’s stand (Previously Rage)</ListItem>
<ListItem>Medium gains extra vehicle energy while piloting (Previously Wheel Deal)</ListItem>
<ListItem>Heavy deal damage to players while body blocking (Previously Super Heavy)</ListItem>
<ListItem>Heavy Energy Pack converts incoming damage to energy (Previously Potential Energy)</ListItem>
</List>
Projectile collision sizes have been adjusted to be similar across devices.
<List>
<ListItem>Impact projectiles size increased to 15, up from 10.</ListItem>
<ListItem>Timed explosives size reduced to 20, down from 42.</ListItem>
<ListItem>Automatic projectile sizes reduced to 25, down from 50.</ListItem>
</List>
Rage buff on Light Armor has been adjusted slightly:
<List>
<ListItem>Mass decreased by 25%</ListItem>
<ListItem>Impulse is increased by 10%</ListItem>
<ListItem>Rage increases energy pool by 20%</ListItem>
<ListItem>Rage increases energy regeneration by 20%</ListItem>
<ListItem>First self impact damage is ignored and ends Rage</ListItem>
<ListItem>Rage expires after 15 seconds</ListItem>
<ListItem>100% Energy is recovered when Rage clears</ListItem>
</List>
Raised 3rd person camera on medium and heavy so the head of your character isn’t covering the middle of the screen.

Screen shake has been reduced by 50%, and its length also reduced by 30%.

Shotguns now fire 9 shot and have a defined shot pattern and spread with no accuracy loss between shots.

Stealth pack now has a looping sound that is audible for everyone in range.

Upgrades paths have been removed from the game.

Fixed an issue where falloff damage was being applied even if the target was directly hit.

Fixed an issue where belt items were not canceling the spawn protection effect.

Exploits and Cheats
<List>
<ListItem>Fixed various ways for players to showing collision (aka hitbox toggling).</ListItem>
<ListItem>Fixed an issue in TDM where a player could force respawn without picking a team.</ListItem>
<ListItem>Fixed an issue where \n was an accepted character in a clan tag/name.</ListItem>
<ListItem>Fixed players being able to bypass level restrictions when joining specific servers.</ListItem>
<ListItem>Fixed an issue with a material that caused flashing to occur with modified (aka flash ini) post process settings.</ListItem>
<ListItem>Fixed an issue where a player could modify impulse values on hitscan weapons to push other players around the map.</ListItem>
</List>
UI

New Weapon loadout bar is now enabled by default. It shows the following:
<List>
<ListItem>Weapon slots, belt items, and packs equipped.</ListItem>
<ListItem>Keys bound to these slots</ListItem>
<ListItem>Which weapon slot is currently selected</ListItem>
<ListItem>Active and Passive reload progress</ListItem>
<ListItem>Ammo for each slot</ListItem>
<ListItem>Credit Counter / Call-ins UI has been removed.</ListItem>
<ListItem>Mousewheel scrolling has been added to the vertical stack menu.</ListItem>
<ListItem>Old progression tracks have been removed from equipment menus.</ListItem>
<ListItem>Reticles may now be replaced by PNG files stored locally on your hard drive and configured through the ini files. Follow this tutorial for installing custom reticles.</ListItem>
<ListItem>Fixed level progression bar extending outside of its intended area.</ListItem>
<ListItem>Fixed “Undefined” showing up in various parts of the main menu when changing loadouts.</ListItem>
</List>
<Title order={4}> Misc.</Title>
<List>
<ListItem>New animations in the loadout menus for weapons that were previously not seen in hand.</ListItem>
<ListItem>Conduits on various maps have added jump pads, or have been replaced entirely with jump pads.</ListItem>
<ListItem>Default field of view has been set to 120.</ListItem>
<ListItem>Jetpack trail visibility has been reduced by 50%</ListItem>
<ListItem>Mines have glowing fresnel added to them and they glow more aggressively at distance.</ListItem>
<ListItem>Modified drydock spawns to never drop you in the middle of the basin.</ListItem>
<ListItem>Optimizations have been made to improve network performance.</ListItem>
<ListItem>Sentinel skin transparency effect has been reduced by 75%</ListItem>
<ListItem>Server browser now sorts by player slots by default.</ListItem>
<ListItem>Standardized particle system size for automatic projectiles to help read distances better.</ListItem>
<ListItem>/Stat unit is now supported. This will show more detailed CPU and GPU usage informat.</ListItem>
</List>
<Title order={2}> 2013</Title>

<Title order={3}> Tribes: Ascend Version 1.0.1267</Title>

2013/3/12

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>New Synthrall skin for the Soldier class.</ListItem>
<ListItem>Two new voice packs:</ListItem>
</List>
  - TotalBiscuit
  - Stowaway
<List>
<ListItem>Settings for custom servers are persisted across logins.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Fixed an issue where the Shocklance would affect energy usage of packs.</ListItem>
<ListItem>When players upgrade a base turret, the turret will now properly upgrade it’s rate of fire.</ListItem>
<ListItem>Fixed an issue where fractal grenades could timeout before they finished fractalling, resulting in a non-damaging explosion.</ListItem>
</List>
<Title order={4}> Vehicles</Title>
<List>
<ListItem>Shocklance now has a small weapons model.</ListItem>
<ListItem>Fixed positioning of Shocklance on the main menu.</ListItem>
<ListItem>Shocklance is now bannable from a custom server.</ListItem>
<ListItem>Rock bouncing custom physics preset has been changed to be index based. RockBounceIndex is the property 0=full rock bounce, 1=standard rock bounce, 2=no rock bounce</ListItem>
<ListItem>Fixed an issue where returning a flag could prevent grabbing an enemy flag or grabbing an enemy flag could prevent returning your team&apos;s flag.</ListItem>
<ListItem>Laser targeter no longer can deploy call-ins during the warmup phase of a match.</ListItem>
<ListItem>Fixed an issue where the passenger from a gravcycle could get launched off at a high speed when exiting.</ListItem>
<ListItem>Fixed an issue where certain types of fog could be disabled in custom .ini settings.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Game of the Year Edition</Title>

2013/2/14

<Title order={4}> Tribes: Ascend Dev Update #11 - Game of The Year Update</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/RdnOxW7sPA0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>All weapons, classes, perks and loadouts can now be purchased for a single price. The “Tribes: Ascend Game of the Year” package can be purchased in-game, on Steam, or through the Tribes: Ascend Web Store, and will immediately unlock all gameplay impacting items, which includes over 100 weapons, all 9 classes and all 21 perks. As a special bonus, players that are current Tribes: Ascend VIP’s can purchase the Game of the Year package for 50% off by visiting the Tribes: Ascend Web Store and logging in with their VIP account credentials. (Note that VIP status will no longer be awarded to future players of the game, although current VIPs will remain VIPs and will keep the VIP XP and other bonuses).</ListItem>
<ListItem>Three new CTF and Blitz maps available!</ListItem>
</List>
  - CTF Bella Omega
  - CTF Blueshift
  - CTF Canyon Crusade Revival
<List>
<ListItem>Three new Arena maps available!</ListItem>
</List>
  - Arena Fraytown
  - Arena Undercroft
  - Arena Whiteout
  <List>
<ListItem>Four Rabbit maps have been added to the queue:</ListItem>
</List>
  - Inferno
  - Nightabatic
  - Outskirts
  - Sulfer Cove
  <List>
<ListItem>New weapon available on all classes: Shocklance</ListItem>
<ListItem>New Skins available:</ListItem>
</List>
  - Juggernaut’s Forlorn skin.
  - Doombringer’s Executioner skin.
  <List>
<ListItem>Base Turrets and Radar Stations are now shielded. Shields will absorb damage and regenerate very quickly. Shields are powered by the generator, and will drop when the generator is down.</ListItem>
<ListItem>Grenades now have a glow around them to help with their visibility.</ListItem>
</List>
<Title order={4}> Other Weapon/Balance Items</Title>
<List>
<ListItem>All weapons have been rebalanced against shielded base assets. Some weapons, such as Mortar Launchers, Arx Busters, and Grenades are very effective vs shielded assets, and deal enough damage to blast directly through the shields. Weapons such as Spinfusors do not deal enough damage to push through shields before they recharge, and as such require multiple players shooting at the same time to cause damage.</ListItem>
<ListItem>Base Turrets and Radar stations no longer gain more health when upgraded by players. Turrets gain a faster rate of fire, and Radar stations increase their range. (Both still provide score bonus to players who upgrade them).</ListItem>
<ListItem>Raider’s White Out grenade has been changed, and no longer causes blindness. It now disables HUD icons on players, and disables Turrets for 5s to 6.25s depending on upgrade. If the turret is shielded, is also drops its shield making it more vulnerable.</ListItem>
<ListItem>Raider’s White Out has been renamed to Black Out.</ListItem>
<ListItem>Mortars now explode on contact with shielded base assets (base turrets and base radar). This change affects the Juggernaut’s Mortar Launcher and the Juggernaut’s LR1 Mortar Launcher.</ListItem>
<ListItem>With the Mechanic perk equipped, Repair tools will damage enemy base turrets and sensors “through” their shielding.</ListItem>
<ListItem>Mines now have a soft “edge glow” around them, to make them more visible.</ListItem>
<ListItem>Sentinel&apos;s BXT rifles have been made more effective when not in scope, damage raised to 125. (Scope still charges for higher damage).</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Fixed an issue where shotguns could get into a state where they only fired one bullet.</ListItem>
<ListItem>Fixed issues where damage from explosions weren’t reliable when the explosion occurred beneath the target on a steep slope or vertical asset. See the dev blog post for more information: viewtopic.php?f=345&t=96745</ListItem>
<ListItem>Addressed an issue where certain grenades, such as Nitrons, were exploding unreliably when thrown near the feet of your own player.</ListItem>
<ListItem>Fixed an issue where the SkiFallVelocityTransfer physics preset was being controlled by JetForwardAccelPercent.</ListItem>
<ListItem>Fixed an issue with the Infiltrator’s Jackal where if friendly fire was enabled, the projectiles would detonate without damaging targets fully.</ListItem>
<ListItem>Removed an incorrect welcome message from the chat console.</ListItem>
<ListItem>Base Sensors stop spinning when blown up and resume spinning when they are functionally repaired.</ListItem>
<ListItem>Added the following player physics properties:</ListItem>
</List>
  - ImpulseMassLight (Was simply ImpulseMass before)
  - ImpulseMassMedium
  - ImpulseMassHeavy
  - JetpackEnergyCost
  - FlagThrowSpeed
  - FlagInheritSpeed
  - FlagBounceDamping
  - FlagFallingMomentumDamping
  - FlagDamageMass
  - FlagFriction
  - FlagNumBouncesBeforeSlide
  - RockBounceFullSpeedThreshold
  - RockBounceGraceAngle
  - RockBounceFalloffAngle
  <List>
<ListItem>Added a shorthand command for setting player physics. /SetPhysicsProperty also works as /SPP.</ListItem>
<ListItem>Added log verification when a physics property successfully changes.</ListItem>
<ListItem>Added a batch entry solution for setting physics properties:</ListItem>
</List>
  - /SetBatchPhysicsProperty PropertyName1=Value1,PropertyName2=Value2, etc. will parse bulk property changes for easy preset testing.
  - /PrintPhysicsReport now places a batch command for the current state of all physics properties to the end of the clipboard copy so that players can easily re-enter a saved text profile.
  <List>
<ListItem>Fixed an issue where passenger meshes were being distance-culled after leaving a vehicle.</ListItem>
<ListItem>Fixed an issue where game would crash when switching between server browser tabs</ListItem>
<ListItem>Fixed an issue where game would crash when filtering game modes..</ListItem>
<ListItem>Fixed a crash that would occur when logging in after being kicked for being idle.</ListItem>
<ListItem>Fixed an issue where announcer messages would cut off.</ListItem>
</List>
<Title order={2}> 2012</Title>

<Title order={3}> Tribes: Ascend Version 1.0.1185</Title>

2012/12/6

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Owners of Custom Servers can now ban individual weapons or perks on their server. Under Gameplay Settings, use the Ban Equipment menu option.</ListItem>
<ListItem>Improved memory usage and management. Some users with 32-bit operating systems were crashing after running out of memory, which should now be resolved.</ListItem>
<ListItem>Added a safe mode option which runs the game with default settings and lowest texture quality. To access safe mode, open the Tribes: Ascend Launcher, click the settings icon, and enable “run game in safe mode.”</ListItem>
<ListItem>Added a system to adjust core player physics values on Custom Servers and in local Roaming maps. This system is designed to give control to advanced players who want to tweak player movement variables. We will work with the community to organize a series of presets that can be applied to custom servers and focused playtests experimenting with physics changes. For more information and instructions on how to change settings, visit the Tribes: Ascend Dev Blog:http://forum.hirezstudios.com/phpbb/viewtopic.php?f=345&t=96589</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Fixed an issue where the Brute’s Light Sticky Grenade would not explode if the grenade was primed when the owning player died.</ListItem>
<ListItem>Increased Sentinel’s Drop Jammer radius by 50%.</ListItem>
<ListItem>Reduced Raider’s White Out grenade radius by 10%.</ListItem>
<ListItem>Reduced Technician’s TCNG Quick-Fuse damage by 12.5% and radius by 4%.</ListItem>
<ListItem>Reduced Technician’s TCNG damage by 10% and radius by 6%.</ListItem>
<ListItem>Reduced Infiltrator’s Sticky XL damage by 20% and radius by 14%.</ListItem>
<ListItem>Reduced Infiltrator’s Sticky Grenade damage by 16% and radius by 16%.</ListItem>
<ListItem>Reduced duration of Brute’s Fractal Grenade and Extended Fractal both by 1s. Reduced knockback on each individual beam substantially.</ListItem>
<ListItem>Change the time between shots on Infiltrator’s Jackal from .25s to .35s.</ListItem>
<ListItem>Reduced Brute’s Plasma Cannon hit-box size by 28% and reduced starting clip size from 10 to 8.</ListItem>
<ListItem>Reduced Raider’s Plasma Gun hit-box size by 28% and reduced starting clip size from 10 to 6.</ListItem>
<ListItem>Reduced Raider’s NJ5 SMG damage by 10% to be more in line with other Raider SMG options.</ListItem>
<ListItem>Reduced Doombringer’s Mine detonation range by 10%.</ListItem>
<ListItem>Reduced Soldier’s Short-Fuse Frag damage by 20% and radius by 16%.</ListItem>
<ListItem>Reduced Soldier’s Grenade XL damage by 9%.</ListItem>
<ListItem>Reduced Soldier’s AP Grenade damage by roughly 8% and radius by 4%.</ListItem>
<ListItem>Reduced range of the Sonic Punch perk by 36%.</ListItem>
<ListItem>Increased radius of Raider’s Jammer Pack by 42%.</ListItem>
<ListItem>Increased damage falloff on Sentinel’s SAP20 and Phase Rifle to be more similar to BXT1. (This is a nerf).</ListItem>
<ListItem>Decreased damage on Pathfinder’s Holdout Shotgun by roughly 5%.</ListItem>
<ListItem>Increased falloff on Pathfinder’s Shotgun and Holdout Shotgun by 10% (a nerf).</ListItem>
<ListItem>Increased falloff on Brute’s Automatic Shotgun and The Hammer by 10% (a nerf).</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Fixed a bug where players could launch themselves off a vehicle by a collision exploit.</ListItem>
<ListItem>Added the ability to filter the server browser list by ruleset (Official and Custom right now)</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.1141 (Revolution Update)</Title>

2012/10/29

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xh5cN0zoKQ8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Tribes: Ascend Dev Update #10 - Revolution</Title>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>In place of the previous match making system, a Server Browser has been added under the Play Now menu option. From this menu option, you may choose from a list of both Hi-Rez servers and player-managed Custom Servers. By choosing the Quick Match option, the system will automatically choose a server from the currently listed set of servers, based on your current filter criteria. Full rewards and accolades will be given on Custom Servers.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Fixed an issue where players could attach a called-in an inventory station onto their head.</ListItem>
<ListItem>Fixed issue with spotting players on Dangerous Crossing.</ListItem>
<ListItem>Removed side route force fields on Permafrost.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.1121</Title>

2012/10/3

<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Base Sensors no longer require line of sight to to a Technician’s Deployable Repair Kit in order to be repaired.</ListItem>
<ListItem>Increased direct hit multiplier from 1.4 to 1.6 on Pathfinder’s Blinksfusor, and reduced aoe radius by 5%.</ListItem>
<ListItem>Increased knockback on Pathfinder’s Impact Nitron by 20%. (It’s now roughly half that of the Explosive Nitron).</ListItem>
<ListItem>Decreased fire rate by 20% on Phase Rifle and SAP 20. Note: this lengthens the delay between shots allowed, but it does not change the time for energy to regenerate to a full shot.</ListItem>
<ListItem>Fixed issues preventing deployable repair kits from repairing Base Radars.</ListItem>
<ListItem>Fixed issue on Sentinel’s Nova Blaster’s where the weapons were mistakenly getting partial inheritance. They are now the same as other Automatics and Projectile based pistols.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Several optimizations have been made for machines using low or minimal settings.</ListItem>
<ListItem>Several platform changes have been made to improve the game’s support for 3rd Party Distribution and Publishing partners.</ListItem>
<ListItem>Fixed issue where Simulated Projectiles setting was not saving properly.</ListItem>
<ListItem>Fixed issue on Blinksfusor where reload sound was not playing properly.</ListItem>
<ListItem>Fixed issue on Spare Spinfusor where it appeared as a Blinksfusor to enemies.</ListItem>
<ListItem>Fixed issue on Permafrost where corpses could pass through certain areas.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.1103 (Marksman Update)</Title>

2012/9/12

<Title order={4}> Tribes: Ascend Dev Update #9 - Marksman</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZkfWK3Z-Hrk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Three new weapons for Sentinel:</ListItem>

  - Primary: SAP20 Sniper Rifle
  - Secondary: Accurized Shotgun
  - Belt: Motion Mine

<ListItem>One new weapon for Soldier:</ListItem>

  - Secondary: Spare Spinfusor

<ListItem>One new weapon for Pathfinder:</ListItem>

  - Primary: Blinksfusor (100% Inheritance)

<ListItem>New CTF Blitz Map (Crossfire)</ListItem>
<ListItem>Reduced the amount of impact camera shake from rapid projectile weapons (such as Assault Rifles, SMGs, etc).</ListItem>
<ListItem>Decoupling of texture quality in graphics settings</ListItem>
<ListItem>Introduced “flag drag” to limit the amount of speed a flag carrier can maintain at very high speeds. The drag is introduced at 300, 275, and 250 km/h for lights, mediums, and heavies, respectively. For custom servers, these speeds and the deceleration rate for when a player is over the top speed are customizable. Setting the value to 0 will turn off the feature.</ListItem>
<ListItem>There is a new option under Settings-&gt;Gameplay called Simulated Projectiles (enabled by default). If disabled, projectiles from fast firing guns will no longer be simulated client-side, resulting in projectiles that are accurate to what the server plays at the cost of a delay from when you see them.</ListItem>
<ListItem>Additional improvements to German and French translated versions.</ListItem>
<ListItem>Additional server capacity has been added in the Amsterdam data center. London servers are now available for Custom Servers, but not quick play matches.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Three new weapons for Sentinel:</ListItem>
  - Primary: SAP20 Sniper Rifle
  - Secondary: Accurized Shotgun
  - Belt: Motion Mine
<ListItem>One new weapon for Soldier:</ListItem>
  - Secondary: Spare Spinfusor
<ListItem>One new weapon for Pathfinder:</ListItem>
  - Primary: Blinksfusor (100% Inheritance)
<ListItem>The Rage perk has been overhauled.</ListItem>
  - Rage activates if you are within 230m of your flag when it’s grabbed by an enemy.
  - The flag must be taken from its flag stand for Rage to activate.
  - When activated Rage instantly gives energy and health (when upgraded).
  - For 15 seconds you have mass reduction and are immune to the next self-damage you take, which removes the Rage Effect.
  - Flag carriers cannot be raged.
<ListItem>The Technician&apos;s Repair Kit will no longer repair objectives through world geometry. Base turrets are an exception to this rule since they can be on platforms that don’t have enough room for the kit.</ListItem>
<ListItem>Reduced the amount of impact camera shake from rapid projectile weapons (such as Assault Rifles, SMGs, etc).</ListItem>
<ListItem>Reduced starting magazine size on Raider’s NJ5 to 20. Adjusted starting ammo to match.</ListItem>
<ListItem>Reduced damage on Technician’s Quick-Fuse grenade by 11%.</ListItem>
<ListItem>Reduced radius on Technician’s Quick-Fuse grenade by 16%.</ListItem>
<ListItem>Reduced damage on Soldier’s Short-Fuse Frag by 10%.</ListItem>
<ListItem>Reduced radius on Soldier’s Short-Fuse Frag by 14%.</ListItem>
<ListItem>Increased damage on Technician’s TC24 by 10%</ListItem>
<ListItem>Increased radius on Technician’s TC24 by 4%.</ListItem>
<ListItem>Increased projectile speed 15% on Technician’s EXR Turret.</ListItem>
<ListItem>Increased projectile size on Technician’s EXR Turret.</ListItem>
<ListItem>Slightly reduced the size of Technician’s EXR Turret.</ListItem>
<ListItem>Increased the top speed of the Grav Cycle.</ListItem>
<ListItem>Decreased damage on Soldier’s Proximity Grenade by 11%.</ListItem>
<ListItem>Decreased radius on Soldier’s Proximity Grenade by 8%.</ListItem>
<ListItem>Fixed a bug allowing Technician Repair Kits to repair faster than should be allowed based on server performance. In general, this will decrease repair kit rates from what was in live.</ListItem>
<ListItem>Fixed a bug that prevented unlocked Repair Kit upgrades from functioning properly.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>There is a new option under Video Settings to control Texture Detail. It is recommended that 32-bit OS users set this option to Medium or lower due to memory constraints.</ListItem>
<ListItem>Fixed issues with players using special characters in clan tags</ListItem>
<ListItem>Fixed an issue where certain settings’ Enabled states would not show on rollover</ListItem>
<ListItem>Fixed an issue allowing players to get out of bounds on Temple Ruins</ListItem>
<ListItem>Changes to Permafrost: New flagstand area, larger generator room, terrain and spawn changes.</ListItem>
<ListItem>Fixed an issue where players could visit inventory stations without the time penalty restriction if the player had changed classes.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.1082 (BLITZ Update)</Title>

2012/8/22

<Title order={4}> Tribes: Ascend Dev Update #8 - Blitz</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/cSqyJJpUBaA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>A new gametype, CTF Blitz, has been introduced. In Blitz, the enemy flag base moves location each time your team scores, changing routes and requiring varied tactics to win.CTF Blitz is initially played on Arx Novena, Katabatic and Drydock.</ListItem>
<ListItem>New Technician Weapons and Skin have been added:</ListItem>
</List>
  - New Primary: TC24
  - New Belt Item: Repair Kit
  - New Pack: EXR Turret
  - Specialist Skin
  <List>
<ListItem>New CTF Maps have been added to the Quick Play Rotation:</ListItem>
</List>
  - Dangerous Crossing
  - Permafrost
  <List>
<ListItem>Classic Tribes 2 voice packs are now available, using the original Tribes 2 voices:</ListItem>
</List>
  - 5 male voice packs:

    - Hero
    - Iceman
    - Rogue
    - Hardcase
    - Psycho

  - 5 female voice packs:

    - Heroine
    - Professional
    - Cadet
    - Veteran
    - Amazon

  - 3 BioDerm voice packs

    - Warrior
    - Monster
    - Predator
    <List>
<ListItem>Custom servers can now be configured/purchased in the N. America – Central region, with servers located in Dallas, TX. Note that this region is for Custom Servers only and does not apply to Quick Play matches.</ListItem>
<ListItem>Improved language support for German and French.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Added 3 new items for Technician:</ListItem>
</List>
  - New Primary: The TC24 can fire four short-range explosive projectiles before having to relod.
  - New Belt Item: The Repair Kit will automatically repair any damaged structures or targets around it.
  - New Pack: The EXR Turret has a longer range than the Light Turret and fires a small explosive rocket. It deals less focused damage than the Light Turret, but makes up for it with flexibility.
  <List>
<ListItem>Reduced reload time on Brutes Gladiator by 7%.</ListItem>
<ListItem>Increased damage on Pathfinder’s Light Twinfusor by 12%.</ListItem>
<ListItem>Increased damage on Soldier’s Twinfusor by 7%.</ListItem>
<ListItem>Increased damage on Juggernaut’s Heavy Twinfusor by 10%.</ListItem>
<ListItem>Increased projectile size on Sentinel’s Nova Blaster and Nova Blaster MX.</ListItem>
<ListItem>More than tripled the activation range of the Rage Perk.</ListItem>
<ListItem>Increased mass reduction on the Rage perk to 20%.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Animations in the main menu have been shortened, making for faster menu navigation.</ListItem>
<ListItem>Various cleanups and fixes to existing maps.</ListItem>
<ListItem>Fixed a bug where deployable sensors, such as the Sentinel’s Drop Jammer, could permanently affect players.</ListItem>
<ListItem>Fixed an issue where a mastered Safe Fall perk was resetting the health regen time even though the player took no falling damage.</ListItem>
<ListItem>Fixed an issue where deployables were not deploying properly on certain surfaces, such as the threshold between the ramp and interior of the Sunstar temple.</ListItem>
<ListItem>Fixed issues where overlay effects on the Mercenary Sentinel skin could cause a flashing side-effect.</ListItem>
<ListItem>Fixed an issue where shotguns would not properly perform a passive reload and therefore could cause odd behavior when the player shot subsequent rounds.</ListItem>
<ListItem>Fixed a bug in which the “Screen Crack” setting would not store properly server-side.</ListItem>
<ListItem>Fixed a bug in which featured news ticker items would show under the “Watch Now” menu.</ListItem>
<ListItem>A new settings option has been added to enable Alienware FX. For Alienware machines, colors will change on the hardware based on your health status. Be sure you have the latest Alienware drivers.</ListItem>
<ListItem>Non-Steam users may add the option “-steam” under “Optional game command line parameters” in order to access Steam-related features, such as use of the Steam wallet (note: You must be logged into Steam prior to launching the game for this feature to work).</ListItem>
<ListItem>Fixed a bug with health multipliers on custom servers.</ListItem>
<ListItem>Implemented several cleanups and fixes to the clan tag functionality.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.1055 (Twinfusor Update)</Title>

2012/7/25

<Title order={4}> Tribes: Ascend Dev Update #7 - Twinfusor</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/URjuA4XGBnc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Three new weapons have been added: The Pathfinder’s Light Twinfusor, the Soldier’s Twinfusor and Juggernaut’s Heavy Twinfusor.</ListItem>
<ListItem>Stonehenge has been added to the standard CTF map rotation.</ListItem>
<ListItem>A new CTF Map, Permafrost, has been added to custom servers.</ListItem>
<ListItem>A new CTF Map, Dangerous Crossing, has been added to custom servers.</ListItem>
<ListItem>New Players joining the queue (under rank 6) will now play a smaller subset of maps more friendly to learning the game. All maps will rotate for players rank 6 and over.</ListItem>
<ListItem>Players are more likely to be grouped in matches with other players of their same level/rank.</ListItem>
<ListItem>Players may now create a party of their friends before joining the Quick Match queues.</ListItem>

  - Access through the popout tab on the Play Now option.
  - The Leader may send invites to friends and others by name.
  - Members can chat together in and out of game, and are notified when the Leader joins or leaves a queue.
  - Members are removed from the party automatically if they leave the queue or game.

<ListItem>Three new skins have been added:</ListItem>

  - Pathfinder Freerunner
  - Brute Crusher
  - Sentinel Spectre

<ListItem>Voicepacks are now available to purchase. Four are available, two female and two male.</ListItem>
<ListItem>Players may now add a Clan Tag in front of their player name. Tags may be purchased under the Store menu.</ListItem>
<ListItem>Additional loadout slots have been added.</ListItem>
<ListItem>News Items now display in the main game lobby as a ticker at the bottom of the screen.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Three new weapons have been added: The Pathfinder’s Light Twinfusor, the Soldier’s Twinfusor and Juggernaut’s Heavy Twinfusor.</ListItem>
<ListItem>Increased self-knockback (“disk-jumping” or “rocket-jumping”) on all explosive projectile weapons by 20%.</ListItem>
<ListItem>Increased projectile collision size on all Spinfusors, Bolt Launchers, and Thumpers to 10 (as a reference, Plasma Guns are 35). This will make mid-airs and direct hits more forgiving.</ListItem>
<ListItem>Decreased the extra delay between bursts on Pathfinder’s LAR from 0.16s to 0.072s.</ListItem>
<ListItem>Increased damage by 8% on Doombringer’s Titan Launcher.</ListItem>
<ListItem>Increased radius on each explosion sequence of Brute’s Gladiator.</ListItem>
<ListItem>Increased damage 33% on final explosion sequence of Brute’s Gladiator.</ListItem>
<ListItem>Decreased starting AOE range on Brute’s Fractal Grenade and Extended Fractal by 10%.</ListItem>
<ListItem>Decreased damage on Brute’s Fractal Grenade and Extended Fractal by 10%.</ListItem>
<ListItem>Reduced duration of Brute’s Fractal Grenade and Extended Fractal by 1s.</ListItem>
<ListItem>Reduced damage on Infiltrator’s Jackal so it can no longer 1 shot an upgraded medium from stealth. This is a 16% reduction.</ListItem>
<ListItem>Reduced knockback on Infiltrator’s Jackal by half for each explosion.</ListItem>
<ListItem>Increased starting ammo counts on Infiltrator’s Smoke Grenade and Prism Mine from 1 to 2. Infiltrator now starts with all belt options having an ammo count of 2.</ListItem>
<ListItem>Reduced knockback from Pathfinder’s Impact Nitron and Compact Nitron’s by 23% to be more in line with the amount of damage being done, and to favor using the increased values on spinfusors and other projectile weapons.</ListItem>
<ListItem>Reduced knockback from Raider’s White Out grenade, Grenade Launcher, Arx Buster and Dust Devil to be more appropriate for the number of shots and amount of damage being done.</ListItem>
<ListItem>Reduced reload time on Doombringer’s Titan Launcher from 1.8 to 1.7.</ListItem>
<ListItem>Reduced reload time on Doombringer’s Heavy Bolt Launcher from 1.8 to 1.7.</ListItem>
<ListItem>Increased damage on Soldier’s Proximity Grenade by 16%.</ListItem>
<ListItem>Reduced damage 4% on Doombringer’s Chain Cannon.</ListItem>
<ListItem>Reduced damage 5% on Doombringer’s Chaingun.</ListItem>
<ListItem>Reduced starting ammo from 280 to 200 and upgrades from 50 to 25 ammo (each) on Doombringer’s Chaingun and Chain Cannon.</ListItem>
<ListItem>Reduced damage 5% on Technician’s Rockwind SMG.</ListItem>
<ListItem>Increased damage 14% on Doombringer’s Defective Frag Grenade.</ListItem>
<ListItem>Increased damage 13% on Doombringer’s Frag Grenade.</ListItem>
<ListItem>The Close Combat perk’s backstab bonus has been increased to double damage, and is now the first unlock for the perk.</ListItem>
<ListItem>The Looter Perk has been increased to provide a base 50% ammo bonus, and upgrades to 100%.</ListItem>
<ListItem>The Sonic Punch Perk has had its shockwave distance increased by 23%.</ListItem>
<ListItem>The Stealthy Perk now reduces base sensor detection by 50%, upgraded to 90%, and the upgrade for turret targeting delay has been increased to 30%.</ListItem>
<ListItem>The Safefall perk now starts at 50% falling and splat damage reduction, and is upgraded to immunity from all falling and splat damage. In addition, its final unlock has been increased from 80% vehicle run over damage reduction to immunity from vehicle run over damage.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Added an option under “HUD” to disable screen cracking when taking damage.</ListItem>
<ListItem>Base XP is now earned on Custom Servers at all times. “Performance XP” is earned once 6 people join the server.</ListItem>
<ListItem>Fixed an issue where mines could be indestructible by AOE blasts if placed in certain places in various maps.</ListItem>
<ListItem>Flag model no longer shows in first-person spectate mode.</ListItem>
<ListItem>Spectators can now zoom in and out when viewing a vehicle.</ListItem>
<ListItem>Fixed an issue where the camera could look strange if spectating in first-person mode and the view target entered a vehicle.</ListItem>
<ListItem>Fixed an exploit where the Pathfinder’s Thrust Pack could have unlimited thrust energy.</ListItem>
<ListItem>Fixed an issue where shotguns would only reload one ammo when performing an inactive reload.</ListItem>
<ListItem>Fixed an issue where the sound on the Pathfinder’s Light Assault Rifle would cut out when firing repeatedly.</ListItem>
<ListItem>Fixed an issue where guns that deal multiple damage per shot, such as shotguns, properly display damage numbers when shooting objectives and vehicles. Before the fix, the numbers would draw on top of each other making it seem like there was only a single instance of damage.</ListItem>
<ListItem>In the VGS menu, the labels for “Turrets” and “Sensors” were swapped under the upgrade commands.</ListItem>
<ListItem>Fixed an issue where the detection radius of a Base Radar Sensor was not increasing as it upgrades.</ListItem>
<ListItem>Fixed not being able to log in after being disconnected from the server.</ListItem>
<ListItem>Fixed a problem with deployable and pack ammo not showing correctly on the HUD.</ListItem>
<ListItem>Variety of map cleanups.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.1016.3 (Stonehenge Update)</Title>

2012/6/22

<Title order={4}> Tribes: Ascend Dev Update #6 - Stonehenge</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/yRa60VGZeDU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Added support for “lock to player view” while spectating players. This allows you to see what the spectated player target sees. Press ‘L’ by default to lock the view to the player’s viewpoint. Mousewheel in for a first-person perspective.</ListItem>
<ListItem>A new TDM map has been added to the list of maps in the Quick Play rotation. (Miasma)</ListItem>
<ListItem>A new CTF map has been added to the list of maps available to play on Custom Servers. Stonehenge is a remap of a classic Tribes map. The map is currently in a “beta” state and will be added to the Quick Play rotation after it goes through testing on Custom Servers.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>The Pathfinder’s Light Assault Rifle will now fire bursts from just holding down the fire button, rather than having to repress the fire button for each burst.</ListItem>
<ListItem>Increased Rage Perk activation radius by 50%.</ListItem>
<ListItem>Decreased effect radius of Raider’s Whiteout grenade by roughly 8%.</ListItem>
<ListItem>Decreased damage on Shrike Rockets by 22%.</ListItem>
<ListItem>Increased Shrike Rocket damage to armored targets (ex. base turrets, beowulfs) by 30%.</ListItem>
<ListItem>Decreased damage on Technician’s Rockwind SMG by roughly 8%</ListItem>
<ListItem>Slightly increased the distance from the reticule required for the Spotted command to work.</ListItem>
<ListItem>Increased the distance Raider’s EMP grenades can be thrown to match most other grenades.</ListItem>
<ListItem>Decreased explosion radius on Pathfinder’s Compact Nitrons by 13%.</ListItem>
<ListItem>The Phase Rifle’s downscope reticule has been tweaked and crosshairs added.</ListItem>
<ListItem>Raindance: A new route has been added into the generator room.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>With the help of community feedback, we have reworked some of the mechanics of the emergent gameplay of “rock-bouncing.” The mechanic is more lenient than the last major patch:</ListItem>

  - Bouncing off a rock at an extreme angle is possible again, but the player will lose some of their speed.
  - The “grace angle” for a bounce that loses no speed has been widened
  - We will continue to adjust this feature as needed.

<ListItem>FIxed an issue where some Accolades were not being awarded with some of the new variant weapons.</ListItem>
<ListItem>Fixed an issue where the Determination Perk was not applying its health boost correctly.</ListItem>
<ListItem>Fixed a situation where XP was not being given if the player had left the match early.</ListItem>
<ListItem>Fixed an issue where a player could zoom and fire with weapons that don’t allow zooming while firing by holding down zoom through a reload sequence.</ListItem>
<ListItem>Fixed bug where the Raider’s NJ5 Reload and Retrieve sounds were not playing.</ListItem>
<ListItem>Fixed bug where the Infiltrator’s Remote Arx Buster Reload and Retrieve sounds were not playing.</ListItem>
<ListItem>Tartarus High intensity music added.</ListItem>
<ListItem>Fixed an issue where the Rage Perk would sometimes not apply when it should have.</ListItem>
<ListItem>Fixed an issue where Technician’s Long Range Repair tool was repairing vehicles too quickly.</ListItem>
<ListItem>Fixed an issue where rapid projectile fire wasn’t replicating to a spectator viewing the player who was firing.</ListItem>
<ListItem>Fixed an issue on Deal of the Day that was incorrectly showing an XP tag.</ListItem>
<ListItem>Fixed an issue with the Twitch streams that was causing not all of the active players to be shown.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.1004.1 (Accelerate Update)</Title>

2012/6/12

<Title order={4}> Tribes: Ascend Dev Update #5 - Accelerate</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/mfsmv8qizzE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>The system for upgrading weapons has been modified. Players will now automatically receive weapon upgrades as they play a particular weapon, without having to spend XP on the upgrade (allowing you to save your XP for other items). A progress bar on the weapon’s menu page will provide information as to when the next automatic upgrade occurs. If you are impatient and have excess XP, an option is still provided to immediately master an item using XP. Note that previously purchased upgrades are still owned.</ListItem>
<ListItem>27 new weapons have been added to the game, 3 for each class (details below).</ListItem>
<ListItem>Two new Capture & Hold maps have been added (Tartarus and Sulfer Cove).</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>27 New Weapon Variants have been added across all classes. Weapon Variants have new skins and slight statistical trade offs for the weapon they are a variant of. One weapon variant has been added for each free Primary, Secondary, and Belt item that comes with a class. Weapon variants are all unlocked between 4800xp – 18000xp.</ListItem>
<ListItem>Exception: The Titan Launcher (a variant of the Saber Launcher) is a good bit more than a statistical change.</ListItem>
<ListItem>NEW SLOT 2 PERK: The perk Lightweight has been added. Lightweight reduces your mass by 30%, creating stronger disk jumps, but more than triples the delay before health regeneration takes effect. This perk is intended for advanced chasers.</ListItem>
<ListItem>Automatics, SMGs, and Pistols:</ListItem>

  - Reduced reload time reduction upgrade from 30% to 15% on:

    - Soldier’s Assault Rifle
    - Pathfinder’s Light Assault Rifle
    - Technician’s TCN4
    - Infiltrator’s Rhino
    - Raider’s NJ4 SMG
    - Raider’s NJ5 SMG
    - Sentinel’s Falcon Auto-Pistol

  - Increased damage fall off by 5% and brought closer the range at which falloff starts on:

    - Infiltrator’s Rhino SMG
    - Technician’s TCN4 SMG
    - Raider’s NJ4 SMG
    - Raider’s NJ5 SMG

  - Increased damage fall off on Sentinel’s Falcon Auto-Pistol by 5%.
  - Reduced clip size by 2 on Sentinel’s Falcon Auto-Pistol. Adjusted starting ammo pool.
  - Reduced clip size by 3 on Pathfinder’s Light Assault Rifle. Adjusted starting ammo pool.
  - Reduced clip size by 4 on Soldier’s Assault Rifle. Adjusted starting ammo pool.
  - Reduced clip size by 6 on Infiltrator’s Rhino SMG. Adjusted starting ammo pool.
  - Reduced clip size by 8 on Raider’s NJ4 SMG. Adjusted starting ammo.
  - Reduced clip size by 6 on Raider’s NJ5 SMG. Adjusted starting ammo.
  - Reduced damage by roughly 6% on Juggernaut’s X1 LMG.
  - Reduced damage by roughly 7% on Infiltrator’s Rhino SMG.
  - Reduced damage by roughly 6% on Raider’s NJ4 SMG.
  - Reduced damage by roughly 7% on Sentinel’s Falcon Auto-Pistol.

<ListItem>Decreased effectiveness of Raider’s Shield Pack. More energy is required to absorb each point of damage taken.</ListItem>
<ListItem>Decreased detonation time by 26% and increased radius by 3% on Brute’s Gladiator.</ListItem>
<ListItem>Increased falloff by 20% on Sentinel’s BXT1 Rifle (a nerf).</ListItem>
<ListItem>If you die as the Sentinel class, you will now incur a 5s longer respawn time, regardless of what you are respawning as. This is a fix we are still actively working on, and is intended to be improved upon over time.</ListItem>
<ListItem>Reduced the number of credits awarded for Generator Defense to 200.</ListItem>
<ListItem>Increased credit reward for killing Shrikes to 700.</ListItem>
<ListItem>Increased reward for emergency flag grabs to 500.</ListItem>
<ListItem>Increased reward for flag defense to 300.</ListItem>
<ListItem>Reduced damage on Raider’s EMP grenade by roughly 45%. Increased energy drain by roughly 113% (more than double).</ListItem>
<ListItem>Mass reduction while enraged on the Rage Perk has been reduced from 35% to 10%. Heath granted at the start of Rage increased from 25% to 50%. Note that Rage, a slot 1 perk, can stack with the new Lightweight perk.</ListItem>
<ListItem>Fixed an issue that was allowing players to flat impact walls at high speed, and instantly move 180 degrees in the opposite direction with no speed loss or damage taken. This allowed for some game breaking front-to-front routes, and created a number of other gameplay related issues.</ListItem>

  - This fix will have a heavy effect on rock-bouncing, a skill and strategy emerging from competitive games. We built in some tolerances to this fix that allow free bouncing at certain angles, and bleed less speed depending on the angle of impact. We will continue to adjust as needed. Rock bouncing is a feature we love, but the bug needed to be fixed for other extreme cases that were not to the benefit of the game.

<ListItem>Reduced inactive reload time from 5 to 3 seconds. Inactive reload time is how long it takes for a weapon to reload automatically when not in hand.</ListItem>
<ListItem>Slightly increased the default pickup radius for all flags.</ListItem>
<ListItem>Decreased by 20% the pickup radius bonus provided by the Reach Perk.</ListItem>
<ListItem>Reduced the grace area for the spotting command. You now have to aim closer to the intended target to trigger spot.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>The starting points in Team Deathmatch has been raised from 100 to 125.</ListItem>
<ListItem>Fixed an issue in which Custom Servers were not sorting correctly in some cases..</ListItem>
<ListItem>/speclist (run from chat window) will list all spectators in a match (can be run by anyone).</ListItem>
<ListItem>Music is auto-disabled when the in-game browser is open, and reenabled at the previous volume when it closes.</ListItem>
<ListItem>Variety of map cleanups and bug fixes.</ListItem>
<ListItem>Fixed an issue where the Rage perk overlay effect would not play if the player began regenerating health.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.981.0</Title>

2012/5/29

The patch fixes an exploit.

<Title order={3}> Tribes: Ascend Version 1.0.980.1 (Staying Alive Update)</Title>

2012/5/22

<Title order={4}> Tribes: Ascend Dev Update #4 - Staying Alive</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vJXIzoIZ6UY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Three new weapons have been added to the Brute class. Watch the Staying Alive Update video for additional information.</ListItem>
<ListItem>A “Watch Now” option has been added to the main menu. From this menu, you can view Featured Live Streams of Tribes from TwitchTV, as well as watch Featured YouTube Videos from Hi-Rez and the Community.</ListItem>
<ListItem>Players that have an active booster will be awarded 1,200 XP daily (at approximately 10:00 GMT). This is on top of your booster’s regular rewards.</ListItem>

NOTE: Upon installation of this patch, a small pre-requisite program will be run by the Tribes Launcher. This is an update to the game’s embedded browser in order to enable the “Watch Now” functionality.

<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Added 3 new weapons for the Brute class:</ListItem>

  - The Gladiator fires a charged round that sticks to walls and releases multiple shockwaves. Detonates instantly in a focused blast if it hits an enemy.
  - The Plasma Cannon is the big brother to the Plasma Gun, firing balls of energy that explode on contact.
  - The Survival Pack increases maximum energy pool by 15, and can be modified for extra health and run speed, and energy regeneration.

<ListItem>The Rage Perk now grants 35% mass reduction against knockback while the player is enraged. (More powerful disk jumping).</ListItem>
<ListItem>Increased the distance from the flag the Rage Perk will activate by 33%.</ListItem>
<ListItem>Added an invulnerability timer to vehicle spawns, 2.25s from the time the vehicle spawns in.</ListItem>
<ListItem>Reduced collision size on Raider’s Plasma Gun projectile by roughly 12%.</ListItem>
<ListItem>Reduced damage on Infiltrator’s Jackal by roughly 4%.</ListItem>
<ListItem>Increased damage on Soldier’s Proximity Grenade by roughly 3%.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Fixed an issue in which some accolades were not showing up on the Profile screen.</ListItem>
<ListItem>Fixed an issue in which a deploying mine could be detonated obsolete by their owner.</ListItem>
<ListItem>Fixed an issue in which players could lose weapons when placing a deployable in certain high-lag situations.</ListItem>
<ListItem>Fixed an issue in which players in a passenger seat could be teleported into a vehicle they spawned, breaking several gameplay mechanics.</ListItem>
<ListItem>Fixed a bug in Team Deathmatch in which you could spawn on a “third” team.</ListItem>
<ListItem>Fixed an issue where players with the Pilot perk equipped could change teams instantly while they were in a vehicle.</ListItem>
<ListItem>Fixed an issue in which the game console could open while you were in the in-game web-browser.</ListItem>
<ListItem>Fixed an issue where swapping the Saber Launcher to a Repair Tool was still trying to target other players.</ListItem>
<ListItem>Players can only suicide once every five seconds.</ListItem>
<ListItem>Fixed an issue where deploying mines and then walking over them was causing them to explode.</ListItem>
<ListItem>Fixed an issue where the flag could sometimes “hop” as it came to a stop when thrown on a hill.</ListItem>
<ListItem>Fixed an issue where sticky projectiles could stick and explode targets differently between server and client.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.961.0 (Tartarus Update)</Title>

2012/5/8

<Title order={4}> Tribes: Ascend Dev Update #3 - Tartarus</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8Wi1BSBNxAg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>A new CTF map has been added, Tartarus.</ListItem>
<ListItem>A new Arena map has been added, Hinterlands.</ListItem>
<ListItem>Users may now configure up to four pre-established loadouts per class. These can be used to more quickly switch between favored configurations for each class. Loadout slots are purchasable using XP or Gold.</ListItem>
<ListItem>Users may now QUICK SWITCH between classes and loadouts while in a match using the “NUMPAD ENTER” key (default). This is an alternate way to change classes/loadouts versus using the Class Select menu (&apos;I&apos; Screen) that does not require you to open the game menu and is much faster.</ListItem>
<ListItem>Users will now be presented with a customized “DEAL OF THE DAY.” This is a deal tailored to the individual and presents special pricing on an item that the user does not already own. The timer for the deal of the day resets at the same time as the timer for the First Win of the Day.</ListItem>
<ListItem>The gold packages have been changed. The $30 and $50 packages now give significantly more bonus gold than previous, but do not include an XP booster. Users continue to earn permanent VIP status (which increases XP gain by 50% after their first real-money purchase).</ListItem>
<ListItem>IMPORTANT USABILITY NOTE: With this release, you always close the console window using the ESCAPE key. You can no longer close the console window using the same key that launches the console (default “tilde”). This is necessary to solve issues when people rebind that key, as well as on some countries’ keyboard layouts.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Shrike price reduced on public servers to 4000.</ListItem>
<ListItem>Beowulf price reduced on public servers to 2500.</ListItem>
<ListItem>Gravcycle price reduced on public servers to 500.</ListItem>
<ListItem>Reduced the amount of knockback the flag receives from explosions in air (reducing punting).</ListItem>
<ListItem>New Accolades have been added:</ListItem>

  - Investor: Earned every 2 minutes that a Base Radar or Generator that you upgraded remains online.
  - Turret Support: Earned if a Base Turret you upgraded gets a kill.
  - Hot Air: Earned for getting a mid-air kill with the Plasma Gun. (Replaces Air-Mail).

<ListItem>An exit speed cap of 200kph has been added to the Shrike.</ListItem>
<ListItem>Fixed an issue in which the Pathfinder’s Thrust Pack could sometimes not correctly thrust the player.</ListItem>
<ListItem>Fixed an issue in which the Pathfinder’s Light Assault Rifle was not always firing three rounds.</ListItem>

Custom Server Notes

<ListItem>XP is now rewarded on password protected servers so long as at least 8 people participate in a match.</ListItem>
<ListItem>Server owners can now choose between multiple spawn types. This includes Normal spawning, Naked Pathfinder, and Core spawning (Pathfinder, Soldier, and Juggernaut with unlocks).</ListItem>
<ListItem>Fixed a bug in which configuration options would not be saved properly in some cases. This audio/video settings, custom servers, etc.</ListItem>
<ListItem>Fixed a bug in which servers would go offline and require a manual restart after the overall game servers were restarted.</ListItem>
<ListItem>Variety of other minor cleanups and fixes.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Fixed an issue where the jet-only option for a keybind was jump jetting instead.</ListItem>
<ListItem>Fixed an issue where the whiteout grenade could cause the permanent loss of IFF’s in certain situations.</ListItem>
<ListItem>Deaths from hitting a player equipped with the Super Heavy perk will now play a splat sound.</ListItem>
<ListItem>Fixed an issue where projectile explosion sounds and effects wouldn’t play in certain situations in close-quarter combat.</ListItem>
<ListItem>Fixed an issue where inventory and vehicle stations weren’t properly updated when the generator went online or offline.</ListItem>
<ListItem>Fixed an issue where meleeing while zoomed could cause the zoomed-in reticule to still be active after you released the zoom button.</ListItem>
<ListItem>Fixed an issue where throwing a grenade while spawning a vehicle could leave the player without weapons.</ListItem>
<ListItem>Fixed an issue where the firing sound would not properly stop on constant-fire weapons after a reload.</ListItem>
<ListItem>Fixed an issue where de-cloaking with a call-in active would display the wrong active call-in information.</ListItem>
<ListItem>Fixed an issue where reloading a weapon while zoomed would not properly resume zooming when the reload had finished.</ListItem>
<ListItem>Vehicle stations have been added to Outskirts Capture and Hold.</ListItem>
<ListItem>Fixed an issue where vehicle station markers were not displaying in Capture and Hold.</ListItem>
<ListItem>Fixed an issue where player input wasn’t being properly reset at the end of a round in Arena.</ListItem>
<ListItem>Fixed a client crash when placing deployables (i.e. Doombringer’s Force Field, Technician’s Light Turret, etc) in certain areas when roaming.</ListItem>
<ListItem>Fixed an issue where players weren’t able to place a deployable on certain areas of the flag stand of Katabatic.</ListItem>
<ListItem>Fixed various UI presentation bugs.</ListItem>
<ListItem>Performance optimizations done on Arx Novena aqueducts.</ListItem>
<ListItem>Fixed an issue with the voting keybinds, they have now been restored to their previous values (F5 for no, F6 for yes).</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.942.1</Title>

2012/4/27

<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Increased damage on Brute’s Heavy Spinfusor by roughly 7%.</ListItem>
<ListItem>Modified the Pathfinder&apos;s Light Assault Rifle so that it has an increased projectile speed and fall-off begins at a greater distance (buffed). Projectile speed now matches that of the Soldier’s Assault Rifle.</ListItem>
<ListItem>Reduced the collision size of Raider’s Plasma Gun projectile by roughly 40%. The weapon’s damage and rate of fire remain the same.</ListItem>

Bug Fixes

<ListItem>Fixed an issue that impacted the ability of the Shrike to fly vertically.</ListItem>
<ListItem>Fixed an issue in which the First Win of the Day bonus was not being awarded in some scenarios.</ListItem>
<ListItem>Fixed an issue that would prevent a player from deploying deployables.</ListItem>
<ListItem>Recently earned badges are now shown correctly on the profile page.</ListItem>
<ListItem>Several bug fixes and cleanups on the menu UI.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.941.0 (Raid & Pillage Update)</Title>

2012/4/24

<Title order={4}> Tribes: Ascend Dev Update #2 - Raid And Pillage Update</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/nmCjcwESC70" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Three new weapons and two new skins have been added to the Raider class.</ListItem>
<ListItem>Players may now setup Custom Servers from inside the game menu system. Custom servers are private “rooms” for you to rent and play Tribes: Ascend in. Custom servers can be password protected. The sever administrator can choose from scores of custom rulesets to help tailor the play experience as desired.</ListItem>
<ListItem>A new Capture and Hold map has been added to the Quick Play rotation (Night Drydock).</ListItem>
<ListItem>Several improvements to player movement in networked games have been implemented. This eliminates some of the “jerkiness” while moving within the game, especially when playing at high ping.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Added 3 new weapons for the Raider class:</ListItem>

  - Plasma Gun: A flexible weapon, the Plasma Gun fires massive spheres of plasma that explode on contact, with excellent rate of fire.
  - NJ5-B SMG: The NJ5-B has a slower rate of fire than its predecessor, but deals more damage per hit. It can also fire while in scope.
  - Cluster Grenade: The cluster grenade breaks apart into several smaller bomblets on detonation, each exploding for additional damage.

<ListItem>Add two new skins to the Raider class (Griever and Mercenary).</ListItem>
<ListItem>Increased damage on the Infiltrator’s Prism Mines by roughly 14%.</ListItem>
<ListItem>Increased damage on the Brute’s Light Sticky Grenade by 10%.</ListItem>
<ListItem>Increased damage on the Doombringer’s Heavy Bolt Launcher by roughly 7%.</ListItem>
<ListItem>Increased Technician’s Sparrow Pistol clip size by 2, adjusted starting ammo to 144.</ListItem>
<ListItem>Call-ins will no longer fully reset when being moved too quickly or hitting an invalid target location. Instead they will lose build-up time.</ListItem>

Custom Server Notes

<ListItem>Read the Custom Server FAQ.</ListItem>
<ListItem>All players may create their own custom servers under PLAY NOW | CUSTOM SERVERS | MANAGE SERVERS on the main menu.</ListItem>
<ListItem>In order to activate a custom server, you must ADD RENTAL TIME using gold. You can add additional time in 10-Day, 30-Day and 90-Day buckets.</ListItem>
<ListItem>All Custom Servers are assigned to a specific server region. You may change the assigned region at any time through the Custom Server configuration menus. The Custom Servers use the same pooled/virtual server infrastructure that is used for Quick Matches. So when a match is spun up on your Custom Server, it is done so from the shared pool of server resources available in the specific server region you chose upon server setup.</ListItem>
<ListItem>As the owner of a custom server, you may always administer your server. You may also set an ADMIN PASSWORD that other users can use to gain access to some (but not all) administrative features of your custom server.</ListItem>
<ListItem>XP and Badge Rewards</ListItem>

  - Players earn their normal Base XP on non-password protected servers.
  - Bonus XP is only awarded on Custom Servers when at least 6 players have been on the server at some point during a match.
  - No XP is awarded on custom servers that require a password.
  - Badges, Statistics and First Win of the Day are disabled on Custom Servers (so you do not earn progress toward badges while playing on Custom Servers).

<Title order={4}> Additional Items</Title>
<List>
<ListItem>Match-making and backfilling logic has been improved to make it easier to get into matches with your friends (additional improvements planned for future releases).</ListItem>
<ListItem>An issue where weapons could dry-fire if fired immediately after switching has been fixed.</ListItem>
<ListItem>Perks are visually represented as implant chips within the main menu.</ListItem>
<ListItem>Fixed an issue where players could sometimes appear to be jetpacking after a death.</ListItem>
<ListItem>Fixed an issue where the Infiltrator’s Jackal would not perform an inactive reload if all of the rounds had been detonated and if the player switched weapons before the reload completed.</ListItem>
<ListItem>Fixed an issue where the first-person weapon and body and mesh could jolt and pop while jetpacking.</ListItem>
<ListItem>Fixed issues with the Determination perk not working properly.</ListItem>
<ListItem>Fixed an issue where mines were being activated by friendlies in custom servers with friendly fire enabled.</ListItem>
<ListItem>Fixed an issue where the Brute&apos;s Nova Colt and Sentinel&apos;s Nova Blaster could fire an extra shot if the clip was emptied rapidly.</ListItem>
<ListItem>Reworked a bit of the spawn point rotation logic by fixing an issue where players would not respawn at certain spawn points.</ListItem>
<ListItem>Fixed an issue where the announcer voices would sometimes abruptly cut out.</ListItem>
<ListItem>Reworked spawn locations for Capture and Hold maps so that base-owned spawn locations are slightly further away from the captured base.</ListItem>
<ListItem>The flagstand on CTF Temple Ruins has been moved back to its original position.</ListItem>
<ListItem>Vehicles will now have proper marker coloring if a friend is in the vehicle.</ListItem>
<ListItem>Fixed an issue where throwing a grenade and then meleeing (or vice versa) would cause you to throw an extra grenade or melee again.</ListItem>
<ListItem>Fixed an issue where mines were able to be pushed around by vehicles, this was visual-only and had no affect on gameplay.</ListItem>
<ListItem>Fixed an issue where player deployables weren’t able to be properly placed in certain situations, resulting in ammo consumption when it wasn’t deployed.</ListItem>
<ListItem>Resolved an issue on Sunstar where players could get outside the map boundary.</ListItem>
</List>
<Title order={3}> Tribes: Ascend Version 1.0.905.0</Title>

2012/4/12

<Title order={4}> Tribes: Ascend Dev Diary - Raindance / Servers</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/9MUht_nYc2Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>With this patch, Tribes Ascend has dropped the &apos;Open Beta&apos; moniker. The game will continue to evolve and improve with regular updates after this patch, but we now have moved to Version 1.0! Progress made by players during the beta period is preserved.</ListItem>
<ListItem>Players who reach at least Level 10 in Beta will earn the &apos;Veteran&apos; Badge with an XP reward upon their first login following the official game launch time (Thursday, April 12, at 2:00 PM US Eastern).</ListItem>
<ListItem>A new CTF map, Raindance, has been added to the Quick Play rotation.</ListItem>
<ListItem>A new gametype, Capture and Hold, has been added with three initial maps (Katabatic, Raindance and Outskirts).</ListItem>
<ListItem>Significant additional functionality has been added under a &apos;SOCIAL&apos; menu. Among the changes:</ListItem>

  - People that have friended you now appear on your Social menu as &apos;Followers&apos;. Followers may be friended reciprocally, or blocked.
  - You may now send a message to online Friends and Followers. When typing in the chat console, use the format &apos;@playername message&apos; to send a message to a specific player. Block a player to avoid receiving messages from them. You can universally block the hud notifications for new messages using the NOTIFICATIONS section under SETTINGS.
  - A variety of other cleanups and feature enhancements to improve the friend functionality have been implemented.

<ListItem>Players can now test unowned weapons and classes in the Target Practice map under Training. Classes and Weapons will still appear locked on your menu, but if you select them, you can try them.</ListItem>
<ListItem>All gametypes have a warm-up timer lasting 20 seconds after a second player has joined the match.</ListItem>
<ListItem>The HUD now shows the status of player deployables.</ListItem>
<ListItem>An early Sneak Preview of upcoming Custom Server functionality has been included in this release. Additional functionality is expected in future releases. During the Sneak Preview:</ListItem>

  - Hi-Rez will operate a limited number of Custom Servers that players may join that take advantage of customized game rules. You may browse the list of available Custom Servers from the PLAY menu. Note that this server browser includes only Custom Servers, and not regular public matches accessed through the Play menu. Some servers reserved for competition play or other purposes may only be accessed using a password. Additional servers will be added regularly during the Sneak Preview period to test various Custom Server functionality.
  - Players will not yet be able to rent and configure their own servers. This functionality will be coming in an upcoming release.

Capture and Hold Gametype

<ListItem>Capture and hold the various Control Points. Each Control Point is labeled A, B, C, etc.</ListItem>
<ListItem>A Control Point is captured by touching a Control Point&apos;s switch. A successful capture will result in your Tribe&apos;s icon hologram switching and the switch&apos;s HUD marker will blink blue as it becomes &apos;held.&apos;</ListItem>
<ListItem>Once a Control Point is been held for five seconds, the owning team gains a score. Any Control Point defenses, such as Inventory Stations, Repair Stations, Base Turrets, and Radar Sensors also become owned by your team when a point is considered held.</ListItem>
<ListItem>Damaged defenses will return up to half-health when a point is successfully held by a team.</ListItem>
<ListItem>Held Control Points generate a score every 5 seconds.</ListItem>
<ListItem>The team that reaches the goal score wins the match.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Increased Doombringer&apos;s Heavy Bolt Launcher Projectile speed by roughly 3%.</ListItem>
<ListItem>Added a 6% base increase to energy regeneration for equipping Pathfinder or Sentinel Energy Regeneration Packs. Reduced each upgrade on the packs to +4%. Still the same maximum bonus fully unlocked.</ListItem>
<ListItem>Thrown flags now only bounce once, then slide on second contact with the ground. This helps players predict where a dropped flag will go and allow for easier pickups and team passes.</ListItem>
<ListItem>Increased the distance a player throws a flag.</ListItem>
<ListItem>Fixed an issue in which projectiles would not do damage to game objectives when the firing player had died.</ListItem>
<ListItem>Fixed an issue where friendly players could damage their own objectives (when not in a custom server with friendly fire on).</ListItem>
<ListItem>Fixed an issue where Light Turrets could deal four times the normal amount of damage to Shrikes.</ListItem>

New VGS Commands

<ListItem>VGS commands are now filtered depending on the game mode.</ListItem>
<ListItem>[VFQ]: &apos;I&apos;ll retrieve our flag!&apos;</ListItem>
<ListItem>[VUG] (CTF only): &apos;Upgrade our generator!&apos;</ListItem>
<ListItem>[VUS] (CTF only): &apos;Upgrade our sensors!&apos;</ListItem>
<ListItem>[VUT] (CTF only): &apos;Upgrade our base turrets!&apos;</ListItem>
<ListItem>[VSUG] (CTF only): &apos;I&apos;ll upgrade our generator.&apos;</ListItem>
<ListItem>[VSUS] (CTF only): &apos;I&apos;ll upgrade our sensors.&apos;</ListItem>
<ListItem>[VSUT] (CTF only): &apos;I&apos;ll upgrade our base turrets.&apos;</ListItem>
<ListItem>[VA1] (C&H only): &apos;Attack point A!&apos;</ListItem>
<ListItem>[VA2] (C&H only): &apos;Attack point B!&apos;</ListItem>
<ListItem>[VA3] (C&H only): &apos;Attack point C!&apos;</ListItem>
<ListItem>[VA4] (C&H only): &apos;Attack point D!&apos;</ListItem>
<ListItem>[VA5] (C&H only): &apos;Attack point E!&apos;</ListItem>
<ListItem>[VD1] (C&H only): &apos;Defend point A!&apos;</ListItem>
<ListItem>[VD2] (C&H only): &apos;Defend point B!&apos;</ListItem>
<ListItem>[VD3] (C&H only): &apos;Defend point C!&apos;</ListItem>
<ListItem>[VD4] (C&H only): &apos;Defend point D!&apos;</ListItem>
<ListItem>[VD5] (C&H only): &apos;Defend point E!&apos;</ListItem>
<ListItem>[VSA1] (C&H only): &apos;I&apos;ll attack point A.&apos;</ListItem>
<ListItem>[VSA2] (C&H only): &apos;I&apos;ll attack point B.&apos;</ListItem>
<ListItem>[VSA3] (C&H only): &apos;I&apos;ll attack point C.&apos;</ListItem>
<ListItem>[VSA4] (C&H only): &apos;I&apos;ll attack point D.&apos;</ListItem>
<ListItem>[VSA5] (C&H only): &apos;I&apos;ll attack point E.&apos;</ListItem>
<ListItem>[VSD1] (C&H only): &apos;I&apos;ll defend point A.&apos;</ListItem>
<ListItem>[VSD2] (C&H only): &apos;I&apos;ll defend point B.&apos;</ListItem>
<ListItem>[VSD3] (C&H only): &apos;I&apos;ll defend point C.&apos;</ListItem>
<ListItem>[VSD4] (C&H only): &apos;I&apos;ll defend point D.&apos;</ListItem>
<ListItem>[VSD5] (C&H only): &apos;I&apos;ll defend point E.&apos;</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Players who are referred by another player through the friend referral system will now earn the &apos;Pay it Forward&apos; badge when they reach Level 6 (includes an XP reward).</ListItem>
<ListItem>A number of cleanups and fixes have been made to several maps.</ListItem>
<ListItem>Enemy stations no longer draw to the HUD, unless it is spawned from a Supply Drop call-in.</ListItem>
<ListItem>Fixed an issue in which the # of players playing each class would not show correctly on first spawn into a match.</ListItem>
<ListItem>Fixed an issue where the Infiltrator&apos;s Jackal was stacking the damage numbers for damaged targets directly on top of each other, making it seem like only one of the projectiles was damaging the target. Now each projectile&apos;s damage number on a target is represented.</ListItem>
<ListItem>Fixed an issue where players could interrupt a melee attack or belt throw with a weapon switch using the direct switch keys (i.e., &apos;1&apos;, &apos;2&apos;, etc.), allowing for an exploit of quick weapon switching.</ListItem>
<ListItem>Fixed an issue where if all the players from a team left an Arena match, during a round transition, the game would not autobalance, leaving the other team stuck in the round transition indefinitely.</ListItem>
<ListItem>The whiteout effect from the Raider&apos;s Whiteout Grenade no longer persists when a victim respawns.</ListItem>
<ListItem>Projectiles that can stick to surfaces no longer can stick directly to the flag.</ListItem>
<ListItem>Adjusted the position of the first person flag model (it was facing sideways in first person view).</ListItem>
<ListItem>Fixed a bug in which the game client would crash if you attempted to change your name to a 15-character name.</ListItem>
<ListItem>Shrike now has a horn!</ListItem>
<ListItem>Added announcers to Arena.</ListItem>
<ListItem>Fixed issue where announcer messages would overlap.</ListItem>
<ListItem>Damage fall-off is now applied to Supply Drops.</ListItem>
<ListItem>Fixed an issue where the smoke grenade would not properly stealth a player in certain situations.</ListItem>
<ListItem>Fixed an issue where Jackal rounds were not properly sticking to players.</ListItem>
<ListItem>Fixed an issue where placing a deployable in Training would cause you to lose weapons.</ListItem>
<ListItem>Stealthed friendlies will now have their player model rendered and pulsed for better visibility.</ListItem>
<ListItem>Fixed an issue where fast-switching weapons using the default bind of &apos;1&apos; and &apos;2&apos; would break the zoom effect.</ListItem>
<ListItem>Fixed an issue where fast-switching weapons using the default bind of &apos;1&apos; and &apos;2&apos; would cause the BXT1 to charge even without being scoped.</ListItem>
<ListItem>Fixed an issue where a Supply Drop called in on a friendly would cause them to get stuck.</ListItem>
</List>
<Title order={3}> March 30, 2012: Price Adjustments to Cloak and Dagger Skins</Title>

2012/3/30

Since going live with the Cloak and Dagger patch, we have received a lot of user feedback on the pricing for Skins. Based on that feedback, we have decided to adjust the pricing some on the Cloak & Dagger packages and skins.

Specifically:

<ListItem>The Assassin Skin has been repriced from 1200 to 975 gold</ListItem>
<ListItem>The Mercenary Skin has been repriced from 800 to 675 gold</ListItem>
<ListItem>The Mercenary Pack (which includes the Mercenary skin plus the 3 Cloak & Dagger weapons) has been repriced from 1200 to 1132 gold)</ListItem>
<ListItem>The Assassin Pack (which includes the Assassin skin plus the 3 Cloak & Dagger weapons) has been repriced from 1800 to 1282 gold)</ListItem>
<ListItem>The Premium Pack (which includes both skins plus the 3 Cloak & Dagger weapons) has been repriced from 2000 to 1620 gold)</ListItem>

We have issued gold refunds for everyone that purchased any of these skins or packages under the old pricing.
Specifically:

<ListItem>Those that purchased the Assassin Skin have been refunded 225 gold</ListItem>
<ListItem>Those that purchased the Mercenary Skin have been refunded 125 gold</ListItem>
<ListItem>Those that purchased the Mercenary Pack have been refunded 68 gold</ListItem>
<ListItem>Those that purchased the Assassin Pack have been refunded 518 gold</ListItem>
<ListItem>Those that purchased the Premium Pack have been refunded 518 gold (Note: This is greater than the 380 gold price difference between the old and new price)</ListItem>
</List>
<Title order={3}> Tribes Open Beta Version 0.1.866.0</Title>

2012/3/29

Significant Items

<ListItem>Spinfusor projectiles now travel at the same velocity, though Spinfusor weapons still vary in damage, radius, and fire rate.</ListItem>

  - Increased Juggernaut&apos;s SpinfusorD projectile velocity by roughly 5%.
  - Increased Soldier&apos;s Spinfusor projectile velocity by roughly 3%.
  - Increased Brute&apos;s Heavy Spinfusor projectile velocity by roughly 8%.

<ListItem>Brute&apos;s Light Sticky Grenade damage against Generators increased 125%, better matches the Infiltrator&apos;s Sticky Grenades.</ListItem>
<ListItem>Fixed an issue where Soldier&apos;s AP Grenade did too much damage against Shrikes (reduced by 75%).</ListItem>
<ListItem>Damage increased on Brute&apos;s Nova Colt by roughly 5%.</ListItem>
<ListItem>Time for inactive reload reduced from 6s to 5s.</ListItem>
<ListItem>Increased the distance from the flag the Rage Perk will activate by 50%.</ListItem>
<ListItem>Damaged caused by early in-air detonation of Infiltrator&apos;s Jackal rounds reduced by 50%. Knockback from in-air detonation also decreased by 50%.</ListItem>
<ListItem>Damage against armored targets with Infiltrator&apos;s Jackal rounds increased 20% (Fixed an issue where full damage was not being applied).</ListItem>
<ListItem>Fixed an issue where the sticky explosives from the Infiltrator&apos;s Jackal could not be destroyed with bullet based weapons.</ListItem>
<ListItem>A variety of backend changes preparing for the introduction of future functionality.</ListItem>
</List>
<Title order={3}> Tribes Open Beta Version 0.1.865.0 (Cloak and Dagger Update)</Title>

2012/3/27

<Title order={4}> Tribes: Ascend Dev Update #1 - Cloak & Dagger</Title>

<iframe width="560" height="315" src="https://www.youtube.com/embed/mNqaiUl27MQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Three new weapons and two new skins have been added to the Infiltrator class. Watch the Cloak & Dagger Update Video for more.</ListItem>
<ListItem>A new Arena map, Walled In, has been added to the Quick Play rotation.</ListItem>
<ListItem>Several additional HUD features have been implemented, including:</ListItem>

  - Flag status (who is carrying the flag and timer until flag reset).
  - Friend Notifications when players come online/go offline.

<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Three new weapons added for Infiltrator</ListItem>

  - Jackal: The Jackal fires up to three rounds that stick to any surface, and are remote triggered for detonation.
  - Throwing Knives: Throwing Knives deal impressive damage on a direct hit, and have a small splash damage radius.
  - Smoke Grenade: Instantly vanish without waiting the normal reveal time from taking damage or firing a weapon. In addition, remain in stealth for 2 seconds even if you take damage. Firing a weapon will still break stealth.

<ListItem>Adjusted visual style on Infiltrator&apos;s Prism Mines to be more in line with other mines and harder to detect at long range.</ListItem>
<ListItem>Fixed an issue where Shrike&apos;s were not taking damage from bullet projectiles at certain angles and locations.</ListItem>
<ListItem>Added improved proximity checking for deployables to prevent the Doombringer&apos;s force field from covering the flag when placed at certain angles and locations.</ListItem>
<ListItem>Pathfinder&apos;s Bolt Launcher projectile now detonates after 6 seconds of flight, reduced to match that of the Heavy Bolt Launcher and Spinfusor type weapons.</ListItem>
<ListItem>Direct-hit damage bonus reduced by roughly 4% on Pathfinder&apos;s Bolt launcher.</ListItem>
<ListItem>Increased knock-back from Pathfinder&apos;s Light Spinfusor by approx. 10% (now matches the Bolt Launcher).</ListItem>
<ListItem>Increased damage fall-off on Sentinel&apos;s BXT1 Sniper Rifle. Falloff range is 33% more aggressive, and the maximum falloff amount was increased 5%.</ListItem>
<ListItem>Improved the targeting of Call-In&apos;s when targeting terrain.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>If a player jump/jets while already going faster in the Z axis than the jump would set, the jump no longer resets the Z-axis velocity. This fixes an issue in which a jump/jet could slow your momentum unintentionally.</ListItem>
<ListItem>Additional work has been done to eliminate some &apos;deadstops&apos; while skiing/jetting. Please report any remaining situations in which you stop movement suddenly and unexpectedly while skiing.</ListItem>
<ListItem>The current match is now hidden from the scoreboard when players are at the Team Selection screen. A future patch will hide additional information.</ListItem>
<ListItem>A variety of cleanups have been made to several maps.</ListItem>
<ListItem>Implemented a change intended to fix a situation in which hit/damage numbers would be delayed in appearing. Please report if you still see this issue..</ListItem>
<ListItem>Fixed an issue that would cause the flag to fall through the world in some conditions.</ListItem>
<ListItem>Fixed an issue where the Brute&apos;s Nova Colt could lose texture resolution at high speeds</ListItem>
<ListItem>A variety of backend server work has been done in preparation for future functionality.</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>Damage numbers from your turret may appear over reticule where not expected.</ListItem>
</List>
<Title order={3}> Tribes Open Beta Version 0.1.848.0</Title>

2012/3/20

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Sunstar, a new Capture the Flag map,has been added to the Quick Play rotation. Note that this map is not in its final design or art state.</ListItem>
<ListItem>Temple Ruins, a Capture the Flag map, has been added back to the Quick Play rotation after significant revisions. Note that this map is not in its final design or art state.</ListItem>
<ListItem>The European server region has been split into two regions in order for users to better select the region that gives them the best performance: Europe - London and Europe - Amsterdam.</ListItem>
<ListItem>The Asia server region has been split into two regions in order for users to better select the region that gives them the best performance: Asia - Japan and Asia - Singapore.</ListItem>
<ListItem>A variety of physics changes have been made in order to fix several issues impacting the fluidity of movement. This includes the elimination of several items that would cause deadstops and hitches, as well as a bug that would allow you to ski/jet along the boundary wall. Changes were also made in order to fix a few issues that would occur when traveling up steep hills. Additional improvements are planned for future releases.</ListItem>
<ListItem>A variety of improvements to server performance have been implemented. Additional improvements are planned for future patches.</ListItem>
<ListItem>Users may now choose to turn off unwanted HUD elements using the SETTINGS menu.</ListItem>
<ListItem>Reticules and HUD icons have undergone a significant polish pass.</ListItem>
<ListItem>User settings are now stored server-side. Settings may be reset as a result of this patch, but future patches should not have to reset bindings, etc.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>The Impact Nitron grenade will force you to drop the flag if it is used for self-damage.</ListItem>
<ListItem>Increased Heavy run speed by 20%.</ListItem>
<ListItem>Increased maximum reduction of weapon switch time on the Quick Draw perk from 20% to 50%.</ListItem>
<ListItem>Modified inheritance on the Grenade Launcher (now 50%).</ListItem>
<ListItem>The cost of the Tactical strike was increased to 4000 credits from 3500.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>While in a match, the Class Select screen provides an indication of how many of your teammates are currently playing each class.</ListItem>
<ListItem>The new Purchase Vehicle menu now shows how many of each type of vehicles are currently spawned. The option to purchase a vehicle is locked when a max for that vehicle is reached in a match.</ListItem>
<ListItem>New Features are showcased when entering the menus.</ListItem>
<ListItem>Fixed an issue where throwing grenades or executing melee attacks in rapid succession could have the server and client get out of sync and animate strangely.</ListItem>
<ListItem>If a player picks up a dropped ammo pickup while their current weapon has zero ammo, the weapon automatically reloads the new ammo into the clip.</ListItem>
<ListItem>Made a variety of changes to weapon FX to help improve performance.</ListItem>
<ListItem>Fixed issues with Quick Draw perk where the client was not scaling the putdown/retrieve animations correctly and where the server was not switching fast enough (and leading to some dry fires).</ListItem>
<ListItem>A variety of UI-related bug fixes and improvements were implemented.</ListItem>
<ListItem>Fixed a bug that that would cause occassional “dry fires” of weapon.</ListItem>
<ListItem>Fixed a bug that would prevent you from adding or removing friends until you restarted the game client.</ListItem>
<ListItem>Fixed a bug in which the client would lock up under extended packet loss.</ListItem>
<ListItem>Fixed an issue in which information was not updating correctly on equipment page when scrolling perks.</ListItem>
<ListItem>Variety of cleanups and bug fixes to the badges system, including some adjustments to XP rewards from badges.</ListItem>
<ListItem>The end of match screen now highlights XP earned from badges during the match.</ListItem>
<ListItem>Fixed an issue where the Pathfinder’s Light Assault Rifle would fire repeatedly in a training map.</ListItem>
<ListItem>Fixed an issue where mine icons were disappearing.</ListItem>
<ListItem>Added new effects to the Shrike.</ListItem>
<ListItem>Fixed an issue where Supply Drops were able to be deployed on areas not intended.</ListItem>
<ListItem>Fixed an issue where melee attacks were causing double damage in certain situations.</ListItem>
<ListItem>Fixed an issue where melee sounds and effects were playing when no damage was done.</ListItem>
<ListItem>Fixed an issue where the Beowulf gunner was able to fire faster than intended.</ListItem>
<ListItem>Fixed an issue where firing and reloading a shotgun was allowing them to be fired faster than intended.</ListItem>
<ListItem>Fixed an issue where zoom was not being re-enabled when a player was zoomed and a reload occurred.</ListItem>
<ListItem>Fixed an issue where pushing someone to their death with Sonic Punch was not properly rewarding the kill.</ListItem>
<ListItem>Fixed an issue where players were able to either stand on or hop over the boundary wall in some maps.</ListItem>
<ListItem>Fixed an issue where the energy conduit in Nightabatic TDM did not extend all the way to the ground.</ListItem>
<ListItem>Fixed several collision issues in Outskirts TDM</ListItem>
<ListItem>Fixed an issue where friendly players and vehicles were taking damage from friendly turrets.</ListItem>
<ListItem>Fixed an issue where entering a vehicle while firing a weapon would continuously fire that weapon in training and roaming maps.</ListItem>
<ListItem>Fixed an issue where the fumbled flag post process effect wasn’t playing.</ListItem>
<ListItem>Fixed an issue where friends on the enemy team were having their marker drawn over exceptionally long distances.</ListItem>
<ListItem>Fixed an issue where player-owned deployables and projectiles were not being destroyed when becoming a spectator.</ListItem>
<ListItem>When in-scope with the Sniper Rifles using the Sentinel Class, the targeting reticule no longer color shifts to red when hovering over enemy players. Although, the reticule does continue to turn green when hovering over friendly players.</ListItem>
<ListItem>Fixed an issue where vehicle sounds would constantly play if you exited the Beowulf as the gunner while it was on fire.</ListItem>
<ListItem>Fixed an issue where there could be two flag carriers on the same team in Team Deathmatch and Capture the Flag.</ListItem>
<ListItem>Fixed an issue where teams could be credited for multiple flag caps or a single flag cap if the flag carrier landed on the flag (either on-stand or out in the field) in a certain way with the Reach perk active.</ListItem>
<ListItem>Fixed an issue where the call-in confirmation sound would play but the call-in wouldn’t activate.</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>Ping is not reporting on the Scoreboard correctly. A hot fix is being developed to fix.</ListItem>

Hot Fix

<ListItem>A small hot-fix will be released today that fixes Ping not showing on the scoreboard.</ListItem>
<ListItem>During the hot-fix, we will also be introducing new back-end infrastructure/code that changes a number of backend things around the ways that players go in and out of matches, join friends, etc.</ListItem>
<ListItem>If all works well, this should be functionally identical to what is in place today, but it paves the road for the future introduction of Custom Servers, improved social features, and improved match-making.</ListItem>
<ListItem>It is likely that some issues will be experienced as a result of this change, and the servers may go up and down a couple times today while we do this test. (We may rollback to the old system once any initial issues are discovered an analyzed.</ListItem>
</List>
<Title order={3}> Tribes Open Beta Version 0.1.811.0</Title>

2012/3/06

Hot Fixes in 0.1.811.0

<ListItem>Fixed a bug in which the turret rate of fire was inadvertently increased.</ListItem>
<ListItem>Fixed a bug in team joining that allowed for imbalanced team sizes in matches.</ListItem>
<ListItem>Fixed a bug that treated &apos;Kill Credit For ... &apos; kills as a negative score on the scoreboard.</ListItem>
</List>
<Title order={3}> Tribes Open Beta Version 0.1.809.0 and 0.1.811.0</Title>

2012/3/05

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Badges are now awarded as you achieve certain milestones inside of the game. Each badge has multiple ranks (Bronze, Silver, Gold, Obisidian). You earn bonus XP each time you rank up a badge. You may view available and earned badges, as well as accolades and general stats, through the PROFILE menu broken down by subsections. Note that this system is still a work in progress, and some items are not yet fully complete. In addition, some bugs and issues should be expected.</ListItem>
<ListItem>Two new perks have been added (see below for more).</ListItem>
<ListItem>A new Team Deathmatch map has been added (Outskirts).</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Mirv Launcher and Mortar Launcher now use standard 50% projectile inheritance.</ListItem>
<ListItem>Two new perks have been added - Rage and Sonic Punch.</ListItem>

  - Rage is a defensive Perk that, fully unlocked, increases energy regeneration for a limited time and provides a 25% heal if nearby your flag when an enemy grabs it.
  - Sonic Punch, fully unlocked, creates a shock wave with each melee swing that pushes back nearby players, and can force a flag fumble.

<Title order={4}> Additional Items</Title>
<List>
<ListItem>Fixed many scenarios where weapons could “dry fire.” This fix improves instances where the weapon would appear to fire but no projectile would spawn, improves instances where the weapon could falsely reload, and improves scenarios where a deployable would not properly deploy, even though it appears valid on the player’s client.</ListItem>
<ListItem>Arena Gamemode</ListItem>

  - Arena now unlocks as a playable mode at Level 8.
  - Fixed issue where players would spawn as the Soldier class upon first joining an Arena Deathmatch.
  - Credit count resets after each new round in Arena Deathmatch (the total number of reported credits earned for the lifetime of the match is retained, however).
  - To better indicate a player is in a warm-up round, the game goes grayscale during this period.
  - The overhead caret for the last man standing on a team is now always visible to other players.
  - Players who are benched during the finale of a round will no longer AFK timeout if the finale lasts more than three minutes.
  - When a player runs out of respawns, the text next to the death counter now says, “Out of Respawns” and when the timer expires it says, “Fire to Spectate”

<ListItem>The distance from the reticule to see the health and nameplates of other players and objectives is more lenient, especially when zoomed.</ListItem>
<ListItem>CTF Temple Ruins has been removed from the public queue pending technical and design improvements.</ListItem>
<ListItem>CTF Bella Omega has been removed from the public queue pending design improvements.</ListItem>
<ListItem>Fixed many bugs on the Player and Team Summary Scenes</ListItem>
<ListItem>The “Acquired” pop-up has been improved.</ListItem>
<ListItem>The HUD animations for accolades and badges has been improved.</ListItem>
<ListItem>Fixed a bug where a player could ski through an inventory station and be propelled out.</ListItem>
<ListItem>Fixed a bug where the player could get in a situation where they would not properly attach to a vehicle station.</ListItem>
<ListItem>Fixed the “missing font” log spam.</ListItem>
<ListItem>Fixed a bug where you could click the “Boost” button from the Player Summary even when that button is invisible.</ListItem>
<ListItem>Fixed issues where players were not being AFK kicked in situations where they were the only one in the match and at the initial team-select screen.</ListItem>
<ListItem>The in-match class quick select screen no longer overrides the post process effects for the map.</ListItem>
<ListItem>Added proper animations to the Heavy when driving or riding on a Grav Cycle.</ListItem>
<ListItem>Fixed a bug where ammo pickups were floating in the air or continuously bouncing.</ListItem>
<ListItem>Fixed an issue where bForceStaticTerrain stopped working in the previous patch.</ListItem>
<ListItem>Fixed an issue where users were losing their weapons when spawning a vehicle and then immediately using an inventory station.</ListItem>
<ListItem>Fixed an issue where players were able to call-in a Supply Drop on their own head.</ListItem>
<ListItem>Fixed an issue where turret holograms were not properly disappearing after using an inventory station.</ListItem>
<ListItem>Fixed an issue where sticky projectiles on the generator were not damaging nearby players.</ListItem>
<ListItem>Fixed an issue where users were able to stay perpetually hidden from turrets by rapidly enabling and disabling stealth.</ListItem>
<ListItem>Fixed an issue where the Soldier’s Utility Pack was not functioning for many players.</ListItem>
<ListItem>Added improved collision to base turrets and base radar sensors.</ListItem>
<ListItem>Fixed an issue where motion sensors destroyed by enemies were not triggering.</ListItem>
<ListItem>Lava on Inferno TDM will now cause damage when touched, but currently will not show players on fire after contact.</ListItem>
<ListItem>Fixed an issue where players were able to get over the boundary wall on Inferno. Also fixed collision issues on the ceiling in the central tunnel.</ListItem>
<ListItem>Lava Arena has been refitted with a custom art set.</ListItem>
<ListItem>VGS and Team Announcer volume settings are now properly working.</ListItem>
<ListItem>Base Turrets and Base Radar Sensors now have new collision, this will make them easier to hit and repair.</ListItem>
<ListItem>Fixed an issue where 1P overlay effects on the weapon and arms would not be playing even when the effect was active, i.e. health regeneration, stealth, jammer, etc.</ListItem>
<ListItem>Fixed an issue where Shrikes were taking double or more damage from light turrets.</ListItem>
<ListItem>Fixed an issue where certain sounds were not stopping when the player died.</ListItem>
<ListItem>Fixed an issue where the Infiltrator’s Stealth Spinfusor was not doing extra damage to armored.</ListItem>
<ListItem>Rank names have been adjusted to match new icons.</ListItem>

Hot Fixes in 0.1.811.0

<ListItem>Fixed a bug in which the turret rate of fire was inadvertently increased.</ListItem>
<ListItem>Fixed a bug in team joining that allowed for imbalanced team sizes in matches.</ListItem>
<ListItem>Fixed a bug that treated &apos;Kill Credit For ... &apos; kills as a negative score on the scoreboard.</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>Lava pain volumes in Inferno TDM will not show any fire particle effects.</ListItem>
<ListItem>Roaming a map can occasionally lead to a crash. The fix is under investigation.</ListItem>
<ListItem>The new gray-scale effect that shows up during a warm-up round in Arena Deathmatch does not affect users with low video card settings.</ListItem>
<ListItem>Pathfinder’s Light Assault Rifle allows for constant repeated bursts of fire in training areas if the player holds down the fire button. This issue will be fixed in a subsequent patch.</ListItem>
</List>
<Title order={3}> Tribes Open Beta Hotfix 0.1.789.3</Title>

2012/2/28

Fixed a bug that was causing many players to lock up during launch.

<Title order={3}> Tribes Open Beta Version 0.1.789.1</Title>

2012/2/22

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>The game no longer requires a key in order to play. Anyone can join the beta program by simply creating an account on http://www.tribesascend.com and then downloading the game. Players are reminded that their progression in the game will be kept once the beta ends and the game officially launches so time spent playing now will be rewarded at launch.</ListItem>
<ListItem>A new gametype, Arena, has been added with two initial maps, Air Arena and Lava Arena. The Arena gametype features five-on-five matches fought on small hazardous maps. The team that wins two rounds wins the match. During the course of a round, each team has 25 respawns. After a team&apos;s respawns are depleted, players on that team each get one more life before the round ends. The team with the last man standing wins the round.</ListItem>
<ListItem>A new Capture the Flag map has been added to the quick match rotation (Temple Ruins).</ListItem>
<ListItem>A new Team Deathmatch map has been added to the quick match rotation (Inferno).</ListItem>
<ListItem>Two new unlockable items have been added on the Soldier class: Proximity Grenade and Utility Pack.</ListItem>
<ListItem>Servers are now available in Asia and Brazil. You may choose your server region in the Play Now menu, or in the Settings menu.</ListItem>
<ListItem>You may now change your Gamer Name for gold, using the Store menu.</ListItem>
<ListItem>The end-of-match screens have been given a significant user interface overhaul.</ListItem>
<ListItem>The Doombringer and Brute have new suits. There have also been some adjustments to the suits for some other classes, based on user feedback.</ListItem>
<ListItem>Updated art for the Accolades and Ranks.</ListItem>
<ListItem>Variety of other fixes, clean-ups and feature additions.</ListItem>
</List>
<Title order={4}> Weapon/Balance Items</Title>
<List>
<ListItem>Fixed an issue with the Sentinel&apos;s Phase Rifle not properly applying damage.</ListItem>
<ListItem>Motion sensors that are automatically destroyed for placing too many no longer trigger the notification.</ListItem>
<ListItem>Reduced initial clip size on Sentinel&apos;s Falcon Auto Pistol from 24 to 22. Reduced and adjusted starting ammo pool to match.</ListItem>
<ListItem>Infiltrators using the Stealth pack now fade in and become &apos;visible&apos; at speeds over 173kph.</ListItem>
<ListItem>Increased the activation delay on newly placed Light Turrets (Technician) from 1 to 2 seconds.</ListItem>
<ListItem>The following weapons projectiles now spawn center cross-hairs, rather than offset to the right: Soldier&apos;s Assault Rifle, Doombringer&apos;s Chaingun, Soldier&apos;s Eagle, Sentinel&apos;s Falcon, Pathfinder&apos;s Light Assault Rifle, Raider&apos;s NJ4, Brute&apos;s Nova Colt, Infiltrator&apos;s Rhino, Infiltrator&apos;s SN7, Technician&apos;s Sparrow, Technician&apos;s TCN4, Juggernaut&apos;s X1LMG.</ListItem>
<ListItem>Damage falloff range on Pathfinder&apos;s Light Assault Rifle increased (improved) by roughly 16%.</ListItem>
<ListItem>Two new unlockable items have been added for Soldier: Proximity Grenade and Utility Pack.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>You may now add a player as a friend directly from the scoreboard. You may also mute players (turn off chat and VGS).</ListItem>
<ListItem>Eliminated several issues that were causing &apos;hitches&apos; in matches. (Some other issues may still exist optimization still in progress).</ListItem>
<ListItem>Several bug fixes and cleanups to the main menu UI.</ListItem>
<ListItem>The Target Practice map has been improved. There are now Light, Medium and Heavy bots in the maps, in addition to both enemy and friendly vehicles, along with other improvements.</ListItem>
<ListItem>The Rabbit gamemode has been removed from the Quick Match rotation. It will be available through Custom Servers at a later date.</ListItem>
<ListItem>Added the ability to view both Blood Eagle and Diamond Sword skins from within the Class menu.</ListItem>
<ListItem>The ability to add Tribes Gold to your account is now available from all menu screens.</ListItem>
<ListItem>Under Gameplay Settings, you may now set &apos;Default Objectives On/Off&apos;. This controls whether you see the objective markers by default in a match. (To toggle them inside of a match, press the &apos;O&apos; key).</ListItem>
<ListItem>VGS and Announcer volumes are now independent settings</ListItem>
<ListItem>Revisited Blood Eagle variant class visuals based on user feedback.</ListItem>
<ListItem>Various minor cleanups have been made to the Ski Tutorial.</ListItem>
<ListItem>Made several changes to the Shrike: increased yaw-turn sensitivity, decreased damage received when hitting static objects, and changed the collision model so that wing tips are less likely to cause terrain impacts.</ListItem>
<ListItem>Changed Beowulf handling, it will no longer allow immediate forward/backward velocity changes.</ListItem>
<ListItem>Enemy vehicle icons will now show through walls if they are detected by a Radar Sensor.</ListItem>
<ListItem>The Flag Reach perk will no longer allow players to pick-up the flag through walls.</ListItem>
<ListItem>Accolade medals have been given another polish pass. New accolade medals have been added as well.</ListItem>
<ListItem>To be consistent with other maps, vehicle stations in Crossfire were moved next to the vehicle pad.</ListItem>
<ListItem>A message now displays when a teammate executes a Call-in.</ListItem>
<ListItem>Call-ins are now free in roaming and training.</ListItem>
<ListItem>When a player is invulnerable and they fire a weapon, invulnerability immediately expires.</ListItem>
<ListItem>Fixed and improved how the client handles an unexpected disconnect from the server.</ListItem>
<ListItem>Fixed an issue in the main menu where a character skin from the Classes screen could pop into other main menu scenes.</ListItem>
<ListItem>Fixed an issue where Gameplay Settings for sensitivity were only allowing integers, they now allow floating points.</ListItem>
<ListItem>Fixed an issue where if a player died while falling in a deep pit, footstep sounds could begin playing.</ListItem>
<ListItem>Fixed the chat filter, and added an option to disable it in the Settings menu.</ListItem>
<ListItem>Fixed an issue where if a player died while falling in a deep pit, the previous damager could get a blue plate or air mail accolade.</ListItem>
<ListItem>Fixed an issue where AoE wasn&apos;t properly being applied to players and surrounding objects when a generator or inventory station was in the way. This includes Technician&apos;s turrets being placed in inventory stations not taking AoE damage.</ListItem>
<ListItem>Fixed an issue where Bass Boost in the Audio Settings was not properly being saved. The frequency ranges that are boosted (or suppressed) have also been tweaked to prevent audio popping.</ListItem>
<ListItem>Fixed an issue where zooming while attempting to deploy an object could cause a second object to appear at the top of the screen.</ListItem>
<ListItem>Fixed an issue where a player could fire a projectile (or call-in) and suicide, which would result in teammates taking damage.</ListItem>
<ListItem>Fixed an issue where players were able to place deployables in volumes that were not permitted, this is most noticeable with the Doombringer&apos;s Force Field being placed near the flag stand at certain rotations.</ListItem>
<ListItem>Fixed an issue where dying players were not dropping ammo nuggets and ammo nuggets could get lost inside generators or base deployables.</ListItem>
<ListItem>Fixed an issue where users binding &apos;Enter&apos; to chat would have the chat window immediately close.</ListItem>
<ListItem>Fixed an issue where a player dying before the MIRV launcher&apos;s secondary split would not be properly credited for the kills.</ListItem>
<ListItem>Fixed an issue where the Doombringer&apos;s Chaingun spin-up sound would be stuck playing if you died while spinning up.</ListItem>
<ListItem>Fixed an issue on Drydock where no-deploy zones around the flags were to large relative to other maps.</ListItem>
<ListItem>Fixed LOD popping on all new class variant visuals.</ListItem>
<ListItem>Fixed some other situations where UI sounds played multiple times for the same event</ListItem>
<ListItem>Fixed an issue where users with certain graphics settings were able to see fully stealthed Infiltrators.</ListItem>
<ListItem>Fixed an issue with Doombringer&apos;s forcefields not being able to be destroyed at certain angles.</ListItem>
<ListItem>Fixed incorrect description on Soldier&apos;s Energy pack.</ListItem>
<ListItem>Fixed an exploit where users with specific graphics settings were able to see a fully stealthed Infiltrator.</ListItem>
<ListItem>Fixed an issue where Radar Sensors weren&apos;t properly detected being hit.</ListItem>
<ListItem>Fixed an issue where Base Turrets and Light Turrets were unable to target enemy players through friendly base force fields on Bella Omega.</ListItem>
<ListItem>The enemy generator icon will always display if you are showing all objective markers.</ListItem>
<ListItem>Fixed an issue where players were losing their invulnerability when spawning a vehicle. They will now remain fully invulnerable until they are teleported into the vehicle.</ListItem>
<ListItem>Fixed an issue where the zoom binoculars were being stuck on when zooming while throwing grenades.</ListItem>
<ListItem>Fixed an issue causing some maps to crash in roaming mode.</ListItem>
<ListItem>Fixed issues with the Friends List that occur when you scroll down the list.</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>Heavy characters may sometime appear as stretched out medium characters.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.760.0</Title>

2012/2/10

Patch Items

<ListItem>Fix for issue in which clicking on the Back to Game button in the in-match menu would put your game in a bad state.</ListItem>
<ListItem>Fix for phase rifle not properly calculating damage in certain situations.</ListItem>
<ListItem>Improvements to Shrike handling at high FPS.</ListItem>
<ListItem>Fix for issue that was preventing some menu hotkeys from working in the match lobby.</ListItem>

Note that a separate issue was hot-fixed yesterday afternoon: &apos;Players would not see their XP bar update following a match until they relogged.&apos;

<Title order={3}> Tribes Closed Beta Version 0.1.759.0</Title>

2012/2/09

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>The Sentinel, Infiltrator, Technician and Raider classes have new suits/visual aesthetics. The Doombringer and Brute will receive their new outfits in an upcoming patch.</ListItem>
<ListItem>XP prices of many weapons have been lowered. Those that purchased the weapons at the older XP prices will be refunded XP as if they had purchased at the new prices. (Note: Gold prices have not been modified).</ListItem>
<ListItem>The front-end menu has undergone a significant number of usability improvements and bug fixes. Some of the changes include:</ListItem>

  - Easier navigation to modify your class from the in-game class select screen.
  - Several improvements to the Friends list layout and usability.
  - Reduced clicks to join a quick match.
  - Hot-keys to access some menu items.
  - A number of additional bug fixes, cleanups and minor enhancements.
  - Several maps have had adjustments for performance, playability and aesthetics. More is planned for future releases.
  - Weapon/Balance Items
  - Fixed a bug that prevented the Ultra Capacitor II Perk from being unlocked.
  - Fixed a bug with the Sentinel’s Phase Rifle allowing users to fire faster than intended.

<ListItem>Added minor damage falloff to projectile-based automatic and semi-automatic weapons. This affects Soldier’s Assault Rifle, Doombringer’s ChainGun, Sentinel’s Falcon, Pathfinder’s LAR, Infiltrator’s NJ4,Rhino,</ListItem>
<ListItem>Infiltrator’s SN7, Technician’s TCN4, and Juggernaut’s X1LMG)</ListItem>
<ListItem>Damage reduced by roughly 4% on Technician&apos;s Thumper.</ListItem>
<ListItem>Reduced Falloff on Brute&apos;s Nova Colt, increasing its damage at range.</ListItem>
<ListItem>Reduced Pathfinder&apos;s Light Assault Rifle clip upgrade from +4 to +3 size, to fit with it&apos;s 3-round-burst.</ListItem>
<ListItem>Increased reload time on Juggernaut’s X1 LMG from 1.8s to 2.75s.</ListItem>
<ListItem>Raider’s White Out Grenade no longer requires the player to be looking at the grenade for the affect to apply. Radius on the Whiteout Grenade has been substantially reduced (roughly 50%) to account for this, and is now more in line with other grenades. Note the Egocentric Perk makes the thrower immune to this effect.</ListItem>
<ListItem>Brute’s Fractal Grenade is no longer effective against Armored Targets (Vehicles, Base Assets) or Generators. Reduced damage by roughly 9% on Brute’s Fractal Grenade.</ListItem>
<ListItem>Changed the third skill unlock on Brute’s Fractal Grenade to be radius, per its status change away from being effective against Armored targets.</ListItem>
<ListItem>Fixed an issue in which Brutes started with one extra Fractal Grenade already unlocked, without getting the upgrade.</ListItem>
<ListItem>Fixed a bug so that mines will no longer give air mail accolade.</ListItem>
<ListItem>Devices and mines are now properly protected by forcefields.</ListItem>
<ListItem>Infiltrator’s Prism Mines are now harder to detect. The range in which you can see the beams has been drastically reduced making them a more viable trap around corners.</ListItem>
<ListItem>Reduced the maximum damage caused by the “Clothes Line” upgrade of the Super Heavy Perk by roughly 23%, and raised the speed at which maximum damage is applied to 216kph.</ListItem>
<ListItem>Changed Beowulf Passenger/Gunner position to be projectile based.</ListItem>
<ListItem>Removed inaccuracy when throwing Grenades or other Belt items.</ListItem>
<ListItem>Reduced the amount of camera shake on the Juggernaut’s MIRV Launcher.</ListItem>
<ListItem>Fixed an issue where Juggernaut’s MIRV launcher secondaries were giving too much knockback.</ListItem>
<ListItem>Fix for Raider’s EMP Grenades causing energy drain on self, even with a fully upgraded Egocentric perk.</ListItem>
<ListItem>Fix for turrets shooting dead people or attempting to aim at a point the player could never reach.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Fixed a bug that prevented users from being notified when they received the First Win of the Day Bonus.</ListItem>
<ListItem>Players should now receive XP at the end of a match even if they are offline when the match ends.</ListItem>
<ListItem>Fixed an issue where if a player skied into certain objects (such as the back of a Deployable Inventory station) or over certain lips they could be propelled at a very fast velocity.</ListItem>
<ListItem>Increased graphical performance on some rapid-fire weapons.</ListItem>
<ListItem>Added bass boost, vertical sync, and frame-rate smoothing to the settings menu.</ListItem>
<ListItem>Improved performance at Class Modify screen at the main menu.</ListItem>
<ListItem>Auto balance has been enabled for Team Deathmatch matches.</ListItem>
<ListItem>Re-enabled Screenshot button (F9).</ListItem>
<ListItem>Fix for prism mine not properly destroying particle effect.</ListItem>
<ListItem>Fixed laser targeter and repair tool effects lingering in 3P.</ListItem>
<ListItem>Additional fixes for instant fire lock-on of Saber Launcher.</ListItem>
<ListItem>Fixed players losing their hand model in 1P when they unzoomed after switching from 3P to 1P.</ListItem>
<ListItem>Fixed an issue where certain NumPad keys were not bindable.</ListItem>
<ListItem>Fixed an issue where call-in inventory stations were able to be placed on areas not allowed.</ListItem>
<ListItem>Shrike particle effects have been pulled in favor of boosting the frame-rate with them on screen. They will return more optimized and better looking next patch.</ListItem>
<ListItem>All weapons have been given a third person pass. A spectated player will now display the correct weapon model.</ListItem>
<ListItem>Fixed a glitch where if two players were jetpacking and became “stuck” to each other, they would be propelled at an incredible speed.</ListItem>
<ListItem>Fixed an issue where TDM Night Katabatic would crash in Roaming mode.</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>First person hands do not match class models yet.</ListItem>
<ListItem>Shrike can be hard control, especially when running at a high framerate. This is being actively worked on.</ListItem>
<ListItem>Hotkeys inside the main menu are not working for many users (for example, hitting M to return to the main screen). Mouse clicking the button at the bottom of the menu that references the Main Menu does return you home. It is a keybinding issue.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.742.0</Title>

2012/2/02

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>There is a new UI for all the front-end menus. Many aspects of the new UI are still a work in progress, so please forgive any issues or quirkiness.</ListItem>
<ListItem>The class and purchase systems have undergone a major overhaul. The new system allows greater customization within a given class. Among the highlights:</ListItem>

  - There are now 9 classes instead of 12 (Pathfinder, Sentinel, Infiltrator, Suldier, Technician, Raider, Juggernaut, Doombringer, Brute).
  - New players receive the Pathfinder, Suldier and Juggernaut classes for free.
  - Each class has a default loadout associated with it that includes your Armor (Light/Medium/Heavy), a Primary Weapon, a Secondary Weapon, Belt item, a Pack, and two Perk Slots. You may unlock alternate weapons for each slot, using XP or Guld.
  - The class specific skill trees have been removed and replaced by a weapon-centric and armor-centric upgrade system. Upgrades are still unlocked using XP.
  - Perks have been overhauled. With this patch, there are 18 perks in the game nine assigned to Perk Slot 1 and nine assigned to Perk Slot 2. You now unlock Perks using XP or Guld. Once a perk is unlocked, it can be used on all classes.
  - Perks now have upgrades that can be purchased with XP, and contain additional functionality. (Example: The Pilot Perk gives +10% vehicle health, and has upgrades that provide +10% more health, with a final upgrade giving Ejection Seat).

<ListItem>16 new weapons have been added to the game.</ListItem>
<ListItem>A new Crossfire Team Deathmatch map has been added. This map is an early iteration and is not in its final intended artistic or design state.</ListItem>
<ListItem>Several new Rabbit maps have been added (using previously released Team Deathmatch maps as their base).</ListItem>
<ListItem>Tokens have been removed from the game, and all purchases previously made through Tokens can now be made through XP (see CONVERSION NOTE).</ListItem>
<ListItem>Weapon/Balance Items</ListItem>
<ListItem>The following Classes have been condensed:</ListItem>

  - Jumper has been removed, and most of Jumper’s weapons and gear are now available on Pathfinder. The Sawed-off Shotgun is now a Technician Secondary option.
  - Ranger has been removed, and Ranger’s weapons and gear are now available on Suldier.
  - Scrambler has been removed, and Scrambler’s weapons and gear are now available on Raider.

<ListItem>The following new weapons have been added:</ListItem>

  - Light Assault Rifle (Pathfinder Secondary)
  - Explosive Nitron (Pathfinder Belt)
  - Phase Rifle (Sentinel Primary)
  - Falcon Auto-Pistul (Sentinel Secondary)
  - T5 Grenade (Sentinel Belt)
  - Stealth Spinfusor (Infiltrator Primary)
  - Prism Mines (Infiltrator Belt)
  - Thumper (Large version) (Technician Primary)
  - Sparrow Pistul (Technician Secondary)
  - Motion Sensor (Technician Belt)
  - MIRV Launcher (Juggernaut Primary)
  - X1 LMG (Juggernaut Secondary)
  - Disk Toss (Juggernaut Belt)
  - Heavy Bult Launcher (Doombringer Primary)
  - Mines (Doombringer Belt)
  - Nova Cult (Brute Secondary)

<ListItem>All Perks have been significantly modified, and many have been combined together. Perks have upgrades that can be unlocked with XP, and the final upgrade usually provides new functionality.</ListItem>
<ListItem>Reduced damage by roughly 6% on Ranger’s Assault Rifle, Raider’s NJ4 SMG, and Infiltrator’s Rhino SMG. Reduced by 11% on Technician’s TCN4 SMG.</ListItem>
<ListItem>Updated reticule on Doombringer’s Chaingun so it does not block visibility as much.</ListItem>
<ListItem>Increased fire rate on Pathfinder’s Light Spinfusor. Slightly decreased damage, per the fire rate increase.</ListItem>
<ListItem>Reduced starting clip size to 32 on Infiltrator’s Rhino SMG.</ListItem>
<ListItem>Reduced Saber Launcher starting ammo to 8.</ListItem>
<ListItem>Increased damage on Pathfinder’s Bult Launcher to be more in line with other medium AOE weapons.</ListItem>
<ListItem>Changed the way the Looter perk was calculated. It now gives a lot more bonus ammo to all weapons.</ListItem>
<ListItem>ST Grenade was removed from the game, and replaced with a new option on Pathfinder.</ListItem>
<ListItem>Reduced initial clip size to 28 on Technician’s TCN4 SMG.</ListItem>
<ListItem>Fixed a bug that gave extra starting ammo to Raider’s Whiteout Grenade.</ListItem>
<ListItem>Reduced initial values on Juggernaut’s Regen Pack.</ListItem>
<ListItem>Reduced damage from Raider’s EMP Grenade, enhanced EMP effect in upgrade track.</ListItem>
<ListItem>Increased damage on Infiltrator’s SN7 Pistul by roughly 6%.</ListItem>
<ListItem>Reduced damage by roughly 8% on Suldier’s (previously Ranger’s) Thumper DX. Reduced knockback on Thumper DX to account for damage reduction.</ListItem>
<ListItem>Reduced knockback on Whiteout grenade.</ListItem>
<ListItem>Increased damage by roughly 8% on Juggernaut’s Fusion Mortar.</ListItem>
<ListItem>Decreased damage on Shrike’s Plasma Cannon by 18%.</ListItem>
<ListItem>Decreased energy recharge rate and maximum energy on Shrike Afterburner.</ListItem>
<ListItem>Decreased Shrike Health by 33%.</ListItem>
<ListItem>Increased effectiveness of non-tracking AOE based projectiles against Shikes. (Spinfusors, Thumpers, etc). Luck (or skill) shots provide a bigger payoff.</ListItem>
<ListItem>Added vehicle boost to the Beowulf.</ListItem>
<ListItem>Shotgun spread has been adjusted to be less “random” and more reliable. This affects Pathfinder’s Shotgun, Technician’s Sawed-Off Shotgun, and Brute’s Automatic Shotgun.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>All maps may now be roamed using the Training menu.</ListItem>
<ListItem>Added a “Ski Challenge” mode under the Training menu. This is an early iteration. Expect further enhancements in future patches.</ListItem>
<ListItem>CTF Bella Omega has had a significant change to it’s base layout. This is an early iteration and is not in its final intended art.</ListItem>
<ListItem>CTF Arx Novena has had a significant change to it’s interiors. The Bases have been moved further apart (15% distance increase). Workplace safety has installed security fields over the bottomless pits. One of the towns was sacked. This is an early iteration and is not in its final intended art.</ListItem>
<ListItem>CTF Katabatic has additional inventory stations near the generator. The flight ceiling has been raised.</ListItem>
<ListItem>Some performance optimisations on Drydock. More still planned.</ListItem>
<ListItem>The overhead carets and names of players on your friends list will show as green instead of blue when inside of a match, so long as they are on the same side as you.</ListItem>
<ListItem>You may now switch your active class using Hotkeys (as an alternative to visiting the Change Class menu). The Hotkeys default to Numpad1 through Numpad9 and are configurable under SETTINGS | KEYBINDINGS | HOTKEYS.</ListItem>
<ListItem>Added a simple ammo indicator when in third-person mode.</ListItem>
<ListItem>A subsystem has been added for users to redeem promotions inside the game using the EXTRAS menu.</ListItem>
<ListItem>A “MINIMAL” option has been added under Graphics Detail settings. This better optimizes the game for lower-end machines. Note that additional improvements and optimizations are still planned.</ListItem>
<ListItem>New Base Turret Fire and Projectile sounds.</ListItem>
<ListItem>Fix for wulf howl on Arx Novena. Will not play as often as before.</ListItem>
<ListItem>All projectile explosions and weapons fire now apply a low pass filter at closer range.</ListItem>
<ListItem>Fixed issue with certain weapons damaging the Shrike pilot when you were shooting any part of the Shrike and not just the cockpit.</ListItem>
<ListItem>Fixed melee, grenade, and mine animations not properly playing.</ListItem>
<ListItem>Tweaked the Shrike contruls: increased reverse thrust, vertical thrust, and added separate pitch/yaw sensitivity Configuration (under Settings | Gameplay).</ListItem>
<ListItem>Fixed the Shrike going into a death spiral when no player was piloting it.</ListItem>
<ListItem>Fixed bug with inventory stations not providing loadouts.</ListItem>
<ListItem>Fixed call-ins not working if you were killed the moment it deducted credits.</ListItem>
<ListItem>Fixed the saber launcher being able to instantly lock-on to players.</ListItem>
<ListItem>Fixed players dying when culliding with friendlies or goomba’ing friendlies/enemies.</ListItem>
<ListItem>Fixed friendly players being able to block tank shots by sitting on the turret.</ListItem>
<ListItem>Fixed sound issues with drop jammer ‘jammed’ loop playing across the map.</ListItem>
<ListItem>Fixed projectile-bullets not playing impact sounds properly.</ListItem>
<ListItem>Fixed an offline forcefield culliding with tracers, making it appear as if bullet-projectiles and projectiles weren’t going through.</ListItem>
<ListItem>Fixed issue with base asset damage/death effects not working properly when you first join the server.</ListItem>
<ListItem>Fixed issue where sticky projectiles weren’t properly exploding.</ListItem>
<ListItem>Fixed issues with the chaingun loop not ending in a variety of situations.</ListItem>
<ListItem>Added a timer where all turrets will ignore an invulnerable player to discourage turret farming at spawn points.</ListItem>
<ListItem>Mines and grenades now consume ammo as soon as the button is pressed, allowing the player to pick up ammo while throwing and be credited for mine/grenade ammo.</ListItem>
<ListItem>Zooming in while in third-person will kick you back to first-person.</ListItem>
<ListItem>Fixed objectives not properly taking damage from bullet projectiles when the player was too close.</ListItem>
<ListItem>Fixed issue where the client could crash or the screen would go black when skiing into objects.</ListItem>
<ListItem>The Beowulf’s view pitch is now properly limited depending on how inline your view is with the vehicles. When looking the highest you can when the Beowulf is tilted down a hill this still properly limits the view, but does allow a higher view than previously capable when looking backwards which was tilted up.</ListItem>
<ListItem>Fixed vehicle overhead damage numbers being inaccurate.</ListItem>
<ListItem>Fixed using the thrust/jump pack while jetting breaking jetpack functionality.</ListItem>
<ListItem>Flags get a larger impulse when landing on vehicles, preventing them from landing on vehicles and being driven across the map.</ListItem>
<ListItem>Fixed the ability to place turrets behind walls.</ListItem>
<ListItem>Made placing deployables more reliable.</ListItem>
<ListItem>Infiltrators will now only reveal if they throw a belt-item and have ammo.</ListItem>
<ListItem>Fixed lowered FPS when entering a vehicle with the repair gun equipped.</ListItem>
<ListItem>Fix for player doing self damage when shooting automatic weapons at feet.</ListItem>
<ListItem>Flags now animate and react to the flag hulder’s movement.</ListItem>
<ListItem>Overhead damage numbers for shotgun damage now properly display each impact of the spread on its victims.</ListItem>
<ListItem>Fixed an issue where a friendly flag carrier’s player name would be off-center.</ListItem>
<ListItem>Overhead damage numbers will display from damage done from a personal deployed turret to a vehicle.</ListItem>
<ListItem>Added in a new INI setting, PlayerShadowFadeResulution, for handling the fading away of player shadows. Player shadows should now be visible at a larger distance as a result.</ListItem>
<ListItem>Fixed an issue where turret animations would sometimes not orient correctly if the turret was aiming at a target behind it.</ListItem>
<ListItem>Fixed an issue where the overhead damage numbers would display if looking directly away from the location of the damage.</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>Since this update contains a massive amount of changes, we expect our tester community will find a significant number of issues. Found bugs can be posted in the Closed Beta Private Forums.</ListItem>
<ListItem>Bass Boost is not in the Audio Settings, this will be added in a later patch.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.669.1</Title>

2012/1/10

The patch contains only backend changes meant to address stability issues in the current build. We have eliminated a couple issues causing connection and stability issues. We believe several issues will likely still remain and this patch adds additional logging and debug support so that we can hopefully address those remaining problems soon.

<Title order={3}> Tribes Closed Beta Version 0.1.669.0</Title>

2012/1/6

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>An early version of the Arx Novena Capture the Flag map has been released. This map is in an early state and is not at its final intended art or design quality.</ListItem>
<ListItem>Added a new “Target Practice” mode under the Training menu. This is a variant of the Crossfire map that contains a variety of bots in it. These can be used to practice shooting.</ListItem>
<ListItem>Improved vehicle handling in high-latency situations. This is most noticeable on the Shrike.</ListItem>
<ListItem>Reduced stuttering when skiing/jetting.</ListItem>
<ListItem>By default, damage numbers appear above a players hit when you damage them. This can be turned off through the Settings menu.</ListItem>
<ListItem>The game warm-up period has been extended, in order to allow more users to load into the game prior to match start.</ListItem>
<ListItem>Adjusted flag bounce physics to help prevent punting a flag too far from a large impulse.</ListItem>

Balance Items

<ListItem>Lowered the damage on the Sentinel&apos;s BXT1 Rifle when the rifle is not fully charged (damage is the same as previous at full charge).</ListItem>
<ListItem>Slightly reduced damage on the Ranger’s Thumper D.</ListItem>
<ListItem>Increased damage on the Technician’s TCN4 SMG.</ListItem>
<ListItem>Increased fire rate modestly on the Infiltrator’s Rhino SMG.</ListItem>
<ListItem>Fixed a previous configuration error that was causing the credits earned from the Flag Killer and Flag Return accolades to be more than their intended value.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Some general improvements for performance and stability. Further improvements are planned for future patches.</ListItem>
<ListItem>Fixed issue where a passenger entering a vehicle was not properly getting an indicator that a missile was incoming.</ListItem>
<ListItem>Fixed issue where vehicle drivers and passengers weren’t having the proper animations applied.</ListItem>
<ListItem>Fixed issue with upside-down Beowulf’s being unable to be flipped back over.</ListItem>
<ListItem>Fixed issue with force ejection of Beowulf driver and passenger where they were falling out of the level and dying.</ListItem>
<ListItem>Added bullet impact and flyby sounds for bullet-based projectiles (chaingun, SMGs, ARs, etc).</ListItem>
<ListItem>Added footstep particle systems under players when walking around. This is not visible on yourself when in first-person view.</ListItem>
<ListItem>Fixed gunner caret not showing up when mousing over the Beowulf.</ListItem>
<ListItem>Players are no longer auto-balanced when driving a vehicle.</ListItem>
<ListItem>Fixed switching between first-person and third-person causing loss of audio on some weapons.</ListItem>
<ListItem>Fixed vehicle ammo indicator not showing at times.</ListItem>
<ListItem>Fixed Infiltrator’s SN7 not being able to fire at the maximum rate possible.</ListItem>
<ListItem>Fixed driver and passenger health bars not properly showing on vehicles.</ListItem>
<ListItem>Fixed issue with Doombringer’s Saber Launcher lock-on sound staying on when you have a lock then enter a vehicle.</ListItem>
<ListItem>Fixed response issues with Beowulf turret and gunner positions.</ListItem>
<ListItem>Fixed an issue in which username and password were not being saved properly for some users.</ListItem>
<ListItem>Removed confusing message about entering and exiting a vehicle on vehicle purchase.</ListItem>
<ListItem>All device particle systems now have proper levels of detail. This should help low end systems in high action environments.</ListItem>
<ListItem>Spectator Changes</ListItem>
<ListItem>Increased performance on spectator HUD</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>The above-head damage indicators may report incorrect damage on shotgun weapons in some conditions. The actual damage amounts applied are correct.</ListItem>
</List>
<Title order={2}> 2011</Title>

<Title order={3}> Tribes Closed Beta Version 0.1.640.0</Title>

2011/12/28

Significant Changes

<ListItem>Improved tracers on most rapid-fire projectile weapons.</ListItem>
<ListItem>Modified projectile inheritance on all Spinfusors, all Bolt Launchers, the ArxShotgun, and Thumper (flat 50%).</ListItem>
<ListItem>Reduced sniper rifle effectiveness versus Shrikes.</ListItem>
<ListItem>Fixed a bug in the First Win of the Day bonus.</ListItem>
<ListItem>Fixed a bug that would prevent players from getting their rewards at end of match under some conditions.</ListItem>
<ListItem>Fixed a bug with the gravcycle that could cause all players to disconnect from a match under some conditions.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.636.0</Title>

2011/12/23

NOTE: THERE APPEARS TO BE AN ISSUE WITH THE PATCH. WE ARE INVESTIGATING. MOST LIKELY, THE PATCH WILL BE ROLLED BACK AND DELAYED UNTIL AFTER THE HOLIDAYS. PLEASE EXPECT A FEW MORE HOURS OF DOWNTIME.

SORRY FOR THE ISSUES.

<Title order={3}> Tribes Closed Beta Version 0.1.635.0</Title>

2011/12/21

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Bella Omega has been added to the Team Deathmatch rotation.</ListItem>
<ListItem>Variety of changes to fully automatic projectile weapons (see below).</ListItem>
<ListItem>Significant updates to Spectator support (see below).</ListItem>
<ListItem>Variety of different performance optimizations (both client and server). More are planned for future patches.</ListItem>

Balance Items

<ListItem>Several visual changes and general balance adjustments designed to help increase player accuracy with fully automatic projectile weapons. Damage adjustments also made to these weapons taking into account increased player hit rates. Affected weapons:</ListItem>

  - Infiltrator’s Rhino SMG
  - Infiltrator’s SN7
  - Technician’s TCN4 SMG
  - Ranger’s Assault Rifle
  - Doombringer’s Chaingun
  - Raider’s NJ4 SMG.

Spectator Changes

<ListItem>Added cinematic movement to bookmarked cameras.</ListItem>
<ListItem>Spectator camera tweens between view targets if it has clear line of sight, otherwise it snaps to the new view.</ListItem>
<ListItem>Spectating players can bind what they are viewing to keys (default, NumPad0 through NumPad9). While spectating, press Alt+NumPad to bind the current view target. Now when you press NumPad, the bound target will become your current view target. Note that you cannot bind while in free cam “ghost” mode; you must be actively focused on a target.</ListItem>
<ListItem>Spotted targets from other players will no longer show in Spectator mode.</ListItem>
<ListItem>Team announcers no longer play for spectating players.</ListItem>
<ListItem>Many team messages were formatted so that the messages no longer refer to “friendly” and “enemy” teams; they now refer to “Diamond Sword” and “Blood Eagle” when appropriate.</ListItem>
<ListItem>Added more information panels for vehicles, objectives, flags, free cam, and camera bookmarks.</ListItem>
<ListItem>Fixed an issue where some of the spectator HUD elements could remain if exiting spectator mode.</ListItem>
<ListItem>When in free cam “ghost” mode, a reticule now displays. Clicking left mouse (default) over a player or vehicle within the reticule will set them to the current view target.</ListItem>
<ListItem>Toggling the scoreboard in spectator mode will now hide the spectator information panels.</ListItem>
<ListItem>While viewing a target, an attempt to move in a direction (default, W,A,S,D,Q,E) will unlock the spectator from the target and enter free cam “ghost” mode</ListItem>
<ListItem>Added a new controls screen. Toggle it on and off with Z (default).</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Tweaks to skiing physics based on playtesting feedback.</ListItem>
<ListItem>Username and password are now remembered when selecting the ‘Remember Me’ checkbox at login. In addition, the last played class and gametype are saved.</ListItem>
<ListItem>Fixed an issue where the Field of View (FOV) would not reset back to the correct value after leaving a vehicle.</ListItem>
<ListItem>Significant updates to Bella Omega CTF. (Additional updates should be expected in future patches. Please report collision issues or other problems).</ListItem>
<ListItem>Drydock Night map has had some visual and shader performance improvements.</ListItem>
<ListItem>Fixed an issue where committing suicide after taking damage in TDM was not properly deducting points.</ListItem>
<ListItem>Reticule adjustments for rapid-fire projectile weapons.</ListItem>
<ListItem>A number of changes to backend server systems.</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>Stats for Kill Distance and Distance Traveled are not showing the correct values.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.619.0</Title>

2011/12/15

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Converted all fully automatic hitscan weapons to use projectiles. This includes the Ranger’s Assault Rifle, Technician’s TCN4, and Infiltrator’s Rhino SMG.</ListItem>
<ListItem>Significantly improved projectile inheritance.</ListItem>
<ListItem>A votekick option has been added. Open the console and type “/votekick playername” to initiate a vote to kick another player.</ListItem>
<ListItem>Significant improvements have been made to spectator functionality (see below). Further improvements are planned for future updates.</ListItem>
<ListItem>Added new accolades to reward flag grabs based on speed, e-grabs, vehicle destruction, flag defense, and generator defense.</ListItem>

Balance Items

<ListItem>Increased starting ammo on Soldier’s Spinfusor, Pathfinder’s Light Spinfusor, Jumper’s Bolt Launcher, and Juggernaut’s Heavy Spinfusor D.</ListItem>
<ListItem>The Pathfinder’s Iron Grip perk has been replaced by a new perk, Reach, which allows players to pick up flags at a larger distance. Players who had spent Pathfinder class XP to unlock Iron Grip will be refunded their XP.</ListItem>
<ListItem>Decreased time delay on Scrambler’s Arx Buster shot detonation.</ListItem>
<ListItem>Increased Scrambler’s default Health pool.</ListItem>
<ListItem>Adjusted skill order in the soldier’s skill tree.</ListItem>
<ListItem>Adjusted skills on the Infiltrator skill tree based upon the changes to the Rhino SMG.</ListItem>
<ListItem>The Shrike is now vulnerable to damage from all weapon types, and particularly vulnerable to standard projectile fire. Its health has been adjusted based on these new vulnerabilities.</ListItem>
<ListItem>Increased repair rates using repair tools on vehicles.</ListItem>
<ListItem>Implemented a brief “lock out” feature for inventory stations to help prevent players from rapidly revisiting them and exploiting various things.</ListItem>
<ListItem>Inventory Stations spawned from a call-in no longer kick starts health regen.</ListItem>

Spectator Changes

<ListItem>Enter and exit spectating through the Team Select window (default key bind is ‘P’) instead of through a console command.</ListItem>
<ListItem>Added the first part of a larger work-in-progress HUD overhaul to spectator an info pane with details of the viewed player. Additional panes will arrive in a later patch.</ListItem>
<ListItem>Fixed an issue where a spectating player was asked to select a team when the match ended.</ListItem>
<ListItem>Whiteout grenades no longer cause a spectator’s view to white out.</ListItem>
<ListItem>Damage post process effects no longer persist in spectator view.</ListItem>
<ListItem>When viewing a flag or flag base in spectate mode, players may zoom in and out.</ListItem>
<ListItem>Added spectator “bookmark” camera views throughout the maps. While spectating, hold ‘C’ and hit next/previous to cycle through the various views.</ListItem>
<ListItem>While spectating, toggling ‘O’ shows and hides objective markers.</ListItem>
<ListItem>While spectating, holding ‘R’ while clicking next or previous will snap to the fastest player.</ListItem>
<ListItem>Fixed win message at match conclusion when spectating.</ListItem>
<ListItem>When spectating a flag being captured, the camera now stays on the flag stand which received the capture rather than following the flag as it teleports back to its base.</ListItem>
<ListItem>When spectating a dropped flag being returned, the camera now enters free roam mode rather than following the flag as it teleports back to its base.</ListItem>
<ListItem>When spectating a flag carrier who drops the flag, the camera stays with the flag rather than the flag carrier.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>The Ranger now costs 50 tokens. Most players should be able to unlock this class after their first full match. We hope this will help new users understand the class unlock process better.</ListItem>
<ListItem>Improved notification when Classes and Skills become affordable with Tokens and XP.</ListItem>
<ListItem>Locked classes are now ordered on the class screen based on their token price.</ListItem>
<ListItem>The game console has undergone major changes. Launching the console (default ~) will default into the “Say” menu, allowing users to type chat messages (even at match end). To execute a command, you must start your command with “/”. The currently supported commands are /report, /mute, /unmute, /votekick, /quit.</ListItem>
<ListItem>Vehicle improvements, including a HUD panel showing vehicle ammo and clip sizes.</ListItem>
<ListItem>Fixed an issue where skiing on a flat surface after previously skiing downhill could incorrectly compute velocity and cause projectiles that inherit the shooter’s velocity to veer off course.</ListItem>
<ListItem>Fixed Grav Cycle passenger floating off into oblivion.</ListItem>
<ListItem>Beowulf’s secondary gunner tracers now function properly.</ListItem>
<ListItem>Muzzle flashes now correctly work on all vehicles.</ListItem>
<ListItem>Fixed an issue where sometimes the Doombringer’s Saber Launcher missile particle effects were barely visible.</ListItem>
<ListItem>Fixed an issue where players standing on the flag stand and grabbing a flag thrown to them could not capture the flag unless they moved off the stand and back on.</ListItem>
<ListItem>Fixed an issue where players were stuck jetpacking when entering an inventory station while using the jetpack and releasing the jetpack button.</ListItem>
<ListItem>Fixed an issue where the first person arms mesh would sometimes not be correct on spawn or when changing classes to different armor types.</ListItem>
<ListItem>Fixed an issue where the call-in cooldown time was being reset when entering an inventory station or the player respawned.</ListItem>
<ListItem>Fixed an issue with the Sentinel’s Drop Jammer where, in some cases, it would continue the jamming effect on players who were outside of the range. This fix also addresses teammates being unable to remain cloaked when in the Jammer’s range.</ListItem>
<ListItem>Fixed an issue where certain keys were unusable in adding Friends.</ListItem>
<ListItem>The in-game login screen (not the Hi-Command login) has gone through a first pass of changes, preparing for future updates both to the game and Hi-Command. Significant further changes are planned.</ListItem>
<ListItem>Player Summary scene set as default after finishing a match. Some elements of the previous default XP summary have been incorporated into the Player Summary for quick accessibility.</ListItem>
<ListItem>Social Panel renamed to Friends Panel on footer in Menus.</ListItem>
<ListItem>Various bug fixes and enhancements for the Classes Scene.</ListItem>
<ListItem>End of Match chat is now done through the new console (see Major Highlights)</ListItem>
<ListItem>Fixed a bug allowing users to change what others see when they issue VGS commands.</ListItem>
<ListItem>Some under-the-cover network changes have been implemented, in preparation for future changes.</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>After being votekicked out of a match, some clients may experience a hang that requires a game restart.</ListItem>
<ListItem>Stealth players may show a small effect while skiing.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.601.0 and Version 0.1.602.0</Title>

2011/12/08

<Title order={4}> Major Highlights</Title>
<List>
<ListItem>Bella Omega has been re-added to the CTF Map Rotation. Significant changes have occurred since the map was last available for play.</ListItem>
<ListItem>Vehicles have undergone a variety of improvements and cleanups.</ListItem>
<ListItem>A number of balance adjustments have been made. See additional notes below.</ListItem>
<ListItem>Token prices on several classes have changed.</ListItem>
<ListItem>Team Deathmatch default score moved to 100 from 75.</ListItem>
<ListItem>An early (still unpolished) preview of Spectator functionality is available for testing. See additional notes below.</ListItem>
<ListItem>Token gain from the “First Win of the Day” challenge has been doubled.</ListItem>
<ListItem>A variety of changes have been made to the in-match credits system.</ListItem>
<ListItem>Early versions of “Mute Player” and “Report Player” functionality have been added. See additional notes below.</ListItem>
<ListItem>Fixes to prevent some disconnects and server instability. Additional fixes planned for future patches.</ListItem>

Balance Items

<ListItem>The Raider’s NJ4 SMG damage has been reduced.</ListItem>
<ListItem>The Ranger’s Assault Rifle starting accuracy has been reduced.</ListItem>
<ListItem>Minimized projectile knockback from the Raider’s NJ4 SMG and Doombringer’s Chaingun.</ListItem>
<ListItem>Increase to explosion radius on Soldier’s Spinfusor, Pathfinder’s Light Spinfusor, Brute’s Heavy Spinfusor, Scrambler’s Arx Buster, Jumper’s Bolt Launcher, Ranger’s Thumper, Juggernaut’s Spinfusor D, and Juggernaut’s Fusion Mortar.</ListItem>
<ListItem>Modest increase to Projectile speeds on Soldier’s Spinfusor, Pathfinder’s Light Spinfusor, Brute’s Heavy Spinfusor, Juggernaut’s Spinfusor D, Scrambler’s Arx Buster, and Jumper’s Bolt Launcher.</ListItem>
<ListItem>Grav Cycle</ListItem>

  - Uses a new rocket pod weapon.
  - Can now be piloted by heavies, and carry heavies as passengers.
  - Top speed and after-burner boost have been increased.

<ListItem>Beowulf</ListItem>

  - Increased damage and rate of fire of secondary gunner position.
  - Gunner now has zoom, increased pitch limits, and increased firing rate.
  - Increased run-over damage.

<ListItem>Shrike</ListItem>

  - Yaw sensitivity has been increased.
  - Damage against ground and buildings is now more forgiving.
  - Credits are now awarded for damaging players, as well as for earning accolades. Credits awarded for Kills and Assists have been adjusted accordingly.

<ListItem>Tactical Strike and Orbital Strike now have a thirty second cooldown.</ListItem>
<ListItem>Tactical Strike Price Increased.</ListItem>
<ListItem>Orbital Strike Price Reduced.</ListItem>
<ListItem>Orbital Strike and Tactical Strike’s explosion shape extended upwards to encompass more area directly above the blasts.</ListItem>
<ListItem>Resolved issue causing the Jumper to lose speed while in the air.</ListItem>
<ListItem>Slightly decreased the effectiveness of the Jumper’s jumping while already at high speed, to favor transitioning to normal jetting after initial acceleration.</ListItem>

Spectator Early Preview

<ListItem>Work in progress, especially in the HUD and in the method you use to go into spectate mode (match slots, etc).</ListItem>
<ListItem>In console, type, ‘Spectate’ to enter spectate mode</ListItem>
<ListItem>In console, type, ‘EndSpectate’ to exit spectate mode</ListItem>
<ListItem>Keys may be changed in the Settings menu, at the bottom of the Keybindings list - Spectator keys are prefixed with “SPEC”</ListItem>
<ListItem>Default Keybindings:</ListItem>

  - Z: Show/Hide basic controls
  - X: Show/Hide HUD
  - Q: Move Down
  - E: Move Up
  - W/A/S/D: Move Forward, Left, Back, Right
  - Left Mouse: Next (default, next player)
  - Right Mouse: Previous (default, previous player)
  - Middle Mouse: Rove camera (free cam)
  - MouseWheel:

    - When in Rove Camera mode, move faster or slower
    - When viewing a target, zooms in and out

  - G: Hold and press Left Mouse or Right Mouse to view generators
  - F: Hold and press Left Mouse or Right Mouse to view flags
  - B: Hold and press Left Mouse or Right Mouse to view flag bases
  - Tab: Scoreboard

Muting and Reporting Players

<ListItem>Initial versions of these systems are now available. They are still in development, and currently can only be accessed via text entry. UI support is forthcoming.</ListItem>
<ListItem>Current Usage</ListItem>

  - Open the “say” chat interface (default key = “T”)
  - Enter a forward slash (“/”) followed by the command and the target player’s name.

<ListItem>Mute player: /mute playername (example: /mute Bob)</ListItem>

  - This prevents the muted player’s chat from showing up on your HUD.
  - The mute persists until you exit the game.
  - Should you wish to unmute a player, the command is “/unmute playername”

<ListItem>Report player: /report playername reason for report</ListItem>

  - Allows you to log a complaint against a player; please specify a reason for the report!

<Title order={4}> Additional Items</Title>
<List>
<ListItem>New first person hands now match your third person armor class/team style.</ListItem>
<ListItem>All Spinfusor muzzle flashes keep up with the player.</ListItem>
<ListItem>Adjusted all melee weapons position on screen.</ListItem>
<ListItem>Other additional weapon position adjustments.</ListItem>
<ListItem>New visuals treatment on the mounted turret for the Beowulf.</ListItem>
<ListItem>New visuals treatment on the projectiles for the Grav Cycle</ListItem>
<ListItem>Fixed an issue with the decal for mortar launchers looping instead of dissolving correctly.</ListItem>
<ListItem>Fixed an issue where the Doombringer’s Saber Launcher missile was not visible until it came closer to the victim.</ListItem>
<ListItem>Added a HUD element for dropped ammo packs to improve their visibility.</ListItem>
<ListItem>Team Deathmatch timer is now functional.</ListItem>
<ListItem>Fixed the Field of View exploit</ListItem>
<ListItem>Fixed an exploit where unused fire modes were being accessed on certain weapons.</ListItem>
<ListItem>Fixed a physics bug where jumping rapidly at high speeds would quickly accelerate the player to extremely fast speeds.</ListItem>
<ListItem>Various new accolades, including vehicle assists and last kill in Team Deathmatch.</ListItem>
<ListItem>Fixed some keybind issues, including keys used by left handed players.</ListItem>
<ListItem>Keys ‘1’ and ‘2’ now switch to primary and secondary weapons, respectively. ‘3’, ‘4’, and ‘5’ are defaulted to the current call-ins available.</ListItem>
<ListItem>Fixes the FOV bug introduced with this morning&apos;s patch.</ListItem>
<ListItem>Lowers the token price of Juggernaut, Pathfinder, Infiltrator and Technician.</ListItem>
<ListItem>Issues token credits to those that purchased at earlier rates.</ListItem>

<Divider my="xs" label="Known Issues" labelPosition="center" />

<ListItem>Beowulf’s secondary gunner particle effects are visible only to the player controlling the weapon.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.583.0</Title>

2011/12/01

Major Highlights since Version 0.1.562

<ListItem>The Team Deathmatch gametype is now available for play on two maps (Drydock Night and Crossfire). Upon the first death in the match, a flag will spawn. Your team earns a bonus for each kill made while the team holds the flag.</ListItem>
<ListItem>Added a “First Win of the Day” Challenge that rewards additional XP and tokens upon your first victory in a day. The &apos;day&apos; begins at 09:00 UTC time.</ListItem>
<ListItem>Added the “Orbital Strike” call-in (default bound to &apos;3&apos;). It is similar to the Tactical Strike, with a much wider radius and higher credit cost.</ListItem>
<ListItem>Reduced the token amounts required to unlock classes.</ListItem>
<ListItem>Settings: “Reduce Weapon Size” option has been added along with many others, including an option to disable help messages and an option to disable framerate smoothing.</ListItem>
<ListItem>Matchmaking: Very basic match-making segmentation to help lower ranked players play with lower-ranked players.</ListItem>
<ListItem>Fixed a number of bugs that caused sudden speed drops when skiing or jetting uphill. Other issues may remain. Please report as you find them.</ListItem>
<ListItem>By default, objective icons for all major elements on a map (generators, vehicle stations, equipment stations, etc) are now shown when you first enter a map. Hit &apos;O&apos; to turn off the markers.</ListItem>

Balance Changes

<ListItem>General: Increased both the time before health regeneration begins and the duration of the regeneration.</ListItem>
<ListItem>General: The credit reward for a kill assist has been increased.</ListItem>
<ListItem>Brute: The Fractal Grenade is now available for testing.</ListItem>
<ListItem>Brute: The Heavy Spinfusor now does more damage to vehicles and base turrets.</ListItem>
<ListItem>Doombringer: Minor improvements have been made to the missile tracking on the Saber Launcher.</ListItem>
<ListItem>Juggernaut: The Heavy AP Grenade’s damage to players has been increased.</ListItem>
<ListItem>Juggernaut: The Heavy AP Grenade’s damage to generators has been reduced.</ListItem>
<ListItem>Raider: The Grenade Launcher’s damage has been slightly reduced.</ListItem>
<ListItem>Ranger: The AP Grenade’s damage to players and generators has been reduced.</ListItem>
<ListItem>Survivalist Perk: Reduced the health and ammo gain to 20%, down from 35%.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Several crash fixes</ListItem>
<ListItem>Variety of modifications to existing CTF maps for balance and visuals.</ListItem>
<ListItem>Code was added to fix/prevent the “godmode” damage bug that sometimes occurs.</ListItem>
<ListItem>The loading screen has been updated to include map name, game rules, and various gameplay tips.</ListItem>
<ListItem>The Rabbit scoreboard has been improved.</ListItem>
<ListItem>The class screen now highlights the Pathfinder and Juggernaut classes (the least expensive) if you have not unlocked them.</ListItem>
<ListItem>Summary window may be closed at match end to allow for chatting and VGS use.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.562.0</Title>

2011/11/22

Major Highlights since Version 0.1.549
<List>
<ListItem>The Pathfinder and Juggernaut classes are now priced at half their previous price. Players that have previously unlocked these classes will be refunded the difference between the original purchase price and the new purchase price.</ListItem>
<ListItem>There are now separate server regions for “N. America - East” and “N. America - West.” Select your preferred server region on the Play Now screen, or set your overall system default under the settings menu.</ListItem>
<ListItem>DryDock has been re-added to the CTF playlist. The map has been better optimized for performance, although additional performance improvements are still pending.</ListItem>
<ListItem>CTF Scoreboard now includes Class and Rank of each player. The class is shown as a three-letter abbreviation.</ListItem>
<ListItem>Rabbit Scoreboard has been updated.</ListItem>
<ListItem>Maximum number of players in a rabbit match raised to 12 (from 8).</ListItem>
<ListItem>Lowered credit prices for vehicles: Beowulf is 3000 credits, Grav Cycle is 600 credits, and Shrike is 4500 credits.</ListItem>
<ListItem>Players may now use unlocked class Skills and Perks in Training maps.</ListItem>
<ListItem>Explosive Looter perk gives the ability to have an extra grenade in a player’s inventory if that grenade was acquired from an ammo pickup nugget.</ListItem>
<ListItem>Fixed Air Show and Wheel Deal perks not reporting reduced prices in the Vehicle Pad menu.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>Variety of improvements to the top-bar menu graphics.</ListItem>
<ListItem>Additional information is shown on the class icons on the Classes screen: how many skills unlocked, icon for when skills are available and ribbon to indicate new and promoted items.</ListItem>
<ListItem>Variety of other UI-related bug fixes, usability enhancements and performance improvements. More fixes and clean-ups will be coming in future patches.</ListItem>
<ListItem>In-game chat log has been re-written and should function well during heavy VGS flooding.</ListItem>
<ListItem>End of Game results in a “your team won/lost” message with your team icon.</ListItem>
<ListItem>Variety of audio/sound improvements and bug fixes</ListItem>
<ListItem>XP Summary screen has been sped up significantly and sound cues have been added.</ListItem>
<ListItem>&apos;Take the flag to your flag stand&apos; message now only appears when your team&apos;s flag is in the stand.</ListItem>
<ListItem>&apos;Take the flag to your flag stand&apos; message frequency has been moved from every nine seconds to every twenty seconds.</ListItem>
<ListItem>The Doombringer’s Force Field will no longer block shots when the generator is offline.</ListItem>
<ListItem>The legs in first-person are now hidden when zoomed.</ListItem>
<ListItem>Fixed issue in which team chat would persist for a user after they left a map instance.</ListItem>
<ListItem>Fixed issues with Doombringer&apos;s Saber Launcher not properly displaying missile notifications to vehicle passengers.</ListItem>
<ListItem>Fixed prompt text not showing for repair station. The location of some repair stations has been altered (across all maps).</ListItem>
<ListItem>Health effect sounds now stop playing when a match has ended.</ListItem>
<ListItem>The Jumper’s Thrust Pack contributes a lower amount of speed when used as the player’s speed increases.</ListItem>
<ListItem>Added the ability to boost the bass of certain sounds for users of headphones.</ListItem>
<ListItem>Fixed issue with weapons dry firing after using melee or throwing a grenade.</ListItem>
<ListItem>Players who have left and rejoined the same match will see their previously achieved accolades and awards along with new ones.</ListItem>
<ListItem>The Brute’s Heavy Spinfusor can now get the ‘Blue Plate Special’ accolade.</ListItem>
<ListItem>Skiing Tutorial re-added to the Training section on the Play Now screen.</ListItem>
<ListItem>Fixed Jumper’s Thrust Pack sound playing when the player dies.</ListItem>
<ListItem>Fixed Jetpack sounds not playing after getting into a vehicle.</ListItem>
<ListItem>Fixed an issue where zooming while reloading, then switching weapons, could leave the zoom overlay graphic enabled even though the player stopped zooming the actual view.</ListItem>
<ListItem>Visual changes to zoom on some weapons.</ListItem>
<ListItem>The Scrambler’s Whiteout Grenade no longer blinds friendly players, although it still will blind the instigator player.</ListItem>
</List>
<Divider my="xs" label="Known Issues" labelPosition="center" />
<List>
<ListItem>The N. America - East region is still shown as simply &apos;North America&apos;.</ListItem>
<ListItem>New settings options for Frame Rate Smoothing, Disable Help on Hud, Gamma and Bass Boost have been added to the settings screen, but are not yet functional.</ListItem>
<ListItem>The abbreviation for Sentinel is not showing up on the Scoreboard under class (it will show blank).</ListItem>
<ListItem>Rabbit in-match scoreboard overlaps the Chat Log.</ListItem>
<ListItem>Perk items are not always selecting the 2nd item reliably from the Classes Screen.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.549.0</Title>

2011/11/17

Major Highlights since Version 0.1.523
<List>
<ListItem>New CTF Map added to Free Servers rotation: Bella Omega. (Note that Dry Dock will be temporarily removed from the CTF rotation).</ListItem>
<ListItem>Several optimizations and fixes meant to help reduce system crashes, minimize “disconnects”, and improve overall performance. Further optimization is planned for future patches. Please report any issues you continue to have.</ListItem>
<ListItem>You can now test all classes (even those classes you do not yet own) in the single-player “Roaming Maps” on the Training menu.</ListItem>
<ListItem>The XP Summary screen at end of mission has been reworked to present information in a more useful way.</ListItem>
<ListItem>The Top Bar menu has undergone some changes. Further visual improvements are planned for an upcoming patch.</ListItem>
<ListItem>Added a new perk for Juggernaut. Super Heavy reduces knock-back effects from AOE blasts.</ListItem>
<ListItem>The separate VIP Queue has been removed. VIPs will continue to earn 50% bonus Tokens and XP by playing on the Free Servers. In a future patch, VIPs will also be able to vote on which map should be played next (between match rotations).</ListItem>
<ListItem>Major change to the way first person weapon textures are setup to save large amounts of memory. In this build you will see a quality loss and possibly strange behavior on your in hand weapons. This will be addressed in a future patch to bring these weapons back up to high quality.</ListItem>
<ListItem>Players who rejoin a match they have left or were disconnected from will have their kills, score, unspent credits, etc. all returned.</ListItem>
</List>
<Title order={4}> Additional Items</Title>
<List>
<ListItem>A variety of audio-related cleanups, optimizations, and fixes.</ListItem>
<ListItem>Variety of fixes and improvements to the Settings menu (more is planned).</ListItem>
<ListItem>Players can now bind separate keys for their primary and secondary weapons (versus only using the switch weapons key).</ListItem>
<ListItem>Decreased the cost on all vehicles (Shrike, Grav Cycle, Beowulf).</ListItem>
<ListItem>Increased jetpack initial acceleration.</ListItem>
<ListItem>Increased air control slightly across all armor types.</ListItem>
<ListItem>Various cleanups to the 3D model display on the class screen, eliminating some crash scenarios and visual anomalies.</ListItem>
<ListItem>End of Game results in a “Your Team Won/Loss” result instead of only announcing Diamond Sword or Blood Eagle as the winner.</ListItem>
<ListItem>End of Match Summary buttons have been moved into the Top Bar and the Last Match’s Summary Screens are always accessible after the match has ended.</ListItem>
<ListItem>Play button now shows “Exit Game” while in a match to avoid confusion.</ListItem>
<ListItem>Minor visual tweaks to the Play Now screen.</ListItem>
<ListItem>Flag Assist accolade added - all flag holders share a net credit amount roughly equal to 1000. Solo cappers still get 2000 total. Reworked default credit gain of capture to fit.</ListItem>
<ListItem>Modified the terrain on Katabatic for more balanced gameplay.</ListItem>
<ListItem>Fixed Grav Cycle jitter issues and applied proper visual feedback on yaw.</ListItem>
<ListItem>Fixed Grav Cycle passenger not being able to look up/down.</ListItem>
<ListItem>Fixed projectiles appearing to go through generators.</ListItem>
<ListItem>Fixed deployables not taking proper damage from bullet-projectiles.</ListItem>
<ListItem>Fixed dropped pickups sometimes giving players an additional weapon.</ListItem>
<ListItem>Fixed call-in Laser Targeter not being able to work on some objects.</ListItem>
<ListItem>Moved the location of the Base Radar Sensors on some maps so they aren’t as vulnerable as before.</ListItem>
<ListItem>Fix for Sentinel’s Drop Jammer deployables continuing to apply jamming effects on friendly and enemy players after its death.</ListItem>
<ListItem>Fix for sometimes seeing overhead carets for nearby enemies through walls when a sensor is not present.</ListItem>
<ListItem>Added a reminder message for when a player has a flag to help address reports of players not realizing or forgetting they held a flag in CTF. (NOTE: Further changes are planned for this to limit the number of messages receive we know that this initial treatment is a little annoying in some cases).</ListItem>
<ListItem>Fixed an exploit for Jumper’s Blink Pack where players could accelerate to high speeds with little-to-no energy cost.</ListItem>
<ListItem>Reduced Doombringer’s Chaingun damage by 13%.</ListItem>
<ListItem>Doombringer’s Saber Launcher now requires a full lock-on routine (targeting, then lock-on) even for the same target.</ListItem>
<ListItem>Doombringer’s Saber Launcher missile will lose the ability to perform tight turns when close enough to a victim and if it has passed the victim.</ListItem>
<ListItem>Fix for Doombringer&apos;s Chaingun not calculating ammo correctly if player picks up a dropped ammo nugget.</ListItem>
<ListItem>Fix for Doombringer&apos;s Chaingun not calculating ammo correctly if the ammo skill is applied to the class.</ListItem>
<ListItem>Fix for Doombringer&apos;s Chaingun not spinning up the barrel of the gun faster when the buildup time skill is applied.</ListItem>
<ListItem>AFK timeout at the team-select screen changed from 60 seconds to 180 seconds.</ListItem>
<ListItem>Fixed a bug with Juggernaut’s health regeneration rate and skills creating faster than desired regeneration.</ListItem>
<ListItem>Sentinel’s BXT1 rifle now has a new and improved scope (visual change only).</ListItem>
<ListItem>Sentinel’s BXT1 rifle now has an increased charge-time while jetpacking or skiing at high speed.</ListItem>
<ListItem>New scope on Sentinel’s BXT1 rifle. Please give feedback if you like/dislike.</ListItem>
<ListItem>Better messages when a user encounters errors on login.</ListItem>
<ListItem>Added a new accolade ‘Air Mail’ for midair kills with explosive weapons, akin to the ‘Blue Plate Special’.</ListItem>
</List>
<Divider my="xs" label="Known Issues" labelPosition="center" />
<List>
<ListItem>Ski Tutorial has been temporarily removed. It will be back soon.</ListItem>
<ListItem>The “you have the flag” message repeats at a rate that can be annoying in some situations. This will be fixed in a future patch.</ListItem>
<ListItem>Grav Cycle view for the riding passenger (1P & 3P) can still get in to a weird state under some conditions.</ListItem>
<ListItem>Accolades received before exiting and rejoining a match will not show in the Player Summary screen. They are being recorded but simply do not show at this time.</ListItem>
</List>
<Title order={3}> Tribes Closed Beta Version 0.1.523</Title>

2011/11/10

Major Highlights since Version 0.1.504
<List>
<ListItem>Removed speed cap. Implemented various falling, skiing, and jetpack physics changes.</ListItem>
<ListItem>Changes also include a variety of modifications to Skills to better fit into the new movement system. XP will be refunded for those skills that have been deprecated.</ListItem>
<ListItem>New Map added to Rabbit Rotation (Drydock Night Map) .</ListItem>
<ListItem>New Map added to CTF Rotation (Drydock Day Map) .</ListItem>
<ListItem>Variety of improvements to server stability and disconnects (may still be several issues outstanding please report them if you find them).</ListItem>
<ListItem>Variety of UI improvements and cleanups (most significantly to the death camera and to the Skills and Perks screens).</ListItem>
<ListItem>Large number of bug fixes.</ListItem>
</List>
<Title order={4}> Vehicles</Title>
<List>
<ListItem>Adjusted flag throwing physics to improve throwing in specific directions.</ListItem>
<ListItem>Players who leave or disconnect from a match will now receive XP and Tokens for their time in game, once that match has ended. [NOTE: Some issues remain if you are offline when the match you were in has ended. These are being researched and should be fixed in an upcoming patch].</ListItem>
<ListItem>VIP Experience now properly awarded to VIP players on Free Servers (while VIP Servers are not in function). Rank Experience is not increased by VIP or Boost anymore.</ListItem>
<ListItem>New tooltips for Skills and redesigned layout for the Skills popup window.</ListItem>
<ListItem>Added two-step process for selecting both class perks at the same time.</ListItem>
<ListItem>Added new death camera info box, displaying killer’s name, remaining health, class, rank, weapon used, and perks equipped.</ListItem>
<ListItem>Adjusted Light/Med/Heavy flight characteristics at high speeds.</ListItem>
<ListItem>Help text ignores are now properly saved.</ListItem>
<ListItem>Fix for zoom breaking if zoom was enabled while a player died (this only happened when the Toggle Zoom feature was enabled).</ListItem>
<ListItem>Support for “Borderless Window” option. Removes border from window (best use is to run at monitor’s full-screen resolution allows for faster Alt-Tabbing in and out of the game).</ListItem>
<ListItem>Picking up a repair tool from a repair station now replaces the player&apos;s currently equipped weapon rather than always replacing the secondary weapon.</ListItem>
<ListItem>When a player enters an inventory station, they begin health regen immediately.</ListItem>
<ListItem>Fixed hit indicator being on the opposite side for the back side hits.</ListItem>
<ListItem>Fixed mipping issues on many hand models as well as the spinfusor and sniper rifle</ListItem>
<ListItem>Separated input release time and animation time from inventory stations.</ListItem>
<ListItem>Fixed bug with call-in cooldown not behaving properly.</ListItem>
<ListItem>Added the syncing of PID-loop state between client/server for Shrike. This should lower server correction and possibly eliminate the “death blossom.”</ListItem>
<ListItem>Allow re-selections of Perks that player has already assigned to a character.</ListItem>
<ListItem>Fixed bugs with wrong pop-up windows, lost button events and wrong buttons visible in different states.</ListItem>
<ListItem>Store redirects to purchase gold from store when not enough gold on player to purchase classes.</ListItem>
<ListItem>Fixed an issue where context help messages would not disappear if the player died near an object showing help text.</ListItem>
<ListItem>Fixed an issue where the health regen effect would cancel the Jammer Pack effect.</ListItem>
<ListItem>Fixed an issue where certain spots in certain maps would catapult a player at incredible speeds if the player flew into it a specific place.</ListItem>
<ListItem>Pressing weapon swap when the current weapon is the Laser Targeter will revert to the previously used weapon rather than always choosing the secondary weapon.</ListItem>
<ListItem>Fixed an issue where turrets could be deployed off the ground and float in air in certain circumstances.</ListItem>
<ListItem>Fixed an issue where a turret&apos;s rotation could be incorrect after being deployed.</ListItem>
<ListItem>Fixed an issue where the death camera would not reset its view target and would keep showing the last killer even if the player suicided.</ListItem>
<ListItem>Added third person animation set to better represent SMG weapons.</ListItem>
<ListItem>Update to death camera for turrets and suicide.</ListItem>
<ListItem>Consolidated Class Ratings concerning movement into “Mobility” rating.</ListItem>
<ListItem>More descriptive class loadouts on Class Screen.</ListItem>
<ListItem>Players will only receive the VIP Unlock message once.</ListItem>
<ListItem>Moved bolt launcher first person model down to avoid arm clipping into screen.</ListItem>
<ListItem>Fixed issue where the Chaingun was not correctly reporting ammo counts after picking up a dropped ammo pickup.</ListItem>
<ListItem>Fixed issue where base sensors were not detecting enemies correctly in certain situations.</ListItem>
<ListItem>Fixed player health bars not updating their max percentage correctly due to skills and the Determination perk.</ListItem>
<ListItem>Fixed not being able to rebind the ‘c’ key.</ListItem>
<ListItem>Fixed the issue in Katabatic where there was an invisible wall on either side of the generator in the Blood Eagle base.</ListItem>
<ListItem>Fixed issue with BXT1 Clip size skill applying to the Nova Blaster.</ListItem>
<ListItem>Fixed issue with minimum deploy distance between Force Fields not being correct.</ListItem>
<ListItem>Fixed post process effects persisting to the main menu when disconnected from a match</ListItem>
<ListItem>Added all new perk icons for HUD and menus. descriptive tool tips, with information on how to unlock each.</ListItem>
<ListItem>Added rollover tooltips for perk icons on “potential perks” as well as selected slots on the class screen.</ListItem>
<ListItem>Fixed Fonts on tooltips for dynamic text fields.</ListItem>
<ListItem>Fixed Flickering on Perk Icons, added new Icons for additional perks.</ListItem>
<ListItem>Fixed issue where the character at the class screen would sometimes jitter violently when the death camera was following a vehicle.</ListItem>
<ListItem>VGS commands should now properly play audio on all headphones.</ListItem>
<ListItem>New Accolade icons for base destruction and repairs.</ListItem>
</List>
</div>
    </>
  );
}
