# Benchmark Report

> Generated on 2026-05-04 at 08:30:32 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.3.13

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
| libpdf    |   402.3 |  2.49ms |  3.99ms | ±1.75% |     202 |
| pdf-lib   |    25.8 | 38.77ms | 42.95ms | ±3.85% |      13 |

- **libpdf** is 15.60x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   11.0K |  91us |  173us | ±1.89% |   5,493 |
| pdf-lib   |    2.5K | 402us | 1.34ms | ±2.19% |   1,245 |

- **libpdf** is 4.41x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.6K | 178us |  604us | ±1.61% |   2,807 |
| pdf-lib   |    2.0K | 503us | 1.66ms | ±2.43% |     994 |

- **libpdf** is 2.83x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   574.8 | 1.74ms | 6.80ms | ±7.02% |     288 |
| libpdf    |   177.9 | 5.62ms | 7.92ms | ±1.85% |      90 |

- **pdf-lib** is 3.23x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   363.8 |  2.75ms |  5.53ms | ±6.90% |     182 |
| pdf-lib   |    11.2 | 89.61ms | 97.37ms | ±3.72% |      10 |

- **libpdf** is 32.60x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    15.2 | 65.94ms | 72.36ms | ±5.42% |      10 |
| pdf-lib   |    11.7 | 85.32ms | 93.19ms | ±3.76% |      10 |

- **libpdf** is 1.29x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   198.9 | 5.03ms |  5.91ms | ±2.08% |     100 |
| pdf-lib   |   109.1 | 9.17ms | 14.39ms | ±2.68% |      56 |

- **libpdf** is 1.82x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    11.7 | 85.36ms | 90.31ms | ±3.31% |       6 |
| pdf-lib   |    11.4 | 87.98ms | 89.45ms | ±1.86% |       6 |

- **libpdf** is 1.03x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.666 | 1.50s | 1.50s | ±0.00% |       1 |
| pdf-lib   |   0.600 | 1.67s | 1.67s | ±0.00% |       1 |

- **libpdf** is 1.11x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   114.8 |  8.71ms | 10.30ms | ±1.90% |      58 |
| pdf-lib   |    84.2 | 11.87ms | 12.78ms | ±1.05% |      43 |

- **libpdf** is 1.36x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.8 | 53.25ms | 55.81ms | ±1.85% |      10 |
| libpdf    |    13.8 | 72.37ms | 77.99ms | ±3.51% |       7 |

- **pdf-lib** is 1.36x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   743.9 |  1.34ms |  3.26ms | ±3.44% |     372 |
| copy 10 pages from 100-page PDF |   119.1 |  8.40ms | 12.60ms | ±2.59% |      60 |
| copy all 100 pages              |    28.3 | 35.33ms | 36.19ms | ±0.67% |      15 |

- **copy 1 page** is 6.25x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 26.28x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   804.3 | 1.24ms | 2.15ms | ±1.62% |     403 |
| duplicate page 0                          |   802.3 | 1.25ms | 2.21ms | ±1.59% |     402 |

- **duplicate all pages (double the document)** is 1.00x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   533.1 |  1.88ms |  2.74ms | ±1.41% |     267 |
| merge 10 small PDFs     |    98.9 | 10.11ms | 17.41ms | ±3.54% |      50 |
| merge 2 x 100-page PDFs |    14.6 | 68.36ms | 72.10ms | ±2.02% |       8 |

- **merge 2 small PDFs** is 5.39x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 36.44x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   103.5 |  9.66ms | 11.67ms | ±1.01% |      52 |
| draw 100 rectangles                 |    90.7 | 11.02ms | 13.84ms | ±3.13% |      46 |
| draw 100 circles                    |    75.8 | 13.20ms | 16.07ms | ±1.98% |      39 |
| draw 100 text lines (standard font) |    73.1 | 13.68ms | 17.92ms | ±2.82% |      37 |
| create 10 pages with mixed content  |    53.8 | 18.60ms | 19.75ms | ±0.93% |      27 |

- **draw 100 lines** is 1.14x faster than draw 100 rectangles
- **draw 100 lines** is 1.37x faster than draw 100 circles
- **draw 100 lines** is 1.42x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.92x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   290.3 |  3.44ms |  6.29ms | ±1.90% |     146 |
| get form fields   |   257.4 |  3.89ms |  8.21ms | ±4.17% |     129 |
| flatten form      |    78.3 | 12.77ms | 17.22ms | ±3.04% |      40 |
| fill text fields  |    58.8 | 17.01ms | 23.14ms | ±3.76% |      30 |

- **read field values** is 1.13x faster than get form fields
- **read field values** is 3.71x faster than flatten form
- **read field values** is 4.94x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   14.7K |   68us |  168us | ±1.13% |   7,331 |
| load medium PDF (19KB) |    9.8K |  102us |  143us | ±0.83% |   4,883 |
| load form PDF (116KB)  |   641.0 | 1.56ms | 2.72ms | ±1.72% |     321 |
| load heavy PDF (9.9MB) |   364.4 | 2.74ms | 6.10ms | ±4.28% |     183 |

- **load small PDF (888B)** is 1.50x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 22.87x faster than load form PDF (116KB)
- **load small PDF (888B)** is 40.24x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    7.1K |  140us |  294us | ±2.38% |   3,565 |
| incremental save (19KB)            |    1.9K |  522us | 1.24ms | ±1.70% |     959 |
| save with modifications (19KB)     |   737.7 | 1.36ms | 2.92ms | ±2.71% |     369 |
| save heavy PDF (9.9MB)             |   406.3 | 2.46ms | 3.58ms | ±1.80% |     204 |
| incremental save heavy PDF (9.9MB) |   173.9 | 5.75ms | 6.25ms | ±0.53% |      88 |

- **save unmodified (19KB)** is 3.72x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.66x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 17.54x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 40.99x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |      p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | -------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   745.8 |  1.34ms |   3.15ms | ±3.53% |     373 |
| extractPages (1 page from 100-page PDF)  |   207.9 |  4.81ms |   5.96ms | ±1.91% |     104 |
| extractPages (1 page from 2000-page PDF) |    12.5 | 79.71ms | 104.60ms | ±8.06% |      10 |

- **extractPages (1 page from small PDF)** is 3.59x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 59.45x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.4 | 87.79ms | 91.69ms | ±4.78% |       6 |
| split 2000-page PDF (0.9MB) |   0.690 |   1.45s |   1.45s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.50x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |     RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | ------: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.6 |  79.48ms |  80.82ms |  ±1.06% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.0 | 111.00ms | 127.43ms | ±10.40% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.2 | 121.50ms | 123.21ms |  ±1.33% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.40x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.53x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
