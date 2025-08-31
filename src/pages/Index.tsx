import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ThemeProvider } from '@/components/theme-provider';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Update page title and meta description
    document.title = 'Praharsh Sai Madabathula - Software Developer | AI & Full-Stack Engineer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Praharsh Sai Madabathula - Passionate Software Developer specializing in AI, Machine Learning, and Full-Stack Development. Currently working at Woken, building innovative solutions with Python, React, and cloud technologies.'
      );
    }

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Praharsh Sai Madabathula",
      "jobTitle": "Software Developer",
      "description": "AI & Full-Stack Engineer",
      "url": window.location.href,
      "sameAs": [
        "https://linkedin.com/in/m-praharsh-sai",
        "https://github.com/praharshsai"
      ],
      "email": "praharshsai867@gmail.com",
      "telephone": "+91 8522805954",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressCountry": "India"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Malla Reddy Engineering College"
      },
      "knowsAbout": [
        "Python",
        "JavaScript", 
        "React.js",
        "Node.js",
        "Machine Learning",
        "Artificial Intelligence",
        "Full Stack Development",
        "Cloud Computing"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Certifications />
          <Education />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;