# Benchmark Report

> Generated on 2026-08-10 at 07:29:40 UTC
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
| libpdf          |    61.3 |  16.30ms |  20.97ms | ±2.31% |      31 |
| @cantoo/pdf-lib |     5.0 | 199.77ms | 202.41ms | ±0.53% |      10 |
| pdf-lib         |     5.0 | 200.47ms | 202.44ms | ±0.56% |      10 |

- **libpdf** is 12.25x faster than @cantoo/pdf-lib
- **libpdf** is 12.30x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   20.5K |  49us |  103us | ±2.97% |  10,232 |
| pdf-lib         |    4.5K | 224us | 1.27ms | ±2.90% |   2,230 |
| @cantoo/pdf-lib |    3.8K | 263us | 1.64ms | ±3.69% |   1,900 |

- **libpdf** is 4.59x faster than pdf-lib
- **libpdf** is 5.39x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   11.2K |  89us |  171us | ±1.92% |   5,621 |
| @cantoo/pdf-lib |    3.3K | 304us | 2.02ms | ±4.33% |   1,646 |
| pdf-lib         |    2.9K | 342us | 1.80ms | ±5.03% |   1,463 |

- **libpdf** is 3.42x faster than @cantoo/pdf-lib
- **libpdf** is 3.84x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    3.7K |  274us |  831us | ±1.81% |   1,828 |
| pdf-lib         |   947.7 | 1.06ms | 5.41ms | ±7.30% |     474 |
| @cantoo/pdf-lib |   847.8 | 1.18ms | 3.77ms | ±6.09% |     424 |

- **libpdf** is 3.86x faster than pdf-lib
- **libpdf** is 4.31x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    63.3 |  15.79ms |  16.82ms | ±1.02% |      32 |
| pdf-lib         |     3.5 | 281.86ms | 294.15ms | ±1.42% |      10 |
| @cantoo/pdf-lib |     2.2 | 453.49ms | 468.29ms | ±1.01% |      10 |

- **libpdf** is 17.85x faster than pdf-lib
- **libpdf** is 28.72x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     3.7 | 273.08ms | 283.12ms | ±1.09% |      10 |
| pdf-lib         |     3.6 | 276.77ms | 290.70ms | ±1.49% |      10 |
| @cantoo/pdf-lib |     2.2 | 458.90ms | 473.08ms | ±1.03% |      10 |

- **libpdf** is 1.01x faster than pdf-lib
- **libpdf** is 1.68x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------------- | ------: | -----: | ------: | -----: | ------: |
| libpdf          |   380.9 | 2.63ms |  3.24ms | ±1.04% |     191 |
| pdf-lib         |   126.6 | 7.90ms |  9.34ms | ±1.29% |      64 |
| @cantoo/pdf-lib |   118.8 | 8.42ms | 10.47ms | ±1.97% |      60 |

- **libpdf** is 3.01x faster than pdf-lib
- **libpdf** is 3.21x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    34.4 | 29.05ms | 31.31ms | ±1.34% |      18 |
| pdf-lib         |    18.0 | 55.54ms | 61.05ms | ±4.08% |      10 |
| @cantoo/pdf-lib |    17.4 | 57.53ms | 63.44ms | ±4.14% |       9 |

- **libpdf** is 1.91x faster than pdf-lib
- **libpdf** is 1.98x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     1.8 | 559.21ms | 559.21ms | ±0.00% |       1 |
| pdf-lib         |   0.970 |    1.03s |    1.03s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.915 |    1.09s |    1.09s | ±0.00% |       1 |

- **libpdf** is 1.84x faster than pdf-lib
- **libpdf** is 1.95x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   293.6 |  3.41ms |  4.29ms | ±1.42% |     147 |
| pdf-lib         |    94.9 | 10.54ms | 11.63ms | ±1.19% |      48 |
| @cantoo/pdf-lib |    84.5 | 11.84ms | 12.89ms | ±1.68% |      43 |

- **libpdf** is 3.09x faster than pdf-lib
- **libpdf** is 3.47x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    84.0 | 11.91ms | 12.80ms | ±1.37% |      42 |
| pdf-lib         |    20.2 | 49.49ms | 50.34ms | ±1.07% |      11 |
| @cantoo/pdf-lib |    16.9 | 59.25ms | 61.06ms | ±1.10% |       9 |

- **libpdf** is 4.16x faster than pdf-lib
- **libpdf** is 4.98x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    61.7 | 16.20ms | 18.66ms | ±2.13% |      31 |
| pdf-lib         |    42.3 | 23.63ms | 30.50ms | ±4.07% |      22 |
| @cantoo/pdf-lib |    41.8 | 23.95ms | 30.46ms | ±4.76% |      21 |

- **libpdf** is 1.46x faster than pdf-lib
- **libpdf** is 1.48x faster than @cantoo/pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    76.2 | 13.13ms | 15.30ms | ±2.43% |      39 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    36.7 | 27.27ms | 39.20ms | ±5.58% |      19 |

- **libpdf** is 2.08x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |    p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | -----: | -----: | ------: |
| copy 1 page                     |    1.3K |  767us | 1.43ms | ±1.85% |     652 |
| copy 10 pages from 100-page PDF |   291.0 | 3.44ms | 5.21ms | ±1.60% |     146 |
| copy all 100 pages              |   163.4 | 6.12ms | 7.03ms | ±1.04% |      82 |

- **copy 1 page** is 4.48x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.98x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.3K | 746us | 1.19ms | ±0.91% |     671 |
| duplicate all pages (double the document) |    1.3K | 759us | 1.19ms | ±3.27% |     660 |

- **duplicate page 0** is 1.02x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   867.2 |  1.15ms |  2.06ms | ±1.47% |     434 |
| merge 10 small PDFs     |   168.0 |  5.95ms |  7.23ms | ±1.24% |      84 |
| merge 2 x 100-page PDFs |    88.5 | 11.30ms | 12.42ms | ±1.06% |      45 |

- **merge 2 small PDFs** is 5.16x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.80x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    2.2K |  450us | 1.03ms | ±1.51% |   1,113 |
| draw 100 rectangles                 |    2.1K |  468us |  990us | ±1.44% |   1,069 |
| draw 100 circles                    |    1.4K |  720us | 1.54ms | ±1.98% |     695 |
| create 10 pages with mixed content  |   836.6 | 1.20ms | 4.38ms | ±4.55% |     419 |
| draw 100 text lines (standard font) |   719.5 | 1.39ms | 5.31ms | ±5.52% |     360 |

- **draw 100 lines** is 1.04x faster than draw 100 rectangles
- **draw 100 lines** is 1.60x faster than draw 100 circles
- **draw 100 lines** is 2.66x faster than create 10 pages with mixed content
- **draw 100 lines** is 3.09x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |   Mean |     p99 |    RME | Samples |
| :---------------- | ------: | -----: | ------: | -----: | ------: |
| read field values |   484.0 | 2.07ms |  3.86ms | ±2.41% |     242 |
| get form fields   |   461.2 | 2.17ms |  4.04ms | ±2.19% |     231 |
| flatten form      |   161.5 | 6.19ms | 11.11ms | ±2.50% |      81 |
| fill text fields  |   110.2 | 9.07ms | 13.11ms | ±3.62% |      56 |

- **read field values** is 1.05x faster than get form fields
- **read field values** is 3.00x faster than flatten form
- **read field values** is 4.39x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   24.8K |    40us |    93us | ±1.59% |  12,391 |
| load medium PDF (19KB) |   15.3K |    66us |    94us | ±0.70% |   7,630 |
| load form PDF (116KB)  |    1.0K |   978us |  1.63ms | ±1.17% |     512 |
| load heavy PDF (2.0MB) |    69.7 | 14.34ms | 15.48ms | ±1.43% |      35 |

- **load small PDF (888B)** is 1.62x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 24.24x faster than load form PDF (116KB)
- **load small PDF (888B)** is 355.34x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   14.0K |    71us |   163us | ±2.24% |   7,000 |
| incremental save (19KB)            |    9.5K |   105us |   255us | ±1.15% |   4,740 |
| save with modifications (19KB)     |    1.7K |   591us |  1.11ms | ±1.82% |     846 |
| save heavy PDF (2.0MB)             |    68.1 | 14.68ms | 15.78ms | ±1.05% |      35 |
| incremental save heavy PDF (2.0MB) |    63.0 | 15.88ms | 18.43ms | ±1.74% |      32 |

- **save unmodified (19KB)** is 1.48x faster than incremental save (19KB)
- **save unmodified (19KB)** is 8.28x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 205.56x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 222.33x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |    1.3K |   747us |  1.39ms | ±1.72% |     670 |
| extractPages (1 page from 100-page PDF)  |   386.9 |  2.58ms |  3.18ms | ±0.88% |     194 |
| extractPages (1 page from 2000-page PDF) |    23.5 | 42.57ms | 50.75ms | ±3.91% |      12 |

- **extractPages (1 page from small PDF)** is 3.46x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 56.97x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    32.7 |  30.56ms |  39.31ms | ±4.77% |      17 |
| split 2000-page PDF (0.9MB) |     1.9 | 533.51ms | 533.51ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.46x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    23.3 | 42.93ms | 44.10ms | ±0.92% |      12 |
| extract first 100 pages from 2000-page PDF             |    21.8 | 45.97ms | 47.89ms | ±1.47% |      11 |
| extract every 10th page from 2000-page PDF (200 pages) |    19.9 | 50.23ms | 51.16ms | ±0.88% |      10 |

- **extract first 10 pages from 2000-page PDF** is 1.07x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.17x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
