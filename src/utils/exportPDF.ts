export async function exportSlidesToPDF(
  filename: string = "presentation.pdf",
  pageRange?: { start: number; end: number },
) {
  try {
    // Build URL with page range query params if provided
    const apiUrl = new URL("/api/export-pdf", window.location.origin);
    if (pageRange) {
      apiUrl.searchParams.set("startPage", pageRange.start.toString());
      apiUrl.searchParams.set("endPage", pageRange.end.toString());
    }

    // Call the API endpoint to generate PDF
    const response = await fetch(apiUrl.toString(), {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to generate PDF: ${response.statusText}`);
    }

    // Get the PDF blob from the response
    const blob = await response.blob();

    // Try to use File System Access API for better file handling (Chrome, Edge)
    if ("showSaveFilePicker" in window) {
      try {
        interface FileSystemWritableFileStream extends WritableStream {
          write(data: Blob): Promise<void>;
          close(): Promise<void>;
        }

        interface FileSystemFileHandle {
          createWritable(): Promise<FileSystemWritableFileStream>;
        }

        const handle = await (
          window as typeof window & {
            showSaveFilePicker(options: {
              suggestedName: string;
              types: Array<{
                description: string;
                accept: Record<string, string[]>;
              }>;
            }): Promise<FileSystemFileHandle>;
          }
        ).showSaveFilePicker({
          suggestedName: filename,
          types: [
            {
              description: "PDF Files",
              accept: { "application/pdf": [".pdf"] },
            },
          ],
        });

        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();

        return true;
      } catch (err) {
        // User cancelled the save dialog
        if (err instanceof Error && err.name === "AbortError") {
          return false;
        }
        // Fall back to regular download if File System Access API fails
        console.warn(
          "File System Access API failed, falling back to download link:",
          err,
        );
      }
    }

    // Fallback: Create a download link and trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error("Error exporting PDF:", error);
    return false;
  }
}
