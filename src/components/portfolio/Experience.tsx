import Section from "./Section";

const items = [
  {
    role: "Solution Architect",
    company: "Redington Gulf FZE, UAE",
    period: "Sept 2025 – Present",
    bullets: [
      "Architects Confluent-based data streaming solutions for BFSI customers.",
      "Designs end-to-end architectures covering Kafka, Schema Registry, Connectors, ksqlDB, security, HA/DR for banking workloads.",
      "Enables partners via technical workshops and joint PoCs.",
      "Leads technical positioning for Couchbase NoSQL deployments.",
    ],
  },
  {
    role: "Solution Architect",
    company: "IBM India",
    period: "Apr 2021 – Aug 2025",
    bullets: [
      "Technology Engineer in IBM's APAC Client Engineering team.",
      "Architected a first-of-its-kind on-premises air-gapped GenAI solution for RBI (Reserve Bank of India) — end-to-end from hardware procurement through GenAI platform setup.",
      "Replicated across multiple banks with AI Governance integration.",
      "Spoke at Gartner conferences; delivered multiple WatsonX.ai PoCs and PoX projects.",
    ],
  },
  {
    role: "Consultant",
    company: "Capgemini India",
    period: "Sep 2018 – Apr 2021",
    bullets: [
      "Onsite at Yes Bank designing a platform-as-a-service for Big Data DDL execution (HBase, Kafka, Hive).",
      "Built microservices integrating Learning Management Systems bank-wide.",
      "Established Google APIGEE for core banking API management.",
    ],
  },
  {
    role: "Software Developer",
    company: "Active AI India",
    period: "Apr 2018 – Sep 2018",
    bullets: [
      "Onsite at Axis Bank; built Apache Camel workflows.",
      "Resolved production issues ensuring transaction stability.",
    ],
  },
  {
    role: "Software Developer",
    company: "Clayn Technologies India",
    period: "Oct 2017 – Apr 2018",
    bullets: [
      "Onsite at Reliance JIO; built Spring Batch applications for JioMoney EBPP.",
      "Optimized APIs via non-blocking re-architecture.",
    ],
  },
  {
    role: "Software Developer",
    company: "Efkon India",
    period: "Feb 2016 – Sep 2017",
    bullets: [
      "Delivered custom solutions for Maruti Suzuki and Indian Oil.",
      "Built BI dashboards and multithreaded reporting services.",
    ],
  },
  {
    role: "Software Developer",
    company: "3i-Infotech India",
    period: "Mar 2014 – Feb 2016",
    bullets: [
      "Built loan processing dashboards for Bank of Aljazira, Lloyds Bank, Muthoot Finance, Noor Islamic Bank, ENDB.",
      "Integrated Experian credit bureau services.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" command="ls experience/" title="experience">
      <ol className="relative border-l border-border/70 pl-6 md:pl-8">
        {items.map((it, i) => (
          <li key={i} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[31px] mt-2 flex h-3 w-3 items-center justify-center md:-left-[39px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_oklch(0.82_0.22_145/70%)]" />
            </span>
            <div className="rounded-lg border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/50">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {it.role}{" "}
                  <span className="text-primary">@ {it.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {it.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                {it.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-1 text-primary">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}