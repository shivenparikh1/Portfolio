import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EVAssemblyCasePage } from "./CaseStudyPages";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#ev-assembly-case-root");

if (!root) {
  throw new Error("EV assembly case root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <EVAssemblyCasePage />
  </StrictMode>
);
