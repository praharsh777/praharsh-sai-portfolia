import { Code2, Brain, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expertise in React, Node.js, Flask, and cloud-native solutions'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems with TensorFlow, OpenCV, and deep learning'
    },
    {
      icon: Users,
      title: 'Leadership & Collaboration',
      description: 'Direct collaboration with CEOs and cross-functional teams'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Creating solutions that enhance accessibility and business efficiency'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-xl text-gradient-primary mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="slide-in-left">
              <h3 className="heading-lg mb-6">
                Transforming Ideas into 
                <span className="text-gradient-accent ml-2">Intelligent Solutions</span>
              </h3>
              
              <div className="space-y-6 body-md text-muted-foreground">
                <p>
                  I'm a passionate Computer Science student and Software Developer currently pursuing B.Tech in CSE-DS 
                  at Malla Reddy Engineering College with an 8.90 GPA. My journey in technology is driven by a 
                  relentless curiosity to solve complex problems through innovative software solutions.
                </p>
                
                <p>
                  Currently working as a Software Development Intern at Woken in New York, where I collaborate directly 
                  with the CEO to enhance cloud-native GPT data pipelines and build automated systems that reduce 
                  manual effort by 25%. My experience spans from building AI-powered accessibility tools to optimizing 
                  supply chain systems.
                </p>
                
                <p>
                  What sets me apart is my ability to bridge the gap between cutting-edge AI technologies and 
                  practical business solutions. I've contributed to open-source projects, participated in Google 
                  Summer of Code, and consistently solve algorithmic challenges to sharpen my problem-solving skills.
                </p>
                
                <p>
                  Beyond coding, I'm passionate about creating technology that makes a positive impact—whether it's 
                  building sign language translators for accessibility or developing tools that streamline business operations.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="slide-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="card-elevated p-6 text-center hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="heading-lg text-gradient-primary mb-2">300+</div>
                <div className="text-muted-foreground">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="heading-lg text-gradient-primary mb-2">10+</div>
                <div className="text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="heading-lg text-gradient-primary mb-2">8.90</div>
                <div className="text-muted-foreground">Current GPA</div>
              </div>
              <div className="text-center">
                <div className="heading-lg text-gradient-primary mb-2">15+</div>
                <div className="text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;