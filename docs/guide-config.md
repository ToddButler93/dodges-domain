---
id: how-to-config
title: Configuration
sidebar_label: Configuration
---

## In game settings

## Tribes.ini

Your Tribes.ini is the config file for your graphical settings. 

It is located under "Documents\My Games\Tribes Ascend\TribesGame\Config\"

[Dodge's Tribes.ini](/text/dodges-ini/Tribes.ini) 

This Tribes.ini is for people with weaker systems or who are after a competitive edge.

[![dodge-ini](/img/dodge-ini.png)](/text/dodges-ini/Tribes.ini)

[Dodge's "pretty" Tribes.ini](/text/dodges-pretty-ini/Tribes.ini)

This Tribes.ini is for people with a super strong systems and prioritize looks over competitive edge. 

[![](/img/dodge-pretty-ini.png)](/text/dodges-pretty-ini/Tribes.ini)

Note: All ini's provided are for 1080p Resolution, you can manually alter this by changing ResX=1920 and ResY=1080 to your monitors native resolution. HUD Elements can be enabled within the [in game settings](how-to-config#in-game-settings).

### Required Tweaks

Set all instances of bForceStaticTerrain=False to bForceStaticTerrain=True. This will stop terrain from popping in.

Set OneFrameThreadLag=False. This can help with mouse responsiveness.

### Recommended Tweaks

Set Bloom=True to Bloom=False.

Set MotionBlur=True to MotionBlur=False

To set a frame rate cap, set bSmoothFrameRate=true and MaxSmoothedFrameRate=X where X is the frame rate your wish to cap your game at.

Set FogVolumes=False to make smoke clouds smaller.

Set SpeedTreeLeaves=False and SpeedTreeFronds=False to hide tree leaves and some branches.

Set AllowRadialBlur=False to remove some of the distortions from weapon impacts.

Set Borderless=False to improve input lag on certain systems.


## TribesInput.ini