# Benchmark Report

> Generated on 2026-11-09 at 15:20:44 UTC
>
> System: linux | AMD EPYC 9V45 96-Core Processor (4 cores) | 16GB RAM | Bun 1.4.4

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
| libpdf    |   100.1 |   9.99ms |  17.03ms | ±4.62% |      51 |
| pdf-lib   |     5.5 | 182.69ms | 193.76ms | ±1.95% |      10 |

- **libpdf** is 18.29x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   16.4K |  61us |  517us | ±5.84% |   8,205 |
| pdf-lib   |    4.4K | 228us | 1.58ms | ±5.92% |   2,200 |

- **libpdf** is 3.74x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.8K |  93us |  218us | ±1.41% |   5,406 |
| pdf-lib   |    3.6K | 278us | 1.65ms | ±5.20% |   1,799 |

- **libpdf** is 3.00x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |     p99 |     RME | Samples |
| :-------- | ------: | -----: | ------: | ------: | ------: |
| pdf-lib   |    1.5K |  658us |  3.46ms |  ±5.16% |     762 |
| libpdf    |   253.5 | 3.94ms | 11.56ms | ±13.22% |     127 |

- **pdf-lib** is 5.99x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |   106.7 |   9.38ms |  12.76ms | ±2.48% |      54 |
| pdf-lib   |     4.1 | 242.60ms | 259.24ms | ±3.65% |      10 |

- **libpdf** is 25.87x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    47.4 |  21.11ms |  26.55ms | ±4.76% |      24 |
| pdf-lib   |     4.3 | 234.22ms | 243.76ms | ±1.67% |      10 |

- **libpdf** is 11.09x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| libpdf    |   357.9 | 2.79ms | 4.32ms | ±2.21% |     179 |
| pdf-lib   |   150.3 | 6.65ms | 9.38ms | ±2.39% |      76 |

- **libpdf** is 2.38x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    21.8 | 45.88ms | 58.82ms | ±9.99% |      12 |
| libpdf    |    19.4 | 51.67ms | 63.57ms | ±8.50% |      10 |

- **pdf-lib** is 1.13x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| pdf-lib   |     1.2 | 852.15ms | 852.15ms | ±0.00% |       1 |
| libpdf    |     1.1 | 924.96ms | 924.96ms | ±0.00% |       1 |

- **pdf-lib** is 1.09x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |   Mean |     p99 |     RME | Samples |
| :-------- | ------: | -----: | ------: | ------: | ------: |
| libpdf    |   162.8 | 6.14ms | 15.15ms | ±11.30% |      82 |
| pdf-lib   |   105.6 | 9.47ms | 13.32ms |  ±2.89% |      53 |

- **libpdf** is 1.54x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    20.5 | 48.69ms | 63.34ms | ±7.59% |      11 |
| libpdf    |    20.2 | 49.43ms | 61.76ms | ±7.97% |      11 |

- **pdf-lib** is 1.02x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |    1.6K |   642us |  1.42ms | ±2.19% |     780 |
| copy 10 pages from 100-page PDF |   187.7 |  5.33ms | 11.07ms | ±7.33% |      95 |
| copy all 100 pages              |    39.9 | 25.04ms | 34.13ms | ±4.92% |      20 |

- **copy 1 page** is 8.31x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 39.03x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.6K | 634us | 1.51ms | ±1.84% |     790 |
| duplicate all pages (double the document) |    1.5K | 681us | 1.64ms | ±2.50% |     735 |

- **duplicate page 0** is 1.07x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   991.0 |  1.01ms |  2.47ms | ±2.33% |     497 |
| merge 10 small PDFs     |   188.6 |  5.30ms | 11.19ms | ±4.27% |      95 |
| merge 2 x 100-page PDFs |    23.1 | 43.31ms | 45.49ms | ±2.25% |      12 |

- **merge 2 small PDFs** is 5.26x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 42.92x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   175.8 |  5.69ms | 10.12ms | ±9.52% |      88 |
| draw 100 rectangles                 |   138.4 |  7.23ms | 15.42ms | ±9.99% |      70 |
| draw 100 circles                    |   127.6 |  7.84ms | 12.72ms | ±8.48% |      64 |
| draw 100 text lines (standard font) |   118.7 |  8.43ms | 13.73ms | ±9.20% |      60 |
| create 10 pages with mixed content  |    96.8 | 10.33ms | 13.71ms | ±5.67% |      49 |

- **draw 100 lines** is 1.27x faster than draw 100 rectangles
- **draw 100 lines** is 1.38x faster than draw 100 circles
- **draw 100 lines** is 1.48x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.82x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   483.0 |  2.07ms |  4.18ms | ±3.09% |     242 |
| get form fields   |   474.6 |  2.11ms |  4.57ms | ±4.71% |     238 |
| flatten form      |   125.9 |  7.94ms | 15.92ms | ±5.79% |      63 |
| fill text fields  |    99.3 | 10.07ms | 15.55ms | ±5.69% |      50 |

- **read field values** is 1.02x faster than get form fields
- **read field values** is 3.84x faster than flatten form
- **read field values** is 4.86x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | -----: | ------: | -----: | ------: |
| load small PDF (888B)  |   23.6K |   42us |    96us | ±3.27% |  11,818 |
| load medium PDF (19KB) |   17.4K |   58us |    99us | ±0.96% |   8,695 |
| load form PDF (116KB)  |    1.2K |  827us |  2.20ms | ±2.66% |     605 |
| load heavy PDF (2.0MB) |   109.9 | 9.10ms | 12.91ms | ±3.74% |      55 |

- **load small PDF (888B)** is 1.36x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 19.53x faster than load form PDF (116KB)
- **load small PDF (888B)** is 215.07x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   15.0K |    67us |   148us | ±3.33% |   7,497 |
| incremental save (19KB)            |    3.2K |   315us |  2.96ms | ±6.45% |   1,590 |
| save with modifications (19KB)     |    1.5K |   659us |  1.57ms | ±2.72% |     759 |
| save heavy PDF (2.0MB)             |   108.3 |  9.23ms | 14.06ms | ±3.96% |      55 |
| incremental save heavy PDF (2.0MB) |    90.5 | 11.05ms | 17.75ms | ±6.73% |      46 |

- **save unmodified (19KB)** is 4.72x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.89x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 138.43x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 165.71x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.5K |   689us |  1.67ms | ±4.20% |     726 |
| extractPages (1 page from 100-page PDF)  |   390.9 |  2.56ms |  4.55ms | ±3.11% |     196 |
| extractPages (1 page from 2000-page PDF) |    21.0 | 47.59ms | 56.92ms | ±6.53% |      11 |

- **extractPages (1 page from small PDF)** is 3.71x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 69.03x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    19.8 |  50.39ms |  63.29ms | ±8.57% |      10 |
| split 2000-page PDF (0.9MB) |     1.1 | 930.74ms | 930.74ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 18.47x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |     RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | ------: | ------: |
| extract first 10 pages from 2000-page PDF              |    18.8 | 53.12ms | 82.96ms | ±15.62% |      10 |
| extract first 100 pages from 2000-page PDF             |    14.4 | 69.44ms | 74.29ms |  ±2.87% |       8 |
| extract every 10th page from 2000-page PDF (200 pages) |    12.5 | 79.86ms | 84.55ms |  ±3.13% |       7 |

- **extract first 10 pages from 2000-page PDF** is 1.31x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.50x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
