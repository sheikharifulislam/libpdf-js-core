# Benchmark Report

> Generated on 2026-11-23 at 17:26:30 UTC
>
> System: linux | Intel(R) Xeon(R) 6975P-C (4 cores) | 15GB RAM | Bun 1.4.5
>
> Libraries: @libpdf/core 0.5.3 (this repo), pdf-lib 1.17.1, @cantoo/pdf-lib 2.9.1

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

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    81.3 |  12.29ms |  16.27ms | ±3.56% |      41 |
| @cantoo/pdf-lib |     5.6 | 178.13ms | 182.11ms | ±1.15% |      10 |
| pdf-lib         |     5.6 | 179.89ms | 182.95ms | ±0.70% |      10 |

- **libpdf** is 14.49x faster than @cantoo/pdf-lib
- **libpdf** is 14.63x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   19.3K |  52us |  188us | ±5.45% |   9,647 |
| pdf-lib         |    3.5K | 286us | 1.45ms | ±5.58% |   1,751 |
| @cantoo/pdf-lib |    3.3K | 302us | 1.60ms | ±5.77% |   1,658 |

- **libpdf** is 5.51x faster than pdf-lib
- **libpdf** is 5.83x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   13.7K |  73us |  105us | ±0.60% |   6,834 |
| @cantoo/pdf-lib |    2.7K | 377us | 1.69ms | ±5.54% |   1,328 |
| pdf-lib         |    2.5K | 405us | 1.84ms | ±6.20% |   1,242 |

- **libpdf** is 5.15x faster than @cantoo/pdf-lib
- **libpdf** is 5.53x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    4.7K |  213us |  415us | ±0.83% |   2,353 |
| pdf-lib         |   949.1 | 1.05ms | 6.20ms | ±6.70% |     475 |
| @cantoo/pdf-lib |   838.0 | 1.19ms | 7.39ms | ±8.13% |     419 |

- **libpdf** is 4.96x faster than pdf-lib
- **libpdf** is 5.61x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    83.7 |  11.95ms |  15.82ms | ±2.04% |      42 |
| pdf-lib         |     3.8 | 260.02ms | 271.13ms | ±2.56% |      10 |
| @cantoo/pdf-lib |     1.5 | 668.03ms | 700.17ms | ±2.54% |      10 |

- **libpdf** is 21.75x faster than pdf-lib
- **libpdf** is 55.88x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     4.3 | 234.87ms | 250.15ms | ±2.05% |      10 |
| pdf-lib         |     3.8 | 260.22ms | 269.20ms | ±1.59% |      10 |
| @cantoo/pdf-lib |     1.6 | 644.63ms | 672.20ms | ±2.20% |      10 |

- **libpdf** is 1.11x faster than pdf-lib
- **libpdf** is 2.74x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------------- | ------: | -----: | ------: | -----: | ------: |
| libpdf          |   438.3 | 2.28ms |  3.54ms | ±1.37% |     220 |
| pdf-lib         |   137.4 | 7.28ms |  9.96ms | ±2.51% |      69 |
| @cantoo/pdf-lib |   132.5 | 7.55ms | 11.40ms | ±3.15% |      67 |

- **libpdf** is 3.19x faster than pdf-lib
- **libpdf** is 3.31x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------------- | ------: | ------: | ------: | ------: | ------: |
| libpdf          |    45.1 | 22.15ms | 23.53ms |  ±0.92% |      23 |
| pdf-lib         |    15.5 | 64.60ms | 82.11ms | ±18.04% |       8 |
| @cantoo/pdf-lib |    15.0 | 66.75ms | 89.61ms | ±16.95% |       8 |

- **libpdf** is 2.92x faster than pdf-lib
- **libpdf** is 3.01x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     2.3 | 435.35ms | 435.35ms | ±0.00% |       1 |
| pdf-lib         |   0.874 |    1.14s |    1.14s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.813 |    1.23s |    1.23s | ±0.00% |       1 |

- **libpdf** is 2.63x faster than pdf-lib
- **libpdf** is 2.83x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   349.1 |  2.86ms |  3.76ms | ±0.83% |     175 |
| pdf-lib         |   102.5 |  9.76ms | 13.77ms | ±2.54% |      52 |
| @cantoo/pdf-lib |    89.7 | 11.14ms | 15.38ms | ±3.04% |      45 |

- **libpdf** is 3.41x faster than pdf-lib
- **libpdf** is 3.89x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   100.4 |  9.96ms | 11.46ms | ±0.91% |      51 |
| pdf-lib         |    21.7 | 46.04ms | 49.47ms | ±2.24% |      11 |
| @cantoo/pdf-lib |    18.0 | 55.58ms | 58.38ms | ±2.05% |       9 |

- **libpdf** is 4.62x faster than pdf-lib
- **libpdf** is 5.58x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    71.3 | 14.02ms | 27.35ms | ±6.17% |      36 |
| pdf-lib         |    45.6 | 21.92ms | 33.04ms | ±6.58% |      23 |
| @cantoo/pdf-lib |    43.3 | 23.09ms | 28.81ms | ±4.85% |      22 |

- **libpdf** is 1.56x faster than pdf-lib
- **libpdf** is 1.65x faster than @cantoo/pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    86.3 | 11.59ms | 14.30ms | ±2.03% |      44 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    40.8 | 24.54ms | 37.59ms | ±8.54% |      21 |

- **libpdf** is 2.12x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |    p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | -----: | -----: | ------: |
| copy 1 page                     |    1.6K |  607us | 1.07ms | ±1.40% |     824 |
| copy 10 pages from 100-page PDF |   353.3 | 2.83ms | 4.13ms | ±1.06% |     177 |
| copy all 100 pages              |   197.9 | 5.05ms | 7.84ms | ±1.75% |      99 |

- **copy 1 page** is 4.66x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 8.33x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |    1.7K | 597us |  821us | ±0.44% |     839 |
| duplicate page 0                          |    1.6K | 608us | 1.04ms | ±0.77% |     823 |

- **duplicate all pages (double the document)** is 1.02x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------- | ------: | -----: | -----: | -----: | ------: |
| merge 2 small PDFs      |    1.1K |  937us | 1.22ms | ±0.52% |     534 |
| merge 10 small PDFs     |   195.8 | 5.11ms | 5.73ms | ±0.64% |      98 |
| merge 2 x 100-page PDFs |   106.9 | 9.35ms | 9.74ms | ±0.61% |      54 |

- **merge 2 small PDFs** is 5.45x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.98x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    3.1K |  327us |  640us | ±1.04% |   1,530 |
| draw 100 rectangles                 |    2.8K |  360us |  695us | ±1.16% |   1,389 |
| draw 100 circles                    |    1.5K |  648us | 1.19ms | ±1.28% |     772 |
| create 10 pages with mixed content  |    1.1K |  913us | 1.50ms | ±1.23% |     548 |
| draw 100 text lines (standard font) |   990.9 | 1.01ms | 1.53ms | ±0.95% |     496 |

- **draw 100 lines** is 1.10x faster than draw 100 rectangles
- **draw 100 lines** is 1.98x faster than draw 100 circles
- **draw 100 lines** is 2.79x faster than create 10 pages with mixed content
- **draw 100 lines** is 3.09x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------- | ------: | -----: | -----: | -----: | ------: |
| read field values |   544.5 | 1.84ms | 3.03ms | ±1.98% |     273 |
| get form fields   |   539.1 | 1.85ms | 2.88ms | ±1.42% |     270 |
| flatten form      |   189.1 | 5.29ms | 8.22ms | ±1.82% |      95 |
| fill text fields  |   137.2 | 7.29ms | 9.11ms | ±1.58% |      69 |

- **read field values** is 1.01x faster than get form fields
- **read field values** is 2.88x faster than flatten form
- **read field values** is 3.97x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   29.9K |    33us |    55us | ±0.39% |  14,928 |
| load medium PDF (19KB) |   17.1K |    58us |    78us | ±0.33% |   8,549 |
| load form PDF (116KB)  |    1.1K |   898us |  1.63ms | ±2.75% |     557 |
| load heavy PDF (2.0MB) |    79.4 | 12.59ms | 15.78ms | ±2.98% |      40 |

- **load small PDF (888B)** is 1.75x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 26.81x faster than load form PDF (116KB)
- **load small PDF (888B)** is 375.95x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   17.1K |    58us |    97us | ±0.42% |   8,557 |
| incremental save (19KB)            |   11.1K |    90us |   173us | ±1.69% |   5,545 |
| save with modifications (19KB)     |    2.0K |   491us |   831us | ±1.11% |   1,020 |
| save heavy PDF (2.0MB)             |    80.6 | 12.40ms | 19.42ms | ±3.24% |      41 |
| incremental save heavy PDF (2.0MB) |    70.5 | 14.18ms | 21.83ms | ±4.53% |      36 |

- **save unmodified (19KB)** is 1.54x faster than incremental save (19KB)
- **save unmodified (19KB)** is 8.39x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 212.20x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 242.72x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.7K |   595us |  1.06ms | ±1.26% |     841 |
| extractPages (1 page from 100-page PDF)  |   442.6 |  2.26ms |  3.48ms | ±1.15% |     222 |
| extractPages (1 page from 2000-page PDF) |    29.3 | 34.12ms | 36.43ms | ±1.29% |      15 |

- **extractPages (1 page from small PDF)** is 3.80x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 57.35x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    43.1 |  23.20ms |  36.73ms | ±8.08% |      22 |
| split 2000-page PDF (0.9MB) |     2.3 | 436.77ms | 436.77ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 18.82x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    29.0 | 34.51ms | 35.89ms | ±1.05% |      15 |
| extract first 100 pages from 2000-page PDF             |    26.9 | 37.14ms | 38.22ms | ±0.95% |      14 |
| extract every 10th page from 2000-page PDF (200 pages) |    23.9 | 41.89ms | 58.91ms | ±8.20% |      12 |

- **extract first 10 pages from 2000-page PDF** is 1.08x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.21x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
