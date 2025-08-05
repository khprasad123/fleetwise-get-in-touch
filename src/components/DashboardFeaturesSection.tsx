import { Monitor, Smartphone, BarChart3, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DashboardFeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand/5 to-travel-sky/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real-time Control of Your Entire Operation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Track every driver, monitor all vehicles, and view live performance stats from one powerful dashboard
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="bg-white/90 backdrop-blur-sm shadow-brand border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Live Admin Dashboard</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    Real-time driver locations and status updates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-travel-sky rounded-full"></div>
                    Live revenue tracking and daily earnings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-success rounded-full"></div>
                    Fleet performance metrics and efficiency stats
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-warning rounded-full"></div>
                    Customer feedback and trip completion rates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-white/90 backdrop-blur-sm shadow-brand border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-travel-sky rounded-lg flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Driver Mobile App</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    GPS tracking with automatic check-ins
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-travel-sky rounded-full"></div>
                    Trip assignments and route navigation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-success rounded-full"></div>
                    Customer communication and status updates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-warning rounded-full"></div>
                    Earnings tracking and performance feedback
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Track driver efficiency, fuel consumption, and route optimization with detailed analytics
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-travel-sky to-brand rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fleet Monitoring</h3>
            <p className="text-muted-foreground text-sm">
              Monitor all vehicles in real-time with GPS tracking and automated status updates
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-success to-travel-forest rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Company Statistics</h3>
            <p className="text-muted-foreground text-sm">
              View comprehensive company stats: revenue trends, customer satisfaction, and growth metrics
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              "Finally, I Know What's Happening with My Fleet"
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No more calling drivers asking "Where are you?" or wondering if that trip was profitable. 
              See everything happening in your business in real-time, from driver performance to daily earnings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardFeaturesSection;