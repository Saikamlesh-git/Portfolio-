import React, { useState } from 'react';
import { certificatesData } from '../data/portfolioData';
import { 
  Award, 
  Sparkles, 
  ExternalLink, 
  Eye, 
  CheckCircle, 
  Flame, 
  Server, 
  X, 
  FileCheck, 
  ShieldCheck 
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-8 h-8 text-orange-400" />;
      case 'Server':
        return <Server className="w-8 h-8 text-blue-400" />;
      default:
        return <Award className="w-8 h-8 text-brand-400" />;
    }
  };

  return (
    <section id="certificates" className="py-24 bg-slate-900/60 dark:bg-slate-900/60 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-accent-cyan">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Specialized engineering and big data credentials verified through industry-leading technology platforms.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificatesData.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Certificate Header Banner */}
              <div className={`p-6 sm:p-7 bg-gradient-to-r ${cert.gradient} relative overflow-hidden`}>
                <div className="absolute -right-6 -bottom-6 opacity-20 pointer-events-none">
                  <Award className="w-32 h-32 text-white" />
                </div>

                <div className="flex items-center justify-between relative z-10 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/80 text-white border border-white/10 backdrop-blur-md">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight relative z-10">
                  {cert.title}
                </h3>
                <p className="text-xs text-white/90 font-medium tracking-wide mt-1 relative z-10">
                  {cert.badge}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-950/80 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Verified Credential</span>
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-xs font-semibold border border-slate-700 hover:border-brand-500/50 transition-all hover:scale-105"
                  >
                    <Eye className="w-3.5 h-3.5 text-brand-400" />
                    <span>View Certificate</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Certification Note */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>All certificates are linked to Saikamlesh M's verified academic and corporate profiles.</span>
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header Banner */}
            <div className="text-center pb-6 border-b border-slate-800">
              <div className="inline-flex p-3 rounded-2xl bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-3">
                <FileCheck className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest font-mono text-accent-cyan font-bold block mb-1">
                Certificate of Completion
              </span>
              <h3 className="text-2xl font-black text-white">
                {selectedCert.title}
              </h3>
              <p className="text-sm text-slate-300 font-medium mt-1">
                Issued by <strong className="text-white">{selectedCert.issuer}</strong>
              </p>
            </div>

            {/* Certificate Body Mockup */}
            <div className="my-6 p-6 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-10">
                <Award className="w-24 h-24 text-white" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-mono">
                Awarded To
              </p>
              <h4 className="text-xl font-bold text-white mb-2">
                Saikamlesh M
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {selectedCert.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedCert.tags.map((t, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                <CheckCircle className="w-3.5 h-3.5" /> Certified &amp; Verified
              </span>
              <div className="flex items-center gap-2">
                {selectedCert.pdfUrl && (
                  <a
                    href={getAssetUrl(selectedCert.pdfUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Open / Download PDF</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
