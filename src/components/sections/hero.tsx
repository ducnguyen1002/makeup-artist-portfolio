"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParallaxImage } from "@/components/ui/parallax-image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pink-white"
    >
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="/images/hero.png"
          alt="Aura Makeup Artist"
          containerClassName="w-full h-full"
          className="opacity-40"
          offset={100}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-pink-white/20 to-pink-white" />
      </div>

      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-sm sm:text-base uppercase tracking-[0.5em] text-primary mb-6 font-medium"
        >
          Trang Điểm Chuyên Nghiệp
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl sm:text-8xl md:text-[8rem] font-serif text-foreground leading-[0.9] mb-8"
        >
          Minh Ánh <br />
          <span className="italic pl-12 md:pl-24 text-primary">Beauty</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12"
        >
          <div className="w-px h-12 bg-burgundy hidden sm:block" />
          <p className="text-burgundy leading-relaxed tracking-wider max-w-xs text-sm uppercase font-light">
            Tôn vinh vẻ đẹp tự nhiên của bạn với sự tinh tế và chuyên nghiệp.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator (Mouse Icon) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[24px] h-[40px] border-2 border-burgundy/30 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[2px] h-[8px] bg-burgundy rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
