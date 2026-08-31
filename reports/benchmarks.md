# Benchmark Report

> Generated on 2026-08-31 at 12:45:07 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.4.0
>
> Libraries: @libpdf/core 0.4.1 (this repo), pdf-lib 1.17.1, @cantoo/pdf-lib 2.9.1

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
| libpdf          |    53.3 |  18.76ms |  19.99ms | ±1.32% |      27 |
| @cantoo/pdf-lib |     4.7 | 211.07ms | 214.21ms | ±0.78% |      10 |
| pdf-lib         |     4.6 | 219.28ms | 224.99ms | ±1.10% |      10 |

- **libpdf** is 11.25x faster than @cantoo/pdf-lib
- **libpdf** is 11.69x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   12.6K |  79us |  172us | ±2.74% |   6,317 |
| pdf-lib         |    2.9K | 349us | 1.30ms | ±3.50% |   1,433 |
| @cantoo/pdf-lib |    2.6K | 379us | 1.48ms | ±2.54% |   1,319 |

- **libpdf** is 4.41x faster than pdf-lib
- **libpdf** is 4.79x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |    7.7K | 129us |  222us | ±0.95% |   3,868 |
| pdf-lib         |    2.3K | 443us | 1.74ms | ±2.86% |   1,128 |
| @cantoo/pdf-lib |    2.2K | 447us | 2.14ms | ±4.36% |   1,120 |

- **libpdf** is 3.43x faster than pdf-lib
- **libpdf** is 3.45x faster than @cantoo/pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    2.8K |  361us |  780us | ±1.41% |   1,384 |
| pdf-lib         |   639.3 | 1.56ms | 6.12ms | ±7.87% |     320 |
| @cantoo/pdf-lib |   504.2 | 1.98ms | 5.65ms | ±6.70% |     253 |

- **libpdf** is 4.33x faster than pdf-lib
- **libpdf** is 5.49x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    48.3 |  20.70ms |  33.75ms | ±8.06% |      25 |
| pdf-lib         |     3.2 | 312.57ms | 325.78ms | ±1.10% |      10 |
| @cantoo/pdf-lib |     1.6 | 620.42ms | 641.33ms | ±2.83% |      10 |

- **libpdf** is 15.10x faster than pdf-lib
- **libpdf** is 29.98x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| pdf-lib         |     3.2 | 313.56ms | 322.21ms | ±1.14% |      10 |
| libpdf          |     2.8 | 352.39ms | 370.68ms | ±2.34% |      10 |
| @cantoo/pdf-lib |     1.8 | 568.92ms | 619.72ms | ±4.09% |      10 |

- **pdf-lib** is 1.12x faster than libpdf
- **pdf-lib** is 1.81x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------------- | ------: | -----: | ------: | -----: | ------: |
| libpdf          |   271.2 | 3.69ms |  4.38ms | ±0.88% |     136 |
| pdf-lib         |   112.7 | 8.87ms | 11.09ms | ±1.72% |      57 |
| @cantoo/pdf-lib |   107.1 | 9.34ms | 12.53ms | ±2.29% |      54 |

- **libpdf** is 2.41x faster than pdf-lib
- **libpdf** is 2.53x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    24.7 | 40.52ms | 44.28ms | ±1.96% |      13 |
| pdf-lib         |    13.9 | 71.79ms | 74.04ms | ±3.31% |       7 |
| @cantoo/pdf-lib |    12.2 | 82.21ms | 99.06ms | ±9.61% |       7 |

- **libpdf** is 1.77x faster than pdf-lib
- **libpdf** is 2.03x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     1.3 | 796.16ms | 796.16ms | ±0.00% |       1 |
| pdf-lib         |   0.743 |    1.35s |    1.35s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.685 |    1.46s |    1.46s | ±0.00% |       1 |

- **libpdf** is 1.69x faster than pdf-lib
- **libpdf** is 1.83x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   207.3 |  4.82ms |  5.58ms | ±1.11% |     104 |
| pdf-lib         |    84.9 | 11.78ms | 13.37ms | ±1.56% |      43 |
| @cantoo/pdf-lib |    76.2 | 13.12ms | 14.38ms | ±1.54% |      39 |

- **libpdf** is 2.44x faster than pdf-lib
- **libpdf** is 2.72x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    63.2 | 15.83ms | 18.27ms | ±1.42% |      32 |
| pdf-lib         |    18.9 | 52.97ms | 55.29ms | ±1.50% |      10 |
| @cantoo/pdf-lib |    16.0 | 62.68ms | 64.72ms | ±1.84% |       8 |

- **libpdf** is 3.35x faster than pdf-lib
- **libpdf** is 3.96x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    44.9 | 22.25ms | 38.57ms | ±7.62% |      24 |
| @cantoo/pdf-lib |    36.8 | 27.20ms | 36.27ms | ±4.72% |      19 |
| pdf-lib         |    35.9 | 27.87ms | 37.59ms | ±5.60% |      18 |

- **libpdf** is 1.22x faster than @cantoo/pdf-lib
- **libpdf** is 1.25x faster than pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    58.1 | 17.23ms | 19.29ms | ±2.21% |      30 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    32.7 | 30.61ms | 40.71ms | ±5.17% |      17 |

- **libpdf** is 1.78x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | ------: | -----: | ------: |
| copy 1 page                     |   881.9 | 1.13ms |  2.08ms | ±2.53% |     441 |
| copy 10 pages from 100-page PDF |   209.0 | 4.78ms |  7.17ms | ±1.94% |     105 |
| copy all 100 pages              |   125.1 | 8.00ms | 10.61ms | ±1.62% |      63 |

- **copy 1 page** is 4.22x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.05x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   972.3 | 1.03ms | 1.53ms | ±0.79% |     487 |
| duplicate page 0                          |   971.3 | 1.03ms | 1.51ms | ±0.89% |     486 |

- **duplicate all pages (double the document)** is 1.00x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   622.6 |  1.61ms |  2.13ms | ±1.20% |     312 |
| merge 10 small PDFs     |   117.2 |  8.53ms | 12.34ms | ±1.80% |      59 |
| merge 2 x 100-page PDFs |    65.4 | 15.29ms | 16.55ms | ±1.19% |      33 |

- **merge 2 small PDFs** is 5.31x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.52x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    1.8K |  565us | 1.17ms | ±1.25% |     886 |
| draw 100 rectangles                 |    1.6K |  621us | 1.33ms | ±1.85% |     806 |
| draw 100 circles                    |    1.1K |  930us | 1.68ms | ±1.44% |     538 |
| create 10 pages with mixed content  |   680.0 | 1.47ms | 3.06ms | ±2.18% |     340 |
| draw 100 text lines (standard font) |   613.7 | 1.63ms | 2.72ms | ±1.83% |     307 |

- **draw 100 lines** is 1.10x faster than draw 100 rectangles
- **draw 100 lines** is 1.65x faster than draw 100 circles
- **draw 100 lines** is 2.60x faster than create 10 pages with mixed content
- **draw 100 lines** is 2.89x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   338.6 |  2.95ms |  5.43ms | ±2.25% |     170 |
| get form fields   |   301.1 |  3.32ms |  5.39ms | ±2.85% |     151 |
| flatten form      |   122.8 |  8.14ms | 10.85ms | ±1.58% |      62 |
| fill text fields  |    71.7 | 13.95ms | 20.94ms | ±6.32% |      36 |

- **read field values** is 1.12x faster than get form fields
- **read field values** is 2.76x faster than flatten form
- **read field values** is 4.72x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   16.2K |    62us |   192us | ±1.40% |   8,091 |
| load medium PDF (19KB) |   11.2K |    89us |   123us | ±0.57% |   5,623 |
| load form PDF (116KB)  |   774.2 |  1.29ms |  2.31ms | ±1.63% |     388 |
| load heavy PDF (2.0MB) |    56.2 | 17.80ms | 18.54ms | ±1.20% |      29 |

- **load small PDF (888B)** is 1.44x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.90x faster than load form PDF (116KB)
- **load small PDF (888B)** is 288.11x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.7K |   115us |   346us | ±1.79% |   4,345 |
| incremental save (19KB)            |    6.0K |   166us |   348us | ±1.12% |   3,017 |
| save with modifications (19KB)     |    1.2K |   827us |  1.57ms | ±1.45% |     605 |
| save heavy PDF (2.0MB)             |    55.1 | 18.16ms | 25.09ms | ±3.14% |      28 |
| incremental save heavy PDF (2.0MB) |    52.7 | 18.96ms | 21.57ms | ±1.88% |      27 |

- **save unmodified (19KB)** is 1.44x faster than incremental save (19KB)
- **save unmodified (19KB)** is 7.18x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 157.83x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 164.78x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   892.3 |  1.12ms |  2.18ms | ±2.53% |     447 |
| extractPages (1 page from 100-page PDF)  |   276.7 |  3.61ms |  4.27ms | ±0.88% |     139 |
| extractPages (1 page from 2000-page PDF) |    17.8 | 56.11ms | 62.60ms | ±2.97% |      10 |

- **extractPages (1 page from small PDF)** is 3.23x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 50.07x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    24.2 |  41.38ms |  44.97ms | ±2.48% |      13 |
| split 2000-page PDF (0.9MB) |     1.3 | 741.70ms | 741.70ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.93x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    17.5 | 57.00ms | 59.00ms | ±1.31% |       9 |
| extract first 100 pages from 2000-page PDF             |    16.2 | 61.87ms | 63.01ms | ±1.31% |       9 |
| extract every 10th page from 2000-page PDF (200 pages) |    14.9 | 67.23ms | 68.01ms | ±0.61% |       8 |

- **extract first 10 pages from 2000-page PDF** is 1.09x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.18x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
