"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Sparkles, Heart, Crown, Camera } from "lucide-react";

const SERVICES = [
  {
    icon: <Heart size={32} />,
    title: "Trang điểm cô dâu",
    desc: "Tôn vinh vẻ đẹp rạng rỡ, sang trọng cho ngày trọng đại nhất cuộc đời bạn.",
    // price: "Từ 1.200.000 VNĐ",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Trang điểm sự kiện",
    desc: "Giúp bạn tỏa sáng và thu hút mọi ánh nhìn trong các buổi tiệc và sự kiện quan trọng.",
    // price: "Từ 500.000 VNĐ",
  },
  {
    icon: <Crown size={32} />,
    title: "Trang điểm kỷ yếu",
    desc: "Ghi lại những khoảnh khắc thanh xuân tươi đẹp với lớp nền mỏng nhẹ, trẻ trung.",
    // price: "Từ 300.000 VNĐ",
  },
  {
    icon: <Camera size={32} />,
    title: "Đào tạo cá nhân",
    desc: "Khóa học makeup cá nhân giúp bạn tự tin làm đẹp cho bản thân mỗi ngày.",
    // price: "Từ 2.500.000 VNĐ",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-linear-to-b from-white to-pink-white relative">
      <SectionTitle
        title="Dịch Vụ Của Tôi"
        subtitle="Sự Lựa Chọn Hoàn Hảo"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group p-10 border border-pink-pale rounded-[40px] hover:bg-pink-white transition-all duration-500 hover:shadow-2xl hover:shadow-pink-pale cursor-default"
          >
            <div className="text-burgundy mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-serif text-burgundy mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-burgundy/80 leading-relaxed mb-8">
              {service.desc}
            </p>
            {/* <div className="text-xs uppercase tracking-[0.2em] font-medium text-primary">
              {service?.price}
            </div> */}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto mt-12 text-center"
      >
        <p className="text-sm text-burgundy/60 italic">
          * Lưu ý: Giá dịch vụ có thể thay đổi tùy theo yêu cầu cụ thể. Vui lòng liên hệ trực tiếp để được tư vấn và báo giá chính xác nhất.
        </p>
      </motion.div>

      {/* Decorative text background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.02] pointer-events-none select-none -mb-12">
        <span className="text-[15rem] font-serif font-black tracking-tighter">
          MINH ÁNH BEAUTY MINH ÁNH BEAUTY MINH ÁNH BEAUTY
        </span>
      </div>
    </section>
  );
}
