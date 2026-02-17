# Benchmark Report

> Generated on 2026-02-17 at 00:43:40 UTC
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
| libpdf    |   385.8 |  2.59ms |  3.99ms | ±1.47% |     194 |
| pdf-lib   |    25.8 | 38.71ms | 43.22ms | ±3.66% |      13 |

- **libpdf** is 14.94x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.2K |  98us |  261us | ±3.23% |   5,113 |
| pdf-lib   |    2.4K | 415us | 1.44ms | ±2.43% |   1,206 |

- **libpdf** is 4.24x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.9K | 168us |  610us | ±1.65% |   2,968 |
| pdf-lib   |    1.9K | 522us | 1.96ms | ±2.87% |     958 |

- **libpdf** is 3.10x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   614.5 | 1.63ms | 5.89ms | ±6.45% |     308 |
| libpdf    |   168.7 | 5.93ms | 9.00ms | ±2.29% |      85 |

- **pdf-lib** is 3.64x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   379.1 |  2.64ms |  5.26ms | ±2.32% |     190 |
| pdf-lib   |    11.6 | 86.17ms | 93.32ms | ±3.12% |      10 |

- **libpdf** is 32.67x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |    13.7 | 72.99ms |  84.11ms | ±6.28% |      10 |
| pdf-lib   |    10.9 | 92.15ms | 102.93ms | ±4.46% |      10 |

- **libpdf** is 1.26x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   187.6 | 5.33ms |  8.65ms | ±3.29% |      94 |
| pdf-lib   |   106.5 | 9.39ms | 11.67ms | ±2.31% |      54 |

- **libpdf** is 1.76x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |    11.2 | 89.42ms |  91.40ms | ±1.61% |       6 |
| pdf-lib   |    10.9 | 91.86ms | 103.59ms | ±7.25% |       6 |

- **libpdf** is 1.03x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.652 | 1.53s | 1.53s | ±0.00% |       1 |
| pdf-lib   |   0.606 | 1.65s | 1.65s | ±0.00% |       1 |

- **libpdf** is 1.08x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   110.7 |  9.04ms | 13.53ms | ±2.78% |      56 |
| pdf-lib   |    83.2 | 12.03ms | 12.99ms | ±1.44% |      42 |

- **libpdf** is 1.33x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.4 | 54.23ms | 55.26ms | ±0.96% |      10 |
| libpdf    |    12.9 | 77.59ms | 80.77ms | ±2.01% |       7 |

- **pdf-lib** is 1.43x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   767.6 |  1.30ms |  3.07ms | ±3.38% |     384 |
| copy 10 pages from 100-page PDF |   120.5 |  8.30ms |  9.51ms | ±1.63% |      61 |
| copy all 100 pages              |    27.0 | 37.08ms | 37.70ms | ±0.65% |      14 |

- **copy 1 page** is 6.37x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 28.46x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   792.1 | 1.26ms | 2.42ms | ±2.10% |     397 |
| duplicate all pages (double the document) |   787.5 | 1.27ms | 2.46ms | ±2.18% |     394 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   533.0 |  1.88ms |  2.94ms | ±1.77% |     267 |
| merge 10 small PDFs     |    99.7 | 10.03ms | 12.80ms | ±1.83% |      50 |
| merge 2 x 100-page PDFs |    13.7 | 72.74ms | 77.17ms | ±2.60% |       7 |

- **merge 2 small PDFs** is 5.35x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 38.77x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |    96.6 | 10.35ms | 13.22ms | ±1.82% |      49 |
| draw 100 rectangles                 |    84.3 | 11.87ms | 15.32ms | ±3.90% |      43 |
| draw 100 circles                    |    71.9 | 13.91ms | 17.30ms | ±2.45% |      36 |
| draw 100 text lines (standard font) |    69.3 | 14.43ms | 17.12ms | ±1.79% |      35 |
| create 10 pages with mixed content  |    50.3 | 19.87ms | 22.68ms | ±1.51% |      26 |

- **draw 100 lines** is 1.15x faster than draw 100 rectangles
- **draw 100 lines** is 1.34x faster than draw 100 circles
- **draw 100 lines** is 1.39x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.92x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   289.8 |  3.45ms |  5.90ms | ±2.50% |     145 |
| get form fields   |   249.7 |  4.01ms |  9.06ms | ±5.00% |     125 |
| flatten form      |    77.9 | 12.84ms | 18.12ms | ±3.31% |      40 |
| fill text fields  |    57.2 | 17.47ms | 21.30ms | ±2.98% |      29 |

- **read field values** is 1.16x faster than get form fields
- **read field values** is 3.72x faster than flatten form
- **read field values** is 5.06x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   12.8K |   78us |  169us | ±3.98% |   6,399 |
| load medium PDF (19KB) |    8.2K |  122us |  213us | ±4.60% |   4,111 |
| load form PDF (116KB)  |   631.3 | 1.58ms | 2.99ms | ±2.37% |     316 |
| load heavy PDF (9.9MB) |   382.2 | 2.62ms | 4.00ms | ±2.04% |     192 |

- **load small PDF (888B)** is 1.56x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.27x faster than load form PDF (116KB)
- **load small PDF (888B)** is 33.49x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    8.4K |  119us |  274us | ±1.46% |   4,186 |
| incremental save (19KB)            |    2.0K |  505us | 1.00ms | ±1.31% |     991 |
| save with modifications (19KB)     |   756.8 | 1.32ms | 2.65ms | ±2.51% |     379 |
| save heavy PDF (9.9MB)             |   411.5 | 2.43ms | 3.13ms | ±1.31% |     206 |
| incremental save heavy PDF (9.9MB) |   154.8 | 6.46ms | 8.79ms | ±1.17% |      78 |

- **save unmodified (19KB)** is 4.23x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.06x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.35x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 54.09x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   743.5 |  1.34ms |  3.22ms | ±3.49% |     372 |
| extractPages (1 page from 100-page PDF)  |   205.3 |  4.87ms |  8.09ms | ±2.44% |     103 |
| extractPages (1 page from 2000-page PDF) |    13.4 | 74.76ms | 78.29ms | ±2.42% |      10 |

- **extractPages (1 page from small PDF)** is 3.62x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 55.59x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    11.2 | 89.03ms | 93.66ms | ±3.55% |       6 |
| split 2000-page PDF (0.9MB) |   0.670 |   1.49s |   1.49s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.76x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.7 |  78.61ms |  80.05ms | ±1.12% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.2 | 108.13ms | 109.94ms | ±1.76% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     7.8 | 128.78ms | 140.30ms | ±9.81% |       4 |

- **extract first 10 pages from 2000-page PDF** is 1.38x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.64x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
