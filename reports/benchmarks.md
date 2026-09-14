# Benchmark Report

> Generated on 2026-09-14 at 11:57:13 UTC
>
> System: linux | Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores) | 16GB RAM | Bun 1.4.2

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
| libpdf    |    68.0 |  14.72ms |  17.10ms | ±1.68% |      34 |
| pdf-lib   |     4.5 | 221.02ms | 228.37ms | ±1.03% |      10 |

- **libpdf** is 15.02x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   11.5K |  87us |  203us | ±1.95% |   5,730 |
| pdf-lib   |    2.8K | 353us | 1.48ms | ±2.79% |   1,418 |

- **libpdf** is 4.04x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.0K | 168us |  535us | ±1.81% |   2,979 |
| pdf-lib   |    2.1K | 483us | 2.30ms | ±3.76% |   1,036 |

- **libpdf** is 2.88x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   643.2 | 1.55ms | 6.75ms | ±8.00% |     322 |
| libpdf    |   197.5 | 5.06ms | 7.56ms | ±3.34% |      99 |

- **pdf-lib** is 3.26x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    68.0 |  14.71ms |  15.80ms | ±1.37% |      34 |
| pdf-lib   |     3.1 | 322.19ms | 337.09ms | ±2.03% |      10 |

- **libpdf** is 21.90x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    29.6 |  33.79ms |  36.02ms | ±1.85% |      15 |
| pdf-lib   |     3.2 | 316.65ms | 332.80ms | ±1.48% |      10 |

- **libpdf** is 9.37x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   199.2 | 5.02ms |  6.38ms | ±2.19% |     100 |
| pdf-lib   |   108.7 | 9.20ms | 10.97ms | ±1.91% |      55 |

- **libpdf** is 1.83x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------- | ------: | ------: | ------: | ------: | ------: |
| libpdf    |    12.6 | 79.57ms | 81.61ms |  ±2.03% |       7 |
| pdf-lib   |    12.5 | 80.19ms | 95.73ms | ±10.07% |       7 |

- **libpdf** is 1.01x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.714 | 1.40s | 1.40s | ±0.00% |       1 |
| libpdf    |   0.672 | 1.49s | 1.49s | ±0.00% |       1 |

- **pdf-lib** is 1.06x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   123.1 |  8.12ms | 10.26ms | ±2.55% |      62 |
| pdf-lib   |    86.0 | 11.62ms | 13.38ms | ±1.59% |      44 |

- **libpdf** is 1.43x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.4 | 54.29ms | 60.08ms | ±2.90% |      10 |
| libpdf    |    16.1 | 61.98ms | 64.19ms | ±1.84% |       9 |

- **pdf-lib** is 1.14x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   811.3 |  1.23ms |  2.86ms | ±3.52% |     406 |
| copy 10 pages from 100-page PDF |   134.9 |  7.42ms | 11.20ms | ±2.72% |      68 |
| copy all 100 pages              |    33.7 | 29.67ms | 38.46ms | ±4.43% |      17 |

- **copy 1 page** is 6.02x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 24.07x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   872.2 | 1.15ms | 2.39ms | ±2.16% |     437 |
| duplicate all pages (double the document) |   871.0 | 1.15ms | 2.45ms | ±2.17% |     436 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   583.8 |  1.71ms |  2.94ms | ±2.03% |     292 |
| merge 10 small PDFs     |   109.4 |  9.14ms | 10.72ms | ±2.02% |      55 |
| merge 2 x 100-page PDFs |    17.6 | 56.77ms | 58.99ms | ±2.07% |       9 |

- **merge 2 small PDFs** is 5.34x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 33.14x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   120.7 |  8.28ms | 12.43ms | ±1.96% |      61 |
| draw 100 rectangles                 |   102.7 |  9.74ms | 14.62ms | ±3.65% |      52 |
| draw 100 circles                    |    86.9 | 11.51ms | 14.73ms | ±2.19% |      44 |
| draw 100 text lines (standard font) |    80.6 | 12.41ms | 16.98ms | ±3.07% |      41 |
| create 10 pages with mixed content  |    58.2 | 17.17ms | 21.15ms | ±2.44% |      30 |

- **draw 100 lines** is 1.18x faster than draw 100 rectangles
- **draw 100 lines** is 1.39x faster than draw 100 circles
- **draw 100 lines** is 1.50x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.07x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   325.1 |  3.08ms |  4.85ms | ±1.79% |     163 |
| get form fields   |   290.7 |  3.44ms |  6.80ms | ±4.21% |     146 |
| flatten form      |    85.5 | 11.70ms | 14.51ms | ±2.27% |      43 |
| fill text fields  |    64.0 | 15.63ms | 20.16ms | ±3.24% |      32 |

- **read field values** is 1.12x faster than get form fields
- **read field values** is 3.80x faster than flatten form
- **read field values** is 5.08x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   15.1K |    66us |   187us | ±6.03% |   7,543 |
| load medium PDF (19KB) |   10.6K |    95us |   172us | ±1.32% |   5,283 |
| load form PDF (116KB)  |   791.8 |  1.26ms |  2.25ms | ±1.80% |     396 |
| load heavy PDF (2.0MB) |    72.5 | 13.79ms | 15.31ms | ±2.02% |      37 |

- **load small PDF (888B)** is 1.43x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 19.05x faster than load form PDF (116KB)
- **load small PDF (888B)** is 208.01x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    9.4K |   106us |   255us | ±2.01% |   4,698 |
| incremental save (19KB)            |    2.3K |   430us |  1.01ms | ±1.76% |   1,164 |
| save with modifications (19KB)     |   887.9 |  1.13ms |  2.50ms | ±2.35% |     445 |
| save heavy PDF (2.0MB)             |    71.3 | 14.02ms | 15.58ms | ±1.96% |      36 |
| incremental save heavy PDF (2.0MB) |    63.2 | 15.81ms | 17.10ms | ±1.35% |      32 |

- **save unmodified (19KB)** is 4.04x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.58x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 131.71x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 148.56x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   786.9 |  1.27ms |  2.98ms | ±3.84% |     394 |
| extractPages (1 page from 100-page PDF)  |   227.9 |  4.39ms |  7.65ms | ±2.66% |     114 |
| extractPages (1 page from 2000-page PDF) |    13.5 | 74.30ms | 77.41ms | ±2.40% |      10 |

- **extractPages (1 page from small PDF)** is 3.45x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 58.46x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.1 | 82.53ms | 88.54ms | ±4.14% |       7 |
| split 2000-page PDF (0.9MB) |   0.699 |   1.43s |   1.43s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.35x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.8 |  78.06ms |  80.79ms | ±2.79% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.6 | 104.22ms | 111.21ms | ±5.14% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.9 | 112.54ms | 114.38ms | ±2.41% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.34x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.44x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
