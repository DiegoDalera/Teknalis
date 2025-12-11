import Hero from "@/components/Hero";
import CalloutBanner from "@/components/CalloutBanner";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import FaqSection from "@/components/FaqSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ShortBanner from "@/components/ShortBanner";
import LatestNews from "@/components/LatestNews";
import GoogleMapSection from "@/components/GoogleMapSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CalloutBanner />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <FaqSection />
      <WhyChooseUsSection />
      <ShortBanner />
      <LatestNews />
      <GoogleMapSection />
      <TestimonialsSection />
    </>
  );
}
