import { Calendar, Users, MapPin, Award } from "lucide-react";

const Legacy = () => {
  const timelineEvents = [
    {
      year: "2020",
      title: "Project Inception",
      description: "Initial research began on smartphone-based environmental monitoring at the University.",
      icon: Calendar,
      side: "left"
    },
    {
      year: "2021",
      title: "Team Formation",
      description: "Interdisciplinary team assembled combining expertise in AI, environmental science, and mobile development.",
      icon: Users,
      side: "right"
    },
    {
      year: "2022",
      title: "Field Testing",
      description: "First prototypes tested in local river systems, gathering initial data and validating the concept.",
      icon: MapPin,
      side: "left"
    },
    {
      year: "2023",
      title: "Algorithm Development",
      description: "Advanced machine learning models developed for accurate trash detection and water quality assessment.",
      icon: Award,
      side: "right"
    },
    {
      year: "2024",
      title: "SARA Launch",
      description: "Official launch of the SARA platform, ready for widespread environmental monitoring applications.",
      icon: Award,
      side: "left"
    }
  ];

  return (
    <section className="py-20 bg-secondary wave-decoration">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean">
            Project Legacy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the journey that led to SARA's development, from initial concept to revolutionary environmental monitoring solution.
          </p>
        </div>

        <div className="river-timeline max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div key={index} className={`relative flex items-center mb-12 ${event.side === 'right' ? 'flex-row-reverse' : ''}`}>
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-secondary shadow-[var(--wave-shadow)]">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-5/12 ${event.side === 'right' ? 'text-right' : 'text-left'}`}>
                  <div className="bg-card p-6 rounded-xl team-card">
                    <div className="text-primary font-bold text-2xl mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold mb-3 text-ocean">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Legacy;