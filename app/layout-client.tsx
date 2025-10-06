"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const linkClass = (path: string) =>
    `hover:underline transition ${
      pathname === path
        ? "border-b-2 border-yellow-400 text-yellow-300 font-semibold"
        : ""
    }`;

  return (
    <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* ✅ 固定ヘッダー */}
      <header className="sticky top-0 z-50 bg-blue-600 dark:bg-gray-800 text-white py-4 shadow-md transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold">
            <Link href="/">Makoto Kouno</Link>
          </h1>
          <nav className="space-x-6 text-sm">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/works" className={linkClass("/works")}>
              Works
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </nav>
          <button
            onClick={toggleTheme}
            className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-3 py-1 rounded transition"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* ✅ メイン */}
      <main className="flex-grow container mx-auto px-6 py-10">
        {children}
      </main>

      {/* ✅ フッター */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 text-center py-4 mt-10 transition-colors duration-300">
        <p className="text-sm">
          © 2025 Makoto Kouno. All rights reserved.
        </p>
      </footer>
    </body>
  );
}
