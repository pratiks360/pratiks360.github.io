import Section from "./Section";

const groups = [
  {
    label: "AI & LLM",
    items: [
      "Python",
      "WatsonX.ai/data/governance",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "RAG",
      "Vector DBs (Milvus, Pinecone)",
      "MCP",
      "Prompt Engineering",
      "LLM Fine-tuning",
    ],
  },
  {
    label: "Event Streaming",
    items: [
      "Apache Kafka",
      "Confluent",
      "Kafka Connect",
      "Schema Registry",
      "ksqlDB",
      "MQTT",
    ],
  },
  {
    label: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Node.js",
      "Express",
      "Django",
      "REST/GraphQL",
      "Keycloak",
      "APIGEE",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "GCP",
      "IBM Cloud",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Terraform",
      "Jenkins",
      "ArgoCD",
      "Helm",
      "Istio",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Oracle",
      "Redis",
      "Couchbase",
      "InfluxDB",
    ],
  },
];

export default function TechStack() {
  return (
    <Section id="stack" command="cat stack.json" title="tech stack">
      <div className="space-y-6">
        {groups.map((g) => (
          <div
            key={g.label}
            className="rounded-lg border border-border/60 bg-card/40 p-6"
          >
            <div className="mb-4 flex items-center gap-3 font-mono text-xs">
              <span className="text-primary">▹</span>
              <span className="text-foreground/90 uppercase tracking-wider">
                {g.label}
              </span>
              <span className="h-px flex-1 bg-border/60" />
              <span className="text-muted-foreground">
                {g.items.length.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded border border-border/60 bg-background/60 px-3 py-1.5 font-mono text-xs text-foreground/85 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}