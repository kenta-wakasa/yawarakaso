const features = [
  "建物まるごと一棟貸し切り",
  "管理人が同じ建物に常駐",
  "カフェスペース・共有ラウンジ利用可",
  "バス・トイレ完備",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6" style={{ backgroundColor: "#FAF5EE" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.45em] uppercase mb-4 font-light"
            style={{ color: "#A07848" }}
          >
            Plans &amp; Pricing
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-6 tracking-wide"
            style={{ color: "#2A1A0F" }}
          >
            料金・プラン
          </h2>
          <div
            className="w-10 h-px mx-auto mb-6"
            style={{ background: "linear-gradient(to right, transparent, #C8935A, transparent)" }}
          />
          <p className="text-sm font-light" style={{ color: "#A08870" }}>
            表示価格は税込です。時期により変動します。
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div
            className="rounded-xl p-10"
            style={{ backgroundColor: "#2A1A0F", border: "1px solid #3C2415" }}
          >
            <p
              className="text-xs tracking-[0.4em] uppercase mb-2 font-light"
              style={{ color: "#7A5838" }}
            >
              Whole Building
            </p>
            <h3
              className="text-2xl font-light mb-1 tracking-wide"
              style={{ color: "#DDD0BE" }}
            >
              一棟貸切
            </h3>

            <p className="text-sm font-light mb-6 leading-relaxed" style={{ color: "#8A7060" }}>
              建物をまるごと貸し切るプランです。
              管理人が同じ建物内に常駐しているため、
              困ったことがあればいつでもお声がけいただけます。
            </p>

            <div
              className="w-full h-px mb-6"
              style={{
                background: "linear-gradient(to right, transparent, #3C2415, transparent)",
              }}
            />

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li
                  key={f}
                  className="text-sm flex items-center gap-3 font-light"
                  style={{ color: "#8A7060" }}
                >
                  <span style={{ color: "#7A5838" }}>—</span>
                  {f}
                </li>
              ))}
            </ul>

            <div
              className="w-full h-px mb-6"
              style={{
                background: "linear-gradient(to right, transparent, #3C2415, transparent)",
              }}
            />

            <div className="flex items-baseline gap-1">
              <span className="text-sm font-light" style={{ color: "#7A5838" }}>¥</span>
              <span className="text-4xl font-light" style={{ color: "#C8A878" }}>
                23,106
              </span>
              <span className="text-sm font-light" style={{ color: "#7A5838" }}>〜 / 棟・泊</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs mt-10 font-light" style={{ color: "#A08870" }}>
          ※ 最新の料金・空室状況はAirbnbにてご確認ください。
        </p>
      </div>
    </section>
  );
}
