import { MapPin, Calendar, ExternalLink, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: 'Woken',
    position: 'Software Development Intern',
    location: 'New York | Remote',
    duration: 'November 2024 - March 2025',
    link: '#',
    achievements: [
      {
        title: 'Cloud-Native GPT Pipeline Enhancement',
        description: 'Collaborated directly with CEO to enhance cloud-native GPT data pipeline using Google Cloud tools, aligning with distributed systems best practices.',
        impact: 'Improved system reliability and scalability'
      },
      {
        title: 'Automated Data Processing Framework',
        description: 'Built and deployed automated data processing and email reporting framework with real-time capabilities.',
        impact: 'Reduced manual effort and latency by 25%'
      },
      {
        title: 'System Efficiency Optimization',
        description: 'Streamlined real-time data storage, retrieval, and processing workflows across the entire system.',
        impact: 'Improved end-to-end efficiency by over 20%'
      },
      {
        title: 'Scalable Cloud Functions Integration',
        description: 'Integrated scalable cloud functions for automated insights delivery, supporting business intelligence.',
        impact: 'Enhanced decision-making capabilities'
      },
      {
        title: 'Backend System Enhancements',
        description: 'Contributed to backend system improvements ensuring high availability and performance using cloud APIs.',
        impact: 'Increased system uptime and performance'
      }
    ]
  };

  const skills = [
    'Google Cloud Platform',
    'Python',
    'Data Pipelines',
    'System Design',
    'Cloud Functions',
    'RESTful APIs',
    'Automation',
    'Performance Optimization'
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-xl text-gradient-primary mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Building real-world solutions and collaborating with industry leaders to create impactful technology.
            </p>
          </div>

          {/* Experience Card */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent rounded-full hidden md:block" />
            
            <div className="slide-in-left">
              <div className="card-elevated p-8 ml-0 md:ml-20 hover-lift">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-4 h-4 bg-gradient-primary rounded-full mr-4 hidden md:block absolute -left-6" />
                      <h3 className="heading-lg">{experience.position}</h3>
                      <a 
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 p-1 hover:bg-primary/10 rounded-full transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </a>
                    </div>
                    <h4 className="text-xl font-semibold text-gradient-accent mb-2">
                      {experience.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-medium">{experience.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{experience.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-6">
                  {experience.achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="group border-l-2 border-primary/20 pl-6 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h5>
                        <ChevronRight className="w-5 h-5 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-muted-foreground mb-2 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-accent/10 to-primary/10 text-accent font-medium text-sm rounded-full">
                        Impact: {achievement.impact}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills Used */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h5 className="font-semibold mb-4">Technologies & Skills Applied</h5>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Context */}
          <div className="mt-12 text-center fade-in">
            <div className="inline-flex items-center px-6 py-4 bg-gradient-card rounded-2xl border border-border max-w-2xl">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Current Focus</div>
                <div className="font-semibold">
                  Building scalable cloud-native solutions and AI-powered data pipelines
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;