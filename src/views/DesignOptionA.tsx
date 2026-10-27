import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Database, 
  Layout, 
  Headphones, 
  Code2, 
  Wrench, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  ExternalLink, 
  ArrowRight,
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

export const DesignOptionA: React.FC<DesignOptionProps> = ({ onOpenResume }) => {
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
    <div className="min-h-screen bg-[#0B1220] text-[#F8FAFC] selection:bg-blue-500/30 selection:text-blue-100 font-sans-body relative overflow-x-hidden">
      {/* Ambient Electric Blue Gradients */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/15 via-blue-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-[30%] -right-40 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] -z-10"
        aria-hidden="true"
      />

      {/* Top Bar Contract (Strict 3-zone layout) */}
      <header className="sticky top-0 z-30 bg-[#0B1220]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#hero"
            className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-blue-400 transition-colors"
          >
            {PORTFOLIO_DATA.name}
          </a>

          {/* Zone 2: 4-5 Navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#skills" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 whitespace-nowrap shrink-0"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-24 md:space-y-32">
        {/* Section 1: Hero */}
        <section id="hero" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Typographic Hierarchy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <TimezoneClock themeStyle="dark" />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
                  {PORTFOLIO_DATA.role}
                </h1>
                <p className="text-xl sm:text-2xl text-blue-400 font-medium tracking-tight">
                  {PORTFOLIO_DATA.oneLiner}
                </p>
                <p className="text-base text-slate-300 leading-relaxed max-w-2xl pt-2">
                  Partnering with US and international clients to provide dependable product catalog entry, error-free spreadsheet modeling, and responsive modern web development.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all transform active:scale-95 flex items-center gap-2"
                >
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  View Projects
                </a>
                <button
                  onClick={onOpenResume}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Preview CV
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                  EST / PST Active Hours
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                  100% Confidential
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                  Direct Founder Communication
                </span>
              </div>
            </div>

            {/* Right Column: Glass Card with Portrait & Key Facts */}
            <div className="lg:col-span-5">
              <div className="relative p-2 rounded-3xl bg-gradient-to-b from-blue-500/20 via-white/5 to-transparent border border-white/10 shadow-2xl">
                <div className="p-6 rounded-2xl glass-panel space-y-6">
                  <div className="relative aspect-square max-w-[280px] mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-inner">
                    <img
                      src="/src/assets/images/zafir_ahmed_portrait_1793090797657.jpg"
                      alt="Zafir Ahmed portrait"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="text-center space-y-1">
                    <h3 className="text-lg font-bold text-white">{PORTFOLIO_DATA.name}</h3>
                    <p className="text-xs text-blue-400 font-medium">Remote Specialist & Developer</p>
                    <p className="text-xs text-slate-400">{PORTFOLIO_DATA.location}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-2xs text-slate-400 block uppercase font-mono-numbers">Core Focus</span>
                      <span className="text-xs font-semibold text-slate-200">Data & Development</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-2xs text-slate-400 block uppercase font-mono-numbers">Availability</span>
                      <span className="text-xs font-semibold text-emerald-400">US Timezones (EST/PST)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About */}
        <section id="about" className="scroll-mt-24">
          <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono-numbers">
                About Zafir Ahmed
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Reliable remote execution for growing businesses
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.about}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Services (Cards) */}
        <section id="services" className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono-numbers">
              Core Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Services Offered
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              From high-accuracy database audits to production-grade responsive websites, each service is delivered with confidentiality and strict attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div
                  key={service.id}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-200 flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 space-y-1.5">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-2xs text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-blue-400" aria-hidden="true" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Skills (Chips) */}
        <section id="skills" className="scroll-mt-24 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono-numbers">
              Technical Proficiencies
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Skills & Tooling
            </h2>
            <p className="text-sm text-slate-400">
              Verified operational competencies across spreadsheet management, virtual assistance, and web engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {PORTFOLIO_DATA.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.04] text-slate-200 border border-white/10 hover:border-blue-500/50 hover:bg-blue-950/30 hover:text-blue-300 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Section 5: Projects (Cards with link buttons) */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono-numbers">
                Work Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Real production client websites, digital platforms, and technical publications. Click any card to inspect full deliverables.
              </p>
            </div>
            <span className="text-xs text-slate-400 font-mono-numbers">
              {PORTFOLIO_DATA.projects.length} Verified Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group p-5 rounded-2xl glass-panel glass-panel-hover transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-mono-numbers">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-2xs px-2 py-0.5 rounded bg-white/5 text-slate-400 font-mono-numbers"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!project.isPlaceholder ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-2xs text-amber-300/80 italic font-medium">
                      Etsy [Digital Store]
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Experience (Timeline) */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono-numbers">
              Professional Timeline
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Consistent track record across independent client consulting, real estate operational management, and rigorous industrial equipment operations.
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-4 border-[#0B1220] group-hover:scale-125 transition-transform"
                  aria-hidden="true"
                />

                <div className="p-6 rounded-2xl glass-panel space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-mono-numbers text-blue-400 font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 font-medium flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 pt-2">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-2xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Why work with me */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono-numbers">
              Client Value
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Why Work With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.whyWorkWithMe.map((point, idx) => {
              const icons = [CheckCircle, ShieldCheck, Clock];
              const PointIcon = icons[idx % icons.length];
              return (
                <div
                  key={point.id}
                  className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3 hover:border-blue-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <PointIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{point.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {point.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 8: Contact */}
        <section id="contact" className="scroll-mt-24 space-y-8 pt-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono-numbers">
              Direct Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Send a project brief or schedule recurring operational data support.
            </p>
          </div>

          <ContactForm
            onOpenResume={onOpenResume}
            themeStyle="dark"
            accentBgClass="bg-blue-600 hover:bg-blue-500 text-white"
            accentTextClass="text-blue-400"
            inputBgClass="bg-slate-900/80 border-slate-700/80 text-white focus:border-blue-500 placeholder-slate-500"
          />
        </section>
      </main>

      {/* Section 9: Footer with copyright */}
      <footer className="border-t border-white/10 bg-[#0B1220]/90 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{PORTFOLIO_DATA.name}</span>
            <span aria-hidden="true">·</span>
            <span>{PORTFOLIO_DATA.role}</span>
          </div>
          <div>
            © 2026 {PORTFOLIO_DATA.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Project Lightbox */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        accentBgClass="bg-blue-600 hover:bg-blue-500"
        accentTextClass="text-blue-400"
      />
    </div>
  );
};
