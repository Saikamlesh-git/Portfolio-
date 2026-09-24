import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Download, 
  Sparkles, 
  Code2, 
  Palette, 
  Terminal, 
  CheckCircle,
  ExternalLink,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('developer');

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-slate-950 dark:bg-slate-950 text-slate-100"
    >
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-accent-cyan/15 rounded-full blur-[140px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[35rem] h-[25rem] bg-purple-600/15 rounded-full blur-[130px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-6 shadow-sm hover:border-brand-500/50 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide">
                {personalInfo.status}
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-400" /> Chennai
              </span>
            </div>

            {/* Greeting */}
            <p className="text-brand-400 font-semibold text-lg md:text-xl tracking-tight mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-cyan" />
              <span>Hi, I'm <span className="text-white font-bold">{personalInfo.name}</span></span>
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
              Building Digital Experiences with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-accent-cyan">
                Code &amp; Creativity.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              {personalInfo.tagline}
            </p>

            {/* Key Metas (College & CGPA) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <GraduationCap className="w-4 h-4 text-brand-400" />
                <span>BE CSE (2023–2027)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
                <span>CGPA: <strong className="text-white">7.5 / 10</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Internship Experienced</span>
              </div>
            </div>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary 1: View My Work */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Primary 2: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-brand-400" />
                <span>Contact Me</span>
              </a>

              {/* Secondary Button: GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saikamlesh GitHub Profile"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-brand-500/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <GithubIcon className="w-4 h-4 text-brand-400" />
                <span>GitHub</span>
              </a>

              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-accent-cyan hover:text-white bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 transition-all duration-200 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Proof Quick Links */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Connect Directly:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors bg-slate-900/60 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors bg-slate-900/60 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.sakaDigital}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-accent-cyan transition-colors bg-slate-900/60 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800"
              >
                <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Saka Digital</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Creative Developer Showcase Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Glowing Aura Behind Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 via-purple-600 to-accent-cyan rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse-glow"></div>

              {/* Glassmorphic Terminal Card */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-brand-400" />
                      saikamlesh-profile.tsx
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded text-[11px] font-mono text-emerald-400 border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Active
                  </div>
                </div>

                {/* Tabs to highlight versatility (Dev, UI/UX, Creative) */}
                <div className="flex border-b border-slate-800 bg-slate-950/40 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('developer')}
                    className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'developer'
                        ? 'text-brand-400 border-b-2 border-brand-500 bg-slate-900/80 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Developer</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('designer')}
                    className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'designer'
                        ? 'text-accent-cyan border-b-2 border-accent-cyan bg-slate-900/80 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5" />
                    <span>UI/UX &amp; Design</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('creative')}
                    className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'creative'
                        ? 'text-purple-400 border-b-2 border-purple-500 bg-slate-900/80 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Video &amp; Media</span>
                  </button>
                </div>

                {/* Terminal Content Body */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-3">
                  {activeTab === 'developer' && (
                    <div className="space-y-2">
                      <p className="text-slate-500">// Computer Science &amp; Full-Stack Focus</p>
                      <p>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-yellow-300">developer</span> = &#123;
                      </p>
                      <div className="pl-4 space-y-1">
                        <p>
                          <span className="text-cyan-400">name:</span>{' '}
                          <span className="text-emerald-300">"{personalInfo.name}"</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">education:</span>{' '}
                          <span className="text-emerald-300">"B.E. CSE @ PSVPEC (CGPA 7.5)"</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">languages:</span>{' '}
                          <span className="text-indigo-300">["Java", "Python", "C", "C++"]</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">stack:</span>{' '}
                          <span className="text-indigo-300">["React", "HTML/CSS", "REST APIs", "MySQL"]</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">featuredProjects:</span> [
                        </p>
                        <div className="pl-4 text-emerald-300">
                          <p>"Carry - Hotel Ordering System",</p>
                          <p>"Billing App for Supplies",</p>
                          <p>"Leave Approval System"</p>
                        </div>
                        <p>],</p>
                        <p>
                          <span className="text-cyan-400">openToWork:</span>{' '}
                          <span className="text-amber-400">true</span>
                        </p>
                      </div>
                      <p>&#125;;</p>
                    </div>
                  )}

                  {activeTab === 'designer' && (
                    <div className="space-y-2">
                      <p className="text-slate-500">// UI/UX &amp; Brand Systems</p>
                      <p>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-accent-cyan">designer</span> = &#123;
                      </p>
                      <div className="pl-4 space-y-1">
                        <p>
                          <span className="text-cyan-400">tools:</span>{' '}
                          <span className="text-indigo-300">["Figma", "Canva", "Adobe Photoshop"]</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">approach:</span>{' '}
                          <span className="text-emerald-300">"Clean, Intuitive, Accessible, Modern"</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">freelanceWork:</span>{' '}
                          <span className="text-emerald-300">"Saka Digital &amp; Client Creatives"</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">experience:</span>{' '}
                          <span className="text-amber-400">"Posters, UI Mockups, Social Media Ads"</span>
                        </p>
                      </div>
                      <p>&#125;;</p>
                    </div>
                  )}

                  {activeTab === 'creative' && (
                    <div className="space-y-2">
                      <p className="text-slate-500">// Video Editing &amp; Content Production</p>
                      <p>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-purple-400">mediaCreator</span> = &#123;
                      </p>
                      <div className="pl-4 space-y-1">
                        <p>
                          <span className="text-cyan-400">software:</span>{' '}
                          <span className="text-indigo-300">["CapCut", "Adobe Premiere Pro"]</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">deliverables:</span>{' '}
                          <span className="text-emerald-300">"Promotional Ads, Reels, Business Clips"</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">audioSync:</span>{' '}
                          <span className="text-amber-400">true</span>,
                        </p>
                        <p>
                          <span className="text-cyan-400">retentionFocus:</span>{' '}
                          <span className="text-emerald-300">"Dynamic pacing &amp; clean graphics"</span>
                        </p>
                      </div>
                      <p>&#125;;</p>
                    </div>
                  )}

                  {/* Terminal Footer Interactive Action */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Ready to collaborate
                    </span>
                    <a 
                      href="#projects" 
                      className="text-brand-400 hover:text-brand-300 underline underline-offset-2 flex items-center gap-1"
                    >
                      Explore live demos &rarr;
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
