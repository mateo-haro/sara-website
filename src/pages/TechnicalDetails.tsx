import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Brain, Camera, Cpu, Database, Wifi } from "lucide-react";

const TechnicalDetails = () => {
  const technicalSpecs = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Platform",
      description: "Android and iOS compatible with native camera API integration"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "TensorFlow Lite model optimized for mobile devices with on-device inference"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Image Processing",
      description: "Real-time video analysis at 30fps with object detection and classification"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Performance",
      description: "Low latency processing (<100ms) with minimal battery impact"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Collection",
      description: "Automated logging with GPS coordinates and timestamp metadata"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Connectivity",
      description: "Offline-first architecture with cloud synchronization capabilities"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
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
            <Card className="p-8 ocean-bg">
              <h2 className="text-3xl font-bold mb-6 text-ocean">System Architecture</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SARA employs a sophisticated edge computing architecture that enables real-time environmental analysis 
                directly on smartphones. The system leverages advanced computer vision algorithms and machine learning 
                models optimized for mobile hardware constraints.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Badge variant="secondary" className="p-3 justify-center">Edge Computing</Badge>
                <Badge variant="secondary" className="p-3 justify-center">Computer Vision</Badge>
                <Badge variant="secondary" className="p-3 justify-center">Deep Learning</Badge>
                <Badge variant="secondary" className="p-3 justify-center">Real-time Processing</Badge>
              </div>
            </Card>
          </section>

          {/* Technical Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-ocean text-center">Core Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className="p-6 hover:shadow-[var(--card-shadow)] transition-all duration-300">
                  <div className="text-primary mb-4">{spec.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-ocean">{spec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{spec.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* ML Model Details */}
          <section className="mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-ocean">Machine Learning Model</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Model Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom-trained convolutional neural network (CNN) based on MobileNetV3 architecture, 
                    optimized for trash detection and classification in aquatic environments. The model 
                    achieves 94% accuracy on our validation dataset.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Training Dataset</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Over 50,000 annotated images of river environments with various types of debris, 
                    captured under different lighting conditions and water quality scenarios.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Optimization Techniques</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Quantization-aware training, pruning, and knowledge distillation to reduce model 
                    size to 4.2MB while maintaining inference accuracy.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Data Pipeline */}
          <section>
            <Card className="p-8 ocean-bg">
              <h2 className="text-3xl font-bold mb-6 text-ocean">Data Processing Pipeline</h2>
              <ol className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <span className="text-muted-foreground">Camera captures video stream at native resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <span className="text-muted-foreground">Frames are preprocessed and normalized for model input</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <span className="text-muted-foreground">TensorFlow Lite model performs inference on-device</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                  <span className="text-muted-foreground">Detection results are classified and post-processed</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                  <span className="text-muted-foreground">Data is logged with GPS coordinates and environmental metadata</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">6</span>
                  <span className="text-muted-foreground">Results sync to cloud when connectivity is available</span>
                </li>
              </ol>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TechnicalDetails;
