# Benchmark Report

> Generated on 2026-11-02 at 14:53:19 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.4.4

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
| libpdf    |    63.8 |  15.67ms |  20.43ms | ±3.34% |      33 |
| pdf-lib   |     4.6 | 218.95ms | 265.50ms | ±5.59% |      10 |

- **libpdf** is 13.97x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.1K |  99us |  308us | ±4.48% |   5,063 |
| pdf-lib   |    2.8K | 362us | 1.82ms | ±5.10% |   1,382 |

- **libpdf** is 3.66x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.1K | 163us |  427us | ±1.31% |   3,065 |
| pdf-lib   |    2.0K | 496us | 2.18ms | ±4.79% |   1,009 |

- **libpdf** is 3.04x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |     p99 |     RME | Samples |
| :-------- | ------: | -----: | ------: | ------: | ------: |
| pdf-lib   |   759.9 | 1.32ms |  5.12ms |  ±4.79% |     380 |
| libpdf    |   143.5 | 6.97ms | 21.94ms | ±13.76% |      72 |

- **pdf-lib** is 5.30x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    63.8 |  15.68ms |  21.21ms | ±3.48% |      32 |
| pdf-lib   |     3.1 | 322.23ms | 345.49ms | ±3.94% |      10 |

- **libpdf** is 20.55x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    27.6 |  36.18ms |  46.08ms | ±5.35% |      14 |
| pdf-lib   |     3.2 | 310.60ms | 322.56ms | ±1.25% |      10 |

- **libpdf** is 8.58x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   194.3 | 5.15ms |  9.24ms | ±3.27% |      98 |
| pdf-lib   |   117.8 | 8.49ms | 12.28ms | ±3.06% |      60 |

- **libpdf** is 1.65x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------- | ------: | ------: | ------: | ------: | ------: |
| pdf-lib   |    13.6 | 73.35ms | 88.88ms | ±12.46% |       7 |
| libpdf    |    11.9 | 83.70ms | 95.49ms |  ±7.43% |       6 |

- **pdf-lib** is 1.14x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.727 | 1.37s | 1.37s | ±0.00% |       1 |
| libpdf    |   0.658 | 1.52s | 1.52s | ±0.00% |       1 |

- **pdf-lib** is 1.11x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   107.4 |  9.31ms | 18.17ms | ±9.86% |      54 |
| pdf-lib   |    87.7 | 11.41ms | 15.47ms | ±3.26% |      44 |

- **libpdf** is 1.23x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    19.1 | 52.42ms | 57.28ms | ±3.08% |      10 |
| libpdf    |    13.3 | 75.26ms | 78.29ms | ±1.76% |       7 |

- **pdf-lib** is 1.44x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   795.1 |  1.26ms |  2.87ms | ±2.79% |     398 |
| copy 10 pages from 100-page PDF |   110.7 |  9.03ms | 15.19ms | ±7.01% |      56 |
| copy all 100 pages              |    24.0 | 41.75ms | 50.21ms | ±4.91% |      12 |

- **copy 1 page** is 7.18x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 33.19x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   837.9 | 1.19ms | 2.64ms | ±2.14% |     419 |
| duplicate all pages (double the document) |   832.9 | 1.20ms | 2.25ms | ±1.93% |     417 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   542.2 |  1.84ms |  3.69ms | ±2.20% |     272 |
| merge 10 small PDFs     |   104.1 |  9.60ms | 11.77ms | ±2.23% |      53 |
| merge 2 x 100-page PDFs |    13.0 | 77.20ms | 85.13ms | ±7.08% |       7 |

- **merge 2 small PDFs** is 5.21x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 41.85x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |     RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | ------: | ------: |
| draw 100 lines                      |   105.6 |  9.47ms | 15.13ms |  ±9.41% |      54 |
| draw 100 rectangles                 |    76.8 | 13.03ms | 27.03ms | ±11.32% |      39 |
| draw 100 text lines (standard font) |    74.0 | 13.52ms | 18.70ms |  ±9.25% |      37 |
| draw 100 circles                    |    69.8 | 14.33ms | 21.35ms |  ±8.27% |      36 |
| create 10 pages with mixed content  |    55.3 | 18.09ms | 22.51ms |  ±7.04% |      28 |

- **draw 100 lines** is 1.38x faster than draw 100 rectangles
- **draw 100 lines** is 1.43x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.51x faster than draw 100 circles
- **draw 100 lines** is 1.91x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   289.4 |  3.46ms |  6.01ms | ±2.86% |     145 |
| get form fields   |   270.0 |  3.70ms |  6.11ms | ±3.47% |     135 |
| flatten form      |    79.7 | 12.55ms | 17.71ms | ±4.11% |      40 |
| fill text fields  |    59.6 | 16.77ms | 24.24ms | ±5.94% |      30 |

- **read field values** is 1.07x faster than get form fields
- **read field values** is 3.63x faster than flatten form
- **read field values** is 4.85x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   13.0K |    77us |   181us | ±3.09% |   6,492 |
| load medium PDF (19KB) |    9.4K |   106us |   201us | ±0.85% |   4,716 |
| load form PDF (116KB)  |   747.8 |  1.34ms |  2.67ms | ±1.65% |     374 |
| load heavy PDF (2.0MB) |    68.5 | 14.59ms | 16.46ms | ±1.57% |      35 |

- **load small PDF (888B)** is 1.38x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 17.36x faster than load form PDF (116KB)
- **load small PDF (888B)** is 189.44x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.1K |   124us |   320us | ±2.99% |   4,042 |
| incremental save (19KB)            |    1.8K |   565us |  3.58ms | ±6.05% |     886 |
| save with modifications (19KB)     |   833.0 |  1.20ms |  2.54ms | ±2.25% |     417 |
| save heavy PDF (2.0MB)             |    68.8 | 14.54ms | 16.79ms | ±2.08% |      35 |
| incremental save heavy PDF (2.0MB) |    58.9 | 16.98ms | 24.06ms | ±6.05% |      30 |

- **save unmodified (19KB)** is 4.56x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.70x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 117.57x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 137.26x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   790.5 |  1.26ms |  2.40ms | ±2.40% |     396 |
| extractPages (1 page from 100-page PDF)  |   220.0 |  4.55ms |  7.41ms | ±3.51% |     110 |
| extractPages (1 page from 2000-page PDF) |    13.1 | 76.20ms | 85.77ms | ±3.82% |      10 |

- **extractPages (1 page from small PDF)** is 3.59x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 60.24x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.6 | 86.15ms | 95.06ms | ±7.74% |       6 |
| split 2000-page PDF (0.9MB) |   0.671 |   1.49s |   1.49s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.31x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.8 |  78.13ms |  85.94ms | ±4.91% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.2 | 109.00ms | 110.87ms | ±1.88% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.0 | 124.46ms | 133.20ms | ±6.42% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.40x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.59x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
