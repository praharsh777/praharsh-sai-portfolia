import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Price Tracker',
      description:
        'Advanced web scraping application that monitors 1,000+ products daily across Amazon and Flipkart, providing real-time price tracking with automated email alerts and customizable user preferences.',
      period: 'December 2023 - February 2024',
      technologies: [
        'Flask',
        'Web Scraping',
        'Python',
        'Email Automation',
        'Data Processing',
      ],
      features: [
        'Real-time price monitoring for 1,000+ products',
        'Automated email alerts for price drops',
        'User-specific tracking preferences',
        'Scheduled updates and notifications',
        'Multi-platform scraping (Amazon, Flipkart)',
      ],
      links: {
        demo: 'https://github.com/praharsh777/E-Commerce-Price-Tracker-Dynamic-Price-Monitoring',
        github:
          'https://github.com/praharsh777/E-Commerce-Price-Tracker-Dynamic-Price-Monitoring',
      },
      category: 'Full-Stack Development',
    },
    {
      title: 'AI Sign Language Translator',
      description:
        'Accessibility-focused AI system that translates hand gestures into real-time text and speech using computer vision and deep learning, making communication more inclusive for hearing and speech impaired individuals.',
      period: 'March 2024 - April 2024',
      technologies: [
        'TensorFlow',
        'OpenCV',
        'Python',
        'Deep Learning',
        'Computer Vision',
      ],
      features: [
        'Real-time gesture recognition',
        'Text and speech output translation',
        'High accuracy gesture detection',
        'Intuitive user interface design',
        'Accessibility-focused features',
      ],
      links: {
        demo: 'https://github.com/praharsh777/Ai-Based-Sign-Language-Translator',
        github: 'https://github.com/praharsh777/Ai-Based-Sign-Language-Translator',
      },
      category: 'AI & Machine Learning',
    },
    {
      title: 'AI-Powered Supply Chain Tool',
      description:
        'Comprehensive modular AI system for supply chain optimization featuring demand forecasting, inventory management, route planning, and risk analysis with interactive dashboards and real-time visualizations.',
      period: 'March 2025 - Present',
      technologies: [
        'Streamlit',
        'Flask',
        'React',
        'Python',
        'Machine Learning',
        'Data Visualization',
      ],
      features: [
        'Demand forecasting algorithms',
        'Inventory management optimization',
        'Route planning and logistics',
        'Risk analysis and scoring',
        'Interactive maps and dashboards',
        'Real-time data visualization',
      ],
      links: {
        demo: 'https://github.com/praharsh777/SupplyChainManagementProject',
        github: 'https://github.com/praharsh777/SupplyChainManagementProject',
      },
      category: 'AI & Business Intelligence',
      status: 'In Development',
    },
    {
  title: 'Insurance Cost Prediction',
  description:
    'A machine learning project that applies Multiple Linear Regression to predict insurance costs based on customer data such as age, income, region, device usage, insurance type, and claim history. Designed for quick experimentation and learning.',
  period: 'April 2024 - May 2024',
  technologies: [
    'Python',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Matplotlib'
  ],
  features: [
    'Multiple Linear Regression model',
    'Prediction of insurance costs',
    'Evaluated using R² score and Mean Squared Error',
    'Handles customer demographic and usage data',
    'Standalone Python script for easy experimentation',
    'Future scope: API conversion with FastAPI'
  ],
  links: {
    demo: 'https://github.com/praharsh777/Insurence-Cost-Prediction',
    github: 'https://github.com/praharsh777/Insurence-Cost-Prediction'
  },
  category: 'Machine Learning',
  status: 'Completed'
},
{
  title: "Rubik's Cube Solver",
  description:
    "An interactive web application that uses the Kociemba algorithm to solve the Rubik’s Cube. Built with a Flask backend and a modern HTML/CSS/JavaScript frontend, it provides an intuitive interface to input cube states and receive step-by-step solving instructions.",
  period: "May 2024 - July 2024",
  technologies: [
    "Python",
    "Flask",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Kociemba Algorithm"
  ],
  features: [
    "Responsive web interface with interactive cube input",
    "Click-to-paint system for cube state entry",
    "Real-time cube validation and feedback",
    "Optimal solving using the Kociemba two-phase algorithm",
    "Step-by-step navigation through solution moves",
    "Random cube scramble generator",
    "RESTful API for solving, validation, and scrambling"
  ],
  links: {
    demo: "https://github.com/praharsh777/RubixCubeSolver",
    github: "https://github.com/praharsh777/RubixCubeSolver"
  },
  category: "Web Development",
  status: "Completed"
},
{
  title: "Super Mario Game",
  description:
    "A retro-style 2D platformer game built with Python and Pygame. Features Mario-inspired mechanics including running, jumping, fireball attacks, and enemies like dragons and cacti. Demonstrates strong skills in game loops, collision detection, and animation in Python.",
  period: "March 2024 - April 2024",
  technologies: ["Python", "Pygame", "Pixel Art Sprites"],
  features: [
    "Player-controlled Mario character with jumping and running mechanics",
    "Brick-breaking and fireball attack system",
    "Enemies including dragons and cacti with hazards",
    "Retro-style pixel art visuals and sprites",
    "Game-ending screen and restart logic"
  ],
  links: {
    demo: "https://github.com/praharsh777/SuperMarioGame",
    github: "https://github.com/praharsh777/SuperMarioGame"
  },
  category: "Game Development",
  status: "Completed"
},
{
  title: "Software Defect Prediction System",
  description:
    "A Django-based web application that predicts software defects using an ensemble of machine learning models (Random Forest, Gradient Boosting, and XGBoost). Features a modern Bootstrap UI, REST APIs, real-time training, and comprehensive model evaluation dashboards.",
  period: "July 2024 - August 2024",
  technologies: [
    "Python",
    "Django",
    "Django REST Framework",
    "Bootstrap",
    "JavaScript",
    "Chart.js",
    "Scikit-learn",
    "XGBoost",
    "Pandas",
    "NumPy",
    "Docker",
    "PostgreSQL"
  ],
  features: [
    "Web interface with Bootstrap 5 and Chart.js visualizations",
    "Ensemble ML pipeline combining Random Forest, Gradient Boosting, and XGBoost",
    "Background model training with progress tracking",
    "RESTful APIs for prediction, training, and evaluation",
    "Data management with Django models and admin interface",
    "Comprehensive evaluation metrics including AUC-ROC, precision, recall, and F1-score",
    "Dockerized deployment with Gunicorn for production"
  ],
  links: {
    demo: "https://github.com/praharsh777/django-defect-prediction",
    github: "https://github.com/praharsh777/django-defect-prediction"
  },
  category: "Machine Learning",
  status: "Completed"
},
{
  title: "SmartQueryBot",
  description:
    "An intelligent chatbot built with Flask that can chat naturally, read and answer from uploaded files, and fall back to web search when needed. Combines document parsing, search, and conversational AI in a single simple web app.",
  period: "May 2024 - June 2024",
  technologies: [
    "Python",
    "Flask",
    "HTML",
    "Jinja",
    "Requests",
    "PyPDF2",
    "BeautifulSoup",
    "SerpAPI"
  ],
  features: [
    "Chat like a traditional bot with a minimal web UI",
    "Upload files (.txt, .pdf, .csv) and answer questions based on their content",
    "Fallback to web search when the answer isn’t found locally",
    "Clean Flask + HTML frontend with Jinja templating",
    "Extendable to integrate NLP or LLMs (like GPT) for deeper answers",
    "Support for multiple file formats with future improvements planned"
  ],
  links: {
    demo: "https://github.com/praharsh777/SmartQueryBot",
    github: "https://github.com/praharsh777/SmartQueryBot"
  },
  category: "Full Stack AI",
  status: "Completed"
},
{
  title: "Social Media Sentiment Analysis and Trend Prediction System",
  description:
    "A full-stack system leveraging Meta AI tools to analyze social media posts for sentiment, detect emerging trends, and predict future patterns. Showcases expertise in NLP, machine learning, and data visualization with Dockerized deployment.",
  period: "March 2024 - April 2024",
  technologies: [
    "Python",
    "Meta AI Tools",
    "NLP",
    "Machine Learning",
    "Data Visualization",
    "Node.js",
    "Docker",
    "Docker Compose",
    "Jupyter Notebook"
  ],
  features: [
    "Performs sentiment analysis on social media posts using Meta AI",
    "Detects emerging social trends across platforms",
    "Predicts future trends with trained ML models",
    "Interactive data visualization of insights",
    "Dockerized deployment for reproducibility",
    "Full-stack workflow: backend API + frontend UI"
  ],
  links: {
    demo: "https://github.com/yourusername/social-media-sentiment-trend",
    github: "https://github.com/yourusername/social-media-sentiment-trend"
  },
  category: "Machine Learning",
  status: "Completed"
},
{
  title: "Birthday Surprise Website 🎂",
  description:
    "A creative and heartfelt web experience built to celebrate a special occasion. Features a live countdown timer, personalized birthday messages, smooth Framer Motion animations, and a delightful design with icons and heartfelt UI elements.",
  period: "Personal Project (2024)",
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide Icons"
  ],
  features: [
    "Live countdown timer for the big day",
    "Personalized birthday messages",
    "Framer Motion-powered smooth animations",
    "Cute icons and thoughtful design for an emotional impact",
    "Lightweight and responsive web app"
  ],
  links: {
    demo: "https://github.com/Anuj579/birthday-site",
    github: "https://github.com/Anuj579/birthday-site"
  },
  category: "Frontend / UI Showcase",
  status: "Completed"
},
{
  title: "📐 Math Routing Agent (RAG-Style FastAPI Project)",
  description:
    "An intelligent FastAPI-based math question-answering system that combines semantic search with Wikipedia fallback, inspired by Retrieval-Augmented Generation (RAG). It ensures accurate responses by routing queries between a FAISS-powered knowledge base and external sources.",
  period: "Generative AI Internship Project (2025)",
  technologies: [
    "FastAPI",
    "FAISS",
    "LangChain",
    "HuggingFace Transformers",
    "Pydantic"
  ],
  features: [
    "FAISS-powered vector similarity search over predefined Q&A dataset",
    "Smart routing logic: knowledge base match vs. Wikipedia fallback",
    "FastAPI endpoints with interactive Swagger Docs",
    "Wikipedia integration using LangChain tools",
    "Optional benchmarking and feedback logging system"
  ],
  links: {
    demo: "https://github.com/praharsh777/math-agent",
    github: "https://github.com/praharsh777/math-agent"
  },
  category: "AI / Backend System",
  status: "Completed"
},
{
  title: "🛍️ CoBuy - Smart Social Subscription Sharing",
  description:
    "A social-first web application that connects users with similar interests across geographies to co-purchase subscriptions and services securely and cost-effectively. Built to make digital sharing smarter, social, and more affordable.",
  period: "Major Project (2025)",
  technologies: [
    "Python",
    "Flask",
    "HTML",
    "Tailwind CSS",
    "SQLite"
  ],
  features: [
    "Match users with shared interests across geographies",
    "Enable group subscription purchases (Netflix, Spotify, etc.)",
    "User-friendly Tailwind-powered responsive interface",
    "Future-ready roadmap: authentication, payments, in-app messaging",
    "Deployed on Render / Heroku with lightweight Flask backend"
  ],
  links: {
    demo: "https://github.com/yourusername/cobuy",
    github: "https://github.com/yourusername/cobuy"
  },
  category: "Full Stack / Web Application",
  status: "In Progress"
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
            <h2 className="heading-xl text-gradient-primary mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions that combine cutting-edge
              technology with real-world impact.
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
                <div
                  className={`${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  } slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                >
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted-dark rounded-2xl border border-border overflow-hidden hover-lift">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-8">
                          <div
                            className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(
                              project.category
                            )} rounded-2xl mx-auto mb-4 flex items-center justify-center`}
                          >
                            <ExternalLink className="w-10 h-10 text-white" />
                          </div>
                          <div className="text-lg font-semibold mb-2">
                            {project.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Click to view project
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button
                          className="btn-hero"
                          onClick={() =>
                            window.open(project.links.demo, '_blank')
                          }
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          className="btn-outline bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary"
                          onClick={() =>
                            window.open(project.links.github, '_blank')
                          }
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  } slide-in-${index % 2 === 0 ? 'right' : 'left'}`}
                >
                  <div className="space-y-6">
                    {/* Category & Status */}
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(
                          project.category
                        )} text-white text-sm font-medium rounded-full`}
                      >
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
                            <span className="text-muted-foreground text-sm">
                              {feature}
                            </span>
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
                        onClick={() =>
                          window.open(project.links.demo, '_blank')
                        }
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        className="btn-outline"
                        onClick={() =>
                          window.open(project.links.github, '_blank')
                        }
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
              <span className="text-muted-foreground mr-2">
                Interested in collaborating?
              </span>
              <Button
                className="btn-hero ml-4"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
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
