---
id: guide-map-dev
title: Setting up UDK for Tribes Ascend Maps
linkTitle: Map Development
tags: [udk, map-dev]
menu:
  main:
    weight: 5
---

If you are interested in map development I recommend joining the [Tribes Ascend Community Discord](https://discord.gg/dd8JgzJ) and asking for assistance. Either myself or others are excited to help out new developers.

## Setting up UDK

### Step 1

You need to download and install [UDK build 7748 BETA January 2011](http://library.theexiled.pwnageservers.com/file.php?id=2964) to create maps for Tribes Ascend.

You need to download the [TA actor classes](http://library.theexiled.pwnageservers.com/file.php?id=2948). Extract the `TribesGame` folder to `\UDK\UDK-2011-01\Development\Src\` and the `TA_BaseAssets.upk` to `\UDK\UDK-2011-01\UDKGame\Content\`.

You need to download all the [TA package files](https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing). Extract these to `\UDK\UDK-2011-01\UDKGame\Content`.

It is recommended to use the latest map file releases to give yourself a head start with assets:

- [Dodge's Map Pack](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack.zip)
- [Dodge's Map Pack 2](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack-2.zip)
- [Dodge's Map Pack 3](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack-3.zip)
- [Dodge's Map Pack 4](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-map-pack-4.zip)
- [Dodge's Treacherous Series](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/dodge-treacherous-series.zip)
- [Evil's Map Pack](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/evil-map-pack.zip)
- [Evil's Map Pack 2](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/evil-map-pack-2.zip)
- [Krogoth's Map Pack](https://tamods-update.s3-ap-southeast-2.amazonaws.com/packages/krogoth-map-pack.zip)
- [Nerve's Map Pack](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/nerve-map-pack.zip)
- [Kali's Map Pack](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/kali-map-pack.zip)

These zip files have a directory strcture which is `!TRIBESDIR\TribesGame\CookedPC\Maps\`.

All .upk files will go into your `\UDK\UDK-2011-01\UDKGame\Content\` folder. Where as the maps can go into `\UDK\UDK-2011-01\UDKGame\Content\Maps`.

Note: You will need the Package Files to play and test the map on the [leaked dev build](#launching-custom-maps-on-leaked-dev-build) and [official client](/docs/guide-install-setup#playing-custom-maps-on-the-official-game), it is best to copy these now before you delete the downloaded archive.

### Step 2

After UDK is installed, go to `\UDK\UDK-2011-01\UDKGame\Config\` and open `UDKEngine.ini` in a text editor. Search for `[UnrealEd.EditorEngine]` and at the end of that section on a new line write `ModEditPackages=TribesGame`. Save the file and close the editor.

### Step 3

Launch the UDK Editor, when asked to update the outdated scripts hit **yes**. Wait for the success message then close it and reopen UDK Editor to get started.

## Required Knowledge

Do not save over one of the downloaded package files. If you want to add custom textures/meshes to your map you should create a new package file.

Map files(.fmap) require specific file naming to work in Tribes Ascend. `TrGameMode-MapName` where the CTF map Arx Novena is named `TrCTF-ArxNovena`.

## Your First Map

### Step 1

- [Basic CTF Map Download](https://drive.google.com/file/d/1nZ1McI3DhilrHNxbm5a0KVFPkDy9WfA0/view?usp=sharing)
- [Basic Arena Map Download](https://drive.google.com/file/d/1doKK3ycGZhN3tjQJ7khoXQPRP8pQjDZZ/view?usp=sharing)

These should be placed in `\UDK\UDK-2011-01\UDKGame\Content\Maps\`.

Launch UDK and open the map you wish to edit in your Maps folder.

### Step 2

Now you are free to do editing however you see fit. I recommend modifying the terrain, adding material to the terrain and adding a couple of random static meshes from the TA packages within the content browser to get yourself familiar with UDK. When you feel like you are ready to test the map out. Hit `Build` then `Build All`. Hit File then Save Current Level. Close the UDK Editor and save any asset packages **you** created.

### Step 3

You will need to complete Step 1 of [the workaround to for the refshadercache](#refshadercache-compiler-error) before you build and test your map.

Open `\UDK\UDK-2011-01\BinariesUnrealFrontend.exe`

Select the profile `DM-Deck` and remove `DM-Deck.udk` under `Maps to Cook`. Add your custom map, click Cook and then Cook Packages. Exit Unreal Frontend once completed.

Now your map should be ready to be tested!

## Testing Maps

### Launching Custom Maps on Leaked Dev Build

You need the [leaked dev build](http://library.theexiled.pwnageservers.com/category.php?id=200) of Tribes Ascend.

An easy way to launch the map is with the [dev client launcher](http://library.theexiled.pwnageservers.com/file.php?id=2942)

#### Easy way

##### Step 1

Extract the [TA package files](https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing) to the dev builds `\TribesGame\CookedPC\Maps\` folder.

##### Step 2

Copy `RefShaderCache-PC-D3D-SM3.upk` in `C:\UDK\UDK-2011-01\UDKGame\CookedPC\` and paste it into `\Tribes\TribesGame\CookedPC\`.

Copy the uncooked map from `\UDK\UDK-2011-01\UDKGame\Content\Maps\` to `\Tribes\TribesGame\CookedPC\Maps\`.

Copy any asset packages you've created from `\UDK\UDK-2011-01\UDKGame\Content\` to `\Tribes\TribesGame\CookedPC\Maps\`.

##### Step 3

Download and launch the [dev client launcher](http://library.theexiled.pwnageservers.com/file.php?id=2942)

Click the Set Path button and set it to the Leaked Dev Build `Tribesascend.exe`.

Set the game mode to your maps Game Mode.

In the Map text field, enter your map name, it will not be in the dropdown.

Note: TrCTF-BasicMap

##### Step 5

Click Launch.

Once the game has launched hit the console key and type `ChangeTeam BloodEagle` for blood eagle spawns or `ChangeTeam DiamondSword` for diamond sword spawns.

#### Hard way

##### Step 1

Extract the [TA package files](https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing) to dev builds `\TribesGame\CookedPC\Maps\` folder.

##### Step 2

Copy `RefShaderCache-PC-D3D-SM3.upk` in `C:\UDK\UDK-2011-01\UDKGame\CookedPC\` and paste it into `\Tribes\TribesGame\CookedPC\`.

Copy the uncooked map from `\UDK\UDK-2011-01\UDKGame\Content\Maps\` to `\Tribes\TribesGame\CookedPC\Maps\`.

Copy any asset packages you've created from `\UDK\UDK-2011-01\UDKGame\Content\` to `\Tribes\TribesGame\CookedPC\Maps\`.

##### Step 3

Open Command Prompt. CD to the Tribes dev builds `\Binaries\Win32\` Folder and enter `Tribesascend.exe TrGameMode-MapName -seekfreeloading`.

Note: `TrGameMode-MapName` for Arx Novena would be `TrCTF-ArxNovena`.

##### Step 4

Hit Enter.

Once the game has launched hit the ```key and type`ChangeTeam BloodEagle`for blood eagle spawns or`ChangeTeam DiamondSword` for diamond sword spawns. Otherwise, you will spawn as neither team.

### Hosting Custom Map

[Host your server](https://github.com/Griffon26/taserver/blob/master/docs/user_manual/hosting_a_game_server).

Extract the [TA package files](https://drive.google.com/file/d/1u_nItIPxeA79Im8tXgg3Q41RS2iBAT_O/view?usp=sharing) to the servers `\Tribes\TribesGame\CookedPC\Maps\` folder.

Copy `RefShaderCache-PC-D3D-SM3.upk` in `C:\UDK\UDK-2011-01\UDKGame\CookedPC\` and paste it into `\Tribes\TribesGame\CookedPC\`.

Copy the uncooked map from `\UDK\UDK-2011-01\UDKGame\Content\Maps\` to `\Tribes\TribesGame\CookedPC\Maps\`.

[Join your server](/docs/guide-install-setup#playing-custom-maps-on-the-official-game).

## External Resources

Ex Hi-Rez Studios map developer Katelyn Pitstick has posted some information specifically about making Tribes Ascend maps on [Kate's website](https://katelyn-mp.com/wp/?cat=8).

thenewboston has an old [UDK Tutorial Playlist](https://youtube.com/playlist?list=PLFF967D7CA020E636) where he is using an old 2011 build of UDK. Tutorial 36 is where he begins work on terrain.

Te-Krogoth's [Working With Packages Guide](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK/Working_With_Packages).

[Khorrin](http://www.reddit.com/user/Khorrin)'s [SDK Mapping for the Lazy](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Mapping_for_the_Lazy).

[dMidgard](http://www.reddit.com/user/dMidgard) wrote a [SDK Guide to Mapping](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK_Guide_to_Mapping).

Te-Krogoth's [Mapping for Tribes: Ascend SDK](http://wiki.theexiled.pwnageservers.com/Mapping_for_the_Tribes:_Ascend_SDK).

Te-Krogoth's [T1 Heightmaps](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK/T1_Heightmaps).

## Troubleshooting

### RefShaderCache Compiler Error

In the official version of the game, the shader compiler crashes when attempting to load a custom map in the game.

#### Workaround (Easy way)

##### Step 1

Download the latest master [RefShaderCache-PC-D3D-SM3.upk](https://tamods-update.s3.ap-southeast-2.amazonaws.com/packages/master-refshadercache.zip), paste it into `\UDK\UDK-2011-01\UDKGame\Content\`. If you've played on custom maps before, the one from your `\Tribes\TribesGame\CookedPC\` folder should work.

##### Step 2

Run UnrealFrontEnd and cook the map. Copy `RefShaderCache-PC-D3D-SM3.upk` in `\UDK\UDK-2011-01\UDKGame\CookedPC\` and paste it into `\Tribes\TribesGame\CookedPC\`. This will need to be done every time you wish to test the map.

#### Workaround (Advanced users)

##### Step 1

Copy the `RefShaderCache-PC-D3D-SM3.upk` in `\Tribes\TribesGame\CookedPC\` and paste it into `\UDK\UDK-2011-01\UDKGame\Content\`.

##### Step 2

Using a hex editor, you will see the values `C1 83 2A 9E 25 03 02 00`, modify the `02` in that sequence to `00`.

##### Step 3

Run UnrealFrontEnd and cook the map. Copy `RefShaderCache-PC-D3D-SM3.upk` in `C:\UDK\UDK-2011-01\UDKGame\CookedPC\` and paste it into `\Tribes\TribesGame\CookedPC\`. This will need to be done every time you wish to test the map.

#### Reason why this is needed

It looks like the shader compiler is missing some required shaders to properly compile.

Cooking the map with the unedited RefShaderCache-PC-D3D-SM3.upk will fail due to license version checks, the license version is in the file’s header which we edit via our hex editor.

### Where is UDK Installed?

By default UDK installs to `C:\UDK\UDK-2011-01\`.

### Texture issues of static meshes from the packages

`You need to copy over the materials for the meshes you are using in your map, otherwise they will show up with a blue and white texture pattern in-game. Find the material the mesh uses by double-clicking on the mesh in the content browser and expanding the LOD section. Copy the material(s) to your map package and then reassign the material to the mesh you are using. Select your mesh in the level editor and press F4 to bring up the properties, and then you will find a material override section. Apply your materials thereby having the material selected in the Content Browser and then pressing the green arrow in the Properties window of the mesh. If you have multiple materials you need to assign, click the plus sign to add another material slight in the Properties window.`

This quote is taken from Te-Krogoth's [Working With Packages Guide](http://wiki.theexiled.pwnageservers.com/Tribes:_Ascend/SDK/Working_With_Packages).
