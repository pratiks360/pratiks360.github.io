import Section from "./Section";

const projects = [
  {
    name: "ott-to-trakt-in",
    title: "OTT to Trakt",
    desc: "Lightweight client-side tool syncing trending movies/shows from Indian OTT platforms (Netflix, SonyLIV, Apple TV+, JioHotstar) to Trakt via GraphQL and Trakt APIs.",
    tags: ["JavaScript", "GraphQL", "API"],
  },
  {
    name: "readme-generator",
    title: "README Generator",
    desc: "Generates polished GitHub profile READMEs with dynamic sections and stats.",
    tags: ["JavaScript", "Tooling"],
  },
  {
    name: "onprem",
    title: "OnPrem",
    desc: "Enterprise on-prem deployment resources for air-gapped and regulated environments.",
    tags: ["Ruby", "DevOps"],
  },
  {
    name: "istio-circuit-breaker",
    title: "Istio Circuit Breaker",
    desc: "Reference implementation of Istio circuit-breaker patterns for resilient microservices.",
    tags: ["Python", "Istio", "K8s"],
  },
  {
    name: "py-tic-tac-toe",
    title: "Py Tic-Tac-Toe",
    desc: "Classic tic-tac-toe implemented in Python — a study in clean state machines.",
    tags: ["Python", "CLI"],
  },
  {
    name: "TO-DO-manager",
    title: "TO-DO Manager",
    desc: "Java-based task manager with clean CRUD flow and persistence layer.",
    tags: ["Java"],
  },
];

export default function Projects() {
  return (
    <Section id="projects" command="ls projects/" title="featured projects">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={`https://github.com/pratiks360/${p.name}`}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col rounded-lg border border-border/60 bg-card/50 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_0_30px_oklch(0.82_0.22_145/18%)]"
          >
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-primary">./{p.name}</span>
              <span className="text-muted-foreground transition-colors group-hover:text-primary">
                ↗
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border/60 bg-background/60 px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/pratiks360"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded border border-primary/60 bg-primary/10 px-5 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <span>view all 48 repositories on github</span>
          <span>→</span>
        </a>
      </div>
    </Section>
  );
}