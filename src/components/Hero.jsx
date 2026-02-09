import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-light dark:via-dark to-secondary/5" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi! I'm <span className="gradient-text">Charity Ojera</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Frontend & Full-Stack Developer
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              A Frontend & Full-Stack Developer building digital experiences where clean code meets thoughtful design. I transform ideas into responsive, user-centric applications that don't just work,they feel right. Specialized in JavaScript, Vue.js, React, Node.js, and MongoDB, delivering scalable, high-performance solutions.
            </p>
            
            <div className="flex gap-4 mb-8">
              <motion.a
                href="/cv/Resume Charity Faith Ojera.docx.pdf"
                download="Charity_Ojera_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
              >
                Get in touch
              </motion.a>
            </div>
            
            <div className="flex gap-6">
              {[
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/charity-faith-ojera-2661b6375', label: 'LinkedIn' },
                { Icon: FaGithub, href: 'https://github.com/charityfae', label: 'GitHub' },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-3xl text-gray-900 dark:text-white hover:text-primary transition-colors"
                  title={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[450px] h-[450px] flex items-center justify-center">
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[420px] h-[420px] border-2 border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[380px] h-[380px] border-2 border-secondary/20 rounded-full"
              />
              
              {/* Corner Tech Badges */}
              {[
                { name: 'React', position: '-top-4 -right-4', color: 'bg-primary' },
                { name: 'Vue.js', position: '-bottom-4 -right-4', color: 'bg-secondary' },
                { name: 'Node.js', position: '-bottom-4 -left-4', color: 'bg-primary' },
                { name: 'MongoDB', position: '-top-4 -left-4', color: 'bg-secondary' },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${tech.position} ${tech.color} px-4 py-2 rounded-lg text-xs font-bold text-gray-900 shadow-xl z-20`}
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  whileHover={{ scale: 1.3, rotate: 5 }}
                >
                  {tech.name}
                </motion.div>
              ))}
              
              {/* Glowing Dots */}
              {[0, 90, 180, 270].map((angle, i) => {
                const radius = 210;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-primary rounded-full shadow-lg"
                    style={{ left: '50%', top: '50%', marginLeft: '-6px', marginTop: '-6px' }}
                    animate={{
                      x: [x, x],
                      y: [y, y],
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                );
              })}
              
              {/* Profile Image */}
              <motion.img
                src="./images/link.jpg"
                alt="Ojera Charity Faith"
                className="relative w-80 h-80 rounded-full object-cover object-center border-8 border-white dark:border-gray-800 shadow-2xl z-10"
                style={{ imageRendering: 'crisp-edges' }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Gradient Glow */}
              <div className="absolute w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
