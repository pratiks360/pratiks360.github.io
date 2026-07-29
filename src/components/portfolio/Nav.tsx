import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "certifications", label: "certifications" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleClick("home")}
          className="font-mono text-sm text-primary hover:glow-text"
        >
          <span className="text-muted-foreground">~/</span>pratik-shukla
        </button>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 font-mono text-xs">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => handleClick(l.id)}
                  className={`rounded px-3 py-2 transition-colors hover:text-primary ${
                    active === l.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="text-primary/60">./</span>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden">
          <ul className="flex flex-col px-6 py-2 font-mono text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => handleClick(l.id)}
                  className={`w-full py-2 text-left transition-colors hover:text-primary ${
                    active === l.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span className="text-primary/60">./</span>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}