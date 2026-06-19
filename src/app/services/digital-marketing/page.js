import MarketingHero from "../../../components/MarketingHero";
import MarketingServices from "../../../components/MarketingServices";
import MarketingFunnel from "../../../components/MarketingFunnel";
import MarketingPlatforms from "../../../components/MarketingPlatforms";
import MarketingBelief from "../../../components/MarketingBelief";
import ClientSlider from "../../../components/ClientSlider";
import FAQ from "../../../components/FAQ";
import MinimalCTA from "../../../components/MinimalCTA";
import "./digital-marketing.css";

export const metadata = {
  title: "Digital Marketing Services | Digitelixx",
  description: "Data-driven marketing campaigns, SEO, PPC, and CRO for measurable business growth.",
};

export default function DigitalMarketingPage() {
  return (
    <div className="digital-marketing-page">
      
      {/* 1. Hero (White) */}
      <MarketingHero />

      {/* 2. Core Pillars (Alt) */}
      <MarketingServices bg="var(--bg-alt)" />

      {/* 3. Beliefs (White) */}
      <MarketingBelief bg="var(--white)" />

      {/* 3.5 Clients Slider (Alt) */}
      <ClientSlider bgColor="var(--bg-alt)" paddingTop="80px" paddingBottom="80px" />

      {/* 4. The Funnel (White) */}
      <MarketingFunnel bg="var(--white)" />

      {/* 5. Tool Stack (Alt) */}
      <MarketingPlatforms bg="var(--bg-alt)" />

      {/* 6. FAQ (White) */}
      <FAQ bg="var(--white)" />

      {/* 7. Final CTA (Dark) */}
      <MinimalCTA bg="var(--teal-dark)" />

    </div>
  );
}
