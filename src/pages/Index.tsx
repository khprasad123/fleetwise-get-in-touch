import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import WhyFleetwiseSection from "@/components/WhyFleetwiseSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TrustSection />
      <WhyFleetwiseSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
