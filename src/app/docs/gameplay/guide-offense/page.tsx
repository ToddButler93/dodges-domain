"use client";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function GuideCapping() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-3 text-center">
          <h1>Playing Offense - Tribes Ascend</h1>
        </Card>

        <div className="flex flex-col gap-3">
          <div className="flex">
            <Button asChild size="lg">
              <Link href="/docs/gameplay/guide-quick?tab=glossary">Glossary</Link>
            </Button>
          </div>
          <p>
            Everything you do relies on timing with your <b>Capper</b>. Since
            the <b>Capper</b> looks to move the enemy flag, your goal is to kill
            everything that can prevent <b>Capper</b> from escaping
            successfully.
          </p>
          <p>
            If you hear <b>E-Grab</b> you should prioritize
            performing/supporting an <b>E-Grab</b> unless your capper will beat
            them.
          </p>
          <Card className="flex flex-col gap-3 p-3">
            <h4> Major Responsibilities</h4>
            <p>
              - Kill the enemy <b>Heavy on Flag</b> and enemy{" "}
              <b>Light Defense</b> <b>5 seconds</b> before your <b>Capper</b>{" "}
              will grab.
            </p>
            <p>
              - Put pressure on the enemy <b>Sniper</b> to prevent them from
              killing your <b>Capper</b> pre-grab and post-grab. Generally, only
              1 <b>Offense</b> member does this, and only if you are running 1{" "}
              <b>Capper</b>
            </p>
            <p>
              - <b>E-Grab</b> when the <b>Defense</b> calls for it.
            </p>
          </Card>
          <h4> Minor Responsibilities</h4>

          <Card className="flex flex-col gap-3 p-3">
            <p>
              - <kbd>K</kbd> out and meet your <b>Capper</b> after they grab.
            </p>
            <p>
              - Hit the enemy stand at the same time as other <b>Offense</b>{" "}
              members, aim for when your <b>Capper</b> would be{" "}
              <b>15 seconds</b> out.
            </p>
            <p>
              {" "}
              - Spot enemy <b>Cappers</b> and enemy <b>Offense</b>, this assists
              your <b>Defense</b> better than you shooting the enemy{" "}
              <b>Offense</b>.
            </p>
            <p>
              {" "}
              - <b>Walk</b> flags with your other <b>Offense</b> members.
            </p>
          </Card>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> Timing</h2>
          <p>
            Your goal is to kill every enemy near their stand when your{" "}
            <b>Capper</b> is <b>5 seconds</b> out. As respawns are 5 seconds,
            they will not be able to do anything to prevent your <b>Capper</b>{" "}
            from grabbing the flag successfully.
          </p>
          <p>
            Generally speaking, getting to the enemy stand when your{" "}
            <b>Capper</b> is <b>15 seconds</b> out is optimal. This will provide
            you with enough time to put damage on the enemies <b>HOF</b> and{" "}
            <b>LD</b> or <b>MD</b>
          </p>
          <p>
            Capping routes generally take between <b>25 seconds</b> and{" "}
            <b>50 seconds</b>. If the routes have been too fast for you to keep
            up, ask your <b>Capper</b> to wait before leaving so you can get to
            the stand on time. On most maps, you should be able to get to the
            enemy stand on a <b>35+ seconds</b> route consistently at the{" "}
            <b>15 second</b> time call.
          </p>
          <p>
            As long as your fellow <b>Offense</b> members hit at the same time
            you should be able to output significant disruption on the enemy.
          </p>
          <h3> When to reset</h3>
          <p>
            Using the <kbd>K</kbd> key to reset is effective to keep yourself in
            sync with your <b>Capper</b> and other <b>Offense</b> members.
          </p>
          <p>
            This should be done just after your <b>Capper</b> dies or grabs
            successfully. Although, if you are in the range of
            killing/distracting the enemy <b>Sniper</b> before they can output
            exit damage on your <b>Capper</b>, disrupting them takes priority.
          </p>
          <p>
            There must be no requirement for an <b>E-Grab</b> to reset.
          </p>
          <p>
            You shouldn&apos;t <b>Reset</b> if performing a <b>Walk</b> is
            optimal.
          </p>
          <p>
            Resetting should still be done if you are currently fighting an
            enemy other than the <b>Sniper</b>. It is more beneficial to be on
            time with your team than getting the kill.
          </p>
          <p>
            <b>Defense</b> can punish <b>Offense</b> that linger around at the
            enemy base and forcing them to be out of time with their{" "}
            <b>Capper</b>.
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> Walks</h2>
          <p>
            A walk is where an <b>Offense</b> member chooses to grab the flag
            rather than the <b>Capper</b>.
          </p>
          <p>
            Walks can punish <b>HOFs</b> that play passively. These <b>HOFs</b>{" "}
            focus on just killing <b>Cappers</b> and avoiding damage.
          </p>
          <p>
            This also punishes <b>Snipers</b> who sit far away from their stand
            and don&apos;t work with their <b>Light Defense</b>.
          </p>
          <p>
            Most of the time you would only walk if your <b>Capper</b> dies and
            the stand is clear enough to get away with a <b>Walk</b>. On maps
            like <b>Dangerous Crossing</b> <b>Walking</b> when the enemy{" "}
            <b>HOF</b> is distracted can be effective even when your capper is
            still 15 seconds out.
          </p>
          <p>
            <b>Walks</b> shouldn&apos;t be done if your health is low as an{" "}
            <b>Offense</b> member. <b>Walking</b> is useful if you have other{" "}
            <b>Offense</b> members to help protect or promptly meet you. If your
            fellow <b>Offense</b> member is <b>Walking</b> the flag it is
            important to promptly assist in getting the flag back to your base.
            Respawning as a <b>Light</b> class to assist with the walk if you
            are about to respawn is optimal.
          </p>
          <p>
            Due to the <b>Rage</b> mechanic, it is generally better to kill the
            enemy <b>HOF</b> and <b>LD</b> or <b>MD</b> before a walk occurs so
            they don&apos;t regenerate health or energy.
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> Spotting</h2>
          <p>
            To support your <b>Defense</b> effectively an <b>Offense</b> member
            should attempt to spot the enemy <b>Capper</b> whenever possible.
          </p>
          <p>
            Using the <kbd>Alt</kbd> key will spot enemies so that other players
            can see where the enemy is.
          </p>
          <p>
            You will need to communicate the side an enemy is from your{" "}
            <b>Defenses</b> point of view.
          </p>
          <p>
            As an example, if you are on the left side of the map and see an
            enemy <b>Capper</b> moving to your left, you can say &apos;Enemy{" "}
            <b>Capper</b> is on the left side&apos;. Calling out the name of the
            player is beneficial to assist <b>Defense</b> at determining if the
            enemy is running multiple cappers or not.
          </p>
          <p>
            This is where learning routes as an <b>Offense</b> member can be
            advantageous because you can learn the specifics of recognizable
            routes. This knowledge provides the ability to give time estimates
            as well as give specific route descriptions. See the [Capper
            Guide](/docs/gameplay/guide-cap) for more information.
          </p>
          <p>
            Spotting enemy <b>Offense</b> members also assist <b>Defense</b>.
            Allowing your <b>LD</b> or <b>MD</b> to venture out and kill them
            before they reach your stand, ruining their timing.
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> Sniper Pressure</h2>
          <p>
            Killing the enemy <b>Sniper</b> before your <b>Capper</b> has
            regenerated their health is an important objective pre-flag grab.
          </p>
          <p>
            A <b>Sniper</b> can easily shut down a <b>Capper</b> if they find
            them on their route with low hit points.
          </p>
          <p>
            Killing the enemy <b>Sniper</b> before your <b>Capper</b> starts a
            route can prevent them from spotting your <b>Capper</b> as they
            start, adding more pressure.
          </p>
          <h3> Spawn Mechanics</h3>
          <p>
            Spawns are weighted on some maps and some are more beneficial to an
            enemy <b>Sniper</b> than others.
          </p>
          <p>
            <b>Arx Novena</b> on the <b>Blood Eagle</b> side is a great example
            of this. The left/sniper hill spawn can be extremely useful for the
            enemy <b>Sniper</b> to get exit damage on your <b>Cappers</b> if
            your <b>Capper</b> was on a <b>Left to Right</b> route. This is also
            a useful spawn for <b>Snipers</b> to pre-snipe your capper before
            they regenerate their health on the common <b>Back to Front</b>{" "}
            route.
          </p>
          <p>
            If you&apos;ve recently killed an enemy <b>Sniper</b>, sitting
            directly on the spawn location can prevent them from spawning at
            that location.
          </p>
          <p>
            By standing a short distance away from the spawn, allows an enemy to
            spawn at that location. This is an effective way to repeatedly kill
            an enemy <b>Sniper</b>.
          </p>
          <p>
            The <b>Sniper</b> has a longer respawn time than all other classes
            in the game. <b>10 seconds</b> rather than <b>5 seconds</b>.
          </p>
          <h3> How to play Flex</h3>
          <p>
            The <b>Flex</b> role is assigned to an <b>Offense</b> member that
            knows how to run capping routes. This is generally a role dedicated
            to disrupting the enemy <b>Sniper</b>. Two <b>Cappers</b> can be
            harder to spot and shut down than one.
          </p>
          <p>
            This member will run routes that grab at the same time as the other{" "}
            <b>Capper</b>, as well as disrupt/kill the enemy sniper on other
            runs.
          </p>
          <p>
            Choosing if they should run two cappers or a disruptor tends to be
            down to how the game plays out. Some <b>Snipers</b> do well against
            multiple <b>Cappers</b>. This works effectively on maps that are
            harder to spot enemy <b>Cappers</b> from the stand like the map{" "}
            <b>Katabatic</b>.
          </p>
          <p>
            Another benefit of playing <b>Flex</b> is you don&apos;t have to
            always try to grab the flag. You can choose to attack the stand or{" "}
            <b>Sniper</b> if your route gets spotted early or your health
            regeneration has been shut down for the route.
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> Classes</h2>
          <p>
            Most of the time it is best to be a <b>Medium</b> or a <b>Heavy</b>{" "}
            on <b>Offense</b>. <b>Brute</b>, <b>Juggernaut</b>, <b>Raider</b>{" "}
            and <b>Soldier</b> are the main <b>GOTY</b> <b>Offense</b> classes.
          </p>
          <p>
            Having an explosive or timed weapon and a chain or hitscan weapon is
            optimal for all <b>Offense</b> classes. <b>Juggernauts</b> can run{" "}
            <b>Spinfusor Discs</b> as their explosive weapon opening up a{" "}
            <b>Mortar</b> and chain/hitscan combination.
          </p>
        </div>
      </div>
    </>
  );
}
