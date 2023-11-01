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
        <main className="flex items-center min-h-screen flex-col gap-6 py-4">
          {children}
        </main>
        <Footer />
      </Flex>
    </>
  );
}