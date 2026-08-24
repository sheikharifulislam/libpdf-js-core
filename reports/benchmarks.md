# Benchmark Report

> Generated on 2026-08-24 at 06:57:24 UTC
>
> System: linux | Intel(R) Xeon(R) 6973P-C (4 cores) | 16GB RAM | Bun 1.4.0

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
| libpdf    |    94.3 |  10.60ms |  12.36ms | ±1.71% |      48 |
| pdf-lib   |     5.3 | 189.16ms | 193.49ms | ±0.97% |      10 |

- **libpdf** is 17.84x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   15.7K |  64us |  152us | ±2.11% |   7,833 |
| pdf-lib   |    4.1K | 241us | 1.39ms | ±3.13% |   2,075 |

- **libpdf** is 3.78x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    8.2K | 122us |  552us | ±2.34% |   4,084 |
| pdf-lib   |    2.9K | 347us | 1.67ms | ±4.02% |   1,441 |

- **libpdf** is 2.83x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |    1.0K |  981us | 4.65ms | ±6.80% |     510 |
| libpdf    |   297.5 | 3.36ms | 5.41ms | ±3.16% |     149 |

- **pdf-lib** is 3.43x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    93.6 |  10.68ms |  19.25ms | ±4.70% |      47 |
| pdf-lib   |     3.8 | 265.01ms | 271.89ms | ±1.23% |      10 |

- **libpdf** is 24.81x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    41.8 |  23.92ms |  25.84ms | ±1.58% |      21 |
| pdf-lib   |     3.8 | 264.76ms | 273.76ms | ±1.36% |      10 |

- **libpdf** is 11.07x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| libpdf    |   289.3 | 3.46ms | 4.89ms | ±2.35% |     145 |
| pdf-lib   |   134.1 | 7.46ms | 9.32ms | ±1.61% |      68 |

- **libpdf** is 2.16x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    16.6 | 60.41ms | 66.99ms | ±4.79% |       9 |
| libpdf    |    15.2 | 65.87ms | 68.54ms | ±2.52% |       8 |

- **pdf-lib** is 1.09x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| pdf-lib   |     1.0 | 972.62ms | 972.62ms | ±0.00% |       1 |
| libpdf    |   0.919 |    1.09s |    1.09s | ±0.00% |       1 |

- **pdf-lib** is 1.12x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   180.5 | 5.54ms |  7.98ms | ±2.94% |      91 |
| pdf-lib   |   102.0 | 9.81ms | 11.09ms | ±1.40% |      51 |

- **libpdf** is 1.77x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    25.4 | 39.40ms | 42.05ms | ±2.27% |      13 |
| pdf-lib   |    20.6 | 48.54ms | 51.59ms | ±1.79% |      11 |

- **libpdf** is 1.23x faster than pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |    1.3K |   751us |  1.60ms | ±2.49% |     666 |
| copy 10 pages from 100-page PDF |   198.5 |  5.04ms |  6.64ms | ±2.98% |     100 |
| copy all 100 pages              |    51.8 | 19.32ms | 20.50ms | ±1.01% |      26 |

- **copy 1 page** is 6.71x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 25.73x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.3K | 743us | 2.06ms | ±2.41% |     673 |
| duplicate all pages (double the document) |    1.3K | 750us | 2.21ms | ±2.57% |     667 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   898.7 |  1.11ms |  2.26ms | ±2.24% |     450 |
| merge 10 small PDFs     |   170.3 |  5.87ms |  7.62ms | ±2.10% |      86 |
| merge 2 x 100-page PDFs |    26.8 | 37.29ms | 38.67ms | ±1.38% |      14 |

- **merge 2 small PDFs** is 5.28x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 33.52x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   194.4 |  5.14ms |  7.28ms | ±1.43% |      98 |
| draw 100 rectangles                 |   174.6 |  5.73ms | 10.06ms | ±2.96% |      88 |
| draw 100 circles                    |   136.1 |  7.35ms |  9.58ms | ±1.97% |      69 |
| draw 100 text lines (standard font) |   126.4 |  7.91ms | 10.92ms | ±1.74% |      64 |
| create 10 pages with mixed content  |    92.9 | 10.76ms | 12.73ms | ±2.33% |      47 |

- **draw 100 lines** is 1.11x faster than draw 100 rectangles
- **draw 100 lines** is 1.43x faster than draw 100 circles
- **draw 100 lines** is 1.54x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.09x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |   Mean |     p99 |    RME | Samples |
| :---------------- | ------: | -----: | ------: | -----: | ------: |
| read field values |   495.7 | 2.02ms |  2.62ms | ±1.27% |     248 |
| get form fields   |   455.2 | 2.20ms |  4.42ms | ±3.30% |     228 |
| flatten form      |   123.7 | 8.08ms | 11.58ms | ±2.55% |      62 |
| fill text fields  |   100.8 | 9.92ms | 12.78ms | ±2.69% |      51 |

- **read field values** is 1.09x faster than get form fields
- **read field values** is 4.01x faster than flatten form
- **read field values** is 4.92x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | -----: | ------: | -----: | ------: |
| load small PDF (888B)  |   28.3K |   35us |    70us | ±1.29% |  14,130 |
| load medium PDF (19KB) |   18.0K |   55us |    77us | ±0.86% |   9,014 |
| load form PDF (116KB)  |    1.2K |  864us |  1.45ms | ±1.35% |     579 |
| load heavy PDF (2.0MB) |   105.1 | 9.51ms | 11.09ms | ±1.57% |      53 |

- **load small PDF (888B)** is 1.57x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 24.40x faster than load form PDF (116KB)
- **load small PDF (888B)** is 268.79x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   17.4K |    58us |   104us | ±0.98% |   8,677 |
| incremental save (19KB)            |    4.2K |   240us |   597us | ±1.44% |   2,081 |
| save with modifications (19KB)     |    1.4K |   708us |  1.60ms | ±2.05% |     707 |
| save heavy PDF (2.0MB)             |   112.8 |  8.86ms |  9.34ms | ±0.82% |      57 |
| incremental save heavy PDF (2.0MB) |    91.4 | 10.94ms | 11.85ms | ±0.93% |      46 |

- **save unmodified (19KB)** is 4.17x faster than incremental save (19KB)
- **save unmodified (19KB)** is 12.28x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 153.78x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 189.92x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.3K |   763us |  1.61ms | ±2.49% |     656 |
| extractPages (1 page from 100-page PDF)  |   333.9 |  3.00ms |  4.08ms | ±1.55% |     167 |
| extractPages (1 page from 2000-page PDF) |    20.6 | 48.60ms | 51.21ms | ±1.93% |      11 |

- **extractPages (1 page from small PDF)** is 3.92x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 63.68x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    17.3 | 57.93ms | 61.51ms | ±2.11% |       9 |
| split 2000-page PDF (0.9MB) |   0.968 |   1.03s |   1.03s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.83x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    19.0 | 52.52ms | 54.97ms | ±2.16% |      10 |
| extract first 100 pages from 2000-page PDF             |    13.2 | 76.01ms | 84.23ms | ±7.65% |       7 |
| extract every 10th page from 2000-page PDF (200 pages) |    13.0 | 77.15ms | 82.93ms | ±4.12% |       7 |

- **extract first 10 pages from 2000-page PDF** is 1.45x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.47x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
