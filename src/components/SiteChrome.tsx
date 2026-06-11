import { useState } from "react";
import { resumeHref } from "../data";
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
            <a href="./index.html">Portfolio</a>
            <a className="nav-resume" href={resumeHref} target="_blank" rel="noreferrer">
              Resume <Icon name="download" />
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
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#writing" onClick={closeMenu}>Writing</a>
          <a className="nav-resume" href={resumeHref} target="_blank" rel="noreferrer" onClick={closeMenu}>
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
      <div className="container-wide">
        <p><strong>SP / SHIVEN PARIKH</strong></p>
        <p>Supply Chain Portfolio</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
