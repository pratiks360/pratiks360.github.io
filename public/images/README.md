# Portfolio Images

Place your carousel images in this directory.

## Image Specifications

### Resolution
- **Width:** 400-500px
- **Height:** 500-625px (4:5 aspect ratio recommended)
- **Format:** JPG, PNG, or WebP

### Image Requirements
- **Quality:** High-quality, professional photos
- **Size:** Keep file sizes under 500KB for optimal loading
- Optimized for web (use tools like TinyPNG or Squoosh)

### How to Use
1. Add your images to this folder: `public/images/`
2. Update the `ImageCarousel.tsx` component with your image paths

### Example
```tsx
// In Hero.tsx or ImageCarousel.tsx
const images = [
  "/images/photo-1.jpg",
  "/images/photo-2.jpg",
  "/images/photo-3.jpg",
  "/images/photo-4.jpg",
];
```

### Default Behavior
If no images are provided, the carousel will use placeholder images. Replace them with your own by:

1. Adding images to this directory
2. Passing the image paths to the `ImageCarousel` component:
   ```tsx
   <ImageCarousel images={["/images/photo-1.jpg", "/images/photo-2.jpg"]} />
   ```

### Tips
- Use consistent aspect ratios across all images
- Consider compression for faster loading on mobile devices
- Test images on various screen sizes
