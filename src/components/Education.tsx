import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering - Data Science',
      institution: 'Malla Reddy Engineering College',
      location: 'Hyderabad, India',
      duration: 'November 2022 - August 2026',
      gpa: '8.90',
      status: 'Current',
      highlights: [
        'Specialization in Data Science and AI',
        'Relevant Coursework: Machine Learning, Deep Learning, Data Structures',
        'Active participation in technical clubs and hackathons',
        'Research projects in AI and Software Development'
      ]
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Jr College',
      location: 'Visakhapatnam, India',
      duration: 'June 2020 - August 2022',
      gpa: '8.68',
      status: 'Completed',
      highlights: [
        'Mathematics, Physics, Chemistry specialization',
        'Strong foundation in analytical thinking',
        'Participated in science olympiads and competitions',
        'Leadership roles in student activities'
      ]
    }
  ];

  const relevantCourses = [
    'Data Structures and Algorithms',
    'Machine Learning',
    'Deep Learning',
    'Database Management Systems',
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
    'Web Development',
    'Artificial Intelligence',
    'Statistics and Probability',
    'Linear Algebra',
    'Discrete Mathematics'
  ];

  const academicAchievements = [
    {
      title: 'High Academic Performance',
      description: 'Maintaining 8.90 GPA in B.Tech CSE-DS program',
      icon: Award
    },
    {
      title: 'Technical Project Leadership',
      description: 'Led multiple technical projects and research initiatives',
      icon: BookOpen
    },
    {
      title: 'Competitive Programming',
      description: 'Active participant in coding competitions and hackathons',
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-xl text-gradient-primary mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation in computer science and continuous learning through formal education and certifications.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent rounded-full hidden md:block" />
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-elevated p-8 ml-0 md:ml-20 hover-lift">
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-gradient-primary rounded-full absolute -left-6 top-8 hidden md:block" />
                    
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-accent/10 text-accent border border-accent/20' 
                            : 'bg-primary/10 text-primary border border-primary/20'
                        }`}
                      >
                        {edu.status}
                      </span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gradient-primary">
                          {edu.gpa}
                        </div>
                        <div className="text-xs text-muted-foreground">GPA</div>
                      </div>
                    </div>

                    {/* Institution Details */}
                    <h3 className="heading-lg mb-2">{edu.degree}</h3>
                    <h4 className="text-xl font-semibold text-gradient-accent mb-4">
                      {edu.institution}
                    </h4>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-6 text-muted-foreground">
                      <div className="flex items-center mb-2 md:mb-0">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h5 className="font-semibold mb-3">Key Highlights</h5>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Relevant Coursework */}
            <div className="slide-in-left">
              <div className="card-elevated p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-primary mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="heading-md">Relevant Coursework</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relevantCourses.map((course, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all cursor-default"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Achievements */}
            <div className="slide-in-right">
              <div className="card-elevated p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-accent mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="heading-md">Academic Achievements</h3>
                </div>
                
                <div className="space-y-6">
                  {academicAchievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="flex items-start group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 mr-4 flex-shrink-0">
                        <achievement.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in">
            <div className="inline-flex items-center px-6 py-4 bg-gradient-card rounded-2xl border border-border">
              <GraduationCap className="w-5 h-5 text-primary mr-3" />
              <span className="text-muted-foreground">
                Committed to lifelong learning and academic excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;