# Benchmark Report

> Generated on 2026-11-16 at 14:56:20 UTC
>
> System: linux | AMD EPYC 9V74 80-Core Processor (4 cores) | 16GB RAM | Bun 1.4.4

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
| libpdf    |    76.6 |  13.05ms |  16.99ms | ±3.53% |      39 |
| pdf-lib   |     5.1 | 196.13ms | 203.04ms | ±1.41% |      10 |

- **libpdf** is 15.02x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   13.3K |  75us |  382us | ±5.05% |   6,674 |
| pdf-lib   |    3.8K | 260us | 1.50ms | ±5.32% |   1,921 |

- **libpdf** is 3.48x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    8.1K | 124us |  368us | ±1.60% |   4,039 |
| pdf-lib   |    2.9K | 351us | 1.77ms | ±4.81% |   1,426 |

- **libpdf** is 2.83x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |     p99 |     RME | Samples |
| :-------- | ------: | -----: | ------: | ------: | ------: |
| pdf-lib   |    1.0K |  985us |  4.15ms |  ±5.09% |     508 |
| libpdf    |   196.3 | 5.10ms | 14.14ms | ±13.56% |      99 |

- **pdf-lib** is 5.17x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    77.9 |  12.83ms |  19.58ms | ±4.24% |      40 |
| pdf-lib   |     3.6 | 274.83ms | 293.39ms | ±2.83% |      10 |

- **libpdf** is 21.42x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    36.5 |  27.38ms |  35.63ms | ±5.60% |      19 |
| pdf-lib   |     3.7 | 273.36ms | 277.72ms | ±0.59% |      10 |

- **libpdf** is 9.98x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   251.3 | 3.98ms |  5.85ms | ±2.46% |     126 |
| pdf-lib   |   132.3 | 7.56ms | 11.29ms | ±2.87% |      67 |

- **libpdf** is 1.90x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------- | ------: | ------: | ------: | ------: | ------: |
| pdf-lib   |    16.1 | 62.17ms | 80.17ms | ±17.44% |       9 |
| libpdf    |    14.8 | 67.46ms | 78.37ms |  ±7.61% |       8 |

- **pdf-lib** is 1.09x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.911 | 1.10s | 1.10s | ±0.00% |       1 |
| libpdf    |   0.778 | 1.29s | 1.29s | ±0.00% |       1 |

- **pdf-lib** is 1.17x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   131.8 |  7.59ms | 15.28ms | ±9.85% |      66 |
| pdf-lib   |    97.4 | 10.26ms | 14.05ms | ±2.79% |      49 |

- **libpdf** is 1.35x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    20.5 | 48.74ms | 52.91ms | ±2.58% |      11 |
| libpdf    |    15.9 | 62.70ms | 65.19ms | ±1.88% |       8 |

- **pdf-lib** is 1.29x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |    1.1K |   909us |  1.97ms | ±2.47% |     552 |
| copy 10 pages from 100-page PDF |   148.4 |  6.74ms | 12.11ms | ±7.50% |      75 |
| copy all 100 pages              |    32.7 | 30.54ms | 37.23ms | ±3.63% |      17 |

- **copy 1 page** is 7.41x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 33.60x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.1K | 893us | 2.28ms | ±2.39% |     560 |
| duplicate all pages (double the document) |    1.1K | 895us | 2.13ms | ±2.24% |     559 |

- **duplicate page 0** is 1.00x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   734.9 |  1.36ms |  2.93ms | ±2.24% |     368 |
| merge 10 small PDFs     |   120.7 |  8.29ms | 16.81ms | ±6.78% |      61 |
| merge 2 x 100-page PDFs |    18.8 | 53.24ms | 60.21ms | ±4.65% |      10 |

- **merge 2 small PDFs** is 6.09x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 39.12x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   141.0 |  7.09ms | 11.19ms | ±8.40% |      71 |
| draw 100 rectangles                 |   108.8 |  9.19ms | 19.70ms | ±9.98% |      55 |
| draw 100 text lines (standard font) |    98.1 | 10.19ms | 16.91ms | ±8.56% |      50 |
| draw 100 circles                    |    95.8 | 10.43ms | 17.55ms | ±9.75% |      49 |
| create 10 pages with mixed content  |    70.0 | 14.29ms | 17.73ms | ±7.07% |      36 |

- **draw 100 lines** is 1.30x faster than draw 100 rectangles
- **draw 100 lines** is 1.44x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.47x faster than draw 100 circles
- **draw 100 lines** is 2.01x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   381.9 |  2.62ms |  5.25ms | ±2.73% |     191 |
| get form fields   |   353.3 |  2.83ms |  5.44ms | ±4.40% |     177 |
| flatten form      |   105.5 |  9.48ms | 14.08ms | ±4.55% |      53 |
| fill text fields  |    79.7 | 12.55ms | 21.34ms | ±6.46% |      40 |

- **read field values** is 1.08x faster than get form fields
- **read field values** is 3.62x faster than flatten form
- **read field values** is 4.79x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   18.5K |    54us |   122us | ±3.27% |   9,243 |
| load medium PDF (19KB) |   12.9K |    78us |   173us | ±0.97% |   6,445 |
| load form PDF (116KB)  |   942.4 |  1.06ms |  2.08ms | ±1.81% |     472 |
| load heavy PDF (2.0MB) |    85.7 | 11.67ms | 16.28ms | ±2.45% |      43 |

- **load small PDF (888B)** is 1.43x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 19.62x faster than load form PDF (116KB)
- **load small PDF (888B)** is 215.73x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   11.6K |    86us |   198us | ±3.00% |   5,802 |
| incremental save (19KB)            |    2.5K |   400us |  2.93ms | ±5.90% |   1,251 |
| save with modifications (19KB)     |    1.1K |   870us |  2.02ms | ±2.51% |     575 |
| save heavy PDF (2.0MB)             |    79.2 | 12.63ms | 22.29ms | ±5.97% |      40 |
| incremental save heavy PDF (2.0MB) |    74.4 | 13.44ms | 19.32ms | ±5.42% |      38 |

- **save unmodified (19KB)** is 4.64x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.10x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 146.56x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 155.98x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.1K |   952us |  2.01ms | ±3.87% |     526 |
| extractPages (1 page from 100-page PDF)  |   299.1 |  3.34ms |  5.39ms | ±2.50% |     150 |
| extractPages (1 page from 2000-page PDF) |    15.6 | 64.27ms | 70.56ms | ±5.34% |      10 |

- **extractPages (1 page from small PDF)** is 3.51x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 67.53x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    15.9 | 62.72ms | 70.82ms | ±7.77% |       8 |
| split 2000-page PDF (0.9MB) |   0.887 |   1.13s |   1.13s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.97x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    15.7 |  63.88ms |  69.43ms | ±4.17% |       8 |
| extract first 100 pages from 2000-page PDF             |    11.2 |  88.90ms |  90.69ms | ±1.36% |       6 |
| extract every 10th page from 2000-page PDF (200 pages) |     9.7 | 103.22ms | 110.24ms | ±8.01% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.39x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.62x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
