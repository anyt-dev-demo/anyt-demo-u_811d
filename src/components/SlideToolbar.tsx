"use client";

import { useState } from "react";

interface SlideToolbarProps {
  onExportPDF: () => void;
  isExporting?: boolean;
}

export default function SlideToolbar({
  onExportPDF,
  isExporting = false,
}: SlideToolbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleExportPDF = () => {
    onExportPDF();
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed right-8 top-8 z-50">
      <div className="relative">
        {/* Tools Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black/80 backdrop-blur-sm transition-all hover:bg-black/90 dark:bg-white/80 dark:hover:bg-white/90"
          aria-label="Tools menu"
          disabled={isExporting}
        >
          {isExporting ? (
            <svg
              className="h-5 w-5 animate-spin text-white dark:text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white dark:text-black"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          )}
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && !isExporting && (
          <>
            {/* Backdrop */}
            <button
              type="button"
              className="fixed inset-0 z-40 cursor-default bg-transparent"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setIsMenuOpen(false);
              }}
              aria-label="Close menu"
            />

            {/* Menu */}
            <div className="absolute right-0 top-14 z-50 w-56 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10">
              <div className="py-1">
                <button
                  type="button"
                  onClick={handleExportPDF}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-700 dark:text-zinc-300"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      Export as PDF
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      Download all slides
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    window.print();
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-700 dark:text-zinc-300"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      Print Slides
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      Print current view
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      document.documentElement.requestFullscreen();
                    }
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-700 dark:text-zinc-300"
                    aria-hidden="true"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      Toggle Fullscreen
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      Presentation mode
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
