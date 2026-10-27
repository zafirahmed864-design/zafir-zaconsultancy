import React, { useEffect } from 'react';
import { X, Printer, Mail, MapPin, Clock, Download, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  accentColor?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white text-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200"
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum Vitae of Zafir Ahmed"
      >
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-zinc-50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-zinc-800">Curriculum Vitae Preview</span>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-200 text-zinc-700 font-mono-numbers">2026 Edition</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal CV Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-zinc-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-zinc-300 shrink-0 shadow-sm bg-zinc-100">
                  <img
                    src={PORTFOLIO_DATA.profileImage}
                    alt={PORTFOLIO_DATA.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                    {PORTFOLIO_DATA.name}
                  </h1>
                  <p className="text-sm font-semibold text-teal-700 mt-0.5">
                    {PORTFOLIO_DATA.role}
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    "{PORTFOLIO_DATA.oneLiner}"
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-xs text-zinc-600 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-zinc-900 underline font-medium">
                    {PORTFOLIO_DATA.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{PORTFOLIO_DATA.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{PORTFOLIO_DATA.timezone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {PORTFOLIO_DATA.about}
            </p>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-zinc-400 uppercase mb-3">
              Core Technical & Operational Skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {PORTFOLIO_DATA.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-zinc-400 uppercase mb-4">
              Work Experience
            </h2>
            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-zinc-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-zinc-900">{exp.role}</h3>
                    <span className="text-xs font-mono-numbers text-zinc-500">{exp.period}</span>
                  </div>
                  <p className="text-xs font-medium text-zinc-600 mb-2">{exp.company}</p>
                  <p className="text-xs text-zinc-700 leading-relaxed mb-2">{exp.description}</p>
                  <ul className="list-disc list-inside text-xs text-zinc-600 space-y-1">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-zinc-400 uppercase mb-3">
              Selected Projects & Portfolio Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/50 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900">{proj.title}</span>
                    <span className="text-2xs font-mono-numbers text-zinc-400">{proj.year}</span>
                  </div>
                  <p className="text-xs text-zinc-600 line-clamp-2">{proj.description}</p>
                  <div className="pt-1">
                    {!proj.isPlaceholder ? (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <span>{proj.url.replace('https://', '')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-2xs text-zinc-400 italic">Etsy Shop [Digital Products]</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Work With Me */}
          <div className="pt-2 border-t border-zinc-100">
            <h2 className="text-xs font-bold tracking-wider text-zinc-400 uppercase mb-3">
              Value Proposition & Client Commitments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PORTFOLIO_DATA.whyWorkWithMe.map((item) => (
                <div key={item.id} className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <h3 className="text-xs font-bold text-zinc-900 mb-1">{item.title}</h3>
                  <p className="text-2xs text-zinc-600 leading-relaxed">{item.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-zinc-100 bg-zinc-50 flex items-center justify-between text-xs text-zinc-500 print:hidden">
          <span>Direct Inquiries: zafirahmed864@gmail.com</span>
          <button
            onClick={onClose}
            className="px-3 py-1 font-medium text-zinc-700 hover:text-zinc-900"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
