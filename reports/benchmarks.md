# Benchmark Report

> Generated on 2026-03-16 at 07:18:42 UTC
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
| libpdf    |   335.9 |  2.98ms |  5.12ms | ±3.05% |     169 |
| pdf-lib   |    25.2 | 39.64ms | 45.78ms | ±3.83% |      13 |

- **libpdf** is 13.32x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.5K |  95us |  185us | ±2.50% |   5,262 |
| pdf-lib   |    2.3K | 442us | 1.62ms | ±3.84% |   1,132 |

- **libpdf** is 4.65x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.7K | 176us |  625us | ±1.73% |   2,839 |
| pdf-lib   |    1.9K | 540us | 1.85ms | ±3.37% |     926 |

- **libpdf** is 3.07x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   598.4 | 1.67ms | 6.22ms | ±6.59% |     300 |
| libpdf    |   175.5 | 5.70ms | 8.19ms | ±1.77% |      88 |

- **pdf-lib** is 3.41x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   358.1 |  2.79ms |  5.24ms | ±1.97% |     180 |
| pdf-lib   |    11.3 | 88.27ms | 96.47ms | ±4.35% |      10 |

- **libpdf** is 31.61x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    13.4 | 74.36ms | 80.67ms | ±3.15% |      10 |
| pdf-lib   |    11.2 | 89.35ms | 95.94ms | ±3.77% |      10 |

- **libpdf** is 1.20x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   192.1 | 5.21ms |  8.71ms | ±3.23% |      97 |
| pdf-lib   |   109.9 | 9.10ms | 10.71ms | ±1.58% |      55 |

- **libpdf** is 1.75x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    11.5 | 86.68ms | 91.96ms | ±3.99% |       6 |
| pdf-lib   |    11.3 | 88.51ms | 93.05ms | ±3.10% |       6 |

- **libpdf** is 1.02x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.651 | 1.54s | 1.54s | ±0.00% |       1 |
| pdf-lib   |   0.599 | 1.67s | 1.67s | ±0.00% |       1 |

- **libpdf** is 1.09x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   109.9 |  9.10ms | 12.74ms | ±2.71% |      55 |
| pdf-lib   |    82.9 | 12.06ms | 13.28ms | ±1.63% |      42 |

- **libpdf** is 1.33x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.1 | 55.20ms | 56.47ms | ±1.31% |      10 |
| libpdf    |    12.6 | 79.60ms | 98.50ms | ±9.79% |       7 |

- **pdf-lib** is 1.44x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   734.4 |  1.36ms |  3.15ms | ±3.57% |     368 |
| copy 10 pages from 100-page PDF |   114.9 |  8.70ms | 14.05ms | ±3.62% |      58 |
| copy all 100 pages              |    27.5 | 36.34ms | 37.17ms | ±0.92% |      14 |

- **copy 1 page** is 6.39x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 26.69x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   803.1 | 1.25ms | 2.34ms | ±1.82% |     402 |
| duplicate all pages (double the document) |   802.2 | 1.25ms | 2.29ms | ±2.06% |     402 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   530.9 |  1.88ms |  3.30ms | ±1.83% |     266 |
| merge 10 small PDFs     |    98.9 | 10.11ms | 16.52ms | ±2.84% |      51 |
| merge 2 x 100-page PDFs |    14.1 | 70.93ms | 72.00ms | ±0.85% |       8 |

- **merge 2 small PDFs** is 5.37x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 37.66x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |    97.2 | 10.28ms | 12.80ms | ±1.53% |      49 |
| draw 100 rectangles                 |    84.0 | 11.91ms | 15.81ms | ±4.10% |      42 |
| draw 100 circles                    |    71.5 | 14.00ms | 17.85ms | ±2.71% |      36 |
| draw 100 text lines (standard font) |    70.2 | 14.24ms | 18.32ms | ±2.17% |      36 |
| create 10 pages with mixed content  |    50.7 | 19.74ms | 20.82ms | ±1.41% |      26 |

- **draw 100 lines** is 1.16x faster than draw 100 rectangles
- **draw 100 lines** is 1.36x faster than draw 100 circles
- **draw 100 lines** is 1.38x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.92x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   295.8 |  3.38ms |  4.97ms | ±1.83% |     148 |
| get form fields   |   265.0 |  3.77ms |  8.69ms | ±4.06% |     133 |
| flatten form      |    77.2 | 12.96ms | 19.13ms | ±3.24% |      40 |
| fill text fields  |    57.0 | 17.54ms | 21.35ms | ±3.35% |      29 |

- **read field values** is 1.12x faster than get form fields
- **read field values** is 3.83x faster than flatten form
- **read field values** is 5.19x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   12.7K |   79us |  177us | ±4.02% |   6,350 |
| load medium PDF (19KB) |    8.5K |  118us |  200us | ±4.49% |   4,242 |
| load form PDF (116KB)  |   693.5 | 1.44ms | 2.85ms | ±2.22% |     347 |
| load heavy PDF (9.9MB) |   394.3 | 2.54ms | 4.07ms | ±2.10% |     198 |

- **load small PDF (888B)** is 1.50x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.31x faster than load form PDF (116KB)
- **load small PDF (888B)** is 32.21x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    8.6K |  117us |  262us | ±1.27% |   4,279 |
| incremental save (19KB)            |    1.9K |  514us | 1.03ms | ±1.34% |     974 |
| save with modifications (19KB)     |   749.5 | 1.33ms | 2.73ms | ±2.36% |     376 |
| save heavy PDF (9.9MB)             |   418.5 | 2.39ms | 3.09ms | ±0.98% |     210 |
| incremental save heavy PDF (9.9MB) |   162.3 | 6.16ms | 7.95ms | ±1.48% |      82 |

- **save unmodified (19KB)** is 4.40x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.42x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.44x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 52.71x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   682.6 |  1.47ms |  3.15ms | ±3.68% |     342 |
| extractPages (1 page from 100-page PDF)  |   195.3 |  5.12ms | 12.45ms | ±4.86% |      98 |
| extractPages (1 page from 2000-page PDF) |    13.6 | 73.32ms | 75.74ms | ±2.22% |      10 |

- **extractPages (1 page from small PDF)** is 3.50x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 50.05x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.4 | 87.82ms | 92.42ms | ±4.33% |       6 |
| split 2000-page PDF (0.9MB) |   0.663 |   1.51s |   1.51s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.17x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.9 |  77.44ms |  79.47ms | ±1.35% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.3 | 107.99ms | 111.52ms | ±2.97% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.0 | 125.09ms | 135.97ms | ±9.27% |       4 |

- **extract first 10 pages from 2000-page PDF** is 1.39x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.62x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
