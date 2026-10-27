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
  FileCheck,
  Award
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { TimezoneClock } from '../components/TimezoneClock';
import { ContactForm } from '../components/ContactForm';
import { ProjectLightbox } from '../components/ProjectLightbox';

interface DesignOptionProps {
  onOpenResume: () => void;
}

export const DesignOptionB: React.FC<DesignOptionProps> = ({ onOpenResume }) => {
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
    <div className="min-h-screen bg-[#FAFAF9] text-[#1F2937] selection:bg-teal-700/15 selection:text-teal-900 font-sans-body relative overflow-x-hidden">
      {/* Top Bar Contract (Strict 3-zone layout) */}
      <header className="sticky top-0 z-30 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-8">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#hero"
            className="text-lg font-editorial font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-teal-800 transition-colors"
          >
            {PORTFOLIO_DATA.name}
          </a>

          {/* Zone 2: 4-5 Navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-600">
            <a href="#about" className="hover:text-teal-900 transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#services" className="hover:text-teal-900 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#skills" className="hover:text-teal-900 transition-colors whitespace-nowrap shrink-0">
              Skills
            </a>
            <a href="#projects" className="hover:text-teal-900 transition-colors whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#experience" className="hover:text-teal-900 transition-colors whitespace-nowrap shrink-0">
              Experience
            </a>
            <a href="#contact" className="hover:text-teal-900 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0F766E] rounded-md hover:bg-teal-800 transition-all shadow-xs whitespace-nowrap shrink-0"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container with generous editorial whitespace */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 space-y-28 md:space-y-36">
        {/* Section 1: Hero (Editorial broadsheet split) */}
        <section id="hero" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typography & Intent */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <TimezoneClock themeStyle="light" />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold tracking-tight text-stone-900 leading-[1.12] text-balance">
                  {PORTFOLIO_DATA.role}
                </h1>
                <p className="text-xl sm:text-2xl text-[#0F766E] font-medium tracking-tight font-editorial italic">
                  "{PORTFOLIO_DATA.oneLiner}"
                </p>
                <p className="text-base text-stone-600 leading-relaxed max-w-xl pt-2">
                  Precision data transcription, audit-ready spreadsheet systems in MS Excel and Google Sheets, and bespoke web platforms crafted for dependable small-business growth.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-7 py-3 rounded-md text-xs font-semibold text-white bg-[#0F766E] hover:bg-teal-800 shadow-sm transition-all transform active:scale-95 flex items-center gap-2"
                >
                  <span>Hire Me</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#projects"
                  className="px-7 py-3 rounded-md text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 transition-all"
                >
                  View Projects
                </a>
                <button
                  onClick={onOpenResume}
                  className="px-4 py-3 rounded-md text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Curriculum Vitae
                </button>
              </div>

              {/* Editorial Trust Separators */}
              <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-5 text-xs text-stone-500">
                <span>EST / PST Availability</span>
                <span className="text-stone-300" aria-hidden="true">/</span>
                <span>Strict Client Confidentiality</span>
                <span className="text-stone-300" aria-hidden="true">/</span>
                <span>On-Time Milestone Delivery</span>
              </div>
            </div>

            {/* Right Column: Editorial Portrait Showcase */}
            <div className="lg:col-span-5">
              <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-stone-100 border border-stone-100">
                  <img
                    src="/src/assets/images/zafir_ahmed_portrait_1793090797657.jpg"
                    alt="Zafir Ahmed portrait"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-editorial text-lg font-bold text-stone-900">
                      {PORTFOLIO_DATA.name}
                    </h3>
                    <span className="text-xs font-mono-numbers text-stone-500">Pakistan</span>
                  </div>
                  <p className="text-xs text-[#0F766E] font-medium">
                    Remote Data Entry Specialist & Web Developer
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    Direct US business hours coverage (EST/PST). Focused on verified data integrity and clean code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About */}
        <section id="about" className="scroll-mt-24 border-y border-stone-200 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] font-mono-numbers">
                About the Specialist
              </span>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900">
                Precision & Dependability
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-editorial">
                {PORTFOLIO_DATA.about}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Services (Cards) */}
        <section id="services" className="scroll-mt-24 space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] font-mono-numbers">
              Disciplines & Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900">
              Services Offered
            </h2>
            <p className="text-sm text-stone-600 max-w-2xl">
              Professional administrative and development services executed with rigorous validation checkpoints and transparent communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.services.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length];
              return (
                <div
                  key={service.id}
                  className="bg-white p-7 rounded-xl border border-stone-200 shadow-xs hover:border-[#0F766E]/50 transition-colors flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-numbers text-stone-400">
                        0{idx + 1}.
                      </span>
                      <Icon className="w-5 h-5 text-[#0F766E]" />
                    </div>
                    <div>
                      <h3 className="font-editorial text-lg font-bold text-stone-900">
                        {service.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mt-2.5">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 space-y-1.5">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="text-2xs text-stone-500 flex items-center gap-2">
                        <span className="text-teal-700">✓</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] font-mono-numbers">
              Expertise & Tooling
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900">
              Core Skills
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_DATA.skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-white text-stone-800 border border-stone-200 hover:border-[#0F766E] hover:text-[#0F766E] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Section 5: Projects */}
        <section id="projects" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] font-mono-numbers">
                Work Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900">
                Featured Work & Case Studies
              </h2>
              <p className="text-sm text-stone-600 max-w-xl">
                Demonstrated real-world deployments and digital stores.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PORTFOLIO_DATA.projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 bg-stone-100 overflow-hidden border-b border-stone-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500 font-mono-numbers">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-editorial text-xl font-bold text-stone-900 group-hover:text-[#0F766E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-2xs px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-mono-numbers"
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
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F766E] hover:text-teal-900"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-2xs text-stone-400 italic">
                      Etsy [Digital Store]
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Experience */}
        <section id="experience" className="scroll-mt-24 space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] font-mono-numbers">
              Chronicle
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-white p-7 rounded-xl border border-stone-200 shadow-xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-stone-100 pb-3">
                  <div>
                    <h3 className="font-editorial text-lg font-bold text-stone-900">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-medium text-[#0F766E]">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono-numbers text-stone-500 font-semibold">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed pt-1">
                  {exp.description}
                </p>

                <ul className="space-y-1 pt-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-2xs text-stone-500 flex items-start gap-2">
                      <span className="text-[#0F766E]">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Why Work With Me */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] font-mono-numbers">
              Foundational Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900">
              Why Work With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.whyWorkWithMe.map((point) => (
              <div
                key={point.id}
                className="p-7 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3"
              >
                <h3 className="font-editorial text-lg font-bold text-stone-900">
                  {point.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {point.shortDesc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Contact */}
        <section id="contact" className="scroll-mt-24 space-y-10 pt-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E] font-mono-numbers">
              Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900">
              Initiate Contact
            </h2>
            <p className="text-sm text-stone-600 max-w-xl">
              Discuss prospective data projects or small-business website development.
            </p>
          </div>

          <ContactForm
            onOpenResume={onOpenResume}
            themeStyle="light"
            accentBgClass="bg-[#0F766E] hover:bg-teal-800 text-white"
            accentTextClass="text-[#0F766E]"
            inputBgClass="bg-stone-50 border-stone-300 text-stone-900 focus:border-[#0F766E] focus:bg-white placeholder-stone-400"
          />
        </section>
      </main>

      {/* Section 9: Footer */}
      <footer className="border-t border-stone-200 bg-white py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="font-editorial font-bold text-stone-900">{PORTFOLIO_DATA.name}</span>
            <span aria-hidden="true">·</span>
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
        accentBgClass="bg-[#0F766E] hover:bg-teal-800"
        accentTextClass="text-[#0F766E]"
      />
    </div>
  );
};
