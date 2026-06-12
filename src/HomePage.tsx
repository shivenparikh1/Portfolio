import type { Project } from "./data";
import {
  emailHref,
  experiences,
  focusAreas,
  linkedinHref,
  projects,
  resumeHref,
  sourcingStrategies
} from "./data";
import { Icon } from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const featuredProjectTitles = [
  "Global Sourcing Strategy Model",
  "Supplier Risk Scoring Dashboard",
  "China Plus One Sourcing Analysis",
  "AI-Assisted RFQ Analyzer",
  "Landed Cost & Supplier Comparison Model",
  "Warehouse / Operations Case Study"
];

const projectImages: Partial<Record<string, string>> = {
  "Global Sourcing Strategy Model": "./assets/supply-chain-hero.png",
  "Supplier Risk Scoring Dashboard": "./assets/supplier-scorecard-preview.png",
  "Warehouse / Operations Case Study":
    "./assets/warehouse-inward-reverse-inward-preview.png"
};

const featuredProjects = featuredProjectTitles.flatMap((title) => {
  const project = projects.find((candidate) => candidate.title === title);
  return project ? [project] : [];
});

const aiApplications = [
  "Supplier research",
  "RFQ comparison",
  "Country risk summaries",
  "Tariff scenario planning",
  "Supplier scorecards",
  "Recommendation writing"
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const preview = projectImages[project.title];
  const primaryLink = project.links[0];

  return (
    <article className="project-card">
      <div className="project-card__visual">
        {preview ? (
          <img
            src={preview}
            alt={`${project.title} analysis preview`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ) : (
          <div className="project-card__model" aria-hidden="true">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        )}
        <span className={`project-status${project.status === "In development" ? " is-planned" : ""}`}>
          {project.status}
        </span>
      </div>
      <div className="project-card__body">
        <p className="project-card__number">Project {String(index + 1).padStart(2, "0")}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.title} topics`}>
          {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        {primaryLink ? (
          <a className="text-link" href={primaryLink.href} target="_blank" rel="noreferrer">
            View project <Icon name="arrow" />
          </a>
        ) : (
          <span className="project-card__planned">Case study in development</span>
        )}
      </div>
    </article>
  );
}

export function HomePage() {
  const experience = experiences[0];

  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main>
        <section className="hero" id="home">
          <div className="container-wide hero-grid">
            <div className="hero-copy">
              <p className="hero-name">Shiven Parikh</p>
              <h1>Global Sourcing &amp; Supplier Risk Portfolio</h1>
              <p className="hero-subheading">
                Supply Chain Management student focused on global sourcing, strategic sourcing,
                supplier risk analytics, landed cost modeling, and AI-assisted sourcing decision
                systems.
              </p>
              <p className="hero-description">
                I build sourcing models, supplier risk frameworks, landed cost tools, and
                AI-assisted decision workflows that help compare global suppliers, evaluate tariff
                and disruption exposure, and support better sourcing recommendations.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projects">
                  View Projects <Icon name="arrow" />
                </a>
                <a
                  className="button button--outline"
                  href={resumeHref}
                  download="Shiven-Parikh-Resume.pdf"
                >
                  Download Resume <Icon name="download" />
                </a>
                <a
                  className="button button--outline"
                  href={linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn <Icon name="external" />
                </a>
              </div>
            </div>

            <div className="decision-framework" aria-label="Global supplier decision framework">
              <div className="decision-framework__header">
                <span>Sourcing decision framework</span>
                <span>01 / Method</span>
              </div>
              <div className="decision-framework__body">
                <div className="decision-axis decision-axis--vertical">
                  <span>Lower exposure</span>
                  <span>Higher exposure</span>
                </div>
                <div className="decision-matrix">
                  <span className="matrix-point matrix-point--one">Cost</span>
                  <span className="matrix-point matrix-point--two">Capability</span>
                  <span className="matrix-point matrix-point--three">Lead time</span>
                  <span className="matrix-point matrix-point--four">Risk</span>
                </div>
                <div className="decision-axis">
                  <span>Lower value</span>
                  <span>Higher value</span>
                </div>
              </div>
              <div className="decision-inputs">
                {["Freight", "Tariffs", "Quality", "Region", "Resilience"].map((input) => (
                  <span key={input}>{input}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section focus-section" id="focus">
          <div className="container-wide">
            <div className="section-heading">
              <p className="section-index">01</p>
              <div>
                <h2>Current Focus</h2>
                <p>
                  Building the commercial, analytical, and technology skills needed to make
                  stronger global sourcing decisions.
                </p>
              </div>
            </div>
            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <article className="focus-card" key={area.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container-wide">
            <div className="section-heading section-heading--with-link">
              <p className="section-index">02</p>
              <div>
                <h2>Featured Global Sourcing &amp; Supplier Risk Projects</h2>
                <p>
                  Completed models and planned decision tools, ordered around my primary sourcing
                  focus. Operations work appears as supporting evidence.
                </p>
              </div>
              <a className="text-link" href="./projects.html">
                View all projects <Icon name="arrow" />
              </a>
            </div>
            <div className="project-grid">
              {featuredProjects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="ai-section" id="ai">
          <div className="container-wide ai-layout">
            <div>
              <p className="section-index">03</p>
              <h2>How I Use AI in Sourcing Analysis</h2>
            </div>
            <div className="ai-copy">
              <p>
                I use AI tools to support supplier research, RFQ comparison, country risk
                summaries, tariff scenario planning, supplier scorecard development, and sourcing
                recommendation writing. My goal is not to replace sourcing judgment with AI, but
                to use AI to research faster, test assumptions, and make stronger sourcing
                decisions.
              </p>
              <ul>
                {aiApplications.map((application) => <li key={application}>{application}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section strategy-section" id="strategies">
          <div className="container-wide">
            <div className="section-heading">
              <p className="section-index">04</p>
              <div>
                <h2>Sourcing Strategies I Am Studying</h2>
                <p>
                  Each strategy changes the balance between cost, speed, control, resilience, and
                  supplier dependence.
                </p>
              </div>
            </div>
            <div className="strategy-list">
              {sourcingStrategies.map((strategy, index) => (
                <article className="strategy-card" key={strategy.title}>
                  <div className="strategy-card__title">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{strategy.title}</h3>
                  </div>
                  <div>
                    <strong>What it means</strong>
                    <p>{strategy.meaning}</p>
                  </div>
                  <div>
                    <strong>When it works</strong>
                    <p>{strategy.works}</p>
                  </div>
                  <div>
                    <strong>Risks created</strong>
                    <p>{strategy.risks}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {experience ? (
          <section className="section experience-section" id="experience">
            <div className="container-wide experience-layout">
              <div>
                <p className="section-index">05</p>
                <h2>Supporting Operations Experience</h2>
              </div>
              <div className="experience-card">
                <div>
                  <p className="experience-company">{experience.company}</p>
                  <h3>{experience.role}</h3>
                  <p>{experience.description}</p>
                </div>
                <ul className="tag-list">
                  {experience.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <a className="text-link" href="./projects.html#operations">
                  See supporting projects <Icon name="arrow" />
                </a>
              </div>
            </div>
          </section>
        ) : null}

        <section className="contact" id="contact">
          <div className="container-wide contact-grid">
            <div>
              <p className="contact-label">Global sourcing · Supplier risk · Procurement analytics</p>
              <h2>Let’s build stronger sourcing decisions.</h2>
              <p>
                I’m interested in internships and early-career opportunities where I can contribute
                to sourcing analysis, supplier risk, procurement, and supply-chain decision support.
              </p>
            </div>
            <div className="contact-actions">
              <a href={emailHref}><Icon name="mail" /> Email Shiven</a>
              <a href={linkedinHref} target="_blank" rel="noreferrer">
                LinkedIn <Icon name="external" />
              </a>
              <a href={resumeHref} download="Shiven-Parikh-Resume.pdf">
                Resume <Icon name="download" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
