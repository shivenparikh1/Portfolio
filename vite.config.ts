import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        portfolio: "index.html",
        projects: "projects.html",
        semiconductorProject: "semiconductor-packaging-sourcing.html",
        evAssemblyCase: "ev-assembly-logistics-readiness.html",
        landedCostCase: "landed-cost-supplier-comparison.html",
        sourcingCopilotCase: "global-sourcing-copilot.html",
        aiMicrochipCase: "global-sourcing-ai-microchip.html",
        warehouseOperationsCase: "warehouse-operations-case-study.html",
        distributionCenterCase: "distribution-center-location-strategy.html",
        vendorShippingCase: "vendor-shipping-cost-comparison.html",
        purchaseToDispatchCase: "purchase-to-dispatch-workflow.html",
        skuInventoryCase: "sku-inventory-tracking.html"
      }
    }
  }
});
