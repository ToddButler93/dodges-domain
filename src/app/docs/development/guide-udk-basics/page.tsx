import Link from "next/link";
import { Card } from "~/components/ui/card";
//import { Table } from "~/components/ui/table";
import Image from "next/image";
// TODO
// const tableData = {
//   head: ["Action", "Default Binding "],
//   body: [
//     ["PUG", "Pick-up Game"],
//     [
//       "Change Camera Angle",
//       <>
//         <kbd>RMB</kbd>
//       </>,
//     ],
//     [
//       "Camera Location",
//       <>
//         <kbd>RMB</kbd>+<kbd>W</kbd>
//         <kbd>A</kbd>
//         <kbd>S</kbd>
//         <kbd>D</kbd>
//       </>,
//     ],
//     [
//       "Open Content Browser",
//       <>
//         <kbd>Ctrl</kbd>+<kbd>⇧ Shift</kbd>+<kbd>F</kbd>
//       </>,
//     ],
//     [
//       "Select Actor",
//       <>
//         <kbd>LMB</kbd>
//       </>,
//     ],
//     [
//       "Actor Properties",
//       <>
//         <kbd>F4</kbd>
//       </>,
//     ],
//     [
//       "Use Terrain Tool",
//       <>
//         <kbd>Ctrl</kbd>+<kbd>RMB</kbd>
//       </>,
//     ],
//     [
//       "Adjust Camera Move Speed",
//       <>
//         <kbd>RMB</kbd>+<kbd>Scroll</kbd>
//       </>,
//     ],
//     [
//       "Swap Between Move, Rotate and Scale",
//       <>
//         <kbd>SpaceBar</kbd>
//       </>,
//     ],
//   ],
// };

export default function GuideUDKBasics() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow py-6 text-center">
          <h1>UDK Basics</h1>
        </Card>
        <div className="flex flex-col gap-3 p-6">
          <h1>How to use UDK to make Tribes Maps</h1>
          <h2> Starting from Scratch</h2>
          <p>This guide is aimed at people who are new to using UDK 2011.</p>
          <p>
            <span className="text-red-600"> X</span> and
            <span className="text-green-600"> Y</span> are your horizontal axis
            and
            <span className="text-blue-600"> Z</span> axis vertical.
          </p>
          <h2> Controls</h2>
          <p>
            Left Mouse button <kbd>LMB</kbd>
          </p>
          <p>
            Right Mouse button <kbd>RMB</kbd>
          </p>
          <p>
            Middle Mouse button <kbd>MMB</kbd>
          </p>
          {/* TODO <Table data={tableData} /> */}
          <Link href="https://docs.unrealengine.com/udk/Three/EditorButtons.html">
            Want controls used outside of this guide?
          </Link>
          <h2> Step 1 - Create Terrain Actor</h2>
          <p>Click Tools, click new Terrain...</p>
          <Image
            width={1500}
            height={1500}
            src="/static/img/development/new-terrain.png"
            alt=""
          />
          <p>
            Location is the location of the terrain. For this guide we will
            leave it default.
          </p>
          <p>
            Patches is the size of the terrain. For this guide we will put 1024
            for both values.
          </p>
          <Image
            width={1500}
            height={1500}
            src="/static/img/development/new-terrain-patches.png"
            alt=""
          />
          <p>Hit finish.</p>
          <p>
            Right click the terrain and select Actor Properties <kbd>F4</kbd>.
            This can be found under View then Actor Properties.
          </p>
          <Link href="#glossary">What is an actor in UDK?</Link>
          <p>
            To confirm a setting, make sure you hit enter after typing/pasting
            in the value.
          </p>
          <p>- Set Max Tesselation Level to 8</p>
          <p>- Set Max Component Size to 14</p>
          <p>
            - Set Draw Scale 3D <span className="text-red-600"> X</span> = 128,
            <span className="text-green-600"> Y</span> = 128 and
            <span className="text-blue-600"> Z</span> = 29.01
          </p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -65536 and
            <span className="text-green-600"> Y</span> = -65536
          </p>
          <p>- Set Static Lighting Resolution to 1</p>
          <p>- Set Group to &quot;Terrain&quot;</p>
          <Image
            width={500}
            height={500}
            src="/static/img/development/new-terrain-properties.png"
            alt=""
          />
          <p>
            Note: Setting a group to all added actors will make your life a lot
            easier later down the track. I group them under Blood Eagle Base,
            Boundaries, Buildings, Rocks, ect.
          </p>
          <h2 id="step-2---save-level"> Step 2 - Save Level</h2>
          <p>Hit File then Save Current Level. Call your map TrCTF-Basic.</p>
          <p>
            The naming convention matters. Tr is always required, CTF refers to
            the map game Mode and -Basic can be replaced with
            -WhateverMapNameYouDesire.
          </p>
          <h2> Step 3 - Add Lighting Actors</h2>
          <h3> Sky Light</h3>
          <p>
            Let us add an actor that will light all areas of the map but not
            create shadows.
          </p>
          <p>
            Open The Content Browser <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+
            <kbd>F</kbd>
          </p>
          <p>Under the Actor Classes Tab use the search to find SkyLight.</p>
          <Image
            width={1500}
            height={500}
            src="/static/img/development/lighting-actor-skylight.png"
            alt=""
          />
          <p>Simply drag SkyLight to your scene.</p>
          <Link href="#my-things-have-disapeared">Lost where it went?</Link>
          <p>
            Open Actor Properties <kbd>F4</kbd> for the SkyLight you just added.
          </p>
          <p>- Set Draw Scale to 32</p>
          <p>- Set Brightness to 0.5</p>
          <p>- Set Group to &quot;World&quot;</p>
          <Image
            width={1500}
            height={500}
            src="/static/img/development/lighting-skylight-properties.png"
            alt=""
          />
          <h3> Dominant Directional Light</h3>
          <p>
            Now let us add an actor that will act as your Sun to light the
            entire field and generate shadows.
          </p>
          <p>
            Open The Content Browser <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+
            <kbd>F</kbd>
          </p>
          <p>
            Under the Actor Classes Tab use the search to find
            DominantDirectionalLight.
          </p>
          <p>Simply drag DominantDirectionalLight to your scene.</p>
          <Link href="#my-things-have-disapeared">Lost where it went?</Link>
          <p>
            Open Actor Properties <kbd>F4</kbd> for the DominantDirectionalLight
            you just added.
          </p>
          <p>- Set Draw Scale to 32</p>
          <p>- Set Brightness to 0.5</p>
          <p>- Set Group to &quot;World&quot;</p>
          <Image
            width={500}
            height={500}
            src="/static/img/development/lighting-dominant-direct-properties.png"
            alt=""
          />
          <p>
            To set the direction of the light source you need to adjust the
            rotation. Use the Rotation Wheel <kbd>Space</kbd> to set the
            direction of your lightsource.
          </p>
          <p>
            If you aren&quot;t sure on how to do this you can Set Rotation Pitch
            to -42.60° in the Actor Properties <kbd>F4</kbd>.
          </p>
          <p>
            Now that our map is lit we can start adding some TribesAscend Base
            Assets.
          </p>
          <Link href="#step-2---save-level">Save your level.</Link>
          <h2> Step 4 - Add Base Assets</h2>
          <h3> Blood Eagle</h3>
          <p>
            Under the Actor Classes Tab use the search &quot;BloodEagle&quot; to
            find Blood Eagle specific Actor Classes.
          </p>
          <Image
            width={1500}
            height={1500}
            src="/static/img/development/actor-class-search.png"
            alt=""
          />
          <h4> Blood Eagle Flag</h4>
          <p>
            First lets drag in TrCTFBase_BloodEagle and open our frequent friend
            Actor Properties <kbd>F4</kbd>.
          </p>
          <Link href="#my-things-have-disapeared">Lost where it went?</Link>
          <p>
            - Set Location <span className="text-red-600"> X</span> = 17750,
            <span className="text-green-600"> Y</span> = 0 and
            <span className="text-blue-600"> Z</span> = 59 for now.
          </p>
          <p>- Set Group to &quot;BloodEagle&quot;.</p>
          <h4> Blood Eagle Generator</h4>
          <p> Next lets drag in TrPowerGenerator_BloodEagle.</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = 18500,
            <span className="text-green-600"> Y</span> = -300 and
            <span className="text-blue-600"> Z</span> = 49 for now.
          </p>
          <p>- Set Group to &quot;BloodEagle&quot;.</p>
          <h4> Blood Eagle Radar Station</h4>
          <p> Next lets drag in TrRadarStation_BloodEagle.</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = 19000,
            <span className="text-green-600"> Y</span> = -300 and
            <span className="text-blue-600"> Z</span> = 0 for now.
          </p>
          <p>- Set Group to &quot;BloodEagle&quot;.</p>
          <h4> Blood Eagle Inventory Station</h4>
          <p>Next lets drag in TrInventoryStation_BloodEagle.</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = 18500,
            <span className="text-green-600"> Y</span> = 300 and
            <span className="text-blue-600"> Z</span> = 46 for now.
          </p>
          <p>- Set Group to &quot;BloodEagle&quot;.</p>
          <h4> Blood Eagle Repair Station</h4>
          <p>Next lets drag in TrRepairStation_BloodEagle</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = 19000,
            <span className="text-green-600"> Y</span> = 300 and
            <span className="text-blue-600"> Z</span> = 60 for now.
          </p>
          <p>- Set Group to &quot;BloodEagle&quot;.</p>
          <h4> Blood Eagle Turrets</h4>
          <p>Next lets drag in TrBaSeturret_BloodEagle</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -17000,
            <span className="text-green-600"> Y</span> = 300 and
            <span className="text-blue-600"> Z</span> = 0 for now.
          </p>
          <p>- Set Group to &quot;BloodEagle&quot;.</p>
          <p>Turret facing the wrong way? Set Yaw to 180.</p>
          <h4> Blood Eagle Vehicle Station</h4>
          <p>Next lets drag in TrVehicleStation_BloodEagle</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = 18500,
            <span className="text-green-600"> Y</span> = -600 and
            <span className="text-blue-600"> Z</span> = 50 for now.
          </p>
          <p>- Set Group to &quot;BloodEagle&quot;.</p>
          <p>
            We need a vehicle pad for this station. This needs to be linked up.
          </p>
          <p>
            Next lets drag in TrVehiclePad. You will have to change your
            ActorClasses search for this as it wont be under BloodEagle.
          </p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = 19000,
            <span className="text-green-600"> Y</span> = -1200 and
            <span className="text-blue-600"> Z</span> = 0 for now.
          </p>
          <p>- Set Group to &quot;BloodEagle&quot;.</p>
          <p>
            We need the name of the vehicle pad actor we just added. This is in
            the Actor Properties <kbd>F4</kbd> under Object then the value for
            Name. It should be similar to &quot;TrVehiclePad_0&quot;.
          </p>
          <Image
            width={1500}
            height={1500}
            src="/static/img/development/vehiclepad-name.png"
            alt=""
          />
          <p>
            Now that we know this, we need to set our
            TrVehicleStation_BloodEagle m_Vehicle property to the name of our
            TrVehiclePad actor.
          </p>
          <p>
            Select our TrVehicleStation_BloodEagle actor and open Actor
            Properties
            <kbd>F4</kbd>.
          </p>
          <p>
            <Link href="#my-things-have-disapeared">Lost where it went?</Link>
          </p>
          <p>- Set m_Vehicle Pad to our TrVehiclePad actors name.</p>
          <Image
            width={1500}
            height={1500}
            src="/static/img/development/vehiclestation-set-name.png"
            alt=""
          />
          <p>Once you hit enter the value will altar, this is normal.</p>
          <p>
            Now you have setup the assets for Blood Eagle. Now for Diamond
            Sword!
          </p>
          <Link href="#step-2---save-level">Save your level.</Link>
          <Image
            width={1500}
            height={1500}
            src="/static/img/development/blood-eagle-base.png"
            alt=""
          />
          <h3> Diamond Sword</h3>
          <p>
            Under the Actor Classes Tab use the search &quot;DiamondSword&quot;
            to find Diamond Sword specific Actor Classes.
          </p>
          <p>
            This time we will do grouping a little differently.
            <strong>Don&quot;t</strong>set the group property until you&quot;re
            told!
          </p>
          <h4> Diamond Sword Flag</h4>
          <p>
            First lets drag in TrCTFBase_DiamondSword and open our frequent
            friend Actor Properties <kbd>F4</kbd>.
          </p>
          <Link href="#my-things-have-disapeared">Lost where it went?</Link>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -17750,
            <span className="text-green-600"> Y</span> = 0 and
            <span className="text-blue-600"> Z</span> = 59 for now.
          </p>
          <h4> Diamond Sword Generator</h4>
          <p>Next lets drag in TrPowerGenerator_DiamondSword.</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -18500,
            <span className="text-green-600"> Y</span> = 300 and
            <span className="text-blue-600"> Z</span> = 49 for now.
          </p>
          <h4> Diamond Sword Radar Station</h4>
          <p>Next lets drag in TrRadarStation_DiamondSword.</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -19000,
            <span className="text-green-600"> Y</span> = 300 and
            <span className="text-blue-600"> Z</span> = 0 for now.
          </p>
          <h4> Diamond Sword Inventory Station</h4>
          <p>Next lets drag in TrInventoryStation_DiamondSword.</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -18500,
            <span className="text-green-600"> Y</span> = -300 and
            <span className="text-blue-600"> Z</span> = 46 for now.
          </p>
          <h4> Diamond Sword Repair Station</h4>
          <p>Next lets drag in TrRepairStation_DiamondSword</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -19000,
            <span className="text-green-600"> Y</span> = -300 and
            <span className="text-blue-600"> Z</span> = 160 for now.
          </p>
          <h4> Diamond Sword Turrets</h4>
          <p>Next lets drag in TrBaseTurret_DiamondSword</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -17000,
            <span className="text-green-600"> Y</span> = -300 and
            <span className="text-blue-600"> Z</span> = 0 for now.
          </p>
          <p>Turret facing the wrong way? Set Yaw to 180.</p>
          <h4> Diamond Sword Vehicle Station</h4>
          <p>Next lets drag in TrVehicleStation_DiamondSword</p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -18500,
            <span className="text-green-600"> Y</span> = 600 and
            <span className="text-blue-600"> Z</span> = 50 for now.
          </p>
          <p>
            We need a vehicle pad for this station. This needs to be linked up.
          </p>
          <p>
            Next lets drag in TrVehiclePad. You will have to change your
            ActorClasses search for this as it wont be under DiamondSword.
          </p>
          <p>
            - Set Location <span className="text-red-600"> X</span> = -19000,
            <span className="text-green-600"> Y</span> = 1200 and
            <span className="text-blue-600"> Z</span> = 0 for now.
            <strong>Set</strong>Group to &quot;DiamondSword&quot;.
          </p>
          <p>
            We need the name of the vehicle pad actor we just added. This is in
            the Actor Properties <kbd>F4</kbd> under Object then the value for
            Name. It should be similar to &quot;TrVehiclePad_1&quot;.
          </p>
          <p>
            Now that we know this, we need to set our
            TrVehicleStation_DiamondSword m_Vehicle property to the name of our
            TrVehiclePad actor.
          </p>
          <p>
            Select our TrVehicleStation_DiamondSword actor and open Actor
            Properties <kbd>F4</kbd>.
          </p>
          <Link href="#my-things-have-disapeared">Lost where it went?</Link>
          <p>- Set m_Vehicle Pad to our TrVehiclePad actors name.</p>
          <p>Once you hit enter to confirm it should look like this.</p>
          <h4> Diamond Sword Grouping</h4>
          <p>Now we will add the group tag a little differently.</p>
          <p>
            In your Content Browser, go to the Scene Tab. Hit the R Button to
            refresh the actors in this tab.
          </p>
          <Image
            width={1500}
            height={1500}
            src="/static/img/development/scene-refresh-button.png"
            alt=""
          />
          <p>Under Filter p type DiamondSword.</p>
          <p>
            Underneath you should now see a list of all actors with DiamondSword
            in their details.
          </p>
          <p>Select the first actor, hold shift and click the last actor.</p>
          <p>
            On the right hand side you should be able to see an actor properties
            area.
          </p>
          <p>- Set the Group value under Object to DiamondSword.</p>
          <Image
            width={1500}
            height={1500}
            src="/static/img/development/properties-multiple-actors.png"
            alt=""
          />
          <p>
            Hit the R button again to refresh the actors and you should see they
            are all set to DiamondSword. Clear your Filter p and hit the R
            Button to refresh before leaving.
          </p>
          <Link href="#step-2---save-level">Save your level.</Link>
          <h2> Step 5 - Add Player Spawns</h2>
          <p>
            Back to our Actor Classes search for UTTeamPlayerStart. Drag two of
            these into your map.
          </p>
          <p>
            To set the team for your spawn you need to set the TeamNumber
            property of the UTTeamPlayerStart Actors to 0 or 1.
          </p>
          <p>Blood Eagle is Team 0</p>
          <p>The location for this spawn for now will be</p>
          <p>
            - <span className="text-red-600"> X</span> = 19500
          </p>
          <p>
            - <span className="text-green-600"> Y</span> = 110
          </p>
          <p>
            - <span className="text-blue-600"> Z</span> = 150
          </p>
          <p>Diamond Sword is Team 1</p>
          <p>The location for this spawn for now will be</p>
          <p>
            - <span className="text-red-600"> X</span> = -19500
          </p>
          <p>
            - <span className="text-green-600"> Y</span> = 110
          </p>
          <p>
            - <span className="text-blue-600"> Z</span> = 150
          </p>
          <p>Remember to group these to their respective teams.</p>
          <Link href="#step-2---save-level">Save your level.</Link>
          {/*- TODO Commenting out as incomplete.
  <h2> Step 6 - Modify Terrain</h1>



  <Link href="#step-2---save-level">Save your level.</Link>

  <h2> Step 7 - Add Terrain pure</h1>

  <Link href="#step-2---save-level">Save your level.</Link>

  <h2> Step 8 - Add Static Mesh</h1>



  <h2> Step 9 - Fix Mesh Material(pures)</h1>

  <Link href="#step-2---save-level">Save your level.</Link>

  <h2> Step 10 - Add Fog</h1>

  Next, we want to grab a Exponential Height Fog asset from our Actor Classes search.

  For this particular fog asset there are two light colors which reference our dominant directional light. Change these how you see fit.

  <Link href="#step-2---save-level">Save your level.</Link>
  <h2> Step 11 - Add Boundaries</h1>
  */}
          {/*TODO Explain how to set WorldInfo KillZ*/}
          {/*
  <Link href="#step-2---save-level">Save your level.</Link>
  */}
          <h2> FAQ</h2>
          <h3> Where can I find my actors?</h3>
          <p>
            Click View, Browser Windows, Scene. This shows a list of where all
            your placed actors are in the map. You can sort by Group and use the
            filter p to find certain items.
          </p>
          <p>
            To select the actor in the Viewport simply double click the one you
            are after.
          </p>
          <h2>Troubleshooting</h2>
          <h3 id="my-things-have-disapeared">My things have disapeared!</h3>
          <p>
            You may have just hit <kbd>W</kbd>, try hitting <kbd>W</kbd> again
            in the Unreal Editor Viewport.
          </p>
          <p>If that doesn&quot;t work</p>
          <p>
            Click View, Browser Windows, Groups. On the left column make sure
            everything is ticked.
          </p>
          <h2 id="glossary">Glossary</h2>
          <p>Actor</p>
          <p>Viewport</p>
        </div>
      </div>
    </>
  );
}
