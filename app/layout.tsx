import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cek Khodam Online",
  description: "Ingin tahu khodam mana yang mendampingi Anda? Cek Khodam Online adalah aplikasi seru dan interaktif yang membantu Anda menemukan sosok khodam unik yang menemani Anda. Dari yang humoris hingga yang misterius, temukan semuanya di sini!",
  keywords:"khodam online, cek khodam, khodam, aplikasi khodam, aplikasi cek khodam, online khodam, web khodam, web cek khodam, web khodam online, khodam spiritual, khodam mistis, pengetahuan khodam, khodam pendamping, khodam gaib, khodam penjaga, khodam pelindung, khodam bantuan, khodam rejeki, cara mengetahui khodam, jenis-jenis khodam, khodam islam, khodam hindu, khodam jawa, khodam sunda, khodam bali, khodam nusantara, khodam penarik uang, khodam pesugihan, khodam pengasih, khodam pelet, khodam sakti, cara memanggil khodam, ritual khodam, doa memanggil khodam, mantra khodam, ajian khodam, ilmu khodam, energi khodam, cara berkomunikasi dengan khodam, khodam dalam tubuh, tanda-tanda keberadaan khodam, kekuatan khodam, fungsi khodam, khodam penarik jodoh, khodam penglaris, khodam pembersih, khodam pembuka aura, khodam penjaga rumah, khodam pengobatan, khodam penyembuhan, khodam leluhur, khodam macan putih, khodam harimau, khodam naga, khodam burung hantu, khodam rajawali, khodam garuda, khodam merpati, khodam ular, khodam kijang, khodam rusa, khodam kelabang, khodam serigala, khodam monyet, khodam kera sakti, khodam buaya putih, khodam kelelawar, khodam burung gagak, khodam dewa, khodam raja, khodam wali, khodam kesaktian, khodam perlindungan, khodam kebal, khodam ketenangan, khodam keberuntungan, aplikasi khodam online, khodam interaktif, khodam unik, khodam humoris, khodam misterius, menemukan khodam, khodam pendamping spiritual, khodam penjaga pribadi, khodam penarik energi positif, khodam penolak bala, khodam penghilang sial, khodam pemancar aura positif, khodam pendamping ritual, khodam pembimbing spiritual, khodam pengusir makhluk halus, khodam penjaga alam gaib, khodam pelindung gaib"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="xkFSWJsVIAOvrovfCAGLUEzw_HUA6pLGuZqWTbWp-b8" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
