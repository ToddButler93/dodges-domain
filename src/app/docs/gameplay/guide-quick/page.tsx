"use client";
import Link from "next/link";
import {
  Table,
  Title,
  Button,
  Code,
  List,
  ListItem,
  MenuItem,
  Menu,
  Card,
  NavLink,
} from "@mantine/core";

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
      <div className="flex flex-row gap-6">
        <div>
          <NavLink label="PUG Information" />
          <NavLink label="Offense" />
          <NavLink label="Capping" />
          <NavLink label="Heavy on Flag" />
          <NavLink label="Defense" />
          <NavLink label="Sniping" />
      </div>
        <div className="max-w-3xl pe-10">
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
            <List withPadding listStyleType="disc">
              <ListItem>
                3 <Code>offense</Code> members and a <Code>capper</Code> with
                one
                <Code>offense</Code> member going after the enemy
                <Code>Sniper</Code>
              </ListItem>
              <ListItem>
                2 <Code>offense</Code> members and 2 <Code>cappers</Code>
              </ListItem>
            </List>
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
            <List withPadding listStyleType="disc">
              <ListItem>
                If both flags are home, if you are an <Code>offense</Code>{" "}
                member or a <Code>capper,</Code> there is little to no gain in
                killing/shooting enemy <Code>offense.</Code> If
                <Code>defense</Code> is struggling, spotting enemy
                <Code>capper</Code> is substantially more beneficial.
              </ListItem>
              <ListItem>
                Running 4+ <Code>defense</Code> members generally makes games
                slow for both teams.
              </ListItem>
              <ListItem>
                Try to run a <Code>capper</Code> that does not warp.
              </ListItem>
            </List>
          </div>
          <Card>
            <Menu>
              <MenuItem>
                <div className="relative m-auto flex h-20 w-full overflow-hidden">
                  <Title order={3}>Modify Classes</Title>
                  <div className="absolute -top-14 z-20 m-auto h-80 w-80 rotate-45 bg-blue-200"></div>
                  <div className="relative right-3 top-3 z-30 mx-6 my-auto h-16 w-full overflow-hidden rounded-lg">
                    <Card
                      className="absolute h-full w-full bg-yellow-300"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)", // Adjust the clip path as needed
                      }}
                    >
                      Offense
                    </Card>
                  </div>
                </div>
              </MenuItem>

              <MenuItem>
                <Card>Heavy on Flag</Card>
              </MenuItem>
            </Menu>
          </Card>
          <Title order={2}>Offense</Title>
          <div>
            <Button component={Link} href="/docs/gameplay/guide-offense">
              Offense Guide
            </Button>
            <Title order={3}>Major Responsibilities</Title>
            <List withPadding listStyleType="disc">
              <ListItem>
                Kill the enemy <Code>heavy on flag</Code> and enemy
                <Code>light defense</Code> <Code>5 seconds</Code> before your
                <Code>capper</Code> will grab.
              </ListItem>
              <ListItem>
                Put pressure on the enemy <Code>Sniper</Code> to prevent them
                from killing your <Code>capper</Code> pre-grab and post-grab.
                Generally, only 1 <Code>offense</Code> member does this only if
                your team is running 1 <Code>capper.</Code>
              </ListItem>
              <ListItem>
                <Code>E-Grab</Code> when the <Code>defense</Code> calls for it.
              </ListItem>
            </List>
            <Title order={3}>Minor Responsibilities</Title>
            <List withPadding listStyleType="disc">
              <ListItem>
                <kbd>K</kbd>-Out and meet your capper after they grab.
              </ListItem>
              <ListItem>
                Hit the enemy stand at the same time as other
                <Code>offense</Code> members, aim for when your
                <Code>capper</Code> would be <Code>15 seconds</Code> out.
              </ListItem>
              <ListItem>
                Spot enemy <Code>cappers</Code> and enemy <Code>offense.</Code>
                This assists your <Code>defense</Code> better than you shooting
                the enemy `offense.
              </ListItem>
              <ListItem>
                <Code>Walk</Code> flags with your other <Code>offense</Code>
                members.
              </ListItem>
            </List>
          </div>
          <Title order={2}>Heavy on Flag</Title>
          <div>
            <Button component={Link} href="/docs/gameplay/guide-hof">
              Heavy on Flag Guide
            </Button>
            <Title order={3}>Major Responsibilities</Title>
            <List withPadding listStyleType="disc">
              <ListItem>
                Stop the enemy <Code>capper.</Code>
              </ListItem>
              <ListItem>
                Stop enemy <Code>walks.</Code>
              </ListItem>
            </List>
            <Title order={3}>Minor Responsibilities</Title>
            <List withPadding listStyleType="disc">
              <ListItem>Be ready to stop unspotted/out of time grabs.</ListItem>
              <ListItem>
                Work with the <Code>light defense</Code> to get kills on enemy
                <Code>offense</Code> without overextending yourself.
              </ListItem>
              <ListItem>
                Only leave the stand during a <Code>stand-off.</Code>
              </ListItem>
              <ListItem>Avoid being shot if possible.</ListItem>
            </List>
          </div>
          <Title order={2}>Light/Medium Defense</Title>
          <div>
            <Button component={Link} href="/docs/gameplay/guide-defense">
              Light/Medium Defense Guide
            </Button>
            <Title order={3}>Major Responsibilities</Title>
            <List withPadding listStyleType="disc">
              <ListItem>
                Kill enemy the <Code>offense</Code> members.
              </ListItem>
              <ListItem>Return flags.</ListItem>
              <ListItem>
                Call out for <Code>E-Grabs</Code>
              </ListItem>
            </List>
            <Title order={3}>Minor Responsibilities</Title>
            <List withPadding listStyleType="disc">
              <ListItem>
                Work with the <Code>Sniper</Code>
              </ListItem>
              <ListItem>
                Call out enemy <Code>offense</Code> you are shooting so the
                <Code>Sniper</Code> and <Code>heavy on flag</Code> know who to
                shoot.
              </ListItem>
              <ListItem>
                If the enemy <Code>capper</Code> has recently died, assist any
                walks your <Code>offense</Code> may be doing or meet your
                <Code>capper.</Code>
              </ListItem>
            </List>
          </div>
          <Title order={2}>Sniper</Title>
          <div>
            <Button component={Link} href="/docs/gameplay/guide-snipe">
              Sniper Guide
            </Button>
            <Title order={3}>Major Responsibilities</Title>
            <List withPadding listStyleType="disc">
              <ListItem>
                Spot/kill the enemy <Code>capper</Code> at all times.
              </ListItem>
              <ListItem>
                Call out a time and direction the enemy cap will be.
              </ListItem>
              <ListItem>
                Call out for <Code>E-Grabs</Code>
              </ListItem>
              <ListItem>
                Snipe the enemy <Code>offense</Code> which your
                <Code>light defense</Code> and <Code>heavy on flag</Code> are
                fighting or during any walk attempts.
              </ListItem>
            </List>
            <Title order={3}>Minor Responsibilities</Title>
            <List withPadding listStyleType="disc">
              <ListItem>
                Call out enemy <Code>offense</Code> locations.
              </ListItem>
              <ListItem>
                Assist <Code>heavy on flag</Code> with clearing your base if
                over-run after an enemy has grabbed.
              </ListItem>
              <ListItem>
                Avoid enemy <Code>offense</Code> members.
              </ListItem>
              <ListItem>
                Snipe the enemy chaser if your <Code>capper</Code> is out.
              </ListItem>
            </List>
          </div>
          <Title order={2}>Capper</Title>
          <p>
            <Button component={Link} href="/docs/gameplay/guide-cap">
              Capper Guide
            </Button>
          </p>
          <Title order={3}>Major Responsibilities</Title>
          <List withPadding listStyleType="disc">
            <ListItem>Grab and capture the enemy flag.</ListItem>
            <ListItem>
              Communicate times on your route for your <Code>offense</Code>
              members.
            </ListItem>
          </List>
          <Title order={3}>Minor Responsibilities</Title>
          <List withPadding listStyleType="disc">
            <ListItem>
              Meet your <Code>offense</Code> if they decide to <Code>Walk</Code>
              the flag.
            </ListItem>
            <ListItem>
              Wait in case your <Code>offense</Code> needs more time to get to
              the stand.
            </ListItem>
          </List>
          <Title order={2}>Stand-Offs</Title>
          <List withPadding listStyleType="disc">
            <ListItem>
              <Code>Offense</Code> stays on <Code>offense.</Code>
            </ListItem>
            <ListItem>
              <Code>Defense</Code> stays on <Code>defense.</Code>
            </ListItem>
            <ListItem>
              It is more beneficial for your team to promptly go
              <Code>offense</Code> while your team has three members already on
              <Code>defense.</Code>
            </ListItem>
            <ListItem>
              <Code>Defense</Code> generally picks the medium class for
              maneuverability. Having a heavy can be effective as well.
            </ListItem>
            <ListItem>
              Stay near your spawns as <Code>defense.</Code>
            </ListItem>
            <ListItem>
              Various class compositions amongst <Code>offense</Code> each have
              their benefits and drawbacks. Running 3+ light classes on
              <Code>offense</Code> can be shut down while a broad spectrum of
              classes can be effective.
            </ListItem>
            <ListItem>
              <Code>Offense</Code> should coordinate times for hitting the enemy
              <Code>defense</Code> together. The game timer is effective at
              coordinating a time to attack.
            </ListItem>
          </List>
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
      </div>
    </>
  );
}
