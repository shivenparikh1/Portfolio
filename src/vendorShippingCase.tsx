import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { VendorShippingCasePage } from "./PortfolioCaseStudyPages";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#vendor-shipping-case-root");

if (!root) {
  throw new Error("Vendor shipping case root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <VendorShippingCasePage />
  </StrictMode>
);
