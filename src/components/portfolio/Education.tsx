import Section from "./Section";

const items = [
  {
    degree: "MBA in Information Management",
    school: "K.J. Somaiya Institute of Management Studies and Research",
  },
  {
    degree: "Post Graduate Diploma in Advanced Computing",
    school: "Mumbai Education Trust (CDAC)",
  },
  {
    degree: "B.E. in Information Technology",
    school: "Raisoni College of Engineering and Management",
  },
];

export default function Education() {
  return (
    <Section id="education" command="cat education.md" title="education">
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <li
            key={it.degree}
            className="rounded-lg border border-border/60 bg-card/50 p-6"
          >
            <div className="font-mono text-xs text-primary">◇ degree</div>
            <h3 className="mt-2 text-base font-semibold text-foreground">
              {it.degree}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.school}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}