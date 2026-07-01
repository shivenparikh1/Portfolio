import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SKUInventoryCasePage } from "./PortfolioCaseStudyPages";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#sku-inventory-case-root");

if (!root) {
  throw new Error("SKU inventory case root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <SKUInventoryCasePage />
  </StrictMode>
);
