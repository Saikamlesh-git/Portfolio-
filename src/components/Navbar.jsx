import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  FileText, 
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ darkMode, setDarkMode, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-slate-950/85 dark:bg-slate-950/85 bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-slate-200/50 dark:border-slate-800/80' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-xl p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-purple-600 to-accent-cyan p-[2px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-cyan tracking-wider">
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                CS Student & Designer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/80 dark:bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-brand-600 shadow-sm shadow-brand-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Icons */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-yellow-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Resume CTA */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-brand-600 to-indigo-600 text-white hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 transition-all duration-300 animate-slide-up shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-brand-600/10 text-brand-600 dark:text-brand-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </nav>

          <div className="pt-5 mt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-semibold text-sm shadow-md shadow-brand-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-500"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-500"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
