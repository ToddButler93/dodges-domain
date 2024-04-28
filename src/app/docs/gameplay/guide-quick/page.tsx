"use client";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
// import { Table } from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
// TODO
// const tableData = {
//   head: ["Term", "Meaning"],
//   body: [
//     ["PUG", "Pick-up Game"],
//     [
//       "E-Grab",
//       `E-Grab stands for an emergency grab. A player says this to communicate that the team requires a grab of the
//       enemy flag to prevent the enemy from capturing your flag. Players should prioritize this action immediately.`,
//     ],
//     [
//       "K-Out/Reset",
//       "Use the suicide key K to reset and respawn immediately. Usually used to make an offense member time up with their capper and other offense members.",
//     ],
//     [
//       "Crash",
//       "Try to emergency grab/attack the enemy as soon as possible for a return",
//     ],
//     [
//       "Walk",
//       "This term is used for when an offense member grabs the flag in an attempt to take it home rather than a capper",
//     ],
//     ["Return", "Return the Flag"],
//     ["HOF", "Heavy on Flag"],
//     ["LD", "Light Defense"],
//     ["MD", "Medium Defense"],
//     ["O", "Offense"],
//     [
//       "Stand-Off",
//       "A stand-Off game state occurs when both teams have the enemy flag secure at their side of the field",
//     ],
//     [
//       "D-Stack",
//       "Defensive Stack. When a team runs more than 3 defense members",
//     ],
//     [
//       "Figit",
//       "When an offense member chases and attempts to kill another offense member when both flags are home.",
//     ],
//     [
//       "Spot",
//       "Spot is a term used to mark where an enemy is. Use the left Alt key in-game adds a visual indicator where the player was for the rest of your team.",
//     ],
//   ],
// };

export default function QuickPUGGuide() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow py-6 text-center">
          <h1>Tribes Ascend Quick PUG Guide</h1>
        </Card>
        <Suspense>
          <Tabs defaultValue="pugs" className="flex flex-row">
            <TabsList className="flex flex-col items-start justify-start py-6 dark:bg-zinc-800 dark:text-zinc-100">
              <TabsTrigger value="pugs">PUG Information </TabsTrigger>
              <TabsTrigger value="offense">Offense </TabsTrigger>
              <TabsTrigger value="capping">Capping </TabsTrigger>
              <TabsTrigger value="hof">Heavy on Flag </TabsTrigger>
              <TabsTrigger value="defense">Defense </TabsTrigger>
              <TabsTrigger value="sniping">Sniping </TabsTrigger>
              <TabsTrigger value="standoffs">Stand Offs </TabsTrigger>
              <TabsTrigger value="glossary">Glossary </TabsTrigger>
            </TabsList>
            <TabsContent value="pugs" className="flex flex-col gap-3 ps-6">
              <h1>Playing PUGs - 7v7 Format</h1>
              <div className="flex flex-col gap-3">
                <p>
                  <b>Pick-up Games</b> are a semi-competitive 7v7 format.
                  Pick-up games will use VoIP software such as Mumble or
                  Discord.
                </p>
                <p>
                  Each team runs 4 <b>offense</b> and 3 <b>defense</b>.
                </p>
                <p>
                  Generally speaking, the <b>defense</b> consists of a{" "}
                  <b>HOF,</b> a <b>light defense</b>/<b>medium defense,</b> and
                  a <b>sniper.</b>
                </p>
                <p>
                  <b>Offense</b> have two recommended setups:
                </p>
                <ul className="list-disc p-3">
                  <li>
                    3 <b>offense</b> members and a <b>capper</b> with one{" "}
                    <b>offense</b> member going after the enemy <b>Sniper</b>
                  </li>
                  <li>
                    2 <b>offense</b> members and 2 <b>cappers</b>
                  </li>
                </ul>
                <p>
                  <b>Defense</b> goes <b>defense</b> during <b>stand-offs</b>{" "}
                  and <b>offense</b> goes <b>offense</b> during{" "}
                  <b>stand-offs.</b>
                </p>
                <h3>Recommendations</h3>
                <p>
                  These are PUG-specific recommendations to make the game more
                  enjoyable for everyone involved. These are not rules but a
                  list of recommendations to improve the flow and make you a
                  more effective member of your team.
                </p>
                <ul className="list-disc p-3">
                  <li>
                    If both flags are home, if you are an <b>offense</b> member
                    or a <b>capper,</b> there is little to no gain in
                    killing/shooting enemy <b>offense.</b> If <b>defense</b> is
                    struggling, spotting enemy <b>capper</b> is substantially
                    more beneficial.
                  </li>
                  <li>
                    Running 4+ <b>defense</b> members generally makes games slow
                    for both teams.
                  </li>
                  <li>
                    Try to run a <b>capper</b> that does not warp.
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="offense" className="flex flex-col gap-3 ps-6">
              <h2>Offense</h2>
              <div className="flex flex-col gap-3">
                <Button>
                  <Link href="/docs/gameplay/guide-offense">Offense Guide</Link>
                </Button>
                <h3>Major Responsibilities</h3>
                <ul className="list-disc p-3">
                  <li>
                    Kill the enemy <b>heavy on flag</b> and enemy
                    <b>light defense</b> <b>5 seconds</b> before your
                    <b>capper</b> will grab.
                  </li>
                  <li>
                    Put pressure on the enemy <b>Sniper</b> to prevent them from
                    killing your <b>capper</b> pre-grab and post-grab.
                    Generally, only 1 <b>offense</b> member does this only if
                    your team is running 1 <b>capper.</b>
                  </li>
                  <li>
                    <b>E-Grab</b> when the <b>defense</b> calls for it.
                  </li>
                </ul>
                <h3>Minor Responsibilities</h3>
                <ul className="list-disc p-3">
                  <li>
                    <kbd>K</kbd>-Out and meet your capper after they grab.
                  </li>
                  <li>
                    Hit the enemy stand at the same time as other
                    <b>offense</b> members, aim for when your
                    <b>capper</b> would be <b>15 seconds</b> out.
                  </li>
                  <li>
                    Spot enemy <b>cappers</b> and enemy <b>offense.</b>
                    This assists your <b>defense</b> better than you shooting
                    the enemy `offense.
                  </li>
                  <li>
                    <b>Walk</b> flags with your other <b>offense</b>
                    members.
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="hof" className="flex flex-col gap-3 ps-6">
              <h2>Heavy on Flag</h2>
              <div className="flex flex-col gap-3">
                {/* <Button asChild>
                    <Link href="/docs/gameplay/guide-hof">
                      Heavy on Flag Guide
                    </Link>
                  </Button> */}
                <h3>Major Responsibilities</h3>
                <ul className="list-disc p-3">
                  <li>
                    Stop the enemy <b>capper.</b>
                  </li>
                  <li>
                    Stop enemy <b>walks.</b>
                  </li>
                </ul>
                <h3>Minor Responsibilities</h3>
                <ul className="list-disc p-3">
                  <li>Be ready to stop unspotted/out of time grabs.</li>
                  <li>
                    Work with the <b>light defense</b> to get kills on enemy
                    <b>offense</b> without overextending yourself.
                  </li>
                  <li>
                    Only leave the stand during a <b>stand-off.</b>
                  </li>
                  <li>Avoid being shot if possible.</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="defense" className="flex flex-col gap-3 ps-6">
              <h2>Light/Medium Defense</h2>
              <div className="flex flex-col gap-3">
                {/* <Button>
                    <Link href="/docs/gameplay/guide-defense">
                      Light/Medium Defense Guide
                    </Link>
                  </Button> */}
                <h3>Major Responsibilities</h3>
                <ul className="list-disc p-3">
                  <li>
                    Kill enemy the <b>offense</b> members.
                  </li>
                  <li>Return flags.</li>
                  <li>
                    Call out for <b>E-Grabs</b>
                  </li>
                </ul>
                <h3>Minor Responsibilities</h3>
                <ul className="list-disc p-3">
                  <li>
                    Work with the <b>Sniper</b>
                  </li>
                  <li>
                    Call out enemy <b>offense</b> you are shooting so the
                    <b>Sniper</b> and <b>heavy on flag</b> know who to shoot.
                  </li>
                  <li>
                    If the enemy <b>capper</b> has recently died, assist any
                    walks your <b>offense</b> may be doing or meet your
                    <b>capper.</b>
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="sniping" className="flex flex-col gap-3 ps-6">
              <h2>Sniper</h2>
              <div className="flex flex-col gap-3">
                {/* <Button asChild>
                    <Link href="/docs/gameplay/guide-snipe">Sniper Guide</Link>
                  </Button> */}
                <h3>Major Responsibilities</h3>
                <ul className="list-disc p-3">
                  <li>
                    Spot/kill the enemy <b>capper</b> at all times.
                  </li>
                  <li>Call out a time and direction the enemy cap will be.</li>
                  <li>
                    Call out for <b>E-Grabs</b>
                  </li>
                  <li>
                    Snipe the enemy <b>offense</b> which your
                    <b>light defense</b> and <b>heavy on flag</b> are fighting
                    or during any walk attempts.
                  </li>
                </ul>
                <h3>Minor Responsibilities</h3>
                <ul className="list-disc p-3">
                  <li>
                    Call out enemy <b>offense</b> locations.
                  </li>
                  <li>
                    Assist <b>heavy on flag</b> with clearing your base if
                    over-run after an enemy has grabbed.
                  </li>
                  <li>
                    Avoid enemy <b>offense</b> members.
                  </li>
                  <li>
                    Snipe the enemy chaser if your <b>capper</b> is out.
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="capping" className="flex flex-col gap-3 ps-6">
              <h2>Capper</h2>
              <Button>
                <Link href="/docs/gameplay/guide-cap">Capper Guide</Link>
              </Button>
              <h3>Major Responsibilities</h3>
              <ul className="list-disc p-3">
                <li>Grab and capture the enemy flag.</li>
                <li>
                  Communicate times on your route for your <b>offense</b>{" "}
                  members.
                </li>
              </ul>
              <h3>Minor Responsibilities</h3>
              <ul className="list-disc p-3">
                <li>
                  Meet your <b>offense</b> if they decide to <b>Walk</b> the
                  flag.
                </li>
                <li>
                  Wait in case your <b>offense</b> needs more time to get to the
                  stand.
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="standoffs" className="flex flex-col gap-3 ps-6">
              <h2>Stand-Offs</h2>
              <ul className="list-disc p-3">
                <li>
                  <b>Offense</b> stays on <b>offense.</b>
                </li>
                <li>
                  <b>Defense</b> stays on <b>defense.</b>
                </li>
                <li>
                  It is more beneficial for your team to promptly go
                  <b>offense</b> while your team has three members already on
                  <b>defense.</b>
                </li>
                <li>
                  <b>Defense</b> generally picks the medium class for
                  maneuverability. Having a heavy can be effective as well.
                </li>
                <li>
                  Stay near your spawns as <b>defense.</b>
                </li>
                <li>
                  Various class compositions amongst <b>offense</b> each have
                  their benefits and drawbacks. Running 3+ light classes on
                  <b>offense</b> can be shut down while a broad spectrum of
                  classes can be effective.
                </li>
                <li>
                  <b>Offense</b> should coordinate times for hitting the enemy
                  <b>defense</b> together. The game timer is effective at
                  coordinating a time to attack.
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="glossary" className="flex flex-col gap-3 ps-6">
              <h2 id="glossary">Glossary</h2>
              {/* TODO Table <Table className="p-3" data={tableData} /> */}
            </TabsContent>
          </Tabs>
        </Suspense>
      </div>
    </>
  );
}
