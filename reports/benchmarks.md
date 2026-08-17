# Benchmark Report

> Generated on 2026-08-17 at 06:54:32 UTC
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
| libpdf    |    61.8 |  16.18ms |  19.77ms | ±2.71% |      31 |
| pdf-lib   |     4.6 | 216.61ms | 222.33ms | ±1.13% |      10 |

- **libpdf** is 13.39x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.7K |  94us |  205us | ±1.72% |   5,342 |
| pdf-lib   |    2.9K | 344us | 1.25ms | ±2.42% |   1,454 |

- **libpdf** is 3.67x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.9K | 169us |  619us | ±1.78% |   2,954 |
| pdf-lib   |    2.2K | 455us | 1.73ms | ±4.16% |   1,098 |

- **libpdf** is 2.69x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   667.4 | 1.50ms | 6.40ms | ±7.71% |     334 |
| libpdf    |   251.4 | 3.98ms | 6.74ms | ±2.81% |     126 |

- **pdf-lib** is 2.65x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    59.1 |  16.93ms |  30.08ms | ±7.68% |      30 |
| pdf-lib   |     3.2 | 313.41ms | 323.10ms | ±0.99% |      10 |

- **libpdf** is 18.51x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    29.6 |  33.79ms |  36.74ms | ±2.08% |      15 |
| pdf-lib   |     3.2 | 309.45ms | 320.31ms | ±1.10% |      10 |

- **libpdf** is 9.16x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   194.6 | 5.14ms |  8.64ms | ±2.67% |      98 |
| pdf-lib   |   115.0 | 8.70ms | 10.30ms | ±1.19% |      58 |

- **libpdf** is 1.69x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    14.3 | 69.89ms | 73.86ms | ±3.24% |       8 |
| libpdf    |    14.0 | 71.23ms | 72.34ms | ±1.23% |       8 |

- **pdf-lib** is 1.02x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.769 | 1.30s | 1.30s | ±0.00% |       1 |
| libpdf    |   0.759 | 1.32s | 1.32s | ±0.00% |       1 |

- **pdf-lib** is 1.01x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   126.8 |  7.89ms |  9.67ms | ±2.20% |      64 |
| pdf-lib   |    87.3 | 11.46ms | 13.54ms | ±1.53% |      44 |

- **libpdf** is 1.45x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    19.3 | 51.78ms | 53.91ms | ±1.57% |      10 |
| pdf-lib   |    19.3 | 51.88ms | 53.16ms | ±0.88% |      10 |

- **libpdf** is 1.00x faster than pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   730.9 |  1.37ms |  3.21ms | ±3.60% |     366 |
| copy 10 pages from 100-page PDF |   130.7 |  7.65ms | 10.22ms | ±2.49% |      66 |
| copy all 100 pages              |    36.4 | 27.50ms | 29.74ms | ±1.51% |      19 |

- **copy 1 page** is 5.59x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 20.10x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   830.1 | 1.20ms | 2.16ms | ±1.62% |     416 |
| duplicate all pages (double the document) |   828.3 | 1.21ms | 2.18ms | ±1.79% |     415 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   553.7 |  1.81ms |  2.71ms | ±1.38% |     277 |
| merge 10 small PDFs     |   104.3 |  9.59ms | 11.03ms | ±1.42% |      53 |
| merge 2 x 100-page PDFs |    20.0 | 50.03ms | 51.43ms | ±0.84% |      10 |

- **merge 2 small PDFs** is 5.31x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 27.70x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   147.8 |  6.77ms | 10.59ms | ±2.17% |      74 |
| draw 100 rectangles                 |   118.6 |  8.43ms | 16.48ms | ±4.71% |      60 |
| draw 100 circles                    |   104.6 |  9.56ms | 12.91ms | ±1.81% |      53 |
| draw 100 text lines (standard font) |    96.2 | 10.39ms | 13.51ms | ±1.96% |      49 |
| create 10 pages with mixed content  |    72.8 | 13.75ms | 14.69ms | ±1.08% |      37 |

- **draw 100 lines** is 1.25x faster than draw 100 rectangles
- **draw 100 lines** is 1.41x faster than draw 100 circles
- **draw 100 lines** is 1.54x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.03x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   304.5 |  3.28ms |  5.73ms | ±2.08% |     153 |
| get form fields   |   273.2 |  3.66ms |  7.97ms | ±4.15% |     137 |
| flatten form      |    86.7 | 11.53ms | 12.90ms | ±1.52% |      44 |
| fill text fields  |    64.5 | 15.50ms | 18.23ms | ±2.33% |      33 |

- **read field values** is 1.11x faster than get form fields
- **read field values** is 3.51x faster than flatten form
- **read field values** is 4.72x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   14.1K |    71us |   193us | ±2.68% |   7,060 |
| load medium PDF (19KB) |    9.7K |   103us |   146us | ±0.85% |   4,849 |
| load form PDF (116KB)  |   731.7 |  1.37ms |  2.37ms | ±1.41% |     366 |
| load heavy PDF (2.0MB) |    65.6 | 15.26ms | 17.63ms | ±1.69% |      33 |

- **load small PDF (888B)** is 1.46x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 19.28x faster than load form PDF (116KB)
- **load small PDF (888B)** is 215.24x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.3K |   120us |   332us | ±2.07% |   4,157 |
| incremental save (19KB)            |    2.4K |   413us |   856us | ±1.51% |   1,210 |
| save with modifications (19KB)     |   835.4 |  1.20ms |  2.24ms | ±2.13% |     418 |
| save heavy PDF (2.0MB)             |    70.6 | 14.17ms | 15.79ms | ±1.32% |      36 |
| incremental save heavy PDF (2.0MB) |    61.0 | 16.39ms | 17.82ms | ±1.44% |      31 |

- **save unmodified (19KB)** is 3.44x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.95x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 117.84x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 136.24x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   725.3 |  1.38ms |  3.24ms | ±3.21% |     363 |
| extractPages (1 page from 100-page PDF)  |   212.5 |  4.71ms |  5.50ms | ±1.19% |     107 |
| extractPages (1 page from 2000-page PDF) |    12.5 | 79.84ms | 83.31ms | ±2.19% |      10 |

- **extractPages (1 page from small PDF)** is 3.41x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 57.90x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.7 | 78.56ms | 84.19ms | ±3.72% |       7 |
| split 2000-page PDF (0.9MB) |   0.759 |   1.32s |   1.32s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.77x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.0 |  83.34ms |  84.90ms | ±2.56% |       6 |
| extract first 100 pages from 2000-page PDF             |     9.6 | 103.93ms | 109.71ms | ±5.31% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.7 | 114.55ms | 117.27ms | ±2.80% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.25x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.37x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
