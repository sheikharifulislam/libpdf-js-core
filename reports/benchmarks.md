# Benchmark Report

> Generated on 2026-09-28 at 13:02:59 UTC
>
> System: linux | INTEL(R) XEON(R) PLATINUM 8573C (4 cores) | 16GB RAM | Bun 1.4.2

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
| libpdf    |    80.8 |  12.37ms |  13.79ms | ±1.75% |      41 |
| pdf-lib   |     4.9 | 203.75ms | 214.83ms | ±1.73% |      10 |

- **libpdf** is 16.47x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   13.5K |  74us |  166us | ±2.01% |   6,768 |
| pdf-lib   |    3.7K | 272us | 1.27ms | ±3.12% |   1,841 |

- **libpdf** is 3.68x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    7.3K | 137us |  538us | ±1.98% |   3,660 |
| pdf-lib   |    2.5K | 401us | 2.04ms | ±4.21% |   1,247 |

- **libpdf** is 2.94x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   838.5 | 1.19ms | 4.77ms | ±6.17% |     420 |
| libpdf    |   234.7 | 4.26ms | 6.72ms | ±3.60% |     118 |

- **pdf-lib** is 3.57x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    81.2 |  12.32ms |  16.42ms | ±2.62% |      41 |
| pdf-lib   |     3.4 | 294.95ms | 312.44ms | ±1.89% |      10 |

- **libpdf** is 23.94x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    35.5 |  28.13ms |  30.12ms | ±1.90% |      18 |
| pdf-lib   |     3.4 | 296.13ms | 313.21ms | ±1.92% |      10 |

- **libpdf** is 10.53x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   235.3 | 4.25ms |  6.19ms | ±2.85% |     118 |
| pdf-lib   |   120.0 | 8.33ms | 10.99ms | ±2.12% |      61 |

- **libpdf** is 1.96x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    15.6 | 64.15ms | 72.89ms | ±5.15% |       8 |
| libpdf    |    14.1 | 70.84ms | 73.56ms | ±1.92% |       8 |

- **pdf-lib** is 1.10x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.818 | 1.22s | 1.22s | ±0.00% |       1 |
| libpdf    |   0.750 | 1.33s | 1.33s | ±0.00% |       1 |

- **pdf-lib** is 1.09x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   141.6 |  7.06ms |  9.53ms | ±3.03% |      71 |
| pdf-lib   |    93.5 | 10.70ms | 11.52ms | ±1.18% |      47 |

- **libpdf** is 1.52x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    20.3 | 49.31ms | 50.97ms | ±1.36% |      11 |
| pdf-lib   |    19.8 | 50.40ms | 51.59ms | ±0.77% |      10 |

- **libpdf** is 1.02x faster than pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   973.1 |  1.03ms |  2.11ms | ±2.92% |     487 |
| copy 10 pages from 100-page PDF |   152.1 |  6.57ms |  9.43ms | ±2.92% |      77 |
| copy all 100 pages              |    40.0 | 24.97ms | 27.27ms | ±2.23% |      21 |

- **copy 1 page** is 6.40x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 24.30x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.0K | 974us | 2.30ms | ±2.43% |     514 |
| duplicate all pages (double the document) |    1.0K | 979us | 2.34ms | ±2.44% |     511 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   673.3 |  1.49ms |  2.84ms | ±2.46% |     337 |
| merge 10 small PDFs     |   129.7 |  7.71ms | 10.71ms | ±2.49% |      65 |
| merge 2 x 100-page PDFs |    20.5 | 48.90ms | 67.99ms | ±9.60% |      11 |

- **merge 2 small PDFs** is 5.19x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 32.92x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   153.4 |  6.52ms |  8.52ms | ±1.60% |      77 |
| draw 100 rectangles                 |   123.9 |  8.07ms | 11.56ms | ±4.10% |      62 |
| draw 100 circles                    |   104.0 |  9.62ms | 15.07ms | ±2.73% |      52 |
| draw 100 text lines (standard font) |    95.3 | 10.49ms | 13.89ms | ±2.00% |      48 |
| create 10 pages with mixed content  |    71.9 | 13.91ms | 19.45ms | ±2.96% |      36 |

- **draw 100 lines** is 1.24x faster than draw 100 rectangles
- **draw 100 lines** is 1.48x faster than draw 100 circles
- **draw 100 lines** is 1.61x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.13x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   374.3 |  2.67ms |  4.80ms | ±2.36% |     188 |
| get form fields   |   352.8 |  2.83ms |  5.10ms | ±4.17% |     177 |
| flatten form      |    97.9 | 10.21ms | 12.15ms | ±2.50% |      49 |
| fill text fields  |    74.0 | 13.51ms | 16.11ms | ±2.92% |      38 |

- **read field values** is 1.06x faster than get form fields
- **read field values** is 3.82x faster than flatten form
- **read field values** is 5.06x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   19.4K |    52us |   120us | ±1.97% |   9,698 |
| load medium PDF (19KB) |   13.1K |    76us |   118us | ±1.39% |   6,564 |
| load form PDF (116KB)  |   956.4 |  1.05ms |  2.07ms | ±1.82% |     479 |
| load heavy PDF (2.0MB) |    78.2 | 12.79ms | 14.93ms | ±2.00% |      40 |

- **load small PDF (888B)** is 1.48x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.28x faster than load form PDF (116KB)
- **load small PDF (888B)** is 248.08x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   12.1K |    83us |   193us | ±2.52% |   6,033 |
| incremental save (19KB)            |    2.8K |   357us |   890us | ±1.79% |   1,402 |
| save with modifications (19KB)     |    1.0K |   973us |  2.39ms | ±2.49% |     516 |
| save heavy PDF (2.0MB)             |    85.6 | 11.69ms | 13.34ms | ±1.87% |      43 |
| incremental save heavy PDF (2.0MB) |    70.8 | 14.12ms | 15.72ms | ±1.70% |      36 |

- **save unmodified (19KB)** is 4.30x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.73x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 140.99x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 170.40x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   971.6 |  1.03ms |  2.13ms | ±3.28% |     486 |
| extractPages (1 page from 100-page PDF)  |   273.5 |  3.66ms |  4.72ms | ±1.95% |     137 |
| extractPages (1 page from 2000-page PDF) |    16.2 | 61.58ms | 64.96ms | ±2.87% |      10 |

- **extractPages (1 page from small PDF)** is 3.55x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 59.83x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    13.2 | 75.70ms | 79.26ms | ±3.71% |       7 |
| split 2000-page PDF (0.9MB) |   0.778 |   1.29s |   1.29s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.99x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    14.6 |  68.64ms |  81.05ms | ±7.71% |       8 |
| extract first 100 pages from 2000-page PDF             |    11.4 |  87.42ms |  89.71ms | ±2.45% |       6 |
| extract every 10th page from 2000-page PDF (200 pages) |     9.5 | 105.23ms | 117.59ms | ±8.62% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.27x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.53x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
