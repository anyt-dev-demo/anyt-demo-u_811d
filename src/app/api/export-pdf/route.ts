import { type NextRequest, NextResponse } from "next/server";
import puppeteer, { type Browser } from "puppeteer";

export async function GET(request: NextRequest) {
  let browser: Browser | undefined;

  try {
    // Get page range from query params
    const { searchParams } = new URL(request.url);
    const startPage = searchParams.get("startPage");
    const endPage = searchParams.get("endPage");

    // Get the base URL from the request
    const protocol = request.headers.get("x-forwarded-proto") || "http";
    const host = request.headers.get("host");
    const baseUrl = `${protocol}://${host}`;

    // Launch Puppeteer browser
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();

    // Set viewport to standard presentation size
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2,
    });

    // Navigate to the print page
    await page.goto(`${baseUrl}/print`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Generate PDF with optional page range
    const pdfOptions: Parameters<typeof page.pdf>[0] = {
      format: "A4",
      landscape: true,
      printBackground: true,
      preferCSSPageSize: false,
      margin: {
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
      },
    };

    // Add page range if specified
    if (startPage && endPage) {
      pdfOptions.pageRanges = `${startPage}-${endPage}`;
    }

    const pdfBuffer = await page.pdf(pdfOptions);

    await browser.close();

    // Return the PDF as a response
    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=presentation.pdf",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);

    if (browser) {
      await browser.close();
    }

    return NextResponse.json(
      {
        error: "Failed to generate PDF",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
