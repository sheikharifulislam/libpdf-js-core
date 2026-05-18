# Benchmark Report

> Generated on 2026-05-18 at 10:04:11 UTC
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
| libpdf    |   347.5 |  2.88ms |  4.14ms | ±1.74% |     174 |
| pdf-lib   |    26.4 | 37.94ms | 44.11ms | ±3.52% |      14 |

- **libpdf** is 13.18x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.7K |  93us |  185us | ±2.47% |   5,362 |
| pdf-lib   |    2.4K | 413us | 1.42ms | ±2.43% |   1,212 |

- **libpdf** is 4.43x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.6K | 177us |  582us | ±1.59% |   2,821 |
| pdf-lib   |    1.9K | 529us | 2.04ms | ±3.09% |     946 |

- **libpdf** is 2.98x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   510.6 | 1.96ms | 7.72ms | ±8.57% |     256 |
| libpdf    |   156.4 | 6.39ms | 9.27ms | ±3.23% |      79 |

- **pdf-lib** is 3.27x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |   318.5 |  3.14ms |   5.94ms | ±4.06% |     160 |
| pdf-lib   |    10.9 | 91.69ms | 114.39ms | ±7.42% |      10 |

- **libpdf** is 29.20x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |    14.5 | 68.92ms |  77.90ms | ±5.22% |      10 |
| pdf-lib   |    11.0 | 90.88ms | 100.96ms | ±4.68% |      10 |

- **libpdf** is 1.32x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   187.7 | 5.33ms |  6.74ms | ±2.03% |      94 |
| pdf-lib   |   107.1 | 9.34ms | 11.22ms | ±2.01% |      54 |

- **libpdf** is 1.75x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    11.3 | 88.76ms | 93.97ms | ±3.26% |       6 |
| pdf-lib   |    11.1 | 89.83ms | 99.36ms | ±5.78% |       6 |

- **libpdf** is 1.01x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.628 | 1.59s | 1.59s | ±0.00% |       1 |
| pdf-lib   |   0.595 | 1.68s | 1.68s | ±0.00% |       1 |

- **libpdf** is 1.06x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   108.0 |  9.26ms | 12.33ms | ±2.27% |      55 |
| pdf-lib   |    82.7 | 12.10ms | 13.69ms | ±1.37% |      42 |

- **libpdf** is 1.31x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.3 | 54.58ms | 55.85ms | ±0.83% |      10 |
| libpdf    |    12.9 | 77.47ms | 78.98ms | ±0.99% |       7 |

- **pdf-lib** is 1.42x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   726.5 |  1.38ms |  2.76ms | ±3.43% |     364 |
| copy 10 pages from 100-page PDF |   115.9 |  8.63ms | 11.69ms | ±2.30% |      58 |
| copy all 100 pages              |    26.9 | 37.14ms | 38.60ms | ±0.90% |      14 |

- **copy 1 page** is 6.27x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 26.98x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   789.8 | 1.27ms | 2.40ms | ±1.78% |     395 |
| duplicate page 0                          |   762.8 | 1.31ms | 2.44ms | ±2.02% |     382 |

- **duplicate all pages (double the document)** is 1.04x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   502.5 |  1.99ms |  3.78ms | ±2.15% |     252 |
| merge 10 small PDFs     |    98.7 | 10.13ms | 11.12ms | ±1.46% |      50 |
| merge 2 x 100-page PDFs |    13.9 | 71.95ms | 76.35ms | ±2.72% |       7 |

- **merge 2 small PDFs** is 5.09x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 36.15x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |    96.1 | 10.40ms | 13.78ms | ±1.60% |      49 |
| draw 100 rectangles                 |    84.0 | 11.91ms | 15.62ms | ±3.64% |      42 |
| draw 100 circles                    |    72.1 | 13.87ms | 16.11ms | ±1.64% |      37 |
| draw 100 text lines (standard font) |    69.0 | 14.49ms | 18.72ms | ±3.28% |      35 |
| create 10 pages with mixed content  |    50.9 | 19.64ms | 20.82ms | ±1.18% |      26 |

- **draw 100 lines** is 1.15x faster than draw 100 rectangles
- **draw 100 lines** is 1.33x faster than draw 100 circles
- **draw 100 lines** is 1.39x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.89x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   291.5 |  3.43ms |  5.94ms | ±1.98% |     146 |
| get form fields   |   267.6 |  3.74ms |  6.72ms | ±3.43% |     134 |
| flatten form      |    77.2 | 12.95ms | 20.45ms | ±3.39% |      39 |
| fill text fields  |    56.0 | 17.87ms | 23.73ms | ±5.10% |      28 |

- **read field values** is 1.09x faster than get form fields
- **read field values** is 3.77x faster than flatten form
- **read field values** is 5.21x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   14.8K |   68us |  160us | ±1.50% |   7,401 |
| load medium PDF (19KB) |    9.8K |  102us |  155us | ±1.06% |   4,886 |
| load form PDF (116KB)  |   712.3 | 1.40ms | 2.53ms | ±1.66% |     357 |
| load heavy PDF (9.9MB) |   416.3 | 2.40ms | 2.94ms | ±0.84% |     209 |

- **load small PDF (888B)** is 1.52x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.78x faster than load form PDF (116KB)
- **load small PDF (888B)** is 35.56x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    8.7K |  115us |  272us | ±1.32% |   4,343 |
| incremental save (19KB)            |    2.0K |  508us |  966us | ±1.27% |     985 |
| save with modifications (19KB)     |   734.4 | 1.36ms | 2.81ms | ±2.52% |     368 |
| save heavy PDF (9.9MB)             |   426.4 | 2.35ms | 3.03ms | ±1.00% |     214 |
| incremental save heavy PDF (9.9MB) |   157.6 | 6.35ms | 7.26ms | ±1.24% |      79 |

- **save unmodified (19KB)** is 4.41x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.83x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.37x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 55.12x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   717.8 |  1.39ms |  3.24ms | ±3.46% |     359 |
| extractPages (1 page from 100-page PDF)  |   203.5 |  4.91ms |  8.04ms | ±2.40% |     102 |
| extractPages (1 page from 2000-page PDF) |    13.2 | 75.97ms | 79.95ms | ±2.12% |      10 |

- **extractPages (1 page from small PDF)** is 3.53x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 54.53x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.1 | 89.89ms | 94.49ms | ±4.19% |       6 |
| split 2000-page PDF (0.9MB) |   0.661 |   1.51s |   1.51s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.83x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.5 |  80.14ms |  81.29ms | ±0.82% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.3 | 107.31ms | 109.89ms | ±1.85% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.0 | 124.67ms | 125.50ms | ±0.80% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.34x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.56x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
