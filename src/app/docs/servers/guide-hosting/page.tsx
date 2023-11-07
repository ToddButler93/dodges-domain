"use client";

import Link from "next/link";
import { Image, Divider, Button, Accordion, Alert, Title } from "@mantine/core";

export default function TribesServerHosting() {
  return (
    <><div className="flex flex-col gap-3 max-w-6xl">
<Title order={2}>Option 1: Docker Servers</Title>

<Title order={4}> Azure Setup</Title>

Installs docker and loads the taserver docker image from this project on an Ubuntu VM. From [Courtesy of Chicken](https://raw.githubusercontent.com/chickenbellyfin/taserver-docker/master/README)).
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fchickenbellyfin%2Ftaserver-docker%2Fmaster%2Fdeploy%2Fazuredeploy.json)

<Title order={4}> Manual Docker Ubuntu</Title>

This will be a basic run down on how to setup TA Server on an Ubunutu Server.

<Title order={4}>Step 0: Prerequisites</Title>

<Title order={5}>0.1 Setup ubuntu</Title>

TCP/UDP Ports that need opening: 7777-7877

UDP ports that need opening: 9002-9102

Using UFW:

`sudo ufw allow 7777:7877/tcp`

`sudo ufw allow 7777:7877/udp`

`sudo ufw allow 9002:9102/udp`

<Title order={5}> 0.2 Setup Docker</Title>

[Install via the convenience script](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script)

`curl -fsSL https://get.docker.com -o get-docker.sh`

`sudo sh get-docker.sh`

<Title order={6}> 0.3 Setup current user</Title>

`sudo usermod -aG docker *username*`

Where '_username_' is the name of the user.

<Title order={6}> 0.4 Get TA Server Image</Title>

`docker pull taserver:latest-maps`

`docker tag taserver:latest-maps taserver`

<Title order={6}> 0.5 Download Helper Script</Title>

`wget -O taserver.sh "https://raw.githubusercontent.com/JigglyJoogins/taserver-deploy/master/docker/taserver.sh"`

`chmod +x taserver.sh`

<Title order={5}> 0.6 Setup Game Server</Title>

To run the game server run the command:

`./taserver.sh -d gamesettings -p 0`

'-d gamesettings' will be a mounted folder for this particular docker container that lets you alter the game settings of the server.

'-p 0' sets the port offset to 0.
The default ports are 7777 and 7778.
A port offset of 2 would use ports 7779 and 7781.

<Title order={4}> Benefits</Title>

- Possible to ban/kick cheaters
- GOTY/OOTB game types
- TA Mods Server customization
- Community or a custom login server
- No restrictions

<Title order={4}> Limitations</Title>

- Difficult and slow to setup
- Limited support
- Can be costly

## Option 2: LLamagrab Servers

An easy to grasp server hosting solution for community servers.

[https://llamagrab.net/](https://llamagrab.net/)

<Title order={4}> Benefits</Title>

- Easy to grasp
- Possible to ban/kick cheaters
- Free
- Fast
- GOTY/OOTB game types
- TA Mods Server customization

<Title order={4}> Limitations</Title>

- A ban on hitscan weapons for all servers (except the Shocklance)
- Single login server (Community)

## Option 3: Hirez Official

<Title order={4}> Benefits</Title>

- Easy to grasp
- Free
- Fast
- In-game adjustment/setup

<Title order={4}> Limitations</Title>

- Unable to prevent cheaters from joining games
- Locked to OOTB game type
- Single login server (Hirez Official)
- Limited customization
</div>
</>
  );
}
