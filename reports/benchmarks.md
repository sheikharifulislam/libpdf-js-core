# Benchmark Report

> Generated on 2026-08-24 at 06:54:58 UTC
>
> System: linux | Intel(R) Xeon(R) 6973P-C (4 cores) | 16GB RAM | Bun 1.4.0

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

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    80.2 |  12.46ms |  17.93ms | ±2.55% |      41 |
| @cantoo/pdf-lib |     5.4 | 185.20ms | 188.98ms | ±0.61% |      10 |
| pdf-lib         |     5.4 | 186.23ms | 193.11ms | ±1.34% |      10 |

- **libpdf** is 14.86x faster than @cantoo/pdf-lib
- **libpdf** is 14.94x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   28.5K |  35us |   74us | ±1.76% |  14,263 |
| pdf-lib         |    5.4K | 187us | 1.03ms | ±3.44% |   2,681 |
| @cantoo/pdf-lib |    5.1K | 196us | 1.08ms | ±3.07% |   2,549 |

- **libpdf** is 5.32x faster than pdf-lib
- **libpdf** is 5.60x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   14.6K |  68us |  189us | ±0.89% |   7,317 |
| @cantoo/pdf-lib |    4.0K | 249us | 1.51ms | ±4.04% |   2,007 |
| pdf-lib         |    3.7K | 269us | 1.40ms | ±3.14% |   1,859 |

- **libpdf** is 3.65x faster than @cantoo/pdf-lib
- **libpdf** is 3.94x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    4.7K |  212us |  685us | ±1.77% |   2,360 |
| pdf-lib         |    1.1K |  932us | 3.51ms | ±4.91% |     537 |
| @cantoo/pdf-lib |   963.1 | 1.04ms | 3.10ms | ±5.08% |     482 |

- **libpdf** is 4.40x faster than pdf-lib
- **libpdf** is 4.90x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    85.1 |  11.75ms |  13.42ms | ±1.33% |      43 |
| pdf-lib         |     3.9 | 254.97ms | 271.90ms | ±2.17% |      10 |
| @cantoo/pdf-lib |     2.3 | 442.44ms | 470.50ms | ±2.23% |      10 |

- **libpdf** is 21.70x faster than pdf-lib
- **libpdf** is 37.66x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     4.2 | 238.11ms | 255.23ms | ±1.92% |      10 |
| pdf-lib         |     3.9 | 254.92ms | 269.67ms | ±1.63% |      10 |
| @cantoo/pdf-lib |     2.3 | 441.95ms | 467.58ms | ±1.80% |      10 |

- **libpdf** is 1.07x faster than pdf-lib
- **libpdf** is 1.86x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |   477.7 | 2.09ms | 2.63ms | ±0.89% |     239 |
| pdf-lib         |   138.9 | 7.20ms | 8.24ms | ±1.11% |      70 |
| @cantoo/pdf-lib |   133.9 | 7.47ms | 9.00ms | ±1.25% |      67 |

- **libpdf** is 3.44x faster than pdf-lib
- **libpdf** is 3.57x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    46.3 | 21.62ms | 22.60ms | ±0.83% |      24 |
| pdf-lib         |    19.1 | 52.25ms | 61.99ms | ±5.57% |      10 |
| @cantoo/pdf-lib |    18.5 | 53.93ms | 58.93ms | ±4.05% |      10 |

- **libpdf** is 2.42x faster than pdf-lib
- **libpdf** is 2.49x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     2.4 | 422.21ms | 422.21ms | ±0.00% |       1 |
| pdf-lib         |     1.0 | 955.97ms | 955.97ms | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.987 |    1.01s |    1.01s | ±0.00% |       1 |

- **libpdf** is 2.26x faster than pdf-lib
- **libpdf** is 2.40x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   371.4 |  2.69ms |  3.34ms | ±1.09% |     186 |
| pdf-lib         |   102.3 |  9.77ms | 11.17ms | ±0.92% |      52 |
| @cantoo/pdf-lib |    89.1 | 11.23ms | 12.56ms | ±1.58% |      45 |

- **libpdf** is 3.63x faster than pdf-lib
- **libpdf** is 4.17x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   101.9 |  9.81ms | 20.53ms | ±6.32% |      51 |
| pdf-lib         |    21.3 | 46.87ms | 48.05ms | ±0.88% |      11 |
| @cantoo/pdf-lib |    17.6 | 56.66ms | 57.85ms | ±1.06% |       9 |

- **libpdf** is 4.78x faster than pdf-lib
- **libpdf** is 5.78x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    71.7 | 13.96ms | 16.60ms | ±2.15% |      36 |
| pdf-lib         |    45.9 | 21.80ms | 33.68ms | ±5.42% |      23 |
| @cantoo/pdf-lib |    43.4 | 23.07ms | 36.86ms | ±7.02% |      22 |

- **libpdf** is 1.56x faster than pdf-lib
- **libpdf** is 1.65x faster than @cantoo/pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    83.8 | 11.94ms | 14.77ms | ±2.53% |      42 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    38.9 | 25.72ms | 41.35ms | ±6.94% |      20 |

- **libpdf** is 2.16x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |    p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | -----: | -----: | ------: |
| copy 1 page                     |    1.7K |  574us | 1.08ms | ±1.49% |     872 |
| copy 10 pages from 100-page PDF |   372.0 | 2.69ms | 3.97ms | ±1.43% |     186 |
| copy all 100 pages              |   218.4 | 4.58ms | 5.04ms | ±0.76% |     110 |

- **copy 1 page** is 4.68x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.98x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.7K | 575us |  914us | ±0.86% |     871 |
| duplicate all pages (double the document) |    1.7K | 583us | 1.03ms | ±1.18% |     858 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------- | ------: | -----: | -----: | -----: | ------: |
| merge 2 small PDFs      |    1.1K |  876us | 1.34ms | ±0.90% |     571 |
| merge 10 small PDFs     |   212.9 | 4.70ms | 5.36ms | ±1.06% |     107 |
| merge 2 x 100-page PDFs |   115.2 | 8.68ms | 9.32ms | ±1.02% |      58 |

- **merge 2 small PDFs** is 5.36x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.90x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 rectangles                 |    2.8K |  353us |  809us | ±1.51% |   1,419 |
| draw 100 lines                      |    2.8K |  355us |  847us | ±1.66% |   1,407 |
| draw 100 circles                    |    1.6K |  610us | 1.28ms | ±1.82% |     820 |
| create 10 pages with mixed content  |    1.0K |  967us | 1.77ms | ±1.71% |     517 |
| draw 100 text lines (standard font) |   971.6 | 1.03ms | 1.85ms | ±1.62% |     486 |

- **draw 100 rectangles** is 1.01x faster than draw 100 lines
- **draw 100 rectangles** is 1.73x faster than draw 100 circles
- **draw 100 rectangles** is 2.74x faster than create 10 pages with mixed content
- **draw 100 rectangles** is 2.92x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |   Mean |     p99 |    RME | Samples |
| :---------------- | ------: | -----: | ------: | -----: | ------: |
| read field values |   571.3 | 1.75ms |  2.30ms | ±0.95% |     286 |
| get form fields   |   501.8 | 1.99ms |  3.53ms | ±2.74% |     251 |
| flatten form      |   191.7 | 5.22ms |  7.06ms | ±1.69% |      96 |
| fill text fields  |   130.3 | 7.67ms | 10.43ms | ±3.05% |      66 |

- **read field values** is 1.14x faster than get form fields
- **read field values** is 2.98x faster than flatten form
- **read field values** is 4.38x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   31.9K |    31us |    61us | ±2.07% |  15,929 |
| load medium PDF (19KB) |   17.5K |    57us |    80us | ±0.61% |   8,753 |
| load form PDF (116KB)  |    1.1K |   894us |  1.51ms | ±1.28% |     560 |
| load heavy PDF (2.0MB) |    85.0 | 11.77ms | 12.80ms | ±1.29% |      43 |

- **load small PDF (888B)** is 1.82x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 28.47x faster than load form PDF (116KB)
- **load small PDF (888B)** is 374.94x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   15.8K |    63us |   127us | ±2.23% |   7,908 |
| incremental save (19KB)            |   11.0K |    91us |   194us | ±0.82% |   5,519 |
| save with modifications (19KB)     |    2.1K |   469us |   846us | ±1.16% |   1,068 |
| save heavy PDF (2.0MB)             |    80.9 | 12.36ms | 13.72ms | ±0.86% |      41 |
| incremental save heavy PDF (2.0MB) |    75.4 | 13.26ms | 14.72ms | ±1.10% |      38 |

- **save unmodified (19KB)** is 1.43x faster than incremental save (19KB)
- **save unmodified (19KB)** is 7.41x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 195.48x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 209.74x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.7K |   584us |  1.09ms | ±1.54% |     856 |
| extractPages (1 page from 100-page PDF)  |   476.3 |  2.10ms |  3.25ms | ±1.52% |     239 |
| extractPages (1 page from 2000-page PDF) |    29.8 | 33.57ms | 46.18ms | ±5.87% |      15 |

- **extractPages (1 page from small PDF)** is 3.59x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 57.45x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    43.8 |  22.82ms |  27.95ms | ±3.09% |      22 |
| split 2000-page PDF (0.9MB) |     2.5 | 408.03ms | 408.03ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.88x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    29.9 | 33.42ms | 34.77ms | ±1.03% |      15 |
| extract first 100 pages from 2000-page PDF             |    27.6 | 36.19ms | 37.15ms | ±1.29% |      14 |
| extract every 10th page from 2000-page PDF (200 pages) |    25.4 | 39.31ms | 47.72ms | ±4.18% |      13 |

- **extract first 10 pages from 2000-page PDF** is 1.08x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.18x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
