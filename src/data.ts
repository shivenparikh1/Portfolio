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
export const sourcingCopilotTitle =
  "Global Sourcing Copilot: Supplier Comparison & Award Recommendation Tool";
export const sourcingCopilotCaseHref = "./global-sourcing-copilot.html";
export const sourcingCopilotHref = "https://sourcingcopilot.streamlit.app/";
export const sourcingCopilotPreviewHref =
  "./assets/global-sourcing-copilot-streamlit-preview.png";
export const globalSourcingPredictorTitle =
  "Sourcing Command";
export const globalSourcingPredictorHref =
  "https://global-sourcing-predictor-dashboard.vercel.app";
export const globalSourcingPredictorGithubHref =
  "https://github.com/shivenparikh1/global-sourcing-predictor-dashboard";
export const globalSourcingPredictorPreviewHref =
  "./assets/global-sourcing-predictor-command-center-preview.png";
export const aiMicrochipCaseTitle =
  "AI Microchip Global Sourcing Risk Framework";
export const aiMicrochipCaseHref = "./global-sourcing-ai-microchip.html";
export const aiMicrochipModelHref =
  "./assets/global-sourcing-ai-microchip-framework.xlsx";
export const aiMicrochipPreviewHref =
  "./assets/global-sourcing-ai-microchip-preview.png";
export const evAssemblyCaseTitle = "EV Assembly Logistics Readiness";
export const evAssemblyCaseHref = "./ev-assembly-logistics-readiness.html";
export const evAssemblyDashboardHref =
  "./assets/ev-assembly-logistics-readiness-dashboard.png";
export const evAssemblyBomHref = "./assets/ev-assembly-logistics-bom.xlsx";
export const landedCostCaseTitle = "Landed Cost & Supplier Comparison Model";
export const landedCostCaseHref = "./landed-cost-supplier-comparison.html";
export const landedCostPreviewHref =
  "./assets/landed-cost-supplier-comparison-cover.svg";
export const landedCostModelHref =
  "https://docs.google.com/spreadsheets/d/15Gr8eBAHjNAZ99r7JHt7nitAAsoYcfwoRmYWrbf8OGs/edit?usp=sharing";
export const supplierRiskSpreadsheetHref =
  "https://docs.google.com/spreadsheets/d/1isNEYD47TgExA5Wjflqh_QYZmAQzakrAys8E6G4sVKo/edit?usp=sharing";
export const supplierRiskDashboardHref =
  "./assets/supplier-scorecard-vendor-risk-dashboard.pdf";
export const warehouseOperationsCaseTitle = "MSWIPE Warehouse / Operations Case Study";
export const warehouseOperationsCaseHref =
  "./assets/warehouse-inward-reverse-inward-case-study.pdf";
export const warehouseOperationsPreviewHref =
  "./assets/warehouse-inward-reverse-inward-preview.png";
export const skuInventoryCaseTitle = "Warehouse SKU & Reorder Alert Dashboard";
export const skuInventoryCaseHref = "./sku-inventory-tracking.html";
export const skuInventoryDashboardHref =
  "./assets/supply-chain-inventory-control-dashboard.png";
export const skuInventoryModelHref =
  "https://docs.google.com/spreadsheets/d/1tRVHwdz5r-wIbCv08SFFiERXUvPXcFvsEIw99Rxj8JI/edit?gid=406111085#gid=406111085";
export const distributionCenterCaseTitle =
  "U.S. Distribution Center Location Strategy Model";
export const distributionCenterCaseHref =
  "./distribution-center-location-strategy.html";
export const distributionCenterDashboardHref =
  "./assets/distribution-center-location-strategy-dashboard.png";
export const distributionCenterModelHref =
  "./assets/distribution-center-location-strategy-model.xlsx";
export const vendorShippingCaseTitle = "Vendor Shipping Cost Comparison Analysis";
export const vendorShippingCaseHref = "./vendor-shipping-cost-comparison.html";
export const vendorShippingPdfHref =
  "./assets/vendor-shipping-cost-comparison-analysis.pdf";
export const vendorShippingSpreadsheetHref =
  "./assets/vendor-shipping-cost-comparison-analysis.xlsx";
export const vendorShippingPreviewHref =
  "./assets/vendor-shipping-cost-comparison-analysis.png";
export const purchaseToDispatchPreviewHref =
  "./assets/purchase-to-dispatch-workflow-analysis.png";

export const navItems = [
  ["Home", "home"],
  ["Focus", "focus"],
  ["Projects", "projects"],
  ["Articles", "articles"],
  ["AI in Sourcing", "ai"],
  ["Strategies", "strategies"],
  ["Experience", "experience"]
];

export const focusAreas = [
  {
    title: "Global Sourcing",
    description:
      "Understanding how companies compare suppliers across countries based on landed cost, lead time, freight, tariffs, supplier capability, contract terms, and regional risk."
  },
  {
    title: "Semiconductor Supply Chains",
    description:
      "Studying how semiconductor sourcing depends on OSAT suppliers, foundries, packaging capability, advanced packaging demand, geographic concentration, and supplier resilience."
  },
  {
    title: "Supplier Risk Analytics",
    description:
      "Building models that score suppliers based on disruption exposure, geopolitical risk, lead-time volatility, quality risk, financial scale, and data confidence."
  },
  {
    title: "Landed Cost & Trade Exposure",
    description:
      "Analyzing how freight, duties, tariffs, insurance, payment terms, supplier location, and trade policy change the true cost of sourcing decisions."
  },
  {
    title: "AI-Assisted Sourcing",
    description:
      "Using AI tools to support supplier research, RFQ comparison, country risk summaries, tariff scenario planning, supplier scorecards, and sourcing recommendation writing."
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
      "Compared 10 global OSAT suppliers using a weighted sourcing model built around country and trade risk, geographic diversification, technical capability, advanced packaging and AI fit, financial scale, U.S. buyer fit, cost exposure, and data confidence.",
    skills: [
      "Global Sourcing Strategy",
      "Supplier Risk Analysis",
      "OSAT / Semiconductor Packaging",
      "Weighted Supplier Scoring",
      "Country and Trade Risk Analysis"
    ],
    tools: [
      "Excel",
      "Tableau",
      "Public Supplier Research",
      "Weighted Scoring",
      "AI-Assisted Research"
    ],
    insights: [
      "Built to help a U.S.-based semiconductor buyer identify preferred, conditional, and high-risk OSAT suppliers under geopolitical, technical, and sourcing constraints. OSAT means outsourced semiconductor assembly and test, the supplier layer responsible for chip packaging, assembly, and testing."
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
      "A sourcing workspace that guides supplier intake, landed cost comparison, risk scoring, weighted decision logic, and final award recommendations.",
    skills: [
      "AI-Assisted Sourcing",
      "Supplier Comparison",
      "Landed Cost",
      "Risk Scoring",
      "Recommendation Memo"
    ],
    tools: ["Python", "Streamlit", "Rule-Based Scoring", "Sourcing Workflow", "Dashboard UI"],
    insights: [
      "A rule-based sourcing copilot prototype is stronger when it guides the user from requirements intake through supplier scoring, landed cost comparison, market signals, and award recommendation."
    ],
    links: [
      { label: "View Case Study", href: sourcingCopilotCaseHref },
      { label: "Launch App", href: sourcingCopilotHref }
    ]
  },
  {
    title: globalSourcingPredictorTitle,
    description:
      "A deployed sourcing command-center prototype for modeling suppliers, demand hubs, routes, risk events, product details, forecast readiness, and workflow intelligence across multiple workspaces.",
    skills: [
      "Global Sourcing",
      "Supplier Network Modeling",
      "Risk Intelligence",
      "Scenario Planning",
      "Dashboard UX"
    ],
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel", "GitHub"],
    insights: [
      "A sourcing command center is most useful when product details, supplier capacity, route structure, risk exposure, and missing-data warnings live in one workflow instead of separate spreadsheets."
    ],
    links: [
      { label: "Launch Sourcing Command", href: globalSourcingPredictorHref },
      { label: "View GitHub", href: globalSourcingPredictorGithubHref }
    ],
    badges: ["Live Website", "Command Center Prototype", "GitHub + Vercel"]
  },
  {
    title: aiMicrochipCaseTitle,
    description:
      "A regional semiconductor sourcing framework comparing Taiwan, South Korea, and U.S. domestic hub exposure across geopolitical risk, lead time, trade cost, capacity bottlenecks, supplier criticality, and substitution difficulty.",
    skills: ["Global Sourcing", "AI Microchips", "Semiconductor Supply Chain", "Scenario Analysis", "Supplier Risk"],
    tools: ["Excel", "Google Sheets", "Scenario Comparison", "Sourcing Framework"],
    insights: ["Recommended strategy: Taiwan for advanced foundry and packaging capability, South Korea for memory and HBM exposure, and U.S. suppliers as resilience and backup capacity rather than full replacement."],
    links: [
      { label: "View Case Study", href: aiMicrochipCaseHref },
      { label: "View Spreadsheet", href: aiMicrochipModelHref }
    ]
  },
  {
    title: landedCostCaseTitle,
    description:
      "A combined sourcing model for landed cost, supplier quote comparison, supplier risk scoring, dashboard review, and final recommendation logic.",
    skills: ["Landed Cost", "Supplier Selection", "Supplier Risk Scoring", "Cost Modeling", "Sourcing Analysis"],
    tools: ["Google Sheets", "Excel", "Cost Sheet Model", "Supplier Risk Spreadsheet", "Supplier Dashboard"],
    insights: ["Treating landed cost, supplier risk, and supplier comparison as one sourcing view prevents a low unit price from looking better than the full decision."],
    links: [
      { label: "View Case Study", href: landedCostCaseHref },
      { label: "Open Landed Cost Spreadsheet", href: landedCostModelHref },
      { label: "Open Supplier Risk Spreadsheet", href: supplierRiskSpreadsheetHref },
      { label: "View Supplier Risk Dashboard", href: supplierRiskDashboardHref }
    ]
  },
  {
    title: warehouseOperationsCaseTitle,
    description:
      "A real internship-based operations case study documenting warehouse inward, reverse inward, ERP controls, physical verification, QC, RMA, allocation, dispatch, and process improvement opportunities.",
    skills: ["Warehouse Operations", "Process Mapping", "Reverse Logistics", "ERP Workflow", "Inventory Control"],
    tools: ["Process Flowcharts", "ERP Process Notes", "SOP Documentation"],
    insights: ["Reliable sourcing outcomes still depend on accurate receiving, verification, inventory records, and cross-functional handoffs."],
    links: [
      { label: "View Case Study", href: warehouseOperationsCaseHref }
    ]
  },
  {
    title: evAssemblyCaseTitle,
    description:
      "A supporting operations project showing how supplier and inventory risk can create production-readiness issues across BOM structure, kit readiness, shortage tracking, component risk scoring, and recovery planning.",
    skills: ["Materials Planning", "BOM Analysis", "Kit Readiness", "Shortage Risk"],
    tools: ["Excel", "Tableau", "BOM Workbook", "Shortage Tracker"],
    insights: ["Production readiness depends on finding high-risk and missing components before they disrupt the assembly plan."],
    links: [
      { label: "View Case Study", href: evAssemblyCaseHref },
      { label: "View Dashboard", href: evAssemblyDashboardHref },
      { label: "View Spreadsheet", href: evAssemblyBomHref }
    ]
  },
  {
    title: skuInventoryCaseTitle,
    description:
      "A warehouse inventory dashboard tracking SKU availability, inventory value, reorder alerts, stock movement, and low-stock risk across multiple warehouse locations.",
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
      "A weighted network-design model comparing Chicago, Dallas-Fort Worth, Atlanta, Phoenix, and Columbus for a consumer electronics distribution center.",
    skills: ["Network Design", "Location Analysis", "Freight Access", "Weighted Scoring"],
    tools: ["Google Sheets", "Excel", "Scoring Matrix", "Dashboard"],
    insights: ["The best distribution center location is not just the cheapest city. It is the site that balances freight access, labor, customer reach, infrastructure, and long-term scalability."],
    links: [
      { label: "View Case Study", href: distributionCenterCaseHref },
      { label: "View Dashboard", href: distributionCenterDashboardHref },
      { label: "View Spreadsheet", href: distributionCenterModelHref }
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
      globalSourcingPredictorTitle,
      sourcingCopilotTitle,
      aiMicrochipCaseTitle,
      landedCostCaseTitle
    ]
  },
  {
    id: "operations",
    title: "Operations, Logistics & Network Analytics",
    description: "Operational evidence that supports sourcing judgment through receiving, inventory, production readiness, and network analysis.",
    projectTitles: [
      warehouseOperationsCaseTitle,
      evAssemblyCaseTitle,
      distributionCenterCaseTitle,
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
    title: "Global Supply Chains Are Not Back to Normal",
    description:
      "Explores why modern supply chains are no longer returning to a stable normal, but adapting to permanent disruption, volatility, trade risk, and sourcing complexity.",
    skills: ["Global Sourcing", "Supply Chain Risk", "Trade Disruption"],
    href: "https://medium.com/@shivenparikh1/global-supply-chains-are-not-back-to-normal-they-are-just-getting-better-at-being-weird-516aee75cace"
  },
  {
    title: "How AI Is Changing Supplier Risk Management",
    description: "Explores how AI can identify supplier risk, hidden fragility, early warning signals, and disruptions beyond first-tier suppliers.",
    skills: ["Supplier Risk", "AI in Sourcing", "Supply Chain Visibility"],
    href: "https://medium.com/@shivenparikh1/how-ai-is-changing-supplier-risk-management-36f9109d4e4c"
  },
  {
    title: "AI and Humans in Supply Chain",
    description: "Explores how AI is becoming a support tool in supply chain work and why human judgment still matters in planning, sourcing, and operations.",
    skills: ["AI Research", "Supply Chain Strategy", "Business Writing"],
    href: "https://medium.com/@shivenparikh1/ai-and-humans-in-supply-chain-the-coworker-we-didnt-hire-but-now-have-to-work-with-a5c4e3711006"
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
