import Section from "./Section";

// The interests that used to live here now have room of their own in the
// "beyond work" section — see src/content/beyond-work.ts.
const facts = [
  { label: "based", value: "Dubai, UAE" },
  { label: "experience", value: "12+ years" },
  { label: "focus", value: "AI · cloud · event streaming" },
  { label: "domains", value: "banking · payments · enterprise" },
];

export default function About() {
  return (
    <Section id="about" command="cat about.md" title="about">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            Solution Architect with{" "}
            <span className="text-primary">12+ years</span> designing and
            delivering enterprise-scale solutions across banking, payments, data
            streaming, cloud, and AI platforms. Strong background in presales,
            solution modernization, and proof-of-value engagements.
          </p>
          <p>
            Proven track record leading end-to-end{" "}
            <span className="text-primary">PoCs, MVPs, and platform deployments</span>{" "}
            involving cloud, Kubernetes, data streaming, and Generative AI.
            Partners closely with CXOs, enterprise architects, and engineering
            teams to drive technology adoption and business value across BFSI
            and large enterprise customers.
          </p>
        </div>
        <aside className="rounded-lg border border-border/70 bg-card/60 p-6">
          <div className="mb-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> cat ~/.profile
          </div>
          <dl className="space-y-3 font-mono text-sm">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs text-primary/70">{f.label}</dt>
                <dd className="mt-0.5 text-foreground/85">{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}