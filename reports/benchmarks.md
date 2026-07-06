# Benchmark Report

> Generated on 2026-07-06 at 10:21:19 UTC
>
> System: linux | Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores) | 16GB RAM | Bun 1.3.14

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
| libpdf    |   436.2 |  2.29ms |  3.18ms | ±1.60% |     219 |
| pdf-lib   |    25.9 | 38.62ms | 43.42ms | ±2.86% |      13 |

- **libpdf** is 16.85x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   11.6K |  86us |  189us | ±1.61% |   5,800 |
| pdf-lib   |    2.8K | 355us | 1.35ms | ±2.53% |   1,408 |

- **libpdf** is 4.12x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.0K | 166us |  539us | ±1.61% |   3,021 |
| pdf-lib   |    2.1K | 482us | 2.11ms | ±3.44% |   1,037 |

- **libpdf** is 2.91x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   643.8 | 1.55ms | 5.91ms | ±7.10% |     322 |
| libpdf    |   198.4 | 5.04ms | 6.53ms | ±2.54% |     100 |

- **pdf-lib** is 3.25x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   440.0 |  2.27ms |  3.75ms | ±1.75% |     220 |
| pdf-lib   |    12.8 | 77.88ms | 87.81ms | ±4.91% |      10 |

- **libpdf** is 34.27x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    14.1 | 70.92ms | 76.24ms | ±4.96% |      10 |
| pdf-lib   |    13.0 | 76.82ms | 80.43ms | ±2.88% |      10 |

- **libpdf** is 1.08x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   208.7 | 4.79ms |  5.94ms | ±2.11% |     105 |
| pdf-lib   |   110.0 | 9.09ms | 16.06ms | ±3.39% |      56 |

- **libpdf** is 1.90x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    12.5 | 79.91ms | 81.59ms | ±1.22% |       7 |
| pdf-lib   |    12.4 | 80.97ms | 93.22ms | ±6.63% |       7 |

- **libpdf** is 1.01x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.692 | 1.45s | 1.45s | ±0.00% |       1 |
| libpdf    |   0.689 | 1.45s | 1.45s | ±0.00% |       1 |

- **pdf-lib** is 1.00x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   124.9 |  8.01ms |  9.40ms | ±2.15% |      63 |
| pdf-lib   |    87.0 | 11.50ms | 12.39ms | ±1.32% |      44 |

- **libpdf** is 1.44x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.9 | 52.83ms | 57.77ms | ±2.57% |      10 |
| libpdf    |    16.2 | 61.68ms | 63.74ms | ±1.70% |       9 |

- **pdf-lib** is 1.17x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   844.7 |  1.18ms |  2.65ms | ±3.27% |     423 |
| copy 10 pages from 100-page PDF |   136.6 |  7.32ms |  9.91ms | ±2.53% |      69 |
| copy all 100 pages              |    34.0 | 29.41ms | 30.76ms | ±1.42% |      17 |

- **copy 1 page** is 6.18x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 24.84x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   890.8 | 1.12ms | 2.30ms | ±2.10% |     446 |
| duplicate all pages (double the document) |   886.5 | 1.13ms | 2.33ms | ±2.05% |     444 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   597.8 |  1.67ms |  2.84ms | ±1.92% |     299 |
| merge 10 small PDFs     |   110.9 |  9.02ms | 10.73ms | ±1.99% |      56 |
| merge 2 x 100-page PDFs |    17.9 | 55.89ms | 57.94ms | ±1.39% |       9 |

- **merge 2 small PDFs** is 5.39x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 33.41x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   128.6 |  7.78ms | 11.87ms | ±2.81% |      65 |
| draw 100 rectangles                 |   105.2 |  9.50ms | 17.41ms | ±5.20% |      53 |
| draw 100 circles                    |    91.5 | 10.93ms | 14.09ms | ±2.23% |      46 |
| draw 100 text lines (standard font) |    86.5 | 11.56ms | 16.25ms | ±2.42% |      44 |
| create 10 pages with mixed content  |    63.7 | 15.69ms | 19.06ms | ±2.16% |      32 |

- **draw 100 lines** is 1.22x faster than draw 100 rectangles
- **draw 100 lines** is 1.41x faster than draw 100 circles
- **draw 100 lines** is 1.49x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.02x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   331.9 |  3.01ms |  4.13ms | ±1.68% |     166 |
| get form fields   |   304.6 |  3.28ms |  6.41ms | ±3.67% |     153 |
| flatten form      |    87.4 | 11.44ms | 13.42ms | ±1.83% |      44 |
| fill text fields  |    64.7 | 15.45ms | 19.84ms | ±3.66% |      33 |

- **read field values** is 1.09x faster than get form fields
- **read field values** is 3.80x faster than flatten form
- **read field values** is 5.13x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   17.0K |   59us |  125us | ±1.41% |   8,482 |
| load medium PDF (19KB) |   10.8K |   93us |  143us | ±1.13% |   5,405 |
| load form PDF (116KB)  |   751.3 | 1.33ms | 2.51ms | ±2.02% |     376 |
| load heavy PDF (9.9MB) |   466.7 | 2.14ms | 2.77ms | ±0.92% |     234 |

- **load small PDF (888B)** is 1.57x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 22.58x faster than load form PDF (116KB)
- **load small PDF (888B)** is 36.35x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |   10.0K |  100us |  220us | ±1.37% |   5,020 |
| incremental save (19KB)            |    2.3K |  441us | 1.06ms | ±1.79% |   1,135 |
| save with modifications (19KB)     |   885.5 | 1.13ms | 2.44ms | ±2.43% |     443 |
| save heavy PDF (9.9MB)             |   466.6 | 2.14ms | 2.85ms | ±1.29% |     234 |
| incremental save heavy PDF (9.9MB) |   128.6 | 7.78ms | 8.45ms | ±1.21% |      65 |

- **save unmodified (19KB)** is 4.42x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.34x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 21.51x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 78.07x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   844.0 |  1.18ms |  2.94ms | ±3.54% |     422 |
| extractPages (1 page from 100-page PDF)  |   238.0 |  4.20ms |  5.12ms | ±1.65% |     120 |
| extractPages (1 page from 2000-page PDF) |    13.9 | 72.11ms | 74.21ms | ±1.81% |      10 |

- **extractPages (1 page from small PDF)** is 3.55x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 60.86x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.5 | 79.90ms | 86.63ms | ±3.49% |       7 |
| split 2000-page PDF (0.9MB) |   0.697 |   1.43s |   1.43s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.96x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    13.0 |  76.68ms |  78.50ms | ±2.52% |       7 |
| extract first 100 pages from 2000-page PDF             |    10.2 |  98.44ms | 100.77ms | ±2.33% |       6 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.8 | 113.46ms | 121.75ms | ±5.21% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.28x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.48x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
