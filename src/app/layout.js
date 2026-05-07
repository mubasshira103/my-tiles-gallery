import { Geist, Geist_Mono } from "next/font/google";
import 'animate.css';
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiles Gallery",
  description: " tiles gallery",
};

export default function RootLayout({ children }) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>

        <main className="bg-white text-black">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
