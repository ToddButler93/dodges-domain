import { NavBarT3 } from "~/components/navbar-t3";

export default function T3Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarT3 />
      <div className={`min-h-screen bg-background`}>{children}</div>
    </>
  );
}
