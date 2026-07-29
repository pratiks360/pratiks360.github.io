import Section from "./Section";

const traits = [
  "Raspberry Pi tinkerer",
  "Home Assistant addict",
  "Linux enthusiast",
  "Astronomy lover",
  "DIY automation",
  "Open-source contributor",
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
            <span className="text-primary">$</span> cat ~/.personality
          </div>
          <ul className="space-y-2 font-mono text-sm">
            {traits.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-primary">›</span>
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}