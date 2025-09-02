import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/m-praharsh-sai-77b1ab275/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/praharsh777',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:praharshsai867@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <button
                onClick={scrollToTop}
                className="text-2xl font-space-grotesk font-bold text-gradient-primary hover:scale-105 transition-transform mb-4 block"
              >
                Praharsh Sai Madabathula
              </button>
              <p className="text-white/80 leading-relaxed mb-4">
                Software Developer passionate about AI, full-stack development, 
                and creating solutions that make a positive impact.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all hover-lift"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Experience', id: 'experience' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-white/70 hover:text-white transition-colors link-underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3 text-white/80">
                <div>
                  <div className="font-medium text-white mb-1">Email</div>
                  <a 
                    href="mailto:praharshsai867@gmail.com"
                    className="hover:text-white transition-colors link-underline"
                  >
                    praharshsai867@gmail.com
                  </a>
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Phone</div>
                  <a 
                    href="tel:+918522805954"
                    className="hover:text-white transition-colors link-underline"
                  >
                    +91 8522805954
                  </a>
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Location</div>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/70 mb-4 md:mb-0">
                <p className="flex items-center">
                  © {currentYear} Praharsh Sai Madabathula. Made with 
                  <Heart className="w-4 h-4 mx-1 text-red-400" />
                  and lots of code.
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-white/70">
                <span>Always learning, always building</span>
                <button
                  onClick={scrollToTop}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover-lift"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;