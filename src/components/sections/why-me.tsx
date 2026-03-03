"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Heart, ShieldCheck, Clock, Users } from "lucide-react";

const FEATURES = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Tận tâm",
    description: "Luôn lắng nghe và chăm chút tỉ mỉ từng chi tiết để mang lại vẻ đẹp hoàn hảo nhất cho khách hàng."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Chuyên nghiệp",
    description: "Kỹ thuật trang điểm hiện đại, sử dụng mỹ phẩm cao cấp và quy trình làm việc chuẩn mực."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Đúng giờ",
    description: "Sự đúng giờ là tôn chỉ hàng đầu, giúp khách hàng hoàn toàn yên tâm trong những dịp quan trọng."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Đa nhiệm",
    description: "Có khả năng điều phối và đảm nhiệm số lượng khách hàng lớn mà vẫn đảm bảo chất lượng đồng đều."
  }
];

export function WhyMe() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Tại Sao Chọn Tôi?"
          subtitle="Giá trị cốt lõi"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-pink-white/40 border border-pink-pale/50 flex flex-col items-center text-center group hover:bg-pink-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="mb-6 text-burgundy p-4 rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-burgundy mb-4">{feature.title}</h3>
              <p className="text-sm text-burgundy/80 leading-relaxed font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
