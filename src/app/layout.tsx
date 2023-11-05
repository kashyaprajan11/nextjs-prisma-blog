import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is a personal project that is built in Nextjs and prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} py-1 px-4 font-semibold`}>
        <Link href="/" className="text-3xl">Blog</Link>
        {children}
      </body>
    </html>
  );
}
