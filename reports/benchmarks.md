# Benchmark Report

> Generated on 2026-10-26 at 12:21:03 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.4.4

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
| libpdf    |    64.5 |  15.50ms |  17.00ms | ±1.29% |      33 |
| pdf-lib   |     4.6 | 216.97ms | 225.34ms | ±1.26% |      10 |

- **libpdf** is 14.00x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    9.1K | 110us |  216us | ±2.45% |   4,562 |
| pdf-lib   |    2.8K | 363us | 1.32ms | ±4.10% |   1,379 |

- **libpdf** is 3.31x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.2K | 162us |  589us | ±1.72% |   3,089 |
| pdf-lib   |    2.3K | 433us | 1.67ms | ±3.74% |   1,156 |

- **libpdf** is 2.67x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   736.0 | 1.36ms | 5.06ms | ±6.97% |     368 |
| libpdf    |   265.3 | 3.77ms | 5.92ms | ±2.06% |     133 |

- **pdf-lib** is 2.77x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    64.3 |  15.54ms |  17.33ms | ±1.60% |      33 |
| pdf-lib   |     3.2 | 310.00ms | 321.26ms | ±1.24% |      10 |

- **libpdf** is 19.95x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    29.6 |  33.77ms |  40.53ms | ±3.73% |      15 |
| pdf-lib   |     3.3 | 306.63ms | 317.79ms | ±1.13% |      10 |

- **libpdf** is 9.08x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   193.3 | 5.17ms |  9.06ms | ±2.72% |      97 |
| pdf-lib   |   115.3 | 8.67ms | 11.41ms | ±1.75% |      58 |

- **libpdf** is 1.68x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    14.3 | 69.85ms | 74.02ms | ±3.36% |       8 |
| libpdf    |    13.9 | 72.19ms | 73.53ms | ±1.41% |       7 |

- **pdf-lib** is 1.03x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.772 | 1.30s | 1.30s | ±0.00% |       1 |
| libpdf    |   0.740 | 1.35s | 1.35s | ±0.00% |       1 |

- **pdf-lib** is 1.04x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   125.9 |  7.94ms | 10.65ms | ±2.77% |      63 |
| pdf-lib   |    89.4 | 11.18ms | 12.02ms | ±0.87% |      45 |

- **libpdf** is 1.41x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    19.2 | 51.97ms | 53.12ms | ±1.11% |      10 |
| libpdf    |    18.9 | 53.05ms | 54.21ms | ±1.43% |      10 |

- **pdf-lib** is 1.02x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   746.5 |  1.34ms |  2.98ms | ±3.46% |     374 |
| copy 10 pages from 100-page PDF |   134.9 |  7.42ms |  8.68ms | ±1.71% |      68 |
| copy all 100 pages              |    37.3 | 26.84ms | 29.50ms | ±1.65% |      19 |

- **copy 1 page** is 5.54x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 20.03x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   835.1 | 1.20ms | 2.04ms | ±1.49% |     418 |
| duplicate all pages (double the document) |   834.9 | 1.20ms | 2.07ms | ±1.45% |     418 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   554.4 |  1.80ms |  2.66ms | ±1.36% |     278 |
| merge 10 small PDFs     |   104.5 |  9.57ms | 11.23ms | ±1.34% |      53 |
| merge 2 x 100-page PDFs |    20.0 | 50.06ms | 51.62ms | ±0.95% |      10 |

- **merge 2 small PDFs** is 5.31x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 27.75x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   148.5 |  6.73ms | 10.92ms | ±1.95% |      75 |
| draw 100 rectangles                 |   122.7 |  8.15ms | 15.49ms | ±4.45% |      62 |
| draw 100 circles                    |   105.5 |  9.48ms | 14.34ms | ±2.21% |      53 |
| draw 100 text lines (standard font) |    92.3 | 10.83ms | 14.97ms | ±3.19% |      47 |
| create 10 pages with mixed content  |    72.6 | 13.78ms | 20.01ms | ±2.75% |      37 |

- **draw 100 lines** is 1.21x faster than draw 100 rectangles
- **draw 100 lines** is 1.41x faster than draw 100 circles
- **draw 100 lines** is 1.61x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.05x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   311.3 |  3.21ms |  5.26ms | ±1.82% |     156 |
| get form fields   |   267.0 |  3.74ms |  7.35ms | ±4.58% |     134 |
| flatten form      |    86.9 | 11.50ms | 12.70ms | ±1.63% |      44 |
| fill text fields  |    64.4 | 15.52ms | 18.25ms | ±2.10% |      33 |

- **read field values** is 1.17x faster than get form fields
- **read field values** is 3.58x faster than flatten form
- **read field values** is 4.83x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   14.2K |    71us |   178us | ±1.48% |   7,083 |
| load medium PDF (19KB) |   10.0K |   100us |   138us | ±0.87% |   4,995 |
| load form PDF (116KB)  |   749.7 |  1.33ms |  2.44ms | ±1.69% |     376 |
| load heavy PDF (2.0MB) |    67.7 | 14.78ms | 16.35ms | ±1.73% |      34 |

- **load small PDF (888B)** is 1.42x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.89x faster than load form PDF (116KB)
- **load small PDF (888B)** is 209.37x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.2K |   123us |   354us | ±1.25% |   4,080 |
| incremental save (19KB)            |    2.5K |   408us |   822us | ±1.47% |   1,226 |
| save with modifications (19KB)     |   840.5 |  1.19ms |  2.12ms | ±1.95% |     421 |
| save heavy PDF (2.0MB)             |    68.7 | 14.56ms | 16.40ms | ±1.49% |      35 |
| incremental save heavy PDF (2.0MB) |    63.9 | 15.64ms | 16.74ms | ±1.25% |      32 |

- **save unmodified (19KB)** is 3.33x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.71x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 118.77x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 127.64x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   761.8 |  1.31ms |  3.15ms | ±3.00% |     381 |
| extractPages (1 page from 100-page PDF)  |   220.8 |  4.53ms |  5.11ms | ±0.91% |     111 |
| extractPages (1 page from 2000-page PDF) |    12.9 | 77.59ms | 82.32ms | ±2.19% |      10 |

- **extractPages (1 page from small PDF)** is 3.45x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 59.11x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    13.0 | 76.92ms | 81.73ms | ±2.81% |       7 |
| split 2000-page PDF (0.9MB) |   0.768 |   1.30s |   1.30s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.92x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.4 |  80.90ms |  84.15ms | ±3.18% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.9 | 101.03ms | 104.68ms | ±3.58% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     9.0 | 111.20ms | 113.20ms | ±2.16% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.25x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.37x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
