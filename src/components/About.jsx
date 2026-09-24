import React from 'react';
import { aboutMe, personalInfo, softSkills } from '../data/portfolioData';
import { 
  Code2, 
  Palette, 
  Layers, 
  Video, 
  GraduationCap, 
  Award, 
  Languages, 
  MapPin, 
  Sparkles,
  Download,
  CheckCircle2,
  Calendar,
  Building
} from 'lucide-react';

export default function About({ onOpenResume }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-brand-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-accent-cyan" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-purple-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-900/60 dark:bg-slate-900/60 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-accent-cyan">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Bridging analytical computer science with visual creativity to build impactful digital solutions.
          </p>
        </div>

        {/* Top Story & Highlight Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-7 bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-400"></span>
              The Intersection of Logic &amp; Design
            </h3>

            <p className="text-slate-300 leading-relaxed text-base mb-6">
              {aboutMe.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-slate-800/80 text-brand-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="font-semibold text-white">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-slate-800/80 text-accent-cyan">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Languages Known</p>
                  <p className="font-semibold text-white">English, Tamil</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-slate-800/80 text-purple-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Current Academic Standing</p>
                  <p className="font-semibold text-white">B.E. CSE (CGPA 7.5)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-slate-800/80 text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Internship Exposure</p>
                  <p className="font-semibold text-white">DBSol Technologies &amp; Freelance</p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-8 pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-semibold text-sm hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-500/20 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 text-sm font-semibold transition-colors"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Right Core Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutMe.pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all duration-300 shadow-lg hover:shadow-brand-500/10 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60 group-hover:scale-110 transition-transform">
                      {getIcon(pillar.icon)}
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-base mb-2 group-hover:text-brand-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Education Timeline Cards */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-brand-400" />
            <h3 className="text-2xl font-bold text-white">Education History</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutMe.education.map((edu, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/40 transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5 font-mono text-brand-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {edu.score}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1.5 leading-snug">
                  {edu.degree}
                </h4>

                <p className="text-xs text-slate-300 flex items-center gap-1.5 mb-3">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{edu.institution}</span>
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {edu.location}
                  </span>
                  <span className="text-slate-400 font-medium">
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Badges */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Key Professional Attributes:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {softSkills.map((skill, i) => (
              <span 
                key={i}
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-brand-500/40 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
