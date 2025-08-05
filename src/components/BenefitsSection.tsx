import { MapPin, Clock, DollarSign, Smartphone, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: MapPin,
    title: "Real-time Trip Tracking",
    description: "Monitor every journey with GPS tracking, live updates, and route optimization for maximum efficiency."
  },
  {
    icon: Clock,
    title: "Easy Driver Scheduling",
    description: "Streamline driver assignments, manage availability, and automate scheduling with our intuitive system."
  },
  {
    icon: DollarSign,
    title: "Income & Expense Management",
    description: "Track revenue, expenses, and profitability with detailed financial reporting and analytics."
  },
  {
    icon: Smartphone,
    title: "Mobile Access for All",
    description: "Admin dashboard and driver mobile app ensure everyone stays connected and informed on the go."
  },
  {
    icon: Users,
    title: "Complete Team Management",
    description: "Manage drivers, staff, and operations from one centralized platform with role-based access."
  },
  {
    icon: BarChart3,
    title: "Smart Analytics & Reports",
    description: "Make data-driven decisions with comprehensive insights into fleet performance and business metrics."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything Your Travel Business Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fleetwise brings together all the tools you need to run a successful travel agency in one powerful platform
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