import Head from "next/head";
import Link from "next/link";
import { Metadata } from "next";
import { Divider, Card, Text, Grid, Table } from "@mantine/core";
const tableData = {
  caption: "Glossary",
  head: ["Term", "Meaning"],
  body: [[
    "PUG",
    "Pick-up Game",
  ],
  [
    "E-Grab",
    `E-Grab stands for an emergency grab. A player says this to communicate that the team requires a grab of the 
      enemy flag to prevent the enemy from capturing your flag. Players should prioritize this action immediately.`,
  ],
  [
    "K-Out/Reset",
      "Use the suicide key K to reset and respawn immediately. Usually used to make an offense member time up with their capper and other offense members.",
  ],
  [
    "Crash",
      "Try to emergency grab/attack the enemy as soon as possible for a return",
  ],
  [
    "Walk",
      "This term is used for when an offense member grabs the flag in an attempt to take it home rather than a capper",
  ],
  [
    "Return",
    "Return the Flag",
  ],
  [
    "HOF",
    "Heavy on Flag",
  ],
  [
    "LD",
    "Light Defense",
  ],
  [
    "MD",
    "Medium Defense",
  ],
  [
    "O",
    "Offense",
  ],
  [
    "Stand-Off",
      "A stand-Off game state occurs when both teams have the enemy flag secure at their side of the field",
  ],
  [
    "D-Stack",
    "Defensive Stack. When a team runs more than 3 defense members",
  ],
  [
    "Figit",
      "When an offense member chases and attempts to kill another offense member when both flags are home.",
  ],
  [
    "Spot",
      "Spot is a term used to mark where an enemy is. Use the left Alt key in-game adds a visual indicator where the player was for the rest of your team.",
  ],]
};

export const metadata: Metadata = {
  title: "Playing PUGs | Dodges Domain",
  description: "Dodges Domain, the output of his small brain.",
};

export default function QuickPUGGuide() {
  return (
    <>
      <div className=" lg:2-24 mx-auto flex w-[100%] flex-col justify-center gap-12 p-8 md:p-16 xl:p-32">
        <Divider size="sm" label="Playing PUGs - 7v7 Format"/>
        <Card>
          <p>
            <code>Pick-up Games</code> are a semi-competitive 7v7 format.
            Pick-up games will use VoIP software such as Mumble or Discord.
          </p>
          <p>
            Each team runs 4 <code>offense</code> and 3 <code>defense</code>.
          </p>
          <p>
            Generally speaking, the <code>defense</code> consists of a
            <code>HOF,</code> a <code>light defense</code>/
            <code>medium defense,</code> and a <code>sniper.</code>
          </p>
          <p>
            <code>Offense</code> have two recommended setups:
          </p>
          <ul className="list-inside list-disc">
            <li>
              3 <code>offense</code> members and a <code>capper</code> with one
              <code>offense</code> member going after the enemy
              <code>Sniper</code>
            </li>
            <li>
              2 <code>offense</code> members and 2 <code>cappers</code>
            </li>
          </ul>
          <p>
            <code>Defense</code> goes <code>defense</code> during
            <code>stand-offs</code> and <code>offense</code> goes
            <code>offense</code> during <code>stand-offs.</code>
          </p>
          <Divider size="sm" label="Recommendations"/>
          <p>
            These are PUG-specific recommendations to make the game more
            enjoyable for everyone involved. These are not rules but a list of
            recommendations to improve the flow and make you a more effective
            member of your team.
          </p>
          <ul className="list-inside list-disc">
            <li>
              If both flags are home, if you are an <code>offense</code> member
              or a <code>capper,</code> there is little to no gain in
              killing/shooting enemy <code>offense.</code> If
              <code>defense</code> is struggling, spotting enemy
              <code>capper</code> is substantially more beneficial.
            </li>
            <li>
              Running 4+ <code>defense</code> members generally makes games slow
              for both teams.
            </li>
            <li>
              Try to run a <code>capper</code> that does not warp.
            </li>
          </ul>
        </Card>
        <Divider size="sm" label="Offense"/>
        <Card>
          <Link href="/docs/gameplay/guide-offense">Offense Guide</Link>
          <Divider size="sm" label="Major Responsibilities"/>
          <ul className="list-inside list-disc">
            <li>
              Kill the enemy <code>heavy on flag</code> and enemy
              <code>light defense</code> <code>5 seconds</code> before your
              <code>capper</code> will grab.
            </li>
            <li>
              Put pressure on the enemy <code>Sniper</code> to prevent them from
              killing your <code>capper</code> pre-grab and post-grab.
              Generally, only 1 <code>offense</code> member does this only if
              your team is running 1 <code>capper.</code>
            </li>
            <li>
              <code>E-Grab</code> when the <code>defense</code> calls for it.
              <Divider size="sm" label="Minor Responsibilities"/>
            </li>
            <li>
              <kbd>K</kbd>-Out and meet your capper after they grab.
            </li>
            <li>
              Hit the enemy stand at the same time as other
              <code>offense</code> members, aim for when your
              <code>capper</code> would be <code>15 seconds</code> out.
            </li>
            <li>
              Spot enemy <code>cappers</code> and enemy <code>offense.</code>
              This assists your <code>defense</code> better than you shooting
              the enemy `offense.
            </li>
            <li>
              <code>Walk</code> flags with your other <code>offense</code>
              members.
            </li>
          </ul>
        </Card>
        <Divider size="sm" label="Heavy on Flag"/>
        <Card>
          <Link href="/docs/gameplay/guide-hof">Heavy on Flag Guide</Link>
          <Divider size="sm" label="Major Responsibilities"/>
          <ul className="list-inside list-disc">
            <li>
              Stop the enemy <code>capper.</code>
            </li>
            <li>
              Stop enemy <code>walks.</code>
              <Divider size="sm" label="Minor Responsibilities"/>
            </li>
            <li>Be ready to stop unspotted/out of time grabs.</li>
            <li>
              Work with the <code>light defense</code> to get kills on enemy
              <code>offense</code> without overextending yourself.
            </li>
            <li>
              Only leave the stand during a <code>stand-off.</code>
            </li>
            <li>Avoid being shot if possible.</li>
          </ul>
        </Card>
        <Divider size="sm" label="Light/Medium Defense"/>
        <Card>
          <Link href="/docs/gameplay/guide-defense">
            Light/Medium Defense Guide
          </Link>
          <Divider size="sm" label="Major Responsibilities"/>
          <ul className="list-inside list-disc">
            <li>
              Kill enemy the <code>offense</code> members.
            </li>
            <li>Return flags.</li>
            <li>
              Call out for <code>E-Grabs</code>
              <Divider size="sm" label="Minor Responsibilities"/>
            </li>
            <li>
              Work with the <code>Sniper</code>
            </li>
            <li>
              Call out enemy <code>offense</code> you are shooting so the
              <code>Sniper</code> and <code>heavy on flag</code> know who to
              shoot.
            </li>
            <li>
              If the enemy <code>capper</code> has recently died, assist any
              walks your <code>offense</code> may be doing or meet your
              <code>capper.</code>
            </li>
          </ul>
        </Card>
        <Divider size="sm" label="Sniper"/>
        <Link href="/docs/gameplay/guide-snipe">Sniper Guide</Link>
        <Divider size="sm" label="Major Responsibilities"/>
        <ul className="list-inside list-disc">
          <li>
            Spot/kill the enemy <code>capper</code> at all times.
          </li>
          <li>Call out a time and direction the enemy cap will be.</li>
          <li>
            Call out for <code>E-Grabs</code>
          </li>
          <li>
            Snipe the enemy <code>offense</code> which your
            <code>light defense</code> and <code>heavy on flag</code> are
            fighting or during any walk attempts.
            <Divider size="sm" label="Minor Responsibilities"/>
          </li>
          <li>
            Call out enemy <code>offense</code> locations.
          </li>
          <li>
            Assist <code>heavy on flag</code> with clearing your base if
            over-run after an enemy has grabbed.
          </li>
          <li>
            Avoid enemy <code>offense</code> members.
          </li>
          <li>
            Snipe the enemy chaser if your <code>capper</code> is out.
          </li>
        </ul>
        <Divider size="sm" label="Capper"/>
        <p>
          <Link href="/docs/gameplay/guide-cap">Capper Guide</Link>
        </p>
        <Divider size="sm" label="Major Responsibilities"/>
        <ul className="list-inside list-disc">
          <li>Grab and capture the enemy flag.</li>
          <li>
            Communicate times on your route for your <code>offense</code>
            members.<Divider size="sm" label="Minor Responsibilities"/>
          </li>
          <li>
            Meet your <code>offense</code> if they decide to <code>Walk</code>
            the flag.
          </li>
          <li>
            Wait in case your <code>offense</code> needs more time to get to the
            stand.
          </li>
        </ul>
        <Divider size="sm" label="Stand-Offs"/>
        <ul className="list-inside list-disc">
          <li>
            <code>Offense</code> stays on <code>offense.</code>
          </li>
          <li>
            <code>Defense</code> stays on <code>defense.</code>
          </li>
          <li>
            It is more beneficial for your team to promptly go
            <code>offense</code> while your team has three members already on
            <code>defense.</code>
          </li>
          <li>
            <code>Defense</code> generally picks the medium class for
            maneuverability. Having a heavy can be effective as well.
          </li>
          <li>
            Stay near your spawns as <code>defense.</code>
          </li>
          <li>
            Various class compositions amongst <code>offense</code> each have
            their benefits and drawbacks. Running 3+ light classes on
            <code>offense</code> can be shut down while a broad spectrum of
            classes can be effective.
          </li>
          <li>
            <code>Offense</code> should coordinate times for hitting the enemy
            <code>defense</code> together. The game timer is effective at
            coordinating a time to attack.
          </li>
        </ul>
        <Divider size="sm" label="Loadout Setup"/>
        <p>
          For all classes except for the <code>sniper,</code> it is considered
          optimal to run at least one explosive/timed weapon and at least one
          chain/hit-scan weapon.
        </p>
        <p>
          In a <code>community server,</code> you must be a verified user for
          your Loadouts to save.
        </p>
        <Table cellPadding={6} data={tableData} />
      </div>
    </>
  );
}
