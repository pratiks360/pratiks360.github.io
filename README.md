# pratiks360.github.io

Personal portfolio of **Pratik Shukla** — Enterprise Solution Architect based in
Dubai, UAE. A dark, terminal-inspired single page covering experience, tech
stack, projects, certifications and contact.

Live at **https://pratiks360.github.io**

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19) with file-based routing
- [Vite](https://vite.dev) 8 + [Tailwind CSS](https://tailwindcss.com) 4
- [Bun](https://bun.sh) as package manager and runtime
- shadcn/ui + Radix primitives

## Development

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev
```

The dev server runs on http://localhost:8080.

| Script | Purpose |
| --- | --- |
| `bun run dev` | Dev server with HMR |
| `bun run build` | Standard build (SSR via nitro) |
| `bun run build:pages` | Static build for GitHub Pages — prerenders routes, drops nitro |
| `bun run lint` | ESLint |
| `bun run format` | Prettier |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`bun run build:pages` and force-pushes the contents of `dist/client` to the
`gh-pages` branch. GitHub Pages serves that branch from its root.

Branches:

| Branch | Contents |
| --- | --- |
| `main` | Source |
| `gh-pages` | Built output, replaced on every deploy |
| `legacy-site` | The previous hand-written site, kept for reference |

Because Pages is static hosting there is **no server runtime** — `build:pages`
sets `PAGES_BUILD=1`, which turns on prerendering and disables nitro. Anything
requiring a backend has to go through an external service:

- **Contact form** posts directly to [Formspree](https://formspree.io) from the browser.
- **Visit counter** reads from [Abacus](https://abacus.jasoncameron.dev), counted once per browser session.

## Structure

```
src/
  routes/               File-based routes (__root, index, sitemap.xml)
  components/portfolio/ Page sections — Hero, About, Experience, Contact, …
  components/ui/        shadcn/ui primitives
  lib/                  Shared helpers
  assets/portfolio/     Hero carousel images — drop files in, see its README
```

Carousel images are picked up automatically from `src/assets/portfolio/`, so
adding a photo means adding a file — no code change.
