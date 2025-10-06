import { Button } from "@/components/ui/button";
import { Waves, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Legacy", href: "#legacy" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-card/90 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary rounded-full p-2">
              <Waves className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-ocean">SARA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
              onClick={() => navigate('/join')}
            >
              Join
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
              onClick={() => navigate('/technical')}
            >
              Technical Details
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-ocean" />
            ) : (
              <Menu className="h-6 w-6 text-ocean" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground w-fit"
                onClick={() => {
                  navigate('/join');
                  setIsMobileMenuOpen(false);
                }}
              >
                Join
              </Button>
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground w-fit"
                onClick={() => {
                  navigate('/technical');
                  setIsMobileMenuOpen(false);
                }}
              >
                Technical Details
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;