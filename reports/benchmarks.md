# Benchmark Report

> Generated on 2026-06-08 at 10:55:24 UTC
>
> System: linux | AMD EPYC 9V74 80-Core Processor (4 cores) | 16GB RAM | Bun 1.3.14

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
| libpdf    |   405.5 |  2.47ms |  4.38ms | ±2.07% |     203 |
| pdf-lib   |    26.6 | 37.58ms | 41.12ms | ±3.44% |      14 |

- **libpdf** is 15.24x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   12.4K |  81us |  225us | ±2.30% |   6,205 |
| pdf-lib   |    3.1K | 320us | 1.30ms | ±3.29% |   1,563 |

- **libpdf** is 3.97x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.9K | 146us |  619us | ±1.73% |   3,429 |
| pdf-lib   |    2.5K | 406us | 1.71ms | ±3.12% |   1,232 |

- **libpdf** is 2.78x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   748.7 | 1.34ms | 5.18ms | ±6.36% |     375 |
| libpdf    |   248.2 | 4.03ms | 6.17ms | ±2.36% |     125 |

- **pdf-lib** is 3.02x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   414.6 |  2.41ms |  3.96ms | ±1.70% |     208 |
| pdf-lib   |    13.5 | 74.10ms | 85.65ms | ±5.52% |      10 |

- **libpdf** is 30.72x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    15.1 | 66.09ms | 71.39ms | ±5.76% |      10 |
| pdf-lib   |    13.3 | 74.99ms | 88.16ms | ±6.76% |      10 |

- **libpdf** is 1.13x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   199.0 | 5.03ms |  7.66ms | ±3.28% |     100 |
| pdf-lib   |   111.9 | 8.94ms | 10.78ms | ±1.86% |      56 |

- **libpdf** is 1.78x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    14.4 | 69.53ms | 73.59ms | ±3.13% |       8 |
| libpdf    |    13.3 | 74.97ms | 80.84ms | ±4.38% |       7 |

- **pdf-lib** is 1.08x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.764 | 1.31s | 1.31s | ±0.00% |       1 |
| pdf-lib   |   0.761 | 1.31s | 1.31s | ±0.00% |       1 |

- **libpdf** is 1.00x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   130.3 |  7.68ms | 13.46ms | ±3.19% |      66 |
| pdf-lib   |    89.4 | 11.19ms | 11.82ms | ±0.85% |      45 |

- **libpdf** is 1.46x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    19.2 | 51.98ms | 52.99ms | ±1.14% |      10 |
| libpdf    |    18.3 | 54.57ms | 58.38ms | ±2.06% |      10 |

- **pdf-lib** is 1.05x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   807.4 |  1.24ms |  2.99ms | ±3.28% |     404 |
| copy 10 pages from 100-page PDF |   144.3 |  6.93ms |  9.56ms | ±2.15% |      73 |
| copy all 100 pages              |    38.9 | 25.73ms | 30.57ms | ±2.31% |      20 |

- **copy 1 page** is 5.60x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 20.77x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   873.0 | 1.15ms | 2.17ms | ±2.00% |     437 |
| duplicate all pages (double the document) |   872.4 | 1.15ms | 2.18ms | ±1.94% |     437 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   588.4 |  1.70ms |  2.78ms | ±1.70% |     295 |
| merge 10 small PDFs     |   110.2 |  9.07ms | 10.94ms | ±1.90% |      56 |
| merge 2 x 100-page PDFs |    19.4 | 51.64ms | 65.49ms | ±7.83% |      10 |

- **merge 2 small PDFs** is 5.34x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 30.38x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   156.5 |  6.39ms |  9.91ms | ±1.71% |      79 |
| draw 100 rectangles                 |   127.1 |  7.87ms | 13.96ms | ±4.32% |      64 |
| draw 100 circles                    |   110.0 |  9.09ms | 13.12ms | ±1.92% |      55 |
| draw 100 text lines (standard font) |   103.5 |  9.66ms | 12.09ms | ±1.68% |      52 |
| create 10 pages with mixed content  |    77.5 | 12.91ms | 13.96ms | ±1.08% |      39 |

- **draw 100 lines** is 1.23x faster than draw 100 rectangles
- **draw 100 lines** is 1.42x faster than draw 100 circles
- **draw 100 lines** is 1.51x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.02x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   320.0 |  3.13ms |  4.90ms | ±1.95% |     160 |
| get form fields   |   289.0 |  3.46ms |  7.01ms | ±3.70% |     145 |
| flatten form      |    90.2 | 11.08ms | 13.08ms | ±1.72% |      46 |
| fill text fields  |    65.9 | 15.16ms | 20.58ms | ±3.82% |      33 |

- **read field values** is 1.11x faster than get form fields
- **read field values** is 3.55x faster than flatten form
- **read field values** is 4.85x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   14.2K |   70us |  159us | ±3.69% |   7,094 |
| load medium PDF (19KB) |    9.1K |  110us |  191us | ±3.94% |   4,528 |
| load form PDF (116KB)  |   762.2 | 1.31ms | 2.57ms | ±2.07% |     382 |
| load heavy PDF (9.9MB) |   393.8 | 2.54ms | 3.63ms | ±1.37% |     197 |

- **load small PDF (888B)** is 1.57x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.61x faster than load form PDF (116KB)
- **load small PDF (888B)** is 36.02x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    9.5K |  105us |  227us | ±1.14% |   4,770 |
| incremental save (19KB)            |    2.8K |  355us |  789us | ±1.48% |   1,410 |
| save with modifications (19KB)     |   924.5 | 1.08ms | 2.28ms | ±2.14% |     463 |
| save heavy PDF (9.9MB)             |   418.7 | 2.39ms | 2.95ms | ±0.78% |     210 |
| incremental save heavy PDF (9.9MB) |   205.4 | 4.87ms | 5.06ms | ±0.54% |     103 |

- **save unmodified (19KB)** is 3.38x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.32x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 22.78x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 46.43x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   792.6 |  1.26ms |  2.97ms | ±3.38% |     397 |
| extractPages (1 page from 100-page PDF)  |   230.1 |  4.35ms |  5.14ms | ±1.28% |     116 |
| extractPages (1 page from 2000-page PDF) |    13.1 | 76.06ms | 80.55ms | ±2.43% |      10 |

- **extractPages (1 page from small PDF)** is 3.44x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 60.28x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    13.3 | 75.29ms | 79.94ms | ±2.99% |       7 |
| split 2000-page PDF (0.9MB) |   0.789 |   1.27s |   1.27s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.83x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.8 |  77.90ms |  82.01ms | ±3.37% |       7 |
| extract first 100 pages from 2000-page PDF             |    10.3 |  97.56ms | 103.99ms | ±3.89% |       6 |
| extract every 10th page from 2000-page PDF (200 pages) |     9.0 | 110.87ms | 122.15ms | ±7.20% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.25x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.42x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
