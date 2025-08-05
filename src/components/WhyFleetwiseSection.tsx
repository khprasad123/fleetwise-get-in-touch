import { TrendingUp, Eye, DollarSign } from "lucide-react";

const WhyFleetwiseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Fleetwise?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your travel business with the power of intelligent fleet management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-bounce">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Reduce Admin Stress
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Automate repetitive tasks, streamline operations, and free up your time to focus on growing your business and serving customers better.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-travel-sky to-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-bounce">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Improve Visibility
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Get real-time insights into your fleet performance, driver productivity, and customer satisfaction with comprehensive dashboards and reports.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-success to-travel-forest rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-bounce">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Boost Revenue
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Optimize routes, reduce fuel costs, improve customer experience, and identify new revenue opportunities to maximize your profitability.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join the Fleet Management Revolution
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't let outdated systems hold your travel business back. Fleetwise is designed specifically for the unique challenges of Singapore's travel industry, with features that matter most to local operators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFleetwiseSection;