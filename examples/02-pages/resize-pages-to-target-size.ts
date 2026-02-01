/**
 * Example: Resize Pages to Target Size
 *
 * This example demonstrates how to resize pages from a PDF with mixed page
 * sizes (like scanned documents with varying formats) to a uniform target
 * size while preserving annotations.
 *
 * Use case: You have a merged PDF with pages in different sizes (A4, A3, A2,
 * letter, etc.) and want to normalize them all to a standard size for printing.
 *
 * Run: npx tsx examples/02-pages/resize-pages-to-target-size.ts
 */

import { black, PDF, rgb } from "../../src/index";
import { formatBytes, saveOutput } from "../utils";

// Standard page sizes in points (1 point = 1/72 inch)
const PageSizes = {
  A4: { width: 595.28, height: 841.89 },
  A3: { width: 841.89, height: 1190.55 },
  A2: { width: 1190.55, height: 1683.78 },
  Letter: { width: 612, height: 792 },
} as const;

async function main() {
  console.log("Resizing pages with annotations to target size...\n");

  // ============================================================
  // Step 1: Create a source PDF with mixed page sizes and annotations
  // ============================================================
  console.log("=== Creating Source PDF with Mixed Sizes ===\n");

  const sourcePdf = PDF.create();

  // Page 1: Small page (like a scanned receipt)
  const smallPage = sourcePdf.addPage({ width: 300, height: 400 });

  smallPage.drawText("Small Page (300x400)", { x: 20, y: 350, size: 16, color: black });
  smallPage.drawText("Receipt or small scan", { x: 20, y: 320, size: 12, color: black });
  smallPage.drawRectangle({
    x: 20,
    y: 100,
    width: 260,
    height: 150,
    borderColor: rgb(0.8, 0, 0),
    borderWidth: 2,
  });

  // Add a highlight annotation to page 1
  smallPage.addHighlightAnnotation({
    rect: { x: 20, y: 345, width: 200, height: 20 },
    color: rgb(1, 1, 0),
    opacity: 0.5,
  });

  // Page 2: A4-ish page
  const a4Page = sourcePdf.addPage({ width: PageSizes.A4.width, height: PageSizes.A4.height });

  a4Page.drawText("A4 Page", { x: 50, y: 780, size: 24, color: black });
  a4Page.drawText("Standard document size", { x: 50, y: 740, size: 14, color: black });
  a4Page.drawCircle({ x: 297, y: 421, radius: 100, color: rgb(0.9, 0.9, 1) });

  // Add a sticky note annotation to page 2
  a4Page.addTextAnnotation({
    rect: { x: 400, y: 700, width: 24, height: 24 },
    contents: "This is a note on the A4 page",
    color: rgb(1, 0.9, 0.5),
  });

  // Page 3: Large page (like A2 poster)
  const largePage = sourcePdf.addPage({ width: PageSizes.A2.width, height: PageSizes.A2.height });

  largePage.drawText("Large Page (A2 Size)", { x: 100, y: 1600, size: 48, color: black });
  largePage.drawText("Poster or technical drawing", { x: 100, y: 1520, size: 24, color: black });
  largePage.drawRectangle({
    x: 100,
    y: 200,
    width: 990,
    height: 1200,
    borderColor: rgb(0, 0, 0.8),
    borderWidth: 4,
  });

  // Add underline annotation to page 3
  largePage.addUnderlineAnnotation({
    rect: { x: 100, y: 1590, width: 450, height: 30 },
    color: rgb(0, 0, 1),
  });

  // Page 4: Wide landscape page
  const widePage = sourcePdf.addPage({ width: 1000, height: 400 });

  widePage.drawText("Wide Landscape Page", { x: 50, y: 350, size: 20, color: black });
  widePage.drawText("Like a panoramic scan", { x: 50, y: 310, size: 14, color: black });

  console.log("Source PDF pages:");

  for (let i = 0; i < sourcePdf.getPageCount(); i++) {
    const page = sourcePdf.getPage(i);

    if (page) {
      const annotations = page.getAnnotations();
      console.log(
        `  Page ${i + 1}: ${page.width.toFixed(0)} x ${page.height.toFixed(0)} pts, ${annotations.length} annotation(s)`,
      );
    }
  }

  // Save the source PDF before flattening (so users can see the original)
  const sourceBytes = await sourcePdf.save();
  const sourcePath = await saveOutput("02-pages/mixed-sizes-source.pdf", sourceBytes);

  console.log(`\nSaved source: ${sourcePath} (${formatBytes(sourceBytes.length)})`);

  // ============================================================
  // Step 2: Flatten annotations (bake them into page content)
  // ============================================================
  console.log("\n=== Flattening Annotations ===\n");

  // Flatten annotations so they become part of the page content.
  // This is necessary because embedPage/drawPage creates a Form XObject
  // which only captures the content stream, not annotations.
  //
  // Note: Some annotation types like sticky notes (Text) may not flatten
  // if they don't have a visual appearance. Text markup annotations
  // (Highlight, Underline, etc.) flatten into colored rectangles/lines.
  const flattenedCount = sourcePdf.flattenAnnotations();

  console.log(`Flattened ${flattenedCount} annotation(s) into page content`);

  // ============================================================
  // Step 3: Create destination PDF and resize pages to A4
  // ============================================================
  console.log("\n=== Resizing All Pages to A4 ===\n");

  const targetSize = PageSizes.A4;
  const destPdf = PDF.create();

  for (let i = 0; i < sourcePdf.getPageCount(); i++) {
    const srcPage = sourcePdf.getPage(i);

    if (!srcPage) {
      continue;
    }

    // Create a new A4 page
    destPdf.addPage({ width: targetSize.width, height: targetSize.height });
    const destPage = destPdf.getPage(i);

    if (!destPage) {
      continue;
    }

    // Embed the source page as a Form XObject
    const embedded = await destPdf.embedPage(sourcePdf, i);

    // Calculate scaling to fit within A4 while maintaining aspect ratio
    const scaleX = targetSize.width / embedded.width;
    const scaleY = targetSize.height / embedded.height;

    const scale = Math.min(scaleX, scaleY); // Fit within bounds

    // Calculate position to center the page
    const scaledWidth = embedded.width * scale;
    const scaledHeight = embedded.height * scale;

    const x = (targetSize.width - scaledWidth) / 2;
    const y = (targetSize.height - scaledHeight) / 2;

    // Draw the embedded page scaled and centered
    destPage.drawPage(embedded, { x, y, scale });

    // Add a subtle border to show the original page bounds
    destPage.drawRectangle({
      x,
      y,
      width: scaledWidth,
      height: scaledHeight,
      borderColor: rgb(0.8, 0.8, 0.8),
      borderWidth: 0.5,
    });

    console.log(
      `  Page ${i + 1}: ${srcPage.width.toFixed(0)}x${srcPage.height.toFixed(0)} -> A4 (scale: ${(scale * 100).toFixed(1)}%)`,
    );
  }

  // ============================================================
  // Step 4: Save the resized PDF
  // ============================================================
  console.log("\n=== Saving Result ===\n");

  const outputBytes = await destPdf.save();
  const outputPath = await saveOutput("02-pages/resized-to-a4.pdf", outputBytes);

  console.log(`Output: ${outputPath}`);
  console.log(`Size: ${formatBytes(outputBytes.length)}`);
  console.log(`Pages: ${destPdf.getPageCount()} (all A4)`);

  // ============================================================
  // Bonus: Demonstrate "fit to width" vs "fit to page"
  // ============================================================
  console.log("\n=== Bonus: Fit to Width (Crop Height) ===\n");

  const fitWidthPdf = PDF.create();

  for (let i = 0; i < sourcePdf.getPageCount(); i++) {
    const srcPage = sourcePdf.getPage(i);

    if (!srcPage) {
      continue;
    }

    fitWidthPdf.addPage({ width: targetSize.width, height: targetSize.height });
    const destPage = fitWidthPdf.getPage(i);

    if (!destPage) {
      continue;
    }

    const embedded = await fitWidthPdf.embedPage(sourcePdf, i);

    // Scale to fit width exactly (may crop top/bottom or leave blank)
    const scale = targetSize.width / embedded.width;
    const scaledHeight = embedded.height * scale;

    // Position at bottom, content may extend above page
    const y = 0;

    destPage.drawPage(embedded, {
      x: 0,
      y,
      width: targetSize.width, // Fit to width exactly
    });

    const status = scaledHeight > targetSize.height ? "(cropped)" : "(with margins)";

    console.log(`  Page ${i + 1}: scaled to ${(scale * 100).toFixed(1)}% ${status}`);
  }

  const fitWidthBytes = await fitWidthPdf.save();
  const fitWidthPath = await saveOutput("02-pages/resized-fit-width.pdf", fitWidthBytes);

  console.log(`\nOutput: ${fitWidthPath}`);
  console.log(`Size: ${formatBytes(fitWidthBytes.length)}`);

  // ============================================================
  // Summary
  // ============================================================
  console.log("\n=== Summary ===\n");
  console.log("To resize pages with annotations:");
  console.log("1. Flatten annotations first (pdf.flattenAnnotations())");
  console.log("2. Embed each page as XObject (pdf.embedPage())");
  console.log("3. Draw onto new page with scaling (page.drawPage())");
  console.log();
  console.log("Scaling strategies:");
  console.log("- Fit to page: scale = Math.min(targetW/srcW, targetH/srcH)");
  console.log("- Fit to width: scale = targetWidth / srcWidth");
  console.log("- Fit to height: scale = targetHeight / srcHeight");
}

main().catch(console.error);
