import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCode, FaLaptopCode, FaPalette, FaUsers } from 'react-icons/fa';

const About = () => {
  const [counts, setCounts] = useState({ experience: 0, projects: 0, clients: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { experience: 2, projects: 3, clients: 50 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        experience: Math.min(Math.floor((targets.experience / steps) * step), targets.experience),
        projects: Math.min(Math.floor((targets.projects / steps) * step), targets.projects),
        clients: Math.min(Math.floor((targets.clients / steps) * step), targets.clients),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const services = [
    { Icon: FaCode, title: 'Full-Stack Development', desc: 'Building scalable web applications with modern frameworks' },
    { Icon: FaLaptopCode, title: 'Frontend Development', desc: 'Creating responsive and interactive user interfaces' },
    { Icon: FaPalette, title: 'UI/UX Design', desc: 'Designing intuitive and beautiful user experiences' },
    { Icon: FaUsers, title: 'API Integration', desc: 'Seamless integration of third-party services and APIs' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-mono">{"Passionate about creating exceptional digital experiences"}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a dedicated Frontend and Full-Stack Developer with a keen eye for design. 
              I've been crafting digital solutions that not only function flawlessly but also 
              provide exceptional user experiences.
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey combines the technical precision of software development with the 
              creative intuition of UI/UX design. I believe that great applications are born 
              from the perfect marriage of functionality and aesthetics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-2 sm:gap-4"
          >
            {[
              { label: 'Years Experience', value: counts.experience, suffix: '+' },
              { label: 'Projects Completed', value: counts.projects, suffix: '+' },
              { label: 'Happy Clients', value: counts.clients, suffix: '+' },
            ].map((stat, i) => (
              <div key={i} className="glass p-3 sm:p-4 md:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1 sm:mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 gradient-text">What I Do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-4 sm:p-6 text-center"
              >
                <service.Icon className="text-3xl sm:text-4xl text-primary mx-auto mb-3 sm:mb-4" />
                <h4 className="font-bold mb-2 text-sm sm:text-base text-gray-900 dark:text-white">{service.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
