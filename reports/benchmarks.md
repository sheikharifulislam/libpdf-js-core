# Benchmark Report

> Generated on 2026-03-02 at 06:59:33 UTC
>
> System: linux | Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores) | 16GB RAM | Bun 1.3.10

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
| libpdf    |   436.1 |  2.29ms |  3.21ms | ±1.32% |     219 |
| pdf-lib   |    25.2 | 39.63ms | 43.80ms | ±3.74% |      13 |

- **libpdf** is 17.28x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   11.5K |  87us |  170us | ±2.01% |   5,768 |
| pdf-lib   |    2.4K | 409us | 1.48ms | ±2.78% |   1,224 |

- **libpdf** is 4.72x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.7K | 175us |  526us | ±1.70% |   2,857 |
| pdf-lib   |    2.0K | 504us | 2.11ms | ±3.26% |     993 |

- **libpdf** is 2.88x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   578.0 | 1.73ms | 8.59ms | ±8.72% |     289 |
| libpdf    |   178.4 | 5.60ms | 8.33ms | ±2.24% |      90 |

- **pdf-lib** is 3.24x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |   414.4 |  2.41ms |   4.56ms | ±3.12% |     208 |
| pdf-lib   |    11.3 | 88.35ms | 108.09ms | ±8.27% |      10 |

- **libpdf** is 36.61x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    14.5 | 68.78ms | 73.54ms | ±5.27% |      10 |
| pdf-lib   |    11.9 | 84.32ms | 93.04ms | ±4.23% |      10 |

- **libpdf** is 1.23x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   204.4 | 4.89ms |  6.01ms | ±2.33% |     103 |
| pdf-lib   |   110.7 | 9.03ms | 10.36ms | ±1.64% |      56 |

- **libpdf** is 1.85x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    11.9 | 84.37ms | 87.95ms | ±2.54% |       6 |
| pdf-lib   |    11.2 | 88.93ms | 97.97ms | ±5.82% |       6 |

- **libpdf** is 1.05x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.638 | 1.57s | 1.57s | ±0.00% |       1 |
| pdf-lib   |   0.620 | 1.61s | 1.61s | ±0.00% |       1 |

- **libpdf** is 1.03x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   113.5 |  8.81ms | 11.25ms | ±2.72% |      57 |
| pdf-lib   |    82.6 | 12.10ms | 13.04ms | ±1.45% |      42 |

- **libpdf** is 1.37x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.4 | 54.40ms | 56.12ms | ±0.98% |      10 |
| libpdf    |    14.0 | 71.47ms | 75.59ms | ±2.89% |       7 |

- **pdf-lib** is 1.31x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   792.0 |  1.26ms |  3.07ms | ±3.83% |     396 |
| copy 10 pages from 100-page PDF |   126.7 |  7.89ms | 11.01ms | ±2.90% |      64 |
| copy all 100 pages              |    29.9 | 33.40ms | 37.36ms | ±2.87% |      15 |

- **copy 1 page** is 6.25x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 26.45x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   833.8 | 1.20ms | 2.50ms | ±2.34% |     417 |
| duplicate page 0                          |   795.8 | 1.26ms | 2.79ms | ±2.90% |     398 |

- **duplicate all pages (double the document)** is 1.05x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   557.9 |  1.79ms |  3.14ms | ±2.25% |     279 |
| merge 10 small PDFs     |   104.0 |  9.62ms | 12.37ms | ±2.64% |      53 |
| merge 2 x 100-page PDFs |    15.9 | 62.79ms | 65.97ms | ±2.52% |       8 |

- **merge 2 small PDFs** is 5.37x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 35.03x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   110.8 |  9.02ms | 13.56ms | ±2.35% |      56 |
| draw 100 rectangles                 |    95.2 | 10.50ms | 14.65ms | ±3.92% |      48 |
| draw 100 circles                    |    79.5 | 12.57ms | 15.43ms | ±2.13% |      40 |
| draw 100 text lines (standard font) |    77.2 | 12.95ms | 18.66ms | ±2.80% |      39 |
| create 10 pages with mixed content  |    54.2 | 18.44ms | 24.44ms | ±3.05% |      28 |

- **draw 100 lines** is 1.16x faster than draw 100 rectangles
- **draw 100 lines** is 1.39x faster than draw 100 circles
- **draw 100 lines** is 1.44x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.04x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   317.4 |  3.15ms |  5.49ms | ±2.04% |     159 |
| get form fields   |   291.5 |  3.43ms |  7.97ms | ±4.35% |     146 |
| flatten form      |    81.5 | 12.28ms | 18.72ms | ±3.73% |      41 |
| fill text fields  |    60.7 | 16.47ms | 21.34ms | ±3.70% |      31 |

- **read field values** is 1.09x faster than get form fields
- **read field values** is 3.90x faster than flatten form
- **read field values** is 5.23x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   16.2K |   62us |  136us | ±1.60% |   8,080 |
| load medium PDF (19KB) |   10.2K |   99us |  187us | ±1.31% |   5,076 |
| load form PDF (116KB)  |   733.6 | 1.36ms | 2.42ms | ±2.04% |     367 |
| load heavy PDF (9.9MB) |   438.8 | 2.28ms | 2.94ms | ±0.99% |     220 |

- **load small PDF (888B)** is 1.59x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 22.03x faster than load form PDF (116KB)
- **load small PDF (888B)** is 36.82x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | ------: | -----: | ------: |
| save unmodified (19KB)             |    9.6K |  104us |   220us | ±1.40% |   4,797 |
| incremental save (19KB)            |    2.1K |  465us |  1.04ms | ±1.76% |   1,075 |
| save with modifications (19KB)     |   817.0 | 1.22ms |  2.65ms | ±2.65% |     409 |
| save heavy PDF (9.9MB)             |   423.0 | 2.36ms |  3.13ms | ±1.07% |     212 |
| incremental save heavy PDF (9.9MB) |   123.0 | 8.13ms | 12.56ms | ±3.04% |      62 |

- **save unmodified (19KB)** is 4.46x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.74x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 22.68x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 77.99x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   804.8 |  1.24ms |  2.63ms | ±4.18% |     404 |
| extractPages (1 page from 100-page PDF)  |   229.0 |  4.37ms |  5.42ms | ±1.45% |     115 |
| extractPages (1 page from 2000-page PDF) |    12.8 | 77.83ms | 87.02ms | ±4.21% |      10 |

- **extractPages (1 page from small PDF)** is 3.51x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 62.63x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.0 | 83.57ms | 92.02ms | ±4.70% |       7 |
| split 2000-page PDF (0.9MB) |   0.672 |   1.49s |   1.49s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.79x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.6 |  79.65ms |  82.05ms | ±1.78% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.3 | 107.84ms | 109.87ms | ±1.93% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.0 | 125.61ms | 136.96ms | ±9.79% |       4 |

- **extract first 10 pages from 2000-page PDF** is 1.35x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.58x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
