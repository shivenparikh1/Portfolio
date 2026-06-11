import type { Project, ProjectCategory } from "./data";
import { projectCategories, projects } from "./data";
import { Icon } from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const projectPreviews: Partial<Record<string, string>> = {
  "Supplier Evaluation Scorecard": "./assets/supplier-scorecard-preview.png",
  "EV Assembly Logistics Readiness Case Study":
    "./assets/ev-assembly-logistics-readiness-dashboard.png",
  "SKU Inventory Tracking Dashboard": "./assets/supply-chain-inventory-control-dashboard.png",
  "Warehouse Inward & Reverse Inward Case Study":
    "./assets/warehouse-inward-reverse-inward-preview.png",
  "Advanced Manufacturing Distribution Center Location Case Study":
    "./assets/distribution-center-location-strategy-dashboard.png"
};

const projectByTitle = new Map(projects.map((project) => [project.title, project]));

function getProjectsForCategory(category: ProjectCategory) {
  return category.projectTitles.flatMap((title) => {
    const project = projectByTitle.get(title);
    return project ? [project] : [];
  });
}

function ProjectVisual({ project }: { project: Project }) {
  const preview = projectPreviews[project.title];

  if (preview) {
    return <img src={preview} alt={`${project.title} preview`} loading="lazy" />;
  }

  return (
    <div className="project-visual__fallback" aria-hidden="true">
      <span>Decision model</span>
      <strong>{project.tools.slice(0, 3).join(" / ")}</strong>
      <div className="fallback-lines" />
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-row">
      <div className="project-row__number">{String(index + 1).padStart(2, "0")}</div>
      <div className="project-row__visual"><ProjectVisual project={project} /></div>
      <div className="project-row__content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-meta">
          <div>
            <span>Focus</span>
            <p>{project.skills.slice(0, 3).join(" · ")}</p>
          </div>
          <div>
            <span>Tools</span>
            <p>{project.tools.slice(0, 3).join(" · ")}</p>
          </div>
        </div>
        <blockquote>{project.insights[0]}</blockquote>
        <div className="project-links">
          {project.links.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              {link.label} <Icon name="arrow" />
            </a>
          ))}
        </div>
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
          <p className="utility-label">{String(categoryProjects.length).padStart(2, "0")} projects</p>
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

export function ProjectsPage() {
  return (
    <>
      <div id="top" />
      <SiteHeader page="projects" />
      <main>
        <section className="projects-hero">
          <div className="container-wide">
            <div className="projects-hero__title">
              <p className="utility-label">Project library / {String(projects.length).padStart(2, "0")}</p>
              <h1>Supply chain work, organized by the decisions it supports.</h1>
            </div>
            <p className="projects-hero__copy">
              Practical case studies spanning sourcing, inventory, warehouse operations,
              production readiness, network design, and emerging technology.
            </p>
            <nav className="category-nav" aria-label="Project categories">
              {projectCategories.map((category, index) => (
                <a href={`#${category.id}`} key={category.id}>
                  <span>0{index + 1}</span>{category.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="container-wide project-library">
          {projectCategories.map((category) => (
            <CategorySection category={category} key={category.id} />
          ))}
        </div>

        <section className="contact projects-contact">
          <div className="container-wide contact-grid">
            <div>
              <p className="utility-label">More context</p>
              <h2>See the thinking behind the work.</h2>
            </div>
            <div className="contact-actions">
              <a href="./index.html#experience">Experience <Icon name="arrow" /></a>
              <a href="./index.html#writing">Writing <Icon name="arrow" /></a>
              <a href="mailto:shivenparikh1@gmail.com">Contact <Icon name="arrow" /></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
