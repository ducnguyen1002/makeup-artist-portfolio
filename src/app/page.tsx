import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WhyMe } from "@/components/sections/why-me";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Brands } from "@/components/sections/brands";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { FloatingContact } from "@/components/ui/floating-contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyMe />
      <Brands />
      <Footer />
      <FloatingContact />
    </main>
  );
}
