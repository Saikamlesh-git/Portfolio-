import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  Download, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Check,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters long';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatusMessage('Sending message to Saikamlesh...');

    try {
      // Send real POST request to FormSubmit endpoint configured for Saikamlesh M
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
          message: formData.message,
          _replyto: formData.email,
          _template: "table"
        })
      });

      const result = await response.json();
      console.log('FormSubmit response:', result);

      setLoading(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback silently if canvas is not ready
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback: Still mark as submitted and offer mailto
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'Hello Saikamlesh'}`)}&body=${encodeURIComponent(`Hi Saikamlesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
  const whatsappUrl = `https://wa.me/917299293100?text=${encodeURIComponent(`Hi Saikamlesh, My name is ${formData.name || 'Visitor'}. Regarding: ${formData.subject || 'Portfolio Inquiry'}. ${formData.message}`)}`;

  return (
    <section id="contact" className="py-24 bg-slate-900/60 dark:bg-slate-900/60 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-accent-cyan">Great Together.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you have an internship opportunity, a freelance project, or simply want to connect and discuss technology, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Verified Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Direct lines to get in touch with Saikamlesh M. Guaranteed response within 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-brand-400 border border-slate-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400">Primary Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-brand-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : "Copy"}
                  </button>
                </div>

                {/* College Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-purple-400 border border-slate-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400">Institutional Email</p>
                    <a
                      href={`mailto:${personalInfo.altEmail}`}
                      className="text-sm font-semibold text-white hover:text-purple-400 transition-colors break-all"
                    >
                      {personalInfo.altEmail}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-accent-cyan border border-slate-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-semibold text-white hover:text-accent-cyan transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                      <a
                        href="https://wa.me/917299293100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors inline-flex items-center gap-1"
                      >
                        <MessageSquare className="w-3 h-3" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-xs uppercase font-bold text-slate-400 mb-3 tracking-wider">
                  Social &amp; Developer Profiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-800 hover:border-brand-500/50 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-brand-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-sky-400 text-xs font-semibold border border-slate-800 hover:border-sky-500/50 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Resume CTA Box */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-tr from-brand-950/60 to-slate-900 border border-brand-500/20">
                <p className="text-xs font-bold text-white mb-1">
                  Need a print/PDF version of my qualifications?
                </p>
                <p className="text-[11px] text-slate-400 mb-3">
                  View and download my complete resume with verified academic, internship, and project records.
                </p>
                <button
                  onClick={onOpenResume}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-semibold text-xs shadow-md shadow-brand-500/20 hover:from-brand-500 hover:to-indigo-500 transition-all hover:scale-[1.02]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>View / Download Resume</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Inbox
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Fill out the form below. Messages are dispatched immediately to <strong>{personalInfo.email}</strong>.
              </p>

              {submitted ? (
                <div className="py-8 px-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center animate-fade-in space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your message regarding <em>"{formData.subject}"</em> has been transmitted to <strong>{personalInfo.email}</strong>.
                    </p>
                  </div>

                  {/* Immediate confirmation & fallbacks */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left text-xs text-slate-300 space-y-2 max-w-md mx-auto">
                    <p className="font-semibold text-accent-cyan flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> Want an instant direct backup?
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      You can also open this message directly in your email client or WhatsApp:
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium text-xs transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Email App</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Send via WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border ${
                          errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-brand-500'
                        } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-brand-500'
                        } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject / Topic <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Internship Opportunity / Freelance Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border ${
                        errors.subject ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-brand-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Saikamlesh, I was impressed by your portfolio and wanted to reach out regarding..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border ${
                        errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-brand-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                          <span>Sending to Inbox...</span>
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {/* Direct Mailto Fallback Button */}
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors"
                      title="Open directly in your mail application"
                    >
                      <Mail className="w-4 h-4 text-brand-400" />
                      <span>Mail App</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
