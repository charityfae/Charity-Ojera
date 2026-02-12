import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [carouselIndex, setCarouselIndex] = useState({});

  const nextImage = (projectIndex, totalImages) => {
    setCarouselIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectIndex, totalImages) => {
    setCarouselIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const projects = [
    {
      title: 'Amorena - Luxury Floral & Event Planning',
      description: 'Premium e-commerce website for luxury floral arrangements and event planning. Features cinematic animations, video hero section, interactive gallery with filtering (40+ images), and WhatsApp booking integration.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'AOS', 'React Router'],
      media: { type: 'carousel', images: ['./images/pic1.png', './images/pic2.png', './images/pic3.png'] },
    },
    {
      title: 'FundEzer Healthcare Platform',
      description: 'AI-powered platform for healthcare crowdfunding. Built with React and Vite, featuring campaign management, payment integration, and real-time donor updates.',
      tech: ['React', 'Vite', 'REST APIs', 'Payment Gateway'],
      media: { type: 'video', src: '/fundezer-demo.mp4' },
    },
    {
      title: 'Karibu Groceries Management System',
      description: 'Comprehensive role-based management system with inventory tracking, sales management, procurement, and credit sales monitoring. Features custom authentication and multi-role dashboards.',
      tech: ['JavaScript', 'MongoDB', 'Bootstrap', 'Node.js'],
      media: { type: 'carousel', images: ['./images/karibu1.png', './images/karibu2.png', './images/karibu3.png'] },
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-mono">{"Building the future, one project at a time"}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-4 sm:p-6 group relative overflow-hidden w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                {project.media.type === 'video' ? (
                  <video 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.media.src} type="video/mp4" />
                  </video>
                ) : project.media.type === 'carousel' ? (
                  <div className="relative w-full h-48 mb-4 group/carousel">
                    <img 
                      src={project.media.images[carouselIndex[i] || 0]} 
                      alt={`${project.title} ${(carouselIndex[i] || 0) + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={() => prevImage(i, project.media.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={() => nextImage(i, project.media.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity"
                    >
                      <FaChevronRight />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {project.media.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === (carouselIndex[i] || 0) ? 'bg-primary' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.media.src} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">{project.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {(project.github || project.live) && (
                  <div className="flex gap-3 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-gray-900 text-xs rounded-lg hover:bg-primary/80 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
