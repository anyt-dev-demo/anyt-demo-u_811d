interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}: SlideNavigationProps) {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 rounded-full bg-black/80 px-6 py-3 backdrop-blur-sm dark:bg-white/80">
      <button
        type="button"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 dark:hover:bg-black/20"
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white dark:text-black"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="flex items-center gap-2 px-2">
        <span className="font-mono text-lg font-semibold text-white dark:text-black">
          {currentSlide}
        </span>
        <span className="text-white/60 dark:text-black/60">/</span>
        <span className="font-mono text-lg text-white/60 dark:text-black/60">
          {totalSlides}
        </span>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 dark:hover:bg-black/20"
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white dark:text-black"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
