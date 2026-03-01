import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep warm brown background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 35%, #3C2415 0%, #1E1208 55%, #100A05 100%)",
        }}
      />

      {/* Background logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/logo.svg"
          alt=""
          width={300}
          height={300}
          className="opacity-[0.04]"
          aria-hidden="true"
        />
      </div>

      {/* Warm amber candlelight glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "#C8712A", opacity: 0.12 }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-2xl pointer-events-none"
        style={{ backgroundColor: "#E8A050", opacity: 0.07 }}
      />

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 40%, rgba(10,5,2,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p
          className="text-xs tracking-[0.55em] mb-10 uppercase font-light"
          style={{ color: "#A07848" }}
        >
          Cafe &amp; Guesthouse
        </p>

        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] mb-4"
          style={{ color: "#EDE0CE" }}
        >
          やわらかそう
        </h1>

        <div
          className="w-16 h-px mx-auto my-10"
          style={{ background: "linear-gradient(to right, transparent, #A07848, transparent)" }}
        />

        <p
          className="text-lg md:text-xl font-light mb-6 tracking-[0.3em]"
          style={{ color: "#C8A878" }}
        >
          泊まれるカフェ
        </p>
        <p
          className="text-sm font-light max-w-xs mx-auto mb-14 leading-loose"
          style={{ color: "#8A7060" }}
        >
          コーヒーの香りと、やさしい会話と。
          <br />
          ここに来れば、きっとやわらかくなれる。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="px-9 py-3 rounded-full text-sm tracking-wide font-light transition-all hover:opacity-80"
            style={{ backgroundColor: "#C8935A", color: "#FAF5EE" }}
          >
            ご予約はこちら
          </a>
          <a
            href="#about"
            className="px-9 py-3 rounded-full text-sm tracking-wide font-light border transition-all hover:opacity-70"
            style={{ borderColor: "#5C3C20", color: "#A07848" }}
          >
            詳しく見る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ color: "#5C3C20" }}
      >
        <span className="text-[9px] tracking-[0.4em]">SCROLL</span>
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, #5C3C20, transparent)" }}
        />
      </div>
    </section>
  );
}
