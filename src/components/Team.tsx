import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Project Lead & AI Researcher",
      image: "/placeholder-avatar-1.jpg",
      initials: "SC",
      description: "PhD in Machine Learning with expertise in environmental monitoring systems.",
      links: {
        email: "sarah.chen@sara-project.org",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Mobile Development Lead",
      image: "/placeholder-avatar-2.jpg",
      initials: "MR",
      description: "Senior mobile developer specializing in real-time computer vision applications.",
      links: {
        email: "marcus.rodriguez@sara-project.org",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Dr. Emma Thompson",
      role: "Environmental Scientist",
      image: "/placeholder-avatar-3.jpg",
      initials: "ET",
      description: "Marine biologist and environmental researcher with 15+ years in river ecosystem analysis.",
      links: {
        email: "emma.thompson@sara-project.org",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Alex Kim",
      role: "Hardware Engineer",
      image: "/placeholder-avatar-4.jpg",
      initials: "AK",
      description: "Hardware specialist focused on sensor integration and device optimization.",
      links: {
        email: "alex.kim@sara-project.org",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary-light text-primary mb-4 px-4 py-2 text-sm">
              Meet the Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-ocean mb-6">
              Experts Behind SARA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our interdisciplinary team combines expertise in artificial intelligence, environmental science, mobile development, and hardware engineering to create innovative solutions for river monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="team-card p-6 text-center group">
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary-light">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-primary-medium text-primary-dark text-xl font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-ocean mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={`mailto:${member.links.email}`}
                    className="bg-primary-light text-primary p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a 
                    href={member.links.linkedin}
                    className="bg-primary-light text-primary p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={member.links.github}
                    className="bg-primary-light text-primary p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;