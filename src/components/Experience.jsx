import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const timeline = [
    {
      type: 'work',
      title: 'Software Engineering Apprentice',
      company: 'RHIP Factory FundEzer Nigeria',
      period: 'June 2025 - December 2025',
      description: 'Contributed to Frontend Development of FundEzer, an AI-powered healthcare crowdfunding platform. Implemented RESTful APIs, payment integration, and campaign management features using React and Vite.',
    },
    {
      type: 'education',
      title: 'Certificate in Software Engineering with JavaScript',
      company: 'Refactory Academy',
      period: 'February 2025 - May 2025',
      description: 'Intensive bootcamp focused on full-stack JavaScript development, including React, Vue.js, Node.js, MongoDB, and modern web development practices.',
    },
    {
      type: 'education',
      title: 'Uganda Advanced Certificate of Education',
      company: 'Seeta High School - Green Campus',
      period: '2016 - 2017',
      description: 'Completed advanced secondary education with focus on sciences and mathematics.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-mono">{"// My professional journey"}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
          
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-12 sm:pl-20 pb-8 sm:pb-12"
            >
              <div className="absolute left-2.5 sm:left-5 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                {item.type === 'work' ? <FaBriefcase className="text-[8px] sm:text-xs" /> : <FaGraduationCap className="text-[8px] sm:text-xs" />}
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary">{item.title}</h3>
                  <span className="text-xs sm:text-sm text-gray-400 font-mono">{item.period}</span>
                </div>
                <p className="text-secondary font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{item.company}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
