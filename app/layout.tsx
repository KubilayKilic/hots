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
  title: "Harvest of the Soul",
  description: "Kişisel dijital kütüphane",
  icons: {
    icon: "/hots.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Sabit background sadece ilk ekran kadar gözüksün */}
        <div className="background-layer" />

        {/* Sayfa içeriği */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
