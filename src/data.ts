export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  skills: string[];
  tools: string[];
  insights: string[];
  links: ProjectLink[];
  badges?: string[];
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  projectTitles: string[];
}

export interface Experience {
  company: string;
  role: string;
  description: string;
  points: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Article {
  title: string;
  description: string;
  skills: string[];
  href: string;
}

export interface GlossaryGroup {
  category: string;
  items: Array<[term: string, definition: string]>;
}

export const resumeHref = "./assets/shiven-resume.pdf";
export const linkedinHref = "https://www.linkedin.com/in/shiven-parikh";
export const emailHref = "mailto:shivenparikh1@gmail.com";
export const semiconductorProjectTitle =
  "Semiconductor Packaging Global Sourcing & Supplier Risk Model";
export const semiconductorProjectHref = "./semiconductor-packaging-sourcing.html";
export const semiconductorDashboardHref =
  "./assets/semiconductor-packaging-supplier-risk-dashboard.png";
export const semiconductorExcelHref =
  "./assets/semiconductor-packaging-global-sourcing-supplier-risk-model.xlsx";
export const semiconductorCertificateHref =
  "./assets/introduction-to-semiconductor-packaging-coursera-certificate.pdf";
export const sourcingCopilotTitle = "Global Sourcing Copilot";
export const sourcingCopilotCaseHref = "./global-sourcing-copilot.html";
export const sourcingCopilotHref = "https://sourcingcopilot.streamlit.app/";
export const sourcingCopilotPreviewHref =
  "./assets/global-sourcing-copilot-streamlit-preview.png";
export const aiMicrochipCaseTitle =
  "Global Sourcing Strategy Model for AI Microchips";
export const aiMicrochipCaseHref = "./global-sourcing-ai-microchip.html";
export const aiMicrochipReportHref =
  "./assets/global-sourcing-ai-microchip-report.pdf";
export const aiMicrochipModelHref =
  "./assets/global-sourcing-ai-microchip-framework.xlsx";
export const aiMicrochipPreviewHref =
  "./assets/global-sourcing-ai-microchip-preview.png";
export const evAssemblyCaseTitle = "EV Assembly Logistics Readiness Case Study";
export const evAssemblyCaseHref = "./ev-assembly-logistics-readiness.html";
export const evAssemblyDashboardHref =
  "./assets/ev-assembly-logistics-readiness-dashboard.png";
export const evAssemblyBomHref = "./assets/ev-assembly-logistics-bom.xlsx";
export const evAssemblyDocHref =
  "./assets/ev-assembly-logistics-readiness-case-study.docx";
export const landedCostCaseTitle = "Landed Cost & Supplier Comparison Model";
export const landedCostCaseHref = "./landed-cost-supplier-comparison.html";
export const landedCostModelHref =
  "https://docs.google.com/spreadsheets/d/15Gr8eBAHjNAZ99r7JHt7nitAAsoYcfwoRmYWrbf8OGs/edit?usp=sharing";
export const landedCostPdfHref =
  "./assets/iphone-sourcing-cost-sheet-case-report.pdf";
export const landedCostDocHref =
  "./assets/iphone-sourcing-cost-sheet-case-report.docx";
export const warehouseOperationsCaseTitle = "Warehouse / Operations Case Study";
export const warehouseOperationsCaseHref = "./warehouse-operations-case-study.html";
export const warehouseOperationsReportHref =
  "./assets/warehouse-inward-reverse-inward-case-study.pdf";
export const warehouseOperationsPreviewHref =
  "./assets/warehouse-inward-reverse-inward-preview.png";
export const skuInventoryCaseTitle = "SKU Inventory Tracking Dashboard";
export const skuInventoryCaseHref = "./sku-inventory-tracking.html";
export const skuInventoryDashboardHref =
  "./assets/supply-chain-inventory-control-dashboard.png";
export const skuInventoryModelHref =
  "https://docs.google.com/spreadsheets/d/1tRVHwdz5r-wIbCv08SFFiERXUvPXcFvsEIw99Rxj8JI/edit?gid=406111085#gid=406111085";
export const distributionCenterCaseTitle =
  "Advanced Manufacturing Distribution Center Location Case Study";
export const distributionCenterCaseHref =
  "./distribution-center-location-strategy.html";
export const distributionCenterDashboardHref =
  "./assets/distribution-center-location-strategy-dashboard.png";
export const distributionCenterReportHref =
  "./assets/distribution-center-location-strategy-case-report.pdf";
export const distributionCenterModelHref =
  "./assets/distribution-center-location-strategy-model.xlsx";
export const vendorShippingCaseTitle = "Vendor Shipping Cost Comparison Analysis";
export const vendorShippingCaseHref = "./vendor-shipping-cost-comparison.html";
export const vendorShippingReportHref =
  "./assets/vendor-shipping-cost-comparison-analysis.pdf";
export const vendorShippingPreviewHref =
  "./assets/vendor-shipping-cost-comparison-analysis.png";
export const purchaseToDispatchCaseTitle =
  "Purchase-to-Dispatch Workflow Analysis";
export const purchaseToDispatchCaseHref = "./purchase-to-dispatch-workflow.html";
export const purchaseToDispatchReportHref =
  "./assets/purchase-to-dispatch-workflow-analysis.pdf";
export const purchaseToDispatchPreviewHref =
  "./assets/purchase-to-dispatch-workflow-analysis.png";

export const navItems = [
  ["Home", "home"],
  ["Focus", "focus"],
  ["Projects", "projects"],
  ["AI in Sourcing", "ai"],
  ["Strategies", "strategies"],
  ["Experience", "experience"],
  ["Contact", "contact"]
];

export const focusAreas = [
  {
    title: "Global Sourcing",
    description:
      "Understanding how companies compare suppliers across countries based on cost, lead time, freight, tariffs, supplier capability, and regional risk."
  },
  {
    title: "Strategic Sourcing",
    description:
      "Learning the structured process of analyzing spend, researching supplier markets, building RFQs, comparing suppliers, negotiating, and selecting sourcing strategies."
  },
  {
    title: "Sourcing Strategies",
    description:
      "Studying low-cost country sourcing, China Plus One, nearshoring, dual sourcing, and strategic supplier partnerships."
  },
  {
    title: "Supplier Risk Analytics",
    description:
      "Building models that score suppliers based on disruption risk, geopolitical exposure, lead-time volatility, quality risk, and region concentration."
  },
  {
    title: "AI Implementation",
    description:
      "Using AI tools to support supplier research, RFQ comparison, country risk summaries, landed cost scenarios, and sourcing recommendations."
  }
];

export const sourcingStrategies = [
  {
    title: "Low-Cost Country Sourcing",
    meaning:
      "Source from markets with structural labor, material, or production cost advantages.",
    works:
      "Works when savings remain meaningful after freight, duties, quality controls, and working-capital costs.",
    risks:
      "Long lead times, tariff exposure, quality variation, communication gaps, and disruption risk."
  },
  {
    title: "China Plus One",
    meaning:
      "Keep selected China capacity while developing an additional sourcing country.",
    works:
      "Works when a company needs diversification without abandoning an established supplier ecosystem.",
    risks:
      "Duplicate tooling, fragmented volume, qualification time, and hidden dependence on China-based inputs."
  },
  {
    title: "Nearshoring / Regional Sourcing",
    meaning:
      "Move supply closer to the primary customer or production market.",
    works:
      "Works when speed, responsiveness, lower inventory, and regional trade access offset higher unit costs.",
    risks:
      "Limited capacity, smaller supplier pools, wage inflation, and regional concentration."
  },
  {
    title: "Dual Sourcing / Multi-Sourcing",
    meaning:
      "Qualify two or more suppliers for the same material, component, or category.",
    works:
      "Works for critical items where continuity and negotiation leverage justify added complexity.",
    risks:
      "Lower supplier volume, inconsistent specifications, more coordination, and duplicate qualification costs."
  },
  {
    title: "Strategic Supplier Partnerships",
    meaning:
      "Build long-term supplier relationships around shared planning, capability, innovation, and performance.",
    works:
      "Works when the supplier owns critical knowledge, technology, capacity, or quality capability.",
    risks:
      "Supplier dependency, reduced competitive tension, switching barriers, and relationship governance."
  }
];

export const experiences: Experience[] = [
  {
    company: "MSWIPE",
    role: "Supply Chain Intern, MSwipe",
    description:
      "Observed and supported real supply chain operations involving warehouse inward, reverse inward, invoice verification, physical stock checking, ERP updates, purchase entry processes, and logistics documentation. Gained practical exposure to how companies manage inventory movement, documentation, warehouse coordination, and operational handoffs.",
    points: [
      "Warehouse Operations",
      "ERP Workflow",
      "Reverse Logistics",
      "Inventory Verification",
      "Process Documentation"
    ]
  }
];

export const projects: Project[] = [
  {
    title: semiconductorProjectTitle,
    description:
      "Compared 10 global OSAT suppliers using a weighted sourcing model built around country/trade risk, geographic diversification, technical capability, advanced packaging/AI fit, financial scale, U.S. buyer fit, cost exposure, and data confidence.",
    skills: [
      "Global Sourcing Strategy",
      "Supplier Risk Analysis",
      "OSAT / Semiconductor Packaging Research",
      "Weighted Supplier Scoring",
      "Country and Trade Risk Analysis",
      "Cost Exposure Modeling",
      "Data Confidence Scoring",
      "Tableau Dashboarding",
      "Excel Modeling",
      "AI-Assisted Research Workflow"
    ],
    tools: [
      "Excel",
      "Tableau",
      "Public Supplier Research",
      "Weighted Scoring",
      "AI-Assisted Research"
    ],
    insights: [
      "ASE Technology / ASE Group and Amkor Technology offered the strongest balance of capability, risk exposure, U.S. buyer fit, and sourcing resilience in this public-data portfolio model."
    ],
    links: [
      { label: "View Case Study", href: semiconductorProjectHref },
      { label: "View Dashboard", href: semiconductorDashboardHref },
      { label: "View Excel Model", href: semiconductorExcelHref },
      { label: "View Certificate", href: semiconductorCertificateHref }
    ],
    badges: ["Featured Project", "Newest Project", "Global Sourcing Focus"]
  },
  {
    title: sourcingCopilotTitle,
    description:
      "Built a Streamlit sourcing workspace that guides product intake, supplier discovery, scoring framework setup, weekly news review, dashboard comparison, AI insights, and recommendation export.",
    skills: [
      "AI-Assisted Sourcing",
      "Streamlit",
      "Supplier Comparison",
      "Landed Cost",
      "Risk Scoring",
      "Dashboarding",
      "Recommendation Memo"
    ],
    tools: ["Python", "Streamlit", "Session State", "Sourcing Workflow", "Dashboard UI"],
    insights: [
      "A sourcing tool is stronger when it guides the user from requirements intake through supplier scoring, risk review, and recommendation memo export."
    ],
    links: [
      { label: "View Case Study", href: sourcingCopilotCaseHref },
      { label: "Launch Streamlit App", href: sourcingCopilotHref }
    ]
  },
  {
    title: aiMicrochipCaseTitle,
    description:
      "A global sourcing model for AI microchips comparing Taiwan, South Korea, and a U.S. domestic hub across landed cost, lead time, tariffs, supplier capability, and risk exposure.",
    skills: ["Global Sourcing", "AI Microchips", "Landed Cost", "Supplier Comparison", "Sourcing Strategy"],
    tools: ["Excel", "Google Sheets", "Scenario Comparison", "Sourcing Framework"],
    insights: ["Global sourcing decisions are stronger when cost, capability, resilience, and regional exposure are evaluated together."],
    links: [
      { label: "View Case Study", href: aiMicrochipCaseHref },
      { label: "Case Report", href: aiMicrochipReportHref },
      { label: "Spreadsheet Model", href: aiMicrochipModelHref }
    ]
  },
  {
    title: "Supplier Risk Scoring Dashboard",
    description:
      "A dashboard that evaluates suppliers by disruption exposure, geopolitical risk, lead-time volatility, quality risk, and sourcing region concentration.",
    skills: ["Supplier Risk", "Risk Scoring", "Dashboarding", "Analytics"],
    tools: ["Excel", "Google Sheets", "Weighted Scorecard", "Dashboard Summary"],
    insights: ["A supplier risk score is most useful when it makes the source of exposure visible instead of reducing every risk to one unexplained number."],
    links: [
      { label: "View Scorecard", href: "https://docs.google.com/spreadsheets/d/1isNEYD47TgExA5Wjflqh_QYZmAQzakrAys8E6G4sVKo/edit?usp=sharing" },
      { label: "Risk Dashboard", href: "./assets/supplier-scorecard-vendor-risk-dashboard.pdf" }
    ]
  },
  {
    title: landedCostCaseTitle,
    description:
      "A model that compares unit cost, freight, duties, tariff exposure, lead time, and total landed cost to support sourcing decisions.",
    skills: ["Landed Cost", "Supplier Selection", "Cost Modeling", "Sourcing Analysis"],
    tools: ["Google Sheets", "Excel", "Cost Sheet Model", "Case Report"],
    insights: ["The lowest unit-price quote can become the wrong sourcing decision after freight, tariffs, duties, and lead-time costs are included."],
    links: [
      { label: "View Case Study", href: landedCostCaseHref },
      { label: "View Cost Model", href: landedCostModelHref },
      { label: "Case Report", href: landedCostPdfHref },
      { label: "Case Report", href: landedCostDocHref }
    ]
  },
  {
    title: warehouseOperationsCaseTitle,
    description:
      "A supporting operations project documenting warehouse inward, reverse inward, ERP updates, physical verification, and process flow.",
    skills: ["Warehouse Operations", "Process Mapping", "Reverse Logistics", "ERP Workflow"],
    tools: ["Process Flowcharts", "ERP Process Notes", "SOP Documentation", "Case Report"],
    insights: ["Reliable sourcing outcomes still depend on accurate receiving, verification, inventory records, and cross-functional handoffs."],
    links: [
      { label: "View Case Study", href: warehouseOperationsCaseHref },
      { label: "Case Report", href: warehouseOperationsReportHref }
    ]
  },
  {
    title: evAssemblyCaseTitle,
    description:
      "Built an electric vehicle assembly logistics case study using a bill of materials, kit-readiness analysis, shortage tracking, component risk scoring, and recovery planning.",
    skills: ["Materials Planning", "BOM Analysis", "Kit Readiness", "Shortage Risk"],
    tools: ["Excel", "Tableau", "BOM Workbook", "Shortage Tracker"],
    insights: ["Production readiness depends on finding high-risk and missing components before they disrupt the assembly plan."],
    links: [
      { label: "View Case Study", href: evAssemblyCaseHref },
      { label: "View Dashboard", href: evAssemblyDashboardHref },
      { label: "BOM Spreadsheet", href: evAssemblyBomHref },
      { label: "Case Report", href: evAssemblyDocHref }
    ]
  },
  {
    title: skuInventoryCaseTitle,
    description:
      "Created an inventory tracking system to monitor SKU movement, stock levels, reorder alerts, and inventory status.",
    skills: ["Inventory Management", "SKU Tracking", "Reorder Analysis", "Dashboarding"],
    tools: ["Google Sheets", "Excel", "Stock Movement Log", "Summary Dashboard"],
    insights: ["Inventory visibility supports sourcing by revealing demand, stockout exposure, and the timing of replenishment decisions."],
    links: [
      { label: "View Case Study", href: skuInventoryCaseHref },
      { label: "View Spreadsheet", href: skuInventoryModelHref },
      { label: "View Dashboard", href: skuInventoryDashboardHref }
    ]
  },
  {
    title: distributionCenterCaseTitle,
    description:
      "Created a location strategy case study comparing cities on freight access, labor availability, market reach, infrastructure, and business environment.",
    skills: ["Network Design", "Location Analysis", "Freight Access", "Weighted Scoring"],
    tools: ["Google Sheets", "Excel", "Scoring Matrix", "Case Report"],
    insights: ["The best distribution center location is not just the cheapest city. It is the site that balances freight access, labor, customer reach, and long-term scalability."],
    links: [
      { label: "View Case Study", href: distributionCenterCaseHref },
      { label: "View Dashboard", href: distributionCenterDashboardHref },
      { label: "Case Report", href: distributionCenterReportHref },
      { label: "Spreadsheet Model", href: distributionCenterModelHref }
    ]
  },
  {
    title: vendorShippingCaseTitle,
    description:
      "Compared a current small-shipment vendor against two alternatives across destination zones, base weights, additional-weight rates, savings, and cost increases.",
    skills: ["Vendor Comparison", "Freight Cost Analysis", "Small Parcel Shipping", "Cost Savings"],
    tools: ["Google Sheets", "Cost Comparison Table", "Decision Summary", "Case Report"],
    insights: ["Option 1 creates a 12.89% average saving versus the current vendor, but the final choice still needs service quality, reliability, and contract terms before execution."],
    links: [
      { label: "View Case Study", href: vendorShippingCaseHref },
      { label: "Case Report", href: vendorShippingReportHref }
    ]
  },
  {
    title: purchaseToDispatchCaseTitle,
    description:
      "Mapped the purchasing-to-dispatch workflow across requester, procurement, vendor, warehouse, finance, logistics, and ERP handoffs.",
    skills: ["Procure-to-Dispatch", "Process Mapping", "ERP Workflow", "Operational Controls"],
    tools: ["Workflow Diagram", "Swimlane Analysis", "Risk Points", "Case Report"],
    insights: ["A standardized checklist across PR, RFQ, vendor comparison, PO, invoice matching, inward verification, ERP update, allocation, and dispatch reduces handoff errors."],
    links: [
      { label: "View Case Study", href: purchaseToDispatchCaseHref },
      { label: "Case Report", href: purchaseToDispatchReportHref }
    ]
  }
];

export const projectCategories: ProjectCategory[] = [
  {
    id: "sourcing",
    title: "Sourcing Strategy, Cost & Supplier Risk",
    description: "Primary work in supplier comparison, sourcing strategy, landed cost, risk analytics, and AI-assisted procurement.",
    projectTitles: [
      semiconductorProjectTitle,
      sourcingCopilotTitle,
      landedCostCaseTitle,
      aiMicrochipCaseTitle,
      vendorShippingCaseTitle,
      "Supplier Risk Scoring Dashboard"
    ]
  },
  {
    id: "operations",
    title: "Operations, Logistics & Network Analytics",
    description: "Operational evidence that supports sourcing judgment through receiving, inventory, production readiness, and network analysis.",
    projectTitles: [
      evAssemblyCaseTitle,
      distributionCenterCaseTitle,
      warehouseOperationsCaseTitle,
      purchaseToDispatchCaseTitle,
      skuInventoryCaseTitle
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Sourcing & Procurement",
    items: ["Supplier Evaluation", "Landed Cost Analysis", "Purchase Orders", "Vendor Comparison", "Procurement Documentation", "RFQ Understanding"]
  },
  {
    category: "Inventory & Warehouse Operations",
    items: ["SKU Tracking", "Inventory Control", "Reorder Alerts", "Cycle Counting", "Inbound Logistics", "Reverse Logistics", "ERP Workflow"]
  },
  {
    category: "Analytics & Tools",
    items: ["Excel", "Google Sheets", "Tableau", "Dashboard Design", "Pivot Tables", "XLOOKUP", "SUMIFS", "Data Cleaning"]
  },
  {
    category: "Advanced Manufacturing Focus",
    items: ["Supplier Risk", "Materials Planning", "Component Distribution", "Aerospace & Defense Supply Chain", "High-Tech Supply Chain", "Semiconductor Supply Chain", "Documentation Accuracy"]
  }
];

export const articles: Article[] = [
  {
    title: "AI and Humans in Supply Chain",
    description: "Explores how AI is becoming a support tool in supply chain work and why human judgment still matters in planning, sourcing, and operations.",
    skills: ["Business Writing", "AI Research", "Supply Chain Strategy"],
    href: "https://medium.com/@shivenparikh1/ai-and-humans-in-supply-chain-the-coworker-we-didnt-hire-but-now-have-to-work-with-a5c4e3711006"
  },
  {
    title: "Same Prompt, Different Brain",
    description: "Explores why different AI models respond differently to the same prompt and what that means for research, productivity, and practical business use.",
    skills: ["AI Research", "Technology Analysis", "Business Communication"],
    href: "https://medium.com/@shivenparikh1/same-prompt-different-brain-why-no-two-ai-models-give-you-the-same-response-88c65e0f6ac4"
  },
  {
    title: "How AI Is Changing Supplier Risk Management",
    description: "Explores how AI can identify supplier risk, hidden fragility, early warning signals, and disruptions beyond first-tier suppliers.",
    skills: ["Supplier Risk", "Research", "Advanced Manufacturing"],
    href: "https://medium.com/@shivenparikh1/how-ai-is-changing-supplier-risk-management-36f9109d4e4c"
  },
  {
    title: "Beyond Earth: The Future of Asteroid Mining",
    description: "Examines future resource extraction, asteroid mining, and the long-term business possibilities of space-based supply chains.",
    skills: ["Industry Research", "Emerging Technology", "Business Writing"],
    href: "https://medium.com/@shivenparikh1/beyond-earth-the-trillion-dollar-future-of-asteroid-mining-8c3c6f7253bd"
  }
];

export const glossary: GlossaryGroup[] = [
  {
    category: "General Supply Chain Terms",
    items: [
      ["SKU", "Stock Keeping Unit. A unique code used to identify and track a product."],
      ["3PL", "Third Party Logistics. A company that handles logistics services such as transportation, warehousing, or distribution."],
      ["4PL", "Fourth Party Logistics. A company that manages a business's larger supply chain network and coordinates multiple logistics providers."],
      ["FIFO", "First In, First Out. Inventory method where older stock is used or shipped first."],
      ["LIFO", "Last In, First Out. Inventory method where newer stock is used or shipped first."],
      ["MOQ", "Minimum Order Quantity. The minimum amount a buyer must purchase from a supplier."],
      ["EOQ", "Economic Order Quantity. A formula or concept used to decide the ideal order quantity while balancing inventory and ordering costs."],
      ["OTIF", "On Time In Full. A measure of whether deliveries arrive on time and with the complete quantity."],
      ["TMS", "Transportation Management System. Software used to manage shipping, carriers, routes, and transportation costs."]
    ]
  },
  {
    category: "Procurement Terms",
    items: [
      ["PR", "Purchase Request. An internal request for items or services needed by a company."],
      ["RFQ", "Request for Quotation. A request sent to vendors to get pricing and terms."],
      ["Vendor Selection", "The process of choosing a supplier based on cost, quality, lead time, reliability, and terms."],
      ["PO", "Purchase Order. A formal document sent to a vendor confirming what the company wants to buy."],
      ["Indent Request", "A purchase request that includes product details, quantity, description, unit of measurement, address, and approval information."]
    ]
  },
  {
    category: "Warehouse and Inventory Terms",
    items: [
      ["Fresh Inward", "The process of receiving new products or devices into the company."],
      ["Reverse Inward", "The process of receiving returned products back into the company."],
      ["Consumable Inward", "The process of receiving consumable materials such as packing supplies."],
      ["Physical Verification", "Checking products physically to confirm quantity and condition."],
      ["Allocation", "Assigning products or inventory to specific locations, stores, or orders."],
      ["Live Stock Report", "A report that shows how much stock is available in each location."]
    ]
  },
  {
    category: "Finance and Risk Terms",
    items: [
      ["Bank Guarantee", "A bank-backed payment guarantee."],
      ["Escrow Account", "An account where money is held until purchase conditions are met."],
      ["CAPEX", "Capital Expenditure. Spending on fixed assets such as POS machines that depreciate over time."],
      ["Contractual Risk Management", "Managing risks through contracts, terms, and legal agreements."]
    ]
  }
];
