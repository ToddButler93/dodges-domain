import Link from "next/link";
import Image from 'next/image'
import { NavMain } from "./NavMain";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import logo from '../../public/static/img/blueplate.png'

export const Header = () => {
    return (
        <header className="drop-shadow-header sticky top-0 z-50 flex justify-between bg-zinc-800 py-4 px-2 font-mono font-medium text-slate-50 backdrop-blur md:px-5 min-w-full">
            <div className="flex flex-col items-center justify-between gap-3 text-m font-medium text-slate-50 md:flex-row min-w-full">
                <div className="flex items-center justify-start">
                    <Link href="/" className="flex items-center text-2xl font-bold text-slate-50">
                        <Image src={logo} alt="Dodges Domain" className="w-8 h-8"/>
                        <p className="px-2 ">
                        Dodges Domain</p>
                    </Link>
                </div> 
                <div className="flex items-center justify-between sm:gap-6 px-2 md:px-18">
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
}