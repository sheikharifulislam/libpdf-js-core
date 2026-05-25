# Benchmark Report

> Generated on 2026-05-25 at 10:06:37 UTC
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
| libpdf    |   418.2 |  2.39ms |  3.13ms | ±1.38% |     210 |
| pdf-lib   |    26.5 | 37.69ms | 43.24ms | ±2.97% |      14 |

- **libpdf** is 15.76x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.7K |  93us |  203us | ±1.64% |   5,355 |
| pdf-lib   |    2.8K | 363us | 1.35ms | ±2.28% |   1,377 |

- **libpdf** is 3.89x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.0K | 166us |  576us | ±1.58% |   3,013 |
| pdf-lib   |    2.2K | 463us | 1.94ms | ±3.19% |   1,080 |

- **libpdf** is 2.79x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   620.7 | 1.61ms | 6.85ms | ±9.07% |     311 |
| libpdf    |   217.4 | 4.60ms | 7.28ms | ±4.49% |     109 |

- **pdf-lib** is 2.85x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   400.5 |  2.50ms |  4.63ms | ±2.69% |     201 |
| pdf-lib   |    12.9 | 77.24ms | 90.62ms | ±7.11% |      10 |

- **libpdf** is 30.94x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    14.4 | 69.51ms | 87.64ms | ±8.80% |      10 |
| pdf-lib   |    13.6 | 73.69ms | 78.25ms | ±2.43% |      10 |

- **libpdf** is 1.06x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   196.0 | 5.10ms | 10.05ms | ±2.84% |      99 |
| pdf-lib   |   112.5 | 8.89ms | 11.01ms | ±1.62% |      57 |

- **libpdf** is 1.74x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    13.4 | 74.48ms | 76.02ms | ±1.33% |       7 |
| pdf-lib   |    12.8 | 77.99ms | 86.41ms | ±4.77% |       7 |

- **libpdf** is 1.05x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.727 | 1.37s | 1.37s | ±0.00% |       1 |
| pdf-lib   |   0.723 | 1.38s | 1.38s | ±0.00% |       1 |

- **libpdf** is 1.01x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   119.7 |  8.36ms | 10.68ms | ±2.50% |      60 |
| pdf-lib   |    88.4 | 11.31ms | 11.97ms | ±0.57% |      45 |

- **libpdf** is 1.35x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    19.5 | 51.39ms | 53.68ms | ±1.39% |      10 |
| libpdf    |    17.5 | 57.21ms | 58.86ms | ±1.68% |       9 |

- **pdf-lib** is 1.11x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   764.9 |  1.31ms |  3.33ms | ±3.60% |     383 |
| copy 10 pages from 100-page PDF |   129.1 |  7.75ms | 12.44ms | ±2.84% |      65 |
| copy all 100 pages              |    36.2 | 27.61ms | 29.96ms | ±2.00% |      19 |

- **copy 1 page** is 5.93x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 21.12x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   839.3 | 1.19ms | 2.12ms | ±1.49% |     420 |
| duplicate all pages (double the document) |   834.1 | 1.20ms | 2.19ms | ±1.56% |     418 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   556.1 |  1.80ms |  2.70ms | ±1.40% |     279 |
| merge 10 small PDFs     |   104.1 |  9.61ms | 12.38ms | ±1.78% |      53 |
| merge 2 x 100-page PDFs |    19.5 | 51.25ms | 54.21ms | ±1.81% |      10 |

- **merge 2 small PDFs** is 5.34x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 28.50x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   147.3 |  6.79ms | 10.69ms | ±1.79% |      74 |
| draw 100 rectangles                 |   119.1 |  8.39ms | 16.00ms | ±4.51% |      60 |
| draw 100 circles                    |   101.7 |  9.84ms | 14.17ms | ±2.21% |      51 |
| draw 100 text lines (standard font) |    91.7 | 10.91ms | 15.28ms | ±2.58% |      46 |
| create 10 pages with mixed content  |    69.6 | 14.36ms | 19.88ms | ±3.07% |      35 |

- **draw 100 lines** is 1.24x faster than draw 100 rectangles
- **draw 100 lines** is 1.45x faster than draw 100 circles
- **draw 100 lines** is 1.61x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.12x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   305.2 |  3.28ms |  5.74ms | ±1.88% |     153 |
| get form fields   |   263.2 |  3.80ms |  7.19ms | ±4.72% |     132 |
| flatten form      |    86.6 | 11.54ms | 13.37ms | ±1.61% |      44 |
| fill text fields  |    63.2 | 15.82ms | 19.60ms | ±2.81% |      32 |

- **read field values** is 1.16x faster than get form fields
- **read field values** is 3.52x faster than flatten form
- **read field values** is 4.83x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   14.8K |   67us |  160us | ±1.29% |   7,417 |
| load medium PDF (19KB) |   10.0K |  100us |  190us | ±0.89% |   4,978 |
| load form PDF (116KB)  |   733.7 | 1.36ms | 2.45ms | ±1.52% |     367 |
| load heavy PDF (9.9MB) |   442.3 | 2.26ms | 2.81ms | ±0.88% |     222 |

- **load small PDF (888B)** is 1.49x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.22x faster than load form PDF (116KB)
- **load small PDF (888B)** is 33.53x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    8.6K |  116us |  266us | ±1.09% |   4,293 |
| incremental save (19KB)            |    2.4K |  415us |  951us | ±1.53% |   1,204 |
| save with modifications (19KB)     |   855.6 | 1.17ms | 2.37ms | ±2.04% |     428 |
| save heavy PDF (9.9MB)             |   443.5 | 2.26ms | 2.76ms | ±0.72% |     222 |
| incremental save heavy PDF (9.9MB) |   175.9 | 5.69ms | 6.00ms | ±0.39% |      88 |

- **save unmodified (19KB)** is 3.56x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.03x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 19.36x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 48.80x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   761.1 |  1.31ms |  3.12ms | ±3.46% |     381 |
| extractPages (1 page from 100-page PDF)  |   223.6 |  4.47ms |  5.58ms | ±1.48% |     112 |
| extractPages (1 page from 2000-page PDF) |    12.9 | 77.47ms | 80.42ms | ±2.06% |      10 |

- **extractPages (1 page from small PDF)** is 3.40x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 58.96x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.7 | 78.56ms | 83.73ms | ±3.08% |       7 |
| split 2000-page PDF (0.9MB) |   0.767 |   1.30s |   1.30s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.59x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.5 |  80.02ms |  82.61ms | ±2.47% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.7 | 103.16ms | 116.48ms | ±9.23% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.9 | 111.86ms | 113.57ms | ±1.35% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.29x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.40x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
