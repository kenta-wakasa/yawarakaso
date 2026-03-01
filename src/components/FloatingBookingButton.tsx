"use client";

import { useState, useEffect } from "react";

export default function FloatingBookingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#booking"
      className={`fixed bottom-6 right-6 z-50 rounded-full px-6 py-3 text-sm font-light tracking-wide shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: "#C8935A", color: "#FAF5EE" }}
    >
      ご予約
    </a>
  );
}
