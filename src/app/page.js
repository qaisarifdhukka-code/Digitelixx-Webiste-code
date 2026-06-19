import Hero from "@/components/Hero";
import ClientSlider from "@/components/ClientSlider";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CaseStudyHighlight from "@/components/CaseStudyHighlight";
import Platforms from "@/components/Platforms";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <ClientSlider bgColor="var(--white)" paddingBottom="80px" paddingTop="80px" />
      <CaseStudyHighlight />
      <Platforms />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
