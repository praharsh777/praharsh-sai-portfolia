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
      skills: ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'React.js', 'Node.js', 'Flask']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Deep Learning', 'Data Analysis']
    },
    {
      icon: Database,
      title: 'Data & Backend',
      skills: ['MySQL', 'SQLite', 'RESTful APIs', 'Web Scraping', 'System Design', 'Blockchain']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['Google Cloud Platform', 'Git & GitHub', 'Docker', 'CI/CD', 'Cloud Functions']
    },
    {
      icon: Palette,
      title: 'Tools & Visualization',
      skills: ['Power BI', 'Tableau', 'Matplotlib', 'Streamlit', 'Jupyter Notebook', 'VS Code']
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Agile Methodology', 'Leadership', 'Adaptability']
    }
  ];

  const expertiseAreas = [
    { name: 'Full-Stack Development', icon: Code, percentage: 90 },
    { name: 'AI & Machine Learning', icon: Brain, percentage: 88 },
    { name: 'Cloud Architecture', icon: Cloud, percentage: 85 },
    { name: 'Data Science', icon: Database, percentage: 92 }
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

          {/* Expertise Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="text-center fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="hsl(var(--muted))"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - area.percentage / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-primary">
                    {area.percentage}%
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{area.name}</h3>
              </div>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="card-elevated hover-lift p-8"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-primary mr-4">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="heading-md">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-muted/50 text-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all cursor-default border border-border/50 hover:border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center fade-in">
            <div className="inline-flex items-center px-6 py-4 bg-gradient-card rounded-2xl border border-border">
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