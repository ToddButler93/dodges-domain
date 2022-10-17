---
id: guide-server-game-hosting
title: Game Server Hosting
sidebar_label: Game Server Hosting
sidebar_position: 1
---
## Option 1: Docker  Servers

### Azure Setup

Installs docker and loads the taserver docker image from this project on an Ubuntu VM. From [Courtesy of Chicken](https://raw.githubusercontent.com/chickenbellyfin/taserver-docker/master/README.md)).
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fchickenbellyfin%2Ftaserver-docker%2Fmaster%2Fdeploy%2Fazuredeploy.json)


### Manual Docker Ubuntu
This will be a basic run down on how to setup TA Server on an Ubunutu Server.

#### Step 0: Prerequisites
##### 0.1 Setup ubuntu
Ports that need opening: 7777-7877
Ports that need opening: 9002-9102

Using UFW:
sudo ufw allow 7777:7877/tcp
sudo ufw allow 7777:7877/udp
sudo ufw allow 9002:9102/udp

##### 0.2 Setup Docker
[Install via the convenience script](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script) 

curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

###### 0.3 Setup current user
sudo usermod -aG docker *username*

Where '*username*' is the name of the user.

###### 0.4 Get TA Server Image
docker pull public.ecr.aws/i2q9d4v7/taserver:latest
docker tag public.ecr.aws/i2q9d4v7/taserver:latest taserver

###### 0.5 Download Helper Script
wget -O taserver.sh "https://raw.githubusercontent.com/JigglyJoogins/taserver-deploy/master/docker/taserver.sh"
chmod +x taserver.sh

##### 0.6 Setup Game Server
To run the game server run the command:

./taserver.sh -d gamesettings -p 0

'-d gamesettings' will be a mounted folder for this particular docker container that lets you alter the game settings of the server.

'-p 0' sets the port offset to 0. 
The default ports are 7777 and 7778. 
A port offset of 2 would use ports 7779 and 7781.

### Benefits
- Possible to ban/kick cheaters
- GOTY/OOTB game types
- TA Mods Server customization
- Community or a custom login server
- No restrictions

### Limitations
- Difficult and slow to setup
- Limited support
- Can be costly

## Option 2: LLamagrab Servers
An easy to grasp server hosting solution for community servers.

[https://llamagrab.net/](https://llamagrab.net/)

### Benefits
- Easy to grasp
- Possible to ban/kick cheaters
- Free
- Fast
- GOTY/OOTB game types
- TA Mods Server customization

### Limitations
- A ban on hitscan weapons for all servers (except the Shocklance)
- Single login server (Community)

## Option 3: Hirez Official

### Benefits
- Easy to grasp
- Free
- Fast
- In-game adjustment/setup

### Limitations
- Unable to prevent cheaters from joining games 
- Locked to OOTB game type
- Single login server (Hirez Official)
- Limited customization