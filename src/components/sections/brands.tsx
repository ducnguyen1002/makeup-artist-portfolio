"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";

const BRANDS = [
  { name: "GUCCI", logo: "Gucci" },
  { name: "DIOR", logo: "Dior" },
  { name: "3CE", logo: "3CE" },
  { name: "MAC", logo: "MAC" },
  { name: "HOURGLASS", logo: "Hourglass" },
  { name: "NARS", logo: "Nars" },
  { name: "CHANEL", logo: "Chanel" },
];

export function Brands() {
  return (
    <section className="py-24 bg-pink-white/50 border-y border-pink-pale">
      <div className="max-w-7xl mx-auto px-6">
        <h4 className="text-center text-[10px] uppercase tracking-[0.5em] text-burgundy/60 mb-16 font-medium">
          Sản phẩm tin dùng từ các thương hiệu cao cấp
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="text-2xl md:text-3xl font-serif text-burgundy/80 tracking-[0.2em] grayscale hover:grayscale-0 transition-all cursor-default"
            >
              {brand.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
