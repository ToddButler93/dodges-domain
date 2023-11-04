import { type ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Flex } from "@tremor/react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Flex className="flex flex-col justify-between">
        <Header />
        <main className="flex h-fit min-h-screen w-full flex-col items-center gap-6 py-6">
          {children}
        </main>
        <Footer />
      </Flex>
    </>
  );
}
