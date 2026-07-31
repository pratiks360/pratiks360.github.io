// Everything the "beyond work" section shows lives here. Edit this file only —
// no component changes needed. Any group left empty is simply not rendered on
// the live site, so it is safe to fill these in one at a time.

export interface Place {
  /** Where. Shown in the site's accent colour. */
  city: string;
  /** Optional one-liner. Keep it short — a clause, not a paragraph. */
  note?: string;
  /** "lived" gets a filled marker, "visited" a hollow one. */
  kind?: "lived" | "visited";
}

/**
 * Things you do that aren't work.
 *
 * The first six moved across from the About sidebar, where they were already
 * published. They are all tech, which is exactly the imbalance to fix — add
 * non-tech entries (sport, music, cooking, reading, making things, whatever is
 * actually true) and delete any of these that no longer fit.
 */
export const interests: string[] = [
  "Raspberry Pi tinkerer",
  "Home Assistant addict",
  "Linux enthusiast",
  "Astronomy lover",
  "DIY automation",
  "Open-source contributor",
];

/**
 * Places you've lived or travelled. Empty by default — nothing is rendered
 * until you add entries, because inventing them would put fiction on your site.
 *
 * e.g.  { city: "Dubai, UAE", note: "home since 2019", kind: "lived" },
 *       { city: "Tokyo, Japan", kind: "visited" },
 */
export const places: Place[] = [];

/**
 * Captions for the hero carousel, keyed by the image filename in
 * src/assets/portfolio/ (without the path).
 *
 * e.g.  "01-keynote.jpg": "Speaking at GITEX, 2025",
 *
 * Images without an entry here simply show no caption.
 */
export const captions: Record<string, string> = {};
