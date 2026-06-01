# Benchmark Report

> Generated on 2026-06-01 at 11:34:13 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.3.14

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

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   395.2 |  2.53ms |  4.83ms | ±1.86% |     198 |
| pdf-lib   |    25.3 | 39.56ms | 44.16ms | ±4.11% |      13 |

- **libpdf** is 15.63x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.4K |  97us |  241us | ±2.65% |   5,179 |
| pdf-lib   |    2.6K | 386us | 1.65ms | ±2.91% |   1,294 |

- **libpdf** is 4.00x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.8K | 172us |  605us | ±1.64% |   2,916 |
| pdf-lib   |    2.2K | 458us | 2.03ms | ±3.31% |   1,093 |

- **libpdf** is 2.67x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   585.6 | 1.71ms | 7.97ms | ±8.67% |     293 |
| libpdf    |   196.6 | 5.09ms | 8.28ms | ±4.41% |      99 |

- **pdf-lib** is 2.98x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   412.5 |  2.42ms |  3.38ms | ±1.58% |     207 |
| pdf-lib   |    13.3 | 75.11ms | 78.43ms | ±2.47% |      10 |

- **libpdf** is 30.98x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    13.5 | 74.16ms | 84.73ms | ±8.52% |      10 |
| pdf-lib   |    12.7 | 78.96ms | 91.25ms | ±5.70% |      10 |

- **libpdf** is 1.06x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   178.8 | 5.59ms |  9.69ms | ±3.43% |      90 |
| pdf-lib   |   106.1 | 9.43ms | 11.30ms | ±1.62% |      54 |

- **libpdf** is 1.69x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    13.1 | 76.41ms | 80.28ms | ±3.76% |       7 |
| libpdf    |    11.6 | 86.43ms | 93.82ms | ±6.07% |       6 |

- **pdf-lib** is 1.13x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.700 | 1.43s | 1.43s | ±0.00% |       1 |
| pdf-lib   |   0.699 | 1.43s | 1.43s | ±0.00% |       1 |

- **libpdf** is 1.00x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   118.8 |  8.42ms | 10.69ms | ±2.69% |      60 |
| pdf-lib   |    82.1 | 12.18ms | 13.34ms | ±1.48% |      42 |

- **libpdf** is 1.45x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.4 | 54.25ms | 55.72ms | ±1.38% |      10 |
| libpdf    |    15.8 | 63.46ms | 78.64ms | ±8.29% |       8 |

- **pdf-lib** is 1.17x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   702.7 |  1.42ms |  3.25ms | ±3.38% |     352 |
| copy 10 pages from 100-page PDF |   125.1 |  7.99ms | 11.16ms | ±2.77% |      63 |
| copy all 100 pages              |    31.9 | 31.35ms | 33.60ms | ±2.01% |      17 |

- **copy 1 page** is 5.62x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 22.03x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   817.5 | 1.22ms | 2.29ms | ±1.72% |     409 |
| duplicate page 0                          |   811.4 | 1.23ms | 2.33ms | ±1.79% |     406 |

- **duplicate all pages (double the document)** is 1.01x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   530.3 |  1.89ms |  3.17ms | ±1.95% |     266 |
| merge 10 small PDFs     |    97.7 | 10.23ms | 11.97ms | ±1.72% |      49 |
| merge 2 x 100-page PDFs |    18.4 | 54.23ms | 56.09ms | ±1.92% |      10 |

- **merge 2 small PDFs** is 5.43x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 28.76x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   127.5 |  7.84ms | 11.31ms | ±1.69% |      64 |
| draw 100 rectangles                 |   113.6 |  8.80ms | 17.19ms | ±4.71% |      57 |
| draw 100 circles                    |    93.3 | 10.71ms | 14.29ms | ±2.13% |      47 |
| draw 100 text lines (standard font) |    85.0 | 11.77ms | 14.35ms | ±1.71% |      43 |
| create 10 pages with mixed content  |    67.2 | 14.89ms | 16.96ms | ±2.28% |      34 |

- **draw 100 lines** is 1.12x faster than draw 100 rectangles
- **draw 100 lines** is 1.37x faster than draw 100 circles
- **draw 100 lines** is 1.50x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.90x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   301.3 |  3.32ms |  5.41ms | ±1.78% |     151 |
| get form fields   |   264.7 |  3.78ms |  8.19ms | ±4.51% |     133 |
| flatten form      |    80.4 | 12.44ms | 14.54ms | ±1.80% |      41 |
| fill text fields  |    59.3 | 16.86ms | 20.84ms | ±3.26% |      30 |

- **read field values** is 1.14x faster than get form fields
- **read field values** is 3.75x faster than flatten form
- **read field values** is 5.08x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   13.2K |   76us |  185us | ±2.89% |   6,582 |
| load medium PDF (19KB) |    8.9K |  112us |  203us | ±3.15% |   4,453 |
| load form PDF (116KB)  |   671.4 | 1.49ms | 3.20ms | ±2.42% |     336 |
| load heavy PDF (9.9MB) |   421.1 | 2.37ms | 3.61ms | ±1.67% |     211 |

- **load small PDF (888B)** is 1.48x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 19.61x faster than load form PDF (116KB)
- **load small PDF (888B)** is 31.26x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    8.4K |  119us |  285us | ±1.46% |   4,196 |
| incremental save (19KB)            |    2.3K |  442us | 1.06ms | ±1.75% |   1,132 |
| save with modifications (19KB)     |   781.6 | 1.28ms | 2.67ms | ±2.68% |     391 |
| save heavy PDF (9.9MB)             |   438.1 | 2.28ms | 3.03ms | ±1.15% |     220 |
| incremental save heavy PDF (9.9MB) |   153.0 | 6.54ms | 7.54ms | ±1.96% |      77 |

- **save unmodified (19KB)** is 3.71x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.73x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 19.15x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 54.82x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   713.1 |  1.40ms |  3.27ms | ±3.40% |     357 |
| extractPages (1 page from 100-page PDF)  |   214.9 |  4.65ms |  7.94ms | ±2.52% |     108 |
| extractPages (1 page from 2000-page PDF) |    12.6 | 79.16ms | 84.40ms | ±2.63% |      10 |

- **extractPages (1 page from small PDF)** is 3.32x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 56.45x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.3 | 81.44ms | 86.16ms | ±3.85% |       7 |
| split 2000-page PDF (0.9MB) |   0.715 |   1.40s |   1.40s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.18x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    11.8 |  84.42ms |  87.42ms | ±2.76% |       6 |
| extract first 100 pages from 2000-page PDF             |     9.4 | 105.93ms | 110.84ms | ±3.44% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.4 | 118.96ms | 123.78ms | ±3.46% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.25x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.41x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
