import { Title, Text, Kbd, Code } from "@mantine/core";
import Link from "next/link";

export default function GuideCapping() {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-3">
        <Title>Playing Offense</Title>

        <Link href={"/docs/gameplay/guide-quick#glossary"}>Glossary</Link>
        <Text>
          Everything you do relies on timing with your <Code>Capper</Code>.
          Since the <Code>Capper</Code> looks to move the enemy flag, your goal
          is to kill everything that can prevent <Code>Capper</Code> from
          escaping successfully.
        </Text>
        <Text>
          If you hear <Code>E-Grab</Code> you should prioritize
          performing/supporting an <Code>E-Grab</Code> unless your capper will
          beat them.
        </Text>
        <Title order={4}> Major Responsibilities</Title>
        <Text>
          - Kill the enemy <Code>Heavy on Flag</Code> and enemy{" "}
          <Code>Light Defense</Code> <Code>5 seconds</Code> before your{" "}
          <Code>Capper</Code> will grab.
        </Text>
        <Text>
          {" "}
          - Put pressure on the enemy <Code>Sniper</Code> to prevent them from
          killing your <Code>Capper</Code> pre-grab and post-grab. Generally,
          only 1 <Code>Offense</Code> member does this, and only if you are
          running 1 <Code>Capper</Code>
        </Text>
        <Text>
          {" "}
          - <Code>E-Grab</Code> when the <Code>Defense</Code> calls for it.
        </Text>
        <Title order={4}> Minor Responsibilities</Title>

        <Text>
          {" "}
          - <Kbd>K</Kbd>-Out and meet your Capper after they grab.
        </Text>
        <Text>
          {" "}
          - Hit the enemy stand at the same time as other <Code>
            Offense
          </Code>{" "}
          members, aim for when your <Code>Capper</Code> would be{" "}
          <Code>15 seconds</Code> out.
        </Text>
        <Text>
          {" "}
          - Spot enemy <Code>Cappers</Code> and enemy <Code>Offense</Code>, this
          assists your <Code>Defense</Code> better than you shooting the enemy{" "}
          <Code>Offense</Code>.
        </Text>
        <Text>
          {" "}
          - <Code>Walk</Code> flags with your other <Code>Offense</Code>{" "}
          members.
        </Text>
        <Title order={2}> Timing</Title>
        <Text>
          Your goal is to kill every enemy near their stand when your{" "}
          <Code>Capper</Code> is <Code>5 seconds</Code> out. As respawns are 5
          seconds, they will not be able to do anything to prevent your{" "}
          <Code>Capper</Code> from grabbing the flag successfully.
        </Text>
        <Text>
          Generally speaking, getting to the enemy stand when your{" "}
          <Code>Capper</Code> is <Code>15 seconds</Code> out is optimal. This
          will provide you with enough time to put damage on the enemies{" "}
          <Code>HOF</Code> and <Code>LD</Code> or <Code>MD</Code>
        </Text>
        <Text>
          Capping routes generally take between <Code>25 seconds</Code> and{" "}
          <Code>50 seconds</Code>. If the routes have been too fast for you to
          keep up, ask your <Code>Capper</Code> to wait before leaving so you
          can get to the stand on time. On most maps, you should be able to get
          to the enemy stand on a <Code>35+ seconds</Code> route consistently at
          the <Code>15 second</Code> time call.
        </Text>
        <Text>
          As long as your fellow <Code>Offense</Code> members hit at the same
          time you should be able to output significant disruption on the enemy.
        </Text>
        <Title order={3}> When to reset</Title>
        <Text>
          Using the <Kbd>K</Kbd> key to reset is effective to keep yourself in
          sync with your <Code>Capper</Code> and other <Code>Offense</Code>{" "}
          members.
        </Text>
        <Text>
          This should be done just after your <Code>Capper</Code> dies or grabs
          successfully. Although, if you are in the range of killing/distracting
          the enemy <Code>Sniper</Code> before they can output exit damage on
          your <Code>Capper</Code>, disrupting them takes priority.
        </Text>
        <Text>
          There must be no requirement for an <Code>E-Grab</Code> to reset.
        </Text>
        <Text>
          You shouldn&apos;t <Code>Reset</Code> if performing a{" "}
          <Code>Walk</Code> is optimal.
        </Text>
        <Text>
          Resetting should still be done if you are currently fighting an enemy
          other than the <Code>Sniper</Code>. It is more beneficial to be on
          time with your team than getting the kill.
        </Text>
        <Text>
          <Code>Defense</Code> can punish <Code>Offense</Code> that linger
          around at the enemy base and forcing them to be out of time with their{" "}
          <Code>Capper</Code>.
        </Text>
        <Title order={2}> Walks</Title>
        <Text>
          A walk is where an <Code>Offense</Code> member chooses to grab the
          flag rather than the <Code>Capper</Code>.
        </Text>
        <Text>
          Walks can punish <Code>HOFs</Code> that play passively. These{" "}
          <Code>HOFs</Code> focus on just killing <Code>Cappers</Code> and
          avoiding damage.
        </Text>
        <Text>
          This also punishes <Code>Snipers</Code> who sit far away from their
          stand and don&apos;t work with their <Code>Light Defense</Code>.
        </Text>
        <Text>
          Most of the time you would only walk if your <Code>Capper</Code> dies
          and the stand is clear enough to get away with a <Code>Walk</Code>. On
          maps like <Code>Dangerous Crossing</Code> <Code>Walking</Code> when
          the enemy <Code>HOF</Code> is distracted can be effective even when
          your capper is still 15 seconds out.
        </Text>
        <Text>
          <Code>Walks</Code> shouldn&apos;t be done if your health is low as an{" "}
          <Code>Offense</Code> member. <Code>Walking</Code> is useful if you
          have other <Code>Offense</Code> members to help protect or promptly
          meet you. If your fellow <Code>Offense</Code> member is{" "}
          <Code>Walking</Code> the flag it is important to promptly assist in
          getting the flag back to your base. Respawning as a <Code>Light</Code>{" "}
          class to assist with the walk if you are about to respawn is optimal.
        </Text>
        <Text>
          Due to the <Code>Rage</Code> mechanic, it is generally better to kill
          the enemy <Code>HOF</Code> and <Code>LD</Code> or <Code>MD</Code>{" "}
          before a walk occurs so they don&apos;t regenerate health or energy.
        </Text>
        <Title order={2}> Spotting</Title>
        <Text>
          To support your <Code>Defense</Code> effectively an{" "}
          <Code>Offense</Code> member should attempt to spot the enemy{" "}
          <Code>Capper</Code> whenever possible.
        </Text>
        <Text>
          Using the <Kbd>Alt</Kbd> key will spot enemies so that other players
          can see where the enemy is.
        </Text>
        <Text>
          You will need to communicate the side an enemy is from your{" "}
          <Code>Defenses</Code> point of view.
        </Text>
        <Text>
          As an example, if you are on the left side of the map and see an enemy{" "}
          <Code>Capper</Code> moving to your left, you can say &apos;Enemy{" "}
          <Code>Capper</Code> is on the left side&apos;. Calling out the name of
          the player is beneficial to assist <Code>Defense</Code> at determining
          if the enemy is running multiple cappers or not.
        </Text>
        <Text>
          This is where learning routes as an <Code>Offense</Code> member can be
          advantageous because you can learn the specifics of recognizable
          routes. This knowledge provides the ability to give time estimates as
          well as give specific route descriptions. See the [Capper
          Guide](/docs/gameplay/guide-cap) for more information.
        </Text>
        <Text>
          Spotting enemy <Code>Offense</Code> members also assist{" "}
          <Code>Defense</Code>. Allowing your <Code>LD</Code> or <Code>MD</Code>{" "}
          to venture out and kill them before they reach your stand, ruining
          their timing.
        </Text>
        <Title order={2}> Sniper Pressure</Title>
        <Text>
          Killing the enemy <Code>Sniper</Code> before your <Code>Capper</Code>{" "}
          has regenerated their health is an important objective pre-flag grab.
        </Text>
        <Text>
          A <Code>Sniper</Code> can easily shut down a <Code>Capper</Code> if
          they find them on their route with low hit points.
        </Text>
        <Text>
          Killing the enemy <Code>Sniper</Code> before your <Code>Capper</Code>{" "}
          starts a route can prevent them from spotting your <Code>Capper</Code>{" "}
          as they start, adding more pressure.
        </Text>
        <Title order={3}> Spawn Mechanics</Title>
        <Text>
          Spawns are weighted on some maps and some are more beneficial to an
          enemy <Code>Sniper</Code> than others.
        </Text>
        <Text>
          <Code>Arx Novena</Code> on the <Code>Blood Eagle</Code> side is a
          great example of this. The left/sniper hill spawn can be extremely
          useful for the enemy <Code>Sniper</Code> to get exit damage on your{" "}
          <Code>Cappers</Code> if your <Code>Capper</Code> was on a{" "}
          <Code>Left to Right</Code> route. This is also a useful spawn for{" "}
          <Code>Snipers</Code> to pre-snipe your capper before they regenerate
          their health on the common <Code>Back to Front</Code> route.
        </Text>
        <Text>
          If you&apos;ve recently killed an enemy <Code>Sniper</Code>, sitting
          directly on the spawn location can prevent them from spawning at that
          location.
        </Text>
        <Text>
          By standing a short distance away from the spawn, allows an enemy to
          spawn at that location. This is an effective way to repeatedly kill an
          enemy <Code>Sniper</Code>.
        </Text>
        <Text>
          The <Code>Sniper</Code> has a longer respawn time than all other
          classes in the game. <Code>10 seconds</Code> rather than{" "}
          <Code>5 seconds</Code>.
        </Text>
        <Title order={3}> How to play Flex</Title>
        <Text>
          The <Code>Flex</Code> role is assigned to an <Code>Offense</Code>{" "}
          member that knows how to run capping routes. This is generally a role
          dedicated to disrupting the enemy <Code>Sniper</Code>. Two{" "}
          <Code>Cappers</Code> can be harder to spot and shut down than one.
        </Text>
        <Text>
          This member will run routes that grab at the same time as the other{" "}
          <Code>Capper</Code>, as well as disrupt/kill the enemy sniper on other
          runs.
        </Text>
        <Text>
          Choosing if they should run two cappers or a disruptor tends to be
          down to how the game plays out. Some <Code>Snipers</Code> do well
          against multiple <Code>Cappers</Code>. This works effectively on maps
          that are harder to spot enemy <Code>Cappers</Code> from the stand like
          the map <Code>Katabatic</Code>.
        </Text>
        <Text>
          Another benefit of playing <Code>Flex</Code> is you don&apos;t have to
          always try to grab the flag. You can choose to attack the stand or{" "}
          <Code>Sniper</Code> if your route gets spotted early or your health
          regeneration has been shut down for the route.
        </Text>
        <Title order={2}> Classes</Title>
        <Text>
          Most of the time it is best to be a <Code>Medium</Code> or a{" "}
          <Code>Heavy</Code> on <Code>Offense</Code>. <Code>Brute</Code>,{" "}
          <Code>Juggernaut</Code>, <Code>Raider</Code> and <Code>Soldier</Code>{" "}
          are the main <Code>GOTY</Code> <Code>Offense</Code> classes.
        </Text>
        <Text>
          Having an explosive or timed weapon and a chain or hitscan weapon is
          optimal for all <Code>Offense</Code> classes. <Code>Juggernauts</Code>{" "}
          can run <Code>Spinfusor Discs</Code> as their explosive weapon opening
          up a <Code>Mortar</Code> and chain/hitscan combination.
        </Text>
      </div>
    </>
  );
}
