import type { ReactNode } from "react";
import {
  semiconductorCertificateHref,
  semiconductorDashboardHref,
  semiconductorExcelHref,
  semiconductorProjectTitle
} from "./data";
import { Icon } from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const heroBadges = ["Featured Project", "Newest Project", "Global Sourcing Focus"];

const summaryItems = [
  {
    label: "Project category",
    value: "Global Sourcing / Semiconductor Supply Chain / Supplier Risk"
  },
  {
    label: "Business question",
    value:
      "Which semiconductor packaging / OSAT supplier region offers the best balance of supplier capability, cost exposure, logistics reliability, country risk, and long-term sourcing resilience for a U.S.-based technology hardware company?"
  },
  {
    label: "Model type",
    value: "Public-data portfolio sourcing model with analyst-defined assumptions"
  }
];

const suppliers = [
  ["ASE Technology / ASE Group", "Taiwan"],
  ["JCET Group", "China"],
  ["Huatian Technology / HT-Tech", "China"],
  ["Amkor Technology", "United States"],
  ["Tongfu Microelectronics / TFME", "China"],
  ["Micross", "United States"],
  ["Powertech Technology / PTI", "Taiwan"],
  ["UTAC", "Singapore / Southeast Asia / China"],
  ["Hana Micron", "South Korea / Vietnam"],
  ["King Yuan Electronics / KYEC", "Taiwan"]
];

const methodology = [
  "Picked the supplier list.",
  "Decided which sourcing criteria mattered most.",
  "Collected public supplier and country-risk data.",
  "Used AI to speed up source discovery and extraction, not to replace final judgment.",
  "Built the Excel scoring model.",
  "Created formulas for core supplier score, confidence-adjusted score, rank, and supplier tier.",
  "Built a Tableau dashboard.",
  "Wrote final recommendations and limitations."
];

const scoringCriteria = [
  ["Country / Trade Risk", "20%"],
  ["Geographic Diversification", "15%"],
  ["Advanced Packaging / AI Fit", "16%"],
  ["Technical Capability", "17%"],
  ["Financial Scale", "12%"],
  ["U.S. Buyer Fit", "10%"],
  ["Cost Exposure Proxy", "10%"]
];

const dashboardResults = [
  "ASE Technology / ASE Group ranked first with a confidence-adjusted score of 8.8.",
  "Amkor Technology ranked second with a confidence-adjusted score of 8.7.",
  "Powertech Technology / PTI ranked third with a confidence-adjusted score of 7.2.",
  "ASE and Amkor emerged as Tier 1 preferred suppliers. ASE led due to advanced packaging strength, scale, and geographic footprint. Amkor was close because of strong U.S. buyer fit and global OSAT capability."
];

const deliverables = [
  { label: "View Excel Model", href: semiconductorExcelHref },
  { label: "View Dashboard", href: semiconductorDashboardHref },
  {
    label: "View Certificate",
    href: semiconductorCertificateHref
  }
];

const skills = [
  "Global Sourcing",
  "Supplier Risk",
  "Semiconductor Supply Chain",
  "OSAT",
  "Advanced Packaging",
  "Excel Modeling",
  "Tableau",
  "Country Risk",
  "Cost Exposure",
  "Data Confidence",
  "AI-Assisted Research",
  "Procurement Analytics"
];

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

export function SemiconductorProjectPage() {
  return (
    <>
      <div id="top" />
      <SiteHeader page="projects" />
      <main className="case-page">
        <section className="case-hero">
          <div className="container-wide case-hero__grid">
            <div className="case-hero__copy">
              <div className="project-badge-list">
                {heroBadges.map((badge) => <span key={badge}>{badge}</span>)}
              </div>
              <p className="projects-name">Shiven Parikh</p>
              <h1>{semiconductorProjectTitle}</h1>
              <p className="case-hero__subtitle">
                A data-driven global sourcing model comparing 10 OSAT semiconductor packaging
                suppliers across capability, country risk, geographic diversification, financial
                scale, U.S. buyer fit, cost exposure, and sourcing resilience.
              </p>
              <p className="case-hero__summary">
                Built a sourcing decision model for a U.S.-based technology hardware company
                evaluating global semiconductor packaging and OSAT suppliers. The project uses
                public supplier research, structured scoring logic, Excel formulas, and a Tableau
                dashboard to identify which suppliers offer the best balance of capability, risk,
                cost exposure, and long-term sourcing resilience.
              </p>
              <div className="case-actions">
                {deliverables.map((item) => (
                  <a className="button button--outline" href={item.href} target="_blank" rel="noreferrer" key={item.href}>
                    {item.label} <Icon name="arrow" />
                  </a>
                ))}
              </div>
            </div>
            <figure className="case-hero__visual">
              <img
                src={semiconductorDashboardHref}
                alt="Supplier ranking dashboard showing confidence-adjusted OSAT supplier scores"
              />
              <figcaption>
                Dashboard view: confidence-adjusted supplier scores for the semiconductor
                packaging sourcing model.
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="container-wide case-content">
          <section className="case-summary-grid" aria-label="Project summary">
            {summaryItems.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </article>
            ))}
          </section>

          <DetailSection title="Project Overview" eyebrow="01">
            <p>
              This project evaluates global semiconductor packaging and OSAT suppliers for a
              U.S.-based technology hardware buyer. The model compares suppliers across technical
              capability, country and trade risk, geographic diversification, cost exposure, data
              confidence, and sourcing resilience.
            </p>
            <p>
              Built to help a U.S.-based semiconductor buyer identify preferred, conditional, and
              high-risk OSAT suppliers under geopolitical, technical, and sourcing constraints.
            </p>
            <p>
              OSAT means outsourced semiconductor assembly and test, the supplier layer responsible
              for chip packaging, assembly, and testing.
            </p>
            <p>
              It should be read as a portfolio sourcing model based on public data and
              analyst-defined assumptions, not as confidential supplier analysis or final
              procurement advice.
            </p>
          </DetailSection>

          <DetailSection title="Why This Project Matters" eyebrow="02">
            <p>
              Semiconductor packaging and OSAT suppliers matter because advanced packaging, AI
              hardware demand, country risk, export controls, and supply chain concentration all
              affect sourcing decisions. This is not just a technical semiconductor project. It is
              a global sourcing and supplier risk project focused on how a buyer can compare
              supplier strength, exposure, and resilience in a structured way.
            </p>
          </DetailSection>

          <DetailSection title="Supplier List" eyebrow="03">
            <div className="supplier-grid">
              {suppliers.map(([supplier, region]) => (
                <article key={supplier}>
                  <strong>{supplier}</strong>
                  <span>{region}</span>
                </article>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="Methodology" eyebrow="04">
            <ol className="case-list">
              {methodology.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </DetailSection>

          <DetailSection title="AI Use Disclosure" eyebrow="05">
            <p className="callout">
              I used AI as a workplace-style research assistant to speed up manual data
              extraction, summarize public supplier sources, check formulas, and challenge scoring
              assumptions. I made the final supplier selections, reviewed the data, decided the
              scoring weights, built the Excel model, and interpreted the results.
            </p>
          </DetailSection>

          <DetailSection title="Scoring Criteria" eyebrow="06">
            <div className="criteria-table" role="table" aria-label="Scoring criteria and weights">
              {scoringCriteria.map(([criterion, weight]) => (
                <div role="row" key={criterion}>
                  <span role="cell">{criterion}</span>
                  <strong role="cell">{weight}</strong>
                </div>
              ))}
            </div>
            <p>
              Data Confidence was used as a separate score modifier, not part of the 100% core
              score.
            </p>
          </DetailSection>

          <DetailSection title="Key Formulas" eyebrow="07">
            <div className="formula-grid">
              <article>
                <span>Core Supplier Score</span>
                <pre>{`(Country / Trade Risk * 20%) +
(Geographic Diversification * 15%) +
(Advanced Packaging / AI Fit * 16%) +
(Technical Capability * 17%) +
(Financial Scale * 12%) +
(U.S. Buyer Fit * 10%) +
(Cost Exposure Proxy * 10%)`}</pre>
              </article>
              <article>
                <span>Confidence-Adjusted Score</span>
                <pre>{`Core Supplier Score *
(0.85 + (Data Confidence / 10) * 0.15)`}</pre>
              </article>
            </div>
          </DetailSection>

          <DetailSection title="Dashboard Results" eyebrow="08">
            <figure className="case-dashboard">
              <img
                src={semiconductorDashboardHref}
                alt="Supplier ranking by confidence-adjusted score dashboard"
              />
              <figcaption>
                Tableau dashboard screenshot used to compare supplier confidence-adjusted scores.
              </figcaption>
            </figure>
            <ul className="case-list">
              {dashboardResults.map((result) => <li key={result}>{result}</li>)}
            </ul>
          </DetailSection>

          <DetailSection title="Final Recommendation" eyebrow="09">
            <p>
              ASE Technology / ASE Group and Amkor Technology are the strongest overall supplier
              options. ASE is the strongest global advanced packaging benchmark supplier, while
              Amkor is the strongest U.S.-headquartered resilience option. PTI is a strong
              secondary backend packaging and test supplier. China-based suppliers such as JCET,
              Tongfu, and Huatian show strong technical or cost potential, but they carry higher
              country/trade risk and weaker U.S. buyer fit. Micross should not be compared
              directly to global-scale OSATs by revenue alone; it is better treated as a U.S.
              specialty/high-reliability resilience supplier.
            </p>
          </DetailSection>

          <DetailSection title="Data Quality Notes" eyebrow="10">
            <p>
              The model uses public data where available and clearly labeled assumptions where
              private supplier quotes, exact lead times, and detailed OSAT pricing were not
              publicly available. Private suppliers such as Micross and UTAC had weaker financial
              visibility, so data confidence was used to adjust results. The model should be
              interpreted as a first-pass sourcing analysis, not a final procurement award
              decision.
            </p>
          </DetailSection>

          <DetailSection title="Supporting Credential" eyebrow="11">
            <article className="credential-card">
              <span>Introduction to Semiconductor Packaging - Arizona State University, Coursera</span>
              <p>
                Completed foundational coursework in semiconductor packaging to better understand
                packaging materials, assembly processes, reliability considerations, and how
                technical product requirements affect sourcing, supplier risk, and technology
                hardware supply chains.
              </p>
              <a className="text-link" href={semiconductorCertificateHref} target="_blank" rel="noreferrer">
                View Certificate <Icon name="arrow" />
              </a>
            </article>
          </DetailSection>

          <DetailSection title="Deliverables" eyebrow="12">
            <div className="deliverable-grid">
              {deliverables.map((item) => (
                <a href={item.href} target="_blank" rel="noreferrer" key={item.href}>
                  {item.label} <Icon name="arrow" />
                </a>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="Skills Demonstrated" eyebrow="13">
            <ul className="tag-list case-tags" aria-label="Skills demonstrated">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </DetailSection>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
