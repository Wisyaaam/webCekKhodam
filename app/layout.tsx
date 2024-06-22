import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cek Khodam Online",
  description: "Ingin tahu khodam mana yang mendampingi Anda? Cek Khodam Online adalah aplikasi seru dan interaktif yang membantu Anda menemukan sosok khodam unik yang menemani Anda. Dari yang humoris hingga yang misterius, temukan semuanya di sini!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
