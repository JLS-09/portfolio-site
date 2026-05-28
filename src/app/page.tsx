import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./NavBar";
import ScrollAnimations from "./ScrollAnimations";
import { MapPin } from 'lucide-react';
import kmrLauncherImg from "../../public/kmr_launcher.png";
import uurroosterhelperImg from "../../public/uurroosterhelper.png";
import nodoImg from "../../public/nodo.png";
import shopfloorAppImg from "../../public/shopfloor_app.png";
import shopfloorWebImg from "../../public/shopfloor_web.png";
import profileImg from "../../public/IMG_1938.jpeg";
import portfolioImg from "../../public/portfolio.png";
import ahhaeducationImg from "../../public/ahhaeducation.png";

const ICON_CDN = "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg";

const PROJECTS = [
  {
    name: "AHHA Education website",
    description: "Website for the NGO I interned at, built with a custom WordPress plugin and theme",
    language: "PHP/JS",
    repo: "https://ahhaeducation.org",
    imageUrl: ahhaeducationImg,
  },
  {
    name: "KMR Launcher",
    description: "Next-gen mod launcher for Kerbal Space Program",
    language: "Avalonia",
    repo: "https://github.com/JLS-09/KMR-launcher",
    imageUrl: kmrLauncherImg,
  },
  {
    name: "KMR API",
    description: "REST API powering the Kerbal Mod Repository ecosystem",
    language: "TypeScript",
    repo: "https://github.com/JLS-09/KMR-api",
    imageUrl: "",
  },
  {
    name: "KMR Worker",
    description: "Fetches, processes and syncs the CKAN-meta database to MongoDB",
    language: "TypeScript",
    repo: "https://github.com/JLS-09/kmr-worker",
    imageUrl: "",
  },
  {
    name: "Nodo",
    description: "Social media app made from the ground up for people with mental disabilities",
    language: "Blazor",
    repo: "",
    imageUrl: nodoImg,
  },
  {
    name: "Shopfloor application desktop app",
    description: "Delaware shopfloor application for management of production lines, built with JavaFX",
    language: "Java",
    repo: "",
    imageUrl: shopfloorAppImg,
  },
  {
    name: "Shopfloor application web dashboard",
    description: "Delaware shopfloor web dashboard for management of production lines, built with React",
    language: "React",
    repo: "",
    imageUrl: shopfloorWebImg,
  },
  {
    name: "Kingdomino",
    description: "Virtual adaptation of the popular board game, built with JavaFX",
    language: "Java",
    repo: "",
    imageUrl: "",
  },
  {
    name: "Uurrooster Helper",
    description: "Timetable solver for students with non-standard curricula",
    language: "TypeScript",
    repo: "https://github.com/JLS-09/uurrooster-helper",
    imageUrl: uurroosterhelperImg,
  },
  {
    name: "Save Game Program",
    description: "Auto-copies save files to and from USB across machines",
    language: "Java",
    repo: "https://github.com/JLS-09/Save-Game-Program",
    imageUrl: "",
  },
  {
    name: "Portfolio Site",
    description: "This portfolio, built with Next.js",
    language: "TypeScript",
    repo: "https://github.com/JLS-09/portfolio-site",
    imageUrl: portfolioImg,
  },
];

const STACK = [
  { name: "C#", icon: "csharp" },
  { name: ".NET", icon: "dotnet" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "reactjs" },
  { name: "Java", icon: "java" },
  { name: "Python", icon: "python" },
  { name: "php", icon: "php" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
];

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <NavBar />

      <section id="home" className={styles.hero}>
        <div className={styles.heroPlanet} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}></p>
          <h1 className={styles.heroHeading}>
            Jules <em>Van Nevel</em>
          </h1>
          <p className={styles.heroSub}>Full-Stack Developer based in Belgium</p>
          <div className={styles.heroActions}>
            <a href="#contact" className={styles.btnPrimary}>
              Let&apos;s Connect
            </a>
            <a href="#projects" className={styles.btnSecondary}>
              View Projects →
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <p className={styles.sectionLabel} data-reveal>Get to know me</p>
        <h2 className={styles.sectionHeading} data-reveal style={{ transitionDelay: "0.1s" }}>About <em>Me</em></h2>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <Image src={profileImg} width={200} height={200} alt="Jules Van Nevel" style={{ borderRadius: '50%' }} data-reveal />

            <p className={styles.aboutBio} data-reveal style={{ transitionDelay: "0.1s" }}>
              I am a passionate full-stack developer with a keen interest in creating efficient and scalable web and desktop applications. I enjoy tackling complex problems and turning ideas into reality through code.
            </p>
            <hr className={styles.aboutDividerH} />
            <div className={styles.aboutLocation} data-reveal style={{ transitionDelay: "0.2s" }}><MapPin /> Ghent, Belgium</div>
          </div>

          <div className={styles.aboutDivider} />

          <div className={styles.aboutRight}>
            <div className={styles.cvBlock} data-reveal>
              <h3 className={styles.cvTitle}>Education</h3>
              <div className={styles.cvRow}>
                <span className={styles.cvInstitution}>HOGENT</span>
                <span className={styles.cvYear}>2023 - 2026</span>
              </div>
              <p className={styles.cvDegree}>Applied Information Technology</p>
            </div>

            <div className={styles.cvBlock} data-reveal style={{ transitionDelay: "0.1s" }}>
              <h3 className={styles.cvTitle}>Experience</h3>
              <div className={styles.cvRow}>
                <span className={styles.cvInstitution}>AHHA Education Cambodia</span>
                <span className={styles.cvYear}>March - May 2026</span>
              </div>
              <p className={styles.cvDegree}>Intern - Kampot, Cambodia</p>
              <ul className={styles.cvBullets}>
                <li>Complete redesign of the NGO website</li>
              </ul>
            </div>

            <div className={styles.cvBlock} data-reveal style={{ transitionDelay: "0.2s" }}>
              <h3 className={styles.cvTitle}>Tech Stack</h3>
              <div className={styles.stackChips}>
                {STACK.map((tech) => (
                  <span key={tech.name} className={styles.chip}>
                    <img
                      src={`${ICON_CDN}/${tech.icon}.svg`}
                      alt=""
                      width={14}
                      height={14}
                      className={styles.chipIcon}
                    />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <p className={styles.sectionLabel} data-reveal>What I&apos;ve built</p>
        <h2 className={styles.sectionHeading} data-reveal style={{ transitionDelay: "0.1s" }}>My <em>Projects</em></h2>

        <div className={styles.projectGrid}>
          {PROJECTS.map((project, index) => (
            <a
              key={project.name}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
              data-reveal="card"
              data-card-index={String(index)}
            >
              {project.imageUrl ? (
                <div className={styles.projectImage} style={{ position: "relative" }}>
                  <Image fill src={project.imageUrl} alt={project.name} style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              ) : (
                <div className={styles.projectImage}>No screenshot</div>
              )}
              <div className={styles.projectMeta}>
                <span className={styles.projectName}>{project.name}</span>
                <span className={styles.projectLang}>{project.language}</span>
              </div>
              <p className={styles.projectDesc}>{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <p className={styles.sectionLabel} data-reveal>Get in touch</p>
        <h2 className={styles.sectionHeading} data-reveal style={{ transitionDelay: "0.1s" }}>Contact <em>Me</em></h2>

        <div className={styles.contactBody}>
          <p className={styles.contactSub} data-reveal>
            Have a question or want to work together? Feel free to reach out.
          </p>
          <a href="mailto:jules.van.nevel@gmail.com" className={styles.contactEmail} data-reveal style={{ transitionDelay: "0.1s" }}>
            jules.van.nevel@gmail.com
          </a>
          <div className={styles.socialLinks} data-reveal style={{ transitionDelay: "0.2s" }}>
            <a href="https://github.com/JLS-09" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jules-van-nevel-39bbb1331/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer} data-reveal="left">
        © 2026 Jules Van Nevel. All rights reserved.
      </footer>
    </>
  );
}
