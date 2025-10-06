import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase, Clock, MapPin } from "lucide-react";
import wavePattern from "@/assets/wave-pattern.jpg";

const Join = () => {
  // Open positions array - can be empty
  const openPositions = [
    {
      title: "Marketing and Communications Specialist",
      type: "Part-time",
      location: "Hybrid",
      description: "Manage our marketing strategies and communications to enhance our outreach and impact. Manage social media and website content. Coordinate parntnerships and collaborations."
    },
    {
      title: "Mobile App Developer",
      type: "Part-time",
      location: "Hybrid",
      description: "Build a mobile application for the SARA device. Retrieve the data from our device and develop a user-friendly interface that displays real-time river health information."
    },
  ];

  const contactEmail = "maharo@student.ethz.ch";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${wavePattern})` }}
      />
      
      <Navigation />
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="bg-accent-light text-accent-foreground mb-4 px-4 py-2 text-sm">
              Join Our Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-ocean">
              Build the Future with SARA
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our mission for better river health assessment. We're looking for passionate individuals to help us innovate.
            </p>
          </div>

          {/* Open Positions Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-ocean text-center">Open Positions</h2>
            
            {openPositions.length > 0 ? (
              <div className="grid gap-6 max-w-4xl mx-auto">
                {openPositions.map((position, index) => (
                  <Card key={index} className="hover:shadow-[var(--card-shadow)] transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {position.type}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {position.location}
                            </Badge>
                          </div>
                        </div>
                        <Briefcase className="h-8 w-8 text-accent flex-shrink-0" />
                      </div>
                      <CardDescription className="text-base">
                        {position.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="max-w-2xl mx-auto p-8 text-center">
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ocean">No Open Positions Currently</h3>
                <p className="text-muted-foreground">
                  We don't have any open positions at the moment, but we're always interested in connecting with talented individuals. 
                  Feel free to reach out!
                </p>
              </Card>
            )}
          </section>

          {/* Contact Section */}
          <section>
            <Card className="max-w-2xl mx-auto p-8 bg-card/90 backdrop-blur-sm text-center">
              <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-ocean">Ready to Apply?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Send your resume and a brief introduction. We'd love to hear from you!
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground"
                asChild
              >
                <a href={`mailto:${contactEmail}`}>
                  Email Us at {contactEmail}
                </a>
              </Button>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Join;
