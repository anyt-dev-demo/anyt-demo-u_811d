"use client";

import { type ReactNode, useCallback, useEffect, useState } from "react";
import { exportSlidesToPDF } from "@/utils/exportPDF";
import FilenameDialog from "./FilenameDialog";
import SlideNavigation from "./SlideNavigation";
import SlideToolbar from "./SlideToolbar";

interface SlideContainerProps {
  children: ReactNode[];
  initialSlide?: number;
}

export default function SlideContainer({
  children,
  initialSlide = 1,
}: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isExporting, setIsExporting] = useState(false);
  const [showFilenameDialog, setShowFilenameDialog] = useState(false);
  const totalSlides = children.length;

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const canGoNext = currentSlide < totalSlides;
  const canGoPrevious = currentSlide > 1;

  // Show filename dialog when export is requested
  const handleExportPDF = () => {
    setShowFilenameDialog(true);
  };

  // Handle actual PDF export after filename confirmation
  const handleConfirmExport = async (
    filename: string,
    pageRange?: { start: number; end: number },
  ) => {
    setShowFilenameDialog(false);
    setIsExporting(true);
    try {
      await exportSlidesToPDF(filename, pageRange);
    } catch (error) {
      console.error("Failed to export PDF:", error);
    } finally {
      setIsExporting(false);
    }
  };

  // Generate default filename with timestamp to avoid conflicts
  const getDefaultFilename = () => {
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 10); // YYYY-MM-DD
    return `presentation-${timestamp}.pdf`;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        goToNext();
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        goToPrevious();
      } else if (event.key === "Home") {
        event.preventDefault();
        setCurrentSlide(1);
      } else if (event.key === "End") {
        event.preventDefault();
        setCurrentSlide(totalSlides);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides, goToNext, goToPrevious]);

  return (
    <div className="relative">
      <div className="slide-content">{children[currentSlide - 1]}</div>

      <SlideToolbar onExportPDF={handleExportPDF} isExporting={isExporting} />

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={goToPrevious}
        onNext={goToNext}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
      />

      <FilenameDialog
        isOpen={showFilenameDialog}
        onClose={() => setShowFilenameDialog(false)}
        onConfirm={handleConfirmExport}
        defaultFilename={getDefaultFilename()}
        totalPages={totalSlides}
      />
    </div>
  );
}
