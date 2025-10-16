import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Brain, Camera, Cpu, Database, Wifi, FileText, Code } from "lucide-react";
import wavePattern from "@/assets/wave-pattern.jpg";
import deviceMockup from "@/assets/device-mockup.jpg";
import systemDiagram from "@/assets/pipeline.svg";
import fieldDeployment from "@/assets/250619_SARA_06.jpg";
import labTesting from "@/assets/SARA_system.PNG";

const TechnicalDetails = () => {
  const technicalSpecs = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Platform",
      description: "Android compatible with native camera API integration"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "TensorFlow Lite model optimized for mobile devices with on-device inference"
    },
    // {
    //   icon: <Camera className="h-8 w-8" />,
    //   title: "Image Processing",
    //   description: "Real-time video analysis at 30fps with object detection and classification"
    // },
    // {
    //   icon: <Cpu className="h-8 w-8" />,
    //   title: "Performance",
    //   description: "Low latency processing (<100ms) with minimal battery impact"
    // },
    // {
    //   icon: <Database className="h-8 w-8" />,
    //   title: "Data Collection",
    //   description: "Automated logging with GPS coordinates and timestamp metadata"
    // },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Connectivity",
      description: "Offline-first architecture with cloud synchronization capabilities"
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-ocean">
              Technical Details
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deep dive into the technology powering SARA's environmental monitoring capabilities
            </p>
          </div>

          {/* Architecture Overview */}
          <section className="mb-16">
            <Card className="p-8 bg-card/90 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-ocean">System Architecture</h2>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                SARA employs an edge computing architecture that enables real-time environmental analysis 
                directly on smartphones. The system leverages advanced computer vision algorithms and machine learning 
                models optimized for mobile hardware constraints.
              </p>
              <div className="flex justify-center mt-4">
                <img 
                src={systemDiagram} 
                alt="System architecture diagram" 
                className="max-w-full h-64 object-contain rounded-lg bg-white/80 p-2"
                />
              </div>
            </Card>
          </section>

          {/* Data Processing Pipeline */}
          <section className="mb-16">
            <Card className="p-8 bg-card/90 backdrop-blur-sm">    
              <h2 className="text-3xl font-bold mb-6 text-ocean">Data Processing Pipeline</h2>
                <ol className="space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                    <span className="text-muted-foreground">The Camera captures pictures at a rate adapted to the river flow. An object detection algorithm identifies relevant frames to process.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                    <span className="text-muted-foreground">Relevant frames are then given to our classification model which outputs bounding boxes and class labels.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                    <span className="text-muted-foreground">The classified elements of trash are then tracked across frames. This ensures that a single instance of trash is consistently identified and not counted multiple times.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                    <span className="text-muted-foreground">The data gathered is then sent to a cloud-based service for storing and further analysis.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                    <span className="text-muted-foreground">Finally, the results are made accessible through a user-friendly dashboard for monitoring and decision-making.</span>
                  </li>
                </ol>
            </Card>
          </section>

          {/* Technical Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-ocean text-center">Core Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className="p-6 hover:shadow-[var(--card-shadow)] transition-all duration-300">
                  <div className="text-accent mb-4">{spec.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-ocean">{spec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{spec.description}</p>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Badge className="p-3 justify-center bg-primary text-primary-foreground">Edge Computing</Badge>
          <Badge className="p-3 justify-center bg-primary text-primary-foreground">Computer Vision</Badge>
          <Badge className="p-3 justify-center bg-primary text-primary-foreground">Deep Learning</Badge>
          <Badge className="p-3 justify-center bg-primary text-primary-foreground">Real-time Processing</Badge>
          </div>

          {/* ML Model Details */}
          <section className="mb-16">
            <Card className="p-8 bg-card/90 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-ocean">Machine Learning Model</h2>
              <div className="space-y-2">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Model Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom-trained convolutional neural network (CNN) based on YOLO architecture, 
                    optimized for trash detection and classification in aquatic environments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Training Dataset</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our dataset includes over 2,000 annotated images of river environments with various types of debris, 
                    captured under different lighting conditions.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Visual Documentation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-ocean text-center">Visual Documentation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden bg-card/90 backdrop-blur-sm">
                <img 
                  src={fieldDeployment} 
                  alt="SARA device mockup showing the smartphone app interface" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-ocean">Field Deployment</h3>
                  <p className="text-muted-foreground">
                    SARA system in action during river monitoring operations
                  </p>
                </div>
              </Card>
              
              <Card className="overflow-hidden bg-card/90 backdrop-blur-sm">
                <div className="w-full aspect-square flex items-center justify-center bg-black overflow-hidden">
                  <img 
                    src={labTesting} 
                    alt="Example of SARA analyzing river conditions" 
                    className="w-full h-auto object-cover"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-ocean">Lab Testing</h3>
                  <p className="text-muted-foreground">
                    Lab assembly and testing of the SARA device components
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Resources Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-ocean text-center">Project Resources (Coming soon...)</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-8 text-center hover:shadow-[var(--card-shadow)] transition-all duration-300">
                <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-ocean">Bill of Materials</h3>
                <p className="text-muted-foreground mb-6">
                  Complete list of hardware components and specifications
                </p>
                <Button 
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View BOM
                  </a>
                </Button>
              </Card>

              <Card className="p-8 text-center hover:shadow-[var(--card-shadow)] transition-all duration-300">
                <Code className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-ocean">Source Code</h3>
                <p className="text-muted-foreground mb-6">
                  Access our open-source codebase and documentation
                </p>
                <Button 
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
              </Card>

              <Card className="p-8 text-center hover:shadow-[var(--card-shadow)] transition-all duration-300">
                <Database className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-ocean">Dataset</h3>
                <p className="text-muted-foreground mb-6">
                  Training data and annotated images for model development
                </p>
                <Button 
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Dataset
                  </a>
                </Button>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TechnicalDetails;
