import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, FileDown, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactFormProps {
  onOpenResume: () => void;
  accentBgClass?: string;
  accentBorderClass?: string;
  accentTextClass?: string;
  inputBgClass?: string;
  inputTextClass?: string;
  themeStyle?: 'dark' | 'light' | 'emerald';
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onOpenResume,
  accentBgClass = 'bg-blue-600 hover:bg-blue-500 text-white',
  accentBorderClass = 'border-blue-500/30',
  accentTextClass = 'text-blue-400',
  inputBgClass = 'bg-slate-900/60 border-slate-700/60 text-slate-100 placeholder-slate-500',
  inputTextClass = 'text-slate-100',
  themeStyle = 'dark',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name or business name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your project or tasks.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please include at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Also prepare mailto fallback link
      const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Zafir,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}\n\nSent from portfolio contact form.`
      );
      window.location.href = `mailto:${PORTFOLIO_DATA.email}?subject=${subject}&body=${body}`;
    }, 700);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Contact Info, Email & Profiles */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <h3 className={`text-xl font-bold tracking-tight mb-2 ${themeStyle === 'light' ? 'text-stone-900' : 'text-white'}`}>
            Let's discuss your project or operations
          </h3>
          <p className={`text-sm leading-relaxed ${themeStyle === 'light' ? 'text-stone-600' : 'text-zinc-400'}`}>
            Available for ongoing virtual assistance, high-accuracy data entry, catalog updates, spreadsheet automation, and custom small-business web development.
          </p>
        </div>

        {/* Direct Email Card */}
        <div className={`p-4 rounded-xl border ${themeStyle === 'light' ? 'bg-white border-stone-200 shadow-xs' : 'bg-zinc-900/60 border-zinc-800'}`}>
          <span className="text-2xs font-bold uppercase tracking-wider text-zinc-500 block mb-1">
            Direct Email Inquiries
          </span>
          <div className="flex items-center justify-between gap-3">
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className={`text-sm font-semibold truncate hover:underline ${accentTextClass}`}
            >
              {PORTFOLIO_DATA.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg border transition-colors ${
                copiedEmail
                  ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800'
                  : themeStyle === 'light'
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-200'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700'
              }`}
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Download CV Action */}
        <div className={`p-4 rounded-xl border ${themeStyle === 'light' ? 'bg-stone-50 border-stone-200' : 'bg-zinc-900/40 border-zinc-800'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className={`text-xs font-bold block ${themeStyle === 'light' ? 'text-stone-800' : 'text-zinc-200'}`}>
                Curriculum Vitae (CV)
              </span>
              <span className="text-2xs text-zinc-500">
                Detailed work history, technical proficiencies & projects
              </span>
            </div>
            <button
              onClick={onOpenResume}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition-transform active:scale-95 whitespace-nowrap ${accentBgClass}`}
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Placeholders for LinkedIn and Pavago */}
        <div className="space-y-2 pt-2">
          <span className="text-2xs font-bold uppercase tracking-wider text-zinc-500 block">
            Professional Profile Placeholders
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <a
              href={PORTFOLIO_DATA.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className={`flex items-center justify-between p-2.5 rounded-lg border transition-colors ${
                themeStyle === 'light'
                  ? 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
              }`}
            >
              <span className="font-medium">LinkedIn Profile</span>
              <span className="text-2xs text-zinc-400 italic flex items-center gap-1">
                [Placeholder] <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            <a
              href={PORTFOLIO_DATA.links.pavago}
              target="_blank"
              rel="noreferrer noopener"
              className={`flex items-center justify-between p-2.5 rounded-lg border transition-colors ${
                themeStyle === 'light'
                  ? 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
              }`}
            >
              <span className="font-medium">Pavago Profile</span>
              <span className="text-2xs text-zinc-400 italic flex items-center gap-1">
                [Placeholder] <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="lg:col-span-7">
        <div
          className={`p-6 sm:p-8 rounded-2xl border ${
            themeStyle === 'light'
              ? 'bg-white border-stone-200 shadow-sm'
              : themeStyle === 'emerald'
              ? 'bg-zinc-950 border-zinc-800'
              : 'bg-slate-900/70 border-white/10 backdrop-blur-md'
          }`}
        >
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className={`w-12 h-12 mx-auto ${accentTextClass}`} />
              <h4 className={`text-xl font-bold ${themeStyle === 'light' ? 'text-stone-900' : 'text-white'}`}>
                Message Sent Successfully
              </h4>
              <p className={`text-sm max-w-md mx-auto ${themeStyle === 'light' ? 'text-stone-600' : 'text-zinc-400'}`}>
                Thank you, {formData.name}. Your inquiry has been routed to <strong>{PORTFOLIO_DATA.email}</strong>. Zafir will reply promptly within your working hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg ${accentBgClass}`}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className={`block text-xs font-semibold mb-1.5 ${
                    themeStyle === 'light' ? 'text-stone-700' : 'text-zinc-300'
                  }`}
                >
                  Your Name / Company *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Sarah Jenkins (Acme Realty)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-hidden transition-all focus:ring-2 ${
                    errors.name ? 'border-red-500' : ''
                  } ${inputBgClass}`}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className={`block text-xs font-semibold mb-1.5 ${
                    themeStyle === 'light' ? 'text-stone-700' : 'text-zinc-300'
                  }`}
                >
                  Your Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="e.g. s.jenkins@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-hidden transition-all focus:ring-2 ${
                    errors.email ? 'border-red-500' : ''
                  } ${inputBgClass}`}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className={`block text-xs font-semibold mb-1.5 ${
                    themeStyle === 'light' ? 'text-stone-700' : 'text-zinc-300'
                  }`}
                >
                  Project Details or Task Scope *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Describe your data entry requirements, spreadsheets needing formatting, catalog volume, or website ideas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-hidden transition-all focus:ring-2 resize-y ${
                    errors.message ? 'border-red-500' : ''
                  } ${inputBgClass}`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-2xs text-zinc-500">
                  Response within 4–12 hours (EST/PST timezone overlap)
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold shadow-md transition-all active:scale-95 disabled:opacity-50 ${accentBgClass}`}
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
