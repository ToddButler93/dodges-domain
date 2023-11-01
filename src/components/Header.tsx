import Link from "next/link";
import Image from "next/image";
import { NavMain } from "./NavMain";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import logo from "../../public/static/img/blueplate.png";

export const Header = () => {
  return (
    <header className="drop-shadow-header sticky top-0 z-50 flex min-w-full justify-between bg-zinc-800 px-2 py-4 font-mono font-medium text-slate-50 backdrop-blur md:px-5">
      <div className="text-m flex min-w-full flex-col items-center justify-between gap-3 font-medium text-slate-50 md:flex-row">
        <div className="md:px-18 flex items-center justify-start px-2 sm:gap-6">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-slate-50"
          >
            <Image src={logo} alt="Dodges Domain" className="h-8 w-8" />
            <p className="px-2 ">Dodges Domain</p>
          </Link>
        </div>
        <div className="md:px-18 flex items-center justify-between px-2 sm:gap-6">
          <NavMain />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </header>
  );
};
