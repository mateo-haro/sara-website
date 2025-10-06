import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, Users, Target } from "lucide-react";

const Legacy = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent-light text-accent-foreground mb-4 px-4 py-2 text-sm">
              Our Legacy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-ocean mb-6">
              Where We Stem From
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SARA began as part of a larger initiative dedicated to environmental protection and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="team-card p-8 text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <History className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-ocean mb-3">
                Our Origins
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We were originally a project within Autonomous River Cleanup{" "}
                <a
                  href="https://riverclean.ethz.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:underline"
                >
                  ARC
                </a>
                , a larger organization committed to the development of river conservation technologies.
              </p>
            </Card>

            <Card className="team-card p-8 text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-ocean mb-3">
                Branching Out
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Recognizing the potential of our mission, we made the decision to branch out as an independent project, allowing us to focus entirely on our vision.
              </p>
            </Card>

            <Card className="team-card p-8 text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-ocean mb-3">
                Full Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Today, SARA stands as a dedicated project, fully committed to developing innovative solutions for river and trash monitoring as well as environmental protection.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;