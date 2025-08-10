import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel-fleet.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-gradient-subtle">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Travel fleet management" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-travel-sky/10" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-brand/20 mb-8 shadow-soft">
          <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
            <MapPin className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-brand-gradient">GoFleetNow</span>
          <span className="text-sm font-medium text-muted-foreground">• Enterprise Fleet Management</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-brand-gradient leading-tight">
          Scale Your Fleet Operations Like an Enterprise
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional fleet management platform designed for growing travel businesses who demand enterprise-grade efficiency and control
        </p>
        
        {/* Powered by GoFleetNow badge */}
        <div className="inline-flex items-center gap-2 bg-brand/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <span className="text-sm font-medium text-brand">Powered by</span>
          <span className="text-sm font-bold text-brand">GoFleetNow Technology</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-brand hover:bg-brand/90 text-white shadow-brand text-lg px-8 py-6 rounded-xl transition-smooth hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToForm}
            className="border-brand text-brand hover:bg-brand hover:text-white text-lg px-8 py-6 rounded-xl transition-smooth"
          >
            See How It Works
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-muted-foreground">
          Trusted by 200+ enterprise travel companies across Singapore, Malaysia, Thailand & Indonesia
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-travel-sky/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-brand/20 rounded-full blur-lg animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;