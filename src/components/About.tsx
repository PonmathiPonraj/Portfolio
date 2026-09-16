import React from 'react';
import { User, Zap, Code2, Lightbulb, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: 'Practical Architecture',
      description: 'Developing scalable, maintainable web applications using industry best practices and clean coding standards with real-world project experience.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Skill-Driven Training',
      description: 'Blending hands-on coding with instruction, guiding aspiring developers through emerging web technologies and real-time use cases in MERN stack.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: <Target size={24} />,
      title: 'Impact-Oriented',
      description: 'Focused on project outcomes—whether in testing, frontend, or backend—ensuring functional, efficient, and user-friendly solutions for every task.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: <Users size={24} />,
      title: 'Empowering Mentor',
      description: 'Trained 300+ learners in full stack development through online and offline sessions. Passionate about guiding non-tech students toward job-ready skills and placements',
      color: 'from-primary-500 to-secondary-600'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6">
            <User size={16} />
            About Me
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Career
            <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-accent-400" />
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Hi, I'm Ponmathi from Sivakasi. I hold a Bachelor's degree in Computer Science Engineering, which I completed in 2021 from AAA College of Engineering and Technology (AAACET). With a strong foundation in web technologies, I've built a career over the last three years in frontend development, automation testing, and freelancing. Throughout this time, I've gained hands-on experience working with tools and technologies such as HTML, CSS, JavaScript, React.js, Node.js, MongoDB, PHP, SQL, and Cypress.
                  </p>
                  <p className="text-justify">
                    Currently, I serve as a Technical Trainer at Kevell Global Solutions in Madurai, where I lead web development internship programs. My role involves not just delivering technical content, but also designing structured training modules and mentoring students through their learning journey. I've successfully managed both short-term and long-term internship batches, handling over 50+ students at a time in offline and online sessions. My sessions cover both the theoretical aspects and real-time project work, helping students transition from learners to confident developers.
                  </p>
                  <p className="text-justify">
                    I am deeply passionate about continuous learning and believe in sharing knowledge to uplift others in the tech community. Whether it's writing code, guiding beginners through complex topics, or solving problems in real-world projects, I find joy in every step of the process. I aspire to grow further in the field of full stack development and technical education, constantly seeking new challenges and opportunities to make a positive impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-dark-800/50 backdrop-blur-xl border border-primary-500/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <div>
                    <span className="text-gray-400">Email</span>
                    <p className="text-white font-medium">ponmathittl@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <div>
                    <span className="text-gray-400">Phone</span>
                    <p className="text-white font-medium">+91 9361620268</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" 
                     style={{ background: `linear-gradient(to right, ${highlight.color.split(' ')[1]}, ${highlight.color.split(' ')[3]})` }}></div>
                <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-xl p-6 group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${highlight.color} rounded-lg text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;