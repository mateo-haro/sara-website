import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import mateoImg from "@/assets/team_members/mateo.jpg";
import leanderImg from "@/assets/team_members/leander.jpg";
import michaelImg from "@/assets/team_members/michael.jpg";
import pascalImg from "@/assets/team_members/pascal.jpg";
import ryanImg from "@/assets/team_members/ryan.jpg";
import andrasImg from "@/assets/team_members/andras.jpg";
import anthonyImg from "@/assets/team_members/Anthony.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Mateo Haro",
      role: "Project Lead",
      image: mateoImg,
      initials: "MH",
      description: "Master student in Robotics, systems and control at ETH Zurich with a passion for AI and environmental tech.",
      links: {
        email: "maharo@student.ethz.ch",
        linkedin: "https://www.linkedin.com/in/mateoharo/",
        github: "#"
      }
    },
    {
      name: "Leander Joseph",
      role: "Strategic Development and Integration",
      image: leanderImg,
      initials: "LJ",
      description: "Bachelor student in Mechanical Engineering at ETH Zurich, focused on sustainable tech and real-world applications.",
      links: {
        email: "ljosep@student.ethz.ch",
        linkedin: "https://www.linkedin.com/in/leander-joseph-146443316/",
        github: "#"
      }
    },
    {
      name: "Michael Rásonyi",
      role: "Mechanical Engineer",
      image: michaelImg,
      initials: "MR",
      description: "Bachelor student in Mechanical Engineering at ETH Zurich, prototyping and design specialist.",
      links: {
        email: "mrasonyi@student.ethz.ch",
        linkedin: "https://www.linkedin.com/in/michael-r%C3%A1sonyi-796451221/",
        github: "#"
      }
    },
    {
      name: "Pascal Schwarz",
      role: "Hardware Engineer",
      image: pascalImg,
      initials: "PS",
      description: "Bachelor student in Mechanical Engineering at ETH Zurich, hardware specialist focused on device optimization.",
      links: {
        email: "pschwar@student.ethz.ch",
        linkedin: "https://www.linkedin.com/in/pascal-schwarz-61443321b/",
        github: "#"
      }
    },
    {
      name: "Zhiang Chen",
      role: "Software Engineer",
      image: ryanImg,
      initials: "ZC",
      description: "Master student in Computer Science with expertise in mobile app development and cloud computing.",
      links: {
        email: "zhiachen@student.ethz.ch",
        linkedin: "https://www.linkedin.com/in/ryanzhiangchen/",
        github: "#"
      }
    },
    {
      name: "András Szücs",
      role: "Software Engineer",
      image: andrasImg,
      initials: "AS",
      description: "Master student in Computer Science with a focus on software development and machine learning.",
      links: {
        email: "aszuecs@student.ethz.ch",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Anthony Ho",
      role: "Software Engineer",
      image: anthonyImg,
      initials: "AH",
      description: "Master student in Robotics, Systems and Control with a focus on software development and computer vision.",
      links: {
        email: "anthho@student.ethz.ch",
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
              Our interdisciplinary team combines expertise in artificial intelligence, computer vision, mobile development, and hardware engineering to create innovative solutions for river monitoring.
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
                  {/* <a 
                    href={member.links.github}
                    className="bg-primary-light text-primary p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a> */}
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