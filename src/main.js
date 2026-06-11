const root = document.querySelector("#root");

function icon(name) {
  const icons = {
    arrow:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    download:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 20h14"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5"/><path d="m10 14 9-9"/><path d="M19 13v6H5V5h6"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>'
  };

  return icons[name] || "";
}

const featuredWork = [
  {
    project: projects.find((item) => item.title === "EV Assembly Logistics Readiness Case Study"),
    title: "EV Assembly Logistics Readiness",
    discipline: "Production & materials planning",
    image: "./assets/ev-assembly-logistics-readiness-dashboard.png",
    href: "./assets/ev-assembly-logistics-readiness-dashboard.png",
    lead: true
  },
  {
    project: projects.find((item) => item.title === "Global Sourcing Framework for AI Microchips"),
    title: "Global Sourcing for AI Microchips",
    discipline: "Strategic sourcing",
    image: "./assets/supplier-scorecard-preview.png",
    href: "./assets/global-sourcing-ai-microchip-report.pdf"
  },
  {
    project: projects.find(
      (item) => item.title === "Advanced Manufacturing Distribution Center Location Case Study"
    ),
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
];

function FeaturedProject(item) {
  return `
    <article class="featured-project ${item.lead ? "featured-project--lead" : ""}">
      <a class="project-artifact" href="${item.href}" target="_blank" rel="noreferrer">
        <img src="${item.image}" alt="${item.title} project artifact" loading="${item.lead ? "eager" : "lazy"}" />
      </a>
      <div class="featured-project__copy">
        <p class="utility-label">${item.discipline}</p>
        <h3>${item.title}</h3>
        <p>${item.project.insights[0]}</p>
        <a class="text-link" href="${item.href}" target="_blank" rel="noreferrer">
          View project ${icon("arrow")}
        </a>
      </div>
    </article>
  `;
}

function CapabilityColumn(group, index) {
  const titles = [
    "Sourcing & Procurement",
    "Inventory & Warehouse",
    "Analytics & Tools",
    "Advanced Manufacturing"
  ];

  return `
    <article class="capability-column">
      <p class="capability-number">0${index + 1}</p>
      <h3>${titles[index]}</h3>
      <ul>
        ${group.items.slice(0, 6).map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `;
}

function WritingRow(article, index) {
  return `
    <a class="writing-row" href="${article.href}" target="_blank" rel="noreferrer">
      <span class="writing-number">0${index + 1}</span>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <span class="writing-arrow">${icon("arrow")}</span>
    </a>
  `;
}

function GlossaryGroup(group) {
  return `
    <details class="notes-group">
      <summary>
        <span>${group.category}</span>
        <span>${group.items.length} terms</span>
      </summary>
      <dl>
        ${group.items
          .map(
            ([term, definition]) => `
              <div>
                <dt>${term}</dt>
                <dd>${definition}</dd>
              </div>
            `
          )
          .join("")}
      </dl>
    </details>
  `;
}

function render() {
  root.innerHTML = `
    <header class="site-header">
      <nav class="nav container-wide" aria-label="Primary navigation">
        <a class="brand" href="#home"><span>SP</span> / SHIVEN PARIKH</a>
        <button class="menu-button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-links">
          <span></span><span></span>
        </button>
        <div class="nav-links" id="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#writing">Writing</a>
          <a class="nav-resume" href="${resumeHref}" target="_blank">Resume ${icon("download")}</a>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="drafting-line drafting-line--left" aria-hidden="true"></div>
        <div class="container-wide hero-grid">
          <div class="hero-copy">
            <h1>I turn supply chain complexity into clear operating decisions.</h1>
            <p class="hero-intro">
              Supply chain student building practical systems for sourcing, materials planning,
              warehouse operations, and analytics.
            </p>
            <div class="hero-actions">
              <a class="button button--primary" href="#work">Explore selected work ${icon("arrow")}</a>
              <a class="button button--outline" href="https://www.linkedin.com/in/shiven-parikh" target="_blank" rel="noreferrer">
                LinkedIn ${icon("external")}
              </a>
            </div>
            <p class="hero-meta">Arizona State University · Advanced manufacturing focus</p>
          </div>

          <div class="artifact-stack" aria-label="Selected supply chain project artifacts">
            <figure class="artifact-window artifact-window--sheet">
              <figcaption><span class="window-dot"></span> BOM / assembly readiness</figcaption>
              <img src="./assets/supplier-scorecard-preview.png" alt="Supplier scorecard preview" />
            </figure>
            <figure class="artifact-window artifact-window--dashboard">
              <figcaption><span class="window-dot"></span> Logistics readiness dashboard</figcaption>
              <img src="./assets/ev-assembly-logistics-readiness-dashboard.png" alt="EV assembly logistics dashboard" />
            </figure>
            <figure class="artifact-window artifact-window--network">
              <figcaption><span class="window-dot"></span> Network location model</figcaption>
              <img src="./assets/distribution-center-location-strategy-dashboard.png" alt="Distribution center location dashboard" />
            </figure>
          </div>
        </div>

        <div class="capability-rail">
          <div class="container-wide capability-rail__inner">
            <span>Strategic sourcing</span>
            <span>Materials planning</span>
            <span>Warehouse operations</span>
            <span>Supply chain analytics</span>
            <span>Advanced manufacturing</span>
          </div>
        </div>
      </section>

      <section class="section selected-work" id="work">
        <div class="container-wide">
          <div class="section-header">
            <div>
              <p class="utility-label">Selected work / 03</p>
              <h2>Projects built around real operating questions.</h2>
            </div>
            <a class="text-link" href="./projects.html">View all projects ${icon("arrow")}</a>
          </div>
          <div class="featured-grid">
            ${featuredWork.map(FeaturedProject).join("")}
          </div>
        </div>
      </section>

      <section class="section experience" id="experience">
        <div class="container-wide">
          <div class="section-header section-header--compact">
            <div>
              <p class="utility-label">Experience / 01</p>
              <h2>Supply chain operations, observed end to end.</h2>
            </div>
          </div>

          <div class="experience-layout">
            <div class="experience-intro">
              <p class="utility-label">${experiences[0].company}</p>
              <h3>${experiences[0].role}</h3>
              <p>${experiences[0].description}</p>
            </div>
            <div class="experience-timeline">
              ${experienceSteps
                .map(
                  ([number, title, description]) => `
                    <article>
                      <span>${number}</span>
                      <h4>${title}</h4>
                      <p>${description}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="section capabilities" id="capabilities">
        <div class="container-wide">
          <div class="section-header section-header--compact">
            <div>
              <p class="utility-label">Capabilities / 04</p>
              <h2>A growing toolkit for complex supply chains.</h2>
            </div>
          </div>
          <div class="capability-matrix">
            ${skillGroups.map(CapabilityColumn).join("")}
          </div>
        </div>
      </section>

      <section class="section writing" id="writing">
        <div class="container-wide">
          <div class="section-header">
            <div>
              <p class="utility-label">Writing / 04</p>
              <h2>Notes on AI, risk, and what supply chains might become.</h2>
            </div>
            <a class="text-link" href="https://medium.com/@shivenparikh1" target="_blank" rel="noreferrer">
              Medium profile ${icon("external")}
            </a>
          </div>
          <div class="writing-list">
            ${articles.map(WritingRow).join("")}
          </div>
        </div>
      </section>

      <section class="field-notes" id="notes">
        <div class="container-wide">
          <div class="field-notes__heading">
            <p class="utility-label">Field notes</p>
            <p>A working reference of terms gathered through coursework, projects, and operations exposure.</p>
          </div>
          <div class="notes-list">
            ${glossary.map(GlossaryGroup).join("")}
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="container-wide contact-grid">
          <div>
            <p class="utility-label">Available for internships and early-career opportunities</p>
            <h2>Let’s build clearer systems.</h2>
          </div>
          <div class="contact-actions">
            <a href="mailto:shivenparikh1@gmail.com">${icon("mail")} Email Shiven</a>
            <a href="https://www.linkedin.com/in/shiven-parikh" target="_blank" rel="noreferrer">
              LinkedIn ${icon("external")}
            </a>
            <a href="${resumeHref}" target="_blank">Resume ${icon("download")}</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container-wide">
        <p><strong>SP / SHIVEN PARIKH</strong></p>
        <p>Supply Chain Portfolio</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  `;

  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    });
  });
}

render();
