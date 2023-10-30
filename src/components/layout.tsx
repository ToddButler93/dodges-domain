import { type ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="flex items-center h-screen flex-col gap-28 py-10">
        {children}
      </main>
      <Footer />
    </>
  );
}