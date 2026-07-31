# Carousel images

Drop image files in this folder and they appear in the hero carousel
automatically — no code change needed.

`ImageCarousel` globs this directory at build time and orders images by
filename, so prefix them to control the sequence:

```
01-keynote.jpg
02-workshop.jpg
03-team.jpg
```

Accepted extensions: `.jpg` `.jpeg` `.png` `.webp` `.avif`

## Specs

| | |
| --- | --- |
| Aspect ratio | 4:5 portrait — anything else is cropped to fit |
| Resolution | ~400×500px up to ~800×1000px for retina |
| File size | Under 500KB each |
| Format | WebP preferred, JPG fine |

Files under 4KB get inlined into the HTML as data URIs by Vite; anything larger
is emitted as a hashed asset. Real photos will always be the latter.

Compress before committing — [Squoosh](https://squoosh.app) or
[TinyPNG](https://tinypng.com), or locally:

```sh
magick mogrify -resize 800x1000 -quality 82 *.jpg
```

## Behaviour

The strip scrolls horizontally with `/` separators between images, pauses on
hover, and stops entirely for visitors who have "reduce motion" enabled. Scroll
speed is fixed per image, so adding more images lengthens the loop rather than
speeding it up.

With no images present the hero simply renders without a strip in production;
in dev you get a hint pointing back at this folder.
