import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FloatingBookingButton from "@/components/FloatingBookingButton";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yawarakaso.vercel.app"),
  icons: { icon: "/logo.svg" },
  title: "泊まれるカフェ やわらかそう | ゲストハウス",
  description:
    "コーヒーの香りと静かな時間。カフェに泊まる、新しい旅のかたち。建物まるごと一棟貸しのゲストハウスです。",
  openGraph: {
    title: "泊まれるカフェ やわらかそう",
    description: "コーヒーの香りと静かな時間。カフェに泊まる、新しい旅のかたち。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "泊まれるカフェ やわらかそう",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp.jpg"],
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
        <FloatingBookingButton />
      </body>
    </html>
  );
}
