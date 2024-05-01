import Link from "next/link";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function T3Links() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>External Links</h1>
        </Card>
        <div className="flex flex-col gap-3">
          <h2>Official Resources</h2>
          <Link href="https://www.tribes3rivals.com/">Official Site</Link>
          <Link href="https://store.steampowered.com/app/2687970/TRIBES_3_Rivals/">
            Steam Page
          </Link>
          <Link href="https://discord.gg/tribes">Discord</Link>
          <Link href="https://www.youtube.com/@Tribes3Rivals">Youtube</Link>
          <Link href="https://twitter.com/Tribes3Rivals">Twitter</Link>
          <Link href="https://www.instagram.com/tribes3rivals/">Instagram</Link>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2>Community Resources</h2>
          <Link href="https://www.tribes3rivals.com/">Official Site</Link>
          <Link href="https://www.instagram.com/tribes3rivals/">Instagram</Link>
        </div>
      </div>
    </>
  );
}
