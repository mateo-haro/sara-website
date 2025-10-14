import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Brain, Waves, Shield } from "lucide-react";
import deviceImage from "@/assets/250619_SARA_13.jpg";

const About = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Smartphone Integration",
      description: "Leverages existing smartphone capabilities for environmental monitoring"
    },
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Machine learning and computer vision algorithms running locally for real-time analysis"
    },
    {
      icon: Waves,
      title: "River Health Monitoring",
      description: "Comprehensive assessment of water pollution and macro-trash detection"
    },
    {
      icon: Shield,
      title: "Environmental Protection",
      description: "A project meant to contribute to environmental efforts and pollution prevention"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent-light text-accent-foreground mb-4 px-4 py-2 text-sm">
              About the Project
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-ocean mb-6">
              Transforming River Monitoring
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SARA represents a breakthrough in environmental technology, developing an innovative device capable of monitoring trash and pollution in rivers using machine learning models and computer vision algorithms that operate directly on a smartphone.
            </p>
          </div>

          <Card className="team-card p-8 mb-12 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Project SARA represents the next evolution of our bridge-mounted camera system, designed to detect waste in rivers and measure pollution levels with precision. While existing data on river waste is often limited, inconsistent, and region-specific, SARA aims to change that by enabling large-scale, unified environmental monitoring.
              </p>
              <p className="mb-4">
                At the heart of the project is an innovative idea: using a smartphone as the core of the monitoring system. Modern smartphones are compact, affordable, and equipped with powerful cameras and processors—making them ideal tools for scalable environmental sensing.
              </p>
              <p className="mb-4 font-semibold text-ocean">
                SARA's development focuses on two main goals:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Creating a mobile app capable of detecting and quantifying river waste in real time.</li>
                <li>Designing durable hardware for long-term deployment at multiple river sites.</li>
              </ul>
              <p>
                Beyond automated monitoring, the mobile app also empowers field workers and NGOs—especially in developing regions—to collect valuable pollution data directly from their phones, contributing to a global understanding of plastic waste in our waterways.
              </p>
            </div>
          </Card>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="team-card p-8">
                <h3 className="text-2xl font-semibold text-ocean mb-4">
                  Revolutionary Approach
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our project combines cutting-edge artificial intelligence with accessible smartphone technology to create a powerful tool for environmental monitoring. By running machine learning models locally on mobile devices, we ensure real-time analysis while reducing dependency on network connectivity.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The SARA device enables researchers, environmental agencies, and communities to monitor river health, detect pollution sources, and track environmental changes with unprecedented ease.
                </p>
              </Card>
            </div>

            <div className="relative">
              <img 
                src={deviceImage} 
                alt="SARA device monitoring river water quality"
                className="rounded-2xl shadow-[var(--hero-shadow)] w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-full p-4 shadow-lg">
                <Brain className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <Card key={index} className="team-card p-6 text-center">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-ocean mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;