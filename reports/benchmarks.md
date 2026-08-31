# Benchmark Report

> Generated on 2026-08-31 at 12:50:46 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.4.0

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
| libpdf    |    60.4 |  16.56ms |  19.19ms | ±1.86% |      31 |
| pdf-lib   |     4.5 | 224.29ms | 233.97ms | ±1.39% |      10 |

- **libpdf** is 13.55x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.8K |  93us |  220us | ±1.97% |   5,397 |
| pdf-lib   |    3.0K | 337us | 1.40ms | ±2.57% |   1,483 |

- **libpdf** is 3.64x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.8K | 173us |  641us | ±1.79% |   2,895 |
| pdf-lib   |    2.3K | 442us | 2.15ms | ±3.68% |   1,131 |

- **libpdf** is 2.56x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   683.4 | 1.46ms | 6.18ms | ±8.15% |     342 |
| libpdf    |   235.3 | 4.25ms | 6.11ms | ±2.34% |     118 |

- **pdf-lib** is 2.90x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    62.4 |  16.03ms |  18.45ms | ±1.87% |      32 |
| pdf-lib   |     3.0 | 328.70ms | 338.76ms | ±1.11% |      10 |

- **libpdf** is 20.51x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    26.5 |  37.74ms |  40.64ms | ±2.77% |      14 |
| pdf-lib   |     3.1 | 322.16ms | 333.25ms | ±0.95% |      10 |

- **libpdf** is 8.54x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   187.3 | 5.34ms |  7.87ms | ±2.43% |      94 |
| pdf-lib   |   110.8 | 9.03ms | 10.76ms | ±1.51% |      56 |

- **libpdf** is 1.69x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------- | ------: | ------: | ------: | ------: | ------: |
| libpdf    |    13.1 | 76.31ms | 78.28ms |  ±1.74% |       7 |
| pdf-lib   |    12.7 | 78.44ms | 98.65ms | ±11.53% |       7 |

- **libpdf** is 1.03x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.721 | 1.39s | 1.39s | ±0.00% |       1 |
| libpdf    |   0.692 | 1.44s | 1.44s | ±0.00% |       1 |

- **pdf-lib** is 1.04x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   109.6 |  9.13ms | 12.82ms | ±3.26% |      55 |
| pdf-lib   |    82.3 | 12.15ms | 14.08ms | ±1.73% |      42 |

- **libpdf** is 1.33x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.2 | 54.83ms | 55.89ms | ±1.19% |      10 |
| libpdf    |    16.2 | 61.77ms | 62.78ms | ±0.81% |       9 |

- **pdf-lib** is 1.13x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   686.9 |  1.46ms |  3.46ms | ±3.88% |     344 |
| copy 10 pages from 100-page PDF |   124.4 |  8.04ms | 11.15ms | ±2.49% |      63 |
| copy all 100 pages              |    33.3 | 30.02ms | 33.95ms | ±2.70% |      17 |

- **copy 1 page** is 5.52x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 20.62x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   785.9 | 1.27ms | 2.53ms | ±2.13% |     393 |
| duplicate page 0                          |   785.6 | 1.27ms | 2.50ms | ±1.92% |     393 |

- **duplicate all pages (double the document)** is 1.00x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   528.5 |  1.89ms |  3.05ms | ±1.82% |     265 |
| merge 10 small PDFs     |    92.5 | 10.81ms | 17.88ms | ±3.75% |      47 |
| merge 2 x 100-page PDFs |    18.1 | 55.20ms | 55.73ms | ±0.56% |      10 |

- **merge 2 small PDFs** is 5.71x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 29.17x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   135.5 |  7.38ms | 10.93ms | ±2.08% |      68 |
| draw 100 rectangles                 |   107.5 |  9.31ms | 18.85ms | ±5.76% |      54 |
| draw 100 circles                    |    98.5 | 10.15ms | 13.74ms | ±1.75% |      50 |
| draw 100 text lines (standard font) |    87.5 | 11.43ms | 14.41ms | ±2.24% |      44 |
| create 10 pages with mixed content  |    66.3 | 15.09ms | 17.16ms | ±1.41% |      34 |

- **draw 100 lines** is 1.26x faster than draw 100 rectangles
- **draw 100 lines** is 1.37x faster than draw 100 circles
- **draw 100 lines** is 1.55x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.04x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   301.2 |  3.32ms |  4.15ms | ±1.21% |     151 |
| get form fields   |   260.6 |  3.84ms |  7.37ms | ±4.28% |     131 |
| flatten form      |    79.1 | 12.65ms | 17.84ms | ±3.18% |      40 |
| fill text fields  |    58.2 | 17.20ms | 20.53ms | ±3.22% |      30 |

- **read field values** is 1.16x faster than get form fields
- **read field values** is 3.81x faster than flatten form
- **read field values** is 5.18x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   13.9K |    72us |   188us | ±1.83% |   6,945 |
| load medium PDF (19KB) |    9.9K |   101us |   143us | ±1.15% |   4,928 |
| load form PDF (116KB)  |   713.0 |  1.40ms |  2.50ms | ±1.68% |     357 |
| load heavy PDF (2.0MB) |    67.4 | 14.83ms | 17.23ms | ±1.79% |      34 |

- **load small PDF (888B)** is 1.41x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 19.48x faster than load form PDF (116KB)
- **load small PDF (888B)** is 206.00x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    7.7K |   130us |   368us | ±2.48% |   3,843 |
| incremental save (19KB)            |    2.3K |   443us |  1.04ms | ±1.82% |   1,128 |
| save with modifications (19KB)     |   810.3 |  1.23ms |  2.51ms | ±2.34% |     406 |
| save heavy PDF (2.0MB)             |    68.2 | 14.67ms | 16.70ms | ±1.99% |      35 |
| incremental save heavy PDF (2.0MB) |    60.9 | 16.42ms | 18.03ms | ±1.26% |      31 |

- **save unmodified (19KB)** is 3.41x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.48x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 112.74x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 126.20x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   657.7 |  1.52ms |  3.94ms | ±4.25% |     329 |
| extractPages (1 page from 100-page PDF)  |   199.9 |  5.00ms |  8.14ms | ±2.80% |     100 |
| extractPages (1 page from 2000-page PDF) |    12.2 | 81.88ms | 85.90ms | ±2.26% |      10 |

- **extractPages (1 page from small PDF)** is 3.29x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 53.85x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.1 | 82.32ms | 88.32ms | ±3.86% |       7 |
| split 2000-page PDF (0.9MB) |   0.708 |   1.41s |   1.41s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.15x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    11.6 |  85.94ms |  88.56ms | ±2.63% |       6 |
| extract first 100 pages from 2000-page PDF             |     9.0 | 110.63ms | 120.31ms | ±9.45% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.5 | 117.03ms | 119.90ms | ±2.83% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.29x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.36x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
