import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProjectsPage } from "./ProjectsPage";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#projects-root");

if (!root) {
  throw new Error("Projects root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <ProjectsPage />
  </StrictMode>
);
