import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SemiconductorProjectPage } from "./SemiconductorProjectPage";
import "./styles.css";
import "./projects.css";

const root = document.querySelector<HTMLDivElement>("#semiconductor-project-root");

if (!root) {
  throw new Error("Semiconductor project root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <SemiconductorProjectPage />
  </StrictMode>
);
