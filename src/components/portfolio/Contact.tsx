import { useState, useEffect } from "react";
import Section from "./Section";

const socials = [
  { label: "email", href: "mailto:pratiks360@gmail.com", value: "pratiks360@gmail.com" },
  { label: "github", href: "https://github.com/pratiks360", value: "github.com/pratiks360" },
  { label: "linkedin", href: "https://linkedin.com/in/pratikshukla360", value: "linkedin.com/in/pratikshukla360" },
  { label: "medium", href: "https://medium.com/@pratiks360", value: "medium.com/@pratiks360" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Initialize visit counter
    const count = localStorage.getItem("portfolio_visits");
    const newCount = (parseInt(count || "0", 10) + 1);
    localStorage.setItem("portfolio_visits", newCount.toString());
    setVisitCount(newCount);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Section id="contact" command="contact --send" title="contact">
        <div className="grid gap-8 md:grid-cols-2">
          <form
            onSubmit={submit}
            className="space-y-4 rounded-lg border border-border/60 bg-card/50 p-6"
          >
            <div>
              <label className="mb-1 block font-mono text-xs text-muted-foreground">
                <span className="text-primary">$</span> name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded border border-border bg-background px-3 py-2 font-mono text-sm text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_oklch(0.82_0.22_145/15%)]"
                placeholder="ada lovelace"
              />
            </div>
            <div>
              <label className="mb-1 block font-mono text-xs text-muted-foreground">
                <span className="text-primary">$</span> email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded border border-border bg-background px-3 py-2 font-mono text-sm text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_oklch(0.82_0.22_145/15%)]"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="mb-1 block font-mono text-xs text-muted-foreground">
                <span className="text-primary">$</span> message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded border border-border bg-background px-3 py-2 font-mono text-sm text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_oklch(0.82_0.22_145/15%)]"
                placeholder="tell me about your project..."
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded border border-primary/60 bg-primary/10 px-5 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{loading ? "./sending..." : "./send-message"}</span>
                <span>→</span>
              </button>
              {status === "success" && (
                <p className="mt-2 font-mono text-xs text-green-600">✓ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="mt-2 font-mono text-xs text-red-600">✗ Failed to send. Try emailing directly.</p>
              )}
            </div>
          </form>
          <div className="space-y-3">
            <div className="mb-1 font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> cat channels.yml
            </div>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-lg border border-border/60 bg-card/50 p-4 transition-colors hover:border-primary/60"
              >
                <div>
                  <div className="font-mono text-xs text-primary">
                    {s.label}:
                  </div>
                  <div className="mt-1 text-sm text-foreground/90">
                    {s.value}
                  </div>
                </div>
                <span className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>
      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 font-mono text-xs text-muted-foreground">
          <div>© 2026 Pratik Shukla. Built in Dubai.</div>
          <div className="flex items-center gap-4">
            <div>
              <span className="text-primary">●</span> system.status ={" "}
              <span className="text-foreground">operational</span>
            </div>
            <div>
              <span className="text-primary">●</span> visitors ={" "}
              <span className="text-foreground">{visitCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}