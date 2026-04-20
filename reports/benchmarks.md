# Benchmark Report

> Generated on 2026-04-20 at 08:08:27 UTC
>
> System: linux | Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores) | 16GB RAM | Bun 1.3.12

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
| libpdf    |   433.8 |  2.31ms |  3.22ms | ±1.28% |     217 |
| pdf-lib   |    25.2 | 39.66ms | 43.58ms | ±3.34% |      13 |

- **libpdf** is 17.21x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   11.2K |  89us |  174us | ±2.19% |   5,610 |
| pdf-lib   |    2.5K | 397us | 1.52ms | ±2.91% |   1,258 |

- **libpdf** is 4.46x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.6K | 178us |  537us | ±1.87% |   2,814 |
| pdf-lib   |    2.0K | 508us | 2.15ms | ±3.29% |     984 |

- **libpdf** is 2.86x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   576.8 | 1.73ms | 7.46ms | ±7.36% |     289 |
| libpdf    |   160.9 | 6.21ms | 9.98ms | ±3.76% |      81 |

- **pdf-lib** is 3.58x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   434.5 |  2.30ms |  3.27ms | ±1.42% |     218 |
| pdf-lib   |    11.8 | 85.00ms | 93.92ms | ±4.28% |      10 |

- **libpdf** is 36.93x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    13.8 | 72.65ms | 86.08ms | ±7.70% |      10 |
| pdf-lib   |    11.8 | 85.07ms | 93.74ms | ±3.94% |      10 |

- **libpdf** is 1.17x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   185.5 | 5.39ms | 13.68ms | ±5.08% |      93 |
| pdf-lib   |   107.3 | 9.32ms | 11.22ms | ±2.03% |      54 |

- **libpdf** is 1.73x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| pdf-lib   |    11.2 | 89.04ms |  93.52ms | ±3.09% |       6 |
| libpdf    |    10.1 | 98.96ms | 112.66ms | ±7.47% |       6 |

- **pdf-lib** is 1.11x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.625 | 1.60s | 1.60s | ±0.00% |       1 |
| pdf-lib   |   0.611 | 1.64s | 1.64s | ±0.00% |       1 |

- **libpdf** is 1.02x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   111.4 |  8.98ms | 12.89ms | ±3.23% |      56 |
| pdf-lib   |    82.4 | 12.14ms | 14.19ms | ±1.77% |      42 |

- **libpdf** is 1.35x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.2 | 55.07ms | 61.36ms | ±3.34% |      10 |
| libpdf    |    13.5 | 74.13ms | 83.72ms | ±5.74% |       7 |

- **pdf-lib** is 1.35x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   810.5 |  1.23ms |  2.77ms | ±3.38% |     406 |
| copy 10 pages from 100-page PDF |   126.7 |  7.89ms | 13.36ms | ±3.36% |      64 |
| copy all 100 pages              |    29.4 | 33.97ms | 40.93ms | ±3.81% |      15 |

- **copy 1 page** is 6.40x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 27.53x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   836.9 | 1.19ms | 2.41ms | ±2.38% |     420 |
| duplicate page 0                          |   822.8 | 1.22ms | 2.44ms | ±2.53% |     412 |

- **duplicate all pages (double the document)** is 1.02x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   567.1 |  1.76ms |  2.93ms | ±1.96% |     285 |
| merge 10 small PDFs     |   101.3 |  9.87ms | 16.91ms | ±4.81% |      51 |
| merge 2 x 100-page PDFs |    15.6 | 64.19ms | 67.42ms | ±2.14% |       8 |

- **merge 2 small PDFs** is 5.60x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 36.40x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   108.8 |  9.19ms | 12.36ms | ±1.73% |      55 |
| draw 100 rectangles                 |    85.5 | 11.69ms | 20.89ms | ±6.61% |      43 |
| draw 100 circles                    |    76.1 | 13.15ms | 18.26ms | ±2.96% |      39 |
| draw 100 text lines (standard font) |    74.5 | 13.42ms | 18.25ms | ±2.89% |      38 |
| create 10 pages with mixed content  |    53.8 | 18.58ms | 20.18ms | ±1.70% |      27 |

- **draw 100 lines** is 1.27x faster than draw 100 rectangles
- **draw 100 lines** is 1.43x faster than draw 100 circles
- **draw 100 lines** is 1.46x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.02x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   308.2 |  3.24ms |  5.55ms | ±2.27% |     155 |
| get form fields   |   285.0 |  3.51ms |  7.77ms | ±5.29% |     143 |
| flatten form      |    83.5 | 11.98ms | 13.55ms | ±1.89% |      42 |
| fill text fields  |    59.8 | 16.71ms | 22.03ms | ±4.48% |      31 |

- **read field values** is 1.08x faster than get form fields
- **read field values** is 3.69x faster than flatten form
- **read field values** is 5.15x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   15.4K |   65us |  132us | ±3.54% |   7,682 |
| load medium PDF (19KB) |    9.6K |  104us |  137us | ±4.52% |   4,814 |
| load form PDF (116KB)  |   733.9 | 1.36ms | 2.68ms | ±2.48% |     367 |
| load heavy PDF (9.9MB) |   447.4 | 2.24ms | 3.91ms | ±2.45% |     224 |

- **load small PDF (888B)** is 1.60x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.93x faster than load form PDF (116KB)
- **load small PDF (888B)** is 34.34x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.9K |  112us |   298us | ±2.48% |   4,467 |
| incremental save (19KB)            |    2.2K |  461us |   974us | ±1.65% |   1,085 |
| save with modifications (19KB)     |   823.4 | 1.21ms |  2.65ms | ±2.68% |     412 |
| save heavy PDF (9.9MB)             |   424.6 | 2.36ms |  3.67ms | ±1.92% |     213 |
| incremental save heavy PDF (9.9MB) |   117.8 | 8.49ms | 11.19ms | ±3.15% |      59 |

- **save unmodified (19KB)** is 4.12x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.85x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 21.04x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 75.86x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   806.8 |  1.24ms |  2.98ms | ±4.23% |     405 |
| extractPages (1 page from 100-page PDF)  |   223.7 |  4.47ms |  7.76ms | ±2.78% |     112 |
| extractPages (1 page from 2000-page PDF) |    13.2 | 75.85ms | 79.84ms | ±3.12% |      10 |

- **extractPages (1 page from small PDF)** is 3.61x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 61.20x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.9 | 84.15ms | 92.55ms | ±5.44% |       6 |
| split 2000-page PDF (0.9MB) |   0.671 |   1.49s |   1.49s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.71x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.8 |  77.98ms |  79.61ms | ±1.66% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.7 | 103.52ms | 105.79ms | ±2.81% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.5 | 118.31ms | 120.93ms | ±2.23% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.33x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.52x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
