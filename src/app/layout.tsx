import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer";
import  SessionProvider  from "./SessionProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oxyzon",
  description: "We make your wallet cry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        <Navbar/>
        <main className="p-4 max-w-7xl m-auto min-w-[300px]">{children}</main>
        <Footer/>
        <SpeedInsights />
        </SessionProvider>
      </body>
    </html>
  );
}
