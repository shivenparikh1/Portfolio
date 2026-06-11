const projectsRoot = document.querySelector("#projects-root");

function icon(name) {
  const icons = {
    arrow:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    download:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 20h14"/></svg>'
  };

  return icons[name] || "";
}

const projectPreviews = {
  "Supplier Evaluation Scorecard": "./assets/supplier-scorecard-preview.png",
  "EV Assembly Logistics Readiness Case Study":
    "./assets/ev-assembly-logistics-readiness-dashboard.png",
  "SKU Inventory Tracking Dashboard": "./assets/supply-chain-inventory-control-dashboard.png",
  "Warehouse Inward & Reverse Inward Case Study":
    "./assets/warehouse-inward-reverse-inward-preview.png",
  "Advanced Manufacturing Distribution Center Location Case Study":
    "./assets/distribution-center-location-strategy-dashboard.png"
};

function getProjectsForCategory(category) {
  return category.projectTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);
}

function ProjectVisual(project) {
  const preview = projectPreviews[project.title];

  if (preview) {
    return `<img src="${preview}" alt="${project.title} preview" loading="lazy" />`;
  }

  return `
    <div class="project-visual__fallback" aria-hidden="true">
      <span>Decision model</span>
      <strong>${project.tools.slice(0, 3).join(" / ")}</strong>
      <div class="fallback-lines"></div>
    </div>
  `;
}

function ProjectRow(project, index) {
  return `
    <article class="project-row">
      <div class="project-row__number">${String(index + 1).padStart(2, "0")}</div>
      <div class="project-row__visual">${ProjectVisual(project)}</div>
      <div class="project-row__content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-meta">
          <div>
            <span>Focus</span>
            <p>${project.skills.slice(0, 3).join(" · ")}</p>
          </div>
          <div>
            <span>Tools</span>
            <p>${project.tools.slice(0, 3).join(" · ")}</p>
          </div>
        </div>
        <blockquote>${project.insights[0]}</blockquote>
        <div class="project-links">
          ${project.links
            .map(
              (link) => `
                <a href="${link.href}" target="_blank" rel="noreferrer">
                  ${link.label} ${icon("arrow")}
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function CategorySection(category) {
  const categoryProjects = getProjectsForCategory(category);

  return `
    <section class="project-category-section" id="${category.id}">
      <div class="category-heading">
        <div>
          <p class="utility-label">${String(categoryProjects.length).padStart(2, "0")} projects</p>
          <h2>${category.title}</h2>
        </div>
        <p>${category.description}</p>
      </div>
      <div class="project-rows">
        ${categoryProjects.map(ProjectRow).join("")}
      </div>
    </section>
  `;
}

projectsRoot.innerHTML = `
  <header class="site-header">
    <nav class="nav container-wide" aria-label="Projects navigation">
      <a class="brand" href="./index.html"><span>SP</span> / SHIVEN PARIKH</a>
      <div class="projects-nav-actions">
        <a href="./index.html">Portfolio</a>
        <a class="nav-resume" href="${resumeHref}" target="_blank">Resume ${icon("download")}</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="projects-hero">
      <div class="container-wide">
        <div class="projects-hero__title">
          <p class="utility-label">Project library / ${String(projects.length).padStart(2, "0")}</p>
          <h1>Supply chain work, organized by the decisions it supports.</h1>
        </div>
        <p class="projects-hero__copy">
          Practical case studies spanning sourcing, inventory, warehouse operations,
          production readiness, network design, and emerging technology.
        </p>
        <nav class="category-nav" aria-label="Project categories">
          ${projectCategories
            .map(
              (category, index) =>
                `<a href="#${category.id}"><span>0${index + 1}</span>${category.title}</a>`
            )
            .join("")}
        </nav>
      </div>
    </section>

    <div class="container-wide project-library">
      ${projectCategories.map(CategorySection).join("")}
    </div>

    <section class="contact projects-contact">
      <div class="container-wide contact-grid">
        <div>
          <p class="utility-label">More context</p>
          <h2>See the thinking behind the work.</h2>
        </div>
        <div class="contact-actions">
          <a href="./index.html#experience">Experience ${icon("arrow")}</a>
          <a href="./index.html#writing">Writing ${icon("arrow")}</a>
          <a href="mailto:shivenparikh1@gmail.com">Contact ${icon("arrow")}</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container-wide">
      <p><strong>SP / SHIVEN PARIKH</strong></p>
      <p>Supply Chain Portfolio</p>
      <a href="#">Back to top ↑</a>
    </div>
  </footer>
`;
