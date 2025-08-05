import { TrendingUp, Eye, DollarSign } from "lucide-react";

const WhyFleetwiseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Southeast Asian Agencies Choose Fleetwise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges of running a travel business in this region - from monsoon disruptions to competitive pricing pressures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-bounce">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Stop Losing Money Daily
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every manual booking, missed trip, or fuel overspend costs you profit. Automate operations, reduce waste, 
              and focus on what matters - growing your customer base and expanding routes.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-travel-sky to-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-bounce">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Beat the Competition
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              While competitors struggle with manual systems, you'll offer instant booking confirmations, 
              real-time updates, and professional service that wins customers and justifies premium pricing.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-success to-travel-forest rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-bounce">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Scale Across Southeast Asia
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Built for the region's unique challenges - multiple currencies, cross-border operations, 
              local regulations, and the diverse needs of tourist routes across ASEAN countries.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              "Finally, Software That Understands Our Business"
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built by people who understand Southeast Asian travel operations - from Singapore's urban tours 
              to Thailand's island hopping, Malaysia's city-to-city routes, and Indonesia's diverse transportation needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFleetwiseSection;