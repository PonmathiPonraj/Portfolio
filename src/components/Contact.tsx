import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'ponmathittl@gmail.com',
      href: 'mailto:ponmathittl@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9361620268',
      href: 'tel:+919361620268',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Sivakasi',
      href: null,
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/PonmathiPonraj',
      color: 'hover:text-purple-400'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ponmathi-ponraj-9332561b2',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/10 border border-secondary-500/30 rounded-full text-secondary-400 text-sm font-medium mb-6">
            <MessageCircle size={16} />
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let's Create
            <span className="block bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can collaborate to create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl rounded-2xl"></div>
            <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="text-primary-400" size={24} />
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Let's Build Something Great Together!
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about creating impactful digital solutions and sharing technical knowledge. I'm currently open to opportunities as a Developer, Tester, or Technical Trainer. Whether it's a project, a job opportunity, or a collaboration, feel free to reach out — I'd be happy to connect!
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary-400">⚡</span> Typically responds within 24 hours
                </p>
                <p className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary-400">🚀</span> Actively seeking full-time opportunities
                </p>
                <p className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary-400">💡</span> Looking forward to full-time roles where I can contribute and grow
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center">
                    <Mail size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <a href="mailto:ponmathi.selvam@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                      ponmathi.selvam@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 blur-xl rounded-2xl"></div>
              <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-4 bg-dark-800/50 border border-primary-500/20 rounded-lg hover:border-primary-400/40 transition-all duration-300 transform hover:scale-105 ${social.color}`}
                    >
                      <div className="text-gray-300 group-hover:text-current transition-colors duration-300">
                        {social.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {social.label}
                      </span>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-current transition-colors duration-300 ml-auto" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-xl rounded-2xl"></div>
              <div className="relative bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-400/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Let's build something amazing!</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm always excited about new opportunities and innovative projects. 
                  Whether you have a question, a project idea, or just want to say hello, 
                  I'd love to hear from you!
                </p>
                <div className="text-sm text-gray-400">
                  <p>⚡ Usually responds within 24 hours</p>
                  <p>🚀 Available for freelance projects</p>
                  <p>💡 Open to collaboration opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;