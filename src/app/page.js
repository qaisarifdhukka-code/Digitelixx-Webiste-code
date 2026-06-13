import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CaseStudyHighlight from "@/components/CaseStudyHighlight";
import Platforms from "@/components/Platforms";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <WhyUs />
      <CaseStudyHighlight />
      <Platforms />
      <Testimonials />
      <FAQ />
      <Contact />

      <Footer />
    </>
  );
}
