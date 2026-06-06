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

const experiences = [
  {
    company: "MSWIPE",
    role: "Supply Chain Intern / Supply Chain Department Experience",
    description:
      "Gained first-hand exposure to supply chain operations inside a POS device company, including warehouse processes, inward and reverse inward workflows, invoice handling, vendor documentation, ERP-related updates, inventory movement, and internal coordination between departments.",
    points: [
      "Observed how warehouse, procurement, inventory, and documentation workflows support daily supply chain operations.",
      "Studied real-time business documents including invoices, purchase-related records, vendor documents, and inventory movement records.",
      "Learned how fresh inward, reverse inward, physical verification, ERP updates, and accounting handoff connect inside warehouse operations.",
      "Connected supply chain concepts such as SKU tracking, allocation, 3PL, 4PL, FIFO, MOQ, EOQ, OTIF, and TMS to real business processes."
    ]
  },
  {
    company: "Achieve Physical Therapy",
    role: "Rehabilitation Assistant / Physical Therapy Tech",
    description:
      "Supported daily clinic operations in a healthcare environment while building communication, accountability, organization, and operational discipline.",
    points: [
      "Assisted staff with patient routines, equipment setup, cleaning, laundry, and daily clinic support tasks.",
      "Helped maintain smooth clinic operations by staying organized, reliable, and responsive to staff needs.",
      "Built communication, responsibility, and service skills in a fast-paced healthcare setting."
    ]
  }
];

const projects = [
  {
    title: "iPhone Sourcing Cost Sheet Case Study",
    description:
      "Built a multi-sheet sourcing cost model to compare supplier pricing, landed cost, SKU expansion, vendor performance, and final sourcing recommendations. The project shows how sourcing decisions are affected by unit cost, shipping, duties, supplier terms, and total landed cost.",
    preview: "Cost Sheet Preview",
    summary:
      "This case study models a mock iPhone sourcing decision using multiple spreadsheet tabs. The analysis compares supplier options, calculates landed cost, expands costs across SKUs, evaluates vendor performance, and summarizes the final sourcing recommendation. The goal was to show how procurement teams can use structured cost sheets to make better supplier decisions.",
    skills: [
      "Sourcing Analysis",
      "Landed Cost Modeling",
      "Vendor Comparison",
      "Supplier Selection",
      "Cost Breakdown",
      "SKU Expansion",
      "Spreadsheet Modeling",
      "Procurement Decision Support",
      "Dashboard Design",
      "Business Recommendation Writing"
    ],
    tools: ["Google Sheets", "Excel", "Google Docs", "Cost Sheet Model", "Case Report PDF"],
    businessValue:
      "This project shows how a sourcing team can move beyond basic supplier pricing and evaluate the full cost impact of a purchasing decision. By comparing landed cost, vendor performance, and SKU-level pricing, the model supports a more complete sourcing recommendation.",
    insights: [
      "The lowest unit price is not always the best sourcing option once shipping, duties, and landed cost are included.",
      "Vendor comparison becomes stronger when cost, reliability, and terms are evaluated together.",
      "SKU-level expansion helps show how small cost differences can become larger at scale."
    ],
    links: [
      {
        label: "View Project",
        href: "https://docs.google.com/spreadsheets/d/15Gr8eBAHjNAZ99r7JHt7nitAAsoYcfwoRmYWrbf8OGs/edit?usp=sharing"
      },
      {
        label: "Case Report PDF",
        href: "./assets/iphone-sourcing-cost-sheet-case-report.pdf"
      }
    ]
  },
  {
    title: "Consumer Electronics Distribution Center Location Strategy",
    description:
      "Built a data-driven location strategy model to compare five U.S. logistics markets for a consumer electronics distribution center. The project uses Census, County Business Patterns, and Freight Analysis Framework data to evaluate market demand, freight access, logistics infrastructure, labor availability, growth potential, and cost environment.",
    preview: "Distribution Center Location Strategy Dashboard",
    image: "./assets/distribution-center-location-strategy-dashboard.png",
    summary:
      "This case study analyzes where a consumer electronics company should open a new U.S. distribution center. The project compares Chicago, Dallas-Fort Worth, Atlanta, Phoenix, and Columbus using public data sources and a weighted scoring model. Each city was scored across six supply chain decision categories: market demand, freight access, logistics infrastructure, labor availability, growth potential, and cost environment. The final recommendation was Chicago, which ranked first because of its strong logistics infrastructure, high market demand, freight activity, and labor availability. Dallas-Fort Worth ranked a close second and was identified as the strongest alternative because of its stronger growth potential and better cost environment.",
    skills: [
      "Supply Chain Network Design",
      "Distribution Center Location Strategy",
      "Census Data Analysis",
      "Freight Flow Analysis",
      "Market Demand Analysis",
      "Logistics Infrastructure Analysis",
      "Labor Availability Analysis",
      "Weighted Scoring Model",
      "Tableau Dashboard Design",
      "Spreadsheet Modeling",
      "Business Recommendation Writing",
      "Data-Driven Decision Making"
    ],
    tools: [
      "Google Sheets",
      "Tableau Public",
      "U.S. Census Bureau Data",
      "County Business Patterns",
      "Freight Analysis Framework",
      "American Community Survey",
      "Case Report PDF"
    ],
    businessValue:
      "This project shows how supply chain teams can use public data to support distribution center location decisions. Instead of choosing a location based only on population or general assumptions, the model compares each market using freight activity, business density, labor availability, growth, and cost factors. The project helps identify not only the highest-scoring city, but also the tradeoffs between current logistics strength and long-term growth potential.",
    insights: [
      "Chicago ranked first overall because it had the strongest logistics infrastructure, high market demand, strong labor availability, and major freight activity.",
      "Dallas-Fort Worth ranked very close behind Chicago and stood out as the best alternative because of its strong growth potential, large demand base, and better cost environment.",
      "The highest-growth market is not always the best distribution center location if it lacks the same freight access, labor depth, or logistics infrastructure as larger hubs.",
      "A weighted scoring model makes the location decision more defensible because each category is measured, scored, and connected to the final recommendation."
    ],
    links: [
      {
        label: "View Dashboard",
        href: "./assets/distribution-center-location-strategy-dashboard.png"
      },
      {
        label: "Case Report PDF",
        href: "./assets/distribution-center-location-strategy-case-report.pdf"
      },
      {
        label: "Spreadsheet Model",
        href: "./assets/distribution-center-location-strategy-model.xlsx"
      }
    ]
  },
  {
    title: "Supply Chain Inventory Control Dashboard",
    description:
      "An interactive Tableau dashboard that visualizes SKU-level inventory data, stock status, reorder risk, warehouse inventory value, and product category distribution for supply chain inventory control.",
    preview: "Supply Chain Inventory Control Dashboard Screenshot",
    image: "./assets/supply-chain-inventory-control-dashboard.png",
    summary:
      "The dataset was first built in a spreadsheet using an Inventory Master, Stock Movement Log, Reorder Alert Table, and Summary Dashboard. I then used Tableau Public to visualize the data through KPI cards and charts. The final dashboard includes total SKUs, total units in stock, available stock, total inventory value, low-stock items, reorder-soon items, inventory value by location, top SKUs by inventory value, stock status breakdown, and available stock by category.",
    skills: [
      "Tableau",
      "Dashboard Design",
      "SKU Tracking",
      "Inventory Analytics",
      "Inventory Control",
      "Warehouse Reporting",
      "Reorder Analysis",
      "Stock Status Monitoring",
      "Data Visualization",
      "Spreadsheet Modeling",
      "Supply Chain Decision Support",
      "Inventory Valuation",
      "KPI Reporting",
      "Warehouse Location Analysis"
    ],
    tags: ["Tableau", "Inventory Control", "SKU Analytics", "Dashboard", "Supply Chain", "Warehouse Operations"],
    tools: ["Google Sheets / Excel", "Tableau Public", "Inventory Master Dataset", "Stock Movement Log", "Reorder Alert Table"],
    features: [
      "KPI cards showing total SKUs, units in stock, available stock, inventory value, low-stock items, and reorder-soon items.",
      "Inventory value by location to show where the most inventory cost is concentrated.",
      "Top SKUs by inventory value to identify high-value products.",
      "Stock status breakdown to compare in-stock, low-stock, and reorder-soon items.",
      "Available stock by category to understand inventory distribution across product groups.",
      "Reorder risk visibility to help prioritize replenishment decisions."
    ],
    businessValue:
      "This dashboard helps warehouse and procurement teams quickly understand inventory health. Instead of reviewing a large spreadsheet manually, users can scan KPI cards and charts to identify which products need attention, which locations hold the most inventory value, and which SKUs may create stockout risk. The dashboard supports faster inventory decisions and better supply chain visibility.",
    insights: [
      "POS devices make up the highest inventory value because of their higher unit cost.",
      "Low-stock and reorder-soon items can be identified quickly through the KPI cards and stock status breakdown.",
      "Inventory value is concentrated differently across warehouse locations, which helps show where stock is financially tied up.",
      "The dashboard makes the inventory tracker easier to understand than a raw spreadsheet alone."
    ],
    links: [
      {
        label: "View Spreadsheet Dataset",
        href: "https://docs.google.com/spreadsheets/d/1tRVHwdz5r-wIbCv08SFFiERXUvPXcFvsEIw99Rxj8JI/edit?gid=406111085#gid=406111085"
      },
      {
        label: "View Tableau Dashboard",
        href: "./assets/supply-chain-inventory-control-dashboard.png"
      }
    ]
  },
  {
    title: "Warehouse Inward & Reverse Inward Case Study",
    description:
      "This case study maps the warehouse inward and reverse inward process for a POS device supply chain operation. It covers fresh inward, box and device cross-checking, physical verification, purchase entry, ERP updates, accounting handoff, inventory classification, allocation, and reverse inward flow.",
    preview: "Warehouse Inward and Reverse Inward Case Study Screenshot",
    image: "./assets/warehouse-inward-reverse-inward-preview.png",
    summary:
      "This project explains how products enter, move through, and return within a warehouse operation. The case study breaks down fresh inward, reverse inward, consumable inward, physical verification, documentation checks, ERP stock updates, live stock reporting, and allocation. It connects warehouse activity with procurement, accounting, inventory control, and dispatch readiness.",
    skills: [
      "Warehouse Operations",
      "Fresh Inward Process",
      "Reverse Logistics",
      "Inbound Logistics",
      "Physical Verification",
      "ERP Workflow",
      "Inventory Classification",
      "Process Mapping",
      "Documentation Review",
      "Live Stock Reporting",
      "Allocation Process",
      "Operational Risk Identification"
    ],
    tools: ["Google Docs", "Miro", "Flowcharts", "Process Documentation", "Warehouse Case Study"],
    businessValue:
      "This project shows how warehouse teams protect inventory accuracy by verifying shipments before stock is added to the system. It also explains how reverse inward processes help companies manage returned, damaged, refurbished, or hold-stock items without confusing them with usable inventory.",
    insights: [
      "Physical verification is one of the most important controls in warehouse receiving.",
      "ERP stock should only be updated after quantity, SKU, condition, and document checks are complete.",
      "Reverse inward needs clear classification so returned or damaged products are not counted as available inventory.",
      "Live stock reporting helps teams make better allocation and dispatch decisions."
    ],
    links: [
      {
        label: "View Project",
        href: "./assets/warehouse-inward-reverse-inward-case-study.pdf"
      }
    ]
  },
  {
    title: "Supplier Scorecard & Vendor Risk Dashboard",
    description:
      "Designed a supplier scorecard and vendor risk dashboard to compare vendors across cost, lead time, OTIF percentage, defect rate, MOQ, payment terms, and overall risk score. The project shows how procurement teams can evaluate suppliers beyond price.",
    preview: "Supplier Scorecard Preview",
    image: "./assets/supplier-scorecard-preview.png",
    summary:
      "This project uses a mock supplier dataset to evaluate vendor performance and risk. The dashboard compares suppliers based on cost, delivery performance, quality, minimum order quantity, payment terms, and risk score. The goal is to show how procurement teams can make more balanced supplier decisions using KPIs instead of relying only on price.",
    skills: [
      "Supplier Evaluation",
      "Vendor Risk Analysis",
      "Procurement Analytics",
      "KPI Tracking",
      "OTIF Analysis",
      "Defect Rate Analysis",
      "MOQ Comparison",
      "Payment Terms Review",
      "Dashboard Design",
      "Sourcing Decision Support"
    ],
    tools: ["Google Sheets", "Excel", "Dashboard Design", "Supplier Scorecard", "Vendor Dataset"],
    businessValue:
      "This project helps procurement teams compare vendors using both cost and performance metrics. It supports better supplier selection by highlighting tradeoffs between price, lead time, reliability, quality, and risk.",
    insights: [
      "The cheapest supplier may not be the best option if lead time, defect rate, or reliability is poor.",
      "OTIF and defect rate give a clearer picture of supplier performance than price alone.",
      "A supplier scorecard makes vendor comparison easier to explain and justify."
    ],
    links: [
      {
        label: "View Project",
        href: "https://docs.google.com/spreadsheets/d/1isNEYD47TgExA5Wjflqh_QYZmAQzakrAys8E6G4sVKo/edit?usp=sharing"
      }
    ]
  }
];

const skillGroups = [
  {
    category: "Supply Chain Skills",
    items: [
      "Sourcing Analysis",
      "Vendor Comparison",
      "Procurement Workflow",
      "Supplier Evaluation",
      "SKU Management",
      "Inventory Tracking",
      "Reorder Point Analysis",
      "Warehouse Inward Processing",
      "Reverse Logistics",
      "Inbound Logistics",
      "ERP Workflow Understanding",
      "Physical Verification",
      "Allocation Process",
      "Live Stock Reporting",
      "Transportation Basics"
    ]
  },
  {
    category: "Analytics & Tools",
    items: [
      "Tableau",
      "Excel",
      "Google Sheets",
      "Dashboard Design",
      "Spreadsheet Modeling",
      "Data Cleaning",
      "KPI Tracking",
      "Inventory Analytics",
      "Cost Modeling",
      "Google Docs",
      "Miro",
      "Process Mapping",
      "Power BI Basics"
    ]
  },
  {
    category: "Business Skills",
    items: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Professional Writing",
      "Project Planning",
      "Research",
      "Business Documentation",
      "Process Improvement",
      "Attention to Detail",
      "Decision Support"
    ]
  }
];

const articles = [
  {
    title: "AI and Humans in Supply Chain",
    description: "An article about how AI is becoming a supply chain coworker and why human judgment still matters in operations, planning, and decision-making.",
    href: "https://medium.com/@shivenparikh1/ai-and-humans-in-supply-chain-the-coworker-we-didnt-hire-but-now-have-to-work-with-a5c4e3711006"
  },
  {
    title: "Same Prompt, Different Brain",
    description: "A reflection on how different AI models respond to the same prompt and what that means for research, productivity, and practical business use.",
    href: "https://medium.com/@shivenparikh1/same-prompt-different-brain-why-no-two-ai-models-give-you-the-same-response-88c65e0f6ac4"
  },
  {
    title: "How AI Is Changing Supplier Risk Management",
    description: "A supply chain article about how AI can help identify supplier risk, hidden fragility, early warning signals, and disruptions beyond first-tier suppliers.",
    href: "https://medium.com/@shivenparikh1/how-ai-is-changing-supplier-risk-management-36f9109d4e4c"
  },
  {
    title: "Beyond Earth: The Future of Asteroid Mining",
    description: "A broader operations and technology article exploring future resource extraction, asteroid mining, and the long-term business possibilities of space-based supply chains.",
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
