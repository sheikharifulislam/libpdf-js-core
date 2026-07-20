# Benchmark Report

> Generated on 2026-07-20 at 08:57:40 UTC
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
| libpdf    |    59.4 |  16.82ms |  18.74ms | ±2.04% |      30 |
| pdf-lib   |     4.6 | 219.19ms | 230.76ms | ±1.70% |      10 |

- **libpdf** is 13.03x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   13.0K |  77us |  184us | ±2.49% |   6,496 |
| pdf-lib   |    3.2K | 311us | 1.61ms | ±3.18% |   1,608 |

- **libpdf** is 4.04x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.4K | 155us |  680us | ±2.10% |   3,217 |
| pdf-lib   |    2.3K | 427us | 2.24ms | ±4.60% |   1,170 |

- **libpdf** is 2.75x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   793.7 | 1.26ms | 5.02ms | ±7.47% |     397 |
| libpdf    |   243.2 | 4.11ms | 6.48ms | ±3.13% |     122 |

- **pdf-lib** is 3.26x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    58.9 |  16.98ms |  20.73ms | ±3.50% |      30 |
| pdf-lib   |     3.0 | 329.75ms | 347.91ms | ±1.87% |      10 |

- **libpdf** is 19.42x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    28.0 |  35.75ms |  37.84ms | ±2.07% |      14 |
| pdf-lib   |     3.1 | 320.76ms | 330.71ms | ±1.07% |      10 |

- **libpdf** is 8.97x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   184.6 | 5.42ms | 10.19ms | ±4.00% |      93 |
| pdf-lib   |   111.3 | 8.99ms | 10.76ms | ±2.06% |      56 |

- **libpdf** is 1.66x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |      p99 |     RME | Samples |
| :-------- | ------: | ------: | -------: | ------: | ------: |
| libpdf    |    13.7 | 72.75ms |  77.05ms |  ±3.33% |       7 |
| pdf-lib   |    13.4 | 74.82ms | 105.02ms | ±16.57% |       7 |

- **libpdf** is 1.03x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.760 | 1.32s | 1.32s | ±0.00% |       1 |
| libpdf    |   0.740 | 1.35s | 1.35s | ±0.00% |       1 |

- **pdf-lib** is 1.03x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   119.9 |  8.34ms | 10.47ms | ±3.03% |      60 |
| pdf-lib   |    86.4 | 11.57ms | 13.47ms | ±1.55% |      44 |

- **libpdf** is 1.39x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.6 | 53.67ms | 54.39ms | ±0.59% |      10 |
| libpdf    |    17.8 | 56.33ms | 58.39ms | ±1.73% |       9 |

- **pdf-lib** is 1.05x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   773.1 |  1.29ms |  3.12ms | ±3.88% |     387 |
| copy 10 pages from 100-page PDF |   133.0 |  7.52ms | 11.67ms | ±3.20% |      67 |
| copy all 100 pages              |    35.5 | 28.16ms | 32.76ms | ±3.02% |      18 |

- **copy 1 page** is 5.81x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 21.77x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   852.6 | 1.17ms | 2.34ms | ±2.03% |     427 |
| duplicate all pages (double the document) |   844.2 | 1.18ms | 2.44ms | ±2.13% |     423 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   564.9 |  1.77ms |  3.07ms | ±2.08% |     283 |
| merge 10 small PDFs     |   103.4 |  9.67ms | 11.67ms | ±1.95% |      52 |
| merge 2 x 100-page PDFs |    19.0 | 52.76ms | 54.10ms | ±0.87% |      10 |

- **merge 2 small PDFs** is 5.46x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 29.81x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   140.8 |  7.10ms | 10.21ms | ±2.07% |      71 |
| draw 100 rectangles                 |   115.6 |  8.65ms | 15.43ms | ±4.67% |      58 |
| draw 100 circles                    |   100.0 | 10.00ms | 13.27ms | ±2.11% |      50 |
| draw 100 text lines (standard font) |    91.9 | 10.88ms | 15.00ms | ±3.16% |      46 |
| create 10 pages with mixed content  |    69.9 | 14.30ms | 15.28ms | ±1.29% |      35 |

- **draw 100 lines** is 1.22x faster than draw 100 rectangles
- **draw 100 lines** is 1.41x faster than draw 100 circles
- **draw 100 lines** is 1.53x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.01x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   303.8 |  3.29ms |  5.86ms | ±2.43% |     152 |
| get form fields   |   276.6 |  3.62ms |  7.22ms | ±4.49% |     139 |
| flatten form      |    85.3 | 11.72ms | 14.84ms | ±2.25% |      43 |
| fill text fields  |    63.8 | 15.67ms | 18.73ms | ±3.10% |      32 |

- **read field values** is 1.10x faster than get form fields
- **read field values** is 3.56x faster than flatten form
- **read field values** is 4.76x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   15.7K |    64us |   175us | ±2.05% |   7,854 |
| load medium PDF (19KB) |   10.8K |    93us |   140us | ±1.34% |   5,400 |
| load form PDF (116KB)  |   770.0 |  1.30ms |  2.25ms | ±1.57% |     385 |
| load heavy PDF (2.0MB) |    65.0 | 15.37ms | 16.90ms | ±1.58% |      33 |

- **load small PDF (888B)** is 1.45x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.40x faster than load form PDF (116KB)
- **load small PDF (888B)** is 241.50x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    9.6K |   104us |   238us | ±1.76% |   4,805 |
| incremental save (19KB)            |    2.7K |   370us |  1.03ms | ±1.97% |   1,351 |
| save with modifications (19KB)     |   920.3 |  1.09ms |  2.62ms | ±2.38% |     462 |
| save heavy PDF (2.0MB)             |    67.7 | 14.77ms | 18.19ms | ±2.03% |      34 |
| incremental save heavy PDF (2.0MB) |    58.0 | 17.25ms | 18.93ms | ±1.74% |      29 |

- **save unmodified (19KB)** is 3.56x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.44x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 141.89x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 165.77x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   777.1 |  1.29ms |  2.74ms | ±3.53% |     389 |
| extractPages (1 page from 100-page PDF)  |   213.1 |  4.69ms |  7.34ms | ±2.11% |     107 |
| extractPages (1 page from 2000-page PDF) |    12.5 | 80.12ms | 83.48ms | ±1.87% |      10 |

- **extractPages (1 page from small PDF)** is 3.65x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 62.26x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.7 | 78.57ms | 83.49ms | ±3.72% |       7 |
| split 2000-page PDF (0.9MB) |   0.742 |   1.35s |   1.35s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.15x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    11.9 |  84.28ms |  87.31ms | ±3.63% |       6 |
| extract first 100 pages from 2000-page PDF             |     9.4 | 106.08ms | 111.44ms | ±3.95% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.5 | 117.71ms | 120.83ms | ±2.63% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.26x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.40x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
