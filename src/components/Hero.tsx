import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-river.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center wave-decoration overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Flowing gradient overlay */}
      <div className="absolute inset-0 flowing-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            SARA
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Smartphone Assisted River Analysis
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Revolutionary technology that transforms your smartphone into a powerful environmental monitoring device for river health assessment and trash detection.
          </p>
          
          {/* Video placeholder */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl aspect-video flex items-center justify-center border-2 border-white/30 shadow-[var(--wave-shadow)]">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full p-6">
                <Play className="h-8 w-8 mr-2" />
                Watch Demo Video
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8">
              Learn More
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 backdrop-blur-sm px-8">
              View Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;