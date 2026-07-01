import {
  aiMicrochipCaseTitle,
  aiMicrochipModelHref,
  aiMicrochipPreviewHref,
  aiMicrochipReportHref,
  distributionCenterCaseTitle,
  distributionCenterDashboardHref,
  distributionCenterModelHref,
  distributionCenterReportHref,
  purchaseToDispatchCaseTitle,
  purchaseToDispatchPreviewHref,
  purchaseToDispatchReportHref,
  skuInventoryCaseTitle,
  skuInventoryDashboardHref,
  skuInventoryModelHref,
  sourcingCopilotHref,
  sourcingCopilotPreviewHref,
  sourcingCopilotTitle,
  vendorShippingCaseTitle,
  vendorShippingPreviewHref,
  vendorShippingReportHref,
  warehouseOperationsCaseTitle,
  warehouseOperationsPreviewHref,
  warehouseOperationsReportHref
} from "./data";
import type { ProjectLink } from "./data";
import { Icon } from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

interface SummaryItem {
  label: string;
  value: string;
}

interface MetricItem {
  value: string;
  label: string;
  detail?: string;
}

interface TableData {
  columns: string[];
  rows: string[][];
}

interface ModelBar {
  label: string;
  value: string;
  width: string;
}

type CaseVisual =
  | {
      kind: "image";
      src: string;
      alt: string;
      caption: string;
    }
  | {
      kind: "model";
      cells: MetricItem[];
      bars: ModelBar[];
      caption: string;
    };

type ContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "callout"; text: string }
  | { kind: "metrics"; items: MetricItem[] }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "table"; label: string; table: TableData }
  | { kind: "criteria"; rows: Array<[criterion: string, weight: string]> }
  | { kind: "formula"; label: string; code: string }
  | { kind: "tags"; items: string[] };

interface CaseSection {
  eyebrow: string;
  title: string;
  blocks: ContentBlock[];
}

interface CaseStudyContent {
  title: string;
  badges: string[];
  subtitle: string;
  summary: string;
  actions: ProjectLink[];
  visual: CaseVisual;
  summaryItems: SummaryItem[];
  sections: CaseSection[];
}

function getLinkTarget(href: string) {
  return /^https?:\/\//.test(href) ? "_blank" : undefined;
}

function SummaryGrid({ items }: { items: SummaryItem[] }) {
  return (
    <section className="case-summary-grid" aria-label="Project summary">
      {items.map((item) => (
        <article key={item.label}>
          <span>{item.label}</span>
          <p>{item.value}</p>
        </article>
      ))}
    </section>
  );
}

function MetricGrid({ items }: { items: MetricItem[] }) {
  return (
    <div className="case-metric-grid">
      {items.map((item) => (
        <article key={`${item.value}-${item.label}`}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
          {item.detail ? <p>{item.detail}</p> : null}
        </article>
      ))}
    </div>
  );
}

function CaseTable({ columns, rows, label }: TableData & { label: string }) {
  return (
    <div className="case-table-wrap">
      <table className="case-table" aria-label={label}>
        <thead>
          <tr>
            {columns.map((column) => <th scope="col" key={column}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CaseVisualBlock({ visual }: { visual: CaseVisual }) {
  if (visual.kind === "image") {
    return (
      <figure className="case-hero__visual">
        <img src={visual.src} alt={visual.alt} />
        <figcaption>{visual.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="case-hero__visual case-hero__visual--model">
      <div className="case-model-preview">
        {visual.cells.map((cell) => (
          <div key={`${cell.label}-${cell.value}`}>
            <span>{cell.label}</span>
            <strong>{cell.value}</strong>
            {cell.detail ? <p>{cell.detail}</p> : null}
          </div>
        ))}
        {visual.bars.map((bar) => (
          <div className="case-model-preview__bar" key={bar.label}>
            <span>{bar.label}</span>
            <strong>{bar.value}</strong>
            <i style={{ width: bar.width }} />
          </div>
        ))}
      </div>
      <figcaption>{visual.caption}</figcaption>
    </figure>
  );
}

function renderBlock(block: ContentBlock) {
  switch (block.kind) {
    case "paragraph":
      return <p key={block.text}>{block.text}</p>;
    case "callout":
      return <p className="callout" key={block.text}>{block.text}</p>;
    case "metrics":
      return <MetricGrid items={block.items} key={block.items.map((item) => item.label).join("|")} />;
    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag className="case-list" key={block.items.join("|")}>
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ListTag>
      );
    }
    case "table":
      return <CaseTable {...block.table} label={block.label} key={block.label} />;
    case "criteria":
      return (
        <div className="criteria-table" role="table" aria-label="Criteria and weights" key={block.rows.join("|")}>
          {block.rows.map(([criterion, weight]) => (
            <div role="row" key={criterion}>
              <span role="cell">{criterion}</span>
              <strong role="cell">{weight}</strong>
            </div>
          ))}
        </div>
      );
    case "formula":
      return (
        <div className="formula-grid formula-grid--single" key={block.label}>
          <article>
            <span>{block.label}</span>
            <pre>{block.code}</pre>
          </article>
        </div>
      );
    case "tags":
      return (
        <ul className="tag-list case-tags" aria-label="Skills demonstrated" key={block.items.join("|")}>
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
    default:
      return null;
  }
}

function PortfolioCaseStudyPage({ study }: { study: CaseStudyContent }) {
  return (
    <>
      <div id="top" />
      <SiteHeader page="projects" />
      <main className="case-page">
        <section className="case-hero">
          <div className="container-wide case-hero__grid">
            <div className="case-hero__copy">
              <div className="project-badge-list">
                {study.badges.map((badge) => <span key={badge}>{badge}</span>)}
              </div>
              <p className="projects-name">Shiven Parikh</p>
              <h1>{study.title}</h1>
              <p className="case-hero__subtitle">{study.subtitle}</p>
              <p className="case-hero__summary">{study.summary}</p>
              <div className="case-actions">
                {study.actions.map((item) => (
                  <a
                    className="button button--outline"
                    href={item.href}
                    target={getLinkTarget(item.href)}
                    rel={getLinkTarget(item.href) ? "noreferrer" : undefined}
                    key={item.href}
                  >
                    {item.label} <Icon name="arrow" />
                  </a>
                ))}
              </div>
            </div>
            <CaseVisualBlock visual={study.visual} />
          </div>
        </section>

        <div className="container-wide case-content">
          <SummaryGrid items={study.summaryItems} />
          {study.sections.map((section) => (
            <section className="case-section" key={`${section.eyebrow}-${section.title}`}>
              <div className="case-section__heading">
                <p className="section-index">{section.eyebrow}</p>
                <h2>{section.title}</h2>
              </div>
              <div className="case-section__body">
                {section.blocks.map(renderBlock)}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

const sourcingCopilotStudy: CaseStudyContent = {
  title: sourcingCopilotTitle,
  badges: ["Case Study", "AI Sourcing Tool"],
  subtitle:
    "A Streamlit sourcing workspace that moves from product intake to supplier discovery, scoring, market/news review, dashboard comparison, AI insight generation, and recommendation export.",
  summary:
    "This project turns a sourcing analysis workflow into an interactive tool. Instead of treating supplier comparison as one static spreadsheet, the app guides the user through the decision path that a sourcing analyst would follow.",
  actions: [
    { label: "Launch Streamlit App", href: sourcingCopilotHref },
    { label: "View App Preview", href: sourcingCopilotPreviewHref }
  ],
  visual: {
    kind: "image",
    src: sourcingCopilotPreviewHref,
    alt: "Global Sourcing Copilot Streamlit app preview",
    caption: "Streamlit preview showing the sourcing workflow, supplier comparison, and recommendation workspace."
  },
  summaryItems: [
    {
      label: "Project category",
      value: "AI-assisted sourcing workflow / supplier research / comparison dashboard"
    },
    {
      label: "Business question",
      value:
        "How can a sourcing user move from product requirements to a clearer supplier recommendation without losing the logic behind the decision?"
    },
    {
      label: "Model type",
      value: "Interactive Streamlit app using guided tabs, session state, scoring, and recommendation output"
    }
  ],
  sections: [
    {
      eyebrow: "01",
      title: "Project Overview",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Global Sourcing Copilot is built as a practical sourcing assistant. The app organizes product intake, supplier discovery, scoring setup, weekly market/news review, dashboard comparison, AI-assisted insights, and recommendation export into one guided flow."
        },
        {
          kind: "paragraph",
          text:
            "The portfolio value is that the project shows both sourcing judgment and tool-building ability. It frames the analysis around how a buyer or analyst would actually compare suppliers instead of only showing a finished recommendation."
        }
      ]
    },
    {
      eyebrow: "02",
      title: "Workflow Architecture",
      blocks: [
        {
          kind: "table",
          label: "Global Sourcing Copilot workflow layers",
          table: {
            columns: ["Layer", "Purpose", "Decision Value"],
            rows: [
              ["Product intake", "Capture product category, buying context, and sourcing goal.", "Keeps the supplier search tied to a specific need."],
              ["Supplier discovery", "Organize candidate suppliers and source notes.", "Creates a comparison set before scoring begins."],
              ["Scoring setup", "Define cost, risk, lead time, quality, and capability criteria.", "Makes the recommendation explainable."],
              ["News review", "Review current market or disruption context.", "Adds external risk signals to the sourcing view."],
              ["Dashboard comparison", "Compare suppliers visually across the selected criteria.", "Helps identify tradeoffs quickly."],
              ["AI insights", "Generate structured observations and recommendations.", "Turns model output into decision language."],
              ["Export", "Package the recommendation for sharing.", "Creates a recruiter-ready or stakeholder-ready memo."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "03",
      title: "Analytical Logic",
      blocks: [
        {
          kind: "list",
          items: [
            "Start with requirements so supplier comparison is not detached from the product being sourced.",
            "Compare suppliers across multiple criteria instead of relying only on lowest price.",
            "Use risk and market context to challenge a supplier that looks cheap but fragile.",
            "Write the recommendation in business language so the output can be used by a non-technical decision maker."
          ]
        },
        {
          kind: "callout",
          text:
            "The main idea is simple: AI is useful when it helps the sourcing analyst ask better questions and document the reasoning, not when it hides the decision behind a black box."
        }
      ]
    },
    {
      eyebrow: "04",
      title: "What The App Demonstrates",
      blocks: [
        {
          kind: "metrics",
          items: [
            { value: "7", label: "Workflow modules", detail: "From intake through final recommendation." },
            { value: "1", label: "Live app", detail: "Hosted as an interactive Streamlit project." },
            { value: "End-to-end", label: "Sourcing path", detail: "Research, scoring, comparison, insight, and memo output." }
          ]
        }
      ]
    },
    {
      eyebrow: "05",
      title: "Limitations and Next Improvements",
      blocks: [
        {
          kind: "paragraph",
          text:
            "The current app is a portfolio tool, not a production procurement platform. A stronger version could add source-backed supplier databases, live tariff and freight feeds, saved scenarios, team review permissions, and automatic evidence citations for every AI-generated recommendation."
        }
      ]
    },
    {
      eyebrow: "06",
      title: "Skills Demonstrated",
      blocks: [
        {
          kind: "tags",
          items: [
            "AI-Assisted Sourcing",
            "Streamlit",
            "Supplier Comparison",
            "Sourcing Workflow",
            "Risk Scoring",
            "Recommendation Writing",
            "Dashboard UI"
          ]
        }
      ]
    }
  ]
};

const aiMicrochipStudy: CaseStudyContent = {
  title: aiMicrochipCaseTitle,
  badges: ["Case Study", "Global Sourcing"],
  subtitle:
    "A public-data sourcing model comparing Taiwan, South Korea, and a U.S. domestic hub for AI microchip supply-chain resilience.",
  summary:
    "The project evaluates advanced semiconductor sourcing strategy through capability, geopolitical exposure, lead time, tariffs, capacity, supplier criticality, and substitution difficulty. The recommendation is not to replace Asia, but to build a multi-region resilience layer.",
  actions: [
    { label: "Case Report", href: aiMicrochipReportHref },
    { label: "Spreadsheet Model", href: aiMicrochipModelHref }
  ],
  visual: {
    kind: "image",
    src: aiMicrochipPreviewHref,
    alt: "Global sourcing AI microchip model preview",
    caption: "Preview of the AI microchip sourcing model comparing region scores and sourcing tradeoffs."
  },
  summaryItems: [
    {
      label: "Project category",
      value: "Global sourcing strategy / semiconductor supply risk / multi-region supplier comparison"
    },
    {
      label: "Business question",
      value:
        "Should a U.S.-based AI chip company rely on Taiwan and South Korea alone, or build a domestic hub as a resilience layer?"
    },
    {
      label: "Model type",
      value: "Weighted scoring model with scenario review, supplier-region mapping, and sourcing recommendation"
    }
  ],
  sections: [
    {
      eyebrow: "01",
      title: "Executive Recommendation",
      blocks: [
        {
          kind: "paragraph",
          text:
            "The model recommends a multi-region sourcing strategy. Taiwan and South Korea remain critical for advanced foundry, packaging, HBM memory, wafer supply, and semiconductor capability. The U.S. domestic hub should be developed as a resilience layer for emergency supply, faster replenishment, distribution support, and risk reduction."
        },
        {
          kind: "callout",
          text:
            "The U.S. domestic hub is the strongest resilience option in the model, but it is not positioned as a full replacement for Taiwan or South Korea."
        }
      ]
    },
    {
      eyebrow: "02",
      title: "Base Scorecard",
      blocks: [
        {
          kind: "table",
          label: "AI microchip base scorecard",
          table: {
            columns: ["Region", "Weighted Score", "Rank", "Interpretation"],
            rows: [
              ["USA Domestic Hub", "4.10", "1", "Best resilience option, not a full capability replacement."],
              ["South Korea", "3.30", "2", "Critical HBM and semiconductor supplier region."],
              ["Taiwan", "2.80", "3", "Critical foundry and packaging region with higher concentration risk."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "03",
      title: "Scoring Framework",
      blocks: [
        {
          kind: "criteria",
          rows: [
            ["Geopolitical Risk", "20%"],
            ["Lead Time Risk", "15%"],
            ["Tariff / Trade Cost", "10%"],
            ["Contract Lead Time", "10%"],
            ["Capacity Availability", "20%"],
            ["Supplier Criticality", "15%"],
            ["Substitution Difficulty", "10%"]
          ]
        },
        {
          kind: "formula",
          label: "Weighted score formula",
          code: "Weighted Score = SUM(Category Score x Category Weight)"
        }
      ]
    },
    {
      eyebrow: "04",
      title: "Supplier-Region Mapping",
      blocks: [
        {
          kind: "table",
          label: "AI microchip supplier-region map",
          table: {
            columns: ["Region", "Supplier Examples", "Strategic Role"],
            rows: [
              ["Taiwan", "TSMC, TSMC CoWoS, GlobalWafers, Foxconn, Wistron", "Advanced foundry, packaging, wafer, and assembly exposure."],
              ["South Korea", "SK hynix, Samsung Electronics, SK Siltron", "HBM memory, memory/foundry optionality, and wafer supply."],
              ["USA Domestic Hub", "TSMC Arizona, Micron, Amkor, Intel Foundry, DigiKey, Mouser, Arrow, Avnet", "Domestic resilience, replenishment, component support, and emergency supply."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "05",
      title: "Scenario Analysis",
      blocks: [
        {
          kind: "table",
          label: "AI microchip scenario results",
          table: {
            columns: ["Scenario", "Best Region", "Winning Score", "Interpretation"],
            rows: [
              ["Normal Conditions", "USA Domestic Hub", "4.10", "Model favors resilience and lower exposure."],
              ["Geopolitical Shock", "USA Domestic Hub", "4.35", "Domestic hub improves continuity under disruption."],
              ["Capacity Shortage", "USA Domestic Hub", "3.95", "Domestic support still helps even when advanced capability remains constrained."],
              ["Domestic Resilience Strategy", "USA Domestic Hub", "4.30", "Best fit when resilience is the dominant objective."],
              ["Cost / Trade Pressure", "USA Domestic Hub", "4.20", "Trade exposure and lead-time reduction improve the hub's score."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "06",
      title: "Risk Matrix",
      blocks: [
        {
          kind: "list",
          items: [
            "Geopolitical disruption can interrupt advanced foundry or packaging supply.",
            "Capacity shortage can create allocation pressure during AI demand spikes.",
            "HBM bottlenecks make South Korea strategically important.",
            "Advanced packaging bottlenecks create concentration risk around specialized OSAT and foundry capacity.",
            "Tariff or trade policy changes can change landed cost and sourcing flexibility.",
            "Long contract lead times reduce the speed of supplier switching."
          ]
        }
      ]
    },
    {
      eyebrow: "07",
      title: "Limitations and Next Improvements",
      blocks: [
        {
          kind: "paragraph",
          text:
            "The report rates the portfolio readiness at 8/10. The main limitations are subjective scores, limited live cost data, and the risk of overreading the U.S. domestic hub as a full replacement. A stronger version would add source-backed scoring evidence, sensitivity analysis, a landed-cost layer, supplier risk heatmaps, and a clearer split between true AI chip supply and support-level distribution."
        }
      ]
    },
    {
      eyebrow: "08",
      title: "Skills Demonstrated",
      blocks: [
        {
          kind: "tags",
          items: [
            "Semiconductor Supply Chain",
            "Global Sourcing",
            "Supplier Risk",
            "Scenario Analysis",
            "Weighted Scoring",
            "Country Risk",
            "Strategic Recommendation"
          ]
        }
      ]
    }
  ]
};

const warehouseOperationsStudy: CaseStudyContent = {
  title: warehouseOperationsCaseTitle,
  badges: ["Case Study", "Warehouse Operations"],
  subtitle:
    "A supply chain operations case study on Mswipe MPOS device lifecycle, fresh inward, reverse inward, ERP controls, QC, RMA, allocation, dispatch, and installation linkage.",
  summary:
    "The case explains how serial-numbered payment devices move through physical scanning, ERP validation, flat-file updates, quality checks, repair loops, field returns, courier dispatch, and final installation closure.",
  actions: [
    { label: "Case Report", href: warehouseOperationsReportHref }
  ],
  visual: {
    kind: "image",
    src: warehouseOperationsPreviewHref,
    alt: "Warehouse inward and reverse inward process preview",
    caption: "Warehouse operations preview summarizing fresh inward, reverse inward, ERP control, QC, and dispatch flow."
  },
  summaryItems: [
    {
      label: "Project category",
      value: "Warehouse operations / reverse logistics / ERP workflow / device lifecycle controls"
    },
    {
      label: "Business question",
      value:
        "How does a warehouse control serial-numbered devices from supplier receipt to QC, RMA, dispatch, field installation, and field return?"
    },
    {
      label: "Model type",
      value: "Portfolio-safe process case study based on SOP review, process mapping, risk controls, and KPI recommendations"
    }
  ],
  sections: [
    {
      eyebrow: "01",
      title: "Executive Summary",
      blocks: [
        {
          kind: "paragraph",
          text:
            "The process starts before product physically reaches the warehouse. Demand planning, procurement, purchase order approval, supplier documentation, customs clearance, and ERP pre-upload create the expected receipt record before the logistics team scans the devices."
        },
        {
          kind: "paragraph",
          text:
            "The main operational strength is the combination of physical controls and system controls. A device enters usable inventory only after it is scanned, matched to expected records, reflected in ERP, and moved through the correct store, QC, RMA, allocation, or dispatch status."
        }
      ]
    },
    {
      eyebrow: "02",
      title: "Closed-Loop Device Lifecycle",
      blocks: [
        {
          kind: "table",
          label: "Mswipe device lifecycle summary",
          table: {
            columns: ["Flow", "Main Steps", "Operational Purpose"],
            rows: [
              ["Forward flow", "Planning, PO, supplier documents, ERP upload, warehouse scan, store, QC, allocation, dispatch.", "Creates controlled inventory records and moves functional devices to field demand."],
              ["Reverse flow", "Return receipt, inward register, ticket/status clearance, ERP movement, store verification, QC, RMA, retest, allocation.", "Recovers returned devices and prevents faulty or blocked devices from re-entering stock too early."],
              ["Field closure", "FSE receives, maps device, performs test transaction, captures photos, trains merchant, and closes ticket.", "Connects warehouse movement to actual installation and customer-facing completion."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "03",
      title: "Stakeholders and Systems",
      blocks: [
        {
          kind: "table",
          label: "Warehouse stakeholders and systems",
          table: {
            columns: ["Stakeholder / System", "Role In The Flow", "Control Value"],
            rows: [
              ["Finance / Treasury", "PO details, supplier documents, ERP upload, discrepancy coordination.", "Creates expected records and handles shortage/excess escalation."],
              ["Logistics / Store", "Physical receipt, scanning, movement, courier tracking, store controls.", "Keeps physical stock aligned with system status."],
              ["QC / RMA", "Device inspection, repair assessment, part replacement, retesting.", "Protects deployment quality and reduces unnecessary replacement cost."],
              ["Operations / Helpdesk / FSE", "Tickets, pending reports, field installation, replacement, and closure.", "Connects inventory availability to actual merchant service demand."],
              ["ERP / Flat file / Odoo / F2A2", "Stock upload, stock transfer, field visibility, pending reports, and ticket closure.", "Keeps device ID, status, location, and ownership visible."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "04",
      title: "Risk and Control Matrix",
      blocks: [
        {
          kind: "table",
          label: "Warehouse risk and control matrix",
          table: {
            columns: ["Process Area", "Risk", "Control / Improvement"],
            rows: [
              ["Fresh inward", "Devices received but not matched to expected records.", "ERP cross-verifies scanned IDs against finance-uploaded device details."],
              ["Fresh inward", "Short or excess inventory hidden inside normal receiving.", "Shortages are escalated and excess stock is held separately until supplier instructions."],
              ["QC / RMA", "Failed or still-faulty devices accidentally dispatched.", "QC failure moves to RMA; repaired units return to QC for retesting."],
              ["Reverse inward", "Returned device still tied to open ticket.", "Store coordinates ticket closure before free-device status and inward movement."],
              ["Dispatch", "Wrong device sent to wrong location.", "Device ID, allocation file, courier docket, and destination mapping create traceability."],
              ["ERP / flat file", "System and tracker mismatch.", "Daily ERP-versus-flat-file reconciliation is recommended."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "05",
      title: "KPI Dashboard Recommendations",
      blocks: [
        {
          kind: "table",
          label: "Warehouse KPI recommendations",
          table: {
            columns: ["KPI", "Definition", "Why It Matters"],
            rows: [
              ["Fresh inward cycle time", "Warehouse receipt to ERP store-location update.", "Measures receiving speed and scanning productivity."],
              ["Scan match rate", "Matched scanned device IDs divided by total scanned IDs.", "Measures supplier record and ERP upload accuracy."],
              ["QC pass rate", "Devices passed by QC divided by devices inspected.", "Shows incoming and refurbished quality."],
              ["RMA turnaround time", "QC-to-RMA transfer until QC return after repair.", "Measures repair process speed."],
              ["Reverse inward clearance time", "Returned receipt to free-device, store, or QC status.", "Measures reverse logistics efficiency."],
              ["ERP-flat file variance", "Count of devices where ERP and tracker location/status differ.", "Most important master-data reliability indicator."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "06",
      title: "Improvement Opportunities",
      blocks: [
        {
          kind: "list",
          items: [
            "Build a single device lifecycle dashboard showing in-transit, received, scanned, store, QC, RMA, repaired, dispatch-ready, allocated, FSE bucket, installed, returned, and damaged-exception status.",
            "Automate reverse inward status validation so devices cannot re-enter stock while linked field tickets are still open.",
            "Add aging buckets for shortages, excess inventory, QC failures, RMA pending devices, and reverse inward exceptions.",
            "Create device-level repair history to identify recurring failure patterns by model, batch, supplier, or issue type.",
            "Use barcode validation at QC, RMA, dispatch packing, and FSE handoff points."
          ]
        }
      ]
    },
    {
      eyebrow: "07",
      title: "Skills Demonstrated",
      blocks: [
        {
          kind: "tags",
          items: [
            "Warehouse Operations",
            "Reverse Logistics",
            "ERP Workflow",
            "Inventory Control",
            "Process Mapping",
            "QC / RMA Flow",
            "Risk Controls",
            "KPI Design"
          ]
        }
      ]
    }
  ]
};

const distributionCenterStudy: CaseStudyContent = {
  title: distributionCenterCaseTitle,
  badges: ["Case Study", "Network Analytics"],
  subtitle:
    "A U.S. distribution center location strategy model comparing Chicago, Dallas-Fort Worth, Atlanta, Phoenix, and Columbus for a consumer electronics distributor.",
  summary:
    "The project uses public data and a weighted scorecard to compare market demand, freight access, logistics infrastructure, labor availability, growth potential, and cost environment. Chicago wins, with Dallas-Fort Worth as the strongest alternative.",
  actions: [
    { label: "View Dashboard", href: distributionCenterDashboardHref },
    { label: "Case Report", href: distributionCenterReportHref },
    { label: "Spreadsheet Model", href: distributionCenterModelHref }
  ],
  visual: {
    kind: "image",
    src: distributionCenterDashboardHref,
    alt: "Distribution center location strategy dashboard",
    caption: "Dashboard comparing candidate metro areas by score, category performance, and Chicago versus Dallas-Fort Worth tradeoffs."
  },
  summaryItems: [
    {
      label: "Project category",
      value: "Distribution network strategy / location analysis / weighted scoring"
    },
    {
      label: "Business question",
      value:
        "Which U.S. metro area offers the best balance of demand, freight access, infrastructure, labor, growth, and cost for a new distribution center?"
    },
    {
      label: "Model type",
      value: "Public-data scorecard using ACS, County Business Patterns, Freight Analysis Framework, and category weighting"
    }
  ],
  sections: [
    {
      eyebrow: "01",
      title: "Final Recommendation",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Chicago is the recommended location with a final score of 77.2 out of 100. Dallas-Fort Worth is the strongest alternative at 75.7 and deserves a second-round site-level review."
        },
        {
          kind: "callout",
          text:
            "Chicago wins because it balances logistics infrastructure, market demand, freight access, and labor availability. Dallas-Fort Worth is stronger on growth and cost, but slightly behind overall."
        }
      ]
    },
    {
      eyebrow: "02",
      title: "City Ranking",
      blocks: [
        {
          kind: "table",
          label: "Distribution center city ranking",
          table: {
            columns: ["Rank", "City", "Final Score", "Interpretation"],
            rows: [
              ["1", "Chicago", "77.2", "Best overall balance of demand, logistics, freight, and labor."],
              ["2", "Dallas-Fort Worth", "75.7", "Strongest alternative; better growth and cost profile."],
              ["3", "Atlanta", "57.9", "Good cost environment, but lower total score."],
              ["4", "Phoenix", "40.1", "Growth potential is strong, but logistics and market scale lag."],
              ["5", "Columbus", "28.7", "Lowest score in the modeled comparison set."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "03",
      title: "Weighted Scoring Framework",
      blocks: [
        {
          kind: "criteria",
          rows: [
            ["Market Demand", "25%"],
            ["Freight Access", "25%"],
            ["Logistics Infrastructure", "20%"],
            ["Labor Availability", "15%"],
            ["Growth Potential", "10%"],
            ["Cost Environment", "5%"]
          ]
        },
        {
          kind: "formula",
          label: "Final score formula",
          code:
            "Final Weighted Score = Market Demand x 0.25 + Freight Access x 0.25 + Logistics Infrastructure x 0.20 + Labor Availability x 0.15 + Growth Potential x 0.10 + Cost Environment x 0.05\n\nFinal Score / 100 = Final Weighted Score x 10"
        }
      ]
    },
    {
      eyebrow: "04",
      title: "Category Results",
      blocks: [
        {
          kind: "table",
          label: "Distribution center category leaders",
          table: {
            columns: ["Category", "Leader", "Key Detail"],
            rows: [
              ["Market Demand", "Chicago", "Chicago scored 9.82, ahead of Dallas-Fort Worth at 8.70."],
              ["Freight Access", "Chicago", "Chicago scored 7.30, ahead of Dallas-Fort Worth at 5.67."],
              ["Logistics Infrastructure", "Chicago", "Chicago scored the category maximum at 10.00."],
              ["Labor Availability", "Chicago", "Chicago scored 8.63, narrowly ahead of Dallas-Fort Worth at 8.44."],
              ["Growth Potential", "Dallas-Fort Worth", "Dallas-Fort Worth scored 10.00, with Phoenix next at 7.67."],
              ["Cost Environment", "Atlanta", "Atlanta led cost environment, while Chicago ranked lowest on cost."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "05",
      title: "Data Sources and Logic",
      blocks: [
        {
          kind: "list",
          items: [
            "ACS data supports population, households, median income, commute time, and population growth logic.",
            "County Business Patterns supports logistics establishments, employment, and payroll comparisons.",
            "Freight Analysis Framework supports freight value by origin, destination, and mode.",
            "Min-max normalization converts raw measures into comparable category scores.",
            "Lower-better measures use reverse scoring so expensive or inefficient factors do not get rewarded."
          ]
        }
      ]
    },
    {
      eyebrow: "06",
      title: "Limitations and Next Improvements",
      blocks: [
        {
          kind: "paragraph",
          text:
            "The model is a high-level strategy screen, not a final real estate site selection. A stronger version would add warehouse rent, taxes, incentives, utility costs, parcel carrier zones, drive-time coverage, customer order density, airport cargo access, and sensitivity analysis for one-site versus two-site networks."
        }
      ]
    },
    {
      eyebrow: "07",
      title: "Skills Demonstrated",
      blocks: [
        {
          kind: "tags",
          items: [
            "Network Design",
            "Distribution Strategy",
            "Public Data Analysis",
            "Weighted Scoring",
            "Freight Access",
            "Labor Analysis",
            "Dashboarding"
          ]
        }
      ]
    }
  ]
};

const vendorShippingStudy: CaseStudyContent = {
  title: vendorShippingCaseTitle,
  badges: ["Case Study", "Freight Cost"],
  subtitle:
    "A small-shipment vendor comparison model that compares current rates against two alternate vendor options by destination category and weight tier.",
  summary:
    "The project calculates savings and cost increases across within-city, within-state, within-zone, metro, rest-of-India, and special-destination shipments. Option 1 is recommended based on cost, with a note that service and contract factors still matter.",
  actions: [
    { label: "Case Report", href: vendorShippingReportHref }
  ],
  visual: {
    kind: "image",
    src: vendorShippingPreviewHref,
    alt: "Vendor shipping cost comparison analysis sheet",
    caption: "Cost comparison sheet showing current vendor, Option 1, Option 2, savings, increases, and final decision."
  },
  summaryItems: [
    {
      label: "Project category",
      value: "Vendor comparison / parcel shipping cost / logistics procurement"
    },
    {
      label: "Business question",
      value:
        "Which small-shipment vendor offers the best rate position across destination categories and base/additional weight charges?"
    },
    {
      label: "Model type",
      value: "Rate comparison sheet with savings, increases, average impact, and final vendor decision table"
    }
  ],
  sections: [
    {
      eyebrow: "01",
      title: "Decision Summary",
      blocks: [
        {
          kind: "metrics",
          items: [
            { value: "12.89%", label: "Option 1 saving", detail: "Average saving versus the current vendor." },
            { value: "22.55%", label: "Option 2 increase", detail: "Average cost increase versus the current vendor." },
            { value: "41.82%", label: "Option 1 vs Option 2", detail: "Average saving if Option 1 is chosen over Option 2." }
          ]
        },
        {
          kind: "callout",
          text:
            "Recommended vendor: Option 1. It provides the lowest average shipping cost in the model, but the final decision should still review delivery time, reliability, service quality, and contract terms."
        }
      ]
    },
    {
      eyebrow: "02",
      title: "Comparison Logic",
      blocks: [
        {
          kind: "table",
          label: "Vendor shipping comparison logic",
          table: {
            columns: ["Comparison", "Result", "Decision"],
            rows: [
              ["Current Vendor vs Option 1", "12.89% average cost saving", "Option 1 is better."],
              ["Current Vendor vs Option 2", "22.55% average cost increase", "Current vendor is better."],
              ["Option 1 vs Option 2", "41.82% average cost saving", "Option 1 is better."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "03",
      title: "Destination Categories",
      blocks: [
        {
          kind: "table",
          label: "Vendor shipping destination categories",
          table: {
            columns: ["Destination Category", "Current Vendor Base", "Option 1 Base", "Option 2 Base"],
            rows: [
              ["Within City", "$2.50", "$2.20", "$3.30"],
              ["Within State", "$3.50", "$3.35", "$4.50"],
              ["Within Zone", "$4.50", "$4.25", "$5.20"],
              ["Metroes", "$5.50", "$5.10", "$5.90"],
              ["Rest of India", "$6.50", "$6.00", "$7.00"],
              ["Special Destination", "$8.00", "$7.35", "$8.80"]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "04",
      title: "Interpretation",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Option 1 is consistently cheaper than the current vendor on both the first 500 grams and additional 500-gram charges. Option 2 is consistently more expensive, with the largest increases appearing in within-city, rest-of-India additional weight, and special-destination additional weight."
        },
        {
          kind: "paragraph",
          text:
            "The model is intentionally cost-focused. Before a real vendor switch, the sourcing team would need service-level evidence such as on-time performance, damage claims, pickup coverage, invoice accuracy, escalation speed, and contract flexibility."
        }
      ]
    },
    {
      eyebrow: "05",
      title: "Skills Demonstrated",
      blocks: [
        {
          kind: "tags",
          items: [
            "Vendor Comparison",
            "Freight Cost Analysis",
            "Rate Table Modeling",
            "Savings Analysis",
            "Procurement Decision Support",
            "Logistics Cost Control"
          ]
        }
      ]
    }
  ]
};

const purchaseToDispatchStudy: CaseStudyContent = {
  title: purchaseToDispatchCaseTitle,
  badges: ["Case Study", "Workflow Analysis"],
  subtitle:
    "A swimlane workflow analysis showing how a purchase request moves through procurement, vendor selection, receiving, accounting, stock allocation, dispatch, and ERP updates.",
  summary:
    "The project maps the handoffs that turn a business need into an approved purchase, vendor quotation, purchase order, goods receipt, inward entry, stock allocation, pick list, dispatch, and final stock update.",
  actions: [
    { label: "Case Report", href: purchaseToDispatchReportHref }
  ],
  visual: {
    kind: "image",
    src: purchaseToDispatchPreviewHref,
    alt: "Purchase-to-dispatch workflow analysis swimlane",
    caption: "Swimlane workflow across requester, procurement, vendor, warehouse, finance, logistics, and ERP/system updates."
  },
  summaryItems: [
    {
      label: "Project category",
      value: "Procure-to-dispatch workflow / process mapping / operational handoff controls"
    },
    {
      label: "Business question",
      value:
        "Where can errors enter the purchase-to-dispatch flow, and what checklist controls reduce ordering, receiving, ERP, and dispatch mismatches?"
    },
    {
      label: "Model type",
      value: "Workflow diagram with swimlanes, approval loop, risk points, and improvement recommendation"
    }
  ],
  sections: [
    {
      eyebrow: "01",
      title: "Workflow Overview",
      blocks: [
        {
          kind: "table",
          label: "Purchase-to-dispatch workflow stages",
          table: {
            columns: ["Stage", "Process Step", "Control Point"],
            rows: [
              ["Requester / Department", "Need identified and purchase request created.", "PR / indent request should include complete item, quantity, and need details."],
              ["Procurement", "Approval check, RFQ sent, vendor comparison, vendor selected, PO issued.", "Approval loop and vendor comparison prevent unsupported buying decisions."],
              ["Vendor", "Quotation sent, sales invoice sent, goods delivered.", "Quotation, invoice, and delivered goods must match the purchase requirement."],
              ["Warehouse", "Goods arrive, physical verification, quantity/condition decision, inward entry, stock allocated, pick list created.", "PO, invoice, and quantity checks reduce receiving errors."],
              ["Finance / Accounting", "Invoice review and accounting update.", "Finance review connects physical receipt to the accounting record."],
              ["Logistics / Dispatch", "Dispatch record is created and goods move outbound.", "Pick list and dispatch record connect stock allocation to shipment."],
              ["ERP / System", "ERP stock updated and final stock updated.", "System updates close the loop so inventory reflects real movement."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "02",
      title: "Key Risk Points",
      blocks: [
        {
          kind: "list",
          ordered: true,
          items: [
            "Incorrect purchase-request details can cause ordering errors.",
            "Choosing the lowest-cost vendor without checking reliability can cause delivery delays.",
            "Incorrect ERP updates can create inventory mismatch between physical stock and system stock."
          ]
        }
      ]
    },
    {
      eyebrow: "03",
      title: "Improvement Recommendation",
      blocks: [
        {
          kind: "callout",
          text:
            "Use a standardized checklist across PR, RFQ, vendor comparison, PO, invoice matching, inward verification, ERP update, allocation, and dispatch to reduce errors and improve process tracking."
        },
        {
          kind: "table",
          label: "Purchase-to-dispatch checklist controls",
          table: {
            columns: ["Checklist Area", "What To Confirm", "Risk Reduced"],
            rows: [
              ["Purchase request", "Item, quantity, specifications, requester, need date, and approval path.", "Wrong item ordered or incomplete buying request."],
              ["RFQ and vendor comparison", "Cost, lead time, quality, terms, reliability, and vendor history.", "Lowest-cost choice that fails operationally."],
              ["PO and invoice match", "PO number, ordered quantity, invoice quantity, rate, tax, and delivery details.", "Payment and receipt mismatches."],
              ["Physical verification", "Quantity, condition, delivered product, and damage/shortage notes.", "Incorrect inward entry or hidden damage."],
              ["ERP and dispatch", "Stock location, allocation, pick list, dispatch record, and final stock update.", "Inventory mismatch after outbound movement."]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "04",
      title: "Skills Demonstrated",
      blocks: [
        {
          kind: "tags",
          items: [
            "Procure-to-Dispatch",
            "Workflow Mapping",
            "PR / RFQ / PO Logic",
            "Invoice Matching",
            "Physical Verification",
            "ERP Updates",
            "Dispatch Controls"
          ]
        }
      ]
    }
  ]
};

const skuInventoryStudy: CaseStudyContent = {
  title: skuInventoryCaseTitle,
  badges: ["Case Study", "Inventory Dashboard"],
  subtitle:
    "An inventory tracking dashboard for SKU movement, available stock, reorder alerts, low-stock exposure, location value, and stock-status monitoring.",
  summary:
    "The project demonstrates how a simple inventory dashboard can support replenishment decisions by showing total SKUs, stock availability, inventory value, low-stock counts, reorder alerts, value by location, and top SKUs by inventory value.",
  actions: [
    { label: "View Spreadsheet", href: skuInventoryModelHref },
    { label: "View Dashboard", href: skuInventoryDashboardHref }
  ],
  visual: {
    kind: "image",
    src: skuInventoryDashboardHref,
    alt: "SKU inventory tracking dashboard",
    caption: "Inventory dashboard showing SKU count, stock, low-stock alerts, reorder alerts, value by location, and category availability."
  },
  summaryItems: [
    {
      label: "Project category",
      value: "Inventory control / SKU tracking / replenishment dashboard"
    },
    {
      label: "Business question",
      value:
        "Which products and locations need replenishment attention, and how much inventory value is tied up across the warehouse network?"
    },
    {
      label: "Model type",
      value: "Google Sheets inventory tracker with summary KPIs, charts, stock-status breakdowns, and reorder visibility"
    }
  ],
  sections: [
    {
      eyebrow: "01",
      title: "Dashboard KPI Summary",
      blocks: [
        {
          kind: "metrics",
          items: [
            { value: "21", label: "Total SKUs", detail: "Tracked product lines in the dashboard." },
            { value: "2,267", label: "Units in stock", detail: "Total physical stock across tracked SKUs." },
            { value: "1,921", label: "Available stock", detail: "Stock available after status adjustments." },
            { value: "$24,755", label: "Inventory value", detail: "Total inventory value in the dashboard." },
            { value: "8", label: "Low stock", detail: "SKUs needing attention due to low quantity." },
            { value: "4", label: "Reorder soon", detail: "SKUs approaching replenishment trigger." }
          ]
        }
      ]
    },
    {
      eyebrow: "02",
      title: "Location and Value View",
      blocks: [
        {
          kind: "table",
          label: "Inventory value by location",
          table: {
            columns: ["Location", "Inventory Value", "Interpretation"],
            rows: [
              ["Mumbai WH", "$10,960", "Largest inventory value concentration."],
              ["Delhi WH", "$7,411", "Second-largest value location."],
              ["Bangalore WH", "$6,385", "Third-largest value location."]
            ]
          }
        },
        {
          kind: "paragraph",
          text:
            "The location view matters because inventory risk is not only about total units. A product can be available overall while still being in the wrong warehouse for a local demand signal."
        }
      ]
    },
    {
      eyebrow: "03",
      title: "Top Value SKUs",
      blocks: [
        {
          kind: "table",
          label: "Top inventory value SKUs",
          table: {
            columns: ["Product", "Inventory Value"],
            rows: [
              ["POS Machine Model A", "$5,535"],
              ["POS Machine Model C", "$5,084"],
              ["POS Machine Model B", "$2,860"],
              ["Android POS Terminal", "$2,520"],
              ["Mini POS Terminal", "$1,976"]
            ]
          }
        }
      ]
    },
    {
      eyebrow: "04",
      title: "Inventory Control Logic",
      blocks: [
        {
          kind: "list",
          items: [
            "Track SKU count and total stock to understand the operating baseline.",
            "Separate available stock from total units so hold, returned, or reserved stock does not overstate availability.",
            "Highlight low-stock and reorder-soon counts so replenishment work is visible.",
            "Compare inventory value by location to identify where working capital is concentrated.",
            "Use category-level availability to support reorder prioritization and warehouse balancing."
          ]
        }
      ]
    },
    {
      eyebrow: "05",
      title: "Skills Demonstrated",
      blocks: [
        {
          kind: "tags",
          items: [
            "Inventory Management",
            "SKU Tracking",
            "Reorder Analysis",
            "Stock Status",
            "Warehouse Visibility",
            "Dashboarding",
            "Google Sheets"
          ]
        }
      ]
    }
  ]
};

export function SourcingCopilotCasePage() {
  return <PortfolioCaseStudyPage study={sourcingCopilotStudy} />;
}

export function AIMicrochipCasePage() {
  return <PortfolioCaseStudyPage study={aiMicrochipStudy} />;
}

export function WarehouseOperationsCasePage() {
  return <PortfolioCaseStudyPage study={warehouseOperationsStudy} />;
}

export function DistributionCenterCasePage() {
  return <PortfolioCaseStudyPage study={distributionCenterStudy} />;
}

export function VendorShippingCasePage() {
  return <PortfolioCaseStudyPage study={vendorShippingStudy} />;
}

export function PurchaseToDispatchCasePage() {
  return <PortfolioCaseStudyPage study={purchaseToDispatchStudy} />;
}

export function SKUInventoryCasePage() {
  return <PortfolioCaseStudyPage study={skuInventoryStudy} />;
}
