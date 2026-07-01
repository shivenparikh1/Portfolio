import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DistributionCenterCasePage } from "./PortfolioCaseStudyPages";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#distribution-center-case-root");

if (!root) {
  throw new Error("Distribution center case root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <DistributionCenterCasePage />
  </StrictMode>
);
