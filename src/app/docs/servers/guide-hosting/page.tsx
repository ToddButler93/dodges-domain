import Link from "next/link";
import { Alert } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import Code from "./_components/code";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

export default function TribesServerHosting() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Card className="grow p-6 text-center">
          <h1>Tribes Server Hosting</h1>
        </Card>
        <div className="flex flex-col gap-3">
          <h2>Ubuntu Server Setup</h2>
          <Button asChild>
            <Link href={"https://github.com/JigglyJoogins/tribes-vm"}>
              Server management Repo
            </Link>
          </Button>
          <Button asChild>
            <Link
              href={"https://hub.docker.com/r/chickenbellyfin/taserver/tags"}
            >
              Dockerhub ‘latestmaps’ image
            </Link>
          </Button>
          <Button asChild>
            <Link
              href={"#Step 2: Setup TAServer"}
            >
              Skip Initial Setup
            </Link>
          </Button>
          <h3>Game Server Setup</h3>
          <p>
            This will be a basic run down on how to setup TA Server on an Ubuntu
            Server.
          </p>
          <h4>Step 0: Setup Ubuntu</h4>
          <Alert className="bg-teal-800 p-6 text-zinc-100">
            This guide assumes you have just created a new Ubuntu Server VM.
          </Alert>
          <h5>Update ubuntu</h5>
          <Code>
            <p>sudo apt-get update</p>
            <p>sudo apt-get upgrade</p>
          </Code>
          <h5>Install nano (Dodge’s preferred editor)</h5>
          <Code>
            <p>sudo apt-get -y install nano</p>
          </Code>
          <Code>
            <p>sudo apt-get -y install unzip</p>
          </Code>
          <h5>Step 0.1: Setup Firewall</h5>
          Using UFW:
          <Code>
            <p>sudo ufw allow 22/tcp</p>
            <p>sudo ufw status</p>
          </Code>
          For TAServer the TCP/UDP Ports will need opening:
          <p>7777-7878</p> <p>9002-9102</p>
          <Code>
            <p>sudo ufw enable</p>
            <p>sudo ufw allow 7777:7878/tcp</p>
            <p>sudo ufw allow 7777:7878/udp</p>
            <p>sudo ufw allow 9002:9102/tcp</p>
            <p>sudo ufw allow 9002:9102/udp</p>
          </Code>
          <h5>Step 0.2: Create User</h5>
          <Code>
            <p>adduser tribesuser</p>
          </Code>
          <p>Enter a password</p>
          <p>Repeat password</p>
          <Code>
            <p>sudo usermod -aG sudo tribesuser</p>
            <p>sudo -l -U tribesuser</p>
          </Code>
          Very that user has admin privileges.
          <Code>
            <p>sudo reboot</p>
          </Code>
          Connect as tribesuser@ip Secure root user (disable login)
          <Code>
            <p>sudo passwd -l root</p>
          </Code>
          <p>
            Setup fail2ban to ban clients with large amounts of authentication
            errors.
          </p>
          <h4>Setup Fail2Ban</h4>
          <Code>
            <p>sudo apt install fail2ban</p>
            <p>sudo systemctl status fail2ban</p>
          </Code>
          <Code>
            <p>sudo cp /etc/fail2ban/fail2ban.&#123;conf,local&#125;</p>
            <p>sudo cp /etc/fail2ban/jail.&#123;conf,local&#125;</p>
            <p>sudo nano /etc/fail2ban/fail2ban.local</p>
          </Code>
          <p>Set:</p>
          <Code>
            <p>loglevel = INFO</p>
            <p>logtarget = /var/log/fail2ban.log</p>
          </Code>
          <p>Save & exit.</p>
          <Code>
            <p>sudo nano /etc/fail2ban/jail.local</p>
          </Code>
          <p>Set:</p>
          <Code>
            <p>ban time = 10m</p>
            <p>findtime = 10m</p>
            <p>maxretry = 5</p>
            <p>backend = systemd</p>
          </Code>
          Save & exit.
          <Code>
            <p>sudo systemctl restart fail2ban</p>
            <p>sudo systemctl status fail2ban</p>
          </Code>
          <h5>Step 1: Setup Docker</h5>
          <p>Install via the convenience script.</p>
          <Code>
            <p>curl -fsSL https://get.docker.com -o get-docker.sh</p>
            <p>sudo sh ./get-docker.sh</p>
          </Code>
          <p>Setup current user.</p>
          <Code>
            <p>sudo usermod -a -G docker $USER</p>
          </Code>
          <p>Logout and reconnect.</p>
          <Code>
            <p>logout</p>
          </Code>
          <h4>Step 2: Setup TAServer</h4>
          <p>Get the TA Server image.</p>
          <Code>
            <p>docker pull chickenbellyfin/taserver:latest-maps</p>
            <p>docker tag chickenbellyfin/taserver:latest-maps taserver</p>
          </Code>
          <h4>Step 3: Download Helper Script</h4>
          <Code>
            <p>
              wget -O update.sh
              &quot;&#60;https://raw.githubusercontent.com/JigglyJoogins/tribes-vm/master/update.sh&#62;&quot;
            </p>
            <p>chmod +x update.sh</p>
            <p>./update.sh</p>
          </Code>
          If setup is for Australian servers use this instead:
          <Code>
            <p>./update.sh -a</p>
          </Code>
          Update new maps:
          <Code>
            <p>./grab_latest_maps.sh</p>
          </Code>
          <h4>Step 4: Launch The Game Server</h4>
          ### To run the game server run the command:
          <Code>
            <p>./launchservers.sh</p>
          </Code>
          To add the experimental lag compensation run the command:
          <Code>
            <p>./lagcomp.sh</p>
          </Code>
        </div>
        <Separator /><div className="flex flex-grow flex-col">
          
        <Card className="grow p-6 text-center">
          <h1>Unavailable Options</h1>
        </Card>
          <div className="flex flex-col justify-center gap-3">
            <Accordion type="single" collapsible>
              <AccordionItem value="llamagrab">
                <AccordionTrigger className="text-xl">
                  Llamagrab
                </AccordionTrigger>
                <AccordionContent>

                <div className="flex flex-col gap-3">
          <h2>Llamagrab Servers</h2>
          <Alert className="bg-red-900 text-zinc-100">
            <p>Llamagrab is currntly offline.</p>
          </Alert>
          An easy to grasp server hosting solution for community servers.
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
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="hirez">
                <AccordionTrigger className="text-xl">
                  Hi-Rez Official
                </AccordionTrigger>
                <AccordionContent>
        <div className="flex flex-col gap-3">
          <h2>Hirez Official</h2>
          <Alert className="bg-red-900 text-zinc-100">
            <p>Hi-Rez servers are offline.</p>
          </Alert>
          <h3>Benefits</h3>
          <li>Easy to grasp</li>
          <li>Free</li>
          <li>Fast</li>
          <li>In-game adjustment/setup</li>
          <h3>Limitations</h3>
          <li>Unable to prevent cheaters from joining games</li>
          <li>Locked to OOTB game type</li>
          <li>Single login server (Hirez Official)</li>
          <li>Limited customization</li>
        </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
