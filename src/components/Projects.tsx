import React from 'react';
import { ExternalLink, Github, Eye, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features including user authentication, payment processing, inventory management, and real-time analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Full Stack'
    },
    {
      title: 'AI-Powered Task Manager',
      description: 'Intelligent task management application with AI-driven priority suggestions, collaborative features, and advanced analytics for productivity optimization.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'AI/ML'
    },
    {
      title: 'Real-time Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts with push notifications.',
      image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Frontend'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform built on blockchain technology ensuring vote integrity and providing real-time election results.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Blockchain'
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics platform for social media management with sentiment analysis, engagement tracking, and automated reporting.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'Django', 'Redis', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Analytics'
    },
    {
      title: 'Recipe Discovery App',
      description: 'Smart recipe finder with ingredient-based search, nutritional analysis, meal planning, and personalized recommendations using machine learning.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Python', 'ML Kit'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Mobile'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-dark-900/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6">
            <Folder size={16} />
            Projects
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Featured
            <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl overflow-hidden group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-dark-800/80 text-gray-300 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 text-sm font-medium transform hover:scale-105"
                    >
                      <Eye size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 border border-primary-500/30 text-primary-400 rounded-lg hover:border-primary-400 hover:bg-primary-500/10 transition-all duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl"></div>
                <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-xl p-6 group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-primary-300 transition-colors duration-300 mb-1">
                        {project.title}
                      </h4>
                      <span className="text-xs text-gray-400 bg-dark-800/50 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
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

export default Projects;