import React from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Technical Trainer',
      company: 'Kevell Global Solutions (Kevell Guru)',
      location: 'Madurai',
      period: '05/2024 - Present',
      description: [
        'Currently working as a technical trainer',
        'Handling internships on full stack development and web development programs for both short-term and long-term durations, for both college students and graduates',
        'Continuously updating myself with new technologies and skills to enhance my professional growth'
      ],
      technologies: ['Full Stack Development', 'Web Development', 'Soft Skills Training', 'Student Mentoring', 'Career Guidance'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Website Developer',
      company: 'Freelancer',
      location: 'Sivakasi',
      period: '10/2022 - 04/2024',
      description: [
        'Built responsive and user-friendly websites using HTML, CSS, and Bootstrap',
        'Developed backend functionality with PHP and SQL for dynamic content updates',
        'Created a website for a cracker shop in Sivakasi with real-time price update features',
        'Ensured smooth integration between frontend and backend for optimal performance'
      ],
      technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'SQL'],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      title: 'Junior Technologist',
      company: 'Gogosoon Private Limited',
      location: 'Chennai',
      period: '12/2021 - 07/2022',
      description: [
        'Worked as an Automation Tester using the Cypress framework with JavaScript',
        'Automated test scenarios for the Claims domain of the HPS Novus medical insurance site, covering employer, provider, patient, and participant details',
        'Collaborated with the Manual Testing team to translate manual test cases into automated scripts'
      ],
      technologies: ['Manual Testing', 'Cypress', 'JavaScript', 'DSA'],
      color: 'from-accent-500 to-accent-600'
    },
    {
      title: 'Software Engineer',
      company: 'Handbuiltapps',
      location: 'Sivakasi',
      period: '06/2021 - 11/2021',
      description: [
        'Worked as a Frontend Developer using HTML, CSS, and React.js on Canadian and DBB projects',
        'Modified designs using CSS and managed content, including titles, images, JSON data, and videos',
        'Involved in test case preparation, execution, and defect identification, ensuring full application coverage'
      ],
      technologies: ['HTML', 'CSS', 'React.js', 'JSON', 'Unit Testing', 'Git/Github'],
      color: 'from-primary-500 to-secondary-600'
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full text-accent-400 text-sm font-medium mb-6">
            <Briefcase size={16} />
            Professional Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Work
            <span className="block bg-gradient-to-r from-accent-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-primary-400 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-400"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full border-4 border-dark-950 z-10 shadow-lg shadow-primary-500/50"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl`}></div>
                    <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-8 group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-400 font-semibold mb-3">
                          <ExternalLink size={16} />
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded-full text-xs hover:bg-dark-700/50 hover:border-primary-400/40 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

export default Experience;