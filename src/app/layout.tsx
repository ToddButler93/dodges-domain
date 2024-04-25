import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { ThemeProvider } from "~/components/theme-provider";

import { Footer } from "~/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dodges Domain",
  description: "Dodges Domain",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body
          className={`flex min-h-screen w-full flex-col bg-background font-sans antialiased ${inter.variable}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
