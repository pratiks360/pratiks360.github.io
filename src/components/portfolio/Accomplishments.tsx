import Section from "./Section";

const items = [
  {
    tag: "GenAI",
    text: "First-of-its-kind on-prem air-gapped GenAI solution for RBI, replicated across multiple banks with AI Governance.",
  },
  {
    tag: "Streaming",
    text: "Integrated Confluent Hub MQTT–Kafka–InfluxDB connectors; built live data streaming with WebRTC.",
  },
  {
    tag: "Security",
    text: "Originated RFID encryption/decryption module for India's FastTag toll system.",
  },
  {
    tag: "Observability",
    text: "Built a Nagios-style real-time server health monitoring dashboard for distributed systems.",
  },
  {
    tag: "Open Source",
    text: "Maintains 48+ open-source repositories spanning IoT, data streaming, and AI integrations.",
  },
];

export default function Accomplishments() {
  return (
    <Section
      id="accomplishments"
      command="cat highlights.log"
      title="noteworthy accomplishments"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((it, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-lg border border-border/60 bg-card/50 p-6 transition-all hover:border-primary/60 hover:shadow-[0_0_30px_oklch(0.82_0.22_145/15%)]"
          >
            <div className="mb-3 flex items-center gap-2 font-mono text-xs">
              <span className="text-primary">[+]</span>
              <span className="rounded border border-primary/50 bg-primary/10 px-2 py-0.5 text-primary">
                {it.tag}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              {it.text}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}