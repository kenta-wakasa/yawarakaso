import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  icons: { icon: "/logo.svg" },
  title: "泊まれるカフェ やわらかそう | ゲストハウス",
  description:
    "コーヒーの香りと静かな時間。カフェに泊まる、新しい旅のかたち。建物まるごと一棟貸しのゲストハウスです。",
  openGraph: {
    title: "泊まれるカフェ やわらかそう",
    description: "コーヒーの香りと静かな時間。カフェに泊まる、新しい旅のかたち。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
