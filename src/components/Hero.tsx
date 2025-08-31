import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="heading-display text-white mb-6">
            Hi, I'm{' '}
            <span className="text-gradient-primary bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
              Praharsh Sai Madabathula
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-white/90 font-medium mb-4">
            Software Developer | AI & Full-Stack Engineer
          </div>
          
          <p className="body-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative solutions with cutting-edge technologies. 
            Currently working on AI-powered applications and full-stack systems that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection('projects')}
              className="btn-hero text-lg px-8 py-4"
            >
              View Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              onClick={() => window.open('#', '_blank')}
              className="btn-outline text-white border-white hover:bg-white hover:text-primary-dark text-lg px-8 py-4"
            >
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://linkedin.com/in/m-praharsh-sai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-dark hover:bg-white/20 transition-all hover-lift"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://github.com/praharshsai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-dark hover:bg-white/20 transition-all hover-lift"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:praharshsai867@gmail.com"
              className="p-3 rounded-full glass-dark hover:bg-white/20 transition-all hover-lift"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;