import { motion } from 'framer-motion';
import React from 'react';
import { FaReact, FaNodeJs, FaVuejs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiVite, SiFigma, SiCanva, SiVisualstudio } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'Vue.js', Icon: FaVuejs, color: '#4FC08D', category: 'Frontend' },
    { name: 'React', Icon: FaReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'HTML5', Icon: FaHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6', category: 'Frontend' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
    { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952B3', category: 'Frontend' },
    { name: 'Node.js', Icon: FaNodeJs, color: '#339933', category: 'Backend' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', category: 'Backend' },
    { name: 'Vite', Icon: SiVite, color: '#646CFF', category: 'Tools' },
    { name: 'Git', Icon: FaGitAlt, color: '#F05032', category: 'Tools' },
    { name: 'Figma', Icon: SiFigma, color: '#F24E1E', category: 'Design' },
    { name: 'Canva', Icon: SiCanva, color: '#00C4CC', category: 'Design' },
    { name: 'Visily', Icon: SiVisualstudio, color: '#5C2D91', category: 'Design' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Design'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-mono">{" Technologies I work with"}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'glass hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass p-6 text-center group cursor-pointer"
            >
              <skill.Icon 
                className="text-5xl mx-auto mb-4 transition-all duration-300 group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <h3 className="font-semibold text-gray-900 dark:text-gray-200">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
