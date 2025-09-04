import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  // Placeholder certificates - users can replace with actual certificate images
  const certificates = [
 {
  id: 1,
  title: 'CS50P: Python Programming',
  issuer: 'Harvard University',
  date: '2024',
  image: '/CS50P.png',
  description: 'Core Python concepts and programming fundamentals'
},
{
  id: 2,
  title: 'Machine Learning Specialization',
  issuer: 'Stanford & DeepLearning.AI',
  date: '2024',
  image: '/ML-Stanford.jpg',
  description: 'Supervised & Unsupervised Machine Learning'
},
{
  id: 3,
  title: 'Data Structures and Algorithms',
  issuer: 'IIT-NPTEL',
  date: '2024',
  image: '/dsa.jpg',
  description: 'Advanced DSA concepts using Python'
},
{
  id: 4,
  title: 'Database Management Systems',
  issuer: 'IIT-NPTEL',
  date: '2024',
  image: '/dbms.jpg',
  description: 'Database design, SQL, and management principles'
},
{
  id: 5,
  title: 'AI Project Certification',
  issuer: 'Shirdi Dwarakamayi 369 Innovations in Partnership RTP, NIRD&PR, Ministry of Rural Development, Government of India.',
  date: '2024',
  image: '/chary1.jpg',
  description: 'AI BASED SIGN LANGUAGE TRANSLATOR'
},
{
  id: 6,
  title: 'Microsoft Azure AI Fundamentals',
  issuer: 'Microsoft',
  date: '2025',
  image: '/azure.jpg',
  description: 'Azure AI fundamentals certification by Microsoft'
},
{
  id: 7,
  title: 'Alison Communication Certification',
  issuer: 'Alison',
  date: '2024',
  image: '/english.jpeg',
  description: 'Winning with communication certification'
},
{
  id: 8,
  title: 'AI Project Certification',
  issuer: 'Shirdi Dwarakamayi 369 Innovations in Partnership RTP, NIRD&PR, Ministry of Rural Development, Government of India.',
  date: '2024',
  image: '/chary2.jpg',
  description: 'AI BASED SOCIAL MEDIA TREND ANALYZER'
},
{
  id: 9,
  title: 'C Programming Workshop Certification',
  issuer: 'Skilltimate',
  date: '2024',
  image: '/C-Skilltimate.jpg',
  description: 'Completed a comprehensive workshop on C programming'
},
{
  id: 10,
  title: 'C Programming Language Certification',
  issuer: 'Tutorscampus',
  date: '2023',
  image: '/C-TC.jpg',
  description: 'Completed a comprehensive course on C programming'
},
{
  id: 11,
  title: 'Software Engineering Job Simulation Certification',
  issuer: 'Goldman Sachs & Forage',
  date: '2025',
  image: '/goldmansaches.jpg',
  description: 'Completed a job simulation on software engineering'
},
{
  id: 12,
  title: 'Hackathon Winning Certificate',
  issuer: 'Intercollegiate Hackathon',
  date: '2024',
  image: '/hackathon.jpg',
  description: 'Won first prize in intercollegiate data science hackathon'
},
{
  id: 13,
  title: 'Data Science & Analytics',
  issuer: 'HP Life & HP Foundation',
  date: '2024',
  image: '/hp.jpg',
  description: 'Completed a comprehensive course on Data Science & Analytics'
},
{
  id: 14,
  title: 'Internship Common Aptitude Test',
  issuer: 'ICAT',
  date: '2024',
  image: '/icat.png',
  description: 'Scored 90 percentile in ICAT among 1 lakh+ students'
},
{
  id: 15,
  title: 'Python Programming Certification',
  issuer: 'Skilltimate',
  date: '2023',
  image: '/python-skilltimate.jpg',
  description: 'Completed a comprehensive course on Python programming'
},
{
  id: 16,
  title: 'Vishesh Intercollegiate Event',
  issuer: 'Intercollegiate Event',
  date: '2024',
  image: '/visesh.jpg',
  description: 'Secured 2nd place in coding event at intercollegiate fest'
},
  {
  id: 17,
  title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
  issuer: 'Oracle University',
  date: '2025',
  image: '/oracle.jpg',
  description: 'Achieved Oracle Certified Professional credential specializing in Cloud Infrastructure and Generative AI.'
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
                    <span >
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
