//TODO Import Icons

import Link from "next/link";
import Image from "next/image";


export const Footer = () => {
  return (
    <footer className="mb-0 bg-zinc-700 md:mb-0 font-mono">
        <div className="mx-auto max-w-7xl py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-m font-medium text-slate-50 md:flex-row">
            <strong>
              <p className="flex flex-col items-center justify-between md:flex-row">
                <Link
                  aria-label="NA Community Discord"
                  href="https://discord.gg/dd8JgzJ"
                >NA Community Discord
                </Link>
              </p>
            </strong>
            <p>
              Made by Dodge
            </p>
            <p>
              <strong>
                <Link 
                aria-label="NA Community Discord"
                href="https://github.com/toddbutler93/dodges-domain"
                >Github
                </Link>
              </strong>
            </p>
          </div>
          </div>
      </footer>
  );
};