import Section from "./Section";
import { interests, places } from "@/content/beyond-work";

export default function BeyondWork() {
  // Nothing to say yet — render no section at all rather than an empty shell.
  if (interests.length === 0 && places.length === 0) return null;

  return (
    <Section id="beyond" command="cat ~/.beyond-work" title="beyond work">
      <div className="grid gap-10 md:grid-cols-5">
        {interests.length > 0 && (
          <div className="md:col-span-3">
            <div className="mb-4 font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> ls ~/interests
            </div>
            <ul className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <li
                  key={item}
                  className="rounded border border-border/70 bg-card/50 px-3 py-2 font-mono text-sm text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <span className="text-primary/70">›</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {places.length > 0 && (
          <div className="md:col-span-2">
            <div className="mb-4 font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> cat ~/places.log
            </div>
            <ul className="space-y-3">
              {places.map((place) => (
                <li key={place.city} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 font-mono text-xs text-primary"
                  >
                    {place.kind === "visited" ? "○" : "◉"}
                  </span>
                  <div>
                    <div className="font-mono text-sm text-foreground">
                      {place.city}
                    </div>
                    {place.note && (
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {place.note}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
