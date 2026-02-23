# Benchmark Report

> Generated on 2026-02-23 at 07:06:01 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.3.9

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
| libpdf    |   389.6 |  2.57ms |  5.44ms | ±2.51% |     195 |
| pdf-lib   |    25.8 | 38.78ms | 45.08ms | ±3.92% |      13 |

- **libpdf** is 15.11x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.9K |  92us |  178us | ±2.73% |   5,445 |
| pdf-lib   |    2.4K | 423us | 1.51ms | ±2.38% |   1,181 |

- **libpdf** is 4.60x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.6K | 178us |  609us | ±1.61% |   2,808 |
| pdf-lib   |    1.9K | 520us | 1.94ms | ±2.82% |     962 |

- **libpdf** is 2.92x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   535.7 | 1.87ms | 7.45ms | ±7.89% |     269 |
| libpdf    |   163.9 | 6.10ms | 8.41ms | ±2.63% |      82 |

- **pdf-lib** is 3.27x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   357.6 |  2.80ms |  4.69ms | ±3.39% |     180 |
| pdf-lib   |    11.0 | 90.60ms | 98.50ms | ±3.53% |      10 |

- **libpdf** is 32.40x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    14.2 | 70.45ms | 75.96ms | ±4.81% |      10 |
| pdf-lib   |    11.4 | 87.93ms | 95.79ms | ±3.67% |      10 |

- **libpdf** is 1.25x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| libpdf    |   201.1 | 4.97ms | 6.25ms | ±2.45% |     101 |
| pdf-lib   |   111.4 | 8.98ms | 9.94ms | ±0.98% |      56 |

- **libpdf** is 1.81x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    11.6 | 86.05ms | 95.13ms | ±5.88% |       6 |
| libpdf    |    11.6 | 86.37ms | 89.52ms | ±3.48% |       6 |

- **pdf-lib** is 1.00x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.662 | 1.51s | 1.51s | ±0.00% |       1 |
| pdf-lib   |   0.608 | 1.64s | 1.64s | ±0.00% |       1 |

- **libpdf** is 1.09x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   112.8 |  8.87ms | 10.77ms | ±2.13% |      57 |
| pdf-lib   |    83.6 | 11.96ms | 13.99ms | ±1.64% |      42 |

- **libpdf** is 1.35x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.2 | 54.85ms | 59.97ms | ±2.49% |      10 |
| libpdf    |    13.4 | 74.39ms | 75.83ms | ±1.32% |       7 |

- **pdf-lib** is 1.36x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   745.3 |  1.34ms |  3.18ms | ±3.54% |     373 |
| copy 10 pages from 100-page PDF |   122.5 |  8.16ms |  9.72ms | ±1.61% |      62 |
| copy all 100 pages              |    28.1 | 35.59ms | 38.60ms | ±1.56% |      15 |

- **copy 1 page** is 6.08x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 26.52x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   811.3 | 1.23ms | 2.19ms | ±1.65% |     406 |
| duplicate all pages (double the document) |   805.5 | 1.24ms | 2.26ms | ±1.91% |     403 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   544.7 |  1.84ms |  2.68ms | ±1.37% |     273 |
| merge 10 small PDFs     |   101.6 |  9.85ms | 12.83ms | ±2.26% |      51 |
| merge 2 x 100-page PDFs |    14.7 | 67.89ms | 72.24ms | ±2.46% |       8 |

- **merge 2 small PDFs** is 5.36x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 36.98x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   105.2 |  9.51ms | 10.15ms | ±0.76% |      53 |
| draw 100 rectangles                 |    89.7 | 11.15ms | 14.38ms | ±3.62% |      45 |
| draw 100 circles                    |    76.1 | 13.13ms | 17.04ms | ±2.74% |      39 |
| draw 100 text lines (standard font) |    74.6 | 13.41ms | 19.30ms | ±2.60% |      38 |
| create 10 pages with mixed content  |    53.9 | 18.57ms | 22.94ms | ±2.12% |      27 |

- **draw 100 lines** is 1.17x faster than draw 100 rectangles
- **draw 100 lines** is 1.38x faster than draw 100 circles
- **draw 100 lines** is 1.41x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.95x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   286.8 |  3.49ms |  5.95ms | ±2.16% |     144 |
| get form fields   |   269.4 |  3.71ms |  6.56ms | ±3.41% |     135 |
| flatten form      |    78.3 | 12.78ms | 16.54ms | ±2.76% |      40 |
| fill text fields  |    57.3 | 17.46ms | 24.12ms | ±4.55% |      29 |

- **read field values** is 1.06x faster than get form fields
- **read field values** is 3.66x faster than flatten form
- **read field values** is 5.01x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   14.6K |   69us |  163us | ±1.25% |   7,284 |
| load medium PDF (19KB) |    9.8K |  102us |  134us | ±0.95% |   4,921 |
| load form PDF (116KB)  |   684.7 | 1.46ms | 2.60ms | ±1.71% |     343 |
| load heavy PDF (9.9MB) |   417.0 | 2.40ms | 2.99ms | ±0.77% |     209 |

- **load small PDF (888B)** is 1.48x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 21.27x faster than load form PDF (116KB)
- **load small PDF (888B)** is 34.93x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    9.0K |  111us |  247us | ±1.04% |   4,502 |
| incremental save (19KB)            |    2.1K |  488us |  907us | ±1.17% |   1,026 |
| save with modifications (19KB)     |   788.3 | 1.27ms | 2.48ms | ±2.25% |     395 |
| save heavy PDF (9.9MB)             |   428.5 | 2.33ms | 2.78ms | ±0.67% |     215 |
| incremental save heavy PDF (9.9MB) |   173.3 | 5.77ms | 6.69ms | ±0.83% |      87 |

- **save unmodified (19KB)** is 4.39x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.42x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 21.01x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 51.96x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   755.5 |  1.32ms |  3.13ms | ±3.61% |     378 |
| extractPages (1 page from 100-page PDF)  |   211.4 |  4.73ms |  7.20ms | ±2.19% |     106 |
| extractPages (1 page from 2000-page PDF) |    13.6 | 73.64ms | 78.93ms | ±2.66% |      10 |

- **extractPages (1 page from small PDF)** is 3.57x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 55.63x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.6 | 86.09ms | 88.48ms | ±2.35% |       6 |
| split 2000-page PDF (0.9MB) |   0.691 |   1.45s |   1.45s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.80x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    13.0 |  76.76ms |  78.16ms | ±1.52% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.5 | 105.07ms | 108.22ms | ±3.17% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.4 | 119.53ms | 121.29ms | ±1.41% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.37x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.56x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
