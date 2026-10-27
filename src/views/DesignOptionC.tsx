import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Database, 
  Layout, 
  Headphones, 
  Code2, 
  Wrench, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ExternalLink, 
  ArrowUpRight,
  Briefcase,
  FileCheck
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { TimezoneClock } from '../components/TimezoneClock';
import { ContactForm } from '../components/ContactForm';
import { ProjectLightbox } from '../components/ProjectLightbox';

interface DesignOptionProps {
  onOpenResume: () => void;
}

export const DesignOptionC: React.FC<DesignOptionProps> = ({ onOpenResume }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const serviceIcons = [
    Database,
    FileSpreadsheet,
    FileCheck,
    Headphones,
    Layout,
    Wrench,
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-emerald-500/30 selection:text-emerald-200 font-sans-body relative overflow-x-hidden">
      {/* Top Bar Contract (Strict 3-zone layout) */}
      <header className="sticky top-0 z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-8">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#hero"
            className="text-lg font-black tracking-tight text-white uppercase whitespace-nowrap shrink-0 hover:text-emerald-400 transition-colors"
          >
            {PORTFOLIO_DATA.name}
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#services" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Experience
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#10B981] rounded-none hover:bg-emerald-400 transition-all whitespace-nowrap shrink-0"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 space-y-28 md:space-y-36">
        {/* Section 1: Hero (Bold, punchy, oversized display) */}
        <section id="hero" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <TimezoneClock themeStyle="emerald" />
              <span className="text-xs font-mono-numbers text-zinc-500">
                Remote Freelancer · Pakistan · EST/PST Overlap
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] uppercase">
                Data Entry <br />
                <span className="text-zinc-500">&amp;</span> <span className="text-[#10B981]">Web Dev</span>
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {PORTFOLIO_DATA.oneLiner}
                  </p>
                  <p className="text-base text-zinc-400 max-w-xl leading-relaxed">
                    Zero fluff. Verified data spreadsheets, accurate product catalogs, and high-performance websites built for small business owners and US teams.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href="#contact"
                      className="px-8 py-3.5 text-xs font-black uppercase tracking-wider text-black bg-[#10B981] hover:bg-emerald-400 transition-all flex items-center gap-2"
                    >
                      <span>Hire Me</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href="#projects"
                      className="px-8 py-3.5 text-xs font-black uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all"
                    >
                      View Projects
                    </a>
                    <button
                      onClick={onOpenResume}
                      className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                    >
                      Inspect CV
                    </button>
                  </div>
                </div>

                {/* Right Hero Image Card */}
                <div className="lg:col-span-5">
                  <div className="relative border-2 border-zinc-800 bg-zinc-950 p-3">
                    <div className="aspect-square bg-zinc-900 overflow-hidden">
                      <img
                        src="/src/assets/images/zafir_ahmed_portrait_1793090797657.jpg"
                        alt="Zafir Ahmed portrait"
                        className="w-full h-full object-cover contrast-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-3 flex items-center justify-between text-xs font-mono-numbers text-zinc-400">
                      <span className="text-white font-bold">{PORTFOLIO_DATA.name}</span>
                      <span className="text-[#10B981]">Available Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About */}
        <section id="about" className="scroll-mt-24 border-t-2 border-zinc-800 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#10B981] font-mono-numbers">
                About / Statement
              </span>
              <h2 className="text-2xl font-black uppercase text-white mt-2">
                Operational Discipline
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl sm:text-2xl font-medium text-zinc-200 leading-snug">
                {PORTFOLIO_DATA.about}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Services */}
        <section id="services" className="scroll-mt-24 space-y-10 border-t-2 border-zinc-800 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#10B981] font-mono-numbers">
                Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                Services
              </h2>
            </div>
            <span className="text-xs font-mono-numbers text-zinc-500">
              6 Core Competencies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.services.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length];
              return (
                <div
                  key={service.id}
                  className="p-7 bg-zinc-950 border border-zinc-800 hover:border-[#10B981] transition-colors flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-numbers text-zinc-500 font-bold">
                        [0{idx + 1}]
                      </span>
                      <Icon className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black uppercase text-white">
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 space-y-1.5">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="text-2xs font-mono-numbers text-zinc-400 flex items-center gap-2">
                        <span className="text-[#10B981]">/</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Skills */}
        <section id="skills" className="scroll-mt-24 space-y-8 border-t-2 border-zinc-800 pt-16">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981] font-mono-numbers">
              Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              Skills & Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {PORTFOLIO_DATA.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-[#10B981] hover:text-[#10B981] transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Section 5: Projects */}
        <section id="projects" className="scroll-mt-24 space-y-10 border-t-2 border-zinc-800 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#10B981] font-mono-numbers">
                Proof
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                Selected Projects
              </h2>
            </div>
            <span className="text-xs font-mono-numbers text-zinc-500">
              Direct Live Links Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-zinc-950 border border-zinc-800 hover:border-[#10B981] transition-all cursor-pointer p-6 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="relative aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-numbers text-zinc-500 mb-1">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-black uppercase text-white group-hover:text-[#10B981] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-2xs px-2 py-0.5 bg-zinc-900 text-zinc-400 font-mono-numbers">
                        {t}
                      </span>
                    ))}
                  </div>

                  {!project.isPlaceholder ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#10B981] hover:underline"
                    >
                      <span>Open Link</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-2xs text-amber-400/90 font-mono-numbers">
                      Etsy [Digital Store]
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Experience */}
        <section id="experience" className="scroll-mt-24 space-y-10 border-t-2 border-zinc-800 pt-16">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981] font-mono-numbers">
              History
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              Experience
            </h2>
          </div>

          <div className="space-y-6">
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div
                key={exp.id}
                className="p-7 bg-zinc-950 border border-zinc-800 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-zinc-900 pb-3">
                  <div>
                    <h3 className="text-base font-black uppercase text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono-numbers text-[#10B981]">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono-numbers text-zinc-400">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                  {exp.description}
                </p>

                <div className="space-y-1 pt-1">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="text-2xs text-zinc-400 flex items-start gap-2 font-mono-numbers">
                      <span className="text-[#10B981]">/</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Why Work With Me */}
        <section className="space-y-8 border-t-2 border-zinc-800 pt-16">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981] font-mono-numbers">
              Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              Why Work With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.whyWorkWithMe.map((point) => (
              <div
                key={point.id}
                className="p-6 bg-zinc-950 border border-zinc-800 space-y-3 hover:border-[#10B981] transition-colors"
              >
                <h3 className="text-lg font-black uppercase text-white">
                  {point.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {point.shortDesc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Contact */}
        <section id="contact" className="scroll-mt-24 space-y-10 border-t-2 border-zinc-800 pt-16">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981] font-mono-numbers">
              Direct Channel
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              Contact
            </h2>
          </div>

          <ContactForm
            onOpenResume={onOpenResume}
            themeStyle="emerald"
            accentBgClass="bg-[#10B981] hover:bg-emerald-400 text-black font-black uppercase"
            accentTextClass="text-[#10B981]"
            inputBgClass="bg-zinc-900 border-zinc-800 text-white focus:border-[#10B981] placeholder-zinc-500 rounded-none"
          />
        </section>
      </main>

      {/* Section 9: Footer */}
      <footer className="border-t border-zinc-900 bg-black py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono-numbers">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white uppercase">{PORTFOLIO_DATA.name}</span>
            <span>/</span>
            <span>{PORTFOLIO_DATA.role}</span>
          </div>
          <div>
            © 2026 {PORTFOLIO_DATA.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        accentBgClass="bg-[#10B981] hover:bg-emerald-400 text-black font-bold uppercase"
        accentTextClass="text-[#10B981]"
      />
    </div>
  );
};
