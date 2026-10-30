import type { ReactNode } from "react";
import { peakFormCaseDocumentHref, peakFormPreviewHref, peakFormSlidesHref, peakFormTitle } from "./data";
import { Icon } from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { useScrollReveal } from "./useScrollReveal";

const skills = ["Supply Chain Strategy", "Reverse Logistics", "Operations Optimization", "Financial Analysis", "Process Improvement", "Cross-Functional Collaboration"];

const pillars = [
  {
    icon: "support", title: "Customer Support & Return Prevention", label: "Resolve before pickup",
    description: "Give agents a shared view of device telemetry, diagnostic intake, and customer history. The proposed internal AI assistant supports live troubleshooting while people retain service decisions.",
    points: ["Capture guided self-diagnostics before agent connection.", "Train selected pickup crews to resolve approved issues on-site.", "Share accountability for CSAT, NFF rate, and cost per resolved case."],
    source: "Team slides 7, 9–12"
  },
  {
    icon: "triage", title: "Intelligent Returns Triage", label: "Match condition to recovery",
    description: "Use standardized grading at pickup and partner verification on arrival to distinguish cosmetic wear, repairable defects, and units beyond economic repair.",
    points: ["Define Grade A, Grade B, and repairable standards.", "Route suitable units to refurbishment and resale.", "Retain return-to-stock and parts recovery pathways; use case reference paths for recycling and scrap."],
    source: "Team slides 15, 17, 19; case Exhibit 4"
  },
  {
    icon: "network", title: "Scalable Reverse Logistics Network", label: "Pilot partners before building",
    description: "Pilot direct routing from customers to regional third-party refurbishment partners in 1–2 regions. Eligible units bypass Indianapolis, reducing dependence on the overloaded depot.",
    points: ["Select a partner with grading and revenue-sharing terms.", "Learn actual regional demand, selling prices, and recovery costs.", "Defer an in-house build until pilot economics justify investment."],
    source: "Team slides 16–19, 22"
  },
  {
    icon: "data", title: "Data-Driven Decision Making", label: "Close the service feedback loop",
    description: "Connect diagnostic history, return reasons, serial numbers, warranty status, and unit-level repair and resale outcomes so each return improves future decisions.",
    points: ["Track shared service metrics and recovery performance.", "Feed recurring failure patterns to Engineering and Quality.", "Require partner data sharing and size capacity against proven demand."],
    source: "Team slides 7–9, 11, 18; case Exhibit 5"
  }
] as const;

const phases = [
  { time: "Days 1–45", title: "Set the foundation", text: "Begin the data pipeline and AI support work. Engage depot experts for technician training. Select a refurbishment partner and agree on grading, revenue sharing, and unit-level data access." },
  { time: "Months 2–3", title: "Pilot regional routing", text: "Launch pre-grading at pickup and direct routing in 1–2 regions. Have the partner verify incoming grades and report repair and resale outcomes." },
  { time: "Months 4–6", title: "Validate the economics", text: "Collect actual grade mix, realized prices, sell-through by region, and recovery costs. Use the Month 6 gate to assess whether in-house capacity is justified." },
  { time: "Month 7", title: "Prepare a conditional build", text: "If the pilot supports investment, identify contractors and coordinate the business units needed for an in-house refurbishment program." },
  { time: "Months 8–12", title: "Build and refine", text: "Proceed with the deferred build only if resale economics are proven. Refine routing and recovery operations using partner feedback; ramp timing remains a planning assumption." }
];

function PillarIcon({ name }: { name: typeof pillars[number]["icon"] }) {
  const paths = {
    support: "M5 13v-1a7 7 0 0 1 14 0v1M5 12H3v6h4v-6H5m14 0h2v6h-4v-6h2m0 6v3h-7",
    triage: "M4 4h16v5H4zM12 9v5m-7 6v-6h14v6M2 20h6m8 0h6m-10-6v6m-3 0h6",
    network: "M9 3h6v6H9zM2 16h6v6H2zM16 16h6v6h-6zM12 9v4m-7 3v-3h14v3",
    data: "M4 3v18h17M8 17v-5m5 5V7m5 10v-8"
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]} /></svg>;
}

function Section({ index, title, id, children }: { index: string; title: string; id: string; children: ReactNode }) {
  return (
    <section className="case-section" id={id} aria-labelledby={`${id}-heading`} data-animate="section">
      <div className="case-section__heading"><p className="section-index">{index}</p><h2 id={`${id}-heading`}>{title}</h2></div>
      <div className="case-section__body">{children}</div>
    </section>
  );
}

export function PeakFormCasePage() {
  useScrollReveal();
  return (
    <>
      <div id="top" />
      <SiteHeader page="projects" />
      <main className="case-page peakform-page">
        <section className="case-hero" data-animate="section">
          <div className="container-wide">
            <a className="text-link peakform-back" href="./projects.html"><span aria-hidden="true">←</span> All projects</a>
            <div className="case-hero__grid">
              <div className="case-hero__copy" data-animate="left">
                <div className="project-badge-list"><span>2026</span><span>Case Competition</span><span>Team Strategy</span></div>
                <p className="projects-name">Shiven Parikh / Supply Chain Strategy</p>
                <h1>{peakFormTitle}</h1>
                <p className="case-hero__subtitle">A strategy to prevent unnecessary returns and recover more value from connected fitness equipment.</p>
                <p className="case-hero__summary">Our team analyzed a fictional company’s reverse logistics losses and proposed better support diagnostics, intelligent triage, and a regional refurbishment pilot, with investment tied to evidence.</p>
                <p className="peakform-context">Supply Chain Strategy | Operations Optimization | Case Competition</p>
                <div className="case-actions">
                  <a className="button button--primary" href="#strategy">Explore our strategy <Icon name="arrow" /></a>
                  <a className="button button--outline" href="#impact">View the analysis <Icon name="arrow" /></a>
                  <a className="button button--outline" href={peakFormSlidesHref} download="TEAM 3 SCMA Case Comp.pptx">Download Slides (PPTX) <Icon name="download" /></a>
                  <a className="button button--outline" href={peakFormCaseDocumentHref} download="PeakForm Case Study.docx">Download Case Study (DOCX) <Icon name="download" /></a>
                </div>
              </div>
              <figure className="case-hero__visual" data-animate="panel">
                <img className="peakform-network-image" src={peakFormPreviewHref} alt="Proposed flow: support diagnostics resolve issues at home; approved returns are graded at pickup and routed to regional refurbishment partners or Indianapolis, with repair and resale data feeding future decisions." />
                <div className="peakform-mobile-flow">
                  <p className="peakform-mobile-flow__label">Proposed operating model</p>
                  <h2>Prevent first.<br />Recover intelligently.</h2>
                  <ol>
                    <li><span>01 / Support diagnostics</span><strong>Resolve at home</strong><p>Guided troubleshooting or an approved on-site fix.</p></li>
                    <li><span>02 / Physical return approved</span><strong>Pre-grade at pickup</strong><p>Route by product condition and recovery potential.</p></li>
                    <li><span>03 / Recovery pathways</span><strong>Regional refurb partner</strong><p>Grade A / B, repair, and resale.</p><strong>Indianapolis depot</strong><p>Return to stock, parts recovery, and e-waste.</p></li>
                  </ol>
                  <p className="peakform-mobile-flow__feedback">Repair and resale data inform the next decision.</p>
                </div>
                <figcaption>Proposed network, summarized from team slides 9, 12, 17–18. Case competition recommendations; implementation and realized results were outside the project scope.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <nav className="peakform-jump-nav" aria-label="Case study sections"><div className="container-wide"><a href="#challenge">The challenge</a><a href="#root-causes">Root causes</a><a href="#strategy">Our strategy</a><a href="#roadmap">Roadmap</a><a href="#impact">Business impact</a></div></nav>

        <div className="container-wide case-content">
          <Section index="01 / CASE BASELINE" title="The Challenge" id="challenge">
            <p>PeakForm’s return rate looked healthy, but its recovery economics did not. The case reports $24.3M in reverse logistics spending and $7.4M in recovered value for 2025, leaving a $16.9M annual net loss. Approximately 70% of spending remained unrecovered.</p>
            <div className="case-metric-grid peakform-kpis">
              {[
                ["$16.9M", "Annual net loss", "$24.3M spend less $7.4M recovered."],
                ["9.9%", "Current-year return rate", "15,504 returns ÷ 157,000 shipped; best-in-class in the case."],
                ["3×", "Depot design capacity", "36,000 annual returns through a 12,000-unit facility."],
                ["$2M", "Year 1 budget", "Discretionary funding, with 45 days to present a plan."]
              ].map(([value, label, detail]) => <article key={label}><strong>{value}</strong><span>{label}</span><p>{detail}</p></article>)}
            </div>
            <p className="peakform-source">Source: case background, Exhibits 1 and 3, and “The Decision Point.” The 36,000 depot returns include 20,496 prior-year warranty claims, which are excluded from the current-year return rate.</p>
            <p>Hardware shipments grew from roughly 40,000 in 2019 to more than 150,000 by 2024. The strategy therefore needed to support a larger installed base without sending every service issue through Indianapolis.</p>
          </Section>

          <Section index="02 / DIAGNOSIS" title="Root Cause Analysis" id="root-causes">
            <div className="peakform-causes">
              <article><span>01</span><h3>Incentives favored authorization</h3><p>Support owned handle time and satisfaction while Operations absorbed the cost. A return took 3.4 minutes to authorize, versus 14.2 minutes for remote troubleshooting. At the depot, 29% of returns had no fault found (NFF).</p></article>
              <article><span>02</span><h3>Diagnostics arrived too late</h3><p>Only 41% of return records had actionable reason codes. Although 62% of the warranty-return telemetry cohort showed anomalies an average of 23 days ahead, alerts and support routing were missing.</p></article>
              <article><span>03</span><h3>Disposition erased value differences</h3><p>The company liquidated 93% of returns for a blended $82 per unit. Functional equipment with cosmetic wear entered the same channel as low-value units, with no certified refurbishment or tiered resale program.</p></article>
            </div>
            <p className="peakform-source">Source: case Exhibits 2, 3, 5, and 7; team slides 5, 7–8, 15. The telemetry cohort is distinct from the prior-year warranty population.</p>
          </Section>

          <Section index="03 / RECOMMENDATIONS" title="Our Strategy" id="strategy">
            <p>Our presentation organized the problem around avoiding physical returns and recovering more value from the returns that remained. These four pillars bring the team’s recommendations into one operating model.</p>
            <div className="peakform-pillars">
              {pillars.map((pillar, index) => <article className={`peakform-pillar peakform-pillar--${pillar.icon}`} key={pillar.title}>
                <div className="peakform-pillar__top"><PillarIcon name={pillar.icon} /><span>0{index + 1} / {pillar.label}</span></div>
                <h3>{pillar.title}</h3><p>{pillar.description}</p>
                <ul>{pillar.points.map(point => <li key={point}>{point}</li>)}</ul>
                <p className="peakform-source">{pillar.source}</p>
              </article>)}
            </div>
            <p className="callout">The investment decision: prove recovery value with a partner first. The case’s $1.685M in-house refurbishment program would consume about 84% of the Year 1 budget and reach full throughput only after a six-month ramp.</p>
            <p className="peakform-source">Source: case Exhibit 8 and team slide 16. A regional field-contractor expansion and DIY repair option were deferred ideas in slide 22, rather than initial pilot commitments.</p>
          </Section>

          <Section index="04 / PROPOSED EXECUTION" title="12-Month Implementation Roadmap" id="roadmap">
            <p>A partner-first sequence preserves room for the support and data fixes while building evidence for a later capital decision. This is a proposed plan; phase lengths are team estimates.</p>
            <ol className="peakform-timeline">
              {phases.map((phase, index) => <li key={phase.time}><span className="peakform-timeline__number" aria-hidden="true">0{index + 1}</span><div><span className="peakform-timeline__time">{phase.time}</span><h3>{phase.title}</h3><p>{phase.text}</p></div></li>)}
            </ol>
            <p className="peakform-source">Adapted from team slides 16, 18–19, 21–22. The Month 6 gate and conditional Months 8–12 build follow slide 22; a late-year ramp would require validation before committing capacity.</p>
          </Section>

          <Section index="05 / ECONOMICS & EXPECTATIONS" title="Business Impact" id="impact">
            <p>The analysis separates the existing cost exposure from team projections. The competition did not include deployment or measurement of realized benefits.</p>
            <div className="peakform-impact-grid">
              <article><span className="peakform-label">Calculated case baseline</span><strong>$4.57M</strong><h3>Annual NFF cost exposure</h3><p>36,000 depot returns × 29% NFF × $438 per NFF-path return = $4,572,720. This identifies an avoidable-cost opportunity; it is not a savings forecast.</p><p className="peakform-source">Case Exhibits 2 and 5; team slide 7.</p></article>
              <article><span className="peakform-label">Team projection</span><strong>22.3%</strong><h3>Fewer physical returns</h3><p>The team projected a decrease from 36,000 to 27,956 returns: 8,044 fewer annually. The projection depends on support adoption and successful on-site resolution.</p><p className="peakform-source">Team slides 13 and 23. Calculated as 8,044 ÷ 36,000; rounded to one decimal. Supporting model was not supplied.</p></article>
            </div>
            <div className="peakform-budget">
              <div><p className="peakform-label">Proposed Year 1 commitments</p><strong>$835K <span>of $2M</span></strong></div>
              <div className="peakform-budget__bar" role="img" aria-label="Proposed commitments are 41.75 percent of the two million dollar budget, leaving 1.165 million unallocated"><span /></div>
              <ul><li><span>AI support platform</span><strong>$500K</strong></li><li><span>Technician training</span><strong>$150K</strong></li><li><span>3PL pilot setup</span><strong>$185K</strong></li><li><span>Unallocated reserve</span><strong>$1.165M</strong></li></ul>
              <p className="peakform-source">Team slide 23 estimates. Direct-to-partner routing is included in pilot setup. These figures describe proposed commitments, not a complete validated operating-cost or buildout forecast.</p>
            </div>
            <p><strong>Expected operating improvements:</strong> fewer unnecessary pickups, less depot handling, better grading consistency, and visibility into actual recovery value. Validate the pilot through NFF rate, cost per resolved case, customer satisfaction, and net recovery after partner fees, freight, and repair costs.</p>
            <details className="peakform-evidence"><summary>Financial projections and evidence limits</summary><p>The presentation includes a $2.92M annual return-prevention savings estimate (slide 13), an $8.64M additional recovery opportunity (slide 17), and a roughly $12.7M combined annual savings scenario (slide 23). The supporting financial workbook was not provided, and these figures use different scenarios and return volumes. They require reconciliation of avoided returns, partner recovery, routing savings, and ramp timing before a combined savings or payback claim can be supported.</p><p>Industry recovery values in case Exhibit 4 are benchmarks, not PeakForm’s realized prices. Partner shares, visit costs, adoption, grading accuracy, and sales velocity remain assumptions to test.</p></details>
          </Section>

          <Section index="06 / CAPABILITIES" title="Skills Demonstrated" id="skills">
            <p>This team case connected operational diagnosis with service incentives, recovery economics, partner selection, and a phased investment decision.</p>
            <ul className="tag-list case-tags" aria-label="Skills demonstrated">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
            <p className="peakform-team">Team: Shiven P. (Supply Chain Management), Anish Y. (Supply Chain Management), and Rohan A. (Economics &amp; Computer Science), as credited in presentation slide 3.</p>
          </Section>

          <aside className="peakform-source-note" aria-label="Case study sources">
            <h2>About this case study</h2>
            <p>Based on <cite>PeakForm Case Study</cite> (case background and Exhibits 1–8) and <cite>TEAM 3 SCMA Case Comp</cite> (24-slide team presentation dated October 24, 2026). PeakForm is fictional. Figures labeled “case baseline” come from the case; recommendations, budgets, and projections come from the team presentation. The four-pillar layout and process diagram summarize that work for this portfolio.</p>
            <div className="deliverable-grid">
              <a href={peakFormSlidesHref} download="TEAM 3 SCMA Case Comp.pptx">Download Team Slides (PPTX) <Icon name="download" /></a>
              <a href={peakFormCaseDocumentHref} download="PeakForm Case Study.docx">Download Original Case Study (DOCX) <Icon name="download" /></a>
            </div>
          </aside>
          <a className="text-link peakform-end-link" href="./projects.html"><span aria-hidden="true">←</span> Back to all projects</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
