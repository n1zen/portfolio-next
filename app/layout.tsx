import type { Metadata } from "next";
import { PT_Serif, Josefin_Sans, Junge } from "next/font/google";
import "./globals.css";

import Header from "../app/components/Header";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-subheading",
  display: "swap",
});

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-paragraph",
  display: "swap",
});

export const metadata: Metadata = {
  title: "n1zen.dev Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ptSerif.variable} ${josefinSans.variable} ${junge.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
