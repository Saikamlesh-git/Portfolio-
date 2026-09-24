import React, { useState } from 'react';
import { skillCategories, skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Braces, 
  Coffee, 
  FileCode2, 
  FileCode, 
  LayoutTemplate, 
  Atom, 
  Network, 
  Database, 
  GitBranch, 
  Briefcase, 
  Image, 
  Sparkles, 
  Layers, 
  Scissors, 
  Film, 
  Box, 
  Binary, 
  Server, 
  Cpu, 
  CheckCircle2,
  Filter
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  const getSkillIcon = (iconName) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'Coffee': return <Coffee {...props} className="w-5 h-5 text-amber-400" />;
      case 'FileCode2': return <FileCode2 {...props} className="w-5 h-5 text-blue-400" />;
      case 'Code': return <Code2 {...props} className="w-5 h-5 text-indigo-400" />;
      case 'Terminal': return <Terminal {...props} className="w-5 h-5 text-cyan-400" />;
      case 'FileCode': return <FileCode {...props} className="w-5 h-5 text-orange-400" />;
      case 'LayoutTemplate': return <LayoutTemplate {...props} className="w-5 h-5 text-sky-400" />;
      case 'Braces': return <Braces {...props} className="w-5 h-5 text-yellow-400" />;
      case 'Atom': return <Atom {...props} className="w-5 h-5 text-cyan-400 animate-spin-slow" />;
      case 'Network': return <Network {...props} className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database {...props} className="w-5 h-5 text-blue-400" />;
      case 'GitBranch': return <GitBranch {...props} className="w-5 h-5 text-orange-400" />;
      case 'Github': return <GithubIcon {...props} className="w-5 h-5 text-purple-400" />;
      case 'Briefcase': return <Briefcase {...props} className="w-5 h-5 text-blue-500" />;
      case 'Figma': return <FigmaIcon {...props} className="w-5 h-5 text-pink-400" />;
      case 'Image': return <Image {...props} className="w-5 h-5 text-teal-400" />;
      case 'Sparkles': return <Sparkles {...props} className="w-5 h-5 text-blue-400" />;
      case 'Layers': return <Layers {...props} className="w-5 h-5 text-red-400" />;
      case 'Scissors': return <Scissors {...props} className="w-5 h-5 text-rose-400" />;
      case 'Film': return <Film {...props} className="w-5 h-5 text-purple-400" />;
      case 'Box': return <Box {...props} className="w-5 h-5 text-indigo-400" />;
      case 'Binary': return <Binary {...props} className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server {...props} className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu {...props} className="w-5 h-5 text-violet-400" />;
      case 'CheckCircle2': return <CheckCircle2 {...props} className="w-5 h-5 text-sky-400" />;
      default: return <Code2 {...props} className="w-5 h-5 text-brand-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 dark:bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical &amp; Creative Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-accent-cyan">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Categorized technical stack focused on practical implementation, software development, modern UI/UX design, and multimedia creation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md shadow-brand-500/20 scale-105'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{cat.label}</span>
              {selectedCategory === cat.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-850/90 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:scale-110 group-hover:border-brand-500/40 transition-all">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-slate-800/70 text-slate-400 border border-slate-700/60">
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-brand-400 transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Practical experience meter */}
              <div className="mt-4 pt-2 border-t border-slate-800/60">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>Hands-on Focus</span>
                  <span className="text-accent-cyan font-mono font-medium">Applied</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 group-hover:opacity-100 opacity-80`}
                    style={{ width: skill.level === 'Advanced' ? '92%' : skill.level === 'Proficient' ? '82%' : '75%' }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Core CS Foundations Note */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900 to-indigo-950/40 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-brand-600/20 text-brand-400 border border-brand-500/30 shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Rigorous Computer Science Core
              </h4>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Trained in Object-Oriented Programming (OOP), Data Structures &amp; Algorithms, Database Systems (DBMS), Operating Systems, and Software Engineering methodologies at Prince Shri Venkateshwara Padmavathy Engineering College.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
          >
            See Practical Projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
