# Benchmark Report

> Generated on 2026-09-07 at 11:42:52 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.4.2

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
| libpdf    |    61.0 |  16.38ms |  18.79ms | ±1.96% |      31 |
| pdf-lib   |     4.6 | 218.82ms | 231.57ms | ±1.67% |      10 |

- **libpdf** is 13.36x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   11.0K |  91us |  201us | ±1.80% |   5,481 |
| pdf-lib   |    2.9K | 341us | 1.43ms | ±2.54% |   1,465 |

- **libpdf** is 3.74x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.0K | 168us |  625us | ±1.74% |   2,979 |
| pdf-lib   |    2.3K | 443us | 1.73ms | ±3.86% |   1,130 |

- **libpdf** is 2.64x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   728.0 | 1.37ms | 4.93ms | ±5.85% |     364 |
| libpdf    |   235.8 | 4.24ms | 6.81ms | ±2.71% |     118 |

- **pdf-lib** is 3.09x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    61.6 |  16.23ms |  18.44ms | ±1.95% |      31 |
| pdf-lib   |     3.1 | 323.30ms | 335.27ms | ±1.41% |      10 |

- **libpdf** is 19.91x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    28.5 |  35.12ms |  40.94ms | ±3.52% |      15 |
| pdf-lib   |     3.2 | 314.63ms | 327.31ms | ±1.28% |      10 |

- **libpdf** is 8.96x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| libpdf    |   187.3 | 5.34ms | 7.18ms | ±2.29% |      94 |
| pdf-lib   |   114.0 | 8.77ms | 9.52ms | ±1.06% |      58 |

- **libpdf** is 1.64x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    13.9 | 72.13ms | 76.74ms | ±4.21% |       7 |
| libpdf    |    13.2 | 75.51ms | 78.92ms | ±2.61% |       7 |

- **pdf-lib** is 1.05x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.740 | 1.35s | 1.35s | ±0.00% |       1 |
| libpdf    |   0.708 | 1.41s | 1.41s | ±0.00% |       1 |

- **pdf-lib** is 1.04x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   113.2 |  8.83ms | 10.72ms | ±2.80% |      57 |
| pdf-lib   |    82.6 | 12.10ms | 14.29ms | ±1.68% |      42 |

- **libpdf** is 1.37x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.5 | 54.11ms | 55.73ms | ±1.25% |      10 |
| libpdf    |    16.8 | 59.45ms | 60.66ms | ±1.08% |       9 |

- **pdf-lib** is 1.10x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   719.2 |  1.39ms |  3.37ms | ±3.62% |     360 |
| copy 10 pages from 100-page PDF |   119.0 |  8.41ms | 12.00ms | ±2.37% |      60 |
| copy all 100 pages              |    30.6 | 32.70ms | 46.11ms | ±8.58% |      16 |

- **copy 1 page** is 6.05x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 23.51x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   801.2 | 1.25ms | 2.41ms | ±1.94% |     401 |
| duplicate all pages (double the document) |   799.7 | 1.25ms | 2.44ms | ±2.04% |     400 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   532.6 |  1.88ms |  3.12ms | ±1.83% |     267 |
| merge 10 small PDFs     |    97.2 | 10.29ms | 12.20ms | ±1.61% |      49 |
| merge 2 x 100-page PDFs |    17.4 | 57.63ms | 59.57ms | ±1.67% |       9 |

- **merge 2 small PDFs** is 5.48x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 30.69x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   131.1 |  7.63ms | 11.69ms | ±2.55% |      66 |
| draw 100 rectangles                 |   103.8 |  9.64ms | 15.53ms | ±4.10% |      52 |
| draw 100 circles                    |    93.1 | 10.74ms | 15.26ms | ±2.63% |      47 |
| draw 100 text lines (standard font) |    88.0 | 11.36ms | 15.65ms | ±3.35% |      45 |
| create 10 pages with mixed content  |    63.2 | 15.82ms | 19.93ms | ±3.33% |      32 |

- **draw 100 lines** is 1.26x faster than draw 100 rectangles
- **draw 100 lines** is 1.41x faster than draw 100 circles
- **draw 100 lines** is 1.49x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.07x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   297.0 |  3.37ms |  4.31ms | ±1.34% |     149 |
| get form fields   |   257.6 |  3.88ms |  8.09ms | ±4.23% |     129 |
| flatten form      |    79.6 | 12.56ms | 19.18ms | ±3.60% |      40 |
| fill text fields  |    57.5 | 17.39ms | 19.52ms | ±2.71% |      29 |

- **read field values** is 1.15x faster than get form fields
- **read field values** is 3.73x faster than flatten form
- **read field values** is 5.16x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   13.1K |    76us |   225us | ±2.25% |   6,559 |
| load medium PDF (19KB) |    9.7K |   103us |   146us | ±1.20% |   4,847 |
| load form PDF (116KB)  |   709.5 |  1.41ms |  2.38ms | ±1.43% |     355 |
| load heavy PDF (2.0MB) |    67.5 | 14.82ms | 17.43ms | ±2.21% |      34 |

- **load small PDF (888B)** is 1.35x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.49x faster than load form PDF (116KB)
- **load small PDF (888B)** is 194.38x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.2K |   123us |   327us | ±1.48% |   4,076 |
| incremental save (19KB)            |    2.2K |   448us |  1.04ms | ±1.87% |   1,117 |
| save with modifications (19KB)     |   803.9 |  1.24ms |  2.68ms | ±2.49% |     402 |
| save heavy PDF (2.0MB)             |    69.1 | 14.48ms | 16.07ms | ±1.52% |      35 |
| incremental save heavy PDF (2.0MB) |    61.5 | 16.25ms | 20.37ms | ±2.51% |      31 |

- **save unmodified (19KB)** is 3.65x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.14x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 118.04x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 132.49x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   746.7 |  1.34ms |  3.33ms | ±3.24% |     374 |
| extractPages (1 page from 100-page PDF)  |   216.8 |  4.61ms |  5.59ms | ±1.39% |     109 |
| extractPages (1 page from 2000-page PDF) |    12.5 | 79.74ms | 83.56ms | ±2.39% |      10 |

- **extractPages (1 page from small PDF)** is 3.44x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 59.54x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.3 | 81.27ms | 84.33ms | ±2.67% |       7 |
| split 2000-page PDF (0.9MB) |   0.712 |   1.40s |   1.40s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.28x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    11.7 |  85.15ms |  86.58ms | ±2.12% |       6 |
| extract first 100 pages from 2000-page PDF             |     8.9 | 112.91ms | 128.48ms | ±9.87% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.3 | 120.19ms | 123.98ms | ±2.94% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.33x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.41x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
