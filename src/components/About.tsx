const features = [
  {
    icon: "☕",
    title: "こだわりのカフェ",
    desc: "厳選した豆を丁寧に淹れたコーヒーと、手作りのフードをお楽しみください。旅の疲れを、一杯の温かさで。",
  },
  {
    icon: "🌙",
    title: "ゆったり宿泊",
    desc: "カフェの空間に泊まる、非日常の体験。建物まるごと一棟貸しで、ゆったりとした時間をお過ごしいただけます。",
  },
  {
    icon: "💬",
    title: "人とのつながり",
    desc: "旅人同士、地元の人、様々な出会いが生まれる共有スペース。新しい縁が生まれる場所。",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ backgroundColor: "#FAF5EE" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.45em] uppercase mb-4 font-light"
            style={{ color: "#A07848" }}
          >
            About
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-6 tracking-wide"
            style={{ color: "#2A1A0F" }}
          >
            やわらかそうとは
          </h2>
          <div
            className="w-10 h-px mx-auto mb-10"
            style={{ background: "linear-gradient(to right, transparent, #C8935A, transparent)" }}
          />
          <p
            className="max-w-2xl mx-auto leading-loose text-base font-light"
            style={{ color: "#7A6050" }}
          >
            「泊まれるカフェ やわらかそう」は、ゲストハウスとカフェが一体となった宿泊施設です。
            <br className="hidden md:block" />
            旅行者も地元の方も、誰でも立ち寄れるカフェと、ゆったり泊まれる客室で、
            <br className="hidden md:block" />
            日常を少しやわらかくする時間をお届けします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-10 rounded-xl border transition-all hover:shadow-sm"
              style={{ backgroundColor: "#F5EDE0", borderColor: "#E8D8C0" }}
            >
              <div className="text-3xl mb-5 opacity-80">{f.icon}</div>
              <h3
                className="text-sm font-medium mb-3 tracking-widest uppercase"
                style={{ color: "#5C3820" }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-loose font-light" style={{ color: "#8A7060" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
