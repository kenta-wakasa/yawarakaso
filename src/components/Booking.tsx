export default function Booking() {
  return (
    <section id="booking" className="py-28 px-6" style={{ backgroundColor: "#FAF5EE" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.45em] uppercase mb-4 font-light"
            style={{ color: "#A07848" }}
          >
            Reservations
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-6 tracking-wide"
            style={{ color: "#2A1A0F" }}
          >
            ご予約
          </h2>
          <div
            className="w-10 h-px mx-auto mb-10"
            style={{ background: "linear-gradient(to right, transparent, #C8935A, transparent)" }}
          />
          <p className="max-w-md mx-auto text-sm leading-loose font-light" style={{ color: "#8A7060" }}>
            Airbnb からご予約いただけます。
            <br />
            空室状況・最新料金はAirbnbにてご確認ください。
          </p>
        </div>

        <div className="text-center mb-16">
          <a
            href="https://www.airbnb.jp/h/yawarakaso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-light tracking-wide border transition-all hover:opacity-70"
            style={{ borderColor: "#5C3820", color: "#FAF5EE", backgroundColor: "#2A1A0F" }}
          >
            <span style={{ color: "#C8935A" }}>Airbnb</span>
            <span>で予約する</span>
          </a>
        </div>

        <div
          className="rounded-xl p-10 text-center max-w-xl mx-auto border"
          style={{ backgroundColor: "#F5EDE0", borderColor: "#E8D8C0" }}
        >
          <h3 className="text-lg font-light mb-3 tracking-wide" style={{ color: "#2A1A0F" }}>
            お問い合わせ
          </h3>
          <p className="text-sm mb-8 leading-loose font-light" style={{ color: "#8A7060" }}>
            ご質問、長期滞在、グループ予約など、
            <br className="hidden md:block" />
            お気軽にメールでお問い合わせください。
          </p>
          <a
            href="mailto:contact@detarame.net"
            className="inline-flex items-center gap-2 rounded-full px-9 py-3 text-sm font-light tracking-wide border transition-all hover:opacity-70"
            style={{ borderColor: "#5C3820", color: "#C8935A", backgroundColor: "#2A1A0F" }}
          >
            <span style={{ color: "#FAF5EE" }}>メールでお問い合わせ</span>
          </a>
        </div>
      </div>
    </section>
  );
}
