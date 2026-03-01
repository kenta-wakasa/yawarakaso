"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "やわらかそうとは" },
  { href: "#gallery", label: "施設紹介" },
  { href: "#pricing", label: "料金" },
  { href: "#access", label: "アクセス" },
  { href: "#booking", label: "ご予約" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? { backgroundColor: "rgba(20, 12, 6, 0.92)", backdropFilter: "blur(12px)" }
          : {}
      }
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="transition-opacity hover:opacity-70">
          <Image src="/logo.svg" alt="やわらかそう" width={40} height={40} priority />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide font-light transition-opacity hover:opacity-60"
              style={{ color: "#8A7060" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="text-sm rounded-full px-5 py-2 font-light tracking-wide border transition-all hover:opacity-80"
            style={{ borderColor: "#5C3C20", color: "#C8935A" }}
          >
            ご予約
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 transition-opacity hover:opacity-60"
          style={{ color: "#8A7060" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <div className={`w-5 h-px bg-current mb-1.5 transition-all origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <div className={`w-5 h-px bg-current mb-1.5 transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-px bg-current transition-all origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "rgba(20,12,6,0.97)", borderColor: "#2C1C10" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-4 text-sm font-light border-b transition-opacity hover:opacity-60"
              style={{ color: "#8A7060", borderColor: "#1E1208" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 py-5">
            <a
              href="#booking"
              className="block text-center text-sm rounded-full px-5 py-2.5 font-light border"
              style={{ borderColor: "#5C3C20", color: "#C8935A" }}
              onClick={() => setIsOpen(false)}
            >
              ご予約はこちら
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
