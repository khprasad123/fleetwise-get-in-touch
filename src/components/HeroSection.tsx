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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="h-5 w-5 text-brand" />
          <span className="text-sm font-medium text-muted-foreground">Solving Fleet Challenges Across Southeast Asia</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-brand-gradient leading-tight">
          Stop Losing Money on Manual Fleet Operations
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Finally, a solution built for Southeast Asian travel agencies tired of juggling WhatsApp groups, Excel sheets, and missed opportunities
        </p>
        
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
          Trusted by 200+ travel agencies across Singapore, Malaysia, Thailand & Indonesia
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-travel-sky/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-brand/20 rounded-full blur-lg animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;