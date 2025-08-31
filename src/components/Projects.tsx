import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Price Tracker',
      description: 'Advanced web scraping application that monitors 1,000+ products daily across Amazon and Flipkart, providing real-time price tracking with automated email alerts and customizable user preferences.',
      period: 'December 2023 - February 2024',
      technologies: ['Flask', 'Web Scraping', 'Python', 'Email Automation', 'Data Processing'],
      features: [
        'Real-time price monitoring for 1,000+ products',
        'Automated email alerts for price drops',
        'User-specific tracking preferences',
        'Scheduled updates and notifications',
        'Multi-platform scraping (Amazon, Flipkart)'
      ],
      links: {
        demo: '#',
        github: '#'
      },
      category: 'Full-Stack Development'
    },
    {
      title: 'AI Sign Language Translator',
      description: 'Accessibility-focused AI system that translates hand gestures into real-time text and speech using computer vision and deep learning, making communication more inclusive for hearing and speech impaired individuals.',
      period: 'March 2024 - April 2024',
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Deep Learning', 'Computer Vision'],
      features: [
        'Real-time gesture recognition',
        'Text and speech output translation',
        'High accuracy gesture detection',
        'Intuitive user interface design',
        'Accessibility-focused features'
      ],
      links: {
        demo: '#',
        github: '#'
      },
      category: 'AI & Machine Learning'
    },
    {
      title: 'AI-Powered Supply Chain Tool',
      description: 'Comprehensive modular AI system for supply chain optimization featuring demand forecasting, inventory management, route planning, and risk analysis with interactive dashboards and real-time visualizations.',
      period: 'March 2025 - Present',
      technologies: ['Streamlit', 'Flask', 'React', 'Python', 'Machine Learning', 'Data Visualization'],
      features: [
        'Demand forecasting algorithms',
        'Inventory management optimization',
        'Route planning and logistics',
        'Risk analysis and scoring',
        'Interactive maps and dashboards',
        'Real-time data visualization'
      ],
      links: {
        demo: '#',
        github: '#'
      },
      category: 'AI & Business Intelligence',
      status: 'In Development'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full-Stack Development':
        return 'from-primary to-accent';
      case 'AI & Machine Learning':
        return 'from-secondary to-primary';
      case 'AI & Business Intelligence':
        return 'from-accent to-secondary';
      default:
        return 'from-primary to-accent';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-xl text-gradient-primary mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions that combine cutting-edge technology with real-world impact.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image Placeholder */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted-dark rounded-2xl border border-border overflow-hidden hover-lift">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                            <ExternalLink className="w-10 h-10 text-white" />
                          </div>
                          <div className="text-lg font-semibold mb-2">{project.title}</div>
                          <div className="text-sm text-muted-foreground">Click to view project</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button 
                          className="btn-hero"
                          onClick={() => window.open(project.links.demo, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button 
                          className="btn-outline bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary"
                          onClick={() => window.open(project.links.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} slide-in-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="space-y-6">
                    {/* Category & Status */}
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-medium rounded-full`}>
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Title & Period */}
                    <div>
                      <h3 className="heading-lg mb-2">{project.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{project.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="body-md text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-muted text-muted-foreground border border-border rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <Button 
                        className="btn-hero"
                        onClick={() => window.open(project.links.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button 
                        className="btn-outline"
                        onClick={() => window.open(project.links.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 fade-in">
            <div className="inline-flex items-center px-6 py-4 bg-gradient-card rounded-2xl border border-border">
              <span className="text-muted-foreground mr-2">Interested in collaborating?</span>
              <Button 
                className="btn-hero ml-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;