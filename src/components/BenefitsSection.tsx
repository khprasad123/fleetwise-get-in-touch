import { MapPin, Clock, DollarSign, Smartphone, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: MapPin,
    title: "Live Driver Tracking & Monitoring",
    description: "Track every driver in real-time with our mobile app. See exact locations, route progress, and arrival times on your live dashboard."
  },
  {
    icon: Clock,
    title: "Smart Driver Scheduling",
    description: "Auto-assign trips based on driver location and availability. No more manual calling - just efficient, optimized scheduling."
  },
  {
    icon: DollarSign,
    title: "Real-time Performance Dashboard",
    description: "Monitor company revenue, fleet efficiency, and driver performance with live statistics and instant financial insights."
  },
  {
    icon: Smartphone,
    title: "Driver Mobile App Integration",
    description: "Drivers use our dedicated app to update status, navigate routes, and communicate - giving you complete visibility and control."
  },
  {
    icon: Users,
    title: "Fleet Statistics & Analytics",
    description: "View comprehensive fleet stats: fuel consumption, trip completion rates, customer ratings, and driver productivity metrics."
  },
  {
    icon: BarChart3,
    title: "Company Performance Insights",
    description: "Real-time dashboards showing daily revenue, operational efficiency, peak hours analysis, and growth opportunities across Southeast Asia."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Track Every Driver, Monitor Every Trip, See Every Dollar
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop fighting with WhatsApp groups and Excel sheets. Get professional tools with real-time tracking, 
            live dashboards, and instant performance insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-brand transition-smooth hover:scale-105 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;