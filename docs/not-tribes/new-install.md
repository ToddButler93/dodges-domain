---
id: new-install
title: New Install
sidebar_label: New Install
sidebar_position: 2
---
# Basic Install Reference
:::info
Winget will automatically install most applications. 

Chocolatey will install applications not available on Winget. 

A manual install is still required.
:::
## Step 1 - Install & Update Windows
[Windows 11 download page](https://www.microsoft.com/en-us/software-download/windows11)

[Rufus](https://rufus.ie/en/) can be used to mount an ISO to a USB.

### Using a local account
:::warning
Install without a network cable or internet connection.
:::

When Windows 11 asks for a network simply <kbd>Alt+F4</kbd>. A new window will appear where you enter user account details.

Once the operating system boots, you can plug the network cable back in.

### Step 2 - Drivers
:::caution
Make sure Windows is up to date before proceeding.
:::

#### SDIO
[Download page](https://www.snappy-driver-installer.org/download-page/)

Download indexers. Download all drivers except GPU drivers.

#### DDU
:::caution
Download the latest version of NVidia drivers and unplug the network cable.
:::

[Download location](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Remove GPU drivers installed by Windows. DDU has an option to prevent Windows from installing a new driver.

#### NVCleanInstall
[Download Page](https://www.techpowerup.com/download/techpowerup-nvcleanstall/)

Select the latest driver package and install it with the recommended preset.

#### Aorus RGB Fusion
[Download Page](https://www.gigabyte.com/MicroSite/512/rgb2.html)
Allows you to turn off motherboard lighting.

#### EVGA Precision
[Download Page](https://www.evga.com/precisionx1/)
Allows you to turn GPU lighting.

## Step 3 - Install Apps
:::info
These are scripts used for automatically installing as many applications listed on this page as possible.
:::

:::caution
These scripts require [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows).
:::
### Chocolatey
:::info
Run Get-ExecutionPolicy. If it returns Restricted, then run Set-ExecutionPolicy AllSigned or Set-ExecutionPolicy Bypass -Scope Process.
:::
#### Install Script
```ps1
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
#### Install Apps Script
```ps1
$Packages = 'dotnet3.5', 'powertoys', 'youtube-dl','sketchup', 'quixelbridge', 'github-desktop', 'spacesniffer', 'ddu', 'sdio', 'cpu-z', 'sysinternals'

ForEach ($PackageName in $Packages)
{
    choco install $PackageName -y
}
```

### Winget
```ps1
$Packages = , 'Microsoft.VC++2005Redist-x86', 'Microsoft.VC++2005Redist-x64', 'Microsoft.VC++2008Redist-x64', 'Microsoft.VC++2008Redist-x86', 'Microsoft.VC++2010Redist-x64', 'Microsoft.VC++2010Redist-x86', 'Microsoft.VC++2012Redist-x64', 'Microsoft.VC++2012Redist-x86', 'Microsoft.VC++2015-2019Redist-x64', 'Microsoft.VC++2015-2019Redist-x86', '7zip.7zip','SyncTrayzor.SyncTrayzor','eloston.ungoogled-chromium','DuongDieuPhap.ImageGlass','Radionomy.Winamp','stax76.mpvdotnet','PrestonN.FreeTube','Streamlink.StreamlinkTwitchGui','Jellyfin.JellyfinMediaPlayer','Prusa3D.PrusaSlicer','BlenderFoundation.Blender','GIMP.GIMP','Inkscape.Inkscape','KDE.Krita','HandBrake.HandBrake','Lowkey.LowkeyGG','OBSProject.OBSStudio','Discord.DiscordCanary','Mumble.Mumble','Mozilla.Thunderbird','Microsoft.VisualStudioCode','Microsoft.VisualStudio.2022.Community-Preview','OpenJS.NodeJS','Yarn.Yarn','Python.Python.3','Oracle.JavaRuntimeEnvironment','Microsoft.PowerShell','GOG.Galaxy','Valve.Steam','Ubisoft.Connect','ElectronicArts.EADesktop','REALiX.HWiNFO', 'Adobe.AdobeAcrobatReaderDC'

ForEach ($PackageName in $Packages)
{
    winget install --id=$PackageName -e
}
```

:::caution
This script requires testing.
:::
### Manual Install
:::info
Unfortunately, these apps currently aren't available via Winget or chocolatey. These require manual download and installation.
:::

[Rust Desk](https://github.com/rustdesk/rustdesk/releases)

[DaVinci Resolve 17](https://www.blackmagicdesign.com/products/davinciresolve/)

[Rockstar Games Launcher](https://socialclub.rockstargames.com/rockstar-games-launcher)


## Step 3 - Configure Windows

## Applications
### General
#### 7-Zip
File archiver that is open source.

#### SyncTrayzor
[Github releases page](https://github.com/canton7/SyncTrayzor/releases)

A system tray application that hosts and wraps [Syncthing](https://github.com/syncthing/syncthing).

[Syncthing](https://github.com/syncthing/syncthing) is a continuous file synchronization application.

#### Rust Desk
[Github releases page](https://github.com/rustdesk/rustdesk/releases)

Rust Desk is a remote desktop application that is open source.

#### ungoogled-chrominium
[Windows 64-bit Binaries](https://ungoogled-software.github.io/ungoogled-chromium-binaries/releases/windows/64bit/)

[ungoogled-chrominium](https://github.com/Eloston/ungoogled-chromium) is Google Chrominium without the dependency of Google web services.

Windows binaries currently aren't updated very frequently.

##### Extensions
[Chromium extension update checker](https://github.com/NeverDecaf/chromium-web-store)

[Ublock Orgin](https://github.com/gorhill/uBlock/releases) is a decent adblocker.

### Media Consumption
#### ImageGlass
[Github releases page](https://github.com/d2phap/ImageGlass/releases)

Lightweight Image viewer. 
#### Winamp
[Home Page](https://www.winamp.com/)

Old school music player. Lightweight and does what you need for free.
#### MPV.net
[Github releases page](https://github.com/stax76/mpv.net/releases)

Open-source media player that has a decent GUI based off of [mpv](https://github.com/mpv-player/mpv).

#### youtube-dl
[Github releases page](https://github.com/ytdl-org/youtube-dl/releases)

Commandline downloader for youtube.
#### FreeTube
[Github releases page](https://github.com/FreeTubeApp/FreeTube/releases)

Open-source desktop YouTube player. Limited tracking and no advertisements.

#### Stream Twitch Gui
[Github releases page](https://github.com/streamlink/streamlink-twitch-gui/releases/)

A Twitch stream browser that uses Streamlink. 

Set the player preset to MPV and the executable to mpvnet.exe.

#### Jellyfin Media Player
[Github releases page](https://github.com/jellyfin/jellyfin-media-player/releases)
Jellyfin Desktop Client based on Plex Media Player. 

Jellyfin Media Player works well for personal media.

### Design
#### Sketchup Make 2017
[Old versions download page](https://help.sketchup.com/en/downloading-older-versions)

A free version of Sketchup. Simple 3D modeling software but good enough for wood/3d printing projects.

#### PrusaSlicer
[Driver download Page](https://www.prusa3d.com/drivers/)

[Open source](https://github.com/prusa3d/PrusaSlicer) toolpath generator optimized for Prusa printers. Converts instructions into G-code. Forked from [Slic3r](https://github.com/slic3r/Slic3r).

#### Blender 
[Blender download page](https://www.blender.org/download/)

[Open source](https://github.com/blender/blender) 3D modeling suite. 

#### GIMP
[GIMP download page](https://www.gimp.org/downloads/)

GIMP is an open-source free and open source graphic/image editor.

#### Inkscape
[Project releases page](https://inkscape.org/en/release/)

[Open source](https://gitlab.com/inkscape/inkscape) vector graphics editor.

#### Krita
[Project download page](https://krita.org/en/download/krita-desktop/)

[Open source](https://github.com/KDE/krita) painting program. Useful with a drawing tablet.

### Video Editing & Recording
#### DaVinci Resolve 17
Video Editing software that is freemium. Do need to give some contact details to download. The studio variant has features such as GPU acceleration but isn't required. The best part about the paid variant is it is a lifetime license! The worst part is it currently costs $469. Free version it is then!

[DaVinci Resolve 17](https://www.blackmagicdesign.com/au/products/davinciresolve/)

#### Handbrake
[Download page](https://handbrake.fr/downloads.php)

Open-source video transcoder.

#### Losslesscut
[Github releases page](https://github.com/mifi/lossless-cut/releases)

Cut/Merge video without re-encoding. Open Source. Huge time saver when creating short clips. Accuracy depends on your encoding/recording settings as it uses keyframes. 

#### Lowkey.gg
[Download page](https://lowkey.gg/download)

Lowkey is an automatic video game capture software. Push to talk doesn't support the mouse buttons. The application opens with random clips to watch.

#### OBS Studio
[Github releases page](https://github.com/obsproject/obs-studio/releases/)

Open-source software used for live streaming/screen recording. Extremely useful and widely used.

### Game Design
#### Quixel Mixer
[Quixel Mixer download page](https://quixel.com/mixer)

Quixel Mixer is a texturing tool. Free to use with UDK.

#### Quixel Bridge
[Quixel Bridge download page](https://quixel.com/bridge)

Quixel Bridge is an application for downloading and exporting assets for game projects. Export with various texture output setups like adding a roughness map to your diffuse alpha! 

Free to use with UDK.

#### UDK 2011
[UDK 2011](/docs/development/guide-map-dev)

### Communication
#### Discord
[Download page](https://discord.com/download)

VoIP and instant messaging platform. Closed source but extremely popular.

#### Mumble
[Github releases page](https://github.com/mumble-voip/mumble/releases)

Open source VoIP application.

#### Mozilla Thunderbird
[Main site](https://www.thunderbird.net/en-US/)

Open source email application.

### Development
#### Visual Studio Code
[Download Page](https://code.visualstudio.com/Download)

[Open source](https://github.com/Microsoft/vscode) code editor. Visual Studio Code supports extensions, in-built terminal, language support, git support. Fast to startup.

#### Github Desktop
[https://desktop.github.com/](https://www.thunderbird.net/en-US/)

Open source Git management tool. This app makes the git process simple.

#### Node.JS
[Download Page](https://nodejs.org/en/download/)

Node.JS is an [open source](https://github.com/nodejs/node) backend for javascript applications. 

#### Yarn
Install via NPM (after Node.JS install):

```bash
npm install --global yarn
```

Package cache management. Used on some projects

#### Python
[Download Page](https://www.python.org/downloads/)

Python is an open-source programming language. Downloading python allows the execution of python scripts.

#### Java
[Download Page](https://www.java.com/download/)

Java is a programming language. Downloading the Java runtime environment allows for java code to execute.

#### Visual Studio Community
[Download Page](https://visualstudio.microsoft.com/)

Visual Studio Community is a free IDE, useful for C# and C++.

#### Powershell
[Download Page](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows)

Task automation and configuration command-line program. Good to have this up to date.

### Gaming
#### GOG Galaxy
[GOG Galaxy page](https://www.gogalaxy.com/en/)

GOG Games Launcher. Required for multiplayer GOG games.

#### Steam
[Download page](https://store.steampowered.com/about/)

Software client for Steam. PC games.

#### Ubisoft Connect
[Download page](https://ubisoftconnect.com/en-US/)

Software client for Ubisoft. PC games.

#### EA App
[Download page](https://www.ea.com/ea-app-beta)

Software client for EA. PC games.

#### Rockstar Games Launcher
[Download page](https://socialclub.rockstargames.com/rockstar-games-launcher)

Software client for Rockstar. PC games.

### Maintenance
#### Space Sniffer
[Official Download Mirror](https://www.fosshub.com/SpaceSniffer.html)

Freeware Folder size visualizer. Extremely useful for debugging things taking up too much space on your hard drive.

#### Display Driver Uninstaller
[Download location](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Useful for cleaning up old drivers.

#### Snappy Driver Installer Origin
[Download page](https://www.snappy-driver-installer.org/download-page/)

Snappy Driver Installer Origin is a decent open-source automatic driver installer. 

:::caution
A manufacturer's website is the best location to download drivers. 

Some of the latest drivers might not be compatible with your particular configuration.
:::

#### HWiNFO
[Download page](https://www.hwinfo.com/download/)

Great for seeing your PC hardware temperatures and readouts.

#### cpu-z 
[Download page](https://www.cpuid.com/softwares/cpu-z.html)

Great for seeing your CPU readouts. Freeware.

### Extra Stuff
#### Chocolatey
A package manager for windows. Winget is getting there slowly.

#### Microsoft Powertoys
[Download page](https://docs.microsoft.com/en-us/windows/powertoys/install)

Utilities to tune/streamline Windows.

#### Sysinternals
[Download page](https://docs.microsoft.com/en-us/sysinternals/downloads/)

Sysinternals are a suite of utilities for Windows.