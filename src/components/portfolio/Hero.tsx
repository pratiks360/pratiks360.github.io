import ImageCarousel from "./ImageCarousel";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <div className="font-mono text-sm text-primary">
              <span className="text-muted-foreground">$</span> whoami
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              Pratik <span className="text-primary">Shukla</span>
              <span className="terminal-cursor" />
            </h1>
            <p className="mt-6 font-mono text-sm sm:text-base text-foreground/90 md:text-lg">
              <span className="text-primary">&gt;</span> Enterprise Solution
              Architect{" "}
              <span className="text-muted-foreground">|</span> AI &amp; Data
              Streaming{" "}
              <span className="text-muted-foreground">|</span> Building systems
              that scale
            </p>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground md:text-lg">
              12+ years architecting AI, banking, cloud, and event-streaming
              platforms for global enterprises. Based in{" "}
              <span className="text-foreground">Dubai, UAE</span>.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-2 sm:gap-3 font-mono text-xs sm:text-sm">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded border border-primary/60 bg-primary/10 px-4 sm:px-5 py-2 sm:py-3 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_oklch(0.82_0.22_145/45%)]"
              >
                <span>./view-projects</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:pratiks360@gmail.com"
                className="inline-flex items-center gap-2 rounded border border-border px-4 sm:px-5 py-2 sm:py-3 text-foreground transition-all hover:border-primary/60 hover:text-primary"
              >
                <span>./get-in-touch</span>
              </a>
            </div>
            <div className="mt-10 md:mt-16 flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6 font-mono text-xs text-muted-foreground">
              <span><span className="text-primary">◉</span> available for collaborations</span>
              <span>uptime: 12+ yrs</span>
              <span className="hidden sm:inline">location: 25.2°N, 55.3°E</span>
            </div>
          </div>

          {/* Right side - Image Carousel */}
          <div className="flex justify-center lg:justify-end">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}