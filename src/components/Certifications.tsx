import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  // Placeholder certificates - users can replace with actual certificate images
  const certificates = [
    {
      id: 1,
      title: 'CS50P: Python Programming',
      issuer: 'Harvard University',
      date: '2024',
      image: '/placeholder.svg', // User will replace with actual certificate image
      description: 'Core Python concepts and programming fundamentals',
      credentialId: 'CS50P-2024-001'
    },
    {
      id: 2,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford & DeepLearning.AI',
      date: '2024',
      image: '/placeholder.svg', // User will replace with actual certificate image
      description: 'Supervised & Unsupervised Machine Learning',
      credentialId: 'ML-SPEC-2024-002'
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms',
      issuer: 'IIT-NPTEL',
      date: '2024',
      image: '/placeholder.svg', // User will replace with actual certificate image
      description: 'Advanced DSA concepts using Python',
      credentialId: 'DSA-PY-2024-003'
    },
    {
      id: 4,
      title: 'Database Management Systems',
      issuer: 'IIT-NPTEL',
      date: '2024',
      image: '/placeholder.svg', // User will replace with actual certificate image
      description: 'Database design, SQL, and management principles',
      credentialId: 'DBMS-2024-004'
    },
    {
      id: 5,
      title: 'AI Project Certification',
      issuer: 'Shirdi Dwarakamayi 369 Innovations',
      date: '2024',
      image: '/placeholder.svg', // User will replace with actual certificate image
      description: 'AI-based projects certification',
      credentialId: 'AI-PROJ-2024-005'
    },
    {
      id: 6,
      title: 'Google Cloud Platform',
      issuer: 'Google',
      date: '2024',
      image: '/placeholder.svg', // User will replace with actual certificate image
      description: 'Cloud computing and services',
      credentialId: 'GCP-2024-006'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-xl text-gradient-primary mb-4">Professional Certifications</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning through industry-recognized certifications from top institutions and technology companies.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={cert.id}
                className="group card-elevated hover-lift overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-white/90 dark:bg-black/90 rounded-full shadow-lg">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="text-accent font-semibold text-sm">
                      {cert.issuer}
                    </div>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground font-mono">
                      ID: {cert.credentialId}
                    </span>
                    <div className="px-2 py-1 bg-gradient-primary rounded-full">
                      <span className="text-xs text-white font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in">
            <div className="inline-flex items-center px-6 py-4 bg-gradient-card rounded-2xl border border-border">
              <Award className="w-5 h-5 text-primary mr-3" />
              <span className="text-muted-foreground">
                10+ Professional certifications from top institutions and companies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;