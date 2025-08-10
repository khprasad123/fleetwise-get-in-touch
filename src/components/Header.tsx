import { Truck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center shadow-brand">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                GoFleetNow
              </h1>
              <span className="text-xs text-muted-foreground -mt-1">Fleet Management</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-foreground hover:text-brand transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('dashboard')}
              className="text-foreground hover:text-brand transition-colors font-medium"
            >
              Dashboard
            </button>
            <button 
              onClick={() => scrollToSection('why-gofleet')}
              className="text-foreground hover:text-brand transition-colors font-medium"
            >
              Why Us
            </button>
            <Button 
              onClick={scrollToForm}
              className="bg-brand hover:bg-brand/90 text-white shadow-brand px-6 rounded-lg transition-smooth hover:scale-105"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-brand transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left text-foreground hover:text-brand transition-colors font-medium py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('dashboard')}
                className="text-left text-foreground hover:text-brand transition-colors font-medium py-2"
              >
                Dashboard
              </button>
              <button 
                onClick={() => scrollToSection('why-gofleet')}
                className="text-left text-foreground hover:text-brand transition-colors font-medium py-2"
              >
                Why Us
              </button>
              <Button 
                onClick={scrollToForm}
                className="bg-brand hover:bg-brand/90 text-white shadow-brand w-full rounded-lg transition-smooth"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;