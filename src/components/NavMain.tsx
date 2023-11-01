import Link from "next/link";

export const NavMain = () => {
    return (
    <ul className="hidden items-end justify-center gap-6 sm:flex text-l font-medium">
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
          href="/docs/gameplay"
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
  );
};