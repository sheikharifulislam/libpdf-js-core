# Benchmark Report

> Generated on 2026-08-03 at 09:41:18 UTC
>
> System: linux | INTEL(R) XEON(R) PLATINUM 8573C (4 cores) | 16GB RAM | Bun 1.3.14

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

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    70.7 |  14.14ms |  22.27ms | ±3.55% |      36 |
| pdf-lib         |     5.3 | 188.94ms | 192.23ms | ±0.76% |      10 |
| @cantoo/pdf-lib |     5.2 | 192.21ms | 195.45ms | ±0.77% |      10 |

- **libpdf** is 13.36x faster than pdf-lib
- **libpdf** is 13.59x faster than @cantoo/pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   21.1K |  47us |   97us | ±2.02% |  10,530 |
| pdf-lib         |    4.3K | 230us | 1.02ms | ±3.24% |   2,171 |
| @cantoo/pdf-lib |    3.7K | 267us | 1.28ms | ±3.18% |   1,875 |

- **libpdf** is 4.85x faster than pdf-lib
- **libpdf** is 5.63x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   12.0K |  83us |  162us | ±0.91% |   6,023 |
| @cantoo/pdf-lib |    3.5K | 287us | 1.96ms | ±5.33% |   1,744 |
| pdf-lib         |    3.1K | 318us | 1.50ms | ±3.49% |   1,575 |

- **libpdf** is 3.46x faster than @cantoo/pdf-lib
- **libpdf** is 3.82x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    3.9K |  258us |  682us | ±1.46% |   1,938 |
| @cantoo/pdf-lib |   859.2 | 1.16ms | 2.97ms | ±4.50% |     430 |
| pdf-lib         |   850.8 | 1.18ms | 5.63ms | ±8.00% |     426 |

- **libpdf** is 4.51x faster than @cantoo/pdf-lib
- **libpdf** is 4.56x faster than pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    74.2 |  13.48ms |  16.38ms | ±1.48% |      38 |
| pdf-lib         |     3.7 | 273.36ms | 284.29ms | ±1.44% |      10 |
| @cantoo/pdf-lib |     2.1 | 479.94ms | 524.94ms | ±3.14% |      10 |

- **libpdf** is 20.28x faster than pdf-lib
- **libpdf** is 35.61x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     3.8 | 265.47ms | 276.89ms | ±1.44% |      10 |
| pdf-lib         |     3.7 | 270.74ms | 289.20ms | ±1.91% |      10 |
| @cantoo/pdf-lib |     2.2 | 459.72ms | 475.90ms | ±1.59% |      10 |

- **libpdf** is 1.02x faster than pdf-lib
- **libpdf** is 1.73x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |   393.5 | 2.54ms | 3.19ms | ±0.79% |     197 |
| pdf-lib         |   129.8 | 7.71ms | 9.12ms | ±1.09% |      65 |
| @cantoo/pdf-lib |   125.1 | 7.99ms | 9.73ms | ±1.27% |      63 |

- **libpdf** is 3.03x faster than pdf-lib
- **libpdf** is 3.15x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------------- | ------: | ------: | ------: | ------: | ------: |
| libpdf          |    37.9 | 26.38ms | 28.33ms |  ±1.53% |      19 |
| @cantoo/pdf-lib |    17.6 | 56.70ms | 64.26ms |  ±5.23% |       9 |
| pdf-lib         |    16.0 | 62.63ms | 83.50ms | ±10.77% |       9 |

- **libpdf** is 2.15x faster than @cantoo/pdf-lib
- **libpdf** is 2.37x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     2.0 | 501.34ms | 501.34ms | ±0.00% |       1 |
| pdf-lib         |   0.937 |    1.07s |    1.07s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.932 |    1.07s |    1.07s | ±0.00% |       1 |

- **libpdf** is 2.13x faster than pdf-lib
- **libpdf** is 2.14x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   313.0 |  3.19ms |  3.82ms | ±0.85% |     157 |
| pdf-lib         |    95.6 | 10.46ms | 13.56ms | ±1.92% |      48 |
| @cantoo/pdf-lib |    83.3 | 12.01ms | 14.79ms | ±1.77% |      42 |

- **libpdf** is 3.28x faster than pdf-lib
- **libpdf** is 3.76x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    93.0 | 10.75ms | 11.84ms | ±1.21% |      47 |
| pdf-lib         |    20.9 | 47.84ms | 49.39ms | ±1.24% |      11 |
| @cantoo/pdf-lib |    17.2 | 58.18ms | 59.31ms | ±1.19% |       9 |

- **libpdf** is 4.45x faster than pdf-lib
- **libpdf** is 5.41x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    64.8 | 15.42ms | 17.57ms | ±2.23% |      33 |
| pdf-lib         |    43.3 | 23.12ms | 32.43ms | ±5.91% |      22 |
| @cantoo/pdf-lib |    42.9 | 23.30ms | 28.59ms | ±3.94% |      22 |

- **libpdf** is 1.50x faster than pdf-lib
- **libpdf** is 1.51x faster than @cantoo/pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    77.0 | 12.98ms | 16.87ms | ±3.45% |      39 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    37.3 | 26.79ms | 36.67ms | ±5.28% |      19 |

- **libpdf** is 2.06x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |    p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | -----: | -----: | ------: |
| copy 1 page                     |    1.4K |  716us | 1.37ms | ±1.93% |     698 |
| copy 10 pages from 100-page PDF |   311.1 | 3.21ms | 5.49ms | ±1.63% |     156 |
| copy all 100 pages              |   181.8 | 5.50ms | 8.25ms | ±1.44% |      91 |

- **copy 1 page** is 4.49x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.68x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.5K | 686us | 1.04ms | ±0.82% |     729 |
| duplicate all pages (double the document) |    1.5K | 689us | 1.05ms | ±0.90% |     726 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   932.6 |  1.07ms |  1.96ms | ±1.31% |     467 |
| merge 10 small PDFs     |   182.9 |  5.47ms |  6.19ms | ±0.94% |      92 |
| merge 2 x 100-page PDFs |    96.3 | 10.39ms | 15.19ms | ±2.20% |      49 |

- **merge 2 small PDFs** is 5.10x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.69x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    2.6K |  390us |  850us | ±1.46% |   1,281 |
| draw 100 rectangles                 |    2.4K |  416us |  920us | ±1.46% |   1,203 |
| draw 100 circles                    |    1.5K |  689us | 1.45ms | ±1.76% |     726 |
| create 10 pages with mixed content  |   940.1 | 1.06ms | 1.81ms | ±1.60% |     471 |
| draw 100 text lines (standard font) |   808.8 | 1.24ms | 2.19ms | ±1.93% |     405 |

- **draw 100 lines** is 1.06x faster than draw 100 rectangles
- **draw 100 lines** is 1.77x faster than draw 100 circles
- **draw 100 lines** is 2.72x faster than create 10 pages with mixed content
- **draw 100 lines** is 3.17x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |   Mean |     p99 |    RME | Samples |
| :---------------- | ------: | -----: | ------: | -----: | ------: |
| read field values |   501.0 | 2.00ms |  3.40ms | ±1.73% |     251 |
| get form fields   |   467.2 | 2.14ms |  3.58ms | ±2.29% |     234 |
| flatten form      |   167.2 | 5.98ms | 13.38ms | ±3.40% |      84 |
| fill text fields  |   115.1 | 8.68ms | 13.67ms | ±4.49% |      58 |

- **read field values** is 1.07x faster than get form fields
- **read field values** is 3.00x faster than flatten form
- **read field values** is 4.35x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   26.8K |    37us |    77us | ±2.43% |  13,407 |
| load medium PDF (19KB) |   17.0K |    59us |   104us | ±0.45% |   8,476 |
| load form PDF (116KB)  |    1.1K |   872us |  1.58ms | ±1.34% |     574 |
| load heavy PDF (2.0MB) |    78.9 | 12.67ms | 14.17ms | ±1.45% |      40 |

- **load small PDF (888B)** is 1.58x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 23.37x faster than load form PDF (116KB)
- **load small PDF (888B)** is 339.76x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   14.2K |    70us |   159us | ±2.15% |   7,124 |
| incremental save (19KB)            |   10.1K |    99us |   272us | ±1.18% |   5,052 |
| save with modifications (19KB)     |    1.8K |   551us |  1.06ms | ±1.47% |     908 |
| save heavy PDF (2.0MB)             |    74.5 | 13.43ms | 14.67ms | ±1.38% |      38 |
| incremental save heavy PDF (2.0MB) |    72.6 | 13.77ms | 14.61ms | ±1.09% |      37 |

- **save unmodified (19KB)** is 1.41x faster than incremental save (19KB)
- **save unmodified (19KB)** is 7.85x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 191.28x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 196.23x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.4K |   709us |  1.41ms | ±1.89% |     706 |
| extractPages (1 page from 100-page PDF)  |   400.5 |  2.50ms |  3.00ms | ±0.82% |     201 |
| extractPages (1 page from 2000-page PDF) |    25.7 | 38.97ms | 45.85ms | ±3.31% |      13 |

- **extractPages (1 page from small PDF)** is 3.52x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 55.00x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    37.3 |  26.81ms |  32.77ms | ±4.10% |      19 |
| split 2000-page PDF (0.9MB) |     2.1 | 475.48ms | 475.48ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.74x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    25.7 | 38.93ms | 39.99ms | ±0.78% |      13 |
| extract first 100 pages from 2000-page PDF             |    24.0 | 41.64ms | 42.45ms | ±1.07% |      13 |
| extract every 10th page from 2000-page PDF (200 pages) |    21.6 | 46.22ms | 53.73ms | ±3.97% |      11 |

- **extract first 10 pages from 2000-page PDF** is 1.07x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.19x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
