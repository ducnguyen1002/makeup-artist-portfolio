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
  const marqueeVariants = {
    animate: {
      x: [0, -1035], // Adjust based on content width roughly (items * gap)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 30,
          ease: "linear" as const,
        },
      },
    },
  };

  const ALL_BRANDS = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="py-16 bg-linear-to-b from-pink-white to-white border-y border-pink-pale/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h4 className="text-center text-[10px] uppercase tracking-[0.6em] text-burgundy/50 font-medium">
          Sản phẩm tin dùng từ các thương hiệu cao cấp
        </h4>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          variants={marqueeVariants}
          animate="animate"
        >
          {ALL_BRANDS.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="text-2xl md:text-4xl font-serif text-burgundy/70 tracking-[0.3em] transition-all hover:text-burgundy cursor-default flex items-center"
            >
              {brand.name}
              <span className="ml-16 md:ml-32 w-1.5 h-1.5 rounded-full bg-burgundy/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
