import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { NavBar } from "./_components/navbar";
import { Footer } from "./_components/footer";

import { TRPCReactProvider } from "~/trpc/react";

import "@mantine/core/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider } from "@mantine/core";

import { DEFAULT_THEME } from "@mantine/core";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dodges Domain",
  description: "Dodges Domain",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
// eslint-disable-next-line
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} relative`}>
          <TRPCReactProvider cookies={cookies().toString()}>
            <MantineProvider theme={DEFAULT_THEME} defaultColorScheme="dark">
              <main className="flex min-h-screen w-full flex-col items-center gap-6 pb-6">
                <NavBar />
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
