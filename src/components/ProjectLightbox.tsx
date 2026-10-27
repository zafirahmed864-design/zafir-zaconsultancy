import React, { useEffect } from 'react';
import { X, ExternalLink, Globe } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  accentBgClass?: string;
  accentTextClass?: string;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  onClose,
  accentBgClass = 'bg-blue-600 hover:bg-blue-500',
  accentTextClass = 'text-blue-400',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-zinc-950 text-white rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/60">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
              {project.category}
            </span>
            <span className="text-zinc-600" aria-hidden="true">·</span>
            <span className="text-xs font-mono-numbers text-zinc-400">{project.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close project view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Visual Image in Browser Chrome */}
          <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl">
            {/* Browser top header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-zinc-400 font-mono-numbers text-2xs truncate px-3 py-1 rounded bg-black/60 border border-zinc-800 max-w-sm">
                {project.isPlaceholder ? 'zafirgraceco.etsy.com' : project.url}
              </div>
              <span className="text-teal-400 text-2xs font-semibold">Live Site</span>
            </div>

            <div className="relative aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  {project.title}
                </h2>
                {project.themeName && (
                  <p className="text-xs text-teal-400 font-medium mt-1">
                    Original Theme: {project.themeName}
                  </p>
                )}
              </div>

              <div>
                {!project.isPlaceholder ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 shadow-lg shadow-teal-600/30 transition-transform active:scale-95"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Open Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-amber-300 bg-amber-950/40 border border-amber-800/50">
                    <span>Etsy Shop [Digital Products]</span>
                  </span>
                )}
              </div>
            </div>

            {/* Original Theme Palette Swatches */}
            {project.themeColors && (
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <span className="text-2xs font-bold uppercase tracking-wider text-zinc-400 block">
                  Original Website Brand &amp; Color Theme
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {project.themeColors.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/50 border border-zinc-800 text-xs font-mono-numbers">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: color }} />
                      <span className="text-zinc-300">{color}</span>
                    </div>
                  ))}
                  <span className="text-2xs text-zinc-400 ml-2">
                    {project.themeName}
                  </span>
                </div>
              </div>
            )}

            <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                Technologies &amp; Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3.5 border-t border-zinc-800/80 bg-zinc-900/60 flex items-center justify-between text-xs text-zinc-400">
          <span>Client Proof & Live Deliverable</span>
          <button
            onClick={onClose}
            className="text-zinc-300 hover:text-white font-medium"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
