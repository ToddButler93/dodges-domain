import Head from "next/head";
import Link from "next/link";
import { Button, Callout } from "@tremor/react";

export default function QuickPUGGuide() {
  return (
    <>
      <Head>
        <title>Playing PUGs | Dodges Domain</title>
        <meta name="description" content="Playing PUGs | Dodges Domain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex max-w-6xl flex-col gap-3 bg-zinc-900">
        <h1 className="text-6xl">Playing PUGs</h1>
        <h2 id="7v7-format">7v7 Format</h2>
        <p>
          <code>Pick-up Games</code> are a semi-competitive 7v7 format. Pick-up
          games will use VoIP software such as Mumble or Discord.
        </p>
        <p>
          Each team runs 4 <code>offense</code> and 3 <code>defense</code>.
        </p>
        <p>
          Generally speaking, the <code>defense</code> consists of a{" "}
          <code>HOF,</code> a <code>light defense</code>/
          <code>medium defense,</code> and a <code>sniper.</code>
        </p>
        <p>
          <code>Offense</code> have two recommended setups:
        </p>
        <ul>
          <li>
            3 <code>offense</code> members and a <code>capper</code> with one{" "}
            <code>offense</code> member going after the enemy{" "}
            <code>Sniper</code>
          </li>
          <li>
            2 <code>offense</code> members and 2 <code>cappers</code>
          </li>
        </ul>
        <p>
          <code>Defense</code> goes <code>defense</code> during{" "}
          <code>stand-offs</code> and <code>offense</code> goes{" "}
          <code>offense</code> during <code>stand-offs.</code>
        </p>
        <h3 id="recommendations">Recommendations</h3>
        <p>
          These are PUG-specific recommendations to make the game more enjoyable
          for everyone involved. These are not rules but a list of
          recommendations to improve the flow and make you a more effective
          member of your team.
        </p>
        <ul>
          <li>
            If both flags are home, if you are an <code>offense</code> member or
            a <code>capper,</code> there is little to no gain in
            killing/shooting enemy <code>offense.</code> If <code>defense</code>{" "}
            is struggling, spotting enemy <code>capper</code> is substantially
            more beneficial.
          </li>
          <li>
            Running 4+ <code>defense</code> members generally makes games slow
            for both teams.{" "}
          </li>
          <li>
            Try to run a <code>capper</code> that does not warp.{" "}
          </li>
        </ul>
        <h2 id="roles">Roles</h2>
        <h3 id="offense">Offense</h3>
        <p>
          <a href="/docs/gameplay/guide-offense">Offense Guide</a>
        </p>
        <h4 id="major-responsibilities">Major Responsibilities</h4>
        <ul>
          <li>
            Kill the enemy <code>heavy on flag</code> and enemy{" "}
            <code>light defense</code> <code>5 seconds</code> before your{" "}
            <code>capper</code> will grab.
          </li>
          <li>
            Put pressure on the enemy <code>Sniper</code> to prevent them from
            killing your <code>capper</code> pre-grab and post-grab. Generally,
            only 1 <code>offense</code> member does this only if your team is
            running 1 <code>capper.</code>
          </li>
          <li>
            <code>E-Grab</code> when the <code>defense</code> calls for it.
            <h4 id="minor-responsibilities">Minor Responsibilities</h4>
          </li>
          <li>
            <kbd>K</kbd>-Out and meet your capper after they grab.
          </li>
          <li>
            Hit the enemy stand at the same time as other <code>offense</code>{" "}
            members, aim for when your <code>capper</code> would be{" "}
            <code>15 seconds</code> out.{" "}
          </li>
          <li>
            Spot enemy <code>cappers</code> and enemy <code>offense.</code> This
            assists your <code>defense</code> better than you shooting the enemy
            `offense.
          </li>
          <li>
            <code>Walk</code> flags with your other <code>offense</code>{" "}
            members.
          </li>
        </ul>
        <h3 id="heavy-on-flag">Heavy on Flag</h3>
        <Link href="/docs/gameplay/guide-hof">Heavy on Flag Guide</Link>
        <h4 id="major-responsibilities">Major Responsibilities</h4>
        <ul>
          <li>
            Stop the enemy <code>capper.</code>
          </li>
          <li>
            Stop enemy <code>walks.</code>
            <h4 id="minor-responsibilities">Minor Responsibilities</h4>
          </li>
          <li>Be ready to stop unspotted/out of time grabs.</li>
          <li>
            Work with the <code>light defense</code> to get kills on enemy{" "}
            <code>offense</code> without overextending yourself.
          </li>
          <li>
            Only leave the stand during a <code>stand-off.</code>
          </li>
          <li>Avoid being shot if possible.</li>
        </ul>
        <h3 id="light-medium-defense">Light/Medium Defense</h3>
        <Link href="/docs/gameplay/guide-defense">
          light/medium defense Guide
        </Link>
        <h4 id="major-responsibilities">Major Responsibilities</h4>
        <ul>
          <li>
            Kill enemy the <code>offense</code> members.
          </li>
          <li>Return flags.</li>
          <li>
            Call out for <code>E-Grabs</code>
            <h4 id="minor-responsibilities">Minor Responsibilities</h4>
          </li>
          <li>
            Work with the <code>Sniper</code>
          </li>
          <li>
            Call out enemy <code>offense</code> you are shooting so the{" "}
            <code>Sniper</code> and <code>heavy on flag</code> know who to
            shoot.
          </li>
          <li>
            If the enemy <code>capper</code> has recently died, assist any walks
            your <code>offense</code> may be doing or meet your{" "}
            <code>capper.</code>
          </li>
        </ul>
        <h3 id="sniper">Sniper</h3>
        <Link href="/docs/gameplay/guide-snipe">Sniper Guide</Link>
        <h4 id="major-responsibilities">Major Responsibilities</h4>
        <ul>
          <li>
            Spot/kill the enemy <code>capper</code> at all times.
          </li>
          <li>Call out a time and direction the enemy cap will be.</li>
          <li>
            Call out for <code>E-Grabs</code>
          </li>
          <li>
            Snipe the enemy <code>offense</code> which your{" "}
            <code>light defense</code> and <code>heavy on flag</code> are
            fighting or during any walk attempts.{" "}
            <h4 id="minor-responsibilities">Minor Responsibilities</h4>
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
        <h3 id="capper">Capper</h3>
        <p>
          <a href="/docs/gameplay/guide-cap">Capper Guide</a>
        </p>
        <h4 id="major-responsibilities">Major Responsibilities</h4>
        <ul>
          <li>Grab and capture the enemy flag.</li>
          <li>
            Communicate times on your route for your <code>offense</code>{" "}
            members.<h4 id="minor-responsibilities">Minor Responsibilities</h4>
          </li>
          <li>
            Meet your <code>offense</code> if they decide to <code>Walk</code>{" "}
            the flag.
          </li>
          <li>
            Wait in case your <code>offense</code> needs more time to get to the
            stand.
          </li>
        </ul>
        <h2 id="stand-offs">Stand-Offs</h2>
        <ul>
          <li>
            <p>
              <code>Offense</code> stays on <code>offense.</code>
            </p>
          </li>
          <li>
            <p>
              <code>Defense</code> stays on <code>defense.</code>
            </p>
          </li>
          <li>
            <p>
              It is more beneficial for your team to promptly go{" "}
              <code>offense</code> while your team has three members already on{" "}
              <code>defense.</code>
            </p>
          </li>
          <li>
            <p>
              <code>Defense</code> generally picks the medium class for
              maneuverability. Having a heavy can be effective as well.
            </p>
          </li>
          <li>
            <p>
              Stay near your spawns as <code>defense.</code>
            </p>
          </li>
          <li>
            <p>
              Various class compositions amongst <code>offense</code> each have
              their benefits and drawbacks. Running 3+ light classes on{" "}
              <code>offense</code> can be shut down while a broad spectrum of
              classes can be effective.{" "}
            </p>
          </li>
          <li>
            <p>
              <code>Offense</code> should coordinate times for hitting the enemy{" "}
              <code>defense</code> together. The game timer is effective at
              coordinating a time to attack.
            </p>
          </li>
        </ul>
        <h2 id="loadout-setup">Loadout Setup</h2>
        <p>
          For all classes except for the <code>sniper,</code> it is considered
          optimal to run at least one explosive/timed weapon and at least one
          chain/hit-scan weapon.
        </p>
        <p>
          In a <code>community server,</code> you must be a verified user for
          your Loadouts to save.
        </p>
        <h2 id="glossary">Glossary</h2>
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PUG</td>
              <td>Pick-up Game</td>
            </tr>
            <tr>
              <td>E-Grab</td>
              <td>
                E-Grab stands for an emergency grab. A player says this to
                communicate that the team requires a grab of the enemy flag to
                prevent the enemy from capturing your flag. Players should
                prioritize this action immediately.
              </td>
            </tr>
            <tr>
              <td>
                <kbd>K</kbd>-Out / Reset
              </td>
              <td>
                Use the suicide key (<kbd>K</kbd>) to reset and respawn
                immediately. Usually used to make an <code>offense</code> member
                time up with their <code>capper</code> and other{" "}
                <code>offense</code> members.
              </td>
            </tr>
            <tr>
              <td>Crash</td>
              <td>
                Try to emergency grab/attack the enemy as soon as possible for a
                return
              </td>
            </tr>
            <tr>
              <td>Walk</td>
              <td>
                This term is used for when an <code>offense</code> member grabs
                the flag in an attempt to take it home rather than a{" "}
                <code>capper</code>
              </td>
            </tr>
            <tr>
              <td>Return</td>
              <td>Return the Flag</td>
            </tr>
            <tr>
              <td>HOF</td>
              <td>Heavy on Flag</td>
            </tr>
            <tr>
              <td>LD</td>
              <td>light defense</td>
            </tr>
            <tr>
              <td>MD</td>
              <td>medium defense</td>
            </tr>
            <tr>
              <td>O</td>
              <td>offense</td>
            </tr>
            <tr>
              <td>Stand-Off</td>
              <td>
                A <code>stand-Off</code> game state occurs when both teams have
                the enemy flag secure at their side of the field
              </td>
            </tr>
            <tr>
              <td>D-Stack</td>
              <td>
                Defensive Stack. When a team runs more than 3{" "}
                <code>defense</code> members
              </td>
            </tr>
            <tr>
              <td>Figit</td>
              <td>
                When an <code>offense</code> member chases and attempts to kill
                another <code>offense</code> member when both flags are home.
              </td>
            </tr>
            <tr>
              <td>Spot</td>
              <td>
                Spot is a term used to mark where an enemy is. Use the left{" "}
                <kbd>Alt</kbd> key in-game adds a visual indicator where the
                player was for the rest of your team.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
