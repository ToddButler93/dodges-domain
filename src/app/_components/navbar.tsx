"use client";

import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import logo from "../../../public/static/img/blueplate.png";

import { ColorSchemeScript } from "@mantine/core";
export function NavBar() {
  return (
    <header className="drop-shadow-header sticky top-0 z-50 flex min-w-full justify-between bg-zinc-800 px-2 py-4 font-mono font-medium text-slate-50 backdrop-blur md:px-5">
      <ColorSchemeScript />
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
          <ul className="text-l hidden items-end justify-center gap-6 font-medium sm:flex">
            <li>
              <Link
                href="/docs/guide-install-setup"
                className={`
      transition-all duration-300 hover:text-teal-500 active:text-teal-500 `}
              >
                Installing Tribes
              </Link>
            </li>
            <li>
              <Link
                href="/docs/gameplay/guide-quick"
                className={`
      transition-all duration-300 hover:text-teal-500 active:text-teal-500 `}
              >
                Gameplay Guides
              </Link>
            </li>

            <li>
              <Link
                href="/docs/development/guide-map-dev"
                className={`
      transition-all duration-300 hover:text-teal-500 active:text-teal-500 `}
              >
                Map Development
              </Link>
            </li>

            <li>
              <Link
                href="/docs/custommaps"
                className={`
      transition-all duration-300 hover:text-teal-500 active:text-teal-500 `}
              >
                Community Maps
              </Link>
            </li>

            <li>
              <Link
                href="/docs/information"
                className={`
      transition-all duration-300 hover:text-teal-500 active:text-teal-500 `}
              >
                Tribes Information
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={`
      transition-all duration-300 hover:text-teal-500 active:text-teal-500 `}
              >
                Blog
              </Link>
            </li>
          </ul>
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
