import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 p-4 glass rounded-full shadow-lg"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FaSun className="text-2xl text-primary" />
      ) : (
        <FaMoon className="text-2xl text-primary" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
