import React, { useState } from 'react';
import { personalInfo, aboutMe, experienceData, projectsData, certificatesData, skillsData } from '../data/portfolioData';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  Loader2,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getAssetUrl, downloadFile } from '../utils/assets';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [downloadState, setDownloadState] = useState('idle'); // 'idle' | 'downloading' | 'success'
  const resumePdfUrl = getAssetUrl('Saikamlesh_M_Resume.pdf');

  const handleDownload = async (e) => {
    if (e) e.preventDefault();
    if (downloadState === 'downloading') return;

    setDownloadState('downloading');
    const ok = await downloadFile('Saikamlesh_M_Resume.pdf', 'Saikamlesh_M_Resume.pdf');
    if (ok) {
      setDownloadState('success');
      setTimeout(() => setDownloadState('idle'), 2500);
    } else {
      setDownloadState('idle');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="printable-resume-modal" 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl my-8 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Modal Controls Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 no-print">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono text-slate-300 ml-2 font-semibold">
              Saikamlesh_M_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download PDF button */}
            <a
              href={resumePdfUrl}
              download="Saikamlesh_M_Resume.pdf"
              onClick={handleDownload}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                downloadState === 'success' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-brand-600 hover:bg-brand-500 text-white'
              }`}
              title="Download official PDF resume directly"
            >
              {downloadState === 'downloading' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : downloadState === 'success' ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {downloadState === 'downloading'
                  ? 'Downloading...'
                  : downloadState === 'success'
                  ? 'Downloaded!'
                  : 'Download PDF'}
              </span>
            </a>

            {/* Open in new tab preview */}
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              title="Open PDF directly in a new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              title="Open browser print dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              title="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Paper Area */}
        <div 
          id="printable-resume" 
          className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900 font-sans print:p-0 print:m-0"
        >
          
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-300 resume-section">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
              SAI KAMLESH M
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-2 text-xs text-slate-700 font-medium">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-700 underline">
                {personalInfo.email}
              </a>
              <span>|</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-blue-700">
                {personalInfo.phone}
              </a>
              <span>|</span>
              <span>Chennai, India</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-1 text-xs text-blue-700 font-medium">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/sai-kamlesh-m-79b7133b0
              </a>
              <span className="text-slate-400">|</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/Saikamlesh-git
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-4 resume-section">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-1.5">
              Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              Detail-oriented Computer Science and Engineering student with strong fundamentals in C, Java, Python, relational databases, and web technologies. Experienced in developing web applications, working with REST APIs, and digital workflow optimization. An analytical problem-solver focused on practical software development and continuous learning.
            </p>
          </div>

          {/* Education */}
          <div className="mt-4 resume-section">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-1.5">
              Education
            </h2>
            <div className="space-y-2.5">
              <div>
                <div className="flex items-center justify-between text-xs">
                  <strong className="text-slate-900">Prince Shri Venkateshwara Padmavathy Engineering College</strong>
                  <span className="text-slate-600 font-medium">Chennai, TN</span>
                </div>
                <div className="flex items-center justify-between text-xs italic text-slate-700">
                  <span>Bachelor of Engineering (B.E.) – Computer Science &amp; Engineering</span>
                  <span>2023 – 2027</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">Current UG CGPA: <strong>7.5 / 10</strong></p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs">
                  <strong className="text-slate-900">St Pius X Matriculation Higher Secondary School</strong>
                  <span className="text-slate-600 font-medium">Chennai, TN</span>
                </div>
                <div className="flex items-center justify-between text-xs italic text-slate-700">
                  <span>Higher Secondary Certificate (Class XII)</span>
                  <span>2022 – 2023</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">Percentage: <strong>80%</strong></p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-4 resume-section">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-1.5">
              Skills
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <p><strong>Languages:</strong> Java, Python, C, C++</p>
              <p><strong>Web Technologies:</strong> HTML, CSS, JavaScript, React.js, REST APIs</p>
              <p><strong>Databases &amp; Tools:</strong> MySQL, Git, GitHub, Microsoft 365</p>
              <p><strong>UI &amp; Graphic Design:</strong> Figma, Canva, Adobe Creative Cloud, Adobe Photoshop</p>
              <p><strong>Video Editing:</strong> CapCut, Adobe Premiere Pro</p>
              <p><strong>Core CS:</strong> Object-Oriented Programming (OOP), Data Structures &amp; Algorithms, Database Management Systems (DBMS), Operating Systems, Software Engineering</p>
              <p><strong>Languages Spoken:</strong> English, Tamil</p>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-4 resume-section">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-1.5">
              Experience
            </h2>
            <div className="space-y-2.5">
              <div>
                <div className="flex items-center justify-between text-xs">
                  <strong className="text-slate-900">DBSol Technologies Pvt. Ltd.</strong>
                  <span className="text-slate-600 font-medium">Chennai, TN</span>
                </div>
                <div className="flex items-center justify-between text-xs italic text-slate-700">
                  <span>Technical Intern</span>
                  <span>Jun 2025 – Jul 2025</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-1">
                  <li>Supported enterprise workplace operations using Microsoft 365 applications including Word, Excel, PowerPoint, and Teams.</li>
                  <li>Managed documents, spreadsheets, and reporting workflows while collaborating across teams to improve digital productivity.</li>
                  <li>Gained practical exposure to professional software environments, communication standards, and team-based task execution.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs">
                  <strong className="text-slate-900">Client Projects (Freelance) / Saka Digital</strong>
                  <span className="text-slate-600 font-medium">Chennai, TN</span>
                </div>
                <div className="flex items-center justify-between text-xs italic text-slate-700">
                  <span>Digital Content Creator &amp; Designer</span>
                  <span>Ongoing</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-1">
                  <li>Designed social media graphics, posters, and UI assets for small business clients using Figma and Adobe Creative Cloud.</li>
                  <li>Edited short promotional videos for shops and small businesses to increase audience engagement.</li>
                  <li>Collaborated directly with clients to understand branding requirements, delivering project assets within defined schedules.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-4 resume-section">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-1.5">
              Projects
            </h2>
            <div className="space-y-2.5">
              <div>
                <div className="flex items-center justify-between text-xs">
                  <strong className="text-slate-900">Carry – Hotel Essentials Ordering Web Application</strong>
                  <span className="text-slate-600 font-medium">Personal Project</span>
                </div>
                <p className="text-[11px] italic text-slate-600">Python, Web Technologies, MySQL</p>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-0.5">
                  <li>Developed a web application enabling hotels to streamline orders for essential operational supplies including carry bags, sheets, rolls, and cups.</li>
                  <li>Structured distinct user and administrator workflows with a dedicated route for order processing and inventory views.</li>
                  <li>Live Demo: https://saikamlesh-git.github.io/Carry/ | Admin: https://saikamlesh-git.github.io/Carry/#/admin</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs">
                  <strong className="text-slate-900">Billing App</strong>
                  <span className="text-slate-600 font-medium">Personal Project</span>
                </div>
                <p className="text-[11px] italic text-slate-600">Python, Web Technologies, MySQL</p>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-0.5">
                  <li>Designed and built a billing application for hotel essentials delivery, managing product pricing, quantity calculation, and client invoice generation.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs">
                  <strong className="text-slate-900">Leave Approval System</strong>
                  <span className="text-slate-600 font-medium">Academic Project</span>
                </div>
                <p className="text-[11px] italic text-slate-600">Java, MySQL, HTML, CSS, REST APIs</p>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-0.5">
                  <li>Built a full-stack web application designed to automate employee leave requests, approval flows, and leave balance tracking.</li>
                  <li>Implemented secure authentication and role-based access control for employees and managers.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs">
                  <strong className="text-slate-900">Sculptor Cutting Machine with Built-in Water Pipe</strong>
                  <span className="text-slate-600 font-medium">Team Project – IAP</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-0.5">
                  <li>Designed and developed a sculptor cutting machine integrated with a water pipe system to drastically suppress dust particles during cutting, enhancing safety.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-4 resume-section">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-1.5">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
              <li><strong>Apache Spark</strong> – Databricks</li>
              <li><strong>Hadoop 101</strong> – IBM</li>
            </ul>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-950 border-t border-slate-800 text-xs gap-3 no-print">
          <span className="text-slate-400 text-center sm:text-left">
            Official Academic &amp; Professional Resume of Saikamlesh M
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={resumePdfUrl}
              download="Saikamlesh_M_Resume.pdf"
              onClick={handleDownload}
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-white font-semibold shadow-md shadow-brand-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                downloadState === 'success'
                  ? 'bg-emerald-600'
                  : 'bg-brand-600 hover:bg-brand-500'
              }`}
            >
              {downloadState === 'downloading' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : downloadState === 'success' ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {downloadState === 'downloading'
                  ? 'Downloading...'
                  : downloadState === 'success'
                  ? 'Downloaded!'
                  : 'Download Official PDF'}
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
