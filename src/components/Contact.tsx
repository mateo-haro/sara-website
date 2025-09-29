import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";
import wavePattern from "@/assets/wave-pattern.jpg";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@sara-project.org",
      href: "mailto:contact@sara-project.org"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Environmental Research Center",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Twitter,
      name: "Twitter",
      href: "#",
      color: "hover:bg-blue-500"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "#",
      color: "hover:bg-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "#",
      color: "hover:bg-gray-800"
    }
  ];

  return (
    <section className="relative py-20 ocean-bg overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${wavePattern})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-accent-light text-accent-foreground mb-4 px-4 py-2 text-sm">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-foreground mb-6">
            Contact SARA Project
          </h2>
          <p className="text-xl text-ocean-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Interested in collaborating, learning more about our research, or implementing SARA technology? 
            We'd love to hear from you.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm p-6 text-center hover:bg-card transition-colors">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-ocean mb-2">
                  {method.title}
                </h3>
                <a 
                  href={method.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {method.value}
                </a>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-ocean-foreground mb-6">
              Follow Our Research
            </h3>
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-card/90 backdrop-blur-sm p-4 rounded-full ${social.color} hover:text-white transition-all duration-300 shadow-[var(--card-shadow)]`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Join Our Research Community
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-ocean-foreground/20">
            <p className="text-ocean-foreground/60 text-sm">
              © 2024 SARA Project. All rights reserved. | 
              <span className="ml-2">Smartphone Assisted River Analysis</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;