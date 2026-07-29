import type { ReactNode } from "react";

export default function Section({
  id,
  command,
  title,
  children,
}: {
  id: string;
  command: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-primary">➜</span>
            <span className="text-primary/70">~/portfolio</span>
            <span>{command}</span>
          </div>
          {title && (
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              <span className="text-primary">#</span> {title}
            </h2>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}