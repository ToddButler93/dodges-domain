import Link from "next/link";
import { Alert } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function GuideMapDevelopment() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Map Development Guide</h1>
        </Card>
        <div className="flex flex-col gap-3">
          <Alert className="flex flex-col bg-teal-800 p-6 gap-3 text-zinc-100">
            If you are interested in map development I recommend joining the
            Tribes Ascend Community discord and asking for assistance. We are
            excited to help out new map makers.
            <div className="flex">
              <Button>
                <Link href="https://discord.gg/dd8JgzJ">
                  Tribes Ascend Community Discord
                </Link>
              </Button>
            </div>
          </Alert>
          <h2>UDK Setup</h2>
          <h3>Step 1</h3>
          <p>
            You need to download and install{" "}
            <Link href="http://library.theexiled.pwnageservers.com/file.php?id=2964">
              UDK build 7748 BETA January 2011
            </Link>{" "}
            to create maps for Tribes Ascend.
          </p>
          <p>
            You need to download the{" "}
            <Link
              passHref={true}
              href="https://drive.google.com/file/d/11ADATh4y71bC8PdcbaUk5zDeSsBkOfST/view?usp=sharing"
            >
              TA actor classes
            </Link>
            . Extract the <b>TribesGame</b> folder to{" "}
            <b>\UDK\UDK-2011-01\Development\Src\</b> and the{" "}
            <b>TA_BaseAssets.upk & AUD_MUS_CTF.upk</b> to{" "}
            <b>\UDK\UDK-2011-01\UDKGame\Content\</b>
          </p>
          <p>
            You need to download all the{" "}
            <Link
              passHref={true}
              href="https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing"
            >
              TA package files
            </Link>
            . Extract these to <b>\UDK\UDK-2011-01\UDKGame\Content</b>
          </p>
          <p>
            It is recommended to use the latest map file releases to give
            yourself a head start with assets:
          </p>
          <ul className="list-disc p-3">
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-common.zip"
                >
                  Dodge&apos;s Common Package
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack.zip"
                >
                  Dodge&apos;s Map Pack
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack-2.zip"
                >
                  Dodge&apos;s Map Pack 2
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack-3.zip"
                >
                  Dodge&apos;s Map Pack 3
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack-4.zip"
                >
                  Dodge&apos;s Map Pack 4
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-arena-series.zip"
                >
                  Dodge&apos;s Arena Series
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-treacherous-series.zip"
                >
                  Dodge&apos;s Treacherous Series
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/evil-map-pack.zip"
                >
                  Evil&apos;s Map Pack
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/evil-map-pack-2.zip"
                >
                  Evil&apos;s Map Pack 2
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3-ap-southeast-2.amazonaws.com/packages/krogoth-map-pack.zip"
                >
                  Krogoth&apos;s Map Pack
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/nerve-map-pack.zip"
                >
                  Nerve&apos;s Map Pack
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/kali-map-pack.zip"
                >
                  Kali&apos;s Map Pack
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/cro-map-pack.zip"
                >
                  Cro&apos;s Map Pack
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/evil-map-common.zip"
                >
                  Evil&apos;s Common Package
                </Link>
              </p>
            </li>
          </ul>
          <p>
            These zip files have a directory structure which is{" "}
            <b>!TRIBESDIR\TribesGame\CookedPC\Maps\</b>
          </p>
          <p>
            All .upk files will go into your{" "}
            <b>\UDK\UDK-2011-01\UDKGame\Content\</b> folder. Where as the maps
            can go into <b>\UDK\UDK-2011-01\UDKGame\Content\Maps</b>
          </p>
          <p>
            Note: You will need the Package Files to play and test the map on
            the{" "}
            <Link href="#launching-custom-maps-on-leaked-dev-build">
              leaked dev build
            </Link>{" "}
            and{" "}
            <Link href="/docs/guide-install-setup#playing-custom-maps-on-the-official-game">
              official client
            </Link>
            , it is best to copy these now before you delete the downloaded
            archive.
          </p>
          <h3>Step 2</h3>
          <p>
            After UDK is installed, go to{" "}
            <b>\UDK\UDK-2011-01\UDKGame\Config\</b> and open{" "}
            <b>UDKEngine.ini</b> in a text editor. Search for{" "}
            <b>[UnrealEd.EditorEngine]</b> and at the end of that section on a
            new line write <b>ModEditPackages=TribesGame</b> Save the file and
            close the editor.
          </p>
          <h3>Step 3</h3>
          <p>
            Launch the UDK Editor, when asked to update the outdated scripts hit{" "}
            <strong>yes</strong>. Wait for the success message then close it and
            reopen UDK Editor to get started.
          </p>
          <h2>Required Knowledge</h2>
          <p>
            Do not save over one of the downloaded package files. If you want to
            add custom pures/meshes to your map you should create a new package
            file.
          </p>
          <p>
            Map files (.fmap) require specific file naming to work in Tribes
            Ascend. <b>TrGameMode-MapName</b> where the CTF map Arx Novena is
            named <b>TrCTF-ArxNovena</b>
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2>Your First Map</h2>
          <h3>Step 1</h3>
          <ul className="list-disc p-3">
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://drive.google.com/file/d/1nZ1McI3DhilrHNxbm5a0KVFPkDy9WfA0/view?usp=sharing"
                >
                  Basic CTF Map Download
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  passHref={true}
                  href="https://drive.google.com/file/d/1doKK3ycGZhN3tjQJ7khoXQPRP8pQjDZZ/view?usp=sharing"
                >
                  Basic Arena Map Download
                </Link>
              </p>
            </li>
          </ul>
          <p>
            These should be placed in{" "}
            <b>\UDK\UDK-2011-01\UDKGame\Content\Maps\</b>
          </p>
          <p>
            Launch UDK and open the map you wish to edit in your Maps folder.
          </p>
          <h3>Step 2</h3>
          <p>
            Now you are free to do editing however you see fit. I recommend
            modifying the terrain, adding material to the terrain and adding a
            couple of random static meshes from the TA packages within the
            content browser to get yourself familiar with UDK. When you feel
            like you are ready to test the map out. Hit <b>Build</b> then{" "}
            <b>Build All</b> Hit File then Save Current Level. Close the UDK
            Editor and save any asset packages <strong>you</strong> created.
          </p>
          <h3>Step 3</h3>
          <p>
            You will need to complete Step 1 of{" "}
            <Link href="#refshadercache-compiler-error">
              the workaround to for the refshadercache
            </Link>{" "}
            before you build and test your map.
          </p>
          <p>
            Open <b>\UDK\UDK-2011-01\BinariesUnrealFrontend.exe</b>
          </p>
          <p>
            Select the profile <b>DM-Deck</b> and remove <b>DM-Deck.udk</b>{" "}
            under <b>Maps to Cook</b> Add your custom map, click Cook and then
            Cook Packages. Exit Unreal Frontend once completed.
          </p>
          <p>Now your map should be ready to be tested!</p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2>Testing Maps</h2>
          <h3>Launching Custom Maps on Leaked Dev Build</h3>
          <p>
            You need the{" "}
            <Link href="http://library.theexiled.pwnageservers.com/category.php?id=200">
              leaked dev build
            </Link>{" "}
            of Tribes Ascend.
          </p>
          <p>
            An easy way to launch the map is with the{" "}
            <Link href="http://library.theexiled.pwnageservers.com/file.php?id=2942">
              dev client launcher
            </Link>
          </p>
          <h4>Easy way</h4>
          <h5>Step 1</h5>
          <p>
            Extract the{" "}
            <Link
              passHref={true}
              href="https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing"
            >
              TA package files
            </Link>{" "}
            to the dev builds <b>\TribesGame\CookedPC\Maps\</b> folder.
          </p>
          <h5>Step 2</h5>
          <p>
            Copy <b>RefShaderCache-PC-D3D-SM3.upk</b> in{" "}
            <b>C:\UDK\UDK-2011-01\UDKGame\CookedPC\</b> and paste it into{" "}
            <b>\Tribes\TribesGame\CookedPC\</b>
          </p>
          <p>
            Copy the uncooked map from
            <b>\UDK\UDK-2011-01\UDKGame\Content\Maps\</b> to{" "}
            <b>\Tribes\TribesGame\CookedPC\Maps\</b>
          </p>
          <p>
            Copy any asset packages you&apos;ve created from{" "}
            <b>\UDK\UDK-2011-01\UDKGame\Content\</b> to{" "}
            <b>\Tribes\TribesGame\CookedPC\Maps\</b>
          </p>
          <h5>Step 3</h5>
          <p>
            Download and launch the{" "}
            <Link href="http://library.theexiled.pwnageservers.com/file.php?id=2942">
              dev client launcher
            </Link>
          </p>
          <p>
            Click the Set Path button and set it to the Leaked Dev Build{" "}
            <b>TribesAscend.exe</b>
          </p>
          <p>Set the game mode to your maps Game Mode.</p>
          <p>
            In the Map text field, enter your map name, it will not be in the{" "}
            dropdown.
          </p>
          <p>Note: TrCTF-BasicMap</p>
          <h5>Step 5</h5>
          <p>Click Launch.</p>
          <p>
            Once the game has launched hit the <kbd>`</kbd> key and type{" "}
            <b>ChangeTeam BloodEagle</b> for blood eagle spawns or{" "}
            <b>ChangeTeam DiamondSword</b> for diamond sword spawns.
          </p>
          <h4>Hard way</h4>
          <h5>Step 1</h5>
          <p>
            Extract the{" "}
            <Link
              passHref={true}
              href="https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing"
            >
              TA package files
            </Link>{" "}
            to dev builds <b>\TribesGame\CookedPC\Maps\</b> folder.
          </p>
          <h5>Step 2</h5>
          <p>
            Copy <b>RefShaderCache-PC-D3D-SM3.upk</b> in{" "}
            <b>C:\UDK\UDK-2011-01\UDKGame\CookedPC\</b> and paste it into{" "}
            <b>\Tribes\TribesGame\CookedPC\</b>
          </p>
          <p>
            Copy the uncooked map from{" "}
            <b>\UDK\UDK-2011-01\UDKGame\Content\Maps\</b> to{" "}
            <b>\Tribes\TribesGame\CookedPC\Maps\</b>
          </p>
          <p>
            Copy any asset packages you&apos;ve created from{" "}
            <b>\UDK\UDK-2011-01\UDKGame\Content\</b>to{" "}
            <b>\Tribes\TribesGame\CookedPC\Maps\</b>
          </p>
          <h5>Step 3</h5>
          <p>
            Open Command Prompt. CD to the Tribes dev builds{" "}
            <b>\Binaries\Win32\</b>Folder and enter{" "}
            <b>Tribesascend.exe TrGameMode-MapName -seekfreeloading</b>
          </p>
          <p>
            Note: <b>TrGameMode-MapName</b>for Arx Novena would be{" "}
            <b>TrCTF-ArxNovena</b>
          </p>
          <h5>Step 4</h5>
          <p>Hit Enter.</p>
          <p>
            Once the game has launched hit the <kbd>`</kbd> key and type{" "}
            <b>ChangeTeam BloodEagle</b> for blood eagle spawns or{" "}
            <b>ChangeTeam DiamondSword</b> for diamond sword spawns. Otherwise,{" "}
            you will spawn as neither team.
          </p>
          <h3>Hosting Custom Map</h3>
          <p>
            <Link
              passHref={true}
              href="https://github.com/Griffon26/taserver/blob/master/docs/user_manual/hosting_a_game_server"
            >
              Host your server
            </Link>
            .
          </p>
          <p>
            Extract the{" "}
            <Link
              passHref={true}
              href="https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing"
            >
              TA package files
            </Link>{" "}
            to the servers <b>\Tribes\TribesGame\CookedPC\Maps\</b>folder.
          </p>
          <p>
            Copy <b>RefShaderCache-PC-D3D-SM3.upk</b> in{" "}
            <b>C:\UDK\UDK-2011-01\UDKGame\CookedPC\</b> and paste it into{" "}
            <b>\Tribes\TribesGame\CookedPC\</b>
          </p>
          <p>
            Copy the uncooked map from{" "}
            <b>\UDK\UDK-2011-01\UDKGame\Content\Maps\</b> to{" "}
            <b>\Tribes\TribesGame\CookedPC\Maps\</b>
          </p>
          <p>
            <Link href="/docs/guide-install-setup#playing-custom-maps-on-the-official-game">
              Join your server
            </Link>
            .
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2>External Resources</h2>
          <p>
            Ex Hi-Rez Studios map developer Katelyn Pitstick has posted some{" "}
            information specifically about making Tribes Ascend maps on{" "}
            <Link passHref={true} href="https://katelyn-mp.com/wp/?cat=8">
              Kate&apos;s website
            </Link>
            .
          </p>
          <p>
            thenewboston has an old{" "}
            <Link
              passHref={true}
              href="https://www.youtube.com/watch?v=K7AAgQHJWGc&list=PLFF967D7CA020E636&pp=iAQB"
            >
              UDK Tutorial Playlist
            </Link>{" "}
            where he is using an old 2011 build of UDK. Tutorial 36 is where he
            begins work on terrain.
          </p>
          <p>
            <Link href="http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK/Working_With_Packages">
              Te-Krogoth&apos;s Working With Packages Guide
            </Link>
            .
          </p>
          <p>
            <Link href="http://www.reddit.com/user/Khorrin">Khorrin</Link>
            &apos;s
            <Link href="http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Mapping_for_the_Lazy">
              SDK Mapping for the Lazy
            </Link>
            .
          </p>
          <p>
            <Link href="http://www.reddit.com/user/dMidgard">dMidgard</Link>{" "}
            wrote a{" "}
            <Link href="http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Guide_to_Mapping">
              SDK Guide to Mapping
            </Link>
            .
          </p>
          <p>
            Te-Krogoth&apos;s{" "}
            <Link href="http://wiki.theexiled.pwnageservers.com/Mapping_for_the_Tribes:_Ascend_SDK">
              Mapping for Tribes: Ascend SDK
            </Link>
            .
          </p>
          <p>
            Te-Krogoth&apos;s{" "}
            <Link href="http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK/T1_Heightmaps">
              T1 Heightmaps
            </Link>
            .
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2>Troubleshooting</h2>
          <h3>RefShaderCache Compiler Error</h3>
          <p>
            In the official version of the game, the shader compiler crashes{" "}
            when attempting to load a custom map in the game.
          </p>
          <h4>Workaround (Easy way)</h4>
          <h5>Step 1</h5>
          <p>
            Download the latest master{" "}
            <Link
              passHref={true}
              href="https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/master-refshadercache.zip"
            >
              RefShaderCache-PC-D3D-SM3.upk
            </Link>
            , paste it into <b>\UDK\UDK-2011-01\UDKGame\Content\</b> If{" "}
            you&apos;ve played on custom maps before, the one from your{" "}
            <b>\Tribes\TribesGame\CookedPC\</b> folder should work.
          </p>
          <h5>Step 2</h5>
          <p>
            Run UnrealFrontEnd and cook the map. Copy{" "}
            <b>RefShaderCache-PC-D3D-SM3.upk</b> in{" "}
            <b>\UDK\UDK-2011-01\UDKGame\CookedPC\</b> and paste it into{" "}
            <b>\Tribes\TribesGame\CookedPC\</b> This will need to be done every{" "}
            time you wish to test the map.
          </p>
          <h4>Workaround (Advanced users)</h4>
          <h5>Step 1</h5>
          <p>
            Copy the <b>RefShaderCache-PC-D3D-SM3.upk</b> in{" "}
            <b>\Tribes\TribesGame\CookedPC\</b> and paste it into{" "}
            <b>\UDK\UDK-2011-01\UDKGame\Content\</b>
          </p>
          <h5>Step 2</h5>
          <p>
            Using a hex editor, you will see the values{" "}
            <b>C1 83 2A 9E 25 03 02 00</b>, modify the <b>02</b> in that{" "}
            sequence to <b>00</b>
          </p>
          <h5>Step 3</h5>
          <p>
            Run UnrealFrontEnd and cook the map. Copy{" "}
            <b>RefShaderCache-PC-D3D-SM3.upk</b> in{" "}
            <b>C:\UDK\UDK-2011-01\UDKGame\CookedPC\</b> and paste it into{" "}
            <b>\Tribes\TribesGame\CookedPC\</b> This will need to be done every{" "}
            time you wish to test the map.
          </p>
          <h4>Reason why this is needed</h4>
          <p>
            It looks like the shader compiler is missing some required shaders{" "}
            to properly compile.
          </p>
          <p>
            Cooking the map with the unedited{" "}
            <b>RefShaderCache-PC-D3D-SM3.upk</b> will fail due to license{" "}
            version checks, the license version is in the file’s header which we{" "}
            edit via our hex editor.
          </p>
          <h3>Where is UDK Installed?</h3>
          <p>
            By default UDK installs to <b>C:\UDK\UDK-2011-01\</b>
          </p>
          <h3>Texture issues of static meshes from the packages</h3>
          <p>
            `You need to copy over the materials for the meshes you are using in{" "}
            your map, otherwise they will show up with a blue and white pure{" "}
            pattern in-game. Find the material the mesh uses by double-clicking{" "}
            on the mesh in the content browser and expanding the LOD section.{" "}
            Copy the material(s) to your map package and then reassign the{" "}
            material to the mesh you are using. Select your mesh in the level{" "}
            editor and press F4 to bring up the properties, and then you will{" "}
            find a material override section. Apply your materials thereby{" "}
            having the material selected in the Content Browser and then{" "}
            pressing the green arrow in the Properties window of the mesh. If{" "}
            you have multiple materials you need to assign, click the plus sign{" "}
            to add another material slight in the Properties window.`
          </p>
          <p>
            This quote is taken from Te-Krogoth&apos;s{" "}
            <Link href="http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK/Working_With_Packages">
              Working With Packages Guide
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
