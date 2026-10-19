# Benchmark Report

> Generated on 2026-10-19 at 12:16:54 UTC
>
> System: linux | AMD EPYC 9V45 96-Core Processor (4 cores) | 16GB RAM | Bun 1.4.3

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
| libpdf    |    98.2 |  10.19ms |  13.92ms | ±2.13% |      50 |
| pdf-lib   |     5.4 | 183.87ms | 188.14ms | ±0.79% |      10 |

- **libpdf** is 18.05x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   23.5K |  43us |  87us | ±1.50% |  11,756 |
| pdf-lib   |    7.0K | 143us | 998us | ±3.20% |   3,500 |

- **libpdf** is 3.36x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   12.3K |  81us |  307us | ±1.52% |   6,172 |
| pdf-lib   |    5.1K | 195us | 1.05ms | ±2.73% |   2,571 |

- **libpdf** is 2.40x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |    1.5K |  672us | 3.58ms | ±6.12% |     744 |
| libpdf    |   522.0 | 1.92ms | 2.64ms | ±1.87% |     262 |

- **pdf-lib** is 2.85x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |   112.7 |   8.87ms |  10.05ms | ±1.67% |      57 |
| pdf-lib   |     4.1 | 242.12ms | 256.38ms | ±2.08% |      10 |

- **libpdf** is 27.28x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    50.3 |  19.87ms |  23.14ms | ±1.78% |      26 |
| pdf-lib   |     4.2 | 238.51ms | 254.70ms | ±1.91% |      10 |

- **libpdf** is 12.01x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| libpdf    |   370.4 | 2.70ms | 3.92ms | ±1.90% |     186 |
| pdf-lib   |   146.2 | 6.84ms | 8.82ms | ±1.34% |      74 |

- **libpdf** is 2.53x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    27.0 | 37.06ms | 42.85ms | ±2.90% |      14 |
| pdf-lib   |    25.9 | 38.63ms | 48.31ms | ±5.40% |      13 |

- **libpdf** is 1.04x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |     1.5 | 673.73ms | 673.73ms | ±0.00% |       1 |
| pdf-lib   |     1.4 | 734.67ms | 734.67ms | ±0.00% |       1 |

- **libpdf** is 1.09x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   238.3 | 4.20ms |  5.48ms | ±2.32% |     120 |
| pdf-lib   |   106.9 | 9.35ms | 10.73ms | ±1.36% |      54 |

- **libpdf** is 2.23x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    33.5 | 29.81ms | 45.24ms | ±7.17% |      17 |
| pdf-lib   |    21.1 | 47.32ms | 49.80ms | ±2.30% |      11 |

- **libpdf** is 1.59x faster than pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |    1.5K |   653us |  1.61ms | ±2.80% |     766 |
| copy 10 pages from 100-page PDF |   225.3 |  4.44ms | 10.86ms | ±6.18% |     113 |
| copy all 100 pages              |    69.1 | 14.47ms | 16.40ms | ±1.68% |      35 |

- **copy 1 page** is 6.80x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 22.16x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.6K | 620us | 1.49ms | ±1.93% |     806 |
| duplicate all pages (double the document) |    1.6K | 633us | 1.53ms | ±2.24% |     790 |

- **duplicate page 0** is 1.02x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |    1.0K |   976us |  1.82ms | ±1.89% |     513 |
| merge 10 small PDFs     |   198.7 |  5.03ms |  6.33ms | ±3.13% |     100 |
| merge 2 x 100-page PDFs |    35.8 | 27.96ms | 36.41ms | ±4.51% |      18 |

- **merge 2 small PDFs** is 5.16x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 28.66x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | ------: | -----: | ------: |
| draw 100 lines                      |   282.4 | 3.54ms |  4.29ms | ±1.21% |     142 |
| draw 100 rectangles                 |   233.7 | 4.28ms |  7.25ms | ±3.26% |     117 |
| draw 100 circles                    |   183.7 | 5.44ms |  7.91ms | ±1.63% |      92 |
| draw 100 text lines (standard font) |   173.0 | 5.78ms |  8.02ms | ±1.76% |      87 |
| create 10 pages with mixed content  |   131.9 | 7.58ms | 10.63ms | ±1.89% |      66 |

- **draw 100 lines** is 1.21x faster than draw 100 rectangles
- **draw 100 lines** is 1.54x faster than draw 100 circles
- **draw 100 lines** is 1.63x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.14x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |   Mean |     p99 |    RME | Samples |
| :---------------- | ------: | -----: | ------: | -----: | ------: |
| read field values |   573.3 | 1.74ms |  2.75ms | ±1.43% |     287 |
| get form fields   |   536.5 | 1.86ms |  4.04ms | ±2.50% |     269 |
| flatten form      |   156.9 | 6.37ms |  9.33ms | ±2.20% |      79 |
| fill text fields  |   113.2 | 8.83ms | 17.68ms | ±4.69% |      57 |

- **read field values** is 1.07x faster than get form fields
- **read field values** is 3.65x faster than flatten form
- **read field values** is 5.06x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   29.0K |   35us |   66us | ±1.26% |  14,486 |
| load medium PDF (19KB) |   18.7K |   53us |   69us | ±1.06% |   9,373 |
| load form PDF (116KB)  |    1.3K |  758us | 1.41ms | ±1.35% |     660 |
| load heavy PDF (2.0MB) |   118.6 | 8.43ms | 9.29ms | ±1.16% |      60 |

- **load small PDF (888B)** is 1.55x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 21.95x faster than load form PDF (116KB)
- **load small PDF (888B)** is 244.24x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |   Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | ------: | -----: | ------: |
| save unmodified (19KB)             |   17.4K |   58us |   139us | ±1.00% |   8,682 |
| incremental save (19KB)            |    5.8K |  173us |   491us | ±1.27% |   2,893 |
| save with modifications (19KB)     |    1.5K |  649us |  2.03ms | ±3.65% |     771 |
| save heavy PDF (2.0MB)             |   117.2 | 8.53ms | 10.38ms | ±1.71% |      59 |
| incremental save heavy PDF (2.0MB) |   103.8 | 9.63ms | 10.68ms | ±1.47% |      52 |

- **save unmodified (19KB)** is 3.00x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.27x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 148.11x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 167.23x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |     RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | ------: | ------: |
| extractPages (1 page from small PDF)     |    1.6K |   629us |  1.49ms |  ±2.45% |     795 |
| extractPages (1 page from 100-page PDF)  |   405.2 |  2.47ms |  3.23ms |  ±1.51% |     203 |
| extractPages (1 page from 2000-page PDF) |    21.4 | 46.73ms | 66.22ms | ±10.01% |      11 |

- **extractPages (1 page from small PDF)** is 3.92x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 74.29x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    26.5 |  37.71ms |  44.58ms | ±4.80% |      14 |
| split 2000-page PDF (0.9MB) |     1.5 | 647.79ms | 647.79ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.18x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |     RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | ------: | ------: |
| extract first 10 pages from 2000-page PDF              |    21.9 | 45.57ms | 48.50ms |  ±2.64% |      11 |
| extract first 100 pages from 2000-page PDF             |    17.6 | 56.91ms | 60.32ms |  ±2.30% |       9 |
| extract every 10th page from 2000-page PDF (200 pages) |    14.0 | 71.60ms | 90.75ms | ±12.75% |       7 |

- **extract first 10 pages from 2000-page PDF** is 1.25x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.57x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
