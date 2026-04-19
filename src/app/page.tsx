import Image from "next/image";
import NavBar from "./components/NavBar";
import SlotMachine from "./components/SlotMachine";

const services = [
  {
    number: "01",
    title: "Strategic Leadership",
    description:
      "Developing executive capacity and leadership team cohesion to align vision with execution across every level of your organization.",
  },
  {
    number: "02",
    title: "Performance Systems",
    description:
      "Building frameworks that drive consistent, measurable results — from goal-setting architecture to accountability rhythms and KPI design.",
  },
  {
    number: "03",
    title: "Organizational Design",
    description:
      "Structuring teams, roles, and processes for clarity, scale, and efficiency so your organization operates at its highest potential.",
  },
  {
    number: "04",
    title: "Executive Development",
    description:
      "Personalized coaching and advisory for senior leaders and high-potential talent navigating complexity, transition, and growth.",
  },
];

const caseStudies = [
  {
    sector: "Financial Services",
    challenge: "Fragmented leadership team stalling a post-merger integration",
    result: "Unified operating model, 40% faster decision cycles within 90 days",
  },
  {
    sector: "Healthcare",
    challenge: "Inconsistent performance management across 12 regional sites",
    result:
      "Standardized cadence and scorecard system deployed org-wide in one quarter",
  },
  {
    sector: "Technology",
    challenge:
      "Rapid headcount growth outpacing management capability development",
    result: "Leadership pipeline program supporting 3× headcount scale",
  },
];

export default function Home() {
  return (
    <>
      <NavBar />

      {/* ── Hero ─────────────────────────────────── */}
      <section
        id="home"
        className="bg-[#FAECE7] py-28 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#042C53] opacity-35 mb-10">
            Advanced Management Performance
          </p>

          {/* Slot machine — A M P cycling display */}
          <div className="mb-10">
            <SlotMachine />
          </div>

          <h1 className="text-xl md:text-2xl font-light text-[#042C53] opacity-70 max-w-xl leading-[1.45] mb-4">
            Elevating{" "}
            <em className="text-[#D85A30] not-italic font-normal">management</em>{" "}
            performance at every level.
          </h1>
          <p className="text-sm font-light text-[#042C53] opacity-50 max-w-md leading-[1.75] mb-10">
            Strategic consulting that drives measurable results for leadership
            teams and organizations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#042C53] text-white text-sm font-semibold tracking-[0.06em] px-7 py-3.5 rounded-md hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="text-[#042C53] text-sm font-semibold tracking-[0.06em] px-7 py-3.5 border border-[rgba(4,44,83,0.2)] rounded-md hover:bg-[rgba(4,44,83,0.05)] transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────── */}
      <section id="services" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#042C53] opacity-35 mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#042C53] leading-[1.2] max-w-lg mb-16">
            Capabilities built for{" "}
            <em className="text-[#D85A30] not-italic">lasting</em> impact.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.number}
                className="border border-[rgba(4,44,83,0.08)] rounded-xl p-8 hover:shadow-[0_4px_24px_rgba(4,44,83,0.08)] transition-shadow"
              >
                <span className="block text-xs font-semibold tracking-[0.12em] text-[#D85A30] mb-4">
                  {s.number}
                </span>
                <h3 className="text-lg font-semibold text-[#042C53] mb-3">
                  {s.title}
                </h3>
                <p className="text-sm font-light text-[#042C53] opacity-55 leading-[1.75]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────── */}
      <section id="about" className="bg-[#FBEEDB] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Accent gradient bar */}
          <div
            className="h-1 w-16 rounded-full mb-12"
            style={{
              background:
                "linear-gradient(90deg, #D85A30 0%, #042C53 100%)",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#042C53] opacity-35 mb-3">
                About AMP
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#042C53] leading-[1.2] mb-6">
                Management excellence is a discipline, not a trait.
              </h2>
              <p className="text-sm font-light text-[#042C53] opacity-60 leading-[1.8] mb-4">
                Advanced Management Performance (AMP) is a boutique consulting
                firm dedicated to elevating the practice of management. We work
                alongside leadership teams to build the systems, skills, and
                culture that turn good organizations into great ones.
              </p>
              <p className="text-sm font-light text-[#042C53] opacity-60 leading-[1.8] mb-10">
                Our approach is rigorous, practical, and deeply human. We don't
                deliver reports — we embed with your team, diagnose what's
                actually happening, and build lasting capability from the inside
                out.
              </p>
              <a
                href="#contact"
                className="inline-block text-[#D85A30] text-sm font-semibold tracking-[0.06em] border-b border-[#D85A30] pb-0.5 hover:opacity-70 transition-opacity"
              >
                Work with us →
              </a>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { value: "15+", label: "Years of combined experience" },
                { value: "80+", label: "Organizations served" },
                { value: "100%", label: "Client-focused engagements" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(4,44,83,0.06)]"
                >
                  <span className="block text-4xl font-semibold text-[#D85A30] mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold tracking-[0.08em] uppercase text-[#042C53] opacity-45">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────── */}
      <section id="case-studies" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#042C53] opacity-35 mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#042C53] leading-[1.2] max-w-lg mb-16">
            Results that speak for themselves.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.sector}
                className="border border-[rgba(4,44,83,0.08)] rounded-xl overflow-hidden hover:shadow-[0_4px_24px_rgba(4,44,83,0.08)] transition-shadow"
              >
                <div className="h-1" style={{ background: "linear-gradient(90deg, #D85A30 0%, #042C53 100%)" }} />
                <div className="p-7">
                  <span className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#D85A30] mb-4">
                    {cs.sector}
                  </span>
                  <p className="text-sm font-semibold text-[#042C53] leading-[1.5] mb-3">
                    {cs.challenge}
                  </p>
                  <p className="text-xs font-light text-[#042C53] opacity-55 leading-[1.7]">
                    {cs.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────── */}
      <section id="contact" className="bg-[#042C53] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white opacity-40 mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-[1.2] mb-6">
              Ready to raise the bar on{" "}
              <em className="text-[#D85A30] not-italic">performance</em>?
            </h2>
            <p className="text-sm font-light text-white opacity-55 leading-[1.8] mb-10">
              Whether you're navigating a transition, scaling your team, or
              building a high-performance culture from the ground up — we'd love
              to talk.
            </p>
            <a
              href="mailto:hello@ampadvanced.com"
              className="inline-block bg-[#D85A30] text-white text-sm font-semibold tracking-[0.06em] px-8 py-4 rounded-md hover:opacity-85 transition-opacity"
            >
              hello@ampadvanced.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────── */}
      <footer className="bg-[#042C53] border-t border-[rgba(255,255,255,0.08)] px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Image
            src="/logo-dark-bg.png"
            alt="Advanced Management Performance"
            width={1600}
            height={896}
            className="h-8 w-auto opacity-80"
          />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="flex gap-6">
              {["Services", "About", "Case Studies", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white opacity-35 hover:opacity-70 transition-opacity"
                >
                  {item}
                </a>
              ))}
            </div>
            <span className="text-[10px] text-white opacity-25 font-light tracking-[0.05em]">
              © {new Date().getFullYear()} Advanced Management Performance. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
