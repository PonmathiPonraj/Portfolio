import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Palette, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      color: 'from-primary-500 to-primary-600',
      skills: [
        { name: 'HTML5/CSS3', level: 95, color: '#61DAFB' },
        { name: 'BootStrap', level: 95, color: '#F7DF1E' },
        { name: 'JavaScript', level: 90, color: '#F05032' },
        { name: 'Tailwind CSS', level: 85, color: '#3178C6' },
        { name: 'React.js', level: 80, color: '#06B6D4' },
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Backend',
      color: 'from-secondary-500 to-secondary-600',
      skills: [
        { name: 'Node.js', level: 80, color: '#339933' },
        { name: 'MongoDB', level: 80, color: '#3776AB' },
        { name: 'PHP', level: 80, color: '#47A248' },
        { name: 'Express.js', level: 70, color: '#F05032' },
        { name: 'MySQL', level: 75, color: '#336791' },
      ]
    },
    {
      icon: <Palette size={24} />,
      title: 'Tools & Design',
      color: 'from-accent-500 to-accent-600',
      skills: [
        { name: 'Cypress', level: 95, color: '#FCC624' },
        { name: 'Git/GitHub', level: 95, color: '#F05032' },
        { name: 'Jira', level: 90, color: '#2496ED' },
        { name: 'Postman', level: 80, color: '#FF9900' },
        { name: 'Firebase', level: 80, color: '#F24E1E' },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-dark-900/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/10 border border-secondary-500/30 rounded-full text-secondary-400 text-sm font-medium mb-6">
            <Zap size={16} />
            Technical Skills
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="block mb-2">Technologies</span>
            <span className="block text-4xl md:text-5xl bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              I Work With
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-accent-400 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl"
                   style={{ background: `linear-gradient(to right, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})` }}></div>
              <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-8 group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: skill.color }}
                          ></div>
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            backgroundColor: skill.color,
                            transitionDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'DSA', 'Redux', 'Material-UI', 'Netlify', 'IOT', 'C', 'Java', 'Python', 'Manual Testing'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded-full text-sm hover:bg-dark-700/50 hover:border-primary-400/40 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;