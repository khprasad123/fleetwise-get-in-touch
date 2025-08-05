import { Building2, Zap, Shield } from "lucide-react";
import mobileImage from "@/assets/mobile-dashboard.jpg";

const TrustSection = () => {
  return (
    <section className="py-20 bg-brand-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Scales with Your Business Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you run a cozy local agency or a fast-growing travel network, 
              Fleetwise adapts to your needs and grows alongside your business.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">For Small Agencies</h3>
                  <p className="text-muted-foreground">Start with essential features and scale up as you grow</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-travel-sky rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">For Growing Networks</h3>
                  <p className="text-muted-foreground">Advanced features and multi-location support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-success rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Enterprise Ready</h3>
                  <p className="text-muted-foreground">Bank-grade security and 99.9% uptime guarantee</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={mobileImage} 
                alt="Mobile dashboard" 
                className="w-full rounded-2xl shadow-brand"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-brand/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;