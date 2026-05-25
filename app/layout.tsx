import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mario Barrera - 3D Portfolio",
  description: "Desarrollador de software con experiencia en TypeScript y JavaScript, y domino frameworks como React, Node.js y Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-primary`}>
      <body className="min-h-full flex flex-col items-center"> {/* Agregamos items-center aquí */}
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
