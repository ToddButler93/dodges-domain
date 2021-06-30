---
id: how-to-install
title: Installation
sidebar_label: Installation
---
## Installing Tribes Ascend

### Step 1
Download and install the game from steam [here](https://store.steampowered.com/app/17080/Tribes_Ascend/).

<iframe src="https://store.steampowered.com/widget/17080/" frameborder="0" width="646" height="190"></iframe>

### Step 2
Download the latest release of the `Tribes Launcher` [here](https://github.com/mcoot/TribesLauncherSharp/releases). This will be used to launch our game. TAMods has a website to help guide people [here](https://www.tamods.org/docs/doc_user_install).

You will need the [Microsoft Visual C++ Redistributes](https://github.com/abbodi1406/vcredist/releases/) if you don't have them already installed.

### Step 3

Launch the `Tribes Launcher`

In the `Tribes Launcher`, select the `Community` for your login server, hit Login and inject TAMods.

Once injected, the Play Now button will show whether you are in OOTB or GOTY mode. There is a button on the main menu to switch. You need to be in GOTY mode to play on GOTY servers and OOTB mode to play on OOTB servers.

[Still having issues?](how-to-install#troubleshooting)

## Playing Community Maps

You can only play community maps on the community login server.

Note: This may take a while as some of the assets required add up to a few gigabytes.

### Step 1 

Run the Tribes Launcher and click on the packages tab.

### Step 2

Select the map pack you want and hit install. This will automatically download all the required files so you can play.
[Getting an error?](how-to-install#I-get-an-error-while-installing-the-map-packs)

## Troubleshooting
### Launcher doesn't know where Tribes is installed? 

Usually it's "C:\Program Files (x86)\Steam\SteamApps\Common\Tribes\Binaries\Win32\TribesAscend.exe". If you aren't sure and installed the game via steam, follow this video to get the correct directory.

<video width="100%" height="auto" autoplay="true" muted loop preload="metadata">
  <source src="/video/Game_Install_Location.webm" type="video/webm"></source>Your browser does not support .webm video.
</video>

### I hear the inject sound, but nothing about my game changes
Microsoft Visual C++ redistributes must be installed, an easy all in one installer is [here](https://github.com/abbodi1406/vcredist/releases/)

### I keep failing to join a server
Probably in the wrong game mode for that server, community servers are labelled OOTB or GOTY to show their game mode. Go back to the main menu and select Switch to OOTB or Switch to GOTY like this video. 

<video width="auto" height="100%" autoplay="true" muted loop preload="metadata">
  <source src="/video/Change-Game-Mode.webm" type="video/webm"></source>Your browser does not support .webm video.
</video>

### Can't join a server with a community made map
To play on a server hosting a community made map you only need the latest version of the map. Some of these you will have to contact the owner for. [Follow this section of the guide](how-to-install#playing-community-maps) first.

### I get an error while installing the map packs
We've ran into a few issues with peoples files being set to read only. You need to go to where Tribes is installed and locate the file in the error message. Right click and select properties and de-select Read Only then close the launcher and try to install it again.
