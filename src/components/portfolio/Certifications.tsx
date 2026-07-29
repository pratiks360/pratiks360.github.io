import Section from "./Section";

const certs = [
  "Confluent Certified Data Streaming Engineer",
  "Confluent Certified Developer for Apache Kafka",
  "HashiCorp Terraform Associate",
  "HashiCorp Vault Associate",
  "Oracle Cloud Architect Associate",
  "Oracle Cloud Developer Associate",
  "Oracle Autonomous Database Specialist",
  "IBM Watson Assistant Foundations",
  "Python Programmer",
];

export default function Certifications() {
  return (
    <Section
      id="certifications"
      command="cat certifications.md"
      title="certifications"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <div
            key={c}
            className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/50 p-4 transition-colors hover:border-primary/60"
          >
            <span className="mt-0.5 font-mono text-xs text-primary">[✓]</span>
            <span className="text-sm text-foreground/90">{c}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}