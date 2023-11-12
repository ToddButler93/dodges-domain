import { Image, Title, Text, Kbd, Table } from "@mantine/core";
import Link from "next/link";

const tableData = {
  head: ["Action", "Default Binding "],
  body: [
    ["PUG", "Pick-up Game"],
    [
      "Change Camera Angle",
      <>
        <Kbd>RMB</Kbd>
      </>,
    ],
    [
      "Camera Location",
      <>
        <Kbd>RMB</Kbd>+<Kbd>W</Kbd>
        <Kbd>A</Kbd>
        <Kbd>S</Kbd>
        <Kbd>D</Kbd>
      </>,
    ],
    [
      "Open Content Browser",
      <>
        <Kbd>Ctrl</Kbd>+<Kbd>⇧ Shift</Kbd>+<Kbd>F</Kbd>
      </>,
    ],
    [
      "Select Actor",
      <>
        <Kbd>LMB</Kbd>
      </>,
    ],
    [
      "Actor Properties",
      <>
        <Kbd>F4</Kbd>
      </>,
    ],
    [
      "Use Terrain Tool",
      <>
        <Kbd>Ctrl</Kbd>+<Kbd>RMB</Kbd>
      </>,
    ],
    [
      "Adjust Camera Move Speed",
      <>
        <Kbd>RMB</Kbd>+<Kbd>Scroll</Kbd>
      </>,
    ],
    [
      "Swap Between Move, Rotate and Scale",
      <>
        <Kbd>SpaceBar</Kbd>
      </>,
    ],
  ],
};

export default function GuideUDKBasics() {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-3">
        <Title>How to use UDK to make Tribes Maps</Title>
        <Title order={2}> Starting from Scratch</Title>
        <Text>
          This guide is aimed at people who are new to using UDK 2011.
        </Text>
        <Text>
          <span className="text-red-600"> X</span> and
          <span className="text-green-600"> Y</span> are your horizontal axis
          and
          <span className="text-blue-600"> Z</span> axis vertical.
        </Text>
        <Title order={2}> Controls</Title>
        <Text>
          Left Mouse button <Kbd>LMB</Kbd>
        </Text>
        <Text>
          Right Mouse button <Kbd>RMB</Kbd>
        </Text>
        <Text>
          Middle Mouse button <Kbd>MMB</Kbd>
        </Text>
        <Table cellPadding={6} data={tableData} />
        [Want controls used outside of this
        guide?](https://docs.unrealengine.com/udk/Three/EditorButtons.html)
        <Title order={2}> Step 1 - Create Terrain Actor</Title>
        <Text>Click Tools, click new Terrain...</Text>
        <Image
          src="/static/img/development/new-terrain.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Text>
          Location is the location of the terrain. For this guide we will leave
          it default.
        </Text>
        <Text>
          Patches is the size of the terrain. For this guide we will put 1024
          for both values.
        </Text>
        <Image
          src="/static/img/development/new-terrain-patches.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Text>Hit finish.</Text>
        <Text>
          Right click the terrain and select Actor Properties <Kbd>F4</Kbd>.
          This can be found under View then Actor Properties.
        </Text>
        <Link href="#glossary">What is an actor in UDK?</Link>
        <Text>
          To confirm a setting, make sure you hit enter after typing/pasting in
          the value.
        </Text>
        <Text>- Set Max Tesselation Level to 8</Text>
        <Text>- Set Max Component Size to 14</Text>
        <Text>
          - Set Draw Scale 3D <span className="text-red-600"> X</span> = 128,
          <span className="text-green-600"> Y</span> = 128 and
          <span className="text-blue-600"> Z</span> = 29.01
        </Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -65536 and
          <span className="text-green-600"> Y</span> = -65536
        </Text>
        <Text>- Set Static Lighting Resolution to 1</Text>
        <Text>- Set Group to &quot;Terrain&quot;</Text>
        <Image
          src="/static/img/development/new-terrain-properties.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Text>
          Note: Setting a group to all added actors will make your life a lot
          easier later down the track. I group them under Blood Eagle Base,
          Boundaries, Buildings, Rocks, ect.
        </Text>
        <Title order={2}> Step 2 - Save Level</Title>
        <Text>
          Hit File then Save Current Level. Call your map TrCTF-Basic.
        </Text>
        <Text>
          The naming convention matters. Tr is always required, CTF refers to
          the map game Mode and -Basic can be replaced with
          -WhateverMapNameYouDesire.
        </Text>
        <Title order={2}> Step 3 - Add Lighting Actors</Title>
        <Title order={3}> Sky Light</Title>
        <Text>
          Let us add an actor that will light all areas of the map but not
          create shadows.
        </Text>
        <Text>
          Open The Content Browser <Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>F</Kbd>
        </Text>
        <Text>
          Under the Actor Classes Tab use the search to find SkyLight.
        </Text>
        <Image
          src="/static/img/development/lighting-actor-skylight.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Text>Simply drag SkyLight to your scene.</Text>
        [Lost where it went?](#my-things-have-disapeared)
        <Text>
          Open Actor Properties <Kbd>F4</Kbd> for the SkyLight you just added.
        </Text>
        <Text>- Set Draw Scale to 32</Text>
        <Text>- Set Brightness to 0.5</Text>
        <Text>- Set Group to &quot;World&quot;</Text>
        <Image
          src="/static/img/development/lighting-skylight-properties.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Title order={3}> Dominant Directional Light</Title>
        <Text>
          Now let us add an actor that will act as your Sun to light the entire
          field and generate shadows.
        </Text>
        <Text>
          Open The Content Browser <Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>F</Kbd>
        </Text>
        <Text>
          Under the Actor Classes Tab use the search to find
          DominantDirectionalLight.
        </Text>
        <Text>Simply drag DominantDirectionalLight to your scene.</Text>
        [Lost where it went?](#my-things-have-disapeared)
        <Text>
          Open Actor Properties <Kbd>F4</Kbd> for the DominantDirectionalLight
          you just added.
        </Text>
        <Text>- Set Draw Scale to 32</Text>
        <Text>- Set Brightness to 0.5</Text>
        <Text>- Set Group to &quot;World&quot;</Text>
        <Image
          src="/static/img/development/lighting-dominant-direct-properties.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Text>
          To set the direction of the light source you need to adjust the
          rotation. Use the Rotation Wheel <Kbd>Space</Kbd> to set the direction
          of your lightsource.
        </Text>
        <Text>
          If you aren&quot;t sure on how to do this you can Set Rotation Pitch
          to -42.60° in the Actor Properties <Kbd>F4</Kbd>.
        </Text>
        <Text>
          Now that our map is lit we can start adding some TribesAscend Base
          Assets.
        </Text>
        [Save your level](#step-2---save-level).
        <Title order={2}> Step 4 - Add Base Assets</Title>
        <Title order={3}> Blood Eagle</Title>
        <Text>
          Under the Actor Classes Tab use the search &quot;BloodEagle&quot; to
          find Blood Eagle specific Actor Classes.
        </Text>
        <Image
          src="/static/img/development/actor-class-search.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Title order={4}> Blood Eagle Flag</Title>
        <Text>
          First lets drag in TrCTFBase_BloodEagle and open our frequent friend
          Actor Properties <Kbd>F4</Kbd>.
        </Text>
        [Lost where it went?](#my-things-have-disapeared)
        <Text>
          - Set Location <span className="text-red-600"> X</span> = 17750,
          <span className="text-green-600"> Y</span> = 0 and
          <span className="text-blue-600"> Z</span> = 59 for now.
        </Text>
        <Text>- Set Group to &quot;BloodEagle&quot;.</Text>
        <Title order={4}> Blood Eagle Generator</Title>
        <Text> Next lets drag in TrPowerGenerator_BloodEagle.</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = 18500,
          <span className="text-green-600"> Y</span> = -300 and
          <span className="text-blue-600"> Z</span> = 49 for now.
        </Text>
        <Text>- Set Group to &quot;BloodEagle&quot;.</Text>
        <Title order={4}> Blood Eagle Radar Station</Title>
        <Text> Next lets drag in TrRadarStation_BloodEagle.</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = 19000,
          <span className="text-green-600"> Y</span> = -300 and
          <span className="text-blue-600"> Z</span> = 0 for now.
        </Text>
        <Text>- Set Group to &quot;BloodEagle&quot;.</Text>
        <Title order={4}> Blood Eagle Inventory Station</Title>
        <Text>Next lets drag in TrInventoryStation_BloodEagle.</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = 18500,
          <span className="text-green-600"> Y</span> = 300 and
          <span className="text-blue-600"> Z</span> = 46 for now.
        </Text>
        <Text>- Set Group to &quot;BloodEagle&quot;.</Text>
        <Title order={4}> Blood Eagle Repair Station</Title>
        <Text>Next lets drag in TrRepairStation_BloodEagle</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = 19000,
          <span className="text-green-600"> Y</span> = 300 and
          <span className="text-blue-600"> Z</span> = 60 for now.
        </Text>
        <Text>- Set Group to &quot;BloodEagle&quot;.</Text>
        <Title order={4}> Blood Eagle Turrets</Title>
        <Text>Next lets drag in TrBaSeturret_BloodEagle</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -17000,
          <span className="text-green-600"> Y</span> = 300 and
          <span className="text-blue-600"> Z</span> = 0 for now.
        </Text>
        <Text>- Set Group to &quot;BloodEagle&quot;.</Text>
        <Text>Turret facing the wrong way? Set Yaw to 180.</Text>
        <Title order={4}> Blood Eagle Vehicle Station</Title>
        <Text>Next lets drag in TrVehicleStation_BloodEagle</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = 18500,
          <span className="text-green-600"> Y</span> = -600 and
          <span className="text-blue-600"> Z</span> = 50 for now.
        </Text>
        <Text>- Set Group to &quot;BloodEagle&quot;.</Text>
        <Text>
          We need a vehicle pad for this station. This needs to be linked up.
        </Text>
        <Text>
          Next lets drag in TrVehiclePad. You will have to change your
          ActorClasses search for this as it wont be under BloodEagle.
        </Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = 19000,
          <span className="text-green-600"> Y</span> = -1200 and
          <span className="text-blue-600"> Z</span> = 0 for now.
        </Text>
        <Text>- Set Group to &quot;BloodEagle&quot;.</Text>
        <Text>
          We need the name of the vehicle pad actor we just added. This is in
          the Actor Properties <Kbd>F4</Kbd> under Object then the value for
          Name. It should be similar to &quot;TrVehiclePad_0&quot;.
        </Text>
        <Image
          src="/static/img/development/vehiclepad-name.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Text>
          Now that we know this, we need to set our TrVehicleStation_BloodEagle
          m_Vehicle property to the name of our TrVehiclePad actor.
        </Text>
        <Text>
          Select our TrVehicleStation_BloodEagle actor and open Actor Properties
          <Kbd>F4</Kbd>.
        </Text>
        <Text>[Lost where it went?](#my-things-have-disapeared)</Text>
        <Text>- Set m_Vehicle Pad to our TrVehiclePad actors name.</Text>
        <Image
          src="/static/img/development/vehiclestation-set-name.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Text>Once you hit enter the value will altar, this is normal.</Text>
        <Text>
          Now you have setup the assets for Blood Eagle. Now for Diamond Sword!
        </Text>
        [Save your level](#step-2---save-level).
        <Image
          src="/static/img/development/blood-eagle-base.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Title order={3}> Diamond Sword</Title>
        <Text>
          Under the Actor Classes Tab use the search &quot;DiamondSword&quot; to
          find Diamond Sword specific Actor Classes.
        </Text>
        <Text>
          This time we will do grouping a little differently.
          <strong>Don&quot;t</strong>set the group property until you&quot;re
          told!
        </Text>
        <Title order={4}> Diamond Sword Flag</Title>
        <Text>
          First lets drag in TrCTFBase_DiamondSword and open our frequent friend
          Actor Properties <Kbd>F4</Kbd>.
        </Text>
        [Lost where it went?](#my-things-have-disapeared)
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -17750,
          <span className="text-green-600"> Y</span> = 0 and
          <span className="text-blue-600"> Z</span> = 59 for now.
        </Text>
        <Title order={4}> Diamond Sword Generator</Title>
        <Text>Next lets drag in TrPowerGenerator_DiamondSword.</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -18500,
          <span className="text-green-600"> Y</span> = 300 and
          <span className="text-blue-600"> Z</span> = 49 for now.
        </Text>
        <Title order={4}> Diamond Sword Radar Station</Title>
        <Text>Next lets drag in TrRadarStation_DiamondSword.</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -19000,
          <span className="text-green-600"> Y</span> = 300 and
          <span className="text-blue-600"> Z</span> = 0 for now.
        </Text>
        <Title order={4}> Diamond Sword Inventory Station</Title>
        <Text>Next lets drag in TrInventoryStation_DiamondSword.</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -18500,
          <span className="text-green-600"> Y</span> = -300 and
          <span className="text-blue-600"> Z</span> = 46 for now.
        </Text>
        <Title order={4}> Diamond Sword Repair Station</Title>
        <Text>Next lets drag in TrRepairStation_DiamondSword</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -19000,
          <span className="text-green-600"> Y</span> = -300 and
          <span className="text-blue-600"> Z</span> = 160 for now.
        </Text>
        <Title order={4}> Diamond Sword Turrets</Title>
        <Text>Next lets drag in TrBaseTurret_DiamondSword</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -17000,
          <span className="text-green-600"> Y</span> = -300 and
          <span className="text-blue-600"> Z</span> = 0 for now.
        </Text>
        <Text>Turret facing the wrong way? Set Yaw to 180.</Text>
        <Title order={4}> Diamond Sword Vehicle Station</Title>
        <Text>Next lets drag in TrVehicleStation_DiamondSword</Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -18500,
          <span className="text-green-600"> Y</span> = 600 and
          <span className="text-blue-600"> Z</span> = 50 for now.
        </Text>
        <Text>
          We need a vehicle pad for this station. This needs to be linked up.
        </Text>
        <Text>
          Next lets drag in TrVehiclePad. You will have to change your
          ActorClasses search for this as it wont be under DiamondSword.
        </Text>
        <Text>
          - Set Location <span className="text-red-600"> X</span> = -19000,
          <span className="text-green-600"> Y</span> = 1200 and
          <span className="text-blue-600"> Z</span> = 0 for now.
          <strong>Set</strong>Group to &quot;DiamondSword&quot;.
        </Text>
        <Text>
          We need the name of the vehicle pad actor we just added. This is in
          the Actor Properties <Kbd>F4</Kbd> under Object then the value for
          Name. It should be similar to &quot;TrVehiclePad_1&quot;.
        </Text>
        <Text>
          Now that we know this, we need to set our
          TrVehicleStation_DiamondSword m_Vehicle property to the name of our
          TrVehiclePad actor.
        </Text>
        <Text>
          Select our TrVehicleStation_DiamondSword actor and open Actor
          Properties <Kbd>F4</Kbd>.
        </Text>
        [Lost where it went?](#my-things-have-disapeared)
        <Text>- Set m_Vehicle Pad to our TrVehiclePad actors name.</Text>
        <Text>Once you hit enter to confirm it should look like this.</Text>
        <Title order={4}> Diamond Sword Grouping</Title>
        <Text>Now we will add the group tag a little differently.</Text>
        <Text>
          In your Content Browser, go to the Scene Tab. Hit the R Button to
          refresh the actors in this tab.
        </Text>
        <Image
          src="/static/img/development/scene-refresh-button.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Text>Under Filter Text type DiamondSword.</Text>
        <Text>
          Underneath you should now see a list of all actors with DiamondSword
          in their details.
        </Text>
        <Text>
          Select the first actor, hold shift and click the last actor.
        </Text>
        <Text>
          On the right hand side you should be able to see an actor properties
          area.
        </Text>
        <Text>- Set the Group value under Object to DiamondSword.</Text>
        <Image
          src="/static/img/development/properties-multiple-actors.png"
          alt=""
          h={200}
          w="auto"
          fit="contain"
        />
        <Text>
          Hit the R button again to refresh the actors and you should see they
          are all set to DiamondSword. Clear your Filter Text and hit the R
          Button to refresh before leaving.
        </Text>
        [Save your level](#step-2---save-level).
        <Title order={2}> Step 5 - Add Player Spawns</Title>
        <Text>
          Back to our Actor Classes search for UTTeamPlayerStart. Drag two of
          these into your map.
        </Text>
        <Text>
          To set the team for your spawn you need to set the TeamNumber property
          of the UTTeamPlayerStart Actors to 0 or 1.
        </Text>
        <Text>Blood Eagle is Team 0</Text>
        <Text>The location for this spawn for now will be</Text>
        <Text>
          - <span className="text-red-600"> X</span> = 19500
        </Text>
        <Text>
          - <span className="text-green-600"> Y</span> = 110
        </Text>
        <Text>
          - <span className="text-blue-600"> Z</span> = 150
        </Text>
        <Text>Diamond Sword is Team 1</Text>
        <Text>The location for this spawn for now will be</Text>
        <Text>
          - <span className="text-red-600"> X</span> = -19500
        </Text>
        <Text>
          - <span className="text-green-600"> Y</span> = 110
        </Text>
        <Text>
          - <span className="text-blue-600"> Z</span> = 150
        </Text>
        <Text>Remember to group these to their respective teams.</Text>
        [Save your level](#step-2---save-level).
        {/*- TODO Commenting out as incomplete.
<Title order={2}> Step 6 - Modify Terrain</Title>



[Save your level](#step-2---save-level).

<Title order={2}> Step 7 - Add Terrain Texture</Title>

[Save your level](#step-2---save-level).

<Title order={2}> Step 8 - Add Static Mesh</Title>



<Title order={2}> Step 9 - Fix Mesh Material(Textures)</Title>

[Save your level](#step-2---save-level).

<Title order={2}> Step 10 - Add Fog</Title>

Next, we want to grab a Exponential Height Fog asset from our Actor Classes search.

For this particular fog asset there are two light colors which reference our dominant directional light. Change these how you see fit.

[Save your level](#step-2---save-level).
<Title order={2}> Step 11 - Add Boundaries</Title>
*/}
        {/*TODO Explain how to set WorldInfo KillZ*/}
        {/*
[Save your level](#step-2---save-level).
*/}
        <Title order={2}> FAQ</Title>
        <Title order={3}> Where can I find my actors?</Title>
        <Text>
          Click View, Browser Windows, Scene. This shows a list of where all
          your placed actors are in the map. You can sort by Group and use the
          filter text to find certain items.
        </Text>
        <Text>
          To select the actor in the Viewport simply double click the one you
          are after.
        </Text>
        <Title order={2}> Troubleshooting</Title>
        <Title order={3}> My things have disapeared!</Title>
        <Text>
          You may have just hit <Kbd>W</Kbd>, try hitting <Kbd>W</Kbd> again in
          the Unreal Editor Viewport.
        </Text>
        <Text>If that doesn&quot;t work</Text>
        <Text>
          Click View, Browser Windows, Groups. On the left column make sure
          everything is ticked.
        </Text>
        <Title id="glossary" order={2}>
          {" "}
          Glossary
        </Title>
        <Text>Actor</Text>
        <Text>Viewport</Text>
      </div>
    </>
  );
}
