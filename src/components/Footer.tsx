import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: 'mailto:ponmathittl@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/PonmathiPonraj',
      label: 'GitHub',
      color: 'hover:text-purple-400'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/ponmathi-ponraj-9332561b2',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-primary-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-500/5 to-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Ponmathi Ponraj
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Dedicated to mentoring aspiring developers and building robust web applications using the MERN stack. 
              I blend hands-on coding skills with a passion for teaching to create impactful, real-world learning experiences.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-full bg-dark-800/50 border border-primary-500/20 text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color} hover:border-current`}
                  aria-label={social.label}
                >
                  {social.icon}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-400">Email:</span>
                <p className="text-gray-300">ponmathittl@gmail.com</p>
              </div>
              <div>
                <span className="text-gray-400">Phone:</span>
                <p className="text-gray-300">+91 9361620268</p>
              </div>
              <div>
                <span className="text-gray-400">Location:</span>
                <p className="text-gray-300">Sivakasi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Designed & Developed by Ponmathi Ponraj.</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-primary-500/20 rounded-full text-gray-400 hover:text-white hover:border-primary-400/40 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Additional Footer Info */}
        <div className="mt-8 pt-8 border-t border-primary-500/10">
          <div className="text-center">
            <p className="text-gray-400 text-xs leading-relaxed">
              This portfolio showcases my passion for creating exceptional digital experiences. 
              Built with React.js, TypeScript, and Tailwind CSS, featuring custom animations and modern design principles.
              <br />
              <span className="text-primary-400">Always open to new opportunities and exciting collaborations.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;