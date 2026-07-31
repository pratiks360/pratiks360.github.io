import { Fragment, useState } from "react";

interface ImageCarouselProps {
  /** Overrides auto-discovery. Normally you want to just drop files in the folder. */
  images?: string[];
}

// Every image in src/assets/portfolio/ is picked up automatically and ordered by
// filename, so adding a photo is a matter of dropping the file in — no code
// change. Vite hashes and rewrites these URLs at build time.
const discovered = Object.entries(
  import.meta.glob<string>("../../assets/portfolio/*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    query: "?url",
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

// Roughly how long one image takes to cross the strip. Total duration scales
// with the item count so the speed stays constant however many are added.
const SECONDS_PER_IMAGE = 6;

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [broken, setBroken] = useState<string[]>([]);
  const source = images ?? discovered;
  const visible = source.filter((src) => !broken.includes(src));

  if (visible.length === 0) {
    // A build-time hint is useful while developing but has no business on a
    // live portfolio, so in production the hero simply renders without a strip.
    if (!import.meta.env.DEV) return null;

    return (
      <div className="w-full max-w-sm rounded-lg border border-dashed border-primary/40 bg-card/30 p-8 text-center">
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> ls src/assets/portfolio/
        </div>
        <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
          no images yet — drop files into{" "}
          <span className="text-foreground">src/assets/portfolio/</span> and they
          appear here automatically
        </p>
      </div>
    );
  }

  // The track carries the list twice so the -50% translate loops seamlessly.
  const track = [...visible, ...visible];

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={
        {
          "--marquee-duration": `${visible.length * SECONDS_PER_IMAGE * 2}s`,
        } as React.CSSProperties
      }
    >
      <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused]">
        {track.map((src, i) => (
          <Fragment key={`${src}-${i}`}>
            <figure className="w-36 shrink-0 sm:w-44">
              <img
                src={src}
                alt=""
                loading="lazy"
                onError={() =>
                  setBroken((prev) =>
                    prev.includes(src) ? prev : [...prev, src],
                  )
                }
                className="aspect-[4/5] w-full rounded-lg border border-primary/40 object-cover"
              />
            </figure>
            <span
              aria-hidden="true"
              className="shrink-0 px-4 font-mono text-2xl text-primary/70 sm:px-6"
            >
              /
            </span>
          </Fragment>
        ))}
      </div>

      {/* Soften both ends so items enter and leave rather than popping. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
