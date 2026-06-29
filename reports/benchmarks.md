# Benchmark Report

> Generated on 2026-06-29 at 10:59:54 UTC
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
| libpdf    |   382.9 |  2.61ms |  4.64ms | ±2.00% |     192 |
| pdf-lib   |    25.5 | 39.19ms | 43.25ms | ±2.91% |      13 |

- **libpdf** is 15.01x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.7K |  93us |  215us | ±1.81% |   5,363 |
| pdf-lib   |    2.7K | 375us | 1.49ms | ±2.58% |   1,334 |

- **libpdf** is 4.02x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.7K | 176us |  578us | ±1.65% |   2,837 |
| pdf-lib   |    2.0K | 489us | 2.24ms | ±3.63% |   1,023 |

- **libpdf** is 2.77x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   624.6 | 1.60ms | 6.07ms | ±7.19% |     313 |
| libpdf    |   199.1 | 5.02ms | 6.99ms | ±2.78% |     100 |

- **pdf-lib** is 3.14x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   392.3 |  2.55ms |  4.68ms | ±1.86% |     197 |
| pdf-lib   |    12.6 | 79.30ms | 92.45ms | ±5.62% |      10 |

- **libpdf** is 31.11x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    13.8 | 72.21ms | 80.56ms | ±5.88% |      10 |
| pdf-lib   |    13.0 | 76.84ms | 84.53ms | ±3.63% |      10 |

- **libpdf** is 1.06x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   191.1 | 5.23ms |  6.71ms | ±2.21% |      96 |
| pdf-lib   |   106.8 | 9.36ms | 11.19ms | ±1.65% |      54 |

- **libpdf** is 1.79x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------- | ------: | ------: | ------: | ------: | ------: |
| libpdf    |    12.9 | 77.72ms | 79.13ms |  ±1.04% |       7 |
| pdf-lib   |    11.9 | 84.01ms | 96.00ms | ±10.02% |       6 |

- **libpdf** is 1.08x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.682 | 1.47s | 1.47s | ±0.00% |       1 |
| libpdf    |   0.682 | 1.47s | 1.47s | ±0.00% |       1 |

- **pdf-lib** is 1.00x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   115.8 |  8.63ms | 10.73ms | ±2.35% |      58 |
| pdf-lib   |    82.5 | 12.12ms | 14.51ms | ±1.63% |      42 |

- **libpdf** is 1.40x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.4 | 54.45ms | 55.89ms | ±1.20% |      10 |
| libpdf    |    16.1 | 62.22ms | 63.85ms | ±1.15% |       9 |

- **pdf-lib** is 1.14x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   675.9 |  1.48ms |  4.47ms | ±4.45% |     338 |
| copy 10 pages from 100-page PDF |   123.8 |  8.08ms | 12.57ms | ±3.02% |      62 |
| copy all 100 pages              |    31.9 | 31.30ms | 41.59ms | ±4.90% |      16 |

- **copy 1 page** is 5.46x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 21.16x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   782.0 | 1.28ms | 2.49ms | ±1.93% |     391 |
| duplicate page 0                          |   779.8 | 1.28ms | 2.60ms | ±2.09% |     390 |

- **duplicate all pages (double the document)** is 1.00x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   515.1 |  1.94ms |  3.02ms | ±1.78% |     258 |
| merge 10 small PDFs     |    94.3 | 10.60ms | 11.78ms | ±1.57% |      48 |
| merge 2 x 100-page PDFs |    17.4 | 57.63ms | 60.23ms | ±1.57% |       9 |

- **merge 2 small PDFs** is 5.46x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 29.69x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   128.8 |  7.76ms | 11.11ms | ±2.12% |      65 |
| draw 100 rectangles                 |   102.3 |  9.77ms | 19.57ms | ±5.87% |      52 |
| draw 100 circles                    |    94.1 | 10.63ms | 14.21ms | ±2.03% |      48 |
| draw 100 text lines (standard font) |    85.7 | 11.67ms | 14.33ms | ±2.16% |      43 |
| create 10 pages with mixed content  |    62.9 | 15.89ms | 17.75ms | ±1.66% |      32 |

- **draw 100 lines** is 1.26x faster than draw 100 rectangles
- **draw 100 lines** is 1.37x faster than draw 100 circles
- **draw 100 lines** is 1.50x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.05x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   295.1 |  3.39ms |  4.29ms | ±1.36% |     148 |
| get form fields   |   245.5 |  4.07ms |  8.36ms | ±5.09% |     123 |
| flatten form      |    77.7 | 12.87ms | 18.44ms | ±3.47% |      39 |
| fill text fields  |    57.7 | 17.33ms | 20.38ms | ±2.57% |      29 |

- **read field values** is 1.20x faster than get form fields
- **read field values** is 3.80x faster than flatten form
- **read field values** is 5.11x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   13.8K |   73us |  186us | ±1.52% |   6,888 |
| load medium PDF (19KB) |    9.7K |  103us |  195us | ±1.30% |   4,842 |
| load form PDF (116KB)  |   725.6 | 1.38ms | 2.46ms | ±1.77% |     363 |
| load heavy PDF (9.9MB) |   441.9 | 2.26ms | 2.87ms | ±0.94% |     221 |

- **load small PDF (888B)** is 1.42x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.98x faster than load form PDF (116KB)
- **load small PDF (888B)** is 31.18x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    8.2K |  122us |  302us | ±1.51% |   4,097 |
| incremental save (19KB)            |    2.2K |  457us | 1.12ms | ±1.96% |   1,094 |
| save with modifications (19KB)     |   797.8 | 1.25ms | 2.67ms | ±2.47% |     399 |
| save heavy PDF (9.9MB)             |   428.3 | 2.33ms | 3.09ms | ±1.13% |     215 |
| incremental save heavy PDF (9.9MB) |   141.6 | 7.06ms | 8.58ms | ±1.52% |      71 |

- **save unmodified (19KB)** is 3.75x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.27x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 19.13x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 57.88x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   700.5 |  1.43ms |  3.65ms | ±4.05% |     351 |
| extractPages (1 page from 100-page PDF)  |   205.3 |  4.87ms |  6.69ms | ±2.28% |     103 |
| extractPages (1 page from 2000-page PDF) |    12.1 | 82.63ms | 86.73ms | ±2.48% |      10 |

- **extractPages (1 page from small PDF)** is 3.41x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 57.88x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.1 | 82.77ms | 88.45ms | ±3.37% |       7 |
| split 2000-page PDF (0.9MB) |   0.696 |   1.44s |   1.44s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.35x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    11.6 |  86.30ms |  89.08ms | ±3.03% |       6 |
| extract first 100 pages from 2000-page PDF             |     9.0 | 111.13ms | 119.51ms | ±5.88% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.3 | 120.65ms | 123.83ms | ±2.23% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.29x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.40x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
