"use client";

import { useEffect, useRef, useState } from "react";

interface FilenameDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (
    filename: string,
    pageRange?: { start: number; end: number },
  ) => void;
  defaultFilename?: string;
  totalPages: number;
}

export default function FilenameDialog({
  isOpen,
  onClose,
  onConfirm,
  defaultFilename = "presentation.pdf",
  totalPages,
}: FilenameDialogProps) {
  const [filename, setFilename] = useState(defaultFilename);
  const [exportAll, setExportAll] = useState(true);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(totalPages);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setFilename(defaultFilename);
      setExportAll(true);
      setStartPage(1);
      setEndPage(totalPages);
      // Focus input and select filename without extension
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          const dotIndex = defaultFilename.lastIndexOf(".");
          if (dotIndex > 0) {
            inputRef.current.setSelectionRange(0, dotIndex);
          } else {
            inputRef.current.select();
          }
        }
      }, 100);
    }
  }, [isOpen, defaultFilename, totalPages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedFilename = filename.trim();
    if (trimmedFilename) {
      // Ensure .pdf extension
      const finalFilename = trimmedFilename.endsWith(".pdf")
        ? trimmedFilename
        : `${trimmedFilename}.pdf`;

      // Validate page range
      if (!exportAll) {
        const start = Math.max(1, Math.min(startPage, totalPages));
        const end = Math.max(start, Math.min(endPage, totalPages));
        onConfirm(finalFilename, { start, end });
      } else {
        onConfirm(finalFilename);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Escape" || e.key === "Enter") {
            onClose();
          }
        }}
        aria-label="Close dialog"
      />

      {/* Dialog */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-zinc-900">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Export as PDF
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="filename"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Filename
            </label>
            <input
              ref={inputRef}
              id="filename"
              type="text"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              placeholder="presentation.pdf"
            />
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              If a file with this name exists, it may be overwritten or renamed
              by your browser.
            </p>
          </div>

          <div className="mb-4">
            <div className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Page Range
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={exportAll}
                  onChange={() => setExportAll(true)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  All pages (1-{totalPages})
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={!exportAll}
                  onChange={() => setExportAll(false)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  Custom range
                </span>
              </label>
            </div>

            {!exportAll && (
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1">
                  <label
                    htmlFor="startPage"
                    className="mb-1 block text-xs text-zinc-600 dark:text-zinc-400"
                  >
                    From
                  </label>
                  <input
                    id="startPage"
                    type="number"
                    min={1}
                    max={totalPages}
                    value={startPage}
                    onChange={(e) =>
                      setStartPage(Number.parseInt(e.target.value, 10) || 1)
                    }
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="endPage"
                    className="mb-1 block text-xs text-zinc-600 dark:text-zinc-400"
                  >
                    To
                  </label>
                  <input
                    id="endPage"
                    type="number"
                    min={1}
                    max={totalPages}
                    value={endPage}
                    onChange={(e) =>
                      setEndPage(
                        Number.parseInt(e.target.value, 10) || totalPages,
                      )
                    }
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-zinc-900"
            >
              Export
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
