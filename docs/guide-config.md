---
id: guide-config
title: Configuration
sidebar_label: Configuration Guide
sidebar_position: 3
---

## In game settings

## Tribes.ini

Your `Tribes.ini` is the config file for your graphical settings. 

It is located under "Documents\My Games\Tribes Ascend\TribesGame\Config\"

[Dodge's Tribes.ini](/text/dodges-ini/tribes.ini) 

This `Tribes.ini` is for people with weaker systems or who are after a competitive edge.

[![dodge-ini](/img/dodge-ini.png)](/text/dodges-ini/tribes.ini)

[Dodge's "pretty" Tribes.ini](/text/dodges-pretty-ini/tribes.ini)

This `Tribes.ini` is for people with a super-strong system and prioritize looks over a competitive edge. 

[![](/img/dodge-pretty-ini.png)](/text/dodges-pretty-ini/tribes.ini)

Note: All ini's provided are for 1080p resolution. Manually alter this by changing ResX=1920 and ResY=1080 to your native monitor resolution. HUD Elements can be enabled within the [in game settings](guide-config#in-game-settings).

### Required Tweaks

Set all instances of `bForceStaticTerrain=False` to `bForceStaticTerrain=True`. This will stop terrain from popping in.

Set `OneFrameThreadLag=False`. This can help with mouse responsiveness.

Set `m_bTinyWeaponsEnabled=True`. This will make your weapons take up less screen space.

### Recommended Tweaks

Set `Bloom=True` to `Bloom=False`

Set `MotionBlur=True` to `MotionBlur=False`

To set a frame rate cap, set `bSmoothFrameRate=true` and `MaxSmoothedFrameRate=X` where X is the frame rate your wish to cap your game at.

Set FogVolumes=False to make smoke clouds smaller.

Set `SpeedTreeLeaves=False` and `SpeedTreeFronds=False` to hide tree leaves and some branches.

Set `AllowRadialBlur=False` to remove some of the distortions from weapon impacts.

Set `Borderless=False` to improve input lag on certain systems.


## TribesInput.ini

Your `TribesInput.ini` is the config file for your key bindings.

The main thing I'd make sure is that you have `bEnableMouseSmoothing` set to `false`.

It is located under "Documents\My Games\Tribes Ascend\TribesGame\Config\"

A sensitivity of approximately 4.501 at maximum zoom will cause issues with mouse input. 5+ sensitivity is recommended.

[Dodge's TribesInput.ini](/text/dodges-input-ini/tribesinput.ini)

This is my personal `TribesInput.ini`. Contains some of the autocompletes for official and custom server admins.

You must set this to `Read Only` otherwise the game will overwrite the file. 