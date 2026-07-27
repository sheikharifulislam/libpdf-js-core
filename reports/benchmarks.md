# Benchmark Report

> Generated on 2026-07-27 at 09:51:56 UTC
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
| libpdf    |    62.0 |  16.12ms |  18.26ms | ±1.68% |      32 |
| pdf-lib   |     4.3 | 230.21ms | 311.48ms | ±9.01% |      10 |

- **libpdf** is 14.28x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   13.1K |  76us |  191us | ±2.12% |   6,559 |
| pdf-lib   |    3.4K | 296us | 1.43ms | ±2.96% |   1,687 |

- **libpdf** is 3.89x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.7K | 149us |  687us | ±1.98% |   3,358 |
| pdf-lib   |    2.5K | 400us | 1.99ms | ±3.61% |   1,252 |

- **libpdf** is 2.68x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   752.9 | 1.33ms | 6.16ms | ±8.12% |     379 |
| libpdf    |   255.5 | 3.91ms | 5.47ms | ±2.53% |     128 |

- **pdf-lib** is 2.95x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    61.2 |  16.34ms |  23.99ms | ±4.01% |      31 |
| pdf-lib   |     3.2 | 314.92ms | 327.82ms | ±1.39% |      10 |

- **libpdf** is 19.27x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    30.4 |  32.85ms |  35.79ms | ±1.92% |      16 |
| pdf-lib   |     3.2 | 317.39ms | 323.11ms | ±0.88% |      10 |

- **libpdf** is 9.66x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   205.2 | 4.87ms |  6.33ms | ±2.39% |     103 |
| pdf-lib   |   113.9 | 8.78ms | 12.86ms | ±2.34% |      57 |

- **libpdf** is 1.80x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    14.3 | 70.14ms | 73.21ms | ±1.83% |       8 |
| pdf-lib   |    13.3 | 75.27ms | 85.45ms | ±8.79% |       7 |

- **libpdf** is 1.07x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.775 | 1.29s | 1.29s | ±0.00% |       1 |
| libpdf    |   0.762 | 1.31s | 1.31s | ±0.00% |       1 |

- **pdf-lib** is 1.02x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   130.2 |  7.68ms |  9.78ms | ±2.63% |      66 |
| pdf-lib   |    88.1 | 11.35ms | 12.58ms | ±1.18% |      45 |

- **libpdf** is 1.48x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    19.3 | 51.78ms | 53.70ms | ±1.74% |      10 |
| pdf-lib   |    19.2 | 52.04ms | 53.27ms | ±1.07% |      10 |

- **libpdf** is 1.00x faster than pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   817.1 |  1.22ms |  2.88ms | ±3.04% |     409 |
| copy 10 pages from 100-page PDF |   141.4 |  7.07ms | 11.02ms | ±2.41% |      71 |
| copy all 100 pages              |    38.8 | 25.77ms | 28.88ms | ±1.67% |      20 |

- **copy 1 page** is 5.78x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 21.06x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   869.5 | 1.15ms | 2.18ms | ±1.73% |     435 |
| duplicate page 0                          |   866.8 | 1.15ms | 2.25ms | ±1.87% |     434 |

- **duplicate all pages (double the document)** is 1.00x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   582.4 |  1.72ms |  2.74ms | ±1.61% |     292 |
| merge 10 small PDFs     |   109.8 |  9.11ms | 10.93ms | ±1.66% |      55 |
| merge 2 x 100-page PDFs |    19.2 | 52.05ms | 64.66ms | ±7.05% |      10 |

- **merge 2 small PDFs** is 5.30x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 30.31x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   153.0 |  6.54ms | 10.33ms | ±1.77% |      77 |
| draw 100 rectangles                 |   125.5 |  7.97ms | 17.77ms | ±5.54% |      63 |
| draw 100 text lines (standard font) |   101.5 |  9.85ms | 12.09ms | ±1.46% |      51 |
| draw 100 circles                    |   100.8 |  9.92ms | 16.48ms | ±5.17% |      51 |
| create 10 pages with mixed content  |    76.7 | 13.04ms | 13.70ms | ±1.05% |      39 |

- **draw 100 lines** is 1.22x faster than draw 100 rectangles
- **draw 100 lines** is 1.51x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.52x faster than draw 100 circles
- **draw 100 lines** is 1.99x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   315.0 |  3.17ms |  4.42ms | ±1.90% |     158 |
| get form fields   |   279.6 |  3.58ms |  6.56ms | ±4.30% |     140 |
| flatten form      |    88.6 | 11.29ms | 14.03ms | ±1.92% |      45 |
| fill text fields  |    65.6 | 15.23ms | 19.81ms | ±3.65% |      33 |

- **read field values** is 1.13x faster than get form fields
- **read field values** is 3.56x faster than flatten form
- **read field values** is 4.80x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   16.3K |    61us |   142us | ±1.49% |   8,171 |
| load medium PDF (19KB) |   11.0K |    91us |   142us | ±1.06% |   5,494 |
| load form PDF (116KB)  |   782.4 |  1.28ms |  2.24ms | ±1.53% |     392 |
| load heavy PDF (2.0MB) |    68.2 | 14.66ms | 15.88ms | ±1.18% |      35 |

- **load small PDF (888B)** is 1.49x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.88x faster than load form PDF (116KB)
- **load small PDF (888B)** is 239.63x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    9.4K |   107us |   262us | ±1.29% |   4,690 |
| incremental save (19KB)            |    2.7K |   366us |   855us | ±1.63% |   1,366 |
| save with modifications (19KB)     |   907.1 |  1.10ms |  2.30ms | ±2.34% |     454 |
| save heavy PDF (2.0MB)             |    65.6 | 15.24ms | 16.74ms | ±1.32% |      33 |
| incremental save heavy PDF (2.0MB) |    57.1 | 17.52ms | 19.16ms | ±1.67% |      29 |

- **save unmodified (19KB)** is 3.43x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.34x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 142.92x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 164.34x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   780.9 |  1.28ms |  2.89ms | ±3.43% |     391 |
| extractPages (1 page from 100-page PDF)  |   219.3 |  4.56ms |  6.61ms | ±1.91% |     110 |
| extractPages (1 page from 2000-page PDF) |    13.0 | 77.08ms | 81.65ms | ±2.27% |      10 |

- **extractPages (1 page from small PDF)** is 3.56x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 60.19x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    13.1 | 76.54ms | 81.54ms | ±3.07% |       7 |
| split 2000-page PDF (0.9MB) |   0.762 |   1.31s |   1.31s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.15x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.4 |  80.41ms |  83.73ms | ±3.09% |       7 |
| extract first 100 pages from 2000-page PDF             |    10.0 | 100.11ms | 107.01ms | ±5.46% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.9 | 112.33ms | 120.15ms | ±6.10% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.24x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.40x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
