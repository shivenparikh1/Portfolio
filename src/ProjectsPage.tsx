import type { Article, Project, ProjectCategory } from "./data";
import {
  articles,
  emailHref,
  linkedinHref,
  projectCategories,
  projects,
  resumeHref,
  semiconductorDashboardHref,
  semiconductorProjectTitle,
  sourcingCopilotPreviewHref,
  sourcingCopilotTitle
} from "./data";
import { Icon } from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const projectPreviews: Partial<Record<string, string>> = {
  [semiconductorProjectTitle]: semiconductorDashboardHref,
  [sourcingCopilotTitle]: sourcingCopilotPreviewHref,
  "Global Sourcing Strategy Model for AI Microchips":
    "./assets/global-sourcing-ai-microchip-preview.png",
  "Supplier Risk Scoring Dashboard": "./assets/supplier-scorecard-preview.png",
  "Warehouse / Operations Case Study":
    "./assets/warehouse-inward-reverse-inward-preview.png",
  "EV Assembly Logistics Readiness Case Study":
    "./assets/ev-assembly-logistics-readiness-dashboard.png",
  "SKU Inventory Tracking Dashboard": "./assets/supply-chain-inventory-control-dashboard.png",
  "Advanced Manufacturing Distribution Center Location Case Study":
    "./assets/distribution-center-location-strategy-dashboard.png"
};

const projectByTitle = new Map(projects.map((project) => [project.title, project]));

const projectNavItems = [
  ...projectCategories.map((category) => ({ id: category.id, title: category.title })),
  { id: "articles", title: "Articles & Writing" }
];

function getProjectsForCategory(category: ProjectCategory) {
  return category.projectTitles.flatMap((title) => {
    const project = projectByTitle.get(title);
    return project ? [project] : [];
  });
}

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const preview = projectPreviews[project.title];

  if (preview) {
    return (
      <img
        src={preview}
        alt={`${project.title} project preview`}
        loading={index === 0 ? "eager" : "lazy"}
      />
    );
  }

  return (
    <div className="project-visual__fallback" aria-hidden="true">
      <span>Decision model / {String(index + 1).padStart(2, "0")}</span>
      <strong>{project.skills.slice(0, 3).join(" / ")}</strong>
      <div className="fallback-table">
        <i /><i /><i /><i /><i /><i />
      </div>
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isSemiconductorProject = project.title === semiconductorProjectTitle;

  return (
    <article className={`project-row${isSemiconductorProject ? " project-row--dashboard" : ""}`}>
      <div className="project-row__visual">
        <ProjectVisual project={project} index={index} />
        <span className="project-status">
          {project.status}
        </span>
      </div>
      <div className="project-row__content">
        {project.badges ? (
          <div className="project-badge-list" aria-label={`${project.title} labels`}>
            {project.badges.map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        ) : null}
        <p className="project-row__number">Project {String(index + 1).padStart(2, "0")}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.title} tags`}>
          {project.skills.slice(0, 5).map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        <div className="project-detail-grid">
          <div>
            <span>Approach and tools</span>
            <p>{project.tools.join(" · ")}</p>
          </div>
          <div>
            <span>Key takeaway</span>
            <p>{project.insights[0]}</p>
          </div>
        </div>
        {project.links.length > 0 ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                {link.label} <Icon name="arrow" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function CategorySection({ category }: { category: ProjectCategory }) {
  const categoryProjects = getProjectsForCategory(category);

  return (
    <section className="project-category-section" id={category.id}>
      <div className="category-heading">
        <div>
          <p className="section-index">{String(categoryProjects.length).padStart(2, "0")}</p>
          <h2>{category.title}</h2>
        </div>
        <p>{category.description}</p>
      </div>
      <div className="project-rows">
        {categoryProjects.map((project, index) => (
          <ProjectRow project={project} index={index} key={project.title} />
        ))}
      </div>
    </section>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <a className="article-card" href={article.href} target="_blank" rel="noreferrer">
      <p className="article-card__number">Article {String(index + 1).padStart(2, "0")}</p>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <ul className="tag-list" aria-label={`${article.title} topics`}>
        {article.skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
      <span>Read article <Icon name="external" /></span>
    </a>
  );
}

export function ProjectsPage() {
  return (
    <>
      <div id="top" />
      <SiteHeader page="projects" />
      <main>
        <section className="projects-hero">
          <div className="container-wide">
            <p className="projects-name">Shiven Parikh</p>
            <div className="projects-hero__layout">
              <h1>Global Sourcing &amp; Supplier Risk Projects</h1>
              <p>
                Models, dashboards, case studies, and completed tools focused on global supplier
                comparison, sourcing strategy, risk exposure, landed cost, and AI-assisted
                procurement decisions.
              </p>
            </div>
            <nav className="category-nav" aria-label="Project categories">
              {projectNavItems.map((item, index) => (
                <a href={`#${item.id}`} key={item.id}>
                  <span>0{index + 1}</span>{item.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="container-wide project-library">
          {projectCategories.map((category) => (
            <CategorySection category={category} key={category.id} />
          ))}

          <section className="project-category-section articles-library" id="articles">
            <div className="category-heading">
              <div>
                <p className="section-index">{String(articles.length).padStart(2, "0")}</p>
                <h2>Articles &amp; Writing</h2>
              </div>
              <p>
                Four separate article links instead of one combined writing project, so each piece
                can stand on its own.
              </p>
            </div>
            <div className="article-grid">
              {articles.map((article, index) => (
                <ArticleCard article={article} index={index} key={article.href} />
              ))}
            </div>
          </section>
        </div>

        <section className="contact projects-contact">
          <div className="container-wide contact-grid">
            <div>
              <p className="contact-label">Interested in the work?</p>
              <h2>Let’s discuss sourcing and supplier risk.</h2>
              <p>Connect for internships, early-career opportunities, or project conversations.</p>
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
