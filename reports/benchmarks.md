# Benchmark Report

> Generated on 2026-03-09 at 07:03:15 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.3.10

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
| libpdf    |   376.8 |  2.65ms |  4.49ms | ±2.56% |     189 |
| pdf-lib   |    24.2 | 41.33ms | 47.31ms | ±5.53% |      13 |

- **libpdf** is 15.57x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.1K |  99us |  200us | ±2.90% |   5,051 |
| pdf-lib   |    2.0K | 504us | 1.86ms | ±2.93% |     993 |

- **libpdf** is 5.10x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.7K | 176us |  632us | ±1.59% |   2,836 |
| pdf-lib   |    2.0K | 507us | 2.00ms | ±2.84% |     986 |

- **libpdf** is 2.88x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   603.2 | 1.66ms | 5.97ms | ±6.51% |     302 |
| libpdf    |   170.2 | 5.88ms | 7.26ms | ±1.65% |      86 |

- **pdf-lib** is 3.54x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |   400.6 |  2.50ms |   3.17ms | ±1.08% |     201 |
| pdf-lib   |    11.5 | 86.85ms | 100.19ms | ±4.72% |      10 |

- **libpdf** is 34.79x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    15.0 | 66.52ms | 75.67ms | ±5.87% |      10 |
| pdf-lib   |    11.7 | 85.81ms | 93.80ms | ±3.35% |      10 |

- **libpdf** is 1.29x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   198.5 | 5.04ms |  6.64ms | ±2.03% |     100 |
| pdf-lib   |   109.5 | 9.13ms | 10.80ms | ±1.58% |      55 |

- **libpdf** is 1.81x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    11.8 | 85.03ms | 86.67ms | ±2.12% |       6 |
| pdf-lib   |    11.4 | 87.42ms | 91.16ms | ±3.75% |       6 |

- **libpdf** is 1.03x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.662 | 1.51s | 1.51s | ±0.00% |       1 |
| pdf-lib   |   0.609 | 1.64s | 1.64s | ±0.00% |       1 |

- **libpdf** is 1.09x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   111.5 |  8.97ms | 12.73ms | ±2.51% |      56 |
| pdf-lib   |    83.6 | 11.97ms | 13.80ms | ±1.55% |      42 |

- **libpdf** is 1.33x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.5 | 54.02ms | 56.14ms | ±1.43% |      10 |
| libpdf    |    12.7 | 78.50ms | 94.25ms | ±8.70% |       7 |

- **pdf-lib** is 1.45x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   777.6 |  1.29ms |  2.93ms | ±3.07% |     389 |
| copy 10 pages from 100-page PDF |   120.2 |  8.32ms | 12.83ms | ±2.42% |      61 |
| copy all 100 pages              |    27.2 | 36.70ms | 37.36ms | ±0.64% |      14 |

- **copy 1 page** is 6.47x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 28.54x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   827.1 | 1.21ms | 2.23ms | ±1.71% |     414 |
| duplicate page 0                          |   807.1 | 1.24ms | 2.31ms | ±1.99% |     405 |

- **duplicate all pages (double the document)** is 1.02x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   540.9 |  1.85ms |  2.86ms | ±1.58% |     271 |
| merge 10 small PDFs     |   101.0 |  9.90ms | 13.56ms | ±2.44% |      51 |
| merge 2 x 100-page PDFs |    14.0 | 71.53ms | 74.40ms | ±1.91% |       7 |

- **merge 2 small PDFs** is 5.35x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 38.69x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |    99.0 | 10.10ms | 12.76ms | ±1.55% |      50 |
| draw 100 rectangles                 |    85.1 | 11.75ms | 16.12ms | ±3.65% |      43 |
| draw 100 circles                    |    73.7 | 13.57ms | 17.46ms | ±2.27% |      37 |
| draw 100 text lines (standard font) |    71.4 | 14.02ms | 16.84ms | ±1.86% |      36 |
| create 10 pages with mixed content  |    51.8 | 19.32ms | 20.18ms | ±1.08% |      26 |

- **draw 100 lines** is 1.16x faster than draw 100 rectangles
- **draw 100 lines** is 1.34x faster than draw 100 circles
- **draw 100 lines** is 1.39x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.91x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   291.0 |  3.44ms |  6.01ms | ±2.60% |     146 |
| get form fields   |   268.6 |  3.72ms |  7.73ms | ±3.65% |     135 |
| flatten form      |    77.9 | 12.83ms | 16.46ms | ±2.64% |      39 |
| fill text fields  |    57.4 | 17.43ms | 23.73ms | ±4.21% |      29 |

- **read field values** is 1.08x faster than get form fields
- **read field values** is 3.73x faster than flatten form
- **read field values** is 5.07x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   15.2K |   66us |  148us | ±1.31% |   7,602 |
| load medium PDF (19KB) |    9.6K |  104us |  215us | ±1.20% |   4,801 |
| load form PDF (116KB)  |   721.3 | 1.39ms | 2.09ms | ±1.25% |     361 |
| load heavy PDF (9.9MB) |   432.3 | 2.31ms | 2.88ms | ±0.94% |     217 |

- **load small PDF (888B)** is 1.58x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 21.08x faster than load form PDF (116KB)
- **load small PDF (888B)** is 35.17x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    8.7K |  115us |  241us | ±1.26% |   4,359 |
| incremental save (19KB)            |    2.0K |  498us |  986us | ±1.23% |   1,004 |
| save with modifications (19KB)     |   784.5 | 1.27ms | 2.57ms | ±2.07% |     393 |
| save heavy PDF (9.9MB)             |   424.3 | 2.36ms | 3.14ms | ±1.52% |     213 |
| incremental save heavy PDF (9.9MB) |   156.5 | 6.39ms | 8.58ms | ±1.19% |      79 |

- **save unmodified (19KB)** is 4.34x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.11x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.54x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 55.69x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   749.8 |  1.33ms |  3.18ms | ±3.35% |     375 |
| extractPages (1 page from 100-page PDF)  |   206.3 |  4.85ms |  7.94ms | ±2.36% |     104 |
| extractPages (1 page from 2000-page PDF) |    13.4 | 74.83ms | 77.94ms | ±2.24% |      10 |

- **extractPages (1 page from small PDF)** is 3.63x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 56.11x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.4 | 88.03ms | 95.30ms | ±5.25% |       6 |
| split 2000-page PDF (0.9MB) |   0.685 |   1.46s |   1.46s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.59x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.8 |  78.25ms |  80.32ms | ±2.19% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.0 | 110.73ms | 119.69ms | ±6.25% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.0 | 124.26ms | 125.85ms | ±1.47% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.42x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.59x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
