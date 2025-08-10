import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import BenefitsSection from "@/components/BenefitsSection";
import DashboardFeaturesSection from "@/components/DashboardFeaturesSection";
import TrustSection from "@/components/TrustSection";
import WhyGoFleetNowSection from "@/components/WhyGoFleetNowSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <BenefitsSection />
      <DashboardFeaturesSection />
      <TrustSection />
      <WhyGoFleetNowSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
