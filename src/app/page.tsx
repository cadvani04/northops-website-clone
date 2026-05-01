import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import DifferentSection from "@/components/DifferentSection";
import Pricing from "@/components/Pricing";
import Timeline from "@/components/Timeline";
import Team from "@/components/Team";
import FriendsSection from "@/components/FriendsSection";
import Roles from "@/components/Roles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <DifferentSection />
      <Pricing />
      <Timeline />
      <Team />
      <FriendsSection />
      <Roles />
      <Contact />
      <Footer />
    </main>
  );
}