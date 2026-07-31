import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images?: string[];
}

export default function ImageCarousel({ images = [] }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Default placeholder images if none provided
  const displayImages = images.length > 0 ? images : [
    "/images/placeholder-1.jpg",
    "/images/placeholder-2.jpg",
    "/images/placeholder-3.jpg",
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay, displayImages.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto group">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-lg border border-primary/40 bg-card/30 backdrop-blur-sm">
        {/* Image wrapper */}
        <div className="relative aspect-square md:aspect-[4/5] bg-gradient-to-br from-primary/10 to-transparent">
          {displayImages.length > 0 ? (
            <img
              src={displayImages[currentIndex]}
              alt={`Portfolio ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-sm">
              <span>./images not loaded</span>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Image counter */}
          <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground px-3 py-1 rounded font-mono text-xs">
            {currentIndex + 1} / {displayImages.length}
          </div>
        </div>

        {/* Navigation buttons */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 md:opacity-70 md:hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 md:opacity-70 md:hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {displayImages.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? "bg-primary w-2 h-2"
                  : "bg-muted-foreground/50 hover:bg-muted-foreground w-1.5 h-1.5"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Autoplay indicator */}
      <div className="mt-3 text-center">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          {isAutoPlay ? "● autoplay" : "○ paused"}
        </button>
      </div>
    </div>
  );
}
