import React, { useState, useEffect } from 'react';
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
  Check,
  UserCheck,
  Menu,
  X,
  Users,
  Building2,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { TimezoneClock } from './TimezoneClock';
import { ContactForm } from './ContactForm';
import { ProjectLightbox } from './ProjectLightbox';

interface UnifiedPortfolioProps {
  onOpenResume: () => void;
}

export const UnifiedPortfolio: React.FC<UnifiedPortfolioProps> = ({ onOpenResume }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const serviceIcons = [
    Database,
    FileSpreadsheet,
    FileCheck,
    Headphones,
    Layout,
    Wrench,
  ];

  // Scrollspy to accurately detect and highlight the active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const item = navLinks[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080E1A] text-[#F8FAFC] selection:bg-teal-500/30 selection:text-teal-200 font-sans-body relative overflow-x-hidden">
      {/* Dynamic Ambient Background Gradients (Navy, Teal & Red) */}
      <div
        className="pointer-events-none fixed top-0 left-1/4 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-blue-900/25 via-teal-900/15 to-transparent blur-[130px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-[35%] -right-20 w-[600px] h-[600px] bg-teal-500/10 blur-[150px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-[10%] left-[-100px] w-[500px] h-[500px] bg-red-600/10 blur-[160px] -z-10"
        aria-hidden="true"
      />

      {/* FIXED TOP NAVIGATION BAR: Stays pinned across EVERY section, always clickable */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#080E1A]/95 backdrop-blur-md border-b border-[#1E2D4A] shadow-lg shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark (Clickable Home) */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 group-hover:bg-teal-400 transition-colors" />
            <span className="group-hover:text-teal-300 transition-colors">{PORTFOLIO_DATA.name}</span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((nav) => {
              const isActive = activeSection === nav.id;
              return (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  onClick={(e) => scrollToSection(e, nav.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-white bg-teal-500/20 border border-teal-500/50 shadow-xs shadow-teal-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {nav.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: CTA & Mobile Hamburger Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-red-600 rounded-xl hover:bg-red-500 transition-all shadow-md shadow-red-600/30 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Hire Me
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white md:hidden rounded-lg bg-[#0D1527] border border-[#1E2D4A] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1E2D4A] bg-[#080E1A]/98 backdrop-blur-xl px-4 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((nav) => {
              const isActive = activeSection === nav.id;
              return (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  onClick={(e) => scrollToSection(e, nav.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-teal-400 bg-teal-500/15 font-bold border border-teal-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{nav.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />}
                </a>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content with top padding to account for fixed navbar */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 space-y-24 md:space-y-32">
        {/* Section 1: Hero */}
        <section id="hero" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Bio & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <TimezoneClock themeStyle="dark" />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-950/40 text-red-400 border border-red-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                  Available for Remote Work
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                  {PORTFOLIO_DATA.role}
                </h1>
                <p className="text-xl sm:text-2xl text-teal-400 font-medium tracking-tight">
                  {PORTFOLIO_DATA.oneLiner}
                </p>
                <p className="text-base text-slate-300 leading-relaxed max-w-2xl pt-1">
                  Accurate, confidential, and always on time. Providing expert product catalog management, spreadsheet cleaning in MS Excel & Google Sheets, and responsive, fast-loading web platforms for US business owners and remote clients.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 shadow-xl shadow-red-600/30 transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-teal-300 bg-[#0E1A33] hover:bg-[#15264A] border border-teal-500/40 hover:border-teal-400 transition-all cursor-pointer"
                >
                  View Projects
                </a>
                <button
                  onClick={onOpenResume}
                  className="px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Download CV
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-[#1E2D4A] flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  Direct US EST/PST Overlap
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Accuracy-First Standard
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  100% Confidential
                </span>
              </div>
            </div>

            {/* Right Column: Hero Showcase featuring User's Professional Consultancy Meeting Image */}
            <div className="lg:col-span-5">
              <div className="relative p-2 rounded-3xl bg-gradient-to-b from-teal-500/25 via-blue-600/15 to-red-500/10 border border-[#1E2D4A] shadow-2xl">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0D1527] border border-[#1E2D4A]/60 space-y-4">
                  {/* Executive Consultancy Meeting Image */}
                  <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-[#080E1A] border border-[#1E2D4A] group shadow-inner">
                    <img
                      src={PORTFOLIO_DATA.consultancyMeetingImage}
                      alt="Zafir Ahmed conducting professional consultancy meeting at executive desk"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080E1A]/85 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                    {/* Badge inside picture */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#080E1A]/90 border border-teal-500/50 text-teal-300 backdrop-blur-md">
                        <Users className="w-3.5 h-3.5 text-teal-400" />
                        <span className="font-semibold text-2xs">Client Meeting · In Session</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-2xs font-mono-numbers bg-red-500/20 text-red-300 border border-red-500/40">
                        ZA Consultancy
                      </span>
                    </div>
                  </div>

                  {/* Profile info lockup with official portrait avatar */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-teal-400/80 shrink-0 shadow-md">
                        <img
                          src={PORTFOLIO_DATA.profileImage}
                          alt="Zafir Ahmed official portrait"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-teal-400 border-2 border-[#0D1527] rounded-full" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>{PORTFOLIO_DATA.name}</span>
                          <UserCheck className="w-3.5 h-3.5 text-teal-400" />
                        </h3>
                        <p className="text-xs text-teal-400 font-medium">{PORTFOLIO_DATA.role}</p>
                        <p className="text-2xs text-slate-400">{PORTFOLIO_DATA.location}</p>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      onClick={(e) => scrollToSection(e, 'contact')}
                      className="hidden sm:inline-flex items-center gap-1 text-2xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
                    >
                      <span>Inquire</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Quick Status Strip */}
                  <div className="grid grid-cols-2 gap-2 text-left pt-1">
                    <div className="p-2.5 rounded-xl bg-[#080E1A] border border-[#1E2D4A]">
                      <span className="text-2xs text-slate-400 block font-mono-numbers">Core Scope</span>
                      <span className="text-xs font-semibold text-white">Data &amp; Web Dev</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#080E1A] border border-[#1E2D4A]">
                      <span className="text-2xs text-slate-400 block font-mono-numbers">Active Schedule</span>
                      <span className="text-xs font-semibold text-teal-400">US EST / PST Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About */}
        <section id="about" className="scroll-mt-24">
          <div className="p-6 sm:p-12 rounded-3xl bg-[#0D1527] border border-[#1E2D4A] relative overflow-hidden space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono-numbers">
                About Zafir Ahmed
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Reliable remote data management and clean web development
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.about}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#080E1A] border border-[#1E2D4A]">
                    <span className="text-xs font-bold text-white block mb-0.5">Spreadsheets &amp; Data</span>
                    <span className="text-2xs text-slate-400">MS Excel, Google Sheets, deduplication &amp; catalog structuring</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#080E1A] border border-[#1E2D4A]">
                    <span className="text-xs font-bold text-white block mb-0.5">Web Engineering</span>
                    <span className="text-2xs text-slate-400">Responsive, fast-loading, conversion-focused websites</span>
                  </div>
                </div>
              </div>

              {/* Authentic Profile Portrait Snapshot */}
              <div className="lg:col-span-5 space-y-3">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#080E1A] border border-[#1E2D4A] group shadow-lg">
                  <img
                    src={PORTFOLIO_DATA.profileImage}
                    alt="Zafir Ahmed official portrait"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080E1A]/85 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="text-2xs font-semibold text-slate-200">Zafir Ahmed · Professional Profile</span>
                    <span className="text-2xs font-mono-numbers text-teal-400">Verified Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Services (Cards) */}
        <section id="services" className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono-numbers">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Services Offered
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              High-accuracy database cleaning, spreadsheet systems, and responsive websites executed with zero tolerance for errors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div
                  key={service.id}
                  className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-teal-500/60 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-200 flex flex-col justify-between group space-y-5"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1E2D4A] space-y-1.5">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-2xs text-slate-300">
                        <Check className="w-3 h-3 text-teal-400 shrink-0" />
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
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 font-mono-numbers">
                Skills &amp; Tooling
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Technical Proficiencies
            </h2>
            <p className="text-sm text-slate-400">
              Verified operational competencies across spreadsheet management, virtual assistance, and web engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {PORTFOLIO_DATA.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0D1527] text-slate-200 border border-[#1E2D4A] hover:border-teal-400 hover:text-teal-300 hover:bg-[#111E38] transition-all cursor-default"
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
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono-numbers">
                  Verified Deliverables
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Real production client websites, digital storefronts, and publications. Click any card to inspect full details.
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
                className="group p-5 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-teal-500/60 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl hover:shadow-black/40"
              >
                <div className="space-y-4">
                  {/* Browser Chrome Frame displaying Original Website Picture */}
                  <div className="rounded-xl overflow-hidden bg-[#080E1A] border border-[#1E2D4A] shadow-inner">
                    {/* Browser top bar */}
                    <div className="flex items-center justify-between px-3.5 py-2 bg-[#0A1222] border-b border-[#1E2D4A] text-2xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="text-slate-400 font-mono-numbers truncate max-w-[200px] sm:max-w-xs px-2 py-0.5 rounded bg-[#080E1A] border border-[#1E2D4A]/50">
                        {project.isPlaceholder ? 'zafirgraceco.etsy.com' : project.url.replace('https://', '')}
                      </div>
                      <span className="text-teal-400 text-2xs font-mono-numbers">Live</span>
                    </div>

                    {/* Original Picture */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080E1A]/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono-numbers">
                      <span className="text-teal-400 font-semibold">{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Original Theme Palette Preview */}
                    {project.themeName && (
                      <div className="mt-2.5 p-2 rounded-lg bg-[#080E1A] border border-[#1E2D4A] flex items-center justify-between gap-2 text-2xs">
                        <span className="text-slate-400 font-medium truncate">
                          Theme: <span className="text-slate-200">{project.themeName}</span>
                        </span>
                        <div className="flex items-center gap-1 shrink-0">
                          {project.themeColors?.map((c, cIdx) => (
                            <span
                              key={cIdx}
                              className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs"
                              style={{ backgroundColor: c }}
                              title={c}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-slate-300 leading-relaxed mt-2.5 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1E2D4A] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-2xs px-2 py-0.5 rounded bg-[#080E1A] text-slate-400 font-mono-numbers border border-[#1E2D4A]"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-all shadow-xs"
                    >
                      <span>Open Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-2xs text-amber-300/90 font-medium px-2 py-1 rounded bg-amber-950/30 border border-amber-800/40">
                      Digital Craft Store
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
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 font-mono-numbers">
                Work Experience
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Professional Timeline
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Consistent track record across independent client consulting, real estate operations, and industrial equipment telemetry.
            </p>
          </div>

          <div className="relative border-l-2 border-[#1E2D4A] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={exp.id} className="relative group">
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-4 border-[#080E1A] group-hover:scale-125 transition-transform ${
                    idx === 0 ? 'bg-red-500' : idx === 1 ? 'bg-teal-400' : 'bg-blue-400'
                  }`}
                  aria-hidden="true"
                />

                <div className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-mono-numbers text-teal-400 font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 font-medium flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-teal-400" />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 pt-2">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-2xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1 shrink-0" aria-hidden="true" />
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
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono-numbers">
                Value Proposition
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Why Work With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.whyWorkWithMe.map((point, idx) => {
              const icons = [CheckCircle, ShieldCheck, Clock];
              const PointIcon = icons[idx % icons.length];
              const colors = ['text-teal-400', 'text-blue-400', 'text-red-400'];
              const bgColors = ['bg-teal-500/10', 'bg-blue-500/10', 'bg-red-500/10'];
              return (
                <div
                  key={point.id}
                  className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] space-y-3 hover:border-teal-500/40 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${bgColors[idx]} flex items-center justify-center ${colors[idx]}`}>
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
        <section id="contact" className="scroll-mt-24 space-y-8 pt-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 font-mono-numbers">
                Direct Inquiry
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Send your project specifications or task details. Prompt response within US business hours.
            </p>
          </div>

          <ContactForm
            onOpenResume={onOpenResume}
            themeStyle="dark"
            accentBgClass="bg-red-600 hover:bg-red-500 text-white font-bold"
            accentTextClass="text-teal-400"
            inputBgClass="bg-[#080E1A] border-[#1E2D4A] text-white focus:border-teal-400 placeholder-slate-500"
          />
        </section>
      </main>

      {/* Section 9: Footer */}
      <footer className="border-t border-[#1E2D4A] bg-[#080E1A] mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{PORTFOLIO_DATA.name}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-teal-400">{PORTFOLIO_DATA.role}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Curriculum Vitae
            </button>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>© 2026 {PORTFOLIO_DATA.name}. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Project Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        accentBgClass="bg-red-600 hover:bg-red-500"
        accentTextClass="text-teal-400"
      />
    </div>
  );
};
