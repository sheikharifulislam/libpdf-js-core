# Benchmark Report

> Generated on 2026-04-06 at 07:44:25 UTC
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
| libpdf    |   384.1 |  2.60ms |  4.63ms | ±2.09% |     193 |
| pdf-lib   |    25.5 | 39.20ms | 43.04ms | ±3.23% |      13 |

- **libpdf** is 15.06x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.6K |  95us |  192us | ±2.65% |   5,288 |
| pdf-lib   |    2.4K | 414us | 1.42ms | ±2.37% |   1,208 |

- **libpdf** is 4.38x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.6K | 180us |  532us | ±1.48% |   2,779 |
| pdf-lib   |    1.9K | 522us | 1.90ms | ±2.80% |     958 |

- **libpdf** is 2.90x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   615.8 | 1.62ms | 5.71ms | ±5.96% |     308 |
| libpdf    |   167.1 | 5.99ms | 9.10ms | ±2.16% |      84 |

- **pdf-lib** is 3.69x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |   402.9 |  2.48ms |   3.27ms | ±1.26% |     202 |
| pdf-lib   |    11.5 | 87.32ms | 102.76ms | ±5.07% |      10 |

- **libpdf** is 35.18x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    14.3 | 70.06ms | 77.60ms | ±6.09% |      10 |
| pdf-lib   |    11.3 | 88.18ms | 91.38ms | ±2.30% |      10 |

- **libpdf** is 1.26x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   198.8 | 5.03ms |  7.45ms | ±2.29% |     100 |
| pdf-lib   |   107.8 | 9.28ms | 11.04ms | ±1.71% |      54 |

- **libpdf** is 1.84x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |    11.5 | 86.91ms |  90.14ms | ±2.95% |       6 |
| pdf-lib   |    11.2 | 89.56ms | 102.25ms | ±7.36% |       6 |

- **libpdf** is 1.03x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.655 | 1.53s | 1.53s | ±0.00% |       1 |
| pdf-lib   |   0.604 | 1.66s | 1.66s | ±0.00% |       1 |

- **libpdf** is 1.08x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   113.0 |  8.85ms | 11.74ms | ±2.32% |      57 |
| pdf-lib   |    82.6 | 12.10ms | 14.05ms | ±1.59% |      42 |

- **libpdf** is 1.37x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.2 | 55.07ms | 58.34ms | ±1.96% |      10 |
| libpdf    |    12.8 | 77.99ms | 82.29ms | ±2.87% |       7 |

- **pdf-lib** is 1.42x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   746.6 |  1.34ms |  3.04ms | ±3.32% |     374 |
| copy 10 pages from 100-page PDF |   114.2 |  8.75ms | 13.48ms | ±3.04% |      58 |
| copy all 100 pages              |    27.1 | 36.92ms | 38.22ms | ±1.13% |      14 |

- **copy 1 page** is 6.54x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 27.56x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   798.6 | 1.25ms | 2.31ms | ±1.98% |     400 |
| duplicate page 0                          |   793.0 | 1.26ms | 2.36ms | ±1.84% |     397 |

- **duplicate all pages (double the document)** is 1.01x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   531.8 |  1.88ms |  2.89ms | ±1.68% |     266 |
| merge 10 small PDFs     |   100.2 |  9.98ms | 13.84ms | ±2.09% |      51 |
| merge 2 x 100-page PDFs |    14.1 | 70.94ms | 71.87ms | ±0.78% |       8 |

- **merge 2 small PDFs** is 5.31x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 37.72x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |    96.8 | 10.33ms | 11.34ms | ±1.05% |      49 |
| draw 100 rectangles                 |    84.7 | 11.81ms | 15.97ms | ±3.78% |      43 |
| draw 100 circles                    |    72.3 | 13.84ms | 16.54ms | ±1.78% |      37 |
| draw 100 text lines (standard font) |    70.5 | 14.19ms | 16.35ms | ±1.47% |      36 |
| create 10 pages with mixed content  |    49.8 | 20.07ms | 23.82ms | ±1.91% |      25 |

- **draw 100 lines** is 1.14x faster than draw 100 rectangles
- **draw 100 lines** is 1.34x faster than draw 100 circles
- **draw 100 lines** is 1.37x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.94x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   293.6 |  3.41ms |  4.93ms | ±1.82% |     147 |
| get form fields   |   256.7 |  3.90ms |  9.07ms | ±4.65% |     129 |
| flatten form      |    77.3 | 12.94ms | 17.69ms | ±3.13% |      39 |
| fill text fields  |    55.7 | 17.96ms | 22.87ms | ±4.01% |      29 |

- **read field values** is 1.14x faster than get form fields
- **read field values** is 3.80x faster than flatten form
- **read field values** is 5.27x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   14.8K |   68us |  168us | ±1.53% |   7,396 |
| load medium PDF (19KB) |    9.7K |  103us |  190us | ±0.96% |   4,874 |
| load form PDF (116KB)  |   713.1 | 1.40ms | 2.53ms | ±1.69% |     357 |
| load heavy PDF (9.9MB) |   427.3 | 2.34ms | 2.97ms | ±1.03% |     214 |

- **load small PDF (888B)** is 1.52x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.74x faster than load form PDF (116KB)
- **load small PDF (888B)** is 34.61x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    8.8K |  114us |  269us | ±1.27% |   4,399 |
| incremental save (19KB)            |    1.9K |  513us | 1.01ms | ±1.40% |     974 |
| save with modifications (19KB)     |   762.7 | 1.31ms | 2.63ms | ±2.41% |     382 |
| save heavy PDF (9.9MB)             |   419.9 | 2.38ms | 3.33ms | ±1.52% |     211 |
| incremental save heavy PDF (9.9MB) |   162.8 | 6.14ms | 6.77ms | ±0.61% |      82 |

- **save unmodified (19KB)** is 4.51x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.52x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.93x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 53.97x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   727.1 |  1.38ms |  3.16ms | ±3.38% |     364 |
| extractPages (1 page from 100-page PDF)  |   210.0 |  4.76ms |  7.80ms | ±2.25% |     105 |
| extractPages (1 page from 2000-page PDF) |    13.4 | 74.65ms | 77.75ms | ±1.67% |      10 |

- **extractPages (1 page from small PDF)** is 3.46x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 54.28x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.2 | 88.91ms | 92.89ms | ±3.89% |       6 |
| split 2000-page PDF (0.9MB) |   0.681 |   1.47s |   1.47s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.51x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.8 |  77.83ms |  81.24ms | ±2.01% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.2 | 108.92ms | 119.09ms | ±7.08% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.2 | 122.47ms | 126.42ms | ±3.13% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.40x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.57x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
