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

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Cases />
      <About />
      <Testimonials />
      <Booking />
      <Footer />
    </>
  );
}
