import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandedCostCasePage } from "./CaseStudyPages";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#landed-cost-case-root");

if (!root) {
  throw new Error("Landed cost case root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <LandedCostCasePage />
  </StrictMode>
);
