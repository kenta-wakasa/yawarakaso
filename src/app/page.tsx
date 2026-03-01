import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Access from "@/components/Access";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "泊まれるカフェ やわらかそう",
  description:
    "滋賀県甲賀市の山あいに佇む、泊まれるカフェ。建物まるごと一棟貸し切りのゲストハウスです。管理人が同じ建物に常駐しています。",
  url: "https://yawarakaso.vercel.app",
  telephone: "080-3868-8117",
  email: "contact@detarame.net",
  image: "https://yawarakaso.vercel.app/ogp.jpg",
  address: {
    "@type": "PostalAddress",
    postalCode: "528-0204",
    addressRegion: "滋賀県",
    addressLocality: "甲賀市",
    streetAddress: "土山町山女原119",
    addressCountry: "JP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "11:00",
      closes: "17:00",
    },
  ],
  checkinTime: "15:00",
  checkoutTime: "10:00",
  sameAs: [
    "https://www.instagram.com/yawarakaso",
    "https://www.airbnb.jp/h/yawarakaso",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Pricing />
        <Access />
        <Booking />
        <Footer />
      </main>
    </>
  );
}
