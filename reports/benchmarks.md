# Benchmark Report

> Generated on 2026-08-10 at 07:40:18 UTC
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
| libpdf    |    63.1 |  15.84ms |  16.92ms | ±1.27% |      32 |
| pdf-lib   |     4.6 | 215.86ms | 225.54ms | ±1.70% |      10 |

- **libpdf** is 13.63x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.8K |  92us |  205us | ±1.57% |   5,413 |
| pdf-lib   |    2.9K | 347us | 1.33ms | ±2.69% |   1,442 |

- **libpdf** is 3.75x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.0K | 166us |  587us | ±1.76% |   3,016 |
| pdf-lib   |    2.4K | 421us | 1.82ms | ±3.05% |   1,189 |

- **libpdf** is 2.54x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   745.5 | 1.34ms | 5.59ms | ±6.07% |     375 |
| libpdf    |   262.6 | 3.81ms | 6.08ms | ±2.40% |     132 |

- **pdf-lib** is 2.84x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    64.6 |  15.48ms |  18.37ms | ±2.19% |      33 |
| pdf-lib   |     3.2 | 308.56ms | 317.31ms | ±1.38% |      10 |

- **libpdf** is 19.93x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    29.3 |  34.10ms |  41.83ms | ±4.38% |      15 |
| pdf-lib   |     3.3 | 304.29ms | 315.89ms | ±1.44% |      10 |

- **libpdf** is 8.92x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   195.7 | 5.11ms | 10.19ms | ±3.04% |      99 |
| pdf-lib   |   109.4 | 9.14ms | 11.61ms | ±2.68% |      55 |

- **libpdf** is 1.79x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    13.9 | 72.12ms | 77.96ms | ±6.35% |       7 |
| libpdf    |    12.8 | 78.23ms | 96.17ms | ±9.79% |       7 |

- **pdf-lib** is 1.08x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.761 | 1.31s | 1.31s | ±0.00% |       1 |
| pdf-lib   |   0.751 | 1.33s | 1.33s | ±0.00% |       1 |

- **libpdf** is 1.01x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   125.5 |  7.97ms |  9.85ms | ±2.35% |      63 |
| pdf-lib   |    89.0 | 11.23ms | 11.96ms | ±0.89% |      45 |

- **libpdf** is 1.41x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    19.6 | 51.01ms | 52.43ms | ±0.77% |      10 |
| libpdf    |    19.4 | 51.56ms | 52.47ms | ±0.90% |      10 |

- **pdf-lib** is 1.01x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   759.6 |  1.32ms |  3.23ms | ±3.24% |     380 |
| copy 10 pages from 100-page PDF |   136.0 |  7.35ms |  9.70ms | ±1.94% |      69 |
| copy all 100 pages              |    37.6 | 26.59ms | 28.11ms | ±1.08% |      19 |

- **copy 1 page** is 5.58x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 20.20x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   848.0 | 1.18ms | 2.12ms | ±1.49% |     424 |
| duplicate all pages (double the document) |   845.3 | 1.18ms | 2.05ms | ±1.53% |     424 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   563.2 |  1.78ms |  2.67ms | ±1.36% |     282 |
| merge 10 small PDFs     |   104.5 |  9.57ms | 12.30ms | ±2.21% |      53 |
| merge 2 x 100-page PDFs |    19.7 | 50.88ms | 58.20ms | ±3.77% |      10 |

- **merge 2 small PDFs** is 5.39x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 28.65x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   150.6 |  6.64ms | 10.40ms | ±1.78% |      76 |
| draw 100 rectangles                 |   118.4 |  8.44ms | 16.66ms | ±4.79% |      60 |
| draw 100 circles                    |   105.1 |  9.52ms | 13.03ms | ±1.84% |      53 |
| draw 100 text lines (standard font) |    98.3 | 10.17ms | 11.76ms | ±1.34% |      50 |
| create 10 pages with mixed content  |    73.4 | 13.62ms | 17.52ms | ±1.92% |      37 |

- **draw 100 lines** is 1.27x faster than draw 100 rectangles
- **draw 100 lines** is 1.43x faster than draw 100 circles
- **draw 100 lines** is 1.53x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.05x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   310.9 |  3.22ms |  5.73ms | ±2.24% |     156 |
| get form fields   |   274.9 |  3.64ms |  7.65ms | ±4.33% |     138 |
| flatten form      |    87.3 | 11.46ms | 13.20ms | ±1.60% |      44 |
| fill text fields  |    63.3 | 15.79ms | 18.63ms | ±2.72% |      32 |

- **read field values** is 1.13x faster than get form fields
- **read field values** is 3.56x faster than flatten form
- **read field values** is 4.91x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   13.9K |    72us |   193us | ±2.60% |   6,961 |
| load medium PDF (19KB) |    9.7K |   103us |   199us | ±0.84% |   4,844 |
| load form PDF (116KB)  |   763.0 |  1.31ms |  2.12ms | ±1.22% |     382 |
| load heavy PDF (2.0MB) |    64.9 | 15.42ms | 16.85ms | ±1.51% |      33 |

- **load small PDF (888B)** is 1.44x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.24x faster than load form PDF (116KB)
- **load small PDF (888B)** is 214.60x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    7.8K |   129us |   332us | ±2.53% |   3,880 |
| incremental save (19KB)            |    2.4K |   423us |  1.16ms | ±1.99% |   1,182 |
| save with modifications (19KB)     |   832.7 |  1.20ms |  2.62ms | ±2.31% |     417 |
| save heavy PDF (2.0MB)             |    69.1 | 14.46ms | 16.01ms | ±2.33% |      35 |
| incremental save heavy PDF (2.0MB) |    59.9 | 16.69ms | 23.06ms | ±3.86% |      30 |

- **save unmodified (19KB)** is 3.28x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.32x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 112.21x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 129.47x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   767.1 |  1.30ms |  3.38ms | ±3.54% |     384 |
| extractPages (1 page from 100-page PDF)  |   217.6 |  4.60ms |  8.23ms | ±2.71% |     109 |
| extractPages (1 page from 2000-page PDF) |    12.6 | 79.51ms | 89.52ms | ±4.25% |      10 |

- **extractPages (1 page from small PDF)** is 3.53x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 61.00x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.7 | 78.52ms | 82.38ms | ±2.97% |       7 |
| split 2000-page PDF (0.9MB) |   0.760 |   1.32s |   1.32s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.75x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.5 |  80.28ms |  82.43ms | ±2.45% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.7 | 102.62ms | 111.12ms | ±6.39% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     9.0 | 110.92ms | 113.95ms | ±2.52% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.28x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.38x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
