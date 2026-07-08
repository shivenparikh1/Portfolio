import type { ReactNode } from "react";
import {
  evAssemblyBomHref,
  evAssemblyDashboardHref,
  evAssemblyCaseTitle,
  landedCostCaseTitle,
  landedCostModelHref
} from "./data";
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

function getLinkTarget(href: string) {
  return /^https?:\/\//.test(href) ? "_blank" : undefined;
}

function DetailSection({
  title,
  eyebrow,
  children
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section className="case-section">
      <div className="case-section__heading">
        <p className="section-index">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="case-section__body">{children}</div>
    </section>
  );
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
            <tr key={row.join("-")}>
              {row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const evSummaryItems = [
  {
    label: "Project category",
    value: "Manufacturing logistics / BOM readiness / shortage recovery / production risk"
  },
  {
    label: "Business question",
    value:
      "Can the material required for a 25-vehicle EV production batch be picked, kitted, and released to assembly, and which shortages need the most urgent recovery action?"
  },
  {
    label: "Model type",
    value: "Simulated EV assembly logistics model with Excel workbook logic and a Tableau readiness dashboard"
  }
];

const evMetrics = [
  { value: "102", label: "Tracked kitting rows", detail: "Components, internal subassemblies, consumables, and hardware rows." },
  { value: "85", label: "Complete rows", detail: "83.3% of tracked rows can be fully picked." },
  { value: "17", label: "Hold rows", detail: "Every hold row is treated as a line-stopper shortage." },
  { value: "784", label: "Total missing quantity", detail: "Missing units across the modeled 25-vehicle build." },
  { value: "3.09", label: "Average risk score", detail: "Weighted risk score across 102 components." },
  { value: "23", label: "Critical or high-risk components", detail: "8 critical and 15 high-risk components in the model." }
];

const evWorkbookLayers = {
  columns: ["Step", "Model Layer", "Purpose"],
  rows: [
    ["1", "BOM Master", "Defines EV component structure, categories, quantities, and assembly grouping."],
    ["2", "Supplier Master", "Assigns suppliers, regions, source confidence, risk factors, and sourcing strategies."],
    ["3", "Inventory Master", "Calculates demand, available inventory, safety stock, reorder point, shortage quantity, and status."],
    ["4", "Kitting Readiness Tracker", "Determines whether required material can be picked into production kits."],
    ["5", "Shortage Tracker", "Filters active shortages and assigns severity, owner, recovery action, and production impact."],
    ["6", "Risk Scoring Model", "Scores components using lead time, inventory, supplier, substitution, line-stopper, and shortage risk."],
    ["7", "Tableau Dashboard", "Visualizes readiness, shortage concentration, risk exposure, and recovery actions."]
  ]
};

const evShortageConcentration = {
  columns: ["Major Assembly", "Missing Qty", "Share"],
  rows: [
    ["Battery Pack System", "526", "67.1%"],
    ["Thermal Management System", "120", "15.3%"],
    ["Electric Drive Unit", "93", "11.9%"],
    ["Suspension, Brakes, and Wheels", "38", "4.8%"],
    ["Chassis and Body Structure", "6", "0.8%"],
    ["Power Electronics and Charging System", "1", "0.1%"]
  ]
};

const evRiskWeights = [
  ["Lead Time Risk", "15%"],
  ["Inventory Risk", "25%"],
  ["Supplier Risk", "20%"],
  ["Substitution Difficulty", "15%"],
  ["Line Stopper Risk", "15%"],
  ["Shortage Risk", "10%"]
];

const evActiveShortages = {
  columns: ["ID", "Component", "Assembly", "Missing", "Severity", "Owner", "Status"],
  rows: [
    ["SHRT-001", "Temperature Sensors", "Battery Pack", "140", "High", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-002", "Battery Cooling Plates", "Battery Pack", "35", "High", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-003", "Pack Coolant Tubes", "Battery Pack", "70", "High", "Warehouse / Supplier Planner", "Escalated"],
    ["SHRT-004", "Battery Pack Gasket Seal", "Battery Pack", "11", "High", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-005", "Electric Motor Assembly", "Electric Drive Unit", "6", "Critical", "Production Planner", "Escalated"],
    ["SHRT-006", "Onboard Charger", "Power Electronics", "1", "Medium", "Buyer / Supplier Planner", "Open"],
    ["SHRT-007", "Front Crash Beam", "Chassis and Body", "6", "Critical", "Quality + Supplier Planner", "Escalated"],
    ["SHRT-008", "Coolant Fluid", "Thermal Management", "120", "High", "Warehouse / Maintenance Planner", "Open"],
    ["SHRT-009", "Springs", "Suspension / Brakes / Wheels", "38", "High", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-010", "Copper Busbars", "Battery Pack", "120", "High", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-011", "Aluminum Busbars", "Battery Pack", "80", "High", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-012", "Module Insulation Sheets", "Battery Pack", "70", "High", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-013", "Copper Windings", "Electric Drive Unit", "1", "Medium", "Buyer / Supplier Planner", "Open"],
    ["SHRT-014", "Motor Bearings", "Electric Drive Unit", "9", "High", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-015", "Resolver / Position Sensor", "Electric Drive Unit", "9", "Critical", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-016", "Gearbox Bearings", "Electric Drive Unit", "65", "Critical", "Buyer / Supplier Planner", "Escalated"],
    ["SHRT-017", "Gearbox Lubricant", "Electric Drive Unit", "3", "Medium", "Warehouse / Maintenance Planner", "Open"]
  ]
};

const evTopRisks = {
  columns: ["Component", "Major Assembly", "Supplier", "Score", "Category"],
  rows: [
    ["Single-Speed Gearbox", "Electric Drive Unit", "GKN Automotive", "4.70", "Critical"],
    ["Inverter Control PCB", "Electric Drive Unit", "Jabil", "4.70", "Critical"],
    ["Electric Motor Assembly", "Electric Drive Unit", "BorgWarner", "4.70", "Critical"],
    ["Thermal Interface Pads", "Battery Pack System", "3M", "4.50", "Critical"],
    ["Module Insulation Sheets", "Battery Pack System", "DuPont", "4.50", "Critical"],
    ["Stator Core", "Electric Drive Unit", "Schaeffler", "4.50", "Critical"],
    ["Charge Port Assembly", "Power Electronics", "TE Connectivity", "4.45", "Critical"],
    ["Current Sensor", "Battery Pack System", "LEM", "4.30", "Critical"],
    ["Rear Control Arms", "Suspension / Brakes / Wheels", "ZF Friedrichshafen", "4.20", "High"],
    ["Resolver / Position Sensor", "Electric Drive Unit", "Sensata Technologies", "4.20", "High"]
  ]
};

const evSkills = [
  "BOM Structure",
  "Supplier Master Data",
  "Inventory Availability",
  "Kitting Readiness",
  "Shortage Tracking",
  "Line-Stopper Analysis",
  "Risk Scoring",
  "Tableau Dashboarding",
  "Production Logistics",
  "Recovery Planning"
];

const landedSummaryItems = [
  {
    label: "Project category",
    value: "Landed cost / SKU sourcing / supplier quote comparison / executive sourcing dashboard"
  },
  {
    label: "Business question",
    value:
      "How should a sourcing team evaluate iPhone SKUs, landed cost, supplier quotes, risk, warranty, lead time, and margin before making a supplier recommendation?"
  },
  {
    label: "Model type",
    value: "Simulated sourcing cost model built across five sheets and summarized into a final sourcing dashboard"
  }
];

const landedMetrics = [
  { value: "2,200", label: "iPhones planned", detail: "Full SKU-level sourcing plan in Cost Sheet 3." },
  { value: "$2.38M", label: "Total landed cost", detail: "Cost Sheet 3 after freight, insurance, duty, and fees." },
  { value: "$718.8K", label: "Gross margin", detail: "Projected gross margin from the SKU-level sourcing plan." },
  { value: "23.23%", label: "Overall margin", detail: "Before overhead, marketing, storage, wages, returns, and taxes." },
  { value: "40", label: "Supplier quote rows", detail: "Cost Sheet 4 compared multiple suppliers for selected SKUs." },
  { value: "10 / 25 / 5", label: "Quote recommendations", detail: "Recommended, backup, and rejected quote counts." }
];

const landedProgression = {
  columns: ["Stage", "Sheet", "Main Improvement"],
  rows: [
    ["1", "Basic Pricing", "Introduced unit cost, order quantity, revenue, and gross margin."],
    ["2", "Landed Cost", "Added freight, insurance, duty, fees, total landed cost, and landed cost per unit."],
    ["3", "Full SKU Expansion", "Added models, storage options, colors, demand levels, and supplier price adjustments."],
    ["4", "Vendor Comparison", "Compared suppliers using cost, risk, lead time, warranty, supplier score, and recommendation logic."],
    ["5", "Final Sourcing Dashboard", "Summarized the analysis into an executive sourcing recommendation view."]
  ]
};

const landedSupplierLogic = {
  columns: ["Supplier Role", "Use Case", "Decision Logic"],
  rows: [
    ["Apple", "Premium and high-storage models", "Used when reliability and warranty support matter more than lowest cost."],
    ["Best Buy", "High-demand retail models", "Useful when availability and familiar retail sourcing are important."],
    ["CDW", "B2B purchasing", "Supports business purchasing structure and selected commercial SKUs."],
    ["Ingram Micro", "Bulk sourcing and cost savings", "Often strongest when order quantities meet MOQ requirements."],
    ["Amazon / Walmart", "Backup options", "Useful backup sources, but marketplace and seller reliability can vary."]
  ]
};

const landedFormulaRows = [
  ["Total Landed Cost", "Product Cost + Freight Allocation + Insurance Allocation + Import Duty + Other Fees"],
  ["Landed Cost Per Unit", "Total Landed Cost / Order Quantity"],
  ["Adjusted Unit Cost", "Apple Reference Price x (1 + Supplier Price Adjustment)"],
  ["Target Markup", "Very High 20%, High 25%, Medium 30%, Low 35%, Very Low 40%"]
];

const landedQuoteSummary = [
  { value: "2,320", label: "Units compared", detail: "Selected high-demand and high-value SKU quotes in Cost Sheet 4." },
  { value: "$2.21M", label: "Quote landed cost", detail: "Total landed cost across supplier quote rows." },
  { value: "$2.77M", label: "Quote revenue", detail: "Projected revenue from the quote comparison sheet." },
  { value: "$561.8K", label: "Quote gross margin", detail: "Gross margin in the vendor comparison model." }
];

const landedSkills = [
  "Landed Cost",
  "Supplier Selection",
  "SKU-Level Planning",
  "Demand-Based Ordering",
  "Vendor Quote Comparison",
  "Supplier Risk",
  "MOQ Logic",
  "Warranty and Lead Time Tradeoffs",
  "Cost Allocation",
  "Executive Dashboarding"
];

export function EVAssemblyCasePage() {
  return (
    <>
      <div id="top" />
      <SiteHeader page="projects" />
      <main className="case-page">
        <section className="case-hero">
          <div className="container-wide case-hero__grid">
            <div className="case-hero__copy">
              <div className="project-badge-list">
                <span>Featured Project</span>
                <span>Operations Readiness</span>
              </div>
              <p className="projects-name">Shiven Parikh</p>
              <h1>{evAssemblyCaseTitle}</h1>
              <p className="case-hero__subtitle">
                A simulated EV production-readiness model connecting BOM structure, supplier data,
                inventory availability, kitting status, shortage escalation, risk scoring, and a
                Tableau operations dashboard.
              </p>
              <p className="case-hero__summary">
                The case models whether material for a 25-vehicle EV production batch can be
                picked, kitted, and released to assembly. It identifies blocked kits, line-stopper
                shortages, owners, recovery actions, and high-risk components across major EV
                systems.
              </p>
              <div className="case-actions">
                {[
                  { label: "View Dashboard", href: evAssemblyDashboardHref },
                  { label: "View Spreadsheet", href: evAssemblyBomHref }
                ].map((item) => (
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
            <figure className="case-hero__visual">
              <img
                src={evAssemblyDashboardHref}
                alt="EV assembly logistics readiness Tableau dashboard"
              />
              <figcaption>
                Tableau dashboard view showing kit readiness, shortages, production risk, and
                recovery actions.
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="container-wide case-content">
          <SummaryGrid items={evSummaryItems} />

          <DetailSection title="Project Overview" eyebrow="01">
            <p>
              This case study models the material readiness process for a simulated electric vehicle
              assembly operation. It connects a simplified bill of materials, supplier assignments,
              inventory availability, kitting readiness, active shortages, production risk, and a
              Tableau dashboard into one operations review workflow.
            </p>
            <p>
              The model is not an official EV manufacturer BOM or live production system. It is a
              portfolio case study designed to show practical supply chain thinking across BOM
              planning, supplier mapping, inventory logic, shortage escalation, risk scoring, and
              dashboard communication.
            </p>
          </DetailSection>

          <DetailSection title="Executive KPI Summary" eyebrow="02">
            <MetricGrid items={evMetrics} />
          </DetailSection>

          <DetailSection title="Business Problem and Scope" eyebrow="03">
            <p>
              The plant needs to know whether the required material for a 25-vehicle EV build can be
              picked, kitted, and released to the assembly line. If the answer is no, the team needs
              to know what is missing, which assembly area is affected, who owns the recovery action,
              and which shortages carry the highest production risk.
            </p>
            <ul className="case-list">
              <li>The model includes battery pack, electric drive, power electronics, wiring, chassis, thermal, suspension, brake, and wheel systems.</li>
              <li>A kitting row is marked Complete when picked quantity equals required quantity.</li>
              <li>A kitting row is marked Hold when missing quantity is greater than zero.</li>
              <li>The risk scoring model uses a 1-5 scale and weighted scores, not live supplier performance data.</li>
            </ul>
          </DetailSection>

          <DetailSection title="Workbook Architecture" eyebrow="04">
            <p>
              The workbook is structured as a layered model. The BOM defines what is needed, the
              supplier master explains where components come from, the inventory master determines
              availability, the kitting tracker decides release readiness, and the shortage and risk
              sheets prioritize what needs management attention.
            </p>
            <CaseTable {...evWorkbookLayers} label="EV workbook model layers" />
          </DetailSection>

          <DetailSection title="Readiness Results" eyebrow="05">
            <p>
              Out of 102 tracked kitting rows, 85 are complete and 17 are on hold. All 17 shortages
              are treated as line-stopper shortages. The Battery Pack System creates the largest
              missing-quantity exposure with 526 missing units, or 67.1% of total missing quantity.
            </p>
            <CaseTable {...evShortageConcentration} label="EV shortage quantity by major assembly" />
          </DetailSection>

          <DetailSection title="Risk Scoring Model" eyebrow="06">
            <div className="criteria-table" role="table" aria-label="EV risk scoring criteria and weights">
              {evRiskWeights.map(([criterion, weight]) => (
                <div role="row" key={criterion}>
                  <span role="cell">{criterion}</span>
                  <strong role="cell">{weight}</strong>
                </div>
              ))}
            </div>
            <div className="formula-grid formula-grid--single">
              <article>
                <span>Total Risk Score</span>
                <pre>{`(Lead Time Risk x 0.15) +
(Inventory Risk x 0.25) +
(Supplier Risk x 0.20) +
(Substitution Difficulty x 0.15) +
(Line Stopper Risk x 0.15) +
(Shortage Risk x 0.10)`}</pre>
              </article>
            </div>
            <p>
              The final risk distribution contains 8 Critical, 15 High, 72 Medium, and 7 Low-risk
              components.
            </p>
          </DetailSection>

          <DetailSection title="Top Production Risks" eyebrow="07">
            <CaseTable {...evTopRisks} label="EV top production risk components" />
          </DetailSection>

          <DetailSection title="Shortage Recovery Plan" eyebrow="08">
            <p>
              Buyer / Supplier Planner owns 12 of the 17 shortages, which means most recovery work is
              supplier-facing rather than purely warehouse-facing. The tracker also shows 13
              escalated shortages and 4 open shortages.
            </p>
            <CaseTable {...evActiveShortages} label="EV active shortage tracker" />
          </DetailSection>

          <DetailSection title="Operational Interpretation" eyebrow="09">
            <p>
              The production batch is partially ready. Most components can be picked, but several
              line-stopper shortages prevent full kit release. Battery Pack shortages create the
              largest missing quantity exposure, while Electric Drive Unit shortages carry high
              severity because they affect motor and gearbox completion.
            </p>
            <p className="callout">
              The biggest lesson is that shortage quantity and production risk are related but not
              identical. A good operations dashboard needs both quantity views and severity views.
            </p>
          </DetailSection>

          <DetailSection title="Recommendations" eyebrow="10">
            <ol className="case-list">
              <li>Review all 17 shortage IDs daily until line-stopper shortages are closed.</li>
              <li>Prioritize Critical severity first, then High, then Medium.</li>
              <li>Use kit-level release decisions instead of relying only on inventory status.</li>
              <li>Create a daily shortage review focused on recovery dates, owners, escalation status, and blocked kits.</li>
              <li>Improve resilience for high-risk battery electronics, thermal components, busbars, insulation materials, drive-unit sensors, and bearings.</li>
            </ol>
          </DetailSection>

          <DetailSection title="Limitations and Future Improvements" eyebrow="11">
            <p>
              The model uses simulated data and manual risk weights. It does not connect to live ERP, WMS,
              MRP, purchase orders, receiving inspection, or transportation variability. A production
              version could add supplier promise dates, receipt dates, warehouse locations, quality
              holds, supplier scorecard history, build-day sequencing, and scenario analysis for
              supplier shutdown or expedited freight decisions.
            </p>
          </DetailSection>

          <DetailSection title="Skills Demonstrated" eyebrow="12">
            <ul className="tag-list case-tags" aria-label="EV case skills demonstrated">
              {evSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </DetailSection>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function LandedCostCasePage() {
  return (
    <>
      <div id="top" />
      <SiteHeader page="projects" />
      <main className="case-page">
        <section className="case-hero">
          <div className="container-wide case-hero__grid">
            <div className="case-hero__copy">
              <div className="project-badge-list">
                <span>Sourcing Model</span>
                <span>Landed Cost</span>
              </div>
              <p className="projects-name">Shiven Parikh</p>
              <h1>{landedCostCaseTitle}</h1>
              <p className="case-hero__subtitle">
                A five-stage sourcing cost model that grows from basic pricing into landed cost,
                SKU-level planning, supplier quote comparison, and an executive sourcing dashboard.
              </p>
              <p className="case-hero__summary">
                The project uses iPhones as a simulated product category to show how sourcing decisions
                change when demand, supplier type, freight, insurance, import duty, fees, warranty,
                lead time, MOQ, risk, margin, and final recommendations are evaluated together.
              </p>
              <div className="case-actions">
                {[
                  { label: "View Spreadsheet", href: landedCostModelHref }
                ].map((item) => (
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
            <figure className="case-hero__visual case-hero__visual--model">
              <div className="case-model-preview" aria-label="Landed cost sourcing dashboard preview">
                <div>
                  <span>Total Landed Cost</span>
                  <strong>$2.38M</strong>
                </div>
                <div>
                  <span>Gross Margin</span>
                  <strong>$718.8K</strong>
                </div>
                <div>
                  <span>Quote Rows</span>
                  <strong>40</strong>
                </div>
                <div className="case-model-preview__bar">
                  <span>Recommended</span>
                  <i style={{ width: "25%" }} />
                </div>
                <div className="case-model-preview__bar">
                  <span>Backup</span>
                  <i style={{ width: "62.5%" }} />
                </div>
                <div className="case-model-preview__bar">
                  <span>Rejected</span>
                  <i style={{ width: "12.5%" }} />
                </div>
              </div>
              <figcaption>
                Code-native summary preview based on the final sourcing dashboard and vendor
                comparison results from the Word report.
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="container-wide case-content">
          <SummaryGrid items={landedSummaryItems} />

          <DetailSection title="Project Overview" eyebrow="01">
            <p>
              This project was created to understand how a sourcing and procurement cost sheet
              develops from a basic product pricing table into a full supplier comparison and
              sourcing dashboard. The analysis uses iPhones because the category has clear product
              variations across model, storage size, color, supplier, demand level, and pricing.
            </p>
            <p>
              The case is a portfolio sourcing analysis for learning purposes. Supplier
              discounts, demand levels, costs, and recommendations are assumed for modeling and
              demonstration.
            </p>
          </DetailSection>

          <DetailSection title="Executive KPI Summary" eyebrow="02">
            <MetricGrid items={landedMetrics} />
          </DetailSection>

          <DetailSection title="Model Progression" eyebrow="03">
            <p>
              Each sheet answered a more advanced sourcing question. The project did not simply add
              rows each time; it added the cost, supplier, demand, and decision logic needed to make
              the sourcing recommendation more realistic.
            </p>
            <CaseTable {...landedProgression} label="Landed cost model progression" />
          </DetailSection>

          <DetailSection title="Landed Cost Logic" eyebrow="04">
            <p>
              Cost Sheet 2 moved beyond supplier unit price by adding freight allocation, insurance
              allocation, import duty, other fees, total landed cost, and landed cost per unit. Freight
              and insurance were allocated based on each SKU's share of total product cost.
            </p>
            <div className="formula-grid formula-grid--single">
              {landedFormulaRows.map(([label, formula]) => (
                <article key={label}>
                  <span>{label}</span>
                  <pre>{formula}</pre>
                </article>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="SKU-Level Sourcing Plan" eyebrow="05">
            <p>
              Cost Sheet 3 expanded the model into a full sourcing plan of 2,200 iPhones. It included
              iPhone 17 Pro Max, iPhone 17 Pro, iPhone Air, iPhone 17, iPhone 17e, and iPhone 16
              variations across storage sizes, colors, suppliers, demand levels, and adjusted unit
              costs.
            </p>
            <p>
              The SKU-level plan produced $2,362,095.69 in product cost, $2,375,345.69 in total
              landed cost, $3,094,159.13 in projected revenue, $718,813.43 in gross margin, and a
              23.23% margin percentage before overhead expenses.
            </p>
          </DetailSection>

          <DetailSection title="Vendor Comparison Logic" eyebrow="06">
            <p>
              Cost Sheet 4 compared multiple supplier quotes for selected high-demand and high-value
              SKUs. Supplier decisions were marked as Recommended, Backup, or Rejected based on cost,
              risk, lead time, warranty, order quantity fit, and supplier score.
            </p>
            <CaseTable {...landedSupplierLogic} label="Supplier role and recommendation logic" />
          </DetailSection>

          <DetailSection title="Quote Comparison Results" eyebrow="07">
            <MetricGrid items={landedQuoteSummary} />
            <p>
              The final Cost Sheet 4 includes 40 supplier quote rows, 2,320 units compared, total
              landed cost of $2,211,570.25, total revenue of $2,773,419.37, total gross margin of
              $561,849.12, 10 recommended supplier quotes, 25 backup quotes, and 5 rejected quotes.
            </p>
          </DetailSection>

          <DetailSection title="Final Dashboard Readout" eyebrow="08">
            <p>
              The final sourcing dashboard converted detailed sheet work into an executive summary.
              It summarized total units ordered, total landed cost, total revenue, total gross margin,
              margin percentage, recommended supplier count, financial breakdown, quote comparison,
              supplier recommendation summary, decision summary, key takeaways, and final written
              recommendation.
            </p>
            <p className="callout">
              The main sourcing strategy was to use lower-risk suppliers for premium and
              high-storage models while using B2B or wholesale suppliers for bulk and high-demand
              models when MOQ, lead time, and risk still made sense.
            </p>
          </DetailSection>

          <DetailSection title="Final Sourcing Insights" eyebrow="09">
            <ul className="case-list">
              <li>A sourcing decision needs more than unit price; it must include demand, supplier type, order quantity, landed cost, warranty, risk, lead time, and margin.</li>
              <li>Premium and high-storage models should usually use lower-risk suppliers because the financial exposure is higher.</li>
              <li>Bulk and high-demand models can benefit from wholesale or B2B suppliers such as Ingram Micro when MOQ requirements are met.</li>
              <li>Detailed cost sheets are useful for analysis, but decision-makers need a clean dashboard to understand the final recommendation quickly.</li>
            </ul>
          </DetailSection>

          <DetailSection title="Limitations" eyebrow="10">
            <p>
              The analysis uses assumed product demand, supplier discounts, costs, and recommendations.
              It does not represent a live procurement event, verified supplier quote, or official
              iPhone sourcing recommendation. A production version would need real supplier quotes,
              current duties, tax treatment, live freight options, warranty terms, demand history,
              return rates, and inventory carrying-cost assumptions.
            </p>
          </DetailSection>

          <DetailSection title="Skills Demonstrated" eyebrow="11">
            <ul className="tag-list case-tags" aria-label="Landed cost case skills demonstrated">
              {landedSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </DetailSection>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
