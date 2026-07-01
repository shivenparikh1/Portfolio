import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AIMicrochipCasePage } from "./PortfolioCaseStudyPages";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#ai-microchip-case-root");

if (!root) {
  throw new Error("AI microchip case root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <AIMicrochipCasePage />
  </StrictMode>
);
