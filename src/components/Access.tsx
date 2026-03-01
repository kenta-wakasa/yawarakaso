export default function Access() {
  return (
    <section id="access" className="py-28 px-6" style={{ backgroundColor: "#1A1008" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.45em] uppercase mb-4 font-light"
            style={{ color: "#7A5838" }}
          >
            Access
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-6 tracking-wide"
            style={{ color: "#DDD0BE" }}
          >
            アクセス
          </h2>
          <div
            className="w-10 h-px mx-auto"
            style={{ background: "linear-gradient(to right, transparent, #7A5838, transparent)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl overflow-hidden h-80 border" style={{ borderColor: "#2C1C10" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5012128447265!2d136.35041627644682!3d34.918964772842976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003e58e93997b61%3A0xfb7a6e171aaf9b5b!2z5rOK44G-44KM44KL44Kr44OV44Kn44KE44KP44KL44GL44Gd44GG!5e0!3m2!1sja!2sjp!4v1772351655648!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Access info */}
          <div className="space-y-8">
            {[
              {
                label: "住所",
                content: (
                  <p className="text-sm leading-loose font-light" style={{ color: "#8A7060" }}>
                    〒528-0204
                    <br />
                    滋賀県甲賀市土山町山女原119
                  </p>
                ),
              },
              {
                label: "営業時間",
                content: (
                  <div className="space-y-1 text-sm font-light" style={{ color: "#8A7060" }}>
                    <p>カフェ：11:00 〜 17:00</p>
                    <p>チェックイン：15:00 〜 22:00</p>
                    <p>チェックアウト：〜 10:00</p>
                  </div>
                ),
              },
              {
                label: "お問い合わせ",
                content: (
                  <p className="text-sm leading-loose font-light" style={{ color: "#8A7060" }}>
                    Mail:{" "}
                    <a
                      href="mailto:contact@detarame.net"
                      className="transition-opacity hover:opacity-60"
                      style={{ color: "#C8935A" }}
                    >
                      contact@detarame.net
                    </a>
                    <br />
                    Tel:{" "}
                    <a
                      href="tel:08038688117"
                      className="transition-opacity hover:opacity-60"
                      style={{ color: "#C8935A" }}
                    >
                      080-3868-8117
                    </a>
                  </p>
                ),
              },
            ].map(({ label, content }) => (
              <div key={label}>
                <h3
                  className="text-xs tracking-[0.4em] uppercase mb-3 font-light"
                  style={{ color: "#7A5838" }}
                >
                  {label}
                </h3>
                {content}
              </div>
            ))}

            <a
              href="https://maps.app.goo.gl/6evhiVSUUE1vae9S9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm rounded-full px-6 py-2.5 border font-light transition-opacity hover:opacity-70"
              style={{ borderColor: "#3C2415", color: "#C8935A" }}
            >
              Google Maps で開く
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
