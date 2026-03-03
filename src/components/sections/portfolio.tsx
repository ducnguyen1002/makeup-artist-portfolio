"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "bride", label: "Cô dâu" },
  { id: "event", label: "Sự kiện" },
  { id: "grad", label: "Kỷ yếu" },
];

const PORTFOLIO_ITEMS = [
  { id: 1, title: "Lễ Cưới Cổ Điển", category: "bride", size: "tall", featured: true },
  { id: 2, title: "Nàng Thơ Ánh Kim", category: "event", size: "regular" },
  { id: 3, title: "Sắc Hồng Tự Nhiên", category: "grad", size: "regular" },
  { id: 4, title: "Phượng Hoàng Lửa", category: "event", size: "wide" },
  { id: 5, title: "Tiệc Tối Sang Trọng", category: "event", size: "regular" },
  { id: 6, title: "Minimalist Beauty", category: "grad", size: "tall" },
  { id: 7, title: "Nàng Thơ Ngày Cưới", category: "bride", size: "regular", featured: true },
];

export function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section id="portfolio" className="py-24 px-6 bg-linear-to-b from-white to-pink-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <SectionTitle
            title="Tuyệt Tác Của Tôi"
            subtitle="Bộ Sưu Tập"
            align="left"
            className="mb-0"
          />
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-medium text-burgundy/80 overflow-x-auto pb-4 lg:pb-0">
            {CATEGORIES.map((cat) => (
              <span
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "hover:text-primary cursor-pointer transition-all whitespace-nowrap relative pb-1",
                  filter === cat.id ? "text-primary italic font-bold" : "text-burgundy/70"
                )}
              >
                {cat.label}
                {filter === cat.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-px bg-primary"
                  />
                )}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "group relative overflow-hidden rounded-4xl bg-pink-pale cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700",
                  item.size === "tall" && "md:row-span-2",
                  item.size === "wide" && "lg:col-span-2",
                  item.featured && "ring-2 ring-burgundy ring-offset-4 ring-offset-pink-white"
                )}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(/makeup-artist-portfolio/images/${item.id === 1 || item.id === 7 ? 'bridal.png' : item.id === 2 ? 'about.png' : 'hero.png'})`
                  }}
                />

                {item.featured && (
                  <div className="absolute top-6 right-6 z-10 bg-burgundy text-white text-[8px] uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
                    Phổ biến nhất
                  </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-burgundy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/90 mb-2 font-medium">
                    {CATEGORIES.find(c => c.id === item.category)?.label}
                  </span>
                  <h3 className="text-2xl font-serif text-white uppercase tracking-wider">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {PORTFOLIO_ITEMS.length > 10 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 flex justify-center"
          >
            <button className="px-12 py-4 border cursor-pointer border-burgundy text-burgundy text-xs uppercase tracking-[0.4em] font-medium hover:bg-burgundy hover:text-white transition-all rounded-full">
              Xem thêm tất cả
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
