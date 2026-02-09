import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ThemeToggle />
      
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/10">
        <p className="font-mono">
          &copy; 2026 Ojera Charity Faith. 
        </p>
      </footer>
    </div>
  );
}

export default App;
