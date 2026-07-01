import { useState } from "react";
import { emailHref, linkedinHref, navItems, resumeHref } from "../data";
import { Icon } from "./Icon";

interface SiteHeaderProps {
  page?: "home" | "projects";
}

export function SiteHeader({ page = "home" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (page === "projects") {
    return (
      <header className="site-header">
        <nav className="nav container-wide" aria-label="Projects navigation">
          <a className="brand" href="./index.html">
            <span>SP</span> / SHIVEN PARIKH
          </a>
          <div className="projects-nav-actions">
            <a href="./index.html">Home</a>
            <a className="nav-resume" href={resumeHref} download="Shiven-Parikh-Resume.pdf">
              Download Resume <Icon name="download" />
            </a>
          </div>
        </nav>
      </header>
    );
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container-wide" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span>SP</span> / SHIVEN PARIKH
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="nav-links">
          {navItems.slice(1, 5).map(([label, id]) => (
            <a href={`#${id}`} onClick={closeMenu} key={id}>{label}</a>
          ))}
          <a className="nav-resume" href={resumeHref} download="Shiven-Parikh-Resume.pdf" onClick={closeMenu}>
            Resume <Icon name="download" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container-wide footer-grid">
        <div className="footer-intro">
          <p className="brand"><span>SP</span> / SHIVEN PARIKH</p>
          <p>Global sourcing, supplier risk, landed cost, and AI-assisted procurement analysis.</p>
        </div>
        <nav aria-label="Footer navigation">
          <strong>Navigation</strong>
          <a href="./index.html#focus">Current Focus</a>
          <a href="./index.html#projects">Projects</a>
          <a href="./index.html#strategies">Sourcing Strategies</a>
          <a href="./index.html#experience">Experience</a>
          <a href="./index.html#articles">Articles</a>
        </nav>
        <div>
          <strong>Contact</strong>
          <a href={emailHref}>shivenparikh1@gmail.com</a>
          <a href={linkedinHref} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={resumeHref} download="Shiven-Parikh-Resume.pdf">Download Resume</a>
        </div>
        <div className="footer-meta">
          <strong>Portfolio</strong>
          <a href="./projects.html">All Projects</a>
          <a href="#top">Back to top</a>
          <span>© {new Date().getFullYear()} Shiven Parikh</span>
        </div>
      </div>
    </footer>
  );
}
