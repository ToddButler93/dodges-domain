import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function GuideCapping() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Capping - Tribes Ascend</h1>
        </Card>

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
            src="https://utfs.io/f/c991f3e7-4237-4587-9c19-b5fd7197240b-43pq94.webm"
            type="video/webm"
          ></source>
          Your browser does not support .webm video.
        </video>
        <div className="flex flex-col gap-3">
          <h2> Gaining Speed</h2>
          <h3> Real Basics</h3>
          {/* TODO Move to guide-movement */}
          <ul className="list-disc p-3">
            <li>Right-click makes you use your jetpack which sends you up.</li>
            <li>Space lets you ski on the ground with no friction.</li>
            <li>Shooting yourself can be useful to gain momentum.</li>
            <li>Thrusting makes you go forward off the starting line.</li>
            <li>Angles of the slope you are or about to be on matter.</li>
            <li>There is a skiing tutorial in-game.</li>
            <li>
              Gravity is the force by which a planet or other body draws objects
              toward its center.
            </li>
          </ul>
          <h3> Slightly less basic, basics</h3>
          <ul className="list-disc p-3">
            <li>
              Jetting while you are heading towards the ground is bad for your
              speed but missing the next hill is worse.
            </li>
            <li>
              Jetting while going up an upwards slope can preserve a lot of your
              momentum compared to just skiing.
            </li>
            <li>Jetting while hitting the ground can help you avoid damage.</li>
            <li>
              Holding a directional key can adjust where you are going and help
              you slow down.
            </li>
            <li>
              Jetting while holding a directional key can help you go higher.
            </li>
            <li>
              The faster you are, the harder it is to control where you go.
            </li>
            <li>
              While you have no energy, it is best to spam your jet key rather
              than hold it down.
            </li>
          </ul>
          <h3> How do cappers consistently grab the flag fast?</h3>
          <ul className="list-disc p-3">
            <li>
              <Link href="#show-me-some-routes">Rotues</Link>, learn them.
            </li>
          </ul>
          <h3> How do cappers change direction so abruptly?</h3>
          <ul className="list-disc p-3">
            <li>
              Rock bounces which can take many hours to learn to very little
              time to learn.
            </li>
            <li>
              You can bounce off rocks as long as you aren&apos;t using jets.
            </li>
            <li>
              Some of these routes are significantly more consistent with a
              Jump(without jets) bind.
            </li>
            <li>
              A lot of these bounces can be a lot easier if you have a mentor to
              explain the specifics of one bounce.
            </li>
          </ul>
          <h3> How to be the best capper ever</h3>
          <ul className="list-disc p-3">
            <li>Learn consistent low visibility routes for all maps.</li>
            <li>Sync with other cappers and your offence.</li>
            <li>Learn how to duel.</li>
            <li>
              Learn from someone who can cap rather than learning from Dodge.
            </li>
          </ul>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> Communication</h2>
          <div className="flex">
            <Button asChild size="lg">
              <Link href="#glossary">Glossary</Link>
            </Button>
          </div>
          Communicating your position and intention allows your teammates to
          clear the enemy defense allowing you to grab or work with you getting
          the flag home. Learning time calls for your routes is incredibly
          important. Calling times every 5 seconds is a good rule of thumb to
          make sure your teammates know when to hit the stand or snipe.
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> Returning home</h2>
          <ul className="list-disc p-3">
            <li>
              Minimizing return time is the best thing you can do to secure the
              cap.
            </li>
            <li>Grabbing flags at 320+ sanics is optimal.</li>
            <li>
              Avoid self-damage here as that will impact your survivability.
            </li>
            <li>
              Going to wherever your teammates are may be more optimal than your
              stand if it is over-run.
            </li>
            <li>
              Self clear can be very disruptive. Always shoot a heavy on flag if
              he see&apos;s you.
            </li>
            <li>
              You can use a horizontal thrust to sometimes avoid the heavy on
              flag.
            </li>
          </ul>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> Rock Bounces</h2>
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
              src="https://utfs.io/f/b8660dcd-42d5-457e-8b98-7ecdf8f3dffd-cuncsc.webm"
              type="video/webm"
            ></source>
            Your browser does not support .webm video.
          </video>
          <p className="pt-3">
            Endgame capping. This is where the boys become men and girls become
            women.
          </p>
          <ul className="list-disc p-3">
            <li>Again, don&apos;t jet before/while hitting the rock.</li>
            <li>
              To bounce off a surface, you must not be able to walk on that
              face.
            </li>
            <li>
              You also need to be hitting a face at an angle above 15 degrees.
            </li>
            <li>Dodges maps contain some really easy rocks to bounce off.</li>
          </ul>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> Show me some routes</h2>
          <p>
            Many people have pushed out a lot of interesting route videos on
            their respective channels. A lot of the pathfinder GOTY routes work
            for Parting Gifts/OOTB but may need adjusting.
          </p>
          <h3> Videos</h3>
          <h4> Kigabit&apos;s Pathfinder GOTY</h4>
          <ul className="list-disc p-3">
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQwnmNLx9nuUsGSDmibNCCouy"
              >
                Arx Novena
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQxmii8JNoFdInjV5i1HcBaW"
              >
                Drydock
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQzpmX0wu4jpE4Va6G8nkcjk"
              >
                Dangerous Crossing
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQz9ev1X4UWm3jFcvEx5mvhq"
              >
                Katabatic Diamond Sword
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQzShkKJSFmls9ZefKRwG5aZ"
              >
                Katabatic Blood Eagle
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQxGmWe7CLKvHXfcrwa4vSRY"
              >
                Tartarus
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQxgVQlVt952XjigViEbwM5t"
              >
                Crossfire
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQxq5zzhKwk92G1aiXiIDZEp"
              >
                Permafrost
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQx60qYp3XsqAPkTxEg3cOL3"
              >
                Bella Omega
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQyTwG_3Vyby0sfdBOLeGu2r"
              >
                Canyon Crusade Revival
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/playlist?list=PLor2TDMmuFQzP3wBliilpmDv9rhKb6Uk0"
              >
                Raindance
              </Link>
            </li>
          </ul>
          <h4> Soninova&apos;s Soldier/Raider GOTY</h4>
          <ul className="list-disc p-3">
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/watch?v=pGia8sVounA"
              >
                Katabatic Blood Eagle
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/watch?v=bvrvCprj7oo"
              >
                Katabatic Diamond Sword
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/watch?v=9Mz8exyhBrs"
              >
                Arx Novena
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/watch?v=W6fBtEe4938"
              >
                Dangerous Crossing
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/watch?v=yEL3d1gN4iQ"
              >
                Tartarus
              </Link>
            </li>
            <li>
              <Link
                passHref={true}
                href="https://www.youtube.com/watch?v=8EXJsaZPNeY"
              >
                Permafrost
              </Link>
            </li>
            <li>
              <Link passHref={true} href="https://youtu.be/_XGpuNuo6Zo">
                Bella Omega
              </Link>
            </li>
          </ul>
          <h4> BeanZ&apos;s Light/Medium OOTB</h4>
          <ul className="list-disc p-3">
            <li>
              <Link passHref={true} href="https://youtu.be/CahvqJRwoWA">
                Arx Novena
              </Link>
            </li>
            <li>
              <Link passHref={true} href="https://youtu.be/5NKH5JEvOoA">
                Hellfire
              </Link>
            </li>
            <li>
              <Link passHref={true} href="https://youtu.be/07SAYWskQ6s">
                Terminus
              </Link>
            </li>
          </ul>
          <h4> JackTheBlack&apos;s Pathfinder GOTY</h4>
          <ul className="list-disc p-3">
            <li>
              <Link passHref={true} href="https://youtu.be/-SerjnmOvns">
                Incidamus
              </Link>
              ,{" "}
              <Link href="https://utfs.io/f/d6043add-db9d-41b3-9b79-07af61f12768-c0zja3.zip">
                TAMods routefiles
              </Link>
            </li>
            <li>
              <Link passHref={true} href="https://youtu.be/izQGpW2qAc8">
                Periculo
              </Link>
              ,{" "}
              <Link href="https://utfs.io/f/39a7de97-4c95-4195-997c-5c30ac5adb09-lxj441.zip">
                TAMods route files
              </Link>
            </li>
            <li>
              <Link passHref={true} href="https://youtu.be/I_VKMFYgrgA">
                Blues
              </Link>
              ,{" "}
              <Link href="https://utfs.io/f/d6043add-db9d-41b3-9b79-07af61f12768-c0zja3.zip">
                TAMods route files
              </Link>
            </li>
          </ul>

          <h4> Vikatikki&apos;s Light OOTB</h4>
          <Link passHref={true} href="https://youtu.be/JShaimqA-MU">
            Icecoaster
          </Link>
          <h3> Other resources</h3>
          <p>
            Small Kiwi has a{" "}
            <Link passHref={true} href="https://youtu.be/5aoD0HuefiU">
              guide
            </Link>{" "}
            that is out of date but still useful.
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2> TAMods to the rescue</h2>
          <p>
            TAMods has some route libraries that includes routes for most
            competitive maps. Currently missing routes for maps that aren&apos;t
            played much. Using the F1 menu and selecting routes for your team is
            the way to go.
          </p>
          <ul className="list-disc p-3">
            <li>
              Any X spot is where you need a self impulse so you should start
              the throw of your nitron before the spot.
            </li>
            <li>
              You can cycle through the routes for your current map using page
              up and page down.
            </li>
          </ul>
          <h3> TAMods Route Files</h3>
          <p>
            These are downloadable via the <b>TAMods Launcher</b>{" "}
            <b>Packages</b> section.
          </p>
          <p>
            The <b>Recommended GOTY Routes Library</b> is recommended for most
            players.
          </p>
          <p>
            A manual download is provided here. These <b>.route</b> files need
            to go in your{" "}
            <b>\Documents\My Games\Tribes Ascend\TribesGame\config\routes</b>{" "}
            directory.
          </p>
          <h4> JPs</h4>
          <p className="flex flex-col gap-3">
            Arx Novena, Dangerous Crossing, Drydock, Katabatic, Raindance,
            Sunstar, Tartarus.{" "}
            <Link href="https://utfs.io/f/a66b4442-4934-4a8b-8b3e-381dfe5fabc4-952e9f.zip">
              JPs Easy Pathfinder GOTY route files
            </Link>{" "}
            which contain no difficult rockbounces!{" "}
            <Link href="https://utfs.io/f/f39ec78f-08d3-4881-a958-ee24ce368189-mm4upv.zip">
              JPs Pathfinder and Soldier GOTY route files
            </Link>
          </p>
          <h4> JackTheBlack&apos;s</h4>
          <p>GOTY Pathfinder.</p>
          <p className="flex flex-col gap-3">
            <Link href="https://utfs.io/f/1149de1b-9ac4-4faa-b874-ef8059e8d3f0-cly92z.zip">
              JackTheBlack&apos;s Incidamus route files
            </Link>
            <Link href="https://utfs.io/f/39a7de97-4c95-4195-997c-5c30ac5adb09-lxj441.zip">
              JackTheBlack&apos;s Periculo route files
            </Link>
            <Link href="https://utfs.io/f/d6043add-db9d-41b3-9b79-07af61f12768-c0zja3.zip">
              JackTheBlack&apos;s Blues route files
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
