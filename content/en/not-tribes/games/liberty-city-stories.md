---
id: liberty-city-stories
title: Liberty City Stories
linkTitle: Liberty City Stories
weight: 3
menu:
  not-tribes:
    weight: 3
type: docs
sidebar_search_disable: true
---

# Grand Theft Auto Liberty City Stories
`Re:LCS` and `relcs` are two different things.

`Re:LCS` is a heavily modded Vice City.

`reLCS` is an open-source reverse-engineered game engine to run Liberty City Stories on PC.

## Re:LCS Beta 6.0 Build 15 by Ryadica926

{{% alert title="Tip" %}}**Tip** is a text{{% /alert %}}
{{% alert title="Caution" color="caution" %}}**Caution!** is a text{{% /alert %}}
{{% alert title="Warning" color="warning" %}}**Warning!** is a text{{% /alert %}}
{{% alert title="Danger" color="danger" %}}**Danger!** is a text{{% /alert %}}

{{%alert title="Info" color="primary" %}}
If you're creating a new diagram, be sure to File -> Export in either svg or png format (svg is usually the best choice) and ensure the "Include a copy of my diagram" is selected so it can be edited again later.
{{%/alert%}}


{{%alert title="Info" color="primary" %}}

Bugs are present. If you prefer stability over the ability to use your mouse to aim, you will want to play the PSP or PS2 variants of the game.

{{%/alert%}}

archive.org is the answer to your first question.

Delete `LCSCarCam.asi` inside scrips folder.

Inside `ReLCS.ini` set `DebugMode=0` and `MultiSampling=8.`

### Mod List
- [HD Texture Port](https://gtaforums.com/topic/960597-relcs-hd-textures-port/)

- [SA/LCS Car Camera](https://github.com/erorcun/SACarCam/releases)

- [Framerate Vigilante](https://www.mixmods.com.br/2019/06/framerate-vigilante.html)

{{% alert title="Caution" color="caution" %}}
Framerate Vigilante doesn't solve all FPS-related bugs. 
{{%/alert%}}

### Bugs
Decent amount of crashes in this build. `Liberty City Stories` will run fine most of the time. Some tips are:

- If you get a re-occurring crash or are unable to launch the game. Delete `gta_lcs.set` from `Documents\GTA Liberty City Stories User Files\` and relaunch the game.
- Use multiple save slots. I alternated with save `Slot 1` and `Slot 2`.
- Use `Re:LCS` Beta 5.0 Build 16. You can use save games if you have issues with missions. Saves are incompatible between versions!

The `Sicilian Gambit` mission has a bug that will stop the progression. To get around this, I killed the individual before the boats departed from the dock. Do not save after failing the `Sicilian Gambit` as it'll create a checkpoint. Another bug with this mission is the AI drowning. Sprinting forward as quickly as possible solved it for me.

{{% alert theme="info" %}}
Read the files in the `ReadMe` folder if you are having other issues.
{{% /alert %}}
## reLCS
Must have the original ps2 game and Vice City to grab assets.

Extract assets to the same folder as reLCS.exe. Copy Vice City's mss32.dll and mss folder to the `reLCS` directory.