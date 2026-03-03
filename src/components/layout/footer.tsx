"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-pink-pale/30 py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Link
          href="/"
          className="text-4xl font-serif text-burgundy tracking-widest mb-12"
        >
          MINH ÁNH
        </Link>

        <div className="flex gap-12 mb-16">
          <Link href="#" className="p-3 rounded-full border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-white transition-all">
            <Instagram size={20} />
          </Link>
          <Link href="#" className="p-3 rounded-full border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-white transition-all">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="p-3 rounded-full border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-white transition-all">
            <Mail size={20} />
          </Link>
          <Link href="#" className="p-3 rounded-full border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-white transition-all">
            <Phone size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-burgundy/10 pt-16 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-burgundy mb-6">Liên hệ</h4>
            <p className="text-sm text-burgundy/80 leading-loose">
              Thành phố Thanh Hoá<br />
              Thanh Hoá, Việt Nam<br />
              hoangminhanh.makeup@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-burgundy mb-6">Giờ làm việc</h4>
            <p className="text-sm text-burgundy/80 leading-loose">
              Phục vụ khách hàng 24/7<br />
              Tất cả các ngày trong tuần
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-burgundy mb-6">Newsletter</h4>
            <div className="flex justify-center md:justify-end">
              <input
                type="text"
                placeholder="Email của bạn"
                className="bg-transparent border-b border-burgundy/20 py-2 px-4 text-sm focus:outline-none focus:border-burgundy w-48"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 text-[10px] uppercase tracking-[0.4em] text-burgundy/60">
          © 2026 Hoàng Minh Ánh Beauty Artistry. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
