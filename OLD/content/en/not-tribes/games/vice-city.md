---
id: vice-city
title: Vice City Modding
linkTitle: Vice City Modding
weight: 1
type: docs
sidebar_search_disable: true
---

## Definitive Edition

### ModList

Fix for impassable mission, might be patched at some point.

https://libertycity.net/files/gta-vice-city-the-definitive-edition/166079-ispravlenie-neprokhodimojj-missii-na-pk.html

## reVC

reVC is a branch of the re3 Github specifically designed to work with the Vice City official game files.

[Cleo-Redux](https://github.com/cleolibrary/CLEO-Redux) is compatible with reVC Windows D3D9 MSS 32bit. Requires reVC.pdb inside the reVC directory.

Manual replacement of textures/models works correctly. [IMGDesk](https://github.com/MexUK/IMGDesk/releases).

## Original Game Engine

[Downgraders Link](https://gtaforums.com/topic/936600-iii-iv-various-gta-downgraders/)

[4GB Patch](https://ntcore.com/?page_id=371)

### Setup

#### Step 1

- Insert discs and install Vice City.
- Rename old exe to `backup.exe`.
- Copy NOCD into root directory.

#### Step 2

- Download [Ultimate ASI Loader](https://github.com/ThirteenAG/Ultimate-ASI-Loader/releases/latest) and extract `dinput8.dll` into the root directory.

Create a new foler caled `scripts`

- Download [CLEO](https://github.com/cleolibrary/III.VC.CLEO/releases/) and put it in the root directory.

- Download [ModLoader](https://github.com/thelink2012/modloader/releases/latest) and put it in the scripts directory.

- Download [ModUpdater](https://github.com/ThirteenAG/modupdater/releases/latest) and place `modupdater.asi` it in the scripts directory.

#### Step 3

##### Silent Patch

Extract SilentPatchVC.asi and .ini into the scripts folder.

Inside ModLoader create a new folder called SilentPatchVC and extract the data folder into it.

Download and extract the DDraw Component into the root directory.

##### Widescreen Fixes

Extract GTAVC.WidescreenFix.asi and .ini into the root folder.
Inside ModLoader create a new folder called WidescreenFrontEnd and extract WidescreenFrontEnd.zip into it.

##### 2DFX & OpenLimitAdjuster

Extract into Scripts Folder

##### SkyGFX

Extract rwd3d9.dll into the root directory.

Extract asi into scripts
Extract everything inside VC folder into scripts folder.

##### GInput

ASI into scripts
models into models

##### Classic Axis

##### LCS Car Camera

Add to scripts

##### SaveLoader

##### Vice City Neons

Extract Modloader into modloader.

Set dualPass=0 and disableBackfaceCulling=1 in skygfx.ini.

### Mod List

#### Prerequisite Mods

- [Ultimate ASI Loader](https://github.com/ThirteenAG/Ultimate-ASI-Loader/releases/latest)
- [CLEO](https://github.com/cleolibrary/III.VC.CLEO/releases/)
- [ModLoader](https://github.com/thelink2012/modloader/releases/latest)
- [ModUpdater](https://github.com/ThirteenAG/modupdater/releases/latest)

#### Combination

- [GTAVC WidescreenFix](https://github.com/ThirteenAG/WidescreenFixesPack/releases/tag/gtavc)
- [GInput](https://silent.rockstarvision.com/uploads/GInputVC.zip)
- [SkyGFX](https://github.com/aap/skygfx_vc/releases)
- [Vice City - The Leftovers Fix](https://gtaforums.com/topic/750757-vice-city-the-leftovers-fix/)

#### Scripts

- [SilentPatch](https://silent.rockstarvision.com/uploads/SilentPatchVC.zip)
- [DDraw Component](https://silent.rockstarvision.com/uploads/SilentPatchDDraw.zip)
- [Open Limit Adjuster](https://github.com/ThirteenAG/III.VC.SA.LimitAdjuster/releases/tag/1.5.6)
- [Project2DFX](https://github.com/ThirteenAG/III.VC.SA.IV.Project2DFX/releases/tag/gtavc)
- [SaveLoader](https://github.com/ThirteenAG/III.VC.SA.SaveLoader/releases/latest)
- [Vice City Sharp Trails](https://github.com/aap/sharptrails/releases/)
- [SA/LCS Car Camera](https://github.com/erorcun/SACarCam/releases)
- [VBDec](https://github.com/CookiePLMonster/VBdec/releases)
- [Audio Samples](https://github.com/CookiePLMonster/audio-samples/releases)
- [RunDLL32 Fix](https://www.gtagarage.com/mods/show.php?id=19293)
- [Wardrobe Mod](https://www.gtagarage.com/mods/show.php?id=28077)
- [Rosenberg's Audio Fix](https://www.gtagarage.com/mods/show.php?id=22234)
- [Radio Fix](https://www.gtagarage.com/mods/show.php?id=25406)
- [Headlight Fix](https://www.gtagarage.com/mods/show.php?id=22159)
- [Mouse Wheel Radio Changer](https://www.gtagarage.com/mods/show.php?id=22492)
- [Framerate Vigilante](https://www.mixmods.com.br/2019/06/framerate-vigilante.html)
- [Real Traffic Fix](https://www.mixmods.com.br/2019/12/Real-Traffic-Fix.html)
- [Mix Sets](https://www.mixmods.com.br/2019/02/VC-MixSets.html)
- [Maxos Vehicle Loader](https://www.mixmods.com.br/2019/03/vc-maxo-vehicle-loader-mvl.html)
- [Achievements System](https://www.mixmods.com.br/2021/10/achievements-system-conquistas-para-pc.html)
- [Taxi Mod](https://www.mixmods.com.br/2016/10/vc-taxi-disponivel-ao-morrerser-preso.html)
- [Peds Speech](https://gtaforums.com/topic/817075-ped-speech-patch-gta-vc/)
- [Classic Axis](https://gtaforums.com/topic/896122-classic-axis-feat-glitches/)

#### CLEO Scripts

- [AutoSave](https://github.com/ThirteenAG/III.VC.SA.CLEOScripts/releases/tag/autosave)
- [Car FOV](https://github.com/ThirteenAG/III.VC.SA.CLEOScripts/releases/tag/carfov)
- [Turn Indicators](https://github.com/ThirteenAG/III.VC.SA.CLEOScripts/releases/tag/TurnIndicators)
- [Buy Back Your Weapons](https://github.com/ThirteenAG/III.VC.SA.CLEOScripts/releases/tag/BuyBackYourWeapons)

#### Models and Textures

- [Vice City Neons](https://github.com/ThirteenAG/ViceCityNeons)
- [UpdatedSCM](https://github.com/niltwill/vc-updatedscm)
- [Improved Default Armoury](https://gtaforums.com/topic/933587-improved-default-armoury-reflections-positions-model-and-texture-improvements/)
- [AI Enhanced Textures](https://www.moddb.com/mods/ai-enhanced-textures-for-vice-city/downloads)
- [Collision Fix](https://gtaforums.com/topic/883252-reliiivc-collision-fix/)
- [80s Vegetation](https://www.gtainside.com/en/vicecity/mods/150443-80s-true-vegetation-with-mipmapping/)
- [3D Grass](https://www.gtainside.com/en/vicecity/mods/150524-3d-grass-for-gta-vice-city-now-with-mipmapping/)
- [80s Suits](https://libertycity.net/files/gta-vice-city/103971-80s-hd-suits-pack.html)
- [Xbox Hands](http://www.mediafire.com/file/93dzn9y1wtoguvy/VC-XboxHands_CutscenesOnly.zip)
- [Esrgan Character Textures Upscaled](https://www.gtainside.com/en/vicecity/mods/147898-esrgan-characters-textures-upscaled/)
- [ViceMips](https://www.mixmods.com.br/2016/11/vc-vicemips-mip-mapping-para-gta-vice.html)
- [Xbox Vehicles](https://libertycity.net/files/gta-vice-city/135221-fiks-avtomobilejj-xbox-versii.html)

#### More Optional Stuff

- [Manual Aiming](https://github.com/ThirteenAG/III.VC.SA.CLEOScripts/releases/tag/ManualAiming)
- [Climbing & Swimming](https://github.com/ThirteenAG/III.VC.SA.CLEOScripts/releases/tag/VC.ClimbingSwimming)
