import { Inter } from "next/font/google";
import "./globals.css";

import { Playfair } from "next/font/google"
import BGParticle from "@/components/BGParticle";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', });
const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: "Mizanur Hasan",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}    
       bg-third`}>
        <BGParticle />
        <div className="sticky top-0 mt-5 z-50">
          <Navbar />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
