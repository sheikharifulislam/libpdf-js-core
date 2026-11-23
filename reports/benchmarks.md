# Benchmark Report

> Generated on 2026-11-23 at 17:30:14 UTC
>
> System: linux | AMD EPYC 9V74 80-Core Processor (4 cores) | 16GB RAM | Bun 1.4.5

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
| libpdf    |    79.4 |  12.59ms |  17.42ms | ±4.34% |      40 |
| pdf-lib   |     5.0 | 199.16ms | 203.92ms | ±0.88% |      10 |

- **libpdf** is 15.81x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   14.8K |  68us |  212us | ±5.19% |   7,404 |
| pdf-lib   |    3.8K | 261us | 1.53ms | ±5.30% |   1,919 |

- **libpdf** is 3.86x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    8.2K | 122us |  328us | ±1.48% |   4,087 |
| pdf-lib   |    2.8K | 359us | 1.81ms | ±5.01% |   1,393 |

- **libpdf** is 2.93x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |     p99 |     RME | Samples |
| :-------- | ------: | -----: | ------: | ------: | ------: |
| pdf-lib   |    1.0K |  972us |  4.10ms |  ±5.54% |     515 |
| libpdf    |   193.8 | 5.16ms | 16.41ms | ±14.51% |      99 |

- **pdf-lib** is 5.31x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    83.6 |  11.96ms |  16.24ms | ±2.72% |      42 |
| pdf-lib   |     3.5 | 287.83ms | 301.00ms | ±3.01% |      10 |

- **libpdf** is 24.07x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    35.8 |  27.94ms |  35.63ms | ±4.94% |      18 |
| pdf-lib   |     3.4 | 292.69ms | 312.72ms | ±2.95% |      10 |

- **libpdf** is 10.48x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   245.6 | 4.07ms |  6.22ms | ±2.85% |     123 |
| pdf-lib   |   128.6 | 7.78ms | 13.09ms | ±3.64% |      65 |

- **libpdf** is 1.91x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------- | ------: | ------: | ------: | ------: | ------: |
| pdf-lib   |    16.6 | 60.30ms | 84.27ms | ±20.36% |       9 |
| libpdf    |    14.7 | 68.18ms | 76.93ms |  ±6.63% |       8 |

- **pdf-lib** is 1.13x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.900 | 1.11s | 1.11s | ±0.00% |       1 |
| libpdf    |   0.804 | 1.24s | 1.24s | ±0.00% |       1 |

- **pdf-lib** is 1.12x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------- | ------: | ------: | ------: | ------: | ------: |
| libpdf    |   130.4 |  7.67ms | 17.20ms | ±10.72% |      66 |
| pdf-lib   |    95.6 | 10.46ms | 15.41ms |  ±3.28% |      48 |

- **libpdf** is 1.36x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    19.8 | 50.54ms | 53.95ms | ±2.72% |      10 |
| libpdf    |    15.3 | 65.21ms | 66.77ms | ±1.85% |       8 |

- **pdf-lib** is 1.29x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |    1.1K |   923us |  1.97ms | ±2.48% |     542 |
| copy 10 pages from 100-page PDF |   143.0 |  6.99ms | 13.38ms | ±7.75% |      72 |
| copy all 100 pages              |    31.2 | 32.06ms | 37.04ms | ±3.68% |      16 |

- **copy 1 page** is 7.57x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 34.71x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.1K | 908us | 2.35ms | ±2.64% |     551 |
| duplicate all pages (double the document) |    1.1K | 922us | 2.22ms | ±2.54% |     545 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   710.2 |  1.41ms |  3.08ms | ±2.73% |     356 |
| merge 10 small PDFs     |   121.9 |  8.20ms | 12.31ms | ±4.68% |      61 |
| merge 2 x 100-page PDFs |    17.1 | 58.39ms | 66.07ms | ±4.82% |       9 |

- **merge 2 small PDFs** is 5.83x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 41.47x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |     RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | ------: | ------: |
| draw 100 lines                      |   127.1 |  7.87ms | 14.60ms | ±10.77% |      65 |
| draw 100 rectangles                 |   106.3 |  9.41ms | 23.31ms | ±11.09% |      54 |
| draw 100 circles                    |    94.0 | 10.64ms | 18.68ms | ±10.60% |      47 |
| draw 100 text lines (standard font) |    92.5 | 10.81ms | 17.39ms |  ±9.10% |      47 |
| create 10 pages with mixed content  |    67.3 | 14.85ms | 19.14ms |  ±7.87% |      34 |

- **draw 100 lines** is 1.20x faster than draw 100 rectangles
- **draw 100 lines** is 1.35x faster than draw 100 circles
- **draw 100 lines** is 1.37x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.89x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   370.1 |  2.70ms |  5.61ms | ±3.36% |     186 |
| get form fields   |   345.5 |  2.89ms |  5.85ms | ±5.14% |     174 |
| flatten form      |   101.2 |  9.88ms | 15.40ms | ±4.91% |      52 |
| fill text fields  |    70.1 | 14.27ms | 21.30ms | ±7.50% |      36 |

- **read field values** is 1.07x faster than get form fields
- **read field values** is 3.66x faster than flatten form
- **read field values** is 5.28x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   18.3K |    55us |   130us | ±3.22% |   9,131 |
| load medium PDF (19KB) |   12.6K |    79us |   154us | ±1.13% |   6,320 |
| load form PDF (116KB)  |   944.8 |  1.06ms |  2.22ms | ±2.02% |     473 |
| load heavy PDF (2.0MB) |    76.2 | 13.12ms | 18.14ms | ±3.31% |      39 |

- **load small PDF (888B)** is 1.44x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 19.33x faster than load form PDF (116KB)
- **load small PDF (888B)** is 239.60x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   11.5K |    87us |   198us | ±3.03% |   5,744 |
| incremental save (19KB)            |    2.5K |   396us |  2.87ms | ±5.83% |   1,264 |
| save with modifications (19KB)     |    1.1K |   907us |  2.16ms | ±2.71% |     552 |
| save heavy PDF (2.0MB)             |    84.8 | 11.80ms | 14.57ms | ±2.31% |      43 |
| incremental save heavy PDF (2.0MB) |    71.8 | 13.93ms | 20.51ms | ±5.98% |      36 |

- **save unmodified (19KB)** is 4.55x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.42x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 135.53x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 160.03x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.0K |   982us |  2.21ms | ±4.15% |     510 |
| extractPages (1 page from 100-page PDF)  |   286.7 |  3.49ms | 10.69ms | ±6.02% |     144 |
| extractPages (1 page from 2000-page PDF) |    15.3 | 65.49ms | 76.49ms | ±6.76% |      10 |

- **extractPages (1 page from small PDF)** is 3.55x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 66.71x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    15.7 | 63.60ms | 69.02ms | ±5.50% |       8 |
| split 2000-page PDF (0.9MB) |   0.876 |   1.14s |   1.14s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.94x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    15.5 |  64.64ms |  69.41ms | ±4.49% |       8 |
| extract first 100 pages from 2000-page PDF             |    11.2 |  89.15ms |  91.57ms | ±2.02% |       6 |
| extract every 10th page from 2000-page PDF (200 pages) |     9.3 | 107.28ms | 112.39ms | ±4.99% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.38x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.66x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
