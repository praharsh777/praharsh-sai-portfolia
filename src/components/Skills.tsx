import { 
  Code, 
  Database, 
  Brain, 
  Palette, 
  Cloud, 
  Users,
  ChevronRight
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & Development',
      color: 'from-primary to-accent',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'React.js', level: 92 },
        { name: 'Node.js', level: 88 },
        { name: 'Flask', level: 85 }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'from-secondary to-accent',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'OpenCV', level: 85 },
        { name: 'Pandas & NumPy', level: 92 },
        { name: 'Data Analysis', level: 90 },
        { name: 'Deep Learning', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Data & Backend',
      color: 'from-accent to-primary',
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'SQLite', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Web Scraping', level: 92 },
        { name: 'System Design', level: 80 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-primary to-secondary',
      skills: [
        { name: 'Google Cloud Platform', level: 85 },
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Cloud Functions', level: 80 },
        { name: 'Deployment', level: 85 }
      ]
    },
    {
      icon: Palette,
      title: 'Tools & Visualization',
      color: 'from-secondary to-primary',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Tableau', level: 80 },
        { name: 'Matplotlib', level: 90 },
        { name: 'Streamlit', level: 88 },
        { name: 'Jupyter Notebook', level: 95 },
        { name: 'VS Code', level: 98 }
      ]
    },
    {
      icon: Users,
      title: 'Soft Skills',
      color: 'from-accent to-secondary',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 88 },
        { name: 'Agile Methodology', level: 85 },
        { name: 'Leadership', level: 82 },
        { name: 'Adaptability', level: 90 }
      ]
    }
  ];

  const technologies = [
    'Python', 'JavaScript', 'React.js', 'Node.js', 'TensorFlow', 'OpenCV',
    'Flask', 'SQL', 'GCP', 'Docker', 'Git', 'Power BI', 'Pandas', 'NumPy'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-xl text-gradient-primary mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building innovative solutions across full-stack development, 
              AI/ML, and cloud technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="card-elevated hover-lift p-6"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="heading-md">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="fade-in">
            <h3 className="heading-lg text-center mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full font-medium text-sm hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all hover-lift cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-card rounded-2xl border border-border">
              <span className="text-muted-foreground mr-2">Always learning and exploring new technologies</span>
              <ChevronRight className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;