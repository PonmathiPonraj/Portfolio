import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Software Developer', 'Automation Tester', 'Freelancer', 'Technical Trainer'];
  const currentTitle = titles[currentIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (displayedText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTitle]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary-500/5 via-secondary-500/5 to-accent-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Avatar */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-secondary-400/20 to-accent-400/20 animate-gradient"></div>
                  <span className="text-4xl font-bold text-white relative z-10">P</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-accent-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-black mb-6 animate-slide-up">
            <span className="block text-white text-3xl md:text-5xl">Hello, I'm</span>
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
              Ponmathi
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block min-h-[1.2em] relative">
              {displayedText}
              <span className="inline-block w-0.5 h-8 bg-primary-400 ml-1 animate-pulse"></span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Dedicated to mentoring aspiring developers and building robust web applications using the MERN stack. 
            I blend hands-on coding skills with a passion for teaching to create impactful, real-world learning experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:text-white">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Mail, href: 'mailto:ponmathittl@gmail.com', color: 'hover:text-red-400' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ponmathi-ponraj-9332561b2', color: 'hover:text-blue-400' },
              { icon: Github, href: 'https://github.com/PonmathiPonraj', color: 'hover:text-purple-400' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-full bg-dark-800/50 border border-primary-500/30 text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color} hover:border-current`}
              >
                <social.icon size={24} />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;