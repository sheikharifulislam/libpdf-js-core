# Benchmark Report

> Generated on 2026-03-23 at 07:11:40 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.3.11

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
| libpdf    |   374.7 |  2.67ms |  3.72ms | ±1.46% |     188 |
| pdf-lib   |    26.2 | 38.16ms | 44.18ms | ±4.34% |      14 |

- **libpdf** is 14.30x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.9K |  91us |  176us | ±2.55% |   5,475 |
| pdf-lib   |    2.4K | 417us | 1.44ms | ±2.32% |   1,199 |

- **libpdf** is 4.57x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.7K | 176us |  606us | ±1.59% |   2,850 |
| pdf-lib   |    2.0K | 501us | 1.77ms | ±2.53% |     999 |

- **libpdf** is 2.85x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| pdf-lib   |   588.3 | 1.70ms |  6.43ms | ±7.70% |     297 |
| libpdf    |   164.5 | 6.08ms | 11.37ms | ±4.36% |      83 |

- **pdf-lib** is 3.58x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   376.4 |  2.66ms |  3.38ms | ±1.36% |     189 |
| pdf-lib   |    11.6 | 86.55ms | 96.38ms | ±3.79% |      10 |

- **libpdf** is 32.58x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    14.3 | 69.73ms | 79.63ms | ±6.33% |      10 |
| pdf-lib   |    11.6 | 86.44ms | 96.24ms | ±4.40% |      10 |

- **libpdf** is 1.24x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   187.2 | 5.34ms |  9.14ms | ±3.50% |      94 |
| pdf-lib   |   105.8 | 9.45ms | 12.95ms | ±3.15% |      53 |

- **libpdf** is 1.77x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    11.9 | 83.89ms | 85.59ms | ±1.72% |       6 |
| pdf-lib   |    11.4 | 87.58ms | 95.89ms | ±5.21% |       6 |

- **libpdf** is 1.04x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.670 | 1.49s | 1.49s | ±0.00% |       1 |
| pdf-lib   |   0.613 | 1.63s | 1.63s | ±0.00% |       1 |

- **libpdf** is 1.09x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   114.5 |  8.73ms | 10.80ms | ±2.12% |      58 |
| pdf-lib   |    85.2 | 11.73ms | 12.81ms | ±1.12% |      43 |

- **libpdf** is 1.34x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.6 | 53.83ms | 55.03ms | ±0.76% |      10 |
| libpdf    |    13.9 | 71.89ms | 73.14ms | ±1.04% |       7 |

- **pdf-lib** is 1.34x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   746.7 |  1.34ms |  3.23ms | ±3.39% |     374 |
| copy 10 pages from 100-page PDF |   120.7 |  8.28ms | 10.76ms | ±2.13% |      61 |
| copy all 100 pages              |    28.5 | 35.07ms | 36.16ms | ±0.76% |      15 |

- **copy 1 page** is 6.18x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 26.19x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   828.8 | 1.21ms | 2.25ms | ±1.77% |     415 |
| duplicate page 0                          |   822.3 | 1.22ms | 2.28ms | ±1.72% |     412 |

- **duplicate all pages (double the document)** is 1.01x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   554.2 |  1.80ms |  2.67ms | ±1.35% |     278 |
| merge 10 small PDFs     |   104.2 |  9.60ms | 16.00ms | ±2.87% |      53 |
| merge 2 x 100-page PDFs |    14.1 | 70.84ms | 72.20ms | ±1.09% |       8 |

- **merge 2 small PDFs** is 5.32x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 39.26x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   100.8 |  9.92ms | 13.03ms | ±2.21% |      51 |
| draw 100 rectangles                 |    88.7 | 11.27ms | 13.90ms | ±3.77% |      45 |
| draw 100 circles                    |    75.4 | 13.27ms | 16.81ms | ±2.05% |      38 |
| draw 100 text lines (standard font) |    73.2 | 13.66ms | 18.29ms | ±2.87% |      37 |
| create 10 pages with mixed content  |    52.0 | 19.23ms | 24.11ms | ±2.42% |      26 |

- **draw 100 lines** is 1.14x faster than draw 100 rectangles
- **draw 100 lines** is 1.34x faster than draw 100 circles
- **draw 100 lines** is 1.38x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.94x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   295.0 |  3.39ms |  4.95ms | ±1.77% |     148 |
| get form fields   |   258.9 |  3.86ms | 10.68ms | ±5.78% |     130 |
| flatten form      |    77.9 | 12.83ms | 16.60ms | ±2.49% |      39 |
| fill text fields  |    58.4 | 17.12ms | 22.74ms | ±4.14% |      30 |

- **read field values** is 1.14x faster than get form fields
- **read field values** is 3.78x faster than flatten form
- **read field values** is 5.05x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   13.0K |   77us |  162us | ±3.61% |   6,529 |
| load medium PDF (19KB) |    8.5K |  118us |  209us | ±4.24% |   4,242 |
| load form PDF (116KB)  |   666.2 | 1.50ms | 2.78ms | ±2.25% |     334 |
| load heavy PDF (9.9MB) |   398.2 | 2.51ms | 3.67ms | ±1.66% |     200 |

- **load small PDF (888B)** is 1.54x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 19.57x faster than load form PDF (116KB)
- **load small PDF (888B)** is 32.74x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    8.9K |  113us |  255us | ±1.13% |   4,438 |
| incremental save (19KB)            |    2.0K |  493us |  974us | ±1.22% |   1,014 |
| save with modifications (19KB)     |   782.3 | 1.28ms | 2.45ms | ±2.18% |     392 |
| save heavy PDF (9.9MB)             |   437.6 | 2.29ms | 2.81ms | ±0.80% |     219 |
| incremental save heavy PDF (9.9MB) |   170.1 | 5.88ms | 6.89ms | ±0.66% |      86 |

- **save unmodified (19KB)** is 4.38x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.35x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.28x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 52.18x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   739.3 |  1.35ms |  3.17ms | ±3.50% |     370 |
| extractPages (1 page from 100-page PDF)  |   206.0 |  4.85ms |  8.51ms | ±2.99% |     104 |
| extractPages (1 page from 2000-page PDF) |    13.6 | 73.60ms | 76.37ms | ±1.66% |      10 |

- **extractPages (1 page from small PDF)** is 3.59x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 54.41x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.3 | 88.75ms | 92.86ms | ±3.97% |       6 |
| split 2000-page PDF (0.9MB) |   0.683 |   1.46s |   1.46s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.51x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.9 |  77.30ms |  79.13ms | ±1.47% |       7 |
| extract first 100 pages from 2000-page PDF             |     8.6 | 115.86ms | 126.10ms | ±7.07% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.3 | 120.23ms | 121.72ms | ±1.16% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.50x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.56x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
