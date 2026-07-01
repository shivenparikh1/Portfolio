import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SourcingCopilotCasePage } from "./PortfolioCaseStudyPages";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#sourcing-copilot-case-root");

if (!root) {
  throw new Error("Sourcing Copilot case root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <SourcingCopilotCasePage />
  </StrictMode>
);
