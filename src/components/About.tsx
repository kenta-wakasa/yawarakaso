import Image from "next/image";

const features = [
  {
    photo: "カフェスペース.jpg",
    title: "こだわりのカフェ",
    desc: "厳選した豆を丁寧に淹れたコーヒーと、手作りのフードをお楽しみください。",
  },
  {
    photo: "ソファーでゆっくり.jpg",
    title: "ゆったり宿泊",
    desc: "建物まるごと一棟貸し切り。カフェの空間に泊まる、非日常の体験を。",
  },
  {
    photo: "新しい出会い.jpg",
    title: "人とのつながり",
    desc: "旅人同士、地元の人。様々な出会いと、あたたかい時間が生まれます。",
  },
];

export default function About() {
  return (
    <section id="about">
      {/* Split: photo + text */}
      <div className="grid md:grid-cols-2" style={{ minHeight: "70vh" }}>
        {/* Photo */}
        <div className="relative" style={{ minHeight: "55vw" }}>
          <Image
            src="/やわらかく包む灯.jpg"
            alt="やわらかく包む灯"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-20"
          style={{ backgroundColor: "#FAF5EE" }}
        >
          <p
            className="text-xs tracking-[0.45em] uppercase mb-5 font-light"
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
            className="w-10 h-px mb-8"
            style={{
              background:
                "linear-gradient(to right, transparent, #C8935A, transparent)",
            }}
          />
          <p
            className="text-base font-light leading-loose mb-10"
            style={{ color: "#7A6050" }}
          >
            滋賀県甲賀市の山あいに佇む、泊まれるカフェ。
            <br className="hidden lg:block" />
            建物まるごと一棟貸し切りで、ゆったりとした時間を。
            <br className="hidden lg:block" />
            管理人が同じ建物に常駐しているので、
            <br className="hidden lg:block" />
            困ったことがあればいつでもお声がけください。
          </p>

          {/* Small photos */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/庭での焚き火.jpg"
                alt="庭での焚き火"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/宿から1分の棚田の風景.jpg"
                alt="宿から1分の棚田"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature photo cards */}
      <div className="grid md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="relative overflow-hidden group"
            style={{ height: "380px" }}
          >
            <Image
              src={`/${f.photo}`}
              alt={f.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(15,8,2,0.85) 0%, rgba(15,8,2,0.2) 60%, transparent 100%)",
              }}
            />
            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3
                className="text-base font-medium mb-2 tracking-wide"
                style={{ color: "#EDE0CE" }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "#A89080" }}
              >
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
