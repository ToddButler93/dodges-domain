import { Title, Text, Code } from "@mantine/core";
import Link from "next/link";

export default function GuideCapping() {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-3">
        <Title>Capping</Title>
        <Link href="/docs/gameplay/guide-quick#glossary">Glossary</Link>
        <video
          width="100%"
          height="100%"
          autoPlay={true}
          muted
          loop
          preload="auto"
          playsInline
        >
          <source
            src="/static/video/cap-arx-back.webm"
            type="video/webm"
          ></source>
          Your browser does not support .webm video.
        </video>
        <Title order={2}> Gaining Speed</Title>
        <Title order={3}> Real Basics</Title>
        {/* TODO Move to guide-movement */}
        <Text>
          - Right-click makes you use your jetpack which sends you up.
        </Text>
        <Text>- Space lets you ski on the ground with no friction.</Text>
        <Text>- Shooting yourself can be useful to gain momentum.</Text>
        <Text>- Thrusting makes you go forward off the starting line.</Text>
        <Text>- Angles of the slope you are or about to be on matter.</Text>
        <Text>- There is a skiing tutorial in-game.</Text>
        <Text>
          - Gravity is the force by which a planet or other body draws objects
          toward its center.
        </Text>
        <Title order={3}> Slightly less basic, basics</Title>
        <Text>
          - Jetting while you are heading towards the ground is bad for your
          speed but missing the next hill is worse.
        </Text>
        <Text>
          - Jetting while going up an upwards slope can preserve a lot of your
          momentum compared to just skiing.
        </Text>
        <Text>
          - Jetting while hitting the ground can help you avoid damage.
        </Text>
        <Text>
          - Holding a directional key can adjust where you are going and help
          you slow down.
        </Text>
        <Text>
          - Jetting while holding a directional key can help you go higher.
        </Text>
        <Text>
          - The faster you are, the harder it is to control where you go.
        </Text>
        <Text>
          - While you have no energy, it is best to spam your jet key rather
          than hold it down.
        </Text>
        <Title order={3}>
          {" "}
          How do cappers consistently grab the flag fast?
        </Title>
        <Text>
          - <Link href="#show-me-some-routes">Rotues</Link>, learn them.
        </Text>
        <Title order={3}> How do cappers change direction so abruptly?</Title>
        <Text>
          - Rock bounces which can take many hours to learn to very little time
          to learn.
        </Text>
        <Text>
          - You can bounce off rocks as long as you aren&apos;t using jets.
        </Text>
        <Text>
          - Some of these routes are significantly more consistent with a
          Jump(without jets) bind.
        </Text>
        <Text>
          - A lot of these bounces can be a lot easier if you have a mentor to
          explain the specifics of one bounce.
        </Text>
        <Title order={3}> How to be the best capper ever</Title>
        <Text>- Learn consistent low visibility routes for all maps.</Text>
        <Text>- Sync with other cappers and your offence.</Text>
        <Text>- Learn how to duel.</Text>
        <Text>
          - Learn from someone who can cap rather than learning from Dodge.
        </Text>
        <Title order={2}> Communication</Title>
        Communicating your position and intention allows your teammates to clear
        the enemy defense allowing you to grab or work with you getting the flag
        home. Learning time calls for your routes is incredibly important.
        Calling times every 5 seconds is a good rule of thumb to make sure your
        teammates know when to hit the stand or snipe.
        <Title order={2}> Returning home</Title>
        <Text>
          - Minimizing return time is the best thing you can do to secure the
          cap.
        </Text>
        <Text>- Grabbing flags at 320+ sanics is optimal.</Text>
        <Text>
          - Avoid self-damage here as that will impact your survivability.
        </Text>
        <Text>
          - Going to wherever your teammates are may be more optimal than your
          stand if it is over-run.
        </Text>
        <Text>
          - Self clear can be very disruptive. Always shoot a heavy on flag if
          he see&apos;s you.
        </Text>
        <Text>
          - You can use a horizontal thrust to sometimes avoid the heavy on
          flag.
        </Text>
        <Title order={2}> Rock Bounces</Title>
        <video
          width="100%"
          height="100%"
          autoPlay={true}
          muted
          loop
          preload="auto"
          playsInline
        >
          <source
            src="/static/video/kata-ds-bounce.webm"
            type="video/webm"
          ></source>
          Your browser does not support .webm video.
        </video>
        <Text>
          Endgame capping. This is where the boys become men and girls become
          women.
        </Text>
        <Text>- Again, don&apos;t jet before/while hitting the rock.</Text>
        <Text>
          - To bounce off a surface, you must not be able to walk on that face.
        </Text>
        <Text>
          - You also need to be hitting a face at an angle above 15 degrees.
        </Text>
        <Text>- Dodges maps contain some really easy rocks to bounce off.</Text>
        <Title order={2}> Show me some routes</Title>
        <Text>
          Many people have pushed out a lot of interesting route videos on their
          respective channels. A lot of the pathfinder GOTY routes work for
          Parting Gifts/OOTB but may need adjusting.
        </Text>
        <Title order={3}> Videos</Title>
        <Title order={4}> Kigabit&apos;s Pathfinder GOTY</Title>
        <Text>
          - [Arx
          Novena](http://www.youtube.com/playlist?list=PLor2TDMmuFQwnmNLx9nuUsGSDmibNCCou)
        </Text>
        <Text>
          -
          [Drydock](http://www.youtube.com/playlist?list=PLor2TDMmuFQxmii8JNoFdInjV5i1HcBaW)
        </Text>
        <Text>
          - [Dangerous
          Crossing](http://www.youtube.com/playlist?list=PLor2TDMmuFQzpmX0wu4jpE4Va6G8nkcjk)
        </Text>
        <Text>
          - [Katabatic Diamond
          Sword](http://www.youtube.com/playlist?list=PLor2TDMmuFQz9ev1X4UWm3jFcvEx5mvhq)
        </Text>
        <Text>
          - [Katabatic Blood
          Eagle](http://www.youtube.com/playlist?list=PLor2TDMmuFQzShkKJSFmls9ZefKRwG5aZ)
        </Text>
        <Text>
          -
          [Tartarus](http://www.youtube.com/playlist?list=PLor2TDMmuFQxGmWe7CLKvHXfcrwa4vSRY)
        </Text>
        <Text>
          -
          [Crossfire](http://www.youtube.com/playlist?list=PLor2TDMmuFQxgVQlVt952XjigViEbwM5t)
        </Text>
        <Text>
          -
          [Permafrost](http://www.youtube.com/playlist?list=PLor2TDMmuFQxq5zzhKwk92G1aiXiIDZEp)
        </Text>
        <Text>
          - [Bella
          Omega](http://www.youtube.com/playlist?list=PLor2TDMmuFQx60qYp3XsqAPkTxEg3cOL3)
        </Text>
        <Text>
          - [Canyon Crusade
          Revival](http://www.youtube.com/playlist?list=PLor2TDMmuFQyTwG_3Vyby0sfdBOLeGu2r)
        </Text>
        <Text>
          -
          [Raindance](http://www.youtube.com/playlist?list=PLor2TDMmuFQzP3wBliilpmDv9rhKb6Uk0)
        </Text>
        <Title order={4}> Soninova&apos;s Soldier/Raider GOTY</Title>
        <Text>
          - [Katabatic Blood Eagle](http://www.youtube.com/watch?v=pGia8sVounA)
        </Text>
        <Text>
          - [Katabatic Diamond
          Sword](http://www.youtube.com/watch?v=bvrvCprj7oo)
        </Text>
        <Text>- [Arx Novena](http://www.youtube.com/watch?v=9Mz8exyhBrs)</Text>
        <Text>
          - [Dangerous Crossing](http://www.youtube.com/watch?v=W6fBtEe4938)
        </Text>
        <Text>- [Tartarus](http://www.youtube.com/watch?v=yEL3d1gN4iQ)</Text>
        <Text>- [Permafrost](http://www.youtube.com/watch?v=8EXJsaZPNeY)</Text>
        <Text>- [Bella Omega](https://youtu.be/_XGpuNuo6Zo)</Text>
        <Title order={4}> BeanZ&apos;s Light/Medium OOTB</Title>
        <Text>- [Arx Novena](https://youtu.be/CahvqJRwoWA)</Text>
        <Text>- [Hellfire](https://youtu.be/5NKH5JEvOoA)</Text>
        <Text>- [Terminus](https://youtu.be/07SAYWskQ6s)</Text>
        <Title order={4}> JackTheBlack&apos;s Pathfinder GOTY</Title>
        <Text>
          - [Incidamus](https://youtu.be/-SerjnmOvns), [TAMods route
          files](/routes/jacktheblacks-blues-routes.zip)
        </Text>
        <Text>
          - [Periculo](https://youtu.be/izQGpW2qAc8), [TAMods route
          files](/routes/jacktheblacks-periculo-routes.zip)
        </Text>
        <Text>
          - [Blues](https://youtu.be/I_VKMFYgrgA), [TAMods route
          files](/routes/jacktheblacks-blues-routes.zip)
        </Text>
        <Title order={4}> Vikatikki&apos;s Light OOTB</Title>
        <Text>- [Icecoaster](https://youtu.be/JShaimqA-MU)</Text>
        <Title order={3}> Other resources</Title>
        <Text>
          - [Small Kiwi has a guide](https://youtu.be/5aoD0HuefiU) that is out
          of date but still useful.
        </Text>
        <Title order={2}> TAMods to the rescue</Title>
        <Text>
          TAMods has some route libraries that includes routes for most
          competitive maps. Currently missing routes for maps that aren&apos;t
          played much. Using the F1 menu and selecting routes for your team is
          the way to go.
        </Text>
        <Text>
          - Any X spot is where you need a self impulse so you should start the
          throw of your nitron before the spot.
        </Text>
        <Text>
          - You can cycle through the routes for your current map using page up
          and page down.
        </Text>
        <Title order={3}> TAMods Route Files</Title>
        <Text>
          These are downloadable via the <Code>TAMods Launcher</Code>{" "}
          <Code>Packages</Code> section.
        </Text>
        <Text>
          The <Code>Recommended GOTY Routes Library</Code> is recommended for
          most players.
        </Text>
        <Text>
          A manual download is provided here. These <Code>.route</Code> files
          need to go in your{" "}
          <Code>
            \Documents\My Games\Tribes Ascend\TribesGame\config\routes
          </Code>{" "}
          directory.
        </Text>
        <Title order={4}> JPs</Title>
        <Text>
          Arx Novena, Dangerous Crossing, Drydock, Katabatic, Raindance,
          Sunstar, Tartarus.
        </Text>
        <Text>
          - [JPs Easy Pathfinder GOTY route
          files](/routes/jps-easy-pathfinder-goty-routes.zip) which contain no
          difficult rockbounces!
        </Text>
        <Text>
          - [JPs Pathfinder and Soldier GOTY route
          files](/routes/jps-pathfinder-soldier-goty-routes.zip)
        </Text>
        <Title order={4}> JackTheBlack&apos;s</Title>
        <Text>GOTY Pathfinder.</Text>
        <Text>
          - [JackTheBlack&apos;s Incidamus route
          files](/routes/jacktheblacks-incidamus-routes.zip)
        </Text>
        <Text>
          - [JackTheBlack&apos;s Periculo route
          files](/routes/jacktheblacks-periculo-routes.zip)
        </Text>
        <Text>
          - [JackTheBlack&apos;s Blues route
          files](/routes/jacktheblacks-blues-routes.zip)
        </Text>
      </div>
    </>
  );
}
