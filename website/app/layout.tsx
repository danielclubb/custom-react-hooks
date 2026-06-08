import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom React Hooks",
  description: "A collection of custom React hooks in Typescript, tested using Jest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* link to github with github logo icon in white as svg */}
        <footer className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <Link href="https://github.com/danielclubb/custom-react-hooks">
            <img
              src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png"
              width={50}
              height={50}
              alt="GitHub"
            />
          </Link>
        </footer>
      </body>
    </html >
  );
}
