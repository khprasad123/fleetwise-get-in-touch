import { MapPin, Clock, DollarSign, Smartphone, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: MapPin,
    title: "Real-time Fleet Tracking",
    description: "Know exactly where every vehicle is, eliminate 'Where are you?' calls, and provide customers with accurate pickup times."
  },
  {
    icon: Clock,
    title: "Smart Driver Scheduling",
    description: "Auto-assign trips based on driver location and availability. No more manual calling - just efficient, optimized scheduling."
  },
  {
    icon: DollarSign,
    title: "Profit & Loss Visibility",
    description: "See daily revenue, fuel costs, and driver performance at a glance. Make data-driven decisions instead of guessing."
  },
  {
    icon: Smartphone,
    title: "Driver Mobile App",
    description: "Drivers get trip notifications, can update status, and communicate with customers - no more missed calls or confusion."
  },
  {
    icon: Users,
    title: "Customer Communication",
    description: "Automated booking confirmations, pickup reminders, and trip updates keep customers happy and reduce complaints."
  },
  {
    icon: BarChart3,
    title: "Southeast Asia Focused",
    description: "Built specifically for the unique challenges of travel agencies in Singapore, Malaysia, Thailand, and Indonesia."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Here's How Fleetwise Solves Your Daily Headaches
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop fighting with WhatsApp groups and Excel sheets. Get professional tools that actually work for Southeast Asian travel agencies.
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