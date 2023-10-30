import Link from "next/link";
import Image from 'next/image'
import { NavMain } from "./NavMain";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import logo from '../../public/static/img/blueplate.png'

export const Header = () => {
    return (
        <header className="drop-shadow-header sticky top-0 z-50 flex justify-between bg-zinc-800 py-2 px-2 font-mono font-medium text-slate-50 backdrop-blur md:px-5 sm:w-full">
            <Link href="/" className="flex items-center justify-between  text-2xl font-bold text-slate-50 sm:gap-3 px-2">
                <Image src={logo} alt="Dodges Domain" className="w-12 h-12"/>
                <p className="px-2 ">
                Dodges Domain</p>
            </Link>
            <div className="flex items-center justify-between sm:gap-6 px-2 md:px-18">
                <nav className="justify-between sm:gap-6">
                    <NavMain />
                </nav>
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
        </header>
    );
}