import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Building, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate the form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to send the email
      console.log("Form data to be sent to hpk9961@gmail.com:", formData);
      
      toast({
        title: "Thank you for your interest!",
        description: "We'll get in touch with you within 24 hours to discuss how Fleetwise can transform your travel business.",
      });

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at hpk9961@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-brand-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Stop Wasting Money on Manual Operations?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join 200+ Southeast Asian travel agencies who've already eliminated WhatsApp chaos, 
              Excel nightmares, and daily scheduling stress with Fleetwise.
            </p>
          </div>

          <Card className="shadow-brand border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground">
                Get Your Free Business Assessment
              </CardTitle>
              <p className="text-muted-foreground">
                Tell us about your current challenges and we'll show you exactly how much time and money Fleetwise can save you
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      <User className="inline h-4 w-4 mr-2" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">
                      <Building className="inline h-4 w-4 mr-2" />
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your travel agency name"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+65 9123 4567"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    <MessageSquare className="inline h-4 w-4 mr-2" />
                    Tell us about your business
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How many vehicles? What's your biggest daily headache? Are you tired of WhatsApp chaos and Excel sheets? Tell us about your current challenges..."
                    className="min-h-32 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-brand hover:bg-brand/90 text-white shadow-brand transition-smooth hover:scale-105"
                >
                  {isSubmitting ? "Sending..." : "Yes, Show Me How to Save Money & Time"}
                </Button>
              </form>

              <div className="mt-8 text-center text-sm text-muted-foreground">
                <p>
                  By submitting this form, you agree to receive communications from Fleetwise.
                  <br />
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;