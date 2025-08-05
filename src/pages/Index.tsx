import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import BenefitsSection from "@/components/BenefitsSection";
import DashboardFeaturesSection from "@/components/DashboardFeaturesSection";
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
      <DashboardFeaturesSection />
      <TrustSection />
      <WhyFleetwiseSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
