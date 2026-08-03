# Benchmark Report

> Generated on 2026-08-03 at 09:43:32 UTC
>
> System: linux | AMD EPYC 9V74 80-Core Processor (4 cores) | 16GB RAM | Bun 1.3.14

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
| libpdf    |    81.0 |  12.35ms |  13.64ms | ±1.22% |      41 |
| pdf-lib   |     5.1 | 195.28ms | 209.40ms | ±2.01% |      10 |

- **libpdf** is 15.82x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   17.1K |  58us |  133us | ±2.06% |   8,557 |
| pdf-lib   |    4.6K | 215us | 1.08ms | ±2.54% |   2,325 |

- **libpdf** is 3.68x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    8.5K | 117us |  523us | ±1.78% |   4,263 |
| pdf-lib   |    2.9K | 343us | 1.84ms | ±4.46% |   1,459 |

- **libpdf** is 2.92x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   975.2 | 1.03ms | 4.59ms | ±6.41% |     489 |
| libpdf    |   315.8 | 3.17ms | 5.13ms | ±2.79% |     159 |

- **pdf-lib** is 3.09x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    71.9 |  13.90ms |  30.97ms | ±9.97% |      36 |
| pdf-lib   |     3.6 | 275.45ms | 288.34ms | ±1.57% |      10 |

- **libpdf** is 19.81x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    38.8 |  25.78ms |  27.72ms | ±1.61% |      20 |
| pdf-lib   |     3.6 | 275.67ms | 287.22ms | ±1.39% |      10 |

- **libpdf** is 10.69x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| libpdf    |   263.5 | 3.80ms | 5.00ms | ±2.07% |     132 |
| pdf-lib   |   131.0 | 7.63ms | 9.55ms | ±1.24% |      66 |

- **libpdf** is 2.01x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.6 | 53.85ms | 58.00ms | ±3.66% |      10 |
| libpdf    |    18.1 | 55.26ms | 56.89ms | ±1.67% |      10 |

- **pdf-lib** is 1.03x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.981 | 1.02s | 1.02s | ±0.00% |       1 |
| libpdf    |   0.975 | 1.03s | 1.03s | ±0.00% |       1 |

- **pdf-lib** is 1.01x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   162.6 |  6.15ms |  7.83ms | ±2.57% |      82 |
| pdf-lib   |    96.7 | 10.34ms | 11.25ms | ±0.97% |      49 |

- **libpdf** is 1.68x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    23.7 | 42.26ms | 45.69ms | ±1.99% |      12 |
| pdf-lib   |    20.9 | 47.94ms | 48.96ms | ±0.88% |      11 |

- **libpdf** is 1.13x faster than pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |    1.1K |   940us |  1.81ms | ±2.46% |     532 |
| copy 10 pages from 100-page PDF |   182.9 |  5.47ms |  8.43ms | ±2.50% |      92 |
| copy all 100 pages              |    47.5 | 21.05ms | 22.32ms | ±1.19% |      24 |

- **copy 1 page** is 5.81x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 22.40x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.1K | 897us | 1.83ms | ±1.82% |     558 |
| duplicate all pages (double the document) |    1.1K | 903us | 1.83ms | ±1.84% |     554 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   745.0 |  1.34ms |  2.30ms | ±1.68% |     373 |
| merge 10 small PDFs     |   139.5 |  7.17ms | 11.70ms | ±2.68% |      70 |
| merge 2 x 100-page PDFs |    25.3 | 39.56ms | 41.16ms | ±1.30% |      13 |

- **merge 2 small PDFs** is 5.34x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 29.47x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   189.1 |  5.29ms |  7.43ms | ±1.20% |      95 |
| draw 100 rectangles                 |   162.5 |  6.15ms | 13.51ms | ±3.75% |      82 |
| draw 100 circles                    |   133.0 |  7.52ms |  9.84ms | ±1.37% |      67 |
| draw 100 text lines (standard font) |   126.7 |  7.89ms | 11.50ms | ±2.02% |      64 |
| create 10 pages with mixed content  |    92.0 | 10.87ms | 12.28ms | ±1.28% |      46 |

- **draw 100 lines** is 1.16x faster than draw 100 rectangles
- **draw 100 lines** is 1.42x faster than draw 100 circles
- **draw 100 lines** is 1.49x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.06x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   416.5 |  2.40ms |  3.08ms | ±1.45% |     209 |
| get form fields   |   381.0 |  2.62ms |  5.43ms | ±3.80% |     191 |
| flatten form      |   111.4 |  8.97ms | 12.97ms | ±3.51% |      56 |
| fill text fields  |    86.4 | 11.58ms | 14.05ms | ±2.79% |      44 |

- **read field values** is 1.09x faster than get form fields
- **read field values** is 3.74x faster than flatten form
- **read field values** is 4.82x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   21.2K |    47us |   102us | ±1.67% |  10,580 |
| load medium PDF (19KB) |   13.5K |    74us |    98us | ±1.09% |   6,749 |
| load form PDF (116KB)  |    1.0K |   999us |  1.71ms | ±1.39% |     501 |
| load heavy PDF (2.0MB) |    78.2 | 12.78ms | 15.53ms | ±1.72% |      40 |

- **load small PDF (888B)** is 1.57x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 21.13x faster than load form PDF (116KB)
- **load small PDF (888B)** is 270.40x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   12.9K |    78us |   169us | ±1.39% |   6,434 |
| incremental save (19KB)            |    3.5K |   282us |   736us | ±1.52% |   1,774 |
| save with modifications (19KB)     |    1.2K |   850us |  1.91ms | ±2.14% |     590 |
| save heavy PDF (2.0MB)             |    87.4 | 11.44ms | 13.06ms | ±1.43% |      44 |
| incremental save heavy PDF (2.0MB) |    74.7 | 13.39ms | 14.58ms | ±1.32% |      38 |

- **save unmodified (19KB)** is 3.63x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.93x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 147.26x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 172.33x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.1K |   941us |  1.93ms | ±2.77% |     532 |
| extractPages (1 page from 100-page PDF)  |   291.3 |  3.43ms |  5.73ms | ±1.72% |     146 |
| extractPages (1 page from 2000-page PDF) |    16.5 | 60.74ms | 63.46ms | ±2.62% |      10 |

- **extractPages (1 page from small PDF)** is 3.65x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 64.55x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    17.0 | 58.89ms | 62.85ms | ±3.31% |       9 |
| split 2000-page PDF (0.9MB) |   0.991 |   1.01s |   1.01s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.13x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    15.4 | 64.78ms | 73.08ms | ±4.71% |       8 |
| extract first 100 pages from 2000-page PDF             |    12.2 | 81.77ms | 86.17ms | ±3.52% |       7 |
| extract every 10th page from 2000-page PDF (200 pages) |    11.2 | 88.89ms | 92.81ms | ±2.87% |       6 |

- **extract first 10 pages from 2000-page PDF** is 1.26x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.37x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
