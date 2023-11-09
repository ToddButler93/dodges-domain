import { FaDiscord, FaGithub } from "react-icons/fa6";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mb-0 w-full bg-zinc-700 px-8 font-mono md:mb-0 ">
      <div className="mx-auto max-w-7xl py-6">
        <div className="text-m flex flex-col items-center justify-between gap-3 font-medium text-slate-50 md:flex-row">
          <strong>
            <p className="flex flex-col items-center justify-between md:flex-row">
              <Link
                aria-label="NA Community Discord"
                href="https://discord.gg/dd8JgzJ"
              >
                <FaDiscord size={30} />
              </Link>
            </p>
          </strong>
          <p>Made by Dodge</p>
          <p>
            <strong>
              <Link
                aria-label="NA Community Discord"
                href="https://github.com/toddbutler93/dodges-domain"
              >
                <FaGithub size={30} />
              </Link>
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
