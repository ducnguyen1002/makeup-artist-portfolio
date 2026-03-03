"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Facebook } from "lucide-react";
import Link from "next/link";

export function FloatingContact() {
  const phoneNumber = "0827811400";
  const facebookUrl = "https://facebook.com/hoangminhanh"; // Placeholder, update as needed

  return (
    <div className="fixed bottom-8 right-8 z-100 flex flex-col gap-4">
      {/* Facebook Button */}
      <motion.div
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center"
      >
        <span className="absolute right-full mr-4 px-3 py-1 bg-white text-burgundy text-[14px] rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-pink-pale">
          Messenger
        </span>
        <Link
          href={facebookUrl}
          target="_blank"
          className="w-14 h-14 bg-white border border-pink-pale text-burgundy rounded-full flex items-center justify-center shadow-xl hover:bg-pink-white transition-colors"
        >
          <Facebook size={24} />
        </Link>
      </motion.div>

      {/* Zalo Button */}
      <motion.div
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center"
      >
        <span className="absolute right-full mr-4 px-3 py-1 bg-white text-burgundy text-[14px] rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-pink-pale">
          Zalo: {phoneNumber}
        </span>
        <Link
          href={`https://zalo.me/${phoneNumber}`}
          target="_blank"
          className="w-14 h-14 bg-white border border-pink-pale text-burgundy rounded-full flex items-center justify-center shadow-xl hover:bg-pink-white transition-colors"
        >
          <MessageCircle size={24} />
        </Link>
      </motion.div>

      {/* Phone Button */}
      <motion.div
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center"
      >
        <span className="absolute right-full mr-4 px-3 py-1 bg-burgundy text-white text-[14px] rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Gọi: {phoneNumber}
        </span>
        <Link
          href={`tel:${phoneNumber}`}
          className="w-14 h-14 bg-burgundy text-white rounded-full flex items-center justify-center shadow-xl hover:bg-burgundy-hover transition-colors"
        >
          <Phone size={24} className="animate-pulse" />
        </Link>
      </motion.div>
    </div>
  );
}
