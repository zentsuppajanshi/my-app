import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { metadata as siteMetadata } from "./metadata"; // ← import名を変更して競合を回避

export const metadata: Metadata = siteMetadata; // ← Next.js向けに再エクスポート
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
          <nav className="flex justify-between items-center px-6 py-3 max-w-5xl mx-auto">
            <a href="/" className="font-semibold text-lg text-gray-800">
              Makoto Kouno
            </a>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/works" className="hover:text-blue-600">Works</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </div>
          </nav>
        </header>

        <main className="pt-20">{children}</main>

        <footer className="text-center text-gray-400 text-sm py-6 border-t mt-12">
          © {new Date().getFullYear()} Makoto Kouno. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
