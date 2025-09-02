import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, InstagramIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
   await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ✅ Pass directly as string
);

    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  } catch (err) {
    console.error(err);
    toast({
      title: 'Oops!',
      description: 'Something went wrong. Please try again later.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'praharshsai867@gmail.com',
      href: 'mailto:praharshsai867@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8522805954',
      href: 'tel:+918522805954'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: 'https://maps.google.com/?q=Hyderabad,India'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/m-praharsh-sai-77b1ab275/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/praharsh777',
      color: 'hover:text-gray-800'
    },
{
  icon: InstagramIcon,
  label: 'Instagram',
  href: 'https://www.instagram.com/m_praharsh777/?next=%2F',
  color: 'hover:text-primary'
}

  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-xl text-gradient-primary mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities? 
              I'd love to hear from you. Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="slide-in-left">
              <div className="card-elevated p-8">
                <h3 className="heading-lg mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="w-full resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="btn-hero w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="slide-in-right">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="card-elevated p-8">
                  <h3 className="heading-lg mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center group hover-lift"
                      >
                        <div className="p-3 rounded-xl bg-gradient-primary mr-4 group-hover:scale-110 transition-transform">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {info.label}
                          </div>
                          <div className="font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="card-elevated p-8">
                  <h3 className="heading-lg mb-6">Connect Online</h3>
                  
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-xl border border-border hover:border-primary/20 transition-all hover-lift group ${social.color}`}
                        title={social.label}
                      >
                        <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Follow me on social media for the latest updates on my projects, 
                      insights into technology trends, and behind-the-scenes content.
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="card-elevated p-8">
                  <h3 className="heading-lg mb-4">Current Status</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse mr-3" />
                    <span className="font-medium text-accent">Available for opportunities</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    I'm currently open to internship opportunities, freelance projects, 
                    and collaborative ventures in AI, full-stack development, and data science.
                  </p>
                  
                  <div className="text-xs text-muted-foreground">
                    Response time: Usually within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16 fade-in">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white rounded-2xl hover-lift">
              <Mail className="w-5 h-5 mr-3" />
              <span className="font-medium">
                Ready to start a conversation? Drop me a line anytime!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;