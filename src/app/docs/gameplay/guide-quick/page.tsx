"use client";
import Link from "next/link";
import { Table, Title, Button, Code } from "@mantine/core";

const tableData = {
  head: ["Term", "Meaning"],
  body: [
    ["PUG", "Pick-up Game"],
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
    ["Return", "Return the Flag"],
    ["HOF", "Heavy on Flag"],
    ["LD", "Light Defense"],
    ["MD", "Medium Defense"],
    ["O", "Offense"],
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
    ],
  ],
};

export default function QuickPUGGuide() {
  return (
    <>
      <div className=" lg:2-24 mx-auto flex max-w-6xl flex-col justify-center gap-12 p-8 md:p-16 xl:p-32">
        <Title>Playing PUGs - 7v7 Format</Title>
        <div>
          <p>
            <Code>Pick-up Games</Code> are a semi-competitive 7v7 format.
            Pick-up games will use VoIP software such as Mumble or Discord.
          </p>
          <p>
            Each team runs 4 <Code>offense</Code> and 3 <Code>defense</Code>.
          </p>
          <p>
            Generally speaking, the <Code>defense</Code> consists of a
            <Code>HOF,</Code> a <Code>light defense</Code>/
            <Code>medium defense,</Code> and a <Code>sniper.</Code>
          </p>
          <p>
            <Code>Offense</Code> have two recommended setups:
          </p>
          <ul className="list-inside list-disc">
            <li>
              3 <Code>offense</Code> members and a <Code>capper</Code> with one
              <Code>offense</Code> member going after the enemy
              <Code>Sniper</Code>
            </li>
            <li>
              2 <Code>offense</Code> members and 2 <Code>cappers</Code>
            </li>
          </ul>
          <p>
            <Code>Defense</Code> goes <Code>defense</Code> during
            <Code>stand-offs</Code> and <Code>offense</Code> goes
            <Code>offense</Code> during <Code>stand-offs.</Code>
          </p>
          <Title order={3}>Recommendations</Title>
          <p>
            These are PUG-specific recommendations to make the game more
            enjoyable for everyone involved. These are not rules but a list of
            recommendations to improve the flow and make you a more effective
            member of your team.
          </p>
          <ul className="list-inside list-disc">
            <li>
              If both flags are home, if you are an <Code>offense</Code> member
              or a <Code>capper,</Code> there is little to no gain in
              killing/shooting enemy <Code>offense.</Code> If
              <Code>defense</Code> is struggling, spotting enemy
              <Code>capper</Code> is substantially more beneficial.
            </li>
            <li>
              Running 4+ <Code>defense</Code> members generally makes games slow
              for both teams.
            </li>
            <li>
              Try to run a <Code>capper</Code> that does not warp.
            </li>
          </ul>
        </div>
        <Title order={2}>Offense</Title>
        <div>
          <Button component={Link} href="/docs/gameplay/guide-offense">
            Offense Guide
          </Button>
          <Title order={3}>Major Responsibilities</Title>
          <ul className="list-inside list-disc">
            <li>
              Kill the enemy <Code>heavy on flag</Code> and enemy
              <Code>light defense</Code> <Code>5 seconds</Code> before your
              <Code>capper</Code> will grab.
            </li>
            <li>
              Put pressure on the enemy <Code>Sniper</Code> to prevent them from
              killing your <Code>capper</Code> pre-grab and post-grab.
              Generally, only 1 <Code>offense</Code> member does this only if
              your team is running 1 <Code>capper.</Code>
            </li>
            <li>
              <Code>E-Grab</Code> when the <Code>defense</Code> calls for it.
              <Title order={3}>Minor Responsibilities</Title>
            </li>
            <li>
              <kbd>K</kbd>-Out and meet your capper after they grab.
            </li>
            <li>
              Hit the enemy stand at the same time as other
              <Code>offense</Code> members, aim for when your
              <Code>capper</Code> would be <Code>15 seconds</Code> out.
            </li>
            <li>
              Spot enemy <Code>cappers</Code> and enemy <Code>offense.</Code>
              This assists your <Code>defense</Code> better than you shooting
              the enemy `offense.
            </li>
            <li>
              <Code>Walk</Code> flags with your other <Code>offense</Code>
              members.
            </li>
          </ul>
        </div>
        <Title order={2}>Heavy on Flag</Title>
        <div>
          <Button component={Link} href="/docs/gameplay/guide-hof">
            Heavy on Flag Guide
          </Button>
          <Title order={3}>Major Responsibilities</Title>
          <ul className="list-inside list-disc">
            <li>
              Stop the enemy <Code>capper.</Code>
            </li>
            <li>
              Stop enemy <Code>walks.</Code>
              <Title order={3}>Minor Responsibilities</Title>
            </li>
            <li>Be ready to stop unspotted/out of time grabs.</li>
            <li>
              Work with the <Code>light defense</Code> to get kills on enemy
              <Code>offense</Code> without overextending yourself.
            </li>
            <li>
              Only leave the stand during a <Code>stand-off.</Code>
            </li>
            <li>Avoid being shot if possible.</li>
          </ul>
        </div>
        <Title order={2}>Light/Medium Defense</Title>
        <div>
          <Button component={Link} href="/docs/gameplay/guide-defense">
            Light/Medium Defense Guide
          </Button>
          <Title order={3}>Major Responsibilities</Title>
          <ul className="list-inside list-disc">
            <li>
              Kill enemy the <Code>offense</Code> members.
            </li>
            <li>Return flags.</li>
            <li>
              Call out for <Code>E-Grabs</Code>
              <Title order={3}>Minor Responsibilities</Title>
            </li>
            <li>
              Work with the <Code>Sniper</Code>
            </li>
            <li>
              Call out enemy <Code>offense</Code> you are shooting so the
              <Code>Sniper</Code> and <Code>heavy on flag</Code> know who to
              shoot.
            </li>
            <li>
              If the enemy <Code>capper</Code> has recently died, assist any
              walks your <Code>offense</Code> may be doing or meet your
              <Code>capper.</Code>
            </li>
          </ul>
        </div>
        <Title order={2}>Sniper</Title>
        <div>
          <Button component={Link} href="/docs/gameplay/guide-snipe">
            Sniper Guide
          </Button>
          <Title order={3}>Major Responsibilities</Title>
          <ul className="list-inside list-disc">
            <li>
              Spot/kill the enemy <Code>capper</Code> at all times.
            </li>
            <li>Call out a time and direction the enemy cap will be.</li>
            <li>
              Call out for <Code>E-Grabs</Code>
            </li>
            <li>
              Snipe the enemy <Code>offense</Code> which your
              <Code>light defense</Code> and <Code>heavy on flag</Code> are
              fighting or during any walk attempts.
              <Title order={3}>Minor Responsibilities</Title>
            </li>
            <li>
              Call out enemy <Code>offense</Code> locations.
            </li>
            <li>
              Assist <Code>heavy on flag</Code> with clearing your base if
              over-run after an enemy has grabbed.
            </li>
            <li>
              Avoid enemy <Code>offense</Code> members.
            </li>
            <li>
              Snipe the enemy chaser if your <Code>capper</Code> is out.
            </li>
          </ul>
        </div>
        <Title order={2}>Capper</Title>
        <p>
          <Button component={Link} href="/docs/gameplay/guide-cap">
            Capper Guide
          </Button>
        </p>
        <Title order={3}>Major Responsibilities</Title>
        <ul className="list-inside list-disc">
          <li>Grab and capture the enemy flag.</li>
          <li>
            Communicate times on your route for your <Code>offense</Code>
            members.
            <Title order={3}>Minor Responsibilities</Title>
          </li>
          <li>
            Meet your <Code>offense</Code> if they decide to <Code>Walk</Code>
            the flag.
          </li>
          <li>
            Wait in case your <Code>offense</Code> needs more time to get to the
            stand.
          </li>
        </ul>
        <Title order={2}>Stand-Offs</Title>
        <ul className="list-inside list-disc">
          <li>
            <Code>Offense</Code> stays on <Code>offense.</Code>
          </li>
          <li>
            <Code>Defense</Code> stays on <Code>defense.</Code>
          </li>
          <li>
            It is more beneficial for your team to promptly go
            <Code>offense</Code> while your team has three members already on
            <Code>defense.</Code>
          </li>
          <li>
            <Code>Defense</Code> generally picks the medium class for
            maneuverability. Having a heavy can be effective as well.
          </li>
          <li>
            Stay near your spawns as <Code>defense.</Code>
          </li>
          <li>
            Various class compositions amongst <Code>offense</Code> each have
            their benefits and drawbacks. Running 3+ light classes on
            <Code>offense</Code> can be shut down while a broad spectrum of
            classes can be effective.
          </li>
          <li>
            <Code>Offense</Code> should coordinate times for hitting the enemy
            <Code>defense</Code> together. The game timer is effective at
            coordinating a time to attack.
          </li>
        </ul>
        <Title order={2}>Loadout Setup</Title>
        <p>
          For all classes except for the <Code>sniper,</Code> it is considered
          optimal to run at least one explosive/timed weapon and at least one
          chain/hit-scan weapon.
        </p>
        <p>
          In a <Code>community server,</Code> you must be a verified user for
          your Loadouts to save.
        </p>
        <Title id="glossary" order={2}>
          Glossary
        </Title>
        <Table cellPadding={6} data={tableData} />
      </div>
    </>
  );
}
