import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Sparkles, 
  ExternalLink, 
  Palette, 
  Monitor, 
  Layers, 
  ArrowRight,
  CheckCircle,
  Laptop
} from 'lucide-react';

export default function FreelanceCreative() {
  return (
    <section className="py-20 bg-slate-900/60 dark:bg-slate-900/60 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-950/80 via-slate-900 to-slate-900/90 border border-brand-500/30 p-8 sm:p-12 shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Creative Studio &amp; Freelance Hub</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Explore My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-brand-400 to-purple-400">Creative Work</span>
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6 max-w-xl">
                Beyond core software development, I run and maintain <strong>Saka Digital</strong>—a dedicated creative brand delivering brand identity systems, social media promotions, posters, and multimedia video editing for businesses and clients.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom Visual Branding</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Promotional Social Creatives</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Commercial Video Editing</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>UI/UX Mockups &amp; Assets</span>
                </div>
              </div>

              {/* Button */}
              <a
                href={personalInfo.sakaDigital}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-accent-cyan via-brand-600 to-purple-600 hover:from-accent-cyan hover:to-brand-500 shadow-lg shadow-brand-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore My Creative Work (Saka Digital)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right Mockup Preview Box */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-inner flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">sakadigital.netlify.app</span>
                  </div>
                  <span className="text-[11px] font-mono text-accent-cyan">Live Showcase</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-cyan text-white">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Saka Digital</h4>
                      <p className="text-xs text-slate-400">Creative Media &amp; Graphic Solutions</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Designed to cater to local businesses, shops, and startups needing polished graphic design, digital marketing campaigns, and video assets.
                  </p>
                </div>

                <a
                  href={personalInfo.sakaDigital}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white text-xs font-semibold text-center border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Visit Saka Digital Live Site</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
