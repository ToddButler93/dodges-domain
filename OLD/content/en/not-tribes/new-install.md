---
id: new-install
title: New Install
linkTitle: New Install
weight: 2
menu:
  not-tribes:
    weight: 30
type: docs
sidebar_search_disable: true
---

# Basic Install Reference

{{% alert title="Info" %}}
Winget will automatically install most applications.

Chocolatey will install applications not available on Winget.

A manual install is still required.
{{% /alert %}}

## Step 1 - Install & Update Windows

[Windows 11 download page](https://www.microsoft.com/en-us/software-download/windows11)

[Rufus](https://rufus.ie/en/) can be used to mount an ISO to a USB.

### Using a local account

{{% alert title="Warning" color="warning" %}}
Install without a network cable or internet connection.
{{% /alert %}}

When Windows 11 asks for a network simply <kbd>Alt+F4</kbd>. A new window will appear where you enter user account details.

Once the operating system boots, you can plug the network cable back in.

### Step 2 - Drivers

{{% alert title="Warning" color="warning" %}}
Make sure Windows is up to date before proceeding.
{{%/alert%}}

#### SDIO

[Download page](https://www.snappy-driver-installer.org/download-page/)

Download indexers. Download all drivers except GPU drivers.

#### DDU

{{% alert title="Warning" color="warning" %}}
Download the latest version of NVidia drivers and unplug the network cable.
{{%/alert%}}

[Download location](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Remove GPU drivers installed by Windows. DDU has an option to prevent Windows from installing a new driver.

## Step 3 - Install Apps

{{% alert title="Info" %}}
These are scripts used for automatically installing as many applications listed on this page as possible.
{{% /alert %}}

### Winget

Install the latest version of Winget from [here.](https://github.com/microsoft/winget-cli/releases/latest)

```bat
winget install --id=7zip.7zip -e  && winget install --id=SyncTrayzor.SyncTrayzor -e  && winget install --id=eloston.ungoogled-chromium -e  && winget install --id=IrfanSkiljan.IrfanView -e  && winget install --id=DuongDieuPhap.ImageGlass -e  && winget install --id=Radionomy.Winamp -e  && winget install --id=stax76.mpvdotnet -e  && winget install --id=PrestonN.FreeTube -e && winget install -e --id Streamlink.Streamlink && winget install --id=Streamlink.Streamlink.TwitchGui -e  && winget install --id=plex.Plex -e  && winget install --id=Prusa3D.PrusaSlicer -e  && winget install --id=BlenderFoundation.Blender -e  && winget install --id=GIMP.GIMP -e  && winget install --id=Inkscape.Inkscape -e  && winget install --id=KDE.Krita -e  && winget install --id=HandBrake.HandBrake -e  && winget install --id=OBSProject.OBSStudio -e  && winget install --id=Discord.Discord -e  && winget install --id=Mumble.Mumble -e  && winget install --id=VSCodium.VSCodium -e  && winget install --id=Microsoft.VisualStudio.2022.Community-Preview -e  && winget install --id=OpenJS.NodeJS.LTS -e  && winget install --id=Yarn.Yarn -e  && winget install --id=Python.Python.3 -e  && winget install --id=ojdkbuild.openjdk.11.jre -e  && winget install --id=Microsoft.PowerShell -e  && winget install --id=GOG.Galaxy -e  && winget install --id=Valve.Steam -e  && winget install --id=Ubisoft.Connect -e  && winget install --id=ElectronicArts.EADesktop -e && winget install --id=SumatraPDF.SumatraPDF -e  && winget install --id=GitHub.GitHubDesktop -e  && winget install --id=Audacity.Audacity -e  && winget install --id=RuneLite.RuneLite -e  && winget install --id=Resplendence.LatencyMon -e --force && winget install --id=TechPowerUp.GPU-Z -e  && winget install --id=Balena.Etcher -e  && winget install --id=EpicGames.EpicGamesLauncher -e  && winget install --id=JeffreyPfau.mGBA -e  && winget install --id=Cockos.REAPER -e  && winget install --id=Microsoft.WindowsTerminal -e && winget install --id=GitHub.GitHubDesktop -e  && winget install --id=CPUID.CPU-Z --force -e && winget install --id=REALiX.HWiNFO --force -e && winget install -e --id Git.Git
```

### Chocolatey

{{% alert title="Info" %}}
Run Get-ExecutionPolicy. If it returns Restricted, then run Set-ExecutionPolicy AllSigned or Set-ExecutionPolicy Bypass -Scope Process.
{{% /alert %}}

#### Install Script

```ps1
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

#### Install Apps Script

```ps1
$Packages = 'lossless-cut', 'youtube-dl', 'sketchup', 'quixelbridge', 'spacesniffer', 'ddu', 'sdio', 'sysinternals', 'rockstar-launcher',

ForEach ($PackageName in $Packages)
{
    choco install $PackageName -y
}
```

### Manual Install

{{% alert title="Info" %}}
Unfortunately, these apps currently aren't available via Winget or chocolatey. These require manual download and installation.
{{% /alert %}}

[DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/)

## Step 3 - Configure Windows

Registry File for Opening with VS Codium.

```
Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT\*\shell\Open with VSCodium]
@="Edit with VSCodium"
"Icon"="C:\\Program Files\\VSCodium\\VSCodium.exe,0"
[HKEY_CLASSES_ROOT\*\shell\Open with VSCodium\command]
@="\"C:\\Program Files\\VSCodium\\VSCodium.exe\" \"%1\""
[HKEY_CLASSES_ROOT\Directory\shell\vscode]
@="Open Folder as VSCodium Project"
"Icon"="\"C:\\Program Files\\VSCodium\\VSCodium.exe\",0"
[HKEY_CLASSES_ROOT\Directory\shell\vscode\command]
@="\"C:\\Program Files\\VSCodium\\VSCodium.exe\" \"%1\""
[HKEY_CLASSES_ROOT\Directory\Background\shell\vscode]
@="Open Folder as VSCodium Project"
"Icon"="\"C:\\Program Files\\VSCodium\\VSCodium.exe\",0"
[HKEY_CLASSES_ROOT\Directory\Background\shell\vscode\command]
@="\"C:\\Program Files\\VSCodium\\VSCodium.exe\" \"%V\""
```

## Applications

### General

#### 7-Zip

File archiver that is open source.

#### SyncTrayzor

[Github releases page](https://github.com/canton7/SyncTrayzor/releases)

A system tray application that hosts and wraps [Syncthing](https://github.com/syncthing/syncthing).

[Syncthing](https://github.com/syncthing/syncthing) is a continuous file synchronization application.

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

#### DaVinci Resolve

Video Editing software that is freemium. Do need to give some contact details to download. The studio variant has features such as GPU acceleration but isn't required. The best part about the paid variant is it is a lifetime license! The worst part is it currently costs $469. Free version it is then!

[DaVinci Resolve](https://www.blackmagicdesign.com/au/products/davinciresolve/)

#### Handbrake

[Download page](https://handbrake.fr/downloads.php)

Open-source video transcoder.

#### Losslesscut

[Github releases page](https://github.com/mifi/lossless-cut/releases)

Cut/Merge video without re-encoding. Open Source. Huge time saver when creating short clips. Accuracy depends on your encoding/recording settings as it uses keyframes.

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

##### OpenAsar

[Download page](https://openasar.dev/)
An open-source alternative of Discord desktop's app.asar. Makes Discord much faster to start with less tracking.

#### Mumble

[Github releases page](https://github.com/mumble-voip/mumble/releases)

Open source VoIP application.

#### Mozilla Thunderbird

[Main site](https://www.thunderbird.net/en-US/)

Open source email application.

### Development

#### VSCodium

[Download Page](https://vscodium.com/#install)

[Open source](https://github.com/VSCodium/vscodium) code editor. VSCodium supports extensions, in-built terminal, language support, git support. Fast to startup.

VSCodium is a free/libre open source software binaries of [VS Code](https://code.visualstudio.com).

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

#### Origin

[Download page](https://www.origin.com/aus/en-us/store/download)

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

{{% alert title="Warning" color="warning" %}}
A manufacturer's website is the best location to download drivers.

Some of the latest drivers might not be compatible with your particular configuration.
{{%/alert%}}

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
