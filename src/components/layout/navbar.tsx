"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Trang chủ", href: "/" },
  { name: "Về tôi", href: "/about" },
  { name: "Dịch vụ", href: "/services" },
  { name: "Bộ sưu tập", href: "/portfolio" },
  { name: "Liên hệ", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 lg:px-12 lg:py-8",
        isScrolled
          ? "bg-pink-white/80 backdrop-blur-md py-4 lg:py-6 border-b border-pink-pale"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-50">
        <Link
          href="/"
          className="text-2xl lg:text-3xl font-serif text-burgundy tracking-widest relative group"
        >
          MINH ÁNH
          <span className="block text-[8px] tracking-[0.4em] uppercase font-sans text-center -mt-1 opacity-60">
            Makeup Artist
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-widest hover:text-burgundy transition-colors relative group font-sans font-medium"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-burgundy transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 border border-burgundy text-burgundy text-xs uppercase tracking-widest hover:bg-burgundy hover:text-white transition-all font-medium"
          >
            ĐẶT LỊCH
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-burgundy p-2 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-0 bg-pink-white z-40 lg:hidden flex flex-col items-center justify-center gap-10"
      >
        {NAV_ITEMS.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-serif text-burgundy uppercase tracking-widest hover:italic transition-all"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 px-10 py-4 bg-burgundy text-white text-sm uppercase tracking-[0.2em] font-medium rounded-full"
          >
            ĐẶT LỊCH NGAY
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
}
