import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Services from './components/Services';
import FreelanceCreative from './components/FreelanceCreative';
import GithubShowcase from './components/GithubShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} selection:bg-brand-500 selection:text-white transition-colors duration-300 relative`}>
      {/* Top Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Services />
        <FreelanceCreative />
        <GithubShowcase />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Resume Preview & Print Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
