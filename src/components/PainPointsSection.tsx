import { AlertTriangle, Clock, Calculator, MessageSquareX, FileX, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  {
    icon: MessageSquareX,
    title: "WhatsApp Chaos",
    description: "Drivers, customers, and office staff scattered across multiple WhatsApp groups. Important messages get lost, and you're constantly switching between chats."
  },
  {
    icon: FileX,
    title: "Excel Sheet Nightmares", 
    description: "Tracking trips, expenses, and driver schedules in spreadsheets that crash, get corrupted, or show outdated information."
  },
  {
    icon: Clock,
    title: "Manual Scheduling Stress",
    description: "Spending hours each day calling drivers, checking availability, and manually assigning trips while customers wait for confirmation."
  },
  {
    icon: Calculator,
    title: "Financial Guesswork",
    description: "No clear view of daily revenue, fuel costs, or driver performance. You're running blind on your most important business metrics."
  },
  {
    icon: AlertTriangle,
    title: "Customer Complaints",
    description: "Passengers complaining about late pickups, wrong vehicles, or no communication while you have no real-time visibility into your fleet."
  },
  {
    icon: TrendingDown,
    title: "Missed Opportunities",
    description: "Losing bookings to competitors because you can't quickly confirm availability or provide professional booking confirmations."
  }
];

const PainPointsSection = () => {
  return (
    <section className="py-20 bg-destructive/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Sound Familiar? You're Not Alone.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every day, travel agencies across Southeast Asia lose money and customers due to these common operational challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {painPoints.map((painPoint, index) => (
            <Card key={index} className="border-destructive/20 bg-white hover:shadow-lg transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <painPoint.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {painPoint.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {painPoint.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            These Problems Cost You Money Every Single Day
          </h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            While you're stuck managing operations manually, your competitors are growing faster, 
            serving more customers, and increasing their profit margins.
          </p>
          <p className="text-brand font-semibold text-lg">
            It's time to stop fighting your systems and start growing your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;