import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WarehouseOperationsCasePage } from "./PortfolioCaseStudyPages";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#warehouse-operations-case-root");

if (!root) {
  throw new Error("Warehouse operations case root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <WarehouseOperationsCasePage />
  </StrictMode>
);
