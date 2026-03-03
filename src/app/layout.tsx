import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#581C28", // Burgundy shade
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Minh Ánh | Makeup Artist Chuyên Nghiệp",
    template: "%s | Minh Ánh Makeup"
  },
  description: "Dịch vụ trang điểm chuyên nghiệp tại Thanh Hoá cho cô dâu, sự kiện và kỷ yếu bởi Minh Ánh. Tôn vinh vẻ đẹp tự nhiên, giúp bạn tỏa sáng rạng rỡ nhất.",
  keywords: ["makeup artist", "trang điểm cô dâu", "trang điểm sự kiện", "trang điểm kỷ yếu", "Minh Ánh makeup", "thợ trang điểm Thanh Hoá", "makeup Thanh Hoá", "trang điểm chuyên nghiệp"],
  authors: [{ name: "Minh Ánh" }],
  creator: "Minh Ánh",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://ducnguyen1002.github.io/makeup-artist-portfolio/",
    siteName: "Minh Ánh Makeup Artist",
    title: "Minh Ánh | Makeup Artist Chuyên Nghiệp",
    description: "Tôn vinh vẻ đẹp tự nhiên của bạn. Dịch vụ trang điểm chuyên nghiệp cho cô dâu, sự kiện và kỷ yếu.",
    images: [
      {
        url: "/makeup-artist-portfolio/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Minh Ánh Makeup Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Ánh | Makeup Artist Chuyên Nghiệp",
    description: "Dịch vụ trang điểm chuyên nghiệp cho cô dâu và sự kiện.",
    images: ["/makeup-artist-portfolio/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
