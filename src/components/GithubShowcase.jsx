import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  GitBranch, 
  Star, 
  Terminal, 
  ExternalLink, 
  Sparkles, 
  Code2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function GithubShowcase() {
  const topRepos = [
    {
      name: "Carry",
      desc: "Hotel essentials ordering system web platform with user & admin inventory routing.",
      url: "https://github.com/Saikamlesh-git",
      lang: "Python / Web",
      langColor: "bg-blue-500"
    },
    {
      name: "Billing_App",
      desc: "Hotel essentials billing engine with dynamic product invoicing and receipt generation.",
      url: "https://github.com/Saikamlesh-git/Billing_App",
      lang: "Python / MySQL",
      langColor: "bg-amber-500"
    },
    {
      name: "Leave-Approval-System",
      desc: "Full-stack enterprise application for role-based employee leave requests and tracking.",
      url: "https://github.com/Saikamlesh-git/Leave-Approval-System",
      lang: "Java / REST APIs",
      langColor: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-950 dark:bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Open Source &amp; Code Repositories</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Explore My Code on <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-accent-cyan">GitHub</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                I believe in practical software craftsmanship. Explore my active repositories, commits, and open-source projects hosted under <strong>@Saikamlesh-git</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/20 transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Visit GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-sky-400 hover:text-sky-300 font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Quick Repos List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {topRepos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-slate-400 mb-3">
                      <Terminal className="w-4 h-4 text-brand-400" />
                      <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-white transition-opacity" />
                    </div>

                    <h4 className="font-bold text-white text-sm mb-1.5 group-hover:text-brand-400 transition-colors">
                      {repo.name}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {repo.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                    <span className={`w-2 h-2 rounded-full ${repo.langColor}`}></span>
                    <span>{repo.lang}</span>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
