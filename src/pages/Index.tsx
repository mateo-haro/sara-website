import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Legacy from "@/components/Legacy";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        {/* Wave divider */}
        <div className="wave-divider"></div>
        
        <section id="about">
          <About />
        </section>
        
        {/* Wave divider */}
        <div className="wave-divider transform rotate-180"></div>
        
        <section id="legacy">
          <Legacy />
        </section>
        
        {/* Wave divider */}
        <div className="wave-divider"></div>
        
        <section id="team">
          <Team />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
