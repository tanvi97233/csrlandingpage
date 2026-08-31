"use client";

import { ArrowRight, BarChart3, Building2, Check, Database, FileCheck2, Gauge, Leaf, Menu, Network, ShieldCheck, Sparkles, Workflow, X } from "lucide-react";
import { useState } from "react";

const capabilities = [
  [Building2, "CSR portfolio management", "Plan obligations, approve budgets, manage disbursements and track utilization across every program."],
  [Network, "NGO partner intelligence", "Discover, evaluate and manage credible implementation partners using DaanVeda’s unique intelligence layer."],
  [Database, "ESG data hub", "Collect once across entities, sites and teams—then reuse verified data across disclosures and decisions."],
  [Leaf, "Carbon & environment", "Track Scope 1–3 emissions, energy, water, waste and reduction initiatives with traceable calculations."],
  [FileCheck2, "Reports & assurance", "Prepare BRSR, CSR, board and impact reports with every figure connected to its source evidence."],
  [Workflow, "Automated execution", "Use Unisheets and Workflow Builder to automate submissions, approvals, reminders and communication."],
] as const;
const steps = [
  ["01", "Discover", "Find implementation partners and benchmark corporate CSR activity."],
  ["02", "Plan", "Set strategies, programs, budgets, outcomes and reporting frameworks."],
  ["03", "Execute", "Coordinate teams and partners through workflows, milestones and approvals."],
  ["04", "Measure", "Collect ESG and impact data with evidence, ownership and quality checks."],
  ["05", "Report", "Create board- and assurance-ready disclosures from one trusted dataset."],
];
const stats = [["400K+", "nonprofit profiles"], ["52K+", "CSR company profiles"], ["5M+", "decision-maker profiles"], ["40K+", "funding opportunities"]];

function Logo() {
  return <a href="#top" className="logo" aria-label="DaanVeda ImpactOS home"><span className="logo-mark"><Leaf size={19}/></span><span>DaanVeda <b>ImpactOS</b></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main id="top">
    <header className="site-header"><div className="nav-wrap">
      <Logo/>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#platform">Platform</a><a href="#solutions">Solutions</a><a href="#intelligence">CSR Intelligence</a><a href="#frameworks">Frameworks</a><a href="#resources">Resources</a>
      </nav>
      <div className="nav-actions"><a className="text-link" href="/app">Log in</a><a className="button small" href="#demo">Book a demo <ArrowRight size={15}/></a></div>
      <button className="menu-button" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </div></header>

    <section className="hero shell">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={14}/> Corporate impact, connected end to end</div>
        <h1>Run CSR. Measure ESG. <span>Prove impact.</span></h1>
        <p className="lede">One operating system to discover trusted partners, execute CSR programs, collect verified ESG data and produce audit-ready disclosures.</p>
        <div className="actions"><a className="button" href="#demo">Book a demo <ArrowRight size={17}/></a><a className="button secondary" href="/app">Explore the platform</a></div>
        <div className="proof"><span><Check/>Built for Indian CSR</span><span><Check/>Multi-framework ESG</span><span><Check/>Evidence-level traceability</span></div>
      </div>
      <div className="product-frame" aria-label="ImpactOS dashboard preview">
        <aside className="mini-sidebar"><div className="mini-brand"><Leaf/>DV</div>{[Gauge,Building2,Database,BarChart3,FileCheck2].map((Icon,i)=><span className={i===0?"active":""} key={i}><Icon/></span>)}</aside>
        <div className="dashboard">
          <div className="dash-top"><div><b>Impact Overview</b><small>FY 2026–27</small></div><em><Sparkles/> AI Copilot</em></div>
          <p>CSR execution and ESG performance, in one view</p>
          <div className="metrics"><article><small>CSR obligation</small><strong>₹24.8 Cr</strong><i>FY 2026–27</i></article><article><small>Utilized</small><strong>₹18.6 Cr</strong><i className="green">75% of plan</i></article><article><small>Active programs</small><strong>32</strong><i>12 locations</i></article></div>
          <div className="dash-grid">
            <article className="chart"><header><b>Portfolio performance</b><a>View details</a></header>{[["Allocated","92%","dark"],["Disbursed","78%","dark"],["Utilized","70%","light"],["Unspent","24%","gray"]].map(([l,w,c])=><div className="bar" key={l}><small>{l}</small><span><i className={c} style={{width:w}}/></span></div>)}</article>
            <article className="score"><b>ESG readiness</b><div className="ring"><strong>78%</strong><small>overall</small></div><div><span>BRSR <b>84%</b></span><span>GRI <b>71%</b></span><span>ISSB <b>63%</b></span></div></article>
          </div>
        </div>
      </div>
    </section>

    <section className="trust" id="intelligence"><div className="shell trust-inner"><p>Powered by DaanVeda’s social-sector intelligence</p><div className="stat-row">{stats.map(([v,l])=><div className="stat" key={l}><strong>{v}</strong><span>{l}</span></div>)}</div></div></section>

    <section className="shell section" id="platform">
      <div className="heading split"><div><p className="kicker">One connected platform</p><h2>From commitment to credible impact.</h2></div><p>Most tools begin at reporting. ImpactOS connects the work before the report—partners, programs, budgets, data and evidence.</p></div>
      <div className="steps">{steps.map(([n,t,x],i)=><article key={t}><div><span>{n}</span>{i<4&&<ArrowRight/>}</div><h3>{t}</h3><p>{x}</p></article>)}</div>
    </section>

    <section className="soft section" id="solutions"><div className="shell">
      <div className="heading center"><p className="kicker">The operating system for impact</p><h2>Everything your CSR and ESG teams need.<br/>One trusted source of truth.</h2></div>
      <div className="cap-grid">{capabilities.map(([Icon,t,x])=><article key={t}><span className="icon"><Icon/></span><h3>{t}</h3><p>{x}</p><a href="/app">Explore capability <ArrowRight/></a></article>)}</div>
    </div></section>

    <section className="shell section"><div className="intel-panel">
      <div><p className="kicker light">The DaanVeda advantage</p><h2>Intelligence that moves directly into execution.</h2><p>Find a credible NGO, review its compliance and track record, shortlist it with your team, and turn it into a monitored program—without rebuilding context in another system.</p>
      <ul><li><Check/>Search and compare implementation partners</li><li><Check/>Access verified contacts and funding history</li><li><Check/>Move profiles into Unisheets and workflows</li></ul><a className="button pale" href="/app">Explore CSR Intelligence <ArrowRight/></a></div>
      <div className="partner-wrap"><div className="partner back"><span>P</span><div><b>Pragati Foundation</b><small>Education · Maharashtra</small></div><em>94%</em></div><div className="partner"><span>S</span><div><b>Saksham Livelihoods</b><small>Livelihoods · 4 active programs</small><i>DD verified</i><i>FCRA valid</i></div><em>91%</em></div><div className="verified"><ShieldCheck/><span><b>Evidence complete</b><small>All compliance documents verified</small></span></div></div>
    </div></section>

    <section className="shell section frameworks" id="frameworks"><div className="heading"><p className="kicker">Collect once. Report many.</p><h2>One data foundation for every framework.</h2><p>Map every metric to its source, owner, methodology and evidence. Then reuse it across mandatory, voluntary and internal reporting.</p></div><div className="pills">{["BRSR Core","Companies Act CSR","GRI","IFRS S1 & S2","GHG Protocol","SDGs","CDP","Custom"].map(x=><span key={x}>{x}</span>)}</div></section>

    <section className="shell section" id="resources"><div className="ai-band"><div><p className="kicker light">AI Copilot</p><h2>Ask your impact data what needs attention.</h2><p>Detect gaps, summarize risks and prepare management commentary—with every answer grounded in approved records and source evidence.</p></div><div className="prompt"><Sparkles/><span>Show me the programs at risk before the board review.</span><ArrowRight/></div></div></section>

    <section className="cta shell" id="demo"><div><p className="kicker light">Ready to connect your impact?</p><h2>Move from fragmented reporting to confident execution.</h2><p>See how DaanVeda ImpactOS can work across your CSR and ESG portfolio.</p></div><div className="cta-actions"><a className="button white" href="mailto:hello@daanveda.com?subject=DaanVeda%20ImpactOS%20demo">Book a demo <ArrowRight/></a><a href="/app">Open platform</a></div></section>

    <footer><div className="shell footer-grid"><div className="footer-brand"><Logo/><p>CSR execution and ESG performance, connected in one operating system.</p><small>© 2026 DaanVeda. All rights reserved.</small></div>{[["Platform","CSR Management","ESG Data Hub","NGO Management","Reporting"],["Solutions","Corporates","Foundations","Consultants","Implementation partners"],["Resources","Academy","Guides & templates","Events","Contact"],["Trust","Security","Privacy","Terms","Responsible AI"]].map(([h,...links])=><div key={h}><b>{h}</b>{links.map(x=><a href="#platform" key={x}>{x}</a>)}</div>)}</div></footer>
  </main>;
}
