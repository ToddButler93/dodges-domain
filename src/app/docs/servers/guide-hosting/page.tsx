"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function TribesServerHosting() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Card className="grow py-6 text-center">
          <h1>Tribes Server Hosting</h1>
        </Card>
        <div className="flex flex-col gap-3">
          <h2>Option 1: Docker Servers</h2>
          <h3>Azure Setup</h3>
          <p>
            Installs docker and loads the taserver docker image from this
            project on an Ubuntu VM.
          </p>
          <Button asChild>
            <Link href="https://raw.githubusercontent.com/chickenbellyfin/taserver-docker/master/README.md">
              Courtesy of Chicken
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fchickenbellyfin%2Ftaserver-docker%2Fmaster%2Fdeploy%2Fazuredeploy.json">
              Deploy to Azure
            </Link>
          </Button>
          <h3>Manual Docker Ubuntu</h3>
          <p>
            This will be a basic run down on how to setup TA Server on an
            Ubunutu Server.
          </p>
          <h3>Step 0: Prerequisites</h3>
          <h4>0.1 Setup ubuntu</h4>
          <p>TCP/UDP Ports that need opening: 7777-7877</p>
          <p> UDP ports that need opening: 9002-9102 </p>
          <h5>Using UFW</h5>
          <p>sudo ufw allow 7777:7877/tcp</p>
          <p>sudo ufw allow 7777:7877/udp</p>
          <p>sudo ufw allow 9002:9102/udp</p>
          <h4>0.2 Setup Docker</h4>
          <Button asChild>
            <Link href="https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script">
              Install via the convenience script
            </Link>
          </Button>
          &apos;curl -fsSL https://get.docker.com -o get-docker.sh&apos;
          &apos;sudo sh get-docker.sh&apos;
          <h6>0.3 Setup current user</h6>
          &apos;sudo usermod -aG docker *username*&apos; Where
          &apos;_username_&apos; is the name of the user.
          <h6>0.4 Get TA Server Image</h6>
          &apos;docker pull taserver:latest-maps&apos; &apos;docker tag
          taserver:latest-maps taserver&apos;
          <h6>0.5 Download Helper Script</h6>
          &apos;wget -O taserver.sh
          &quot;https://raw.githubusercontent.com/JigglyJoogins/taserver-deploy/master/docker/taserver.sh&quot;&apos;
          &apos;chmod +x taserver.sh&apos;
          <h4>0.6 Setup Game Server</h4>
          To run the game server run the command: &apos;./taserver.sh -d
          gamesettings -p 0&apos; &apos;-d gamesettings&apos; will be a mounted
          folder for this particular docker container that lets you alter the
          game settings of the server. &apos;-p 0&apos; sets the port offset to
          0. The default ports are 7777 and 7778. A port offset of 2 would use
          ports 7779 and 7781.
          <h3>Benefits</h3>
          <li>Possible to ban/kick cheaters </li> <li>GOTY/OOTB game types </li>
          <li>TA Mods Server customization </li>
          <li>Community or a custom login server</li>
          <li>No restrictions </li>
          <h3>Limitations</h3>
          <li>Difficult and slow to setup </li>
          <li>Limited support </li>
          <li>Can be costly </li>{" "}
        </div>
        <Separator />
        <div className="flex flex-col gap-3 p-6">
          <h2>Option 2: LLamagrab Servers</h2>An easy to grasp server hosting
          solution for community servers.
          <Button asChild>
            <Link href="https://llamagrab.net/">Llamagrab.net</Link>
          </Button>
          <h3>Benefits</h3>
          <li>Easy to grasp </li>
          <li>Possible to ban/kick cheaters</li>
          <li>Free</li>
          <li>Fast</li>
          <li>GOTY/OOTB game types </li>
          <li>TA Mods Server customization</li>
          <h3>Limitations</h3>
          <li>
            A ban on hitscan weapons for all servers (except the Shocklance)
          </li>
          <li>Single login server (Community)</li>{" "}
        </div>
        <Separator />
        <div className="flex flex-col gap-3 p-6">
          <h2>Option 3: Hirez Official</h2>
          <h3>Benefits</h3>
          <li>Easy to grasp</li>
          <li>Free</li>
          <li>Fast</li>
          <li>In-game adjustment/setup</li>
          <h3>Limitations</h3>
          <li className="text-red-600">
            Hi-Rez servers are no longer accessible for the game and this method
            is no longer possible.
          </li>
          <li>Unable to prevent cheaters from joining games</li>
          <li>Locked to OOTB game type</li>
          <li>Single login server (Hirez Official)</li>
          <li>Limited customization</li>
        </div>
      </div>
    </>
  );
}
