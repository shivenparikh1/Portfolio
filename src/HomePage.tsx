import type { Article, Project } from "./data";
import {
  articles,
  evAssemblyDashboardHref,
  evAssemblyCaseTitle,
  experiences,
  focusAreas,
  globalSourcingPredictorPreviewHref,
  globalSourcingPredictorTitle,
  linkedinHref,
  projects,
  resumeHref,
  semiconductorDashboardHref,
  semiconductorProjectTitle,
  sourcingStrategies,
  warehouseOperationsCaseHref,
  warehouseOperationsCaseTitle
} from "./data";
import { Icon } from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const featuredProjectTitles = [
  semiconductorProjectTitle,
  globalSourcingPredictorTitle,
  evAssemblyCaseTitle
];

const projectImages: Partial<Record<string, string>> = {
  [semiconductorProjectTitle]: semiconductorDashboardHref,
  [globalSourcingPredictorTitle]: globalSourcingPredictorPreviewHref,
  [evAssemblyCaseTitle]: evAssemblyDashboardHref
};

const featuredProjects = featuredProjectTitles.flatMap((title) => {
  const project = projects.find((candidate) => candidate.title === title);
  return project ? [project] : [];
});

function getLinkTarget(href: string) {
  return /^https?:\/\//.test(href) ? "_blank" : undefined;
}

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
  const isFeatured = project.title === semiconductorProjectTitle;
  const showAllLinks =
    isFeatured ||
    project.title === globalSourcingPredictorTitle ||
    project.title === evAssemblyCaseTitle;
  const visibleLinks = showAllLinks ? project.links : project.links.slice(0, 1);

  return (
    <article className={`project-card${isFeatured ? " project-card--featured" : ""}`}>
      <div className="project-card__visual">
        {preview ? (
          <img
            src={preview}
            alt={`${project.title} analysis preview`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ) : (
          <div className="project-card__model" aria-hidden="true">
            <div>
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        )}
      </div>
      <div className="project-card__body">
        {project.badges ? (
          <div className="project-badge-list" aria-label={`${project.title} labels`}>
            {project.badges.map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        ) : null}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.title} topics`}>
          {project.skills.slice(0, 5).map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        {visibleLinks.length > 0 ? (
          <div className={`project-card__links${isFeatured ? " project-card__links--featured" : ""}`}>
            {visibleLinks.map((link) => (
              <a
                className={isFeatured ? "button button--outline project-card__button" : "text-link"}
                href={link.href}
                target={getLinkTarget(link.href)}
                rel={getLinkTarget(link.href) ? "noreferrer" : undefined}
                key={link.href}
              >
                {link.label} <Icon name="arrow" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a className="article-card" href={article.href} target="_blank" rel="noreferrer">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <ul className="tag-list" aria-label={`${article.title} topics`}>
        {article.skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
      <span>Read article <Icon name="external" /></span>
    </a>
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
                Supply Chain Management student focused on global sourcing, semiconductor
                supplier risk, landed cost modeling, supplier scorecards, and AI-assisted sourcing
                decision systems.
              </p>
              <p className="hero-description">
                I build sourcing models, supplier risk frameworks, landed cost tools, and
                AI-assisted decision workflows that compare suppliers, evaluate country and tariff
                exposure, and support stronger global sourcing decisions.
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
                <span>Method</span>
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
              <div>
                <h2>Current Focus</h2>
                <p>
                  Building the commercial, analytical, and technology skills needed to make
                  stronger global sourcing decisions.
                </p>
              </div>
            </div>
            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article className="focus-card" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {experience ? (
          <section className="section experience-section" id="experience">
            <div className="container-wide experience-layout">
              <div>
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
                <a className="text-link" href={warehouseOperationsCaseHref}>
                  {warehouseOperationsCaseTitle} <Icon name="arrow" />
                </a>
              </div>
            </div>
          </section>
        ) : null}

        <section className="section projects-section" id="projects">
          <div className="container-wide">
            <div className="section-heading">
              <div>
                <h2>Featured Projects</h2>
                <p>
                  Featured projects focused on semiconductor sourcing, supplier risk scoring,
                  global sourcing strategy, and AI-assisted sourcing workflows.
                </p>
              </div>
            </div>
            <div className="project-grid">
              {featuredProjects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.title} />
              ))}
            </div>
            <div className="projects-cta">
              <a className="button button--primary button--large" href="./projects.html">
                View the rest of my projects <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="section articles-section" id="articles">
          <div className="container-wide">
            <div className="section-heading">
              <div>
                <h2>Articles &amp; Writing</h2>
                <p>
                  Selected writing on supply chain disruption, AI in sourcing, supplier risk, and
                  emerging technology.
                </p>
              </div>
            </div>
            <div className="article-grid">
              {articles.map((article) => (
                <ArticleCard article={article} key={article.href} />
              ))}
            </div>
          </div>
        </section>

        <section className="ai-section" id="ai">
          <div className="container-wide ai-layout">
            <div>
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
              <div>
                <h2>Sourcing Strategies I Am Studying</h2>
                <p>
                  Each strategy changes the balance between cost, speed, control, resilience, and
                  supplier dependence.
                </p>
              </div>
            </div>
            <div className="strategy-list">
              {sourcingStrategies.map((strategy) => (
                <article className="strategy-card" key={strategy.title}>
                  <div className="strategy-card__title">
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
      </main>
      <SiteFooter />
    </>
  );
}
