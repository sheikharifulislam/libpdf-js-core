# Benchmark Report

> Generated on 2026-10-12 at 14:33:49 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.4.3

---

## Contents

- [Comparison](#comparison)
- [Copying](#copying)
- [Drawing](#drawing)
- [Forms](#forms)
- [Loading](#loading)
- [Saving](#saving)
- [Splitting](#splitting)

## Comparison

### Load PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    59.4 |  16.84ms |  19.07ms | ±1.82% |      30 |
| pdf-lib   |     4.5 | 221.75ms | 237.21ms | ±2.19% |      10 |

- **libpdf** is 13.17x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   11.2K |  89us |  204us | ±1.68% |   5,590 |
| pdf-lib   |    3.2K | 315us | 1.21ms | ±2.33% |   1,588 |

- **libpdf** is 3.52x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.1K | 164us |  516us | ±1.54% |   3,056 |
| pdf-lib   |    2.2K | 447us | 1.93ms | ±3.38% |   1,119 |

- **libpdf** is 2.73x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   724.4 | 1.38ms | 5.73ms | ±6.66% |     363 |
| libpdf    |   253.2 | 3.95ms | 5.47ms | ±2.70% |     127 |

- **pdf-lib** is 2.86x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    60.1 |  16.63ms |  20.91ms | ±2.75% |      31 |
| pdf-lib   |     3.2 | 313.25ms | 322.54ms | ±1.23% |      10 |

- **libpdf** is 18.84x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    29.1 |  34.35ms |  40.83ms | ±3.15% |      15 |
| pdf-lib   |     3.2 | 308.78ms | 323.97ms | ±1.27% |      10 |

- **libpdf** is 8.99x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   188.9 | 5.30ms |  9.45ms | ±2.86% |      95 |
| pdf-lib   |   114.5 | 8.73ms | 10.78ms | ±1.31% |      58 |

- **libpdf** is 1.65x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    13.9 | 72.03ms | 73.16ms | ±1.58% |       7 |
| pdf-lib   |    13.6 | 73.52ms | 87.59ms | ±8.43% |       7 |

- **libpdf** is 1.02x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.754 | 1.33s | 1.33s | ±0.00% |       1 |
| libpdf    |   0.754 | 1.33s | 1.33s | ±0.00% |       1 |

- **pdf-lib** is 1.00x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   125.1 |  7.99ms |  9.75ms | ±2.16% |      63 |
| pdf-lib   |    88.9 | 11.25ms | 12.81ms | ±1.24% |      45 |

- **libpdf** is 1.41x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    19.3 | 51.84ms | 52.88ms | ±0.83% |      10 |
| libpdf    |    19.0 | 52.68ms | 53.91ms | ±1.46% |      10 |

- **pdf-lib** is 1.02x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   767.2 |  1.30ms |  3.14ms | ±3.06% |     384 |
| copy 10 pages from 100-page PDF |   130.8 |  7.64ms | 11.91ms | ±2.80% |      66 |
| copy all 100 pages              |    36.3 | 27.56ms | 33.21ms | ±2.77% |      19 |

- **copy 1 page** is 5.86x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 21.15x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   831.0 | 1.20ms | 2.05ms | ±1.42% |     416 |
| duplicate all pages (double the document) |   820.9 | 1.22ms | 2.21ms | ±1.82% |     411 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   548.2 |  1.82ms |  2.70ms | ±1.36% |     275 |
| merge 10 small PDFs     |   104.3 |  9.59ms | 11.73ms | ±1.51% |      53 |
| merge 2 x 100-page PDFs |    19.6 | 50.95ms | 52.61ms | ±1.28% |      10 |

- **merge 2 small PDFs** is 5.25x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 27.93x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   146.5 |  6.82ms | 10.73ms | ±2.34% |      74 |
| draw 100 rectangles                 |   117.0 |  8.55ms | 18.79ms | ±5.84% |      59 |
| draw 100 circles                    |   104.8 |  9.55ms | 13.58ms | ±1.96% |      53 |
| draw 100 text lines (standard font) |    95.5 | 10.47ms | 13.85ms | ±2.07% |      48 |
| create 10 pages with mixed content  |    72.7 | 13.75ms | 15.06ms | ±1.19% |      37 |

- **draw 100 lines** is 1.25x faster than draw 100 rectangles
- **draw 100 lines** is 1.40x faster than draw 100 circles
- **draw 100 lines** is 1.53x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.01x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   305.4 |  3.27ms |  5.93ms | ±2.49% |     153 |
| get form fields   |   272.6 |  3.67ms |  8.04ms | ±4.46% |     137 |
| flatten form      |    84.3 | 11.86ms | 17.33ms | ±2.97% |      43 |
| fill text fields  |    63.1 | 15.84ms | 19.50ms | ±2.99% |      32 |

- **read field values** is 1.12x faster than get form fields
- **read field values** is 3.62x faster than flatten form
- **read field values** is 4.84x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   13.5K |    74us |   226us | ±1.79% |   6,766 |
| load medium PDF (19KB) |    9.8K |   102us |   166us | ±0.75% |   4,885 |
| load form PDF (116KB)  |   747.6 |  1.34ms |  1.96ms | ±1.06% |     374 |
| load heavy PDF (2.0MB) |    68.1 | 14.69ms | 16.14ms | ±1.44% |      35 |

- **load small PDF (888B)** is 1.38x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.10x faster than load form PDF (116KB)
- **load small PDF (888B)** is 198.72x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    7.9K |   126us |   325us | ±2.24% |   3,966 |
| incremental save (19KB)            |    2.4K |   423us |   893us | ±1.55% |   1,181 |
| save with modifications (19KB)     |   777.4 |  1.29ms |  2.65ms | ±2.55% |     389 |
| save heavy PDF (2.0MB)             |    69.0 | 14.50ms | 15.94ms | ±1.72% |      35 |
| incremental save heavy PDF (2.0MB) |    65.0 | 15.39ms | 16.79ms | ±1.78% |      33 |

- **save unmodified (19KB)** is 3.36x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.20x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 115.01x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 122.09x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   715.8 |  1.40ms |  3.11ms | ±3.80% |     358 |
| extractPages (1 page from 100-page PDF)  |   219.5 |  4.56ms |  5.69ms | ±1.46% |     110 |
| extractPages (1 page from 2000-page PDF) |    12.8 | 77.86ms | 81.55ms | ±1.93% |      10 |

- **extractPages (1 page from small PDF)** is 3.26x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 55.74x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.7 | 78.71ms | 82.14ms | ±3.44% |       7 |
| split 2000-page PDF (0.9MB) |   0.759 |   1.32s |   1.32s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.74x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.2 |  81.65ms |  86.45ms | ±3.23% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.8 | 101.71ms | 104.27ms | ±2.54% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.9 | 112.08ms | 113.47ms | ±1.29% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.25x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.37x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
