import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundSvgShapes from "./components/BackgroundSvgShapes";
import NavBar from "./components/navbar/NavBar";
import BgAnimationBlobs from "./components/BgAnimationBlob/BgAnimationBlobs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Key Strockz",
  description: "test your typing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[--background-primary]"}>
        <BackgroundSvgShapes />
        <BgAnimationBlobs/>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
