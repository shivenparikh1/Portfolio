const root = document.querySelector("#root");

function icon(name) {
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"/><path d="M4 7h16v12H4z"/><path d="M4 12h16"/></svg>',
    file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>',
    article: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>'
  };
  return icons[name] || "";
}

function Section({ id, eyebrow, title, children, muted = false }) {
  return `
    <section class="section ${muted ? "section-muted" : ""}" id="${id}">
      <div class="container">
        <div class="section-heading">
          <span>${eyebrow}</span>
          <h2>${title}</h2>
        </div>
        ${children}
      </div>
    </section>
  `;
}

function ProjectCard(project, index) {
  const links = project.links || (project.file ? [{ label: "View Project", href: project.file }] : []);

  return `
    <article class="card project-card">
      <div class="card-kicker">Project ${index + 1}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${project.summary ? `<div class="project-detail"><h4>Project Summary</h4><p>${project.summary}</p></div>` : ""}
      <h4>Skills shown</h4>
      <div class="mini-tags">
        ${(project.tags || project.skills).map((skill) => `<span>${skill}</span>`).join("")}
      </div>
      <h4>Tools</h4>
      <div class="tool-tags">
        ${project.tools.map((tool) => `<span>${tool}</span>`).join("")}
      </div>
      ${
        project.features
          ? `<div class="project-detail"><h4>Key Dashboard Features</h4><ul>${project.features.map((item) => `<li>${item}</li>`).join("")}</ul></div>`
          : ""
      }
      ${project.businessValue ? `<div class="project-detail"><h4>Business Value</h4><p>${project.businessValue}</p></div>` : ""}
      ${
        project.insights
          ? `<div class="project-detail"><h4>Key Insights</h4><ol>${project.insights.map((item) => `<li>${item}</li>`).join("")}</ol></div>`
          : ""
      }
      ${
        links.length
          ? `<div class="project-links">${links
              .map((link) => `<a class="project-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label} ${icon("file")}</a>`)
              .join("")}</div>`
          : ""
      }
    </article>
  `;
}

function ExperienceCard(item) {
  return `
    <article class="experience-card card">
      <div class="experience-top">
        <div>
          <p class="card-kicker">${item.company}</p>
          <h3>${item.role}</h3>
        </div>
        <div class="icon-badge">${icon("briefcase")}</div>
      </div>
      <p>${item.description}</p>
      <ul class="check-list">
        ${item.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    </article>
  `;
}

function SkillGroup(group) {
  return `
    <article class="skill-card card">
      <h3>${group.category}</h3>
      <div class="skills-grid">${group.items.map((skill) => `<span>${skill}</span>`).join("")}</div>
    </article>
  `;
}

function ArticleCard(article) {
  return `
    <article class="article-card card">
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <a class="project-link" href="${article.href}" target="_blank" rel="noreferrer">Read on Medium ${icon("article")}</a>
    </article>
  `;
}

function GlossaryGroup(group) {
  return `
    <article class="glossary-group">
      <h3>${group.category}</h3>
      <div class="glossary-list">
        ${group.items
          .map(
            ([term, definition]) => `
              <div class="glossary-item">
                <dt>${term}</dt>
                <dd>${definition}</dd>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function render() {
  root.innerHTML = `
    <header class="site-header">
      <nav class="nav container" aria-label="Primary navigation">
        <a class="brand" href="#home">Shiven Parikh</a>
        <button class="menu-button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-links">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links" id="nav-links">
          ${navItems.map(([label, target]) => `<a href="#${target}">${label}</a>`).join("")}
        </div>
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="container hero-grid">
          <div class="hero-content">
            <h1>Shiven Parikh</h1>
            <p class="intro">
              Building practical supply chain projects across sourcing analysis, inventory control, warehouse operations, procurement workflows, dashboards, and business process documentation.
            </p>
            <div class="hero-actions">
              <a class="button primary" href="#projects">View Projects ${icon("arrow")}</a>
              <a class="button secondary" href="${resumeHref}">Download Resume</a>
              <a class="button secondary" href="https://www.linkedin.com/in/shiven-parikh" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            </div>
          </div>
          <div class="hero-visual" aria-label="Supply chain operations visual">
            <img src="./assets/supply-chain-hero.png" alt="Organized supply chain workspace with warehouse shelves, boxes, route lines, and dashboard elements" />
            <div class="metrics-panel" aria-hidden="true">
              <div><span>Focus</span><strong>Supply Chain</strong></div>
              <div><span>Work</span><strong>Projects</strong></div>
              <div><span>Tools</span><strong>Excel, Docs, Tableau</strong></div>
            </div>
          </div>
        </div>
      </section>

      ${Section({
        id: "about",
        eyebrow: "About Me",
        title: "Learning Supply Chain Through Projects and Operations",
        children: `
          <div class="about-panel">
            <p>
              I am a Supply Chain Management student at Arizona State University, and I am focused on learning supply chain through real examples, hands-on projects, and practical business situations. I am interested in how companies source products, work with vendors, manage inventory, run warehouse operations, and use data to make better decisions.
            </p>
            <p>
              My portfolio shows the projects I have built while learning these areas, including sourcing analysis, inventory dashboards, warehouse inward processes, supplier evaluation, procurement documentation, and supply chain writing.
            </p>
            <p>
              What interests me most about supply chain is that it connects so many parts of a business. It is not just about moving products. It is about solving problems, improving processes, reducing costs, and making decisions that affect how a company operates. My goal is to keep building practical projects that show what supply chain looks like in the real world, not just in a textbook.
            </p>
          </div>
        `
      })}

      ${Section({
        id: "projects",
        eyebrow: "Featured Projects",
        title: "Practical Supply Chain Project Work",
        muted: true,
        children: `
          <p class="section-intro">Hands-on projects in sourcing, inventory analytics, warehouse operations, procurement, and supplier evaluation.</p>
          <div class="project-grid">${projects.map(ProjectCard).join("")}</div>
        `
      })}

      ${Section({
        id: "experience",
        eyebrow: "Experience",
        title: "Internship and Work Experience",
        children: `
          <p class="section-intro">Internship and work experience that helped me build practical exposure to operations, documentation, communication, and process discipline.</p>
          <div class="experience-grid">${experiences.map(ExperienceCard).join("")}</div>
        `
      })}

      ${Section({
        id: "skills",
        eyebrow: "Skills",
        title: "Supply Chain, Analytics, and Business Skills",
        muted: true,
        children: `
          <p class="section-intro">A mix of supply chain, analytics, documentation, and business skills developed through projects, coursework, internship exposure, and independent learning.</p>
          <div class="skill-groups">${skillGroups.map(SkillGroup).join("")}</div>
        `
      })}

      ${Section({
        id: "writing",
        eyebrow: "Articles / Writing",
        title: "Supply Chain Writing",
        children: `
          <p class="section-intro">
            I write about supply chain, AI, supplier risk, operations, and technology to better understand industry trends and explain complex topics in a clear and practical way.
          </p>
          <div class="article-grid">${articles.map(ArticleCard).join("")}</div>
        `
      })}

      ${Section({
        id: "glossary",
        eyebrow: "Glossary / Notes",
        title: "Supply Chain Notes & Glossary",
        muted: true,
        children: `
          <p class="section-intro">
            A working collection of supply chain terms, process notes, and business concepts learned through coursework, independent study, internship observation, and portfolio projects.
          </p>
          <div class="glossary-grid">${glossary.map(GlossaryGroup).join("")}</div>
        `
      })}

      ${Section({
        id: "contact",
        eyebrow: "Contact",
        title: "Connect With Me",
        muted: true,
        children: `
          <div class="contact-grid">
            <div class="contact-copy">
              <p>
                I am currently building experience in supply chain, operations, logistics, procurement, and analytics. I am open to internships, project opportunities, mentorship, and professional connections.
              </p>
            </div>
            <div class="contact-card card">
              <a href="mailto:shivenparikh1@gmail.com">${icon("mail")} shivenparikh1@gmail.com</a>
              <a href="https://www.linkedin.com/in/shiven-parikh" target="_blank" rel="noreferrer">${icon("briefcase")} LinkedIn profile</a>
              <a href="https://medium.com/@shivenparikh1" target="_blank" rel="noreferrer">${icon("article")} Medium articles</a>
              <a href="#projects">${icon("file")} Portfolio projects</a>
              <a href="${resumeHref}" aria-label="Resume download placeholder">${icon("file")} Download Resume</a>
              <p><strong>Name:</strong> Shiven Parikh</p>
            </div>
          </div>
        `
      })}
    </main>

    <footer class="footer">
      <div class="container">
        <p>Shiven Parikh | Supply Chain Management Portfolio</p>
      </div>
    </footer>
  `;

  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
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
