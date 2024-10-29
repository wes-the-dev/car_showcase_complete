import { Footer, NavBar } from "@/components";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover elite cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='relative'
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
