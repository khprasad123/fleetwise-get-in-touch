import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import WhyFleetwiseSection from "@/components/WhyFleetwiseSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <BenefitsSection />
      <TrustSection />
      <WhyFleetwiseSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
