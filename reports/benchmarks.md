# Benchmark Report

> Generated on 2026-07-13 at 09:29:07 UTC
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

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    62.2 |  16.09ms |  18.79ms | ±1.74% |      32 |
| pdf-lib   |     4.4 | 225.51ms | 234.81ms | ±1.80% |      10 |

- **libpdf** is 14.02x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    9.3K | 108us |  231us | ±2.32% |   4,639 |
| pdf-lib   |    2.8K | 360us | 1.64ms | ±3.32% |   1,391 |

- **libpdf** is 3.34x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.7K | 174us |  612us | ±1.67% |   2,869 |
| pdf-lib   |    2.3K | 443us | 1.94ms | ±3.39% |   1,128 |

- **libpdf** is 2.54x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   676.0 | 1.48ms | 6.21ms | ±7.54% |     341 |
| libpdf    |   210.9 | 4.74ms | 7.77ms | ±3.58% |     106 |

- **pdf-lib** is 3.20x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    59.5 |  16.81ms |  20.18ms | ±2.38% |      30 |
| pdf-lib   |     3.0 | 331.93ms | 348.20ms | ±2.01% |      10 |

- **libpdf** is 19.74x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    28.7 |  34.88ms |  38.94ms | ±2.12% |      15 |
| pdf-lib   |     3.1 | 325.84ms | 339.03ms | ±1.59% |      10 |

- **libpdf** is 9.34x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   177.8 | 5.62ms |  8.25ms | ±2.65% |      89 |
| pdf-lib   |   103.4 | 9.67ms | 12.22ms | ±2.09% |      52 |

- **libpdf** is 1.72x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    13.2 | 75.57ms | 78.77ms | ±3.34% |       7 |
| libpdf    |    12.8 | 77.88ms | 80.13ms | ±1.73% |       7 |

- **pdf-lib** is 1.03x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.721 | 1.39s | 1.39s | ±0.00% |       1 |
| libpdf    |   0.705 | 1.42s | 1.42s | ±0.00% |       1 |

- **pdf-lib** is 1.02x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   113.6 |  8.80ms | 10.83ms | ±2.73% |      57 |
| pdf-lib   |    81.1 | 12.33ms | 13.37ms | ±1.26% |      41 |

- **libpdf** is 1.40x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.3 | 54.75ms | 55.29ms | ±0.67% |      10 |
| libpdf    |    16.2 | 61.58ms | 63.18ms | ±1.90% |       9 |

- **pdf-lib** is 1.12x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   737.9 |  1.36ms |  3.64ms | ±3.44% |     369 |
| copy 10 pages from 100-page PDF |   125.5 |  7.97ms | 11.06ms | ±2.25% |      63 |
| copy all 100 pages              |    31.8 | 31.48ms | 41.09ms | ±4.53% |      16 |

- **copy 1 page** is 5.88x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 23.23x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   807.3 | 1.24ms | 2.46ms | ±1.95% |     404 |
| duplicate all pages (double the document) |   802.0 | 1.25ms | 2.42ms | ±1.91% |     402 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   531.6 |  1.88ms |  3.13ms | ±1.78% |     266 |
| merge 10 small PDFs     |    95.5 | 10.47ms | 13.17ms | ±2.20% |      48 |
| merge 2 x 100-page PDFs |    17.5 | 57.01ms | 58.21ms | ±0.93% |       9 |

- **merge 2 small PDFs** is 5.56x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 30.31x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   124.5 |  8.03ms | 12.11ms | ±2.03% |      63 |
| draw 100 rectangles                 |   106.9 |  9.36ms | 17.80ms | ±5.55% |      54 |
| draw 100 circles                    |    92.9 | 10.76ms | 14.56ms | ±2.21% |      47 |
| draw 100 text lines (standard font) |    85.3 | 11.72ms | 16.78ms | ±2.69% |      43 |
| create 10 pages with mixed content  |    63.2 | 15.83ms | 21.26ms | ±3.23% |      32 |

- **draw 100 lines** is 1.16x faster than draw 100 rectangles
- **draw 100 lines** is 1.34x faster than draw 100 circles
- **draw 100 lines** is 1.46x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.97x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   289.1 |  3.46ms |  6.12ms | ±2.20% |     145 |
| get form fields   |   257.6 |  3.88ms |  7.43ms | ±3.63% |     129 |
| flatten form      |    79.0 | 12.66ms | 16.15ms | ±2.63% |      40 |
| fill text fields  |    61.4 | 16.29ms | 18.55ms | ±2.67% |      31 |

- **read field values** is 1.12x faster than get form fields
- **read field values** is 3.66x faster than flatten form
- **read field values** is 4.71x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   13.1K |    76us |   229us | ±2.09% |   6,564 |
| load medium PDF (19KB) |    9.8K |   102us |   143us | ±1.18% |   4,893 |
| load form PDF (116KB)  |   693.3 |  1.44ms |  2.55ms | ±1.76% |     347 |
| load heavy PDF (2.0MB) |    68.8 | 14.53ms | 16.23ms | ±1.80% |      35 |

- **load small PDF (888B)** is 1.34x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.94x faster than load form PDF (116KB)
- **load small PDF (888B)** is 190.79x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.1K |   123us |   307us | ±1.68% |   4,052 |
| incremental save (19KB)            |    2.3K |   435us |   923us | ±1.55% |   1,150 |
| save with modifications (19KB)     |   803.8 |  1.24ms |  2.65ms | ±2.51% |     402 |
| save heavy PDF (2.0MB)             |    69.0 | 14.50ms | 16.43ms | ±2.19% |      35 |
| incremental save heavy PDF (2.0MB) |    60.0 | 16.68ms | 22.26ms | ±3.65% |      30 |

- **save unmodified (19KB)** is 3.53x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.08x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 117.45x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 135.14x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   721.9 |  1.39ms |  3.36ms | ±3.32% |     361 |
| extractPages (1 page from 100-page PDF)  |   207.7 |  4.81ms |  5.92ms | ±1.60% |     104 |
| extractPages (1 page from 2000-page PDF) |    12.2 | 81.87ms | 85.89ms | ±1.98% |      10 |

- **extractPages (1 page from small PDF)** is 3.48x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 59.10x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.2 | 82.07ms | 86.20ms | ±2.51% |       7 |
| split 2000-page PDF (0.9MB) |   0.714 |   1.40s |   1.40s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.06x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    11.7 |  85.66ms |  88.93ms | ±3.05% |       6 |
| extract first 100 pages from 2000-page PDF             |     9.2 | 108.65ms | 112.13ms | ±3.80% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.1 | 122.94ms | 126.66ms | ±3.17% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.27x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.44x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
