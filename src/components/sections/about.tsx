"use client";

import { motion } from "framer-motion";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { SectionTitle } from "@/components/ui/section-title";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-48 px-6 bg-pink-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        {/* Left Side: Images with Parallax */}
        <div className="relative w-full md:w-1/2 mt-12 md:mt-0 flex gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-2/3 h-[400px] md:h-[600px] bg-pink-pale rounded-full overflow-hidden relative shadow-2xl shadow-pink-pale"
          >
            <ParallaxImage
              src="/images/about.png"
              alt="Makeup Artist Portrait"
              containerClassName="w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-1/3 h-[300px] md:h-[400px] bg-pink-pale rounded-3xl overflow-hidden self-end mb-12 shadow-xl shadow-pink-pale"
          >
            <ParallaxImage
              src="/images/bridal.png"
              alt="Bridal Makeup Look"
              containerClassName="w-full h-full"
              offset={30}
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <SectionTitle
            title="Sắc đẹp là sự tinh tế"
            subtitle="Về Hoàng Minh Ánh"
            align="left"
            className="mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-burgundy/90 leading-relaxed font-light">
              Với hơn 8 năm kinh nghiệm trong ngành làm đẹp chuyên nghiệp, chúng tôi tin rằng trang điểm không phải là che giấu mà là làm nổi bật những nét riêng biệt của mỗi người.
            </p>

            <p className="text-base text-burgundy/80 leading-relaxed max-w-lg">
              Tại Minh Ánh Beauty, mỗi lần chạm cọ đều là một sự trân trọng. Chúng tôi lắng nghe câu chuyện của bạn để tạo nên vẻ đẹp hoàn mỹ nhất cho những khoảnh khắc quan trọng nhất. Từ tiệc cưới lộng lẫy đến vẻ đẹp tự nhiên thường nhật, chúng tôi luôn cam kết mang lại sự hài lòng và tự tin tuyệt đối.
            </p>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-px bg-burgundy group-hover:w-20 transition-all duration-300" />
              <span className="text-xs uppercase tracking-[0.3em] text-burgundy font-medium">
                Khám phá phong cách
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor Element */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-pink-pale -z-10 opacity-30 pointer-events-none" />
    </section>
  );
}
