import Image from "next/image";

const navLinks = [
  { href: "#about", label: "やわらかそうとは" },
  { href: "#gallery", label: "施設紹介" },
  { href: "#pricing", label: "料金" },
  { href: "#access", label: "アクセス" },
  { href: "#booking", label: "ご予約" },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: "#0D0805" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          {/* Thin decorative line */}
          <div
            className="w-24 h-px mx-auto mb-10"
            style={{ background: "linear-gradient(to right, transparent, #3C2415, transparent)" }}
          />
          <Image src="/logo.svg" alt="やわらかそう" width={72} height={72} className="mx-auto opacity-60" />
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-light tracking-widest transition-opacity hover:opacity-60"
              style={{ color: "#4A3020" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-center mb-12">
          <a
            href="https://www.instagram.com/yawarakaso"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-light transition-opacity hover:opacity-60"
            style={{ borderColor: "#2C1C10", color: "#4A3020" }}
            aria-label="Instagram"
          >
            IG
          </a>
        </div>

        <div
          className="border-t pt-8 text-center"
          style={{ borderColor: "#1E1208" }}
        >
          <p className="text-xs font-light" style={{ color: "#3A2410" }}>
            © {new Date().getFullYear()} 泊まれるカフェ やわらかそう. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
