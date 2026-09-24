import React from 'react';
import { servicesData } from '../data/portfolioData';
import { 
  Code, 
  Layout, 
  Palette, 
  Film, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-7 h-7 text-blue-400" />;
      case 'Layout':
        return <Layout className="w-7 h-7 text-purple-400" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-amber-400" />;
      case 'Film':
        return <Film className="w-7 h-7 text-rose-400" />;
      default:
        return <Sparkles className="w-7 h-7 text-brand-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 dark:bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative &amp; Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-accent-cyan">Can Do</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Delivering high-quality end-to-end digital solutions, combining engineering precision with compelling creative media.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Icon with gradient badge */}
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 w-fit mb-5 group-hover:scale-110 transition-transform shadow-md">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 border-t border-slate-800/80 pt-4">
                  Deliverables Include
                </p>
                <div className="space-y-2 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 group-hover:text-brand-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
