import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  SlidersHorizontal,
  ChevronRight,
  X
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web & Supply Apps' },
    { id: 'fullstack', label: 'Full-Stack Systems' },
    { id: 'hardware', label: 'Innovations & Prototyping' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-900/60 dark:bg-slate-900/60 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Highlighted <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-accent-cyan">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Real-world software engineering, supply-chain web platforms, full-stack systems, and innovative engineering prototypes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              <span>{cat.label}</span>
              {filter === cat.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-500/10 flex flex-col justify-between overflow-hidden"
            >
              {/* Project Header Banner / Mockup Preview */}
              <div className={`relative h-52 sm:h-56 w-full bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
                <div className="absolute inset-0 bg-black/25"></div>

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-slate-950/70 text-white border border-white/10 backdrop-blur-md">
                    {project.category.toUpperCase()}
                  </span>
                  
                  {project.liveDemo && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      Live Deployment
                    </span>
                  )}
                </div>

                {/* Project Title Overlay in Hero Banner */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/90 font-medium tracking-wide mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-950/80 text-brand-300 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="pt-5 border-t border-slate-800 flex flex-wrap items-center gap-3">
                  {/* Live Demo Link */}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow-md shadow-brand-500/20 transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {/* Admin Panel Link */}
                  {project.adminPanel && (
                    <a
                      href={project.adminPanel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-accent-cyan text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Admin Panel</span>
                    </a>
                  )}

                  {/* GitHub Repo */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-200 hover:text-white text-xs font-semibold border border-slate-800 hover:border-brand-500/40 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-brand-400" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {/* Details Modal Trigger */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub Direct Showcase Card */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Looking for more repositories, source code commits, or academic exercises?
          </p>
          <a
            href="https://github.com/Saikamlesh-git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-white text-sm font-semibold border border-slate-800 hover:border-brand-500/40 shadow-lg transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4 text-brand-400" />
            <span>Explore All GitHub Repositories (@Saikamlesh-git)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-brand-400 font-medium mt-0.5">
                {selectedProject.subtitle}
              </p>
            </div>

            <div className="my-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Key Architecture &amp; Engineering Highlights
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-md shadow-brand-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
              {selectedProject.adminPanel && (
                <a
                  href={selectedProject.adminPanel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-accent-cyan text-xs font-bold border border-slate-700"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Admin Interface</span>
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold border border-slate-700"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
