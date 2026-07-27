# Benchmark Report

> Generated on 2026-07-27 at 09:49:49 UTC
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

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    69.5 |  14.39ms |  15.19ms | ±1.16% |      35 |
| @cantoo/pdf-lib |     5.2 | 192.90ms | 195.46ms | ±0.61% |      10 |
| pdf-lib         |     5.1 | 195.70ms | 198.43ms | ±0.75% |      10 |

- **libpdf** is 13.40x faster than @cantoo/pdf-lib
- **libpdf** is 13.60x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   20.1K |  50us |  112us | ±3.01% |  10,049 |
| pdf-lib         |    4.4K | 226us | 1.24ms | ±3.28% |   2,216 |
| @cantoo/pdf-lib |    4.3K | 235us | 1.15ms | ±2.66% |   2,131 |

- **libpdf** is 4.54x faster than pdf-lib
- **libpdf** is 4.72x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   12.2K |  82us |  127us | ±0.88% |   6,084 |
| @cantoo/pdf-lib |    3.5K | 283us | 1.81ms | ±3.83% |   1,773 |
| pdf-lib         |    3.4K | 297us | 1.34ms | ±2.90% |   1,686 |

- **libpdf** is 3.44x faster than @cantoo/pdf-lib
- **libpdf** is 3.61x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    3.8K |  260us |  704us | ±1.37% |   1,923 |
| pdf-lib         |    1.0K |  959us | 4.26ms | ±6.28% |     525 |
| @cantoo/pdf-lib |   879.6 | 1.14ms | 3.17ms | ±4.79% |     440 |

- **libpdf** is 3.69x faster than pdf-lib
- **libpdf** is 4.37x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    66.8 |  14.98ms |  22.60ms | ±3.68% |      34 |
| pdf-lib         |     3.6 | 278.08ms | 291.09ms | ±1.76% |      10 |
| @cantoo/pdf-lib |     2.1 | 468.92ms | 488.87ms | ±1.60% |      10 |

- **libpdf** is 18.57x faster than pdf-lib
- **libpdf** is 31.31x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     3.8 | 264.44ms | 280.24ms | ±1.56% |      10 |
| pdf-lib         |     3.6 | 274.38ms | 286.73ms | ±1.29% |      10 |
| @cantoo/pdf-lib |     2.1 | 474.26ms | 489.97ms | ±1.50% |      10 |

- **libpdf** is 1.04x faster than pdf-lib
- **libpdf** is 1.79x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------------- | ------: | -----: | ------: | -----: | ------: |
| libpdf          |   377.4 | 2.65ms |  3.12ms | ±0.76% |     189 |
| pdf-lib         |   130.6 | 7.66ms |  9.09ms | ±1.15% |      66 |
| @cantoo/pdf-lib |   123.0 | 8.13ms | 12.18ms | ±2.64% |      62 |

- **libpdf** is 2.89x faster than pdf-lib
- **libpdf** is 3.07x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------------- | ------: | ------: | ------: | ------: | ------: |
| libpdf          |    35.0 | 28.59ms | 30.97ms |  ±1.61% |      18 |
| pdf-lib         |    19.1 | 52.43ms | 54.77ms |  ±2.03% |      10 |
| @cantoo/pdf-lib |    17.4 | 57.60ms | 77.36ms | ±10.18% |       9 |

- **libpdf** is 1.83x faster than pdf-lib
- **libpdf** is 2.01x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     1.8 | 552.45ms | 552.45ms | ±0.00% |       1 |
| pdf-lib         |   0.988 |    1.01s |    1.01s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.933 |    1.07s |    1.07s | ±0.00% |       1 |

- **libpdf** is 1.83x faster than pdf-lib
- **libpdf** is 1.94x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   293.9 |  3.40ms |  5.04ms | ±1.35% |     147 |
| pdf-lib         |    98.3 | 10.18ms | 10.82ms | ±0.68% |      50 |
| @cantoo/pdf-lib |    87.3 | 11.45ms | 12.16ms | ±0.98% |      44 |

- **libpdf** is 2.99x faster than pdf-lib
- **libpdf** is 3.37x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    85.9 | 11.64ms | 14.18ms | ±1.47% |      44 |
| pdf-lib         |    20.9 | 47.92ms | 48.77ms | ±0.87% |      11 |
| @cantoo/pdf-lib |    17.5 | 57.05ms | 58.36ms | ±0.70% |       9 |

- **libpdf** is 4.12x faster than pdf-lib
- **libpdf** is 4.90x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    60.3 | 16.58ms | 32.86ms | ±7.09% |      31 |
| pdf-lib         |    44.3 | 22.57ms | 32.20ms | ±4.58% |      23 |
| @cantoo/pdf-lib |    42.6 | 23.50ms | 36.45ms | ±7.14% |      22 |

- **libpdf** is 1.36x faster than pdf-lib
- **libpdf** is 1.42x faster than @cantoo/pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    78.8 | 12.69ms | 15.34ms | ±2.42% |      40 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    38.2 | 26.20ms | 39.31ms | ±5.90% |      20 |

- **libpdf** is 2.06x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |    p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | -----: | -----: | ------: |
| copy 1 page                     |    1.4K |  731us | 1.32ms | ±1.72% |     684 |
| copy 10 pages from 100-page PDF |   300.5 | 3.33ms | 5.88ms | ±2.18% |     151 |
| copy all 100 pages              |   173.3 | 5.77ms | 6.46ms | ±0.74% |      87 |

- **copy 1 page** is 4.55x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.89x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |    1.4K | 713us | 1.06ms | ±0.74% |     701 |
| duplicate page 0                          |    1.4K | 715us | 1.06ms | ±0.78% |     700 |

- **duplicate all pages (double the document)** is 1.00x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   896.3 |  1.12ms |  2.07ms | ±1.44% |     449 |
| merge 10 small PDFs     |   171.5 |  5.83ms |  8.76ms | ±1.51% |      86 |
| merge 2 x 100-page PDFs |    92.1 | 10.86ms | 11.33ms | ±0.71% |      47 |

- **merge 2 small PDFs** is 5.23x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.73x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    2.3K |  440us |  914us | ±1.21% |   1,137 |
| draw 100 rectangles                 |    2.1K |  466us |  932us | ±1.30% |   1,072 |
| draw 100 circles                    |    1.4K |  693us | 1.31ms | ±1.39% |     722 |
| create 10 pages with mixed content  |   920.3 | 1.09ms | 1.70ms | ±1.21% |     461 |
| draw 100 text lines (standard font) |   809.3 | 1.24ms | 2.13ms | ±1.61% |     406 |

- **draw 100 lines** is 1.06x faster than draw 100 rectangles
- **draw 100 lines** is 1.58x faster than draw 100 circles
- **draw 100 lines** is 2.47x faster than create 10 pages with mixed content
- **draw 100 lines** is 2.81x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |   Mean |     p99 |    RME | Samples |
| :---------------- | ------: | -----: | ------: | -----: | ------: |
| read field values |   490.4 | 2.04ms |  3.74ms | ±2.00% |     246 |
| get form fields   |   461.7 | 2.17ms |  3.96ms | ±2.30% |     231 |
| flatten form      |   167.8 | 5.96ms |  8.17ms | ±1.32% |      84 |
| fill text fields  |   115.0 | 8.69ms | 12.34ms | ±3.64% |      58 |

- **read field values** is 1.06x faster than get form fields
- **read field values** is 2.92x faster than flatten form
- **read field values** is 4.26x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   24.9K |    40us |    80us | ±2.28% |  12,428 |
| load medium PDF (19KB) |   15.6K |    64us |   112us | ±0.51% |   7,810 |
| load form PDF (116KB)  |    1.1K |   926us |  1.60ms | ±1.12% |     541 |
| load heavy PDF (2.0MB) |    72.9 | 13.71ms | 14.27ms | ±1.19% |      37 |

- **load small PDF (888B)** is 1.59x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 23.02x faster than load form PDF (116KB)
- **load small PDF (888B)** is 340.81x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   14.1K |    71us |   162us | ±2.01% |   7,064 |
| incremental save (19KB)            |    9.1K |   110us |   262us | ±1.01% |   4,554 |
| save with modifications (19KB)     |    1.7K |   581us |  1.03ms | ±1.12% |     861 |
| save heavy PDF (2.0MB)             |    72.0 | 13.89ms | 15.50ms | ±1.53% |      36 |
| incremental save heavy PDF (2.0MB) |    67.1 | 14.89ms | 17.74ms | ±1.74% |      34 |

- **save unmodified (19KB)** is 1.55x faster than incremental save (19KB)
- **save unmodified (19KB)** is 8.21x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 196.22x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 210.41x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.3K |   777us |  1.56ms | ±2.50% |     644 |
| extractPages (1 page from 100-page PDF)  |   383.5 |  2.61ms |  4.69ms | ±1.39% |     192 |
| extractPages (1 page from 2000-page PDF) |    24.0 | 41.60ms | 42.51ms | ±0.84% |      13 |

- **extractPages (1 page from small PDF)** is 3.36x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 53.55x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    34.3 |  29.12ms |  36.01ms | ±3.66% |      18 |
| split 2000-page PDF (0.9MB) |     1.9 | 523.87ms | 523.87ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.99x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    23.4 | 42.76ms | 44.65ms | ±1.36% |      12 |
| extract first 100 pages from 2000-page PDF             |    21.7 | 45.99ms | 46.96ms | ±1.11% |      11 |
| extract every 10th page from 2000-page PDF (200 pages) |    19.7 | 50.74ms | 58.80ms | ±4.17% |      10 |

- **extract first 10 pages from 2000-page PDF** is 1.08x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.19x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
