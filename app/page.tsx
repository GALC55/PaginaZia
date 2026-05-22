import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <Hero />
      <Reveal>
        <Trust />
      </Reveal>
      <Reveal delay={60}>
        <Services />
      </Reveal>
      <Reveal delay={80}>
        <Cases />
      </Reveal>
      <Reveal delay={60}>
        <About />
      </Reveal>
      <Reveal delay={60}>
        <Testimonials />
      </Reveal>
      <Reveal delay={60}>
        <Booking />
      </Reveal>
      <Footer />
    </>
  );
}
