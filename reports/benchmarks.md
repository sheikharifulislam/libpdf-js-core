# Benchmark Report

> Generated on 2026-05-11 at 09:39:34 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.3.13

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
| libpdf    |   406.8 |  2.46ms |  3.09ms | ±1.29% |     204 |
| pdf-lib   |    25.9 | 38.54ms | 42.90ms | ±3.91% |      13 |

- **libpdf** is 15.68x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.8K |  92us |  183us | ±2.08% |   5,418 |
| pdf-lib   |    2.4K | 413us | 1.31ms | ±2.23% |   1,211 |

- **libpdf** is 4.48x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.7K | 176us |  558us | ±1.45% |   2,838 |
| pdf-lib   |    2.0K | 505us | 1.71ms | ±2.56% |     990 |

- **libpdf** is 2.87x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   617.2 | 1.62ms | 5.49ms | ±6.23% |     309 |
| libpdf    |   177.4 | 5.64ms | 7.85ms | ±1.51% |      89 |

- **pdf-lib** is 3.48x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   403.8 |  2.48ms |  3.28ms | ±1.41% |     202 |
| pdf-lib   |    11.6 | 86.11ms | 95.25ms | ±3.85% |      10 |

- **libpdf** is 34.77x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    15.2 | 65.98ms | 72.60ms | ±4.92% |      10 |
| pdf-lib   |    11.5 | 87.29ms | 93.64ms | ±2.95% |      10 |

- **libpdf** is 1.32x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   191.8 | 5.21ms |  8.28ms | ±3.38% |      96 |
| pdf-lib   |   101.3 | 9.87ms | 17.31ms | ±4.26% |      51 |

- **libpdf** is 1.89x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |    10.9 | 91.38ms |  96.29ms | ±4.52% |       6 |
| pdf-lib   |    10.9 | 91.73ms | 101.55ms | ±7.28% |       6 |

- **libpdf** is 1.00x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.650 | 1.54s | 1.54s | ±0.00% |       1 |
| pdf-lib   |   0.604 | 1.65s | 1.65s | ±0.00% |       1 |

- **libpdf** is 1.07x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   113.3 |  8.82ms | 10.68ms | ±2.04% |      57 |
| pdf-lib   |    81.9 | 12.21ms | 15.12ms | ±2.34% |      41 |

- **libpdf** is 1.38x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.5 | 54.03ms | 56.64ms | ±1.58% |      10 |
| libpdf    |    13.2 | 75.87ms | 82.47ms | ±4.88% |       7 |

- **pdf-lib** is 1.40x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   733.6 |  1.36ms |  3.31ms | ±3.57% |     367 |
| copy 10 pages from 100-page PDF |   118.3 |  8.45ms | 11.78ms | ±2.61% |      60 |
| copy all 100 pages              |    27.8 | 36.00ms | 39.22ms | ±1.67% |      14 |

- **copy 1 page** is 6.20x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 26.41x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   807.4 | 1.24ms | 2.20ms | ±1.67% |     404 |
| duplicate all pages (double the document) |   803.0 | 1.25ms | 2.16ms | ±1.77% |     402 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   537.2 |  1.86ms |  2.84ms | ±1.54% |     269 |
| merge 10 small PDFs     |   101.3 |  9.88ms | 15.00ms | ±2.75% |      51 |
| merge 2 x 100-page PDFs |    14.4 | 69.66ms | 76.62ms | ±3.43% |       8 |

- **merge 2 small PDFs** is 5.30x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 37.42x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   103.7 |  9.64ms | 11.68ms | ±1.21% |      52 |
| draw 100 rectangles                 |    87.9 | 11.38ms | 14.90ms | ±4.06% |      44 |
| draw 100 text lines (standard font) |    74.9 | 13.36ms | 15.95ms | ±1.48% |      38 |
| draw 100 circles                    |    73.7 | 13.56ms | 17.87ms | ±2.69% |      37 |
| create 10 pages with mixed content  |    53.8 | 18.59ms | 19.19ms | ±0.87% |      27 |

- **draw 100 lines** is 1.18x faster than draw 100 rectangles
- **draw 100 lines** is 1.39x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.41x faster than draw 100 circles
- **draw 100 lines** is 1.93x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   295.8 |  3.38ms |  5.14ms | ±1.85% |     148 |
| get form fields   |   265.9 |  3.76ms |  7.25ms | ±4.28% |     133 |
| flatten form      |    78.3 | 12.78ms | 17.29ms | ±3.23% |      40 |
| fill text fields  |    58.2 | 17.17ms | 21.61ms | ±3.33% |      30 |

- **read field values** is 1.11x faster than get form fields
- **read field values** is 3.78x faster than flatten form
- **read field values** is 5.08x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   15.4K |   65us |  149us | ±1.09% |   7,690 |
| load medium PDF (19KB) |    9.9K |  101us |  162us | ±0.91% |   4,952 |
| load form PDF (116KB)  |   692.3 | 1.44ms | 2.64ms | ±1.55% |     347 |
| load heavy PDF (9.9MB) |   424.7 | 2.35ms | 2.86ms | ±0.84% |     213 |

- **load small PDF (888B)** is 1.55x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 22.19x faster than load form PDF (116KB)
- **load small PDF (888B)** is 36.17x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.9K |  112us |   247us | ±1.07% |   4,456 |
| incremental save (19KB)            |    2.0K |  491us |   914us | ±1.20% |   1,018 |
| save with modifications (19KB)     |   776.4 | 1.29ms |  2.39ms | ±2.13% |     389 |
| save heavy PDF (9.9MB)             |   424.8 | 2.35ms |  4.73ms | ±2.37% |     213 |
| incremental save heavy PDF (9.9MB) |   170.2 | 5.88ms | 10.74ms | ±2.10% |      86 |

- **save unmodified (19KB)** is 4.38x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.48x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.98x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 52.37x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   752.5 |  1.33ms |  3.19ms | ±3.72% |     377 |
| extractPages (1 page from 100-page PDF)  |   209.6 |  4.77ms |  8.27ms | ±2.52% |     105 |
| extractPages (1 page from 2000-page PDF) |    13.3 | 75.10ms | 83.53ms | ±3.31% |      10 |

- **extractPages (1 page from small PDF)** is 3.59x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 56.51x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.3 | 88.55ms | 94.57ms | ±4.33% |       6 |
| split 2000-page PDF (0.9MB) |   0.686 |   1.46s |   1.46s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.46x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.6 |  79.36ms |  87.71ms | ±4.46% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.4 | 105.83ms | 107.84ms | ±1.77% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.2 | 121.52ms | 123.01ms | ±1.10% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.33x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.53x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
