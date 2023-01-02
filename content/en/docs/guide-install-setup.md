---
id: guide-install-setup
title: Installing Tribes Ascend
linkTitle: Installing Tribes
weight: 1
menu:
  main:
    weight: 1
tags: [tribes-information]
---

## Installation

#### Step 1 - Install via Steam

<iframe src="https://store.steampowered.com/widget/17080/" frameborder="0" width="100%" height="190"></iframe>

#### Step 2 - Download the Tribes Launcher

{{% alert title="Note" %}}
Make sure to extract this before running!
{{% /alert %}}
<a class="btn btn-lg btn-primary mr-3 mb-4" href="https://github.com/mcoot/TribesLauncherSharp/releases/latest">
	Download Tribes Launcher Sharp<i class="fa-solid fa-download ml-2 "></i>
</a>
{{% alert title="Info" %}}
You will need the [Microsoft Visual C++ x86 Redistributes](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) if you don't have them already installed.
{{% /alert %}}

<a class="btn btn-lg btn-primary mr-3 mb-4" href="https://aka.ms/vs/17/release/vc_redist.x86.exe">
	Install Microsoft Visual C++ x86 Redistributes<i class="fa-solid fa-download ml-2 "></i>
</a>

#### Step 3

Extract and Launch the `Tribes Launcher`.

In the `Tribes Launcher`, select the `Community` for your login server, hit Login and inject TAMods.

Once injected, the Play Now button will show whether you are in `OOTB` or `GOTY` mode. There is a button on the main menu to switch. You need to be in `GOTY` mode to play on `GOTY` servers and `OOTB` mode to play on `OOTB` servers.

[Still having issues?](#troubleshooting)

{{% alert title="Info" %}}
TAMods has a website to help guide people [here](https://www.tamods.org/docs/user/doc_user_install).

{{% /alert %}}

## Playing Community Maps

You can only play community maps on the community login server.

Note: This may take a while as some of the assets required add up to a few gigabytes.

### Step 1 

Run the `Tribes Launcher` and click on the `Packages` tab.

### Step 2

Select the map pack you want and hit install. This will automatically download all the required files so you can play.

![](/img/install/launcher-packages-tab.png)

[Still having issues?](#troubleshooting)

## Troubleshooting
### Launcher doesn't know where Tribes is installed? 

Usually it's "C:\Program Files (x86)\Steam\SteamApps\Common\Tribes\Binaries\Win32\TribesAscend.exe". If you aren't sure and installed the game via `Steam`, follow this video to get the correct directory.

<video width="auto" height="100%" autoplay="true" muted loop preload="metadata">
  <source src="/video/Game_Install_Location.webm" type="video/webm"></source>Your browser does not support .webm video.
</video>

### I hear the inject sound, but nothing about my game changes
Microsoft Visual C++ redistributes must be installed, an easy all in one installer is [here](https://github.com/abbodi1406/vcredist/releases/latest)

### I keep failing to join a server
Probably in the wrong game mode for that server, community servers are labelled `OOTB` or `GOTY` to show their game mode. Go back to the main menu and select `Switch to OOTB` or `Switch to GOTY` like this video. 

<video width="auto" height="100%" autoplay="true" muted loop preload="metadata">
  <source src="/video/Change-Game-Mode.webm" type="video/webm"></source>Your browser does not support .webm video.
</video>

### Can't join a server with a community made map
To play on a server hosting a community made map you only need the latest version of the map. In the server browsers current state, community made maps come up as Arx Novena.

[Follow this section of the guide ](guide-install-setup#playing-community-maps) to install common community maps here first. Then try [reinstalling TAMods](guide-install-setup#im-having-issues-not-stated-here-with-the-launcher) and the packages. 

On occasion you will have to contact the owner for the files. 

### I get a Package Install Error while installing the map packs
We've ran into a few issues with peoples files being set to read only. You need to go to where [Tribes Ascend is installed](guide-install-setup#launcher-doesnt-know-where-tribes-is-installed) and locate the file in the error message. Right click and select `Properties` and de-select `Read Only` then close the launcher and try to install it again. This will be fixed by the next launcher update.

### I get an error when I start the game after installing packages
This should only occur when you have manually installed the maps previously. This fix will require some redownloading.

#### Step 1 
In your `Tribes Ascend` install folder, go to \TribesGame\CookedPC\Maps\ and delete all files.

[Not sure where tribes is installed?](guide-install-setup#launcher-doesnt-know-where-tribes-is-installed)

#### Step 2 
Now, in `Steam`, you will need to verify your files.

In your games library you need to right click on `Tribes Ascend` and hit `Properties`.

![](/img/install/steam-properties.png)

Select the `Local files` tab and click the `Verify integrity of game files...` button. This will re-download the missing files you just deleted from the base game via steam.

![](/img/install/steam-local-files.png)

#### Step 3
Once complete, in your `Tribes Launcher` hit the `Advanced` tab and hit `Reinstall TAMods`. Hit `Yes` on the prompt and then hit `Update` to start the process.

![](/img/install/launcher-advanced-tab.png)

Now, under the `Packages` Tab you can install the custom packages that were removed earlier. This should just be the custom maps and assets packages.

![](/img/install/launcher-packages-tab.png)

### I'm having issues not stated here with the launcher
When in doubt, under the `Advanced` tab hit `Reinstall TAMods`. This should allow you to reinstall packages as well.

![](/img/install/launcher-advanced-tab.png)