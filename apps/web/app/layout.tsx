import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "providers/AnimationProvider";
import { ToasterProvider } from "@/providers/ToasterProvider";
import Header from "@/components/Appbar";
import Footer from "@/components/Footer";
import SessionProvider from "@/providers/SessionProvider";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Automata",
  description: "A workflow automation platform for your team",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      }
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <SessionProvider>
          <AnimationProvider>
            <main className="min-h-screen bg-white text-black">
              <Header />
              {children}
              <Footer />
            </main>
          </AnimationProvider>
          <ToasterProvider />
        </SessionProvider>
      </body>
    </html>
  );
}