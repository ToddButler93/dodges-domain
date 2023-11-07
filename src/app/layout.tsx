import "~/styles/globals.css";
import "@mantine/core/styles.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { NavBar } from "./_components/navbar";
import { Footer } from "./_components/Footer";

import { TRPCReactProvider } from "~/trpc/react";

import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider } from "@mantine/core";

import type { MantineColorsTuple } from "@mantine/core";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dodges Domain",
  description: "Dodges Domain",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const myColor: MantineColorsTuple = [
  "#e4fff8",
  "#d3f9ee",
  "#a9f1dc",
  "#7ceac9",
  "#57e2b9",
  "#40deaf",
  "#30dda8",
  "#1fc493",
  "#0cae82",
  "#00976e",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <TRPCReactProvider cookies={cookies().toString()}>
            <MantineProvider
              theme={{
                colors: {
                  myColor,
                },
              }}
              defaultColorScheme="dark"
            >
              <NavBar />
              <main className="flex h-fit min-h-screen w-full flex-col items-center gap-6 py-6">
                {children}
              </main>
              <Footer />
            </MantineProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
