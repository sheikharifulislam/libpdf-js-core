# Benchmark Report

> Generated on 2026-03-30 at 07:28:34 UTC
>
> System: linux | AMD EPYC 9V74 80-Core Processor (4 cores) | 16GB RAM | Bun 1.3.11

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
| libpdf    |   418.5 |  2.39ms |  4.02ms | ±1.62% |     210 |
| pdf-lib   |    26.6 | 37.64ms | 45.31ms | ±4.63% |      14 |

- **libpdf** is 15.75x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   12.8K |  78us |  164us | ±3.39% |   6,409 |
| pdf-lib   |    2.9K | 346us | 1.47ms | ±2.83% |   1,445 |

- **libpdf** is 4.44x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.3K | 158us |  694us | ±1.94% |   3,174 |
| pdf-lib   |    2.2K | 445us | 2.00ms | ±3.25% |   1,125 |

- **libpdf** is 2.82x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   654.6 | 1.53ms | 5.71ms | ±6.81% |     330 |
| libpdf    |   200.6 | 4.98ms | 7.37ms | ±2.58% |     101 |

- **pdf-lib** is 3.26x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   415.7 |  2.41ms |  4.32ms | ±1.96% |     208 |
| pdf-lib   |    11.8 | 84.45ms | 93.33ms | ±3.88% |      10 |

- **libpdf** is 35.11x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------- | ------: | ------: | -------: | -----: | ------: |
| libpdf    |    15.8 | 63.19ms |  70.37ms | ±5.63% |      10 |
| pdf-lib   |    11.3 | 88.59ms | 107.16ms | ±7.52% |      10 |

- **libpdf** is 1.40x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   196.9 | 5.08ms |  7.53ms | ±2.46% |      99 |
| pdf-lib   |   106.2 | 9.41ms | 11.91ms | ±2.54% |      54 |

- **libpdf** is 1.85x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    12.5 | 80.10ms | 87.02ms | ±3.83% |       7 |
| pdf-lib   |    12.4 | 80.62ms | 83.57ms | ±2.72% |       7 |

- **libpdf** is 1.01x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.671 | 1.49s | 1.49s | ±0.00% |       1 |
| pdf-lib   |   0.653 | 1.53s | 1.53s | ±0.00% |       1 |

- **libpdf** is 1.03x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   111.6 |  8.96ms | 11.51ms | ±3.03% |      56 |
| pdf-lib   |    80.2 | 12.46ms | 14.25ms | ±1.86% |      41 |

- **libpdf** is 1.39x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.2 | 54.84ms | 57.33ms | ±1.60% |      10 |
| libpdf    |    15.0 | 66.78ms | 68.81ms | ±2.13% |       8 |

- **pdf-lib** is 1.22x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   790.7 |  1.26ms |  3.08ms | ±3.39% |     396 |
| copy 10 pages from 100-page PDF |   131.7 |  7.59ms | 11.73ms | ±3.14% |      66 |
| copy all 100 pages              |    32.9 | 30.38ms | 32.51ms | ±1.31% |      17 |

- **copy 1 page** is 6.00x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 24.02x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   847.5 | 1.18ms | 2.31ms | ±1.96% |     424 |
| duplicate all pages (double the document) |   837.3 | 1.19ms | 2.42ms | ±2.20% |     419 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   553.9 |  1.81ms |  3.01ms | ±1.96% |     277 |
| merge 10 small PDFs     |   102.9 |  9.71ms | 16.02ms | ±3.03% |      52 |
| merge 2 x 100-page PDFs |    16.5 | 60.54ms | 67.21ms | ±4.96% |       9 |

- **merge 2 small PDFs** is 5.38x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 33.54x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   124.4 |  8.04ms | 12.33ms | ±1.96% |      63 |
| draw 100 rectangles                 |   104.0 |  9.62ms | 14.87ms | ±5.12% |      52 |
| draw 100 circles                    |    86.4 | 11.57ms | 14.30ms | ±2.04% |      44 |
| draw 100 text lines (standard font) |    86.2 | 11.60ms | 18.64ms | ±3.10% |      44 |
| create 10 pages with mixed content  |    64.0 | 15.63ms | 16.62ms | ±1.05% |      33 |

- **draw 100 lines** is 1.20x faster than draw 100 rectangles
- **draw 100 lines** is 1.44x faster than draw 100 circles
- **draw 100 lines** is 1.44x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.94x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   308.9 |  3.24ms |  5.33ms | ±2.03% |     155 |
| get form fields   |   280.8 |  3.56ms |  7.43ms | ±4.25% |     141 |
| flatten form      |    83.0 | 12.04ms | 17.44ms | ±3.27% |      42 |
| fill text fields  |    64.8 | 15.44ms | 21.63ms | ±3.68% |      33 |

- **read field values** is 1.10x faster than get form fields
- **read field values** is 3.72x faster than flatten form
- **read field values** is 4.77x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   16.6K |   60us |  133us | ±1.42% |   8,319 |
| load medium PDF (19KB) |   10.5K |   95us |  177us | ±1.22% |   5,274 |
| load form PDF (116KB)  |   741.7 | 1.35ms | 2.42ms | ±2.09% |     371 |
| load heavy PDF (9.9MB) |   438.2 | 2.28ms | 2.95ms | ±1.22% |     220 |

- **load small PDF (888B)** is 1.58x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 22.43x faster than load form PDF (116KB)
- **load small PDF (888B)** is 37.97x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    7.8K |  129us |  312us | ±4.07% |   3,878 |
| incremental save (19KB)            |    2.3K |  433us | 1.24ms | ±2.45% |   1,154 |
| save with modifications (19KB)     |   791.7 | 1.26ms | 3.78ms | ±4.00% |     396 |
| save heavy PDF (9.9MB)             |   403.4 | 2.48ms | 4.25ms | ±2.43% |     202 |
| incremental save heavy PDF (9.9MB) |   197.7 | 5.06ms | 6.01ms | ±0.87% |      99 |

- **save unmodified (19KB)** is 3.36x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.80x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 19.22x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 39.22x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   805.3 |  1.24ms |  2.22ms | ±3.06% |     403 |
| extractPages (1 page from 100-page PDF)  |   213.1 |  4.69ms |  7.55ms | ±2.87% |     107 |
| extractPages (1 page from 2000-page PDF) |    12.7 | 78.75ms | 82.60ms | ±2.23% |      10 |

- **extractPages (1 page from small PDF)** is 3.78x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 63.41x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.6 | 79.43ms | 85.48ms | ±3.82% |       7 |
| split 2000-page PDF (0.9MB) |   0.730 |   1.37s |   1.37s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.25x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.3 |  81.34ms |  87.52ms | ±4.01% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.5 | 104.97ms | 114.33ms | ±6.70% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.4 | 119.64ms | 128.16ms | ±5.79% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.29x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.47x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
