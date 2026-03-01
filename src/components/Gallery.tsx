import Image from "next/image";

const photos = [
  // 雰囲気・外観
  { file: "やわらかく包む灯.jpg",         caption: "やわらかく包む灯",     span: "col-span-2 row-span-2" },
  { file: "カフェスペース.jpg",            caption: "カフェスペース",        span: "col-span-1 row-span-1" },
  { file: "庭での焚き火.jpg",              caption: "庭での焚き火",          span: "col-span-1 row-span-1" },
  // 過ごし方
  { file: "みんなでわいわい.jpg",          caption: "みんなでわいわい",      span: "col-span-1 row-span-1" },
  { file: "乾杯.jpg",                      caption: "乾杯",                  span: "col-span-1 row-span-1" },
  { file: "宿から1分の棚田の風景.jpg",    caption: "宿から1分の棚田",       span: "col-span-1 row-span-1" },
  { file: "ソファーでゆっくり.jpg",        caption: "ソファーでゆっくり",    span: "col-span-2 row-span-1" },
  { file: "カウンターキッチン.jpg",        caption: "カウンターキッチン",    span: "col-span-1 row-span-1" },
  { file: "新しい出会い.jpg",              caption: "新しい出会い",          span: "col-span-1 row-span-1" },
  { file: "みんなで手作りご飯.jpeg",       caption: "みんなで手作りご飯",    span: "col-span-1 row-span-1" },
  { file: "カウンターでお仕事.jpg",        caption: "カウンターでお仕事",    span: "col-span-1 row-span-1" },
  // お部屋
  { file: "キングベッドのお部屋.jpg",      caption: "キングベッドのお部屋",  span: "col-span-1 row-span-1" },
  { file: "ダブルベッドのお部屋.jpg",      caption: "ダブルベッドのお部屋",  span: "col-span-2 row-span-1" },
  { file: "プロジェクターで映画鑑賞.jpg",  caption: "プロジェクターで映画",  span: "col-span-2 row-span-1" },
  { file: "お部屋に冷蔵庫.jpg",            caption: "お部屋に冷蔵庫",        span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6" style={{ backgroundColor: "#1A1008" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.45em] uppercase mb-4 font-light"
            style={{ color: "#7A5838" }}
          >
            Gallery
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-6 tracking-wide"
            style={{ color: "#DDD0BE" }}
          >
            施設紹介
          </h2>
          <div
            className="w-10 h-px mx-auto"
            style={{ background: "linear-gradient(to right, transparent, #7A5838, transparent)" }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.file}
              className={`relative rounded-xl overflow-hidden ${photo.span}`}
            >
              <Image
                src={`/${photo.file}`}
                alt={photo.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span
                className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full font-light"
                style={{
                  backgroundColor: "rgba(20,12,5,0.55)",
                  color: "#C8A878",
                  border: "1px solid rgba(100,60,20,0.3)",
                }}
              >
                {photo.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
