import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PurchaseToDispatchCasePage } from "./PortfolioCaseStudyPages";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#purchase-to-dispatch-case-root");

if (!root) {
  throw new Error("Purchase-to-dispatch case root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <PurchaseToDispatchCasePage />
  </StrictMode>
);
