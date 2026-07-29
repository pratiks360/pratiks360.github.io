import Section from "./Section";

const items = [
  "Solutions Modernization",
  "Generative AI Solutioning",
  "Lead Generation",
  "Cloud-Native Architecture",
  "Agentic AI & LLM Workflows",
  "Enterprise AI Presales",
  "Process Streamlining",
  "Infrastructure as Code (IaC)",
  "PoC/MVP Delivery",
  "Capacity & Performance Planning",
  "Microservices Architecture",
  "Performance Benchmarking",
];

export default function Excellence() {
  return (
    <Section
      id="excellence"
      command="ls -1 excellence/"
      title="areas of excellence"
    >
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span
            key={i}
            className="rounded-full border border-border/70 bg-card/60 px-4 py-2 font-mono text-xs text-foreground/85 transition-colors hover:border-primary/70 hover:text-primary"
          >
            {i}
          </span>
        ))}
      </div>
    </Section>
  );
}