import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Heart, ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-850">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 via-purple-600 to-accent-cyan p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-cyan">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Building with code. Creating with creativity. Computer Science Engineer, Developer, and Designer based in Chennai, India.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button 
              onClick={onOpenResume}
              className="hover:text-brand-400 transition-colors font-semibold"
            >
              Resume
            </button>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-500/50 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Saikamlesh"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/50 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with React &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
