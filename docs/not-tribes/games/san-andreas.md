---
id: san-andreas
title: San Andreas Modding
sidebar_label: San Andreas Modding
sidebar_position: 2
---
# Grand Theft Auto San Andreas

## Definitive Edition

Definitive Edition will possibly make a bunch of this stuff irrelevant. 

## Original Game Engine
[Downgraders Link](https://gtaforums.com/topic/936600-iii-iv-various-gta-downgraders/)

[4GB Patch](https://ntcore.com/?page_id=371)

### Mod List
#### Prerequisite Mods
- [Ultimate ASI Loader](https://github.com/ThirteenAG/Ultimate-ASI-Loader/releases/latest)
- [ModLoader](https://github.com/thelink2012/modloader/releases/latest)
- [CLEO4](https://github.com/cleolibrary/CLEO4/releases/latest)
- [CLEO+](https://www.mixmods.com.br/2020/03/CLEOPlus.html)
- [ModUpdater](https://github.com/ThirteenAG/modupdater/releases/latest)
- [Portable GTA](http://gta.rockstarvision.com/workshop/portablegta.dll)
- [MoonLoader](https://gtaforums.com/topic/890987-moonloader/)

#### Combination
- [GTASA WidescreenFix](https://github.com/ThirteenAG/WidescreenFixesPack/releases/tag/gtasa)
- [GInput](https://silent.rockstarvision.com/uploads/GInputSA.zip)
- [SkyGFX](https://github.com/aap/skygfx/releases)

#### Scripts
- [SilentPatch](https://silent.rockstarvision.com/uploads/SilentPatchSA.zip)
- [Open Limit Adjuster](https://github.com/ThirteenAG/III.VC.SA.LimitAdjuster/releases)
- [Project2DFX](https://github.com/ThirteenAG/III.VC.SA.IV.Project2DFX/releases/tag/gtasa)
- [SaveLoader](https://github.com/ThirteenAG/III.VC.SA.SaveLoader/releases/latest)
- [Framerate Vigilante](https://www.mixmods.com.br/2019/06/framerate-vigilante.html)
- [Improved Fast Loader](https://gtaforums.com/topic/686694-improved-fast-loader/)
- [Skip Device Selection Window](https://www.gtainside.com/en/sanandreas/mods/99791-skip-device-selection-window)
- [Real Traffic Fix](https://www.mixmods.com.br/2019/12/Real-Traffic-Fix.html)
- [RunDLL32 Fix](https://www.gtagarage.com/mods/show.php?id=19293)
- [SkyGrad](https://www.mixmods.com.br/2015/03/sky-gradient-fix-corrigir-linhas.html)
- [Mix Sets](https://www.mixmods.com.br/2019/08/mod-mixsets.html)

#### CLEO Scripts
- [AutoSave](https://github.com/ThirteenAG/III.VC.SA.CLEOScripts/releases/tag/autosave)
- [Car FOV](https://github.com/ThirteenAG/III.VC.SA.CLEOScripts/releases/tag/carfov)
- [Buy Back Your Weapons](https://github.com/ThirteenAG/III.VC.SA.CLEOScripts/releases/tag/BuyBackYourWeapons)

#### Models and Textures
- [Mobile to PC research project](https://gtaforums.com/topic/661961-sa-mobile-to-pc-research-project/)
- [Improved Default Armoury](https://gtaforums.com/topic/933587-improved-default-armoury-reflections-positions-model-and-texture-improvements/)
- [Fixed Vehicles](https://gtaforums.com/topic/725635-gta-san-andreas-fixed-vanilla-vehicles/)
- [CJ Remaster](https://www.mixmods.com.br/2019/03/cj-official-remaster-texturas-hq-do.html)
- [Cutscene Characters in game](https://www.mixmods.com.br/2020/05/sa-cutscene-characters-for-gameplay.html)
- [Vegetation Original Quality](https://gtaforums.com/topic/766488-relwipsa-vegetation-original-quality/)
- [Pre-lighting fixes pack](https://www.mixmods.com.br/2020/03/pre-lighting-fixes-pack.html)
- [Z PC Map Fixes](https://www.mixmods.com.br/2018/10/z-pc-maps-fixes-correcoes-para-o-mapa.html)
- [RoSA + ESRGAN AI Upscale](https://www.mixmods.com.br/2020/11/rosa-esrgan-ai-upscale-pack-de-texturas.html)

#### Extra Content

#### modupdator.ini

:::warning 
This section is incomplete.
:::


```
;Place modupdater.exe and modupdater.asi inside modloader directory. Run modupdater.exe to install mods.

[MODS]
vorbisFile.dll = https://github.com/ThirteenAG/Ultimate-ASI-Loader
modloader.asi = https://github.com/thelink2012/modloader
wshps.asi = https://github.com/ThirteenAG/WidescreenFixesPack/
GTASA.WidescreenFix.asi = https://github.com/ThirteenAG/WidescreenFixesPack/
III.VC.SA.SaveLoader.asi = https://github.com/ThirteenAG/III.VC.SA.SaveLoader
III.VC.SA.WindowedMode.asi = https://github.com/ThirteenAG/III.VC.SA.WindowedMode
SilentPatchSA.asi = http://silent.rockstarvision.com/uploads/SilentPatchSA.zip
skygfx.asi = https://github.com/aap/skygfx/releases
SALodLights.asi = https://github.com/ThirteenAG/III.VC.SA.IV.Project2DFX/releases

[SALodLights.asi]
SourceName = SA.Project2DFX

[vorbisFile.dll]
SourceName = Ultimate-ASI-Loader.zip
PlaceToRoot
ExtractSingleFile

[DATE]
UpdateFrequencyInHours = 6
WhenLastUpdateAttemptWas = 
```