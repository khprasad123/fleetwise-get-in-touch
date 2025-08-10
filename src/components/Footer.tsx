import { MapPin, Mail, Phone, Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center shadow-brand">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-secondary">GoFleetNow</h3>
                <span className="text-xs text-background/60">Fleet Management Solutions</span>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-4">
              The all-in-one fleet management solution designed specifically for Singapore's travel industry.
            </p>
            <div className="flex items-center gap-2 text-background/60">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Singapore</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@myfluja.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Available upon request</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Why GoFleetNow?</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>• Singapore-focused solution</li>
              <li>• Travel industry expertise</li>
              <li>• Scales with your business</li>
              <li>• 24/7 local support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 GoFleetNow. All rights reserved. • Built for Singapore's travel industry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;