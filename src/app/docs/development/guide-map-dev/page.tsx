import { Button, Code, Title, Text, Kbd } from "@mantine/core";
import Link from "next/link";

export default function GuideConfig() {
  return (
    <>
      <div className="flex max-w-6xl flex-col gap-3">
        <Title> Setting up UDK for Tribes Ascend Maps </Title>
        <Text>
          If you are interested in map development I recommend joining the
          discord and asking for assistance. We are excited to help out new map
          makers.
        </Text>
        <Button
          component={Link}
          href="https://discord.gg/dd8JgzJ"
          variant="default"
        >
          Tribes Ascend Community Discord
        </Button>
        <Title order={2}> Setting up UDK</Title>
        <Title order={3}> Step 1</Title>
        <Text>
          You need to download and install [UDK build 7748 BETA January
          2011](http://library.theexiled.pwnageservers.com/file.php?id=2964) to
          create maps for Tribes Ascend.
        </Text>
        <Text>
          You need to download the [TA actor
          classes](http://library.theexiled.pwnageservers.com/file.php?id=2948).
          Extract the <Code>TribesGame</Code>folder to
          <Code>\UDK\UDK-2011-01\Development\Src\</Code>and the
          <Code>TA_BaseAssets.upk</Code>to
          <Code>\UDK\UDK-2011-01\UDKGame\Content\</Code>
        </Text>
        <Text>
          You need to download all the [TA package
          files](https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing).
          Extract these to <Code>\UDK\UDK-2011-01\UDKGame\Content</Code>
        </Text>
        <Text>
          It is recommended to use the latest map file releases to give yourself
          a head start with assets:
        </Text>
        <Text>
          - [Dodge&apos;s Map
          Pack](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack.zip)
          - [Dodge&apos;s Map Pack
          2](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack-2.zip)
          - [Dodge&apos;s Map Pack
          3](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack-3.zip)
          - [Dodge&apos;s Map Pack
          4](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack-4.zip)
          - [Dodge&apos;s Treacherous
          Series](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-treacherous-series.zip)
          - [Evil&apos;s Map
          Pack](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/evil-map-pack.zip)
          - [Evil&apos;s Map Pack
          2](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/evil-map-pack-2.zip)
          - [Krogoth&apos;s Map
          Pack](https://tamods-update.s3-ap-southeast-2.amazonaws.com/packages/krogoth-map-pack.zip)
          - [Nerve&apos;s Map
          Pack](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/nerve-map-pack.zip)
          - [Kali&apos;s Map
          Pack](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/kali-map-pack.zip)
        </Text>
        <Text>
          These zip files have a directory strcture which is
          <Code>!TRIBESDIR\TribesGame\CookedPC\Maps\</Code>
        </Text>
        <Text>
          All .upk files will go into your
          <Code>\UDK\UDK-2011-01\UDKGame\Content\</Code>folder. Where as the
          maps can go into <Code>\UDK\UDK-2011-01\UDKGame\Content\Maps</Code>
        </Text>
        <Text>
          Note: You will need the Package Files to play and test the map on the
          [leaked dev build](#launching-custom-maps-on-leaked-dev-build) and
          [official
          client](/docs/guide-install-setup#playing-custom-maps-on-the-official-game),
          it is best to copy these now before you delete the downloaded archive.
        </Text>
        <Title order={3}> Step 2</Title>
        <Text>
          After UDK is installed, go to
          <Code>\UDK\UDK-2011-01\UDKGame\Config\</Code>and open
          <Code>UDKEngine.ini</Code>in a text editor. Search for
          <Code>[UnrealEd.EditorEngine]</Code>and at the end of that section on
          a new line write <Code>ModEditPackages=TribesGame</Code> Save the file
          and close the editor.
        </Text>
        <Title order={3}> Step 3</Title>
        <Text>
          Launch the UDK Editor, when asked to update the outdated scripts hit
          <strong>yes</strong>. Wait for the success message then close it and
          reopen UDK Editor to get started.
        </Text>
        <Title order={2}> Required Knowledge</Title>
        <Text>
          Do not save over one of the downloaded package files. If you want to
          add custom textures/meshes to your map you should create a new package
          file.
        </Text>
        <Text>
          Map files(.fmap) require specific file naming to work in Tribes
          Ascend. <Code>TrGameMode-MapName</Code>where the CTF map Arx Novena is
          named <Code>TrCTF-ArxNovena</Code>
        </Text>
        <Title order={2}> Your First Map</Title>
        <Title order={3}> Step 1</Title>
        <Text>
          - [Basic CTF Map
          Download](https://drive.google.com/file/d/1nZ1McI3DhilrHNxbm5a0KVFPkDy9WfA0/view?usp=sharing)
          - [Basic Arena Map
          Download](https://drive.google.com/file/d/1doKK3ycGZhN3tjQJ7khoXQPRP8pQjDZZ/view?usp=sharing)
        </Text>
        <Text>
          These should be placed in
          <Code>\UDK\UDK-2011-01\UDKGame\Content\Maps\</Code>
        </Text>
        <Text>
          Launch UDK and open the map you wish to edit in your Maps folder.
        </Text>
        <Title order={3}> Step 2</Title>
        <Text>
          Now you are free to do editing however you see fit. I recommend
          modifying the terrain, adding material to the terrain and adding a
          couple of random static meshes from the TA packages within the content
          browser to get yourself familiar with UDK. When you feel like you are
          ready to test the map out. Hit <Code>Build</Code>then
          <Code>Build All</Code> Hit File then Save Current Level. Close the UDK
          Editor and save any asset packages <strong>you</strong> created.
        </Text>
        <Title order={3}> Step 3</Title>
        <Text>
          You will need to complete Step 1 of [the workaround to for the
          refshadercache](#refshadercache-compiler-error) before you build and
          test your map.
        </Text>
        <Text>
          Open <Code>\UDK\UDK-2011-01\BinariesUnrealFrontend.exe</Code>
        </Text>
        <Text>
          Select the profile <Code>DM-Deck</Code>and remove
          <Code>DM-Deck.udk</Code>under <Code>Maps to Cook</Code> Add your
          custom map, click Cook and then Cook Packages. Exit Unreal Frontend
          once completed.
        </Text>
        <Text>Now your map should be ready to be tested!</Text>
        <Title order={2}> Testing Maps</Title>
        <Title order={3}> Launching Custom Maps on Leaked Dev Build</Title>
        <Text>
          You need the [leaked dev
          build](http://library.theexiled.pwnageservers.com/category.php?id=200)
          of Tribes Ascend.
        </Text>
        <Text>
          An easy way to launch the map is with the [dev client
          launcher](http://library.theexiled.pwnageservers.com/file.php?id=2942)
        </Text>
        <Title order={4}> Easy way</Title>
        <Title order={5}> Step 1</Title>
        <Text>
          Extract the [TA package
          files](https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing)
          to the dev builds <Code>\TribesGame\CookedPC\Maps\</Code>folder.
        </Text>
        <Title order={5}> Step 2</Title>
        <Text>
          Copy <Code>RefShaderCache-PC-D3D-SM3.upk</Code>in
          <Code>C:\UDK\UDK-2011-01\UDKGame\CookedPC\</Code>and paste it into
          <Code>\Tribes\TribesGame\CookedPC\</Code>
        </Text>
        <Text>
          Copy the uncooked map from
          <Code>\UDK\UDK-2011-01\UDKGame\Content\Maps\</Code>to
          <Code>\Tribes\TribesGame\CookedPC\Maps\</Code>
        </Text>
        <Text>
          Copy any asset packages you&apos;ve created from
          <Code>\UDK\UDK-2011-01\UDKGame\Content\</Code>to
          <Code>\Tribes\TribesGame\CookedPC\Maps\</Code>
        </Text>
        <Title order={5}> Step 3</Title>
        <Text>
          Download and launch the [dev client
          launcher](http://library.theexiled.pwnageservers.com/file.php?id=2942)
        </Text>
        <Text>
          Click the Set Path button and set it to the Leaked Dev Build
          <Code>Tribesascend.exe</Code>
        </Text>
        <Text>Set the game mode to your maps Game Mode.</Text>
        <Text>
          In the Map text field, enter your map name, it will not be in the
          dropdown.
        </Text>
        <Text>Note: TrCTF-BasicMap</Text>
        <Title order={5}> Step 5</Title>
        <Text>Click Launch.</Text>
        <Text>
          Once the game has launched hit the <Kbd>`</Kbd> key and type
          <Code>ChangeTeam BloodEagle</Code>for blood eagle spawns or
          <Code>ChangeTeam DiamondSword</Code>for diamond sword spawns.
        </Text>
        <Title order={4}> Hard way</Title>
        <Title order={5}> Step 1</Title>
        <Text>
          Extract the [TA package
          files](https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing)
          to dev builds <Code>\TribesGame\CookedPC\Maps\</Code>folder.
        </Text>
        <Title order={5}> Step 2</Title>
        <Text>
          Copy <Code>RefShaderCache-PC-D3D-SM3.upk</Code>in
          <Code>C:\UDK\UDK-2011-01\UDKGame\CookedPC\</Code>and paste it into
          <Code>\Tribes\TribesGame\CookedPC\</Code>
        </Text>
        <Text>
          Copy the uncooked map from
          <Code>\UDK\UDK-2011-01\UDKGame\Content\Maps\</Code>to
          <Code>\Tribes\TribesGame\CookedPC\Maps\</Code>
        </Text>
        <Text>
          Copy any asset packages you&apos;ve created from
          <Code>\UDK\UDK-2011-01\UDKGame\Content\</Code>to
          <Code>\Tribes\TribesGame\CookedPC\Maps\</Code>
        </Text>
        <Title order={5}> Step 3</Title>
        <Text>
          Open Command Prompt. CD to the Tribes dev builds
          <Code>\Binaries\Win32\</Code>Folder and enter
          <Code>Tribesascend.exe TrGameMode-MapName -seekfreeloading</Code>
        </Text>
        <Text>
          Note: <Code>TrGameMode-MapName</Code>for Arx Novena would be
          <Code>TrCTF-ArxNovena</Code>
        </Text>
        <Title order={5}> Step 4</Title>
        <Text>Hit Enter.</Text>
        <Text>
          Once the game has launched hit the <Kbd>`</Kbd>key and type
          <Code>ChangeTeam BloodEagle</Code> for blood eagle spawns or
          <Code>ChangeTeam DiamondSword</Code>for diamond sword spawns.
          Otherwise, you will spawn as neither team.
        </Text>
        <Title order={3}> Hosting Custom Map</Title>
        <Text>
          [Host your
          server](https://github.com/Griffon26/taserver/blob/master/docs/user_manual/hosting_a_game_server).
        </Text>
        <Text>
          Extract the [TA package
          files](https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing)
          to the servers <Code>\Tribes\TribesGame\CookedPC\Maps\</Code>folder.
        </Text>
        <Text>
          Copy <Code>RefShaderCache-PC-D3D-SM3.upk</Code>in
          <Code>C:\UDK\UDK-2011-01\UDKGame\CookedPC\</Code>and paste it into
          <Code>\Tribes\TribesGame\CookedPC\</Code>
        </Text>
        <Text>
          Copy the uncooked map from
          <Code>\UDK\UDK-2011-01\UDKGame\Content\Maps\</Code>to
          <Code>\Tribes\TribesGame\CookedPC\Maps\</Code>
        </Text>
        <Text>
          [Join your
          server](/docs/guide-install-setup#playing-custom-maps-on-the-official-game).
        </Text>
        <Title order={2}> External Resources</Title>
        <Text>
          Ex Hi-Rez Studios map developer Katelyn Pitstick has posted some
          information specifically about making Tribes Ascend maps on
          [Kate&apos;s website](https://katelyn-mp.com/wp/?cat=8).
        </Text>
        <Text>
          thenewboston has an old [UDK Tutorial
          Playlist](https://youtube.com/playlist?list=PLFF967D7CA020E636) where
          he is using an old 2011 build of UDK. Tutorial 36 is where he begins
          work on terrain.
        </Text>
        <Text>
          Te-Krogoth&apos;s [Working With Packages
          Guide](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK/Working_With_Packages).
        </Text>
        <Text>
          [Khorrin](http://www.reddit.com/user/Khorrin)&apos;s [SDK Mapping for
          the
          Lazy](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Mapping_for_the_Lazy).
        </Text>
        <Text>
          [dMidgard](http://www.reddit.com/user/dMidgard) wrote a [SDK Guide to
          Mapping](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Guide_to_Mapping).
        </Text>
        <Text>
          Te-Krogoth&apos;s [Mapping for Tribes: Ascend
          SDK](http://wiki.theexiled.pwnageservers.com/Mapping_for_the_Tribes:_Ascend_SDK).
        </Text>
        <Text>
          Te-Krogoth&apos;s [T1
          Heightmaps](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK/T1_Heightmaps).
        </Text>
        <Title order={2}> Troubleshooting</Title>
        <Title order={3}> RefShaderCache Compiler Error</Title>
        <Text>
          In the official version of the game, the shader compiler crashes when
          attempting to load a custom map in the game.
        </Text>
        <Title order={4}> Workaround (Easy way)</Title>
        <Title order={5}> Step 1</Title>
        <Text>
          Download the latest master
          [RefShaderCache-PC-D3D-SM3.upk](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/master-refshadercache.zip),
          paste it into <Code>\UDK\UDK-2011-01\UDKGame\Content\</Code> If
          you&apos;ve played on custom maps before, the one from your
          <Code>\Tribes\TribesGame\CookedPC\</Code>folder should work.
        </Text>
        <Title order={5}> Step 2</Title>
        <Text>
          Run UnrealFrontEnd and cook the map. Copy
          <Code>RefShaderCache-PC-D3D-SM3.upk</Code>in
          <Code>\UDK\UDK-2011-01\UDKGame\CookedPC\</Code>and paste it into
          <Code>\Tribes\TribesGame\CookedPC\</Code> This will need to be done
          every time you wish to test the map.
        </Text>
        <Title order={4}> Workaround (Advanced users)</Title>
        <Title order={5}> Step 1</Title>
        <Text>
          Copy the <Code>RefShaderCache-PC-D3D-SM3.upk</Code>in
          <Code>\Tribes\TribesGame\CookedPC\</Code>and paste it into
          <Code>\UDK\UDK-2011-01\UDKGame\Content\</Code>
        </Text>
        <Title order={5}> Step 2</Title>
        <Text>
          Using a hex editor, you will see the values
          <Code>C1 83 2A 9E 25 03 02 00</Code>, modify the <Code>02</Code>in
          that sequence to <Code>00</Code>
        </Text>
        <Title order={5}> Step 3</Title>
        <Text>
          Run UnrealFrontEnd and cook the map. Copy
          <Code>RefShaderCache-PC-D3D-SM3.upk</Code>in
          <Code>C:\UDK\UDK-2011-01\UDKGame\CookedPC\</Code>and paste it into
          <Code>\Tribes\TribesGame\CookedPC\</Code> This will need to be done
          every time you wish to test the map.
        </Text>
        <Title order={4}> Reason why this is needed</Title>
        <Text>
          It looks like the shader compiler is missing some required shaders to
          properly compile.
        </Text>
        <Text>
          Cooking the map with the unedited RefShaderCache-PC-D3D-SM3.upk will
          fail due to license version checks, the license version is in the
          file’s header which we edit via our hex editor.
        </Text>
        <Title order={3}> Where is UDK Installed?</Title>
        <Text>
          By default UDK installs to <Code>C:\UDK\UDK-2011-01\</Code>
        </Text>
        <Title order={3}>
          Texture issues of static meshes from the packages
        </Title>
        <Text>
          `You need to copy over the materials for the meshes you are using in
          your map, otherwise they will show up with a blue and white texture
          pattern in-game. Find the material the mesh uses by double-clicking on
          the mesh in the content browser and expanding the LOD section. Copy
          the material(s) to your map package and then reassign the material to
          the mesh you are using. Select your mesh in the level editor and press
          F4 to bring up the properties, and then you will find a material
          override section. Apply your materials thereby having the material
          selected in the Content Browser and then pressing the green arrow in
          the Properties window of the mesh. If you have multiple materials you
          need to assign, click the plus sign to add another material slight in
          the Properties window.`
        </Text>
        <Text>
          This quote is taken from Te-Krogoth&apos;s [Working With Packages
          Guide](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK/Working_With_Packages).
        </Text>
      </div>
    </>
  );
}
