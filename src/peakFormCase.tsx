import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PeakFormCasePage } from "./PeakFormCasePage";
import "./styles.css";
import "./projects.css";
import "./peakform.css";

const root = document.querySelector<HTMLDivElement>("#peakform-root");
if (!root) throw new Error("PeakForm case study root element was not found.");

createRoot(root).render(<StrictMode><PeakFormCasePage /></StrictMode>);
