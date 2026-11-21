"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TechnologyIcon } from "@/components/technology-icon";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, Layers3, Mail, Menu, Network, ShoppingBag, Sparkles, Utensils, X } from "lucide-react";
import { certifications, education, experience, profile, projects, securityFocus, skillGroups } from "@/lib/portfolio";
import type { Project } from "@/lib/portfolio";

const icons = { layers: Layers3, store: ShoppingBag, sparkles: Sparkles, utensils: Utensils, book: BookOpen };

function WhatsApp({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.6 5.98L0 24l6.23-1.64a11.94 11.94 0 0 0 5.82 1.49h.01c6.58 0 11.94-5.36 11.94-11.95 0-3.19-1.24-6.19-3.48-8.42ZM12.06 21.83a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.6-.24-.37a9.9 9.9 0 0 1-1.51-5.29c0-5.48 4.46-9.94 9.94-9.94a9.87 9.87 0 0 1 7.03 2.92 9.88 9.88 0 0 1 2.91 7.04c0 5.48-4.46 9.94-9.92 9.94Zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15s-.77.97-.94 1.17c-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" /></svg>;
}

function Github({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.9a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.8 1.4a13 13 0 0 0-6.8 0C5.5.7 4.3 1.1 4.3 1.1a5 5 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.2 6.6 6.2 6.9a3.4 3.4 0 0 0-.9 2.7V22" /></svg>;
}

function Linkedin({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></svg>;
}
const aboutPoints = ["Full-stack application development", "Software architecture and technical problem-solving", "Development team coordination", "API development and third-party integrations", "AI-assisted software engineering", "Continuous learning and professional growth"];

function ProjectCard({ project, index, reduceMotion }: { project: Project; index: number; reduceMotion: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = icons[project.icon];
  const nodes = project.icon === "store" ? ["Storefront", "Commerce", "Orders"] : project.icon === "book" ? ["Catalog", "Library", "Inventory"] : project.icon === "utensils" ? ["Operations", "Application", "Orders"] : project.icon === "sparkles" ? ["Reports", "Match", "Suggestions"] : ["People", "Platform", "Services"];

  return (
    <motion.article className="project-card" initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.42, delay: reduceMotion ? 0 : (index % 2) * 0.06 }}>
      <div className="project-topline"><span className="mono project-number">{project.number} / {String(projects.length).padStart(2, "0")}</span></div>
      <div className="project-heading"><span className="project-icon"><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></span><div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div></div>
      <p className="project-description">{project.description}</p>
      <div className="project-visual" aria-label={`${project.name} illustrative concept diagram, not a project screenshot`}>
        <span className="visual-label mono">CONCEPT MAP <i>/{project.number}</i></span>
        <div className="flow-map">{nodes.map((node, i) => <span className="flow-segment" key={node}><span className={i === 1 ? "flow-node flow-node-main" : "flow-node"}>{node}</span>{i < nodes.length - 1 && <span className="flow-connector"><i /></span>}</span>)}</div>
        <div className="visual-foot mono"><span>DESIGN</span><span>BUILD</span><span>DELIVER</span></div>
      </div>
      {project.technologies ? <div className="tag-block"><p className="detail-label">{project.technologyNote ?? "Technologies"}</p><div className="tag-list">{project.technologies.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div> : null}
      {project.responsibilities && <div className="project-contributions"><h4>My contributions</h4><ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></div>}
      {(project.githubUrl || project.demoUrl) && <div className="project-links">{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github />Source code</a>}{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo</a>}</div>}
      <button type="button" className="details-toggle" aria-expanded={expanded} aria-controls={`details-${project.id}`} onClick={() => setExpanded(!expanded)}><span>{expanded ? "Close project details" : "Explore project details"}</span><ChevronDown size={16} className={expanded ? "chevron rotated" : "chevron"} aria-hidden="true" /></button>
      <div id={`details-${project.id}`}><AnimatePresence initial={false}>{expanded && <motion.div className="project-details" initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.23 }}>
        {project.challenge && <Detail label="Challenge">{project.challenge}</Detail>}{project.approach && <Detail label="Approach">{project.approach}</Detail>}
        {project.features && <Detail label="Scope"><ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul></Detail>}
      </motion.div>}</AnimatePresence></div>
    </motion.article>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="detail-row"><span className="detail-label">{label}</span>{typeof children === "string" ? <p>{children}</p> : children}</div>;
}

function ProfileLink({ label, href, icon }: { label: string; href: string; icon: "linkedin" | "github" }) {
  const Icon = icon === "linkedin" ? Linkedin : Github;
  return <a className="profile-link" href={href} target="_blank" rel="noopener noreferrer"><Icon size={15} aria-hidden="true" />{label}<ArrowUpRight size={12} aria-hidden="true" /></a>;
}

function SectionHeading({ index, eyebrow, children }: { index: string; eyebrow: string; children: React.ReactNode }) {
  return <div className="section-heading"><span className="section-index mono" aria-hidden="true">{index} <i>/</i> 05</span><div><p className="section-eyebrow">{eyebrow}</p><h2>{children}</h2></div></div>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 721px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener("keydown", handleEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#home" onClick={closeMenu} aria-label="Hadi Khoder, home">HK<span>.</span></a>
      <nav id="main-navigation" className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation"><a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#skills" onClick={closeMenu}>Expertise</a><a href="#education" onClick={closeMenu}>Education</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={14} /></a></nav>
      <button ref={menuButton} aria-controls="main-navigation" className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    </header>

    <main id="main-content" tabIndex={-1}><section className="hero section-wrap" id="home"><div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-copy" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <div className="eyebrow"><i className="availability-dot" /> SOFTWARE ENGINEER <span>/</span> {profile.location.toUpperCase()}</div>
        <h1>{profile.name}<span className="hero-name-dot">.</span></h1><p className="hero-title">{profile.title}</p><p className="hero-statement">Thoughtful software. Built to move people forward.</p><p className="hero-description">{profile.summary}</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my projects <ArrowRight size={16} /></a><a className="button button-secondary" href="/Hadi-Khoder-CV.pdf" download="Hadi-Khoder-CV.pdf">Download resume <ArrowDownToLine size={16} /></a><a className="button button-text" href="#contact">Contact me <ArrowDown size={15} /></a></div>
        <div className="hero-socials" aria-label="Social profiles"><ProfileLink label="LinkedIn" href={profile.linkedin} icon="linkedin" /><ProfileLink label="GitHub" href={profile.github} icon="github" /></div>
      </motion.div>
      <motion.aside className="profile-panel" aria-label="Hadi Khoder portrait" initial={false}>
        <div className="profile-photo"><Image src="/hadi-khoder-profile.jpeg" alt="Hadi Khoder wearing a suit at his graduation" fill sizes="(max-width: 720px) 100vw, 440px" preload /></div>
        <div className="profile-caption"><span>{profile.name}</span><span>{profile.location} · Software Engineer</span></div>
      </motion.aside><a className="scroll-hint mono" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>

    <div className="intro-band"><div className="section-wrap intro-band-inner"><p>ENGINEERING THAT <span>CONNECTS THE DOTS</span></p><span className="mono">SOFTWARE · PEOPLE · PURPOSE</span></div></div>

    <section className="section-wrap content-section about-section" id="about"><SectionHeading index="01" eyebrow="A little about me">Curious by nature.<br /><span>Engineer by choice.</span></SectionHeading>
      <div className="about-content"><div className="about-lede"><p className="large-copy">I’m a Computer Science graduate and Software Development Team Leader, currently pursuing a Master’s degree specializing in Cyber Security.</p><p className="body-copy">I bring a practical, collaborative mindset to building software: understanding the problem, shaping a sound technical approach, and helping people move the work forward.</p><a className="inline-link" href="#experience">A little more about my work <ArrowRight size={15} /></a></div>
        <ul className="about-list">{aboutPoints.map((point, index) => <li key={point}><span className="mono">0{index + 1}</span><span>{point}</span><Check size={15} /></li>)}</ul>
      </div>
    </section>

    <section className="experience-section" id="experience"><div className="section-wrap content-section"><SectionHeading index="02" eyebrow="Professional experience">Good work is a<br /><span>team effort.</span></SectionHeading>
      <motion.article className="experience-entry" initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.42 }}>
        <div className="experience-date mono">{experience.period}</div><div className="experience-main"><div className="experience-company-row"><div><h3>{experience.role}</h3><p className="experience-company">{experience.company}<span> · </span>{profile.location}</p></div><span className="experience-mark">DW<span>.</span></span></div>
          <p className="body-copy experience-summary">Coordinating cross-functional software delivery while contributing to architecture, web development, platform support, and integration planning.</p><ul className="responsibility-list">{experience.responsibilities.map((item) => <li key={item}><i />{item}</li>)}</ul>
        </div>
      </motion.article>
    </div></section>

    <section className="section-wrap content-section projects-section" id="projects"><SectionHeading index="03" eyebrow="Selected work">Projects shaped by<br /><span>real-world problems.</span></SectionHeading>
      <div className="projects-intro"><p>From team-led platforms to full-stack applications, each project starts with understanding who it serves.</p><span className="mono">05 PROJECTS <i>·</i> SELECTED WORK</span></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} reduceMotion={reduceMotion} />)}</div>
    </section>

    <section className="skills-section" id="skills"><div className="section-wrap content-section"><SectionHeading index="04" eyebrow="Technical toolkit">A broad toolkit.<br /><span>A security-minded lens.</span></SectionHeading>
      <div className="skills-layout"><div className="skills-grid">{skillGroups.map((group, index) => <motion.article className="skill-group" key={group.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.34, delay: reduceMotion ? 0 : index * 0.04 }}><div className="skill-group-heading"><span className="mono">0{index + 1}</span><h3>{group.title}</h3></div><div className="tag-list">{group.skills.map((skill) => <span className="tag skill-tag" key={skill}><TechnologyIcon name={skill} />{skill}</span>)}</div></motion.article>)}</div>
        <aside className="security-panel"><span className="security-icon"><Network size={20} /></span><p className="detail-label">CURRENT ACADEMIC FOCUS</p><h3>Cyber Security</h3><p>Master’s studies focused on understanding systems, reducing risk, and building with security in mind.</p><ul>{securityFocus.map((item) => <li key={item}><i />{item}</li>)}</ul><span className="mono security-foot">LEARN · APPLY · REFINE</span></aside>
      </div>
    </div></section>

    <section className="section-wrap content-section education-section" id="education">
      <SectionHeading index="05" eyebrow="Education & certifications">Always learning.<br /><span>Building on strong foundations.</span></SectionHeading>
      <div className="education-grid">{education.map((item) => <article className="education-card" key={item.title}><span className="education-status">{item.status}</span><h3>{item.title}</h3><p className="education-university">{item.university}</p><p>{item.description}</p></article>)}</div>
      {certifications.length > 0 && <div className="certification-list"><h3>Certifications</h3>{certifications.map((item) => <article key={item.title}><h4>{item.title}</h4><p>{item.issuer}</p>{item.credentialUrl && <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer">View credential</a>}</article>)}</div>}
    </section>
    <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-kicker mono"><Mail size={15} /> OPEN TO MEANINGFUL CONVERSATIONS</div><h2>Have a good problem<br /><span>to solve?</span></h2><p>I’m interested in thoughtful teams, useful products, and the engineering work that brings them together.</p><div className="contact-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" />Email me</a>
          <a className="button button-whatsapp" href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsApp size={18} />Chat on WhatsApp</a>
          <ProfileLink label="LinkedIn" href={profile.linkedin} icon="linkedin" />
          <ProfileLink label="GitHub" href={profile.github} icon="github" />
        </div>
        <address className="contact-details">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.phoneHref}>{profile.phone}</a>
          <span>{profile.location}</span>
        </address></div></section>
    </main><footer className="site-footer section-wrap"><a className="wordmark" href="#home">HK<span>.</span></a><p>Designed with intent. Built with care.</p><span className="mono">© {new Date().getFullYear()} HADI KHODER</span></footer>
    <a className="whatsapp-float" href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Hadi Khoder on WhatsApp" title="Chat on WhatsApp"><WhatsApp size={24} /></a>
  </>;
}
