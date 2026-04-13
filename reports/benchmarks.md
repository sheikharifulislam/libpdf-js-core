# Benchmark Report

> Generated on 2026-04-13 at 08:04:29 UTC
>
> System: linux | Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores) | 16GB RAM | Bun 1.3.12

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
| libpdf    |   428.7 |  2.33ms |  3.14ms | ±1.13% |     215 |
| pdf-lib   |    24.8 | 40.30ms | 46.55ms | ±4.57% |      13 |

- **libpdf** is 17.28x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.6K |  95us |  189us | ±2.19% |   5,276 |
| pdf-lib   |    2.2K | 460us | 1.78ms | ±3.14% |   1,086 |

- **libpdf** is 4.86x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.7K | 176us |  522us | ±1.64% |   2,846 |
| pdf-lib   |    2.0K | 507us | 2.03ms | ±3.08% |     986 |

- **libpdf** is 2.89x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   608.7 | 1.64ms | 5.90ms | ±6.51% |     306 |
| libpdf    |   179.7 | 5.56ms | 8.70ms | ±2.72% |      90 |

- **pdf-lib** is 3.39x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   417.9 |  2.39ms |  4.43ms | ±2.43% |     209 |
| pdf-lib   |    12.0 | 83.50ms | 94.13ms | ±4.46% |      10 |

- **libpdf** is 34.89x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    14.7 | 68.07ms | 74.31ms | ±6.04% |      10 |
| pdf-lib   |    11.9 | 83.70ms | 90.64ms | ±4.27% |      10 |

- **libpdf** is 1.23x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   206.4 | 4.85ms |  6.02ms | ±2.51% |     104 |
| pdf-lib   |   109.8 | 9.10ms | 11.16ms | ±2.05% |      55 |

- **libpdf** is 1.88x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    11.9 | 83.89ms | 85.79ms | ±1.89% |       6 |
| pdf-lib   |    11.8 | 84.91ms | 97.64ms | ±8.49% |       6 |

- **libpdf** is 1.01x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.646 | 1.55s | 1.55s | ±0.00% |       1 |
| pdf-lib   |   0.624 | 1.60s | 1.60s | ±0.00% |       1 |

- **libpdf** is 1.04x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   116.9 |  8.56ms | 10.60ms | ±2.42% |      59 |
| pdf-lib   |    83.0 | 12.05ms | 13.33ms | ±1.38% |      42 |

- **libpdf** is 1.41x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.7 | 53.58ms | 56.08ms | ±1.22% |      10 |
| libpdf    |    14.5 | 69.18ms | 70.80ms | ±1.38% |       8 |

- **pdf-lib** is 1.29x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   813.0 |  1.23ms |  2.94ms | ±3.78% |     407 |
| copy 10 pages from 100-page PDF |   129.6 |  7.71ms | 10.47ms | ±2.49% |      65 |
| copy all 100 pages              |    32.4 | 30.82ms | 32.22ms | ±1.51% |      17 |

- **copy 1 page** is 6.27x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 25.06x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   852.8 | 1.17ms | 2.35ms | ±2.09% |     427 |
| duplicate all pages (double the document) |   844.6 | 1.18ms | 2.42ms | ±2.25% |     423 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   579.3 |  1.73ms |  2.76ms | ±1.82% |     290 |
| merge 10 small PDFs     |   109.4 |  9.14ms | 12.19ms | ±2.07% |      55 |
| merge 2 x 100-page PDFs |    16.7 | 59.91ms | 62.30ms | ±2.14% |       9 |

- **merge 2 small PDFs** is 5.29x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 34.70x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   117.9 |  8.48ms | 13.90ms | ±3.01% |      59 |
| draw 100 rectangles                 |    97.4 | 10.27ms | 14.43ms | ±4.27% |      49 |
| draw 100 circles                    |    80.3 | 12.45ms | 17.36ms | ±2.98% |      41 |
| draw 100 text lines (standard font) |    77.0 | 12.99ms | 21.25ms | ±5.83% |      39 |
| create 10 pages with mixed content  |    60.2 | 16.62ms | 18.10ms | ±1.77% |      31 |

- **draw 100 lines** is 1.21x faster than draw 100 rectangles
- **draw 100 lines** is 1.47x faster than draw 100 circles
- **draw 100 lines** is 1.53x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.96x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   320.4 |  3.12ms |  4.45ms | ±1.51% |     161 |
| get form fields   |   284.7 |  3.51ms |  7.03ms | ±4.50% |     143 |
| flatten form      |    82.8 | 12.08ms | 16.27ms | ±2.90% |      42 |
| fill text fields  |    61.7 | 16.21ms | 21.58ms | ±3.53% |      31 |

- **read field values** is 1.13x faster than get form fields
- **read field values** is 3.87x faster than flatten form
- **read field values** is 5.19x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   16.3K |   61us |  135us | ±1.63% |   8,181 |
| load medium PDF (19KB) |   10.7K |   93us |  119us | ±1.30% |   5,355 |
| load form PDF (116KB)  |   778.7 | 1.28ms | 2.30ms | ±1.67% |     390 |
| load heavy PDF (9.9MB) |   466.5 | 2.14ms | 2.81ms | ±1.08% |     234 |

- **load small PDF (888B)** is 1.53x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.98x faster than load form PDF (116KB)
- **load small PDF (888B)** is 35.01x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    9.7K |  104us |  211us | ±1.45% |   4,826 |
| incremental save (19KB)            |    2.3K |  437us |  968us | ±1.53% |   1,144 |
| save with modifications (19KB)     |   829.3 | 1.21ms | 2.37ms | ±2.48% |     415 |
| save heavy PDF (9.9MB)             |   471.0 | 2.12ms | 2.86ms | ±1.30% |     236 |
| incremental save heavy PDF (9.9MB) |   139.0 | 7.20ms | 8.59ms | ±1.31% |      70 |

- **save unmodified (19KB)** is 4.22x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.64x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.49x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 69.45x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   829.6 |  1.21ms |  2.96ms | ±3.82% |     415 |
| extractPages (1 page from 100-page PDF)  |   227.2 |  4.40ms |  7.58ms | ±2.92% |     114 |
| extractPages (1 page from 2000-page PDF) |    13.6 | 73.38ms | 76.35ms | ±1.63% |      10 |

- **extractPages (1 page from small PDF)** is 3.65x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 60.88x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.2 | 81.74ms | 85.57ms | ±2.86% |       7 |
| split 2000-page PDF (0.9MB) |   0.695 |   1.44s |   1.44s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.60x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    13.0 |  77.19ms |  85.15ms | ±4.50% |       7 |
| extract first 100 pages from 2000-page PDF             |    10.1 |  99.42ms | 102.00ms | ±2.26% |       6 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.7 | 114.78ms | 118.05ms | ±2.76% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.29x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.49x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
