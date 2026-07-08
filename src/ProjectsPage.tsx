import { useState } from "react";
import type { Project, ProjectCategory } from "./data";
import {
  aiMicrochipCaseTitle,
  aiMicrochipPreviewHref,
  distributionCenterCaseTitle,
  distributionCenterDashboardHref,
  emailHref,
  evAssemblyCaseTitle,
  evAssemblyDashboardHref,
  globalSourcingPredictorPreviewHref,
  globalSourcingPredictorTitle,
  linkedinHref,
  projectCategories,
  projects,
  resumeHref,
  semiconductorDashboardHref,
  semiconductorProjectTitle,
  skuInventoryCaseTitle,
  skuInventoryDashboardHref,
  sourcingCopilotPreviewHref,
  sourcingCopilotTitle,
  vendorShippingCaseTitle,
  vendorShippingPreviewHref,
  warehouseOperationsCaseTitle,
  warehouseOperationsPreviewHref
} from "./data";
import { Icon } from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

interface ProjectEntry {
  category: ProjectCategory;
  project: Project;
}

const projectPreviews: Partial<Record<string, string>> = {
  [semiconductorProjectTitle]: semiconductorDashboardHref,
  [globalSourcingPredictorTitle]: globalSourcingPredictorPreviewHref,
  [sourcingCopilotTitle]: sourcingCopilotPreviewHref,
  [aiMicrochipCaseTitle]: aiMicrochipPreviewHref,
  [vendorShippingCaseTitle]: vendorShippingPreviewHref,
  "Supplier Risk Scoring Dashboard": "./assets/supplier-scorecard-preview.png",
  [warehouseOperationsCaseTitle]: warehouseOperationsPreviewHref,
  [evAssemblyCaseTitle]: evAssemblyDashboardHref,
  [skuInventoryCaseTitle]: skuInventoryDashboardHref,
  [distributionCenterCaseTitle]: distributionCenterDashboardHref
};

const projectByTitle = new Map(projects.map((project) => [project.title, project]));

const projectLibrary: ProjectEntry[] = projectCategories.flatMap((category) =>
  category.projectTitles.flatMap((title) => {
    const project = projectByTitle.get(title);
    return project ? [{ category, project }] : [];
  })
);

const defaultProjectTitle = projectLibrary[0]?.project.title ?? "";

function getProjectsForCategory(category: ProjectCategory) {
  return projectLibrary
    .filter((entry) => entry.category.id === category.id)
    .map((entry) => entry.project);
}

function getLinkTarget(href: string) {
  return /^https?:\/\//.test(href) ? "_blank" : undefined;
}

function ProjectVisual({ project }: { project: Project }) {
  const preview = projectPreviews[project.title];

  if (preview) {
    return (
      <img
        src={preview}
        alt={`${project.title} project preview`}
        loading="eager"
      />
    );
  }

  return (
    <div className="project-visual__fallback" aria-hidden="true">
      <span>Decision model</span>
      <strong>{project.skills.slice(0, 3).join(" / ")}</strong>
      <div className="fallback-table">
        <i /><i /><i /><i /><i /><i />
      </div>
    </div>
  );
}

function ProjectDetail({ entry }: { entry: ProjectEntry }) {
  const { category, project } = entry;
  const isDashboardProject =
    project.title === semiconductorProjectTitle ||
    project.title === globalSourcingPredictorTitle ||
    project.title === evAssemblyCaseTitle;

  return (
    <section className="project-detail-panel" aria-live="polite">
      <div className="project-detail-heading">
        <div>
          <p className="project-detail__category">{category.title}</p>
          <h2>{project.title}</h2>
        </div>
        <p>{project.description}</p>
      </div>

      <article className={`project-row project-row--selected${isDashboardProject ? " project-row--dashboard" : ""}`}>
        <div className="project-row__visual">
          <ProjectVisual project={project} />
        </div>
        <div className="project-row__content">
          {project.badges ? (
            <div className="project-badge-list" aria-label={`${project.title} labels`}>
              {project.badges.map((badge) => <span key={badge}>{badge}</span>)}
            </div>
          ) : null}
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
                <a
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
    </section>
  );
}

function ProjectSelector({
  onSelect,
  selectedTitle
}: {
  onSelect: (title: string) => void;
  selectedTitle: string;
}) {
  return (
    <aside className="project-sidebar" aria-label="Project navigation">
      <p className="project-sidebar__label">Project Library</p>
      {projectCategories.map((category) => (
        <section className="project-sidebar__group" key={category.id}>
          <h2>{category.title}</h2>
          <div className="project-sidebar__list">
            {getProjectsForCategory(category).map((project) => (
              <button
                className={project.title === selectedTitle ? "is-selected" : undefined}
                type="button"
                aria-pressed={project.title === selectedTitle}
                onClick={() => onSelect(project.title)}
                key={project.title}
              >
                <span>{project.title}</span>
                <small>{project.skills.slice(0, 2).join(" · ")}</small>
              </button>
            ))}
          </div>
        </section>
      ))}
    </aside>
  );
}

export function ProjectsPage() {
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(defaultProjectTitle);
  const selectedEntry =
    projectLibrary.find((entry) => entry.project.title === selectedProjectTitle) ?? projectLibrary[0];

  return (
    <>
      <div id="top" />
      <SiteHeader page="projects" />
      <main>
        <section className="projects-hero">
          <div className="container-wide">
            <p className="projects-name">Shiven Parikh</p>
            <div className="projects-hero__layout">
              <h1>Supply Chain &amp; Sourcing Projects</h1>
            </div>
          </div>
        </section>

        <div className="container-wide project-library project-selector-layout">
          <ProjectSelector
            selectedTitle={selectedEntry?.project.title ?? ""}
            onSelect={setSelectedProjectTitle}
          />
          {selectedEntry ? <ProjectDetail entry={selectedEntry} /> : null}
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
