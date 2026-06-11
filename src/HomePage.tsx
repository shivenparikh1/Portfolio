import type { Article, GlossaryGroup, Project, SkillGroup } from "./data";
import {
  articles,
  experiences,
  glossary,
  projects,
  resumeHref,
  skillGroups
} from "./data";
import { Icon } from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

interface FeaturedWork {
  project: Project;
  title: string;
  discipline: string;
  image: string;
  href: string;
  lead?: boolean;
}

const projectByTitle = new Map(projects.map((project) => [project.title, project]));

function requireProject(title: string) {
  const project = projectByTitle.get(title);

  if (!project) {
    throw new Error(`Missing project data: ${title}`);
  }

  return project;
}

function getPrimaryExperience() {
  const experience = experiences[0];

  if (!experience) {
    throw new Error("The portfolio requires at least one experience entry.");
  }

  return experience;
}

const primaryExperience = getPrimaryExperience();

const featuredWork: FeaturedWork[] = [
  {
    project: requireProject("EV Assembly Logistics Readiness Case Study"),
    title: "EV Assembly Logistics Readiness",
    discipline: "Production & materials planning",
    image: "./assets/ev-assembly-logistics-readiness-dashboard.png",
    href: "./assets/ev-assembly-logistics-readiness-dashboard.png",
    lead: true
  },
  {
    project: requireProject("Global Sourcing Framework for AI Microchips"),
    title: "Global Sourcing for AI Microchips",
    discipline: "Strategic sourcing",
    image: "./assets/supplier-scorecard-preview.png",
    href: "./assets/global-sourcing-ai-microchip-report.pdf"
  },
  {
    project: requireProject("Advanced Manufacturing Distribution Center Location Case Study"),
    title: "Distribution Center Location Strategy",
    discipline: "Network design",
    image: "./assets/distribution-center-location-strategy-dashboard.png",
    href: "./assets/distribution-center-location-strategy-dashboard.png"
  }
];

const experienceSteps = [
  ["01", "Inbound receiving", "Followed warehouse inward processes and inventory movement."],
  ["02", "Physical verification", "Cross-checked products, quantities, invoices, and stock."],
  ["03", "ERP updates", "Observed purchase entries and inventory record updates."],
  ["04", "Reverse logistics", "Studied returned-device intake and reverse inward workflows."],
  ["05", "Documentation handoff", "Mapped operational handoffs across warehouse and accounting."]
] as const;

const capabilityTitles = [
  "Sourcing & Procurement",
  "Inventory & Warehouse",
  "Analytics & Tools",
  "Advanced Manufacturing"
];

function FeaturedProject({ item }: { item: FeaturedWork }) {
  return (
    <article className={`featured-project${item.lead ? " featured-project--lead" : ""}`}>
      <a className="project-artifact" href={item.href} target="_blank" rel="noreferrer">
        <img
          src={item.image}
          alt={`${item.title} project artifact`}
          loading={item.lead ? "eager" : "lazy"}
        />
      </a>
      <div className="featured-project__copy">
        <p className="utility-label">{item.discipline}</p>
        <h3>{item.title}</h3>
        <p>{item.project.insights[0]}</p>
        <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
          View project <Icon name="arrow" />
        </a>
      </div>
    </article>
  );
}

function CapabilityColumn({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <article className="capability-column">
      <p className="capability-number">0{index + 1}</p>
      <h3>{capabilityTitles[index]}</h3>
      <ul>
        {group.items.slice(0, 6).map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

function WritingRow({ article, index }: { article: Article; index: number }) {
  return (
    <a className="writing-row" href={article.href} target="_blank" rel="noreferrer">
      <span className="writing-number">0{index + 1}</span>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <span className="writing-arrow"><Icon name="arrow" /></span>
    </a>
  );
}

function NotesGroup({ group }: { group: GlossaryGroup }) {
  return (
    <details className="notes-group">
      <summary>
        <span>{group.category}</span>
        <span>{group.items.length} terms</span>
      </summary>
      <dl>
        {group.items.map(([term, definition]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{definition}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

export function HomePage() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main>
        <section className="hero" id="home">
          <div className="drafting-line drafting-line--left" aria-hidden="true" />
          <div className="container-wide hero-grid">
            <div className="hero-copy">
              <h1>I turn supply chain complexity into clear operating decisions.</h1>
              <p className="hero-intro">
                Supply chain student building practical systems for sourcing, materials planning,
                warehouse operations, and analytics.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#work">
                  Explore selected work <Icon name="arrow" />
                </a>
                <a
                  className="button button--outline"
                  href="https://www.linkedin.com/in/shiven-parikh"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Icon name="external" />
                </a>
              </div>
              <p className="hero-meta">Arizona State University · Advanced manufacturing focus</p>
            </div>

            <div className="artifact-stack" aria-label="Selected supply chain project artifacts">
              <figure className="artifact-window artifact-window--sheet">
                <figcaption><span className="window-dot" /> BOM / assembly readiness</figcaption>
                <img src="./assets/supplier-scorecard-preview.png" alt="Supplier scorecard preview" />
              </figure>
              <figure className="artifact-window artifact-window--dashboard">
                <figcaption><span className="window-dot" /> Logistics readiness dashboard</figcaption>
                <img
                  src="./assets/ev-assembly-logistics-readiness-dashboard.png"
                  alt="EV assembly logistics dashboard"
                />
              </figure>
              <figure className="artifact-window artifact-window--network">
                <figcaption><span className="window-dot" /> Network location model</figcaption>
                <img
                  src="./assets/distribution-center-location-strategy-dashboard.png"
                  alt="Distribution center location dashboard"
                />
              </figure>
            </div>
          </div>

          <div className="capability-rail">
            <div className="container-wide capability-rail__inner">
              <span>Strategic sourcing</span>
              <span>Materials planning</span>
              <span>Warehouse operations</span>
              <span>Supply chain analytics</span>
              <span>Advanced manufacturing</span>
            </div>
          </div>
        </section>

        <section className="section selected-work" id="work">
          <div className="container-wide">
            <div className="section-header">
              <div>
                <p className="utility-label">Selected work / 03</p>
                <h2>Projects built around real operating questions.</h2>
              </div>
              <a className="text-link" href="./projects.html">
                View all projects <Icon name="arrow" />
              </a>
            </div>
            <div className="featured-grid">
              {featuredWork.map((item) => <FeaturedProject item={item} key={item.title} />)}
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="container-wide">
            <div className="section-header section-header--compact">
              <div>
                <p className="utility-label">Experience / 01</p>
                <h2>Supply chain operations, observed end to end.</h2>
              </div>
            </div>
            <div className="experience-layout">
              <div className="experience-intro">
                <p className="utility-label">{primaryExperience.company}</p>
                <h3>{primaryExperience.role}</h3>
                <p>{primaryExperience.description}</p>
              </div>
              <div className="experience-timeline">
                {experienceSteps.map(([number, title, description]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="container-wide">
            <div className="section-header section-header--compact">
              <div>
                <p className="utility-label">Capabilities / 04</p>
                <h2>A growing toolkit for complex supply chains.</h2>
              </div>
            </div>
            <div className="capability-matrix">
              {skillGroups.map((group, index) => (
                <CapabilityColumn group={group} index={index} key={group.category} />
              ))}
            </div>
          </div>
        </section>

        <section className="section writing" id="writing">
          <div className="container-wide">
            <div className="section-header">
              <div>
                <p className="utility-label">Writing / 04</p>
                <h2>Notes on AI, risk, and what supply chains might become.</h2>
              </div>
              <a
                className="text-link"
                href="https://medium.com/@shivenparikh1"
                target="_blank"
                rel="noreferrer"
              >
                Medium profile <Icon name="external" />
              </a>
            </div>
            <div className="writing-list">
              {articles.map((article, index) => (
                <WritingRow article={article} index={index} key={article.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="field-notes" id="notes">
          <div className="container-wide">
            <div className="field-notes__heading">
              <p className="utility-label">Field notes</p>
              <p>A working reference of terms gathered through coursework, projects, and operations exposure.</p>
            </div>
            <div className="notes-list">
              {glossary.map((group) => <NotesGroup group={group} key={group.category} />)}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container-wide contact-grid">
            <div>
              <p className="utility-label">Available for internships and early-career opportunities</p>
              <h2>Let’s build clearer systems.</h2>
            </div>
            <div className="contact-actions">
              <a href="mailto:shivenparikh1@gmail.com"><Icon name="mail" /> Email Shiven</a>
              <a
                href="https://www.linkedin.com/in/shiven-parikh"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Icon name="external" />
              </a>
              <a href={resumeHref} target="_blank" rel="noreferrer">
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
