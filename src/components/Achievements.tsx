import { Award, Trophy, Medal, Star, Target, BookOpen } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: 'AI Project Certification',
      description: 'Certified for AI-based projects at Shirdi Dwarakamayi 369 Innovations',
      mentor: 'Dr. Mandaji Narshimha Chary (World Patent Holder & Scientist)',
      category: 'Certification',
      year: '2024'
    },
    {
      icon: Trophy,
      title: 'Open Source Contributions',
      description: 'Resolved issues in Meta and other GitHub open-source projects',
      detail: 'Participated in Google Summer of Code (GSoC)',
      category: 'Open Source',
      year: '2024'
    },
    {
      icon: Medal,
      title: 'Data Science Hackathon Winner',
      description: 'Stock prediction using Linear Regression & Random Forest',
      detail: 'First place in competitive data science challenge',
      category: 'Competition',
      year: '2024'
    }
  ];

  const certifications = [
    {
      title: 'CS50P: Python Programming',
      issuer: 'Harvard University',
      description: 'Core Python concepts and programming fundamentals',
      year: '2024'
    },
    {
      title: 'Machine Learning (Supervised & Unsupervised)',
      issuer: 'Stanford & DeepLearning.AI',
      description: 'Comprehensive ML algorithms and applications',
      year: '2024'
    },
    {
      title: 'Data Structures and Algorithms using Python',
      issuer: 'IIT-NPTEL',
      description: 'Advanced DSA concepts and problem-solving',
      year: '2024'
    },
    {
      title: 'Database Management Systems',
      issuer: 'IIT-NPTEL',
      description: 'Database design, SQL, and management principles',
      year: '2024'
    }
  ];

  const stats = [
    {
      icon: Target,
      value: '300+',
      label: 'Problems Solved',
      platforms: 'LeetCode, GeeksforGeeks, HackerRank, CodeNinjas'
    },
    {
      icon: BookOpen,
      value: '15+',
      label: 'Certifications',
      platforms: 'Harvard, Stanford, IIT-NPTEL'
    },
    {
      icon: Star,
      value: '10+',
      label: 'Major Projects',
      platforms: 'AI, Web Development, Data Science'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Certification':
        return 'from-primary to-accent';
      case 'Open Source':
        return 'from-secondary to-primary';
      case 'Competition':
        return 'from-accent to-secondary';
      default:
        return 'from-primary to-accent';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-xl text-gradient-primary mb-4">Achievements & Recognition</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating milestones in learning, contributing to open source, and competing in technical challenges.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card-elevated text-center p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="heading-lg text-gradient-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-lg mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.platforms}</div>
              </div>
            ))}
          </div>

          {/* Major Achievements */}
          <div className="mb-16">
            <h3 className="heading-lg text-center mb-12 fade-in">Major Achievements</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="card-elevated p-6 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(achievement.category)}`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium px-2 py-1 bg-muted-dark rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white text-xs font-medium rounded-full mb-4`}>
                    {achievement.category}
                  </div>
                  
                  <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {achievement.mentor && (
                    <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-2 rounded-lg">
                      Mentor: {achievement.mentor}
                    </div>
                  )}
                  
                  {achievement.detail && (
                    <div className="text-xs text-accent font-medium bg-accent/10 px-3 py-2 rounded-lg">
                      {achievement.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Achievements;