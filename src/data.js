const resumeHref = "./assets/shiven-resume.pdf";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Writing", "writing"],
  ["Notes", "glossary"],
  ["Contact", "contact"]
];

const focusAreas = [
  {
    title: "Advanced Manufacturing",
    description:
      "Exploring supply chain systems used in complex industries where parts, materials, suppliers, and production timelines must be managed with accuracy."
  },
  {
    title: "Sourcing & Procurement",
    description:
      "Building projects around supplier comparison, landed cost analysis, procurement documentation, and vendor decision-making."
  },
  {
    title: "Inventory & Warehouse Operations",
    description:
      "Studying how companies receive, verify, store, track, and move products through inward, outward, and reverse logistics processes."
  },
  {
    title: "Analytics & Decision Support",
    description:
      "Using spreadsheets, dashboards, and structured analysis to turn supply chain data into clearer business decisions."
  }
];

const experiences = [
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

const projects = [
  {
    title: "iPhone Sourcing Cost Sheet Case Study",
    description:
      "Built a multi-sheet sourcing cost model to compare supplier pricing, landed cost, SKU expansion, vendor performance, and final sourcing recommendations. This project connects well to high-tech and semiconductor supply chains because it shows how sourcing decisions depend on cost, supplier reliability, shipping, duties, and total landed cost instead of unit price alone.",
    skills: ["Sourcing Analysis", "Landed Cost Modeling", "Supplier Comparison", "Procurement Decision Support", "Cost Breakdown"],
    tools: ["Google Sheets", "Excel", "Google Docs", "Cost Sheet Model", "Case Report PDF"],
    insights: ["The cheapest supplier is not always the best choice when shipping cost, duties, lead time, and vendor performance are included."],
    links: [
      { label: "View Project", href: "https://docs.google.com/spreadsheets/d/15Gr8eBAHjNAZ99r7JHt7nitAAsoYcfwoRmYWrbf8OGs/edit?usp=sharing" },
      { label: "Case Report PDF", href: "./assets/iphone-sourcing-cost-sheet-case-report.pdf" }
    ]
  },
  {
    title: "Global Sourcing Framework for AI Microchips",
    description:
      "Built a global sourcing comparison for AI microchips across Taiwan, South Korea, and a U.S. domestic hub. This student-built case study connects to semiconductor supply chains by comparing supplier geography, sourcing risk, cost, resilience, and strategic tradeoffs in a high-value component market.",
    skills: ["Global Sourcing", "Supplier Risk", "Semiconductor Supply Chain", "Cost Comparison", "Sourcing Strategy"],
    tools: ["Excel", "Google Sheets", "Sourcing Framework", "Scenario Comparison", "Case Report PDF"],
    insights: ["Microchip sourcing decisions should balance cost, supplier concentration, geopolitical risk, lead time, and supply resilience instead of focusing only on the lowest-cost region."],
    links: [
      { label: "Case Report PDF", href: "./assets/global-sourcing-ai-microchip-report.pdf" },
      { label: "Spreadsheet Model", href: "./assets/global-sourcing-ai-microchip-framework.xlsx" }
    ]
  },
  {
    title: "EV Assembly Logistics Readiness Case Study",
    description:
      "Built an electric vehicle assembly logistics case study using a bill of materials, kit-readiness analysis, shortage tracking, component risk scoring, and recovery planning. The project shows how materials visibility supports production readiness in an advanced manufacturing environment where missing or high-risk components can delay assembly.",
    skills: ["Materials Planning", "BOM Analysis", "Kit Readiness", "Shortage Risk Analysis", "Production Logistics"],
    tools: ["Excel", "Tableau", "BOM Workbook", "Shortage Tracker", "Case Study DOCX"],
    insights: ["Assembly readiness depends on identifying missing and high-risk components early, assigning recovery ownership, and connecting BOM requirements to shortage priorities."],
    links: [
      { label: "View Dashboard", href: "./assets/ev-assembly-logistics-readiness-dashboard.png" },
      { label: "BOM Spreadsheet", href: "./assets/ev-assembly-logistics-bom.xlsx" },
      { label: "Case Study DOCX", href: "./assets/ev-assembly-logistics-readiness-case-study.docx" }
    ]
  },
  {
    title: "SKU Inventory Tracking Dashboard",
    description:
      "Created an inventory tracking system to monitor SKU movement, stock levels, reorder alerts, and inventory status. This project shows how inventory control supports better planning in advanced manufacturing environments where missing parts, excess stock, or poor visibility can slow down operations.",
    skills: ["Inventory Management", "SKU Tracking", "Reorder Point Analysis", "Stock Movement Tracking", "Dashboard Reporting"],
    tools: ["Google Sheets", "Excel", "Inventory Master Sheet", "Stock Movement Log", "Summary Dashboard"],
    insights: ["Inventory visibility is one of the most important parts of preventing stockouts, overstocking, and operational delays."],
    links: [
      { label: "View Spreadsheet Dataset", href: "https://docs.google.com/spreadsheets/d/1tRVHwdz5r-wIbCv08SFFiERXUvPXcFvsEIw99Rxj8JI/edit?gid=406111085#gid=406111085" },
      { label: "View Tableau Dashboard", href: "./assets/supply-chain-inventory-control-dashboard.png" }
    ]
  },
  {
    title: "Warehouse Inward & Reverse Inward Case Study",
    description:
      "Developed a detailed warehouse operations case study based on inward and reverse inward processes at MSwipe. The project covers invoice checking, physical verification, box and device cross-checking, ERP updates, purchase entries, accounting handoff, and reverse logistics flow. This connects to advanced manufacturing because accurate receiving and documentation are critical when handling technical products and serialized inventory.",
    skills: ["Warehouse Operations", "Inbound Logistics", "Reverse Logistics", "Process Mapping", "ERP Workflow Understanding"],
    tools: ["Google Docs", "Process Flowcharts", "ERP Process Notes", "SOP Documentation", "Case Report PDF"],
    insights: ["A strong inward process reduces mismatch risk, improves inventory accuracy, and creates cleaner handoffs between warehouse, operations, and accounting teams."],
    links: [
      { label: "View Project", href: "./assets/warehouse-inward-reverse-inward-case-study.pdf" }
    ]
  },
  {
    title: "Supplier Evaluation Scorecard",
    description:
      "Built a supplier evaluation model to compare vendors across cost, lead time, quality, reliability, and overall performance. This project supports advanced manufacturing supply chains because industries like aerospace, defense, and semiconductors depend on suppliers that can deliver consistently, not just cheaply.",
    skills: ["Supplier Evaluation", "Vendor Scoring", "Risk Analysis", "Procurement Strategy", "Decision Modeling"],
    tools: ["Google Sheets", "Excel", "Supplier Scorecard", "Weighted Scoring Model", "Dashboard Summary"],
    insights: ["Supplier selection should balance cost, reliability, quality, and risk instead of focusing only on the lowest quoted price."],
    links: [
      { label: "View Project", href: "https://docs.google.com/spreadsheets/d/1isNEYD47TgExA5Wjflqh_QYZmAQzakrAys8E6G4sVKo/edit?usp=sharing" }
    ]
  },
  {
    title: "Advanced Manufacturing Distribution Center Location Case Study",
    description:
      "Created a location strategy case study for selecting a distribution center site for consumer electronics and advanced manufacturing products. The analysis compares cities using factors such as freight access, labor availability, market reach, infrastructure, and business environment to support a final location recommendation.",
    skills: ["Network Design", "Location Analysis", "Freight Access Evaluation", "Weighted Scoring", "Business Recommendation Writing"],
    tools: ["Google Sheets", "Excel", "Google Docs", "Scoring Matrix", "Case Report PDF"],
    insights: ["The best distribution center location is not just the cheapest city. It is the site that balances freight access, labor, customer reach, and long-term scalability."],
    links: [
      { label: "View Dashboard", href: "./assets/distribution-center-location-strategy-dashboard.png" },
      { label: "Case Report PDF", href: "./assets/distribution-center-location-strategy-case-report.pdf" },
      { label: "Spreadsheet Model", href: "./assets/distribution-center-location-strategy-model.xlsx" }
    ]
  },
  {
    title: "AI in Supply Chain Writing Series",
    description:
      "Wrote a supply chain article series exploring how AI is changing supplier risk management, supply chain volatility, and decision-making. This project shows interest in the future of supply chain technology and how analytics, automation, and human judgment can work together in complex industries.",
    skills: ["Supply Chain Writing", "AI Research", "Supplier Risk Thinking", "Business Communication", "Industry Analysis"],
    tools: ["Medium", "Google Docs", "Research Sources", "AI Tools", "LinkedIn"],
    insights: ["AI can improve supply chain visibility and decision-making, but it only works well when people understand the process, data, and business context behind it."],
    links: [
      {
        label: "AI and Humans",
        href: "https://medium.com/@shivenparikh1/ai-and-humans-in-supply-chain-the-coworker-we-didnt-hire-but-now-have-to-work-with-a5c4e3711006"
      },
      {
        label: "Same Prompt, Different Brain",
        href: "https://medium.com/@shivenparikh1/same-prompt-different-brain-why-no-two-ai-models-give-you-the-same-response-88c65e0f6ac4"
      },
      {
        label: "AI and Supplier Risk",
        href: "https://medium.com/@shivenparikh1/how-ai-is-changing-supplier-risk-management-36f9109d4e4c"
      },
      {
        label: "Future of Asteroid Mining",
        href: "https://medium.com/@shivenparikh1/beyond-earth-the-trillion-dollar-future-of-asteroid-mining-8c3c6f7253bd"
      }
    ]
  }
];

const projectCategories = [
  {
    id: "sourcing",
    title: "Sourcing & Supplier Management",
    description: "Cost analysis, supplier evaluation, procurement decisions, and vendor risk.",
    projectTitles: ["iPhone Sourcing Cost Sheet Case Study", "Global Sourcing Framework for AI Microchips", "Supplier Evaluation Scorecard"]
  },
  {
    id: "operations",
    title: "Inventory & Warehouse Operations",
    description: "Inventory visibility, receiving controls, warehouse processes, and reverse logistics.",
    projectTitles: ["SKU Inventory Tracking Dashboard", "Warehouse Inward & Reverse Inward Case Study"]
  },
  {
    id: "production",
    title: "Production & Materials Planning",
    description: "BOM analysis, kit readiness, component shortages, recovery planning, and production logistics.",
    projectTitles: ["EV Assembly Logistics Readiness Case Study"]
  },
  {
    id: "network",
    title: "Network Design & Logistics Analytics",
    description: "Distribution strategy, location analysis, freight access, and weighted decision models.",
    projectTitles: ["Advanced Manufacturing Distribution Center Location Case Study"]
  },
  {
    id: "technology",
    title: "Technology & Industry Research",
    description: "AI, supplier risk, business writing, and emerging supply chain technology.",
    projectTitles: ["AI in Supply Chain Writing Series"]
  }
];

const skillGroups = [
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

const articles = [
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

const glossary = [
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
