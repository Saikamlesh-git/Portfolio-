import React from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 dark:bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career &amp; Professional Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-accent-cyan">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Hands-on corporate technical internship experience and freelance digital content creation delivering real client outcomes.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-500 via-purple-500 to-transparent -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Timeline Node Badge */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-full bg-slate-900 border-2 border-brand-500 items-center justify-center shadow-lg shadow-brand-500/30 z-20">
                    <Briefcase className="w-4 h-4 text-brand-400" />
                  </div>

                  {/* Empty Side for balance on large screen */}
                  <div className="hidden sm:block sm:w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2">
                    <div className="group relative p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1">
                      
                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          item.type === 'Internship'
                            ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                            : 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                        }`}>
                          {item.type}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-brand-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                        {item.role}
                      </h3>

                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 mt-1 mb-4">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{item.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Accomplishment Bullet Points */}
                      <div className="space-y-2.5 mb-6">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tools & Technologies Used */}
                      <div className="pt-4 border-t border-slate-800/80">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Tools &amp; Workflows
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tools.map((tool, tIdx) => (
                            <span 
                              key={tIdx}
                              className="text-xs px-2.5 py-0.5 rounded-md bg-slate-950/80 text-slate-300 border border-slate-800"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
