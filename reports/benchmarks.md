# Benchmark Report

> Generated on 2026-04-27 at 08:26:15 UTC
>
> System: linux | AMD EPYC 9V74 80-Core Processor (4 cores) | 16GB RAM | Bun 1.3.13

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
| libpdf    |   542.8 |  1.84ms |  2.56ms | ±1.07% |     272 |
| pdf-lib   |    28.6 | 35.00ms | 41.54ms | ±4.40% |      15 |

- **libpdf** is 19.00x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   16.9K |  59us |  118us | ±2.32% |   8,473 |
| pdf-lib   |    3.7K | 268us | 1.06ms | ±2.93% |   1,864 |

- **libpdf** is 4.55x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    8.5K | 118us |  480us | ±1.65% |   4,234 |
| pdf-lib   |    2.9K | 340us | 1.42ms | ±2.60% |   1,470 |

- **libpdf** is 2.88x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   764.9 | 1.31ms | 5.47ms | ±6.67% |     383 |
| libpdf    |   241.5 | 4.14ms | 6.70ms | ±3.59% |     121 |

- **pdf-lib** is 3.17x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   511.4 |  1.96ms |  3.26ms | ±2.23% |     256 |
| pdf-lib   |    13.7 | 72.99ms | 79.95ms | ±3.75% |      10 |

- **libpdf** is 37.32x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    19.5 | 51.22ms | 56.71ms | ±4.93% |      10 |
| pdf-lib   |    13.9 | 71.75ms | 77.42ms | ±2.91% |      10 |

- **libpdf** is 1.40x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| libpdf    |   256.7 | 3.90ms | 5.63ms | ±2.18% |     129 |
| pdf-lib   |   125.3 | 7.98ms | 9.28ms | ±1.19% |      63 |

- **libpdf** is 2.05x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    16.3 | 61.32ms | 64.93ms | ±2.04% |       9 |
| pdf-lib   |    15.5 | 64.53ms | 69.01ms | ±3.97% |       8 |

- **libpdf** is 1.05x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.889 | 1.12s | 1.12s | ±0.00% |       1 |
| pdf-lib   |   0.830 | 1.21s | 1.21s | ±0.00% |       1 |

- **libpdf** is 1.07x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   153.7 |  6.51ms |  7.95ms | ±2.18% |      77 |
| pdf-lib   |    93.8 | 10.67ms | 12.89ms | ±1.53% |      47 |

- **libpdf** is 1.64x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    20.3 | 49.29ms | 51.29ms | ±1.50% |      11 |
| libpdf    |    19.9 | 50.31ms | 51.30ms | ±0.96% |      10 |

- **pdf-lib** is 1.02x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |    1.1K |   937us |  2.02ms | ±2.67% |     534 |
| copy 10 pages from 100-page PDF |   171.8 |  5.82ms | 10.40ms | ±2.47% |      86 |
| copy all 100 pages              |    42.3 | 23.61ms | 25.64ms | ±1.09% |      22 |

- **copy 1 page** is 6.21x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 25.20x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |    1.1K | 907us | 1.69ms | ±1.63% |     552 |
| duplicate page 0                          |    1.1K | 913us | 1.72ms | ±1.81% |     548 |

- **duplicate all pages (double the document)** is 1.01x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   727.6 |  1.37ms |  2.15ms | ±1.42% |     364 |
| merge 10 small PDFs     |   135.7 |  7.37ms | 12.03ms | ±2.41% |      68 |
| merge 2 x 100-page PDFs |    21.6 | 46.20ms | 49.17ms | ±2.56% |      11 |

- **merge 2 small PDFs** is 5.36x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 33.61x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   163.0 |  6.14ms |  9.99ms | ±1.75% |      82 |
| draw 100 rectangles                 |   141.9 |  7.05ms | 10.63ms | ±3.46% |      71 |
| draw 100 circles                    |   115.4 |  8.66ms | 12.55ms | ±2.12% |      58 |
| draw 100 text lines (standard font) |   113.7 |  8.80ms | 14.54ms | ±2.52% |      57 |
| create 10 pages with mixed content  |    81.8 | 12.23ms | 12.91ms | ±0.90% |      41 |

- **draw 100 lines** is 1.15x faster than draw 100 rectangles
- **draw 100 lines** is 1.41x faster than draw 100 circles
- **draw 100 lines** is 1.43x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.99x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   396.7 |  2.52ms |  4.34ms | ±1.70% |     199 |
| get form fields   |   361.6 |  2.77ms |  5.36ms | ±3.42% |     181 |
| flatten form      |   110.0 |  9.09ms | 11.92ms | ±2.21% |      55 |
| fill text fields  |    83.1 | 12.04ms | 18.25ms | ±4.15% |      42 |

- **read field values** is 1.10x faster than get form fields
- **read field values** is 3.61x faster than flatten form
- **read field values** is 4.78x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   20.6K |   49us |  101us | ±2.72% |  10,296 |
| load medium PDF (19KB) |   12.5K |   80us |  131us | ±3.60% |   6,270 |
| load form PDF (116KB)  |   953.8 | 1.05ms | 1.93ms | ±1.55% |     477 |
| load heavy PDF (9.9MB) |   561.3 | 1.78ms | 2.21ms | ±0.70% |     281 |

- **load small PDF (888B)** is 1.64x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 21.59x faster than load form PDF (116KB)
- **load small PDF (888B)** is 36.68x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |   11.9K |   84us |  159us | ±3.04% |   5,933 |
| incremental save (19KB)            |    3.0K |  334us |  943us | ±2.10% |   1,499 |
| save with modifications (19KB)     |    1.1K |  936us | 2.88ms | ±3.52% |     534 |
| save heavy PDF (9.9MB)             |   500.2 | 2.00ms | 3.66ms | ±2.87% |     251 |
| incremental save heavy PDF (9.9MB) |   231.4 | 4.32ms | 5.41ms | ±1.21% |     116 |

- **save unmodified (19KB)** is 3.96x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.11x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 23.72x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 51.27x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.1K |   930us |  2.06ms | ±2.77% |     538 |
| extractPages (1 page from 100-page PDF)  |   286.0 |  3.50ms |  5.93ms | ±1.87% |     143 |
| extractPages (1 page from 2000-page PDF) |    16.5 | 60.50ms | 63.94ms | ±2.78% |      10 |

- **extractPages (1 page from small PDF)** is 3.76x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 65.08x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    16.7 | 59.83ms | 64.13ms | ±3.37% |       9 |
| split 2000-page PDF (0.9MB) |   0.953 |   1.05s |   1.05s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.54x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    15.9 | 62.87ms | 64.62ms | ±2.20% |       8 |
| extract first 100 pages from 2000-page PDF             |    12.4 | 80.46ms | 83.03ms | ±2.38% |       7 |
| extract every 10th page from 2000-page PDF (200 pages) |    11.1 | 90.33ms | 92.88ms | ±1.95% |       6 |

- **extract first 10 pages from 2000-page PDF** is 1.28x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.44x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
