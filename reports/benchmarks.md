# Benchmark Report

> Generated on 2026-10-05 at 13:45:06 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.4.2

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
| libpdf    |    62.9 |  15.89ms |  18.38ms | ±2.05% |      32 |
| pdf-lib   |     4.5 | 220.61ms | 231.96ms | ±1.55% |      10 |

- **libpdf** is 13.88x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   10.9K |  92us |  204us | ±1.83% |   5,457 |
| pdf-lib   |    2.9K | 348us | 1.49ms | ±2.91% |   1,437 |

- **libpdf** is 3.80x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    5.7K | 176us |  548us | ±1.64% |   2,847 |
| pdf-lib   |    2.2K | 463us | 1.81ms | ±3.92% |   1,081 |

- **libpdf** is 2.63x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   664.9 | 1.50ms | 5.70ms | ±8.62% |     333 |
| libpdf    |   242.1 | 4.13ms | 6.72ms | ±3.08% |     122 |

- **pdf-lib** is 2.75x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    62.4 |  16.03ms |  20.17ms | ±2.75% |      32 |
| pdf-lib   |     3.2 | 314.50ms | 323.75ms | ±1.31% |      10 |

- **libpdf** is 19.62x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    27.4 |  36.43ms |  43.59ms | ±6.63% |      14 |
| pdf-lib   |     3.2 | 316.56ms | 322.53ms | ±0.63% |      10 |

- **libpdf** is 8.69x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   182.6 | 5.48ms | 10.53ms | ±3.81% |      92 |
| pdf-lib   |   112.4 | 8.90ms | 10.85ms | ±1.60% |      57 |

- **libpdf** is 1.62x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    13.5 | 74.00ms | 77.37ms | ±2.48% |       7 |
| pdf-lib   |    13.0 | 76.81ms | 90.06ms | ±8.92% |       7 |

- **libpdf** is 1.04x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.757 | 1.32s | 1.32s | ±0.00% |       1 |
| libpdf    |   0.742 | 1.35s | 1.35s | ±0.00% |       1 |

- **pdf-lib** is 1.02x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   121.7 |  8.22ms | 10.52ms | ±2.80% |      61 |
| pdf-lib   |    87.1 | 11.48ms | 12.97ms | ±1.27% |      44 |

- **libpdf** is 1.40x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    19.1 | 52.30ms | 54.52ms | ±1.23% |      10 |
| libpdf    |    18.2 | 55.04ms | 56.35ms | ±1.18% |      10 |

- **pdf-lib** is 1.05x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   732.6 |  1.37ms |  3.29ms | ±3.26% |     367 |
| copy 10 pages from 100-page PDF |   129.5 |  7.72ms | 11.01ms | ±2.33% |      65 |
| copy all 100 pages              |    34.6 | 28.87ms | 33.23ms | ±2.41% |      18 |

- **copy 1 page** is 5.66x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 21.15x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   803.5 | 1.24ms | 2.27ms | ±1.86% |     402 |
| duplicate page 0                          |   803.1 | 1.25ms | 2.27ms | ±1.81% |     402 |

- **duplicate all pages (double the document)** is 1.00x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   541.8 |  1.85ms |  2.97ms | ±1.60% |     271 |
| merge 10 small PDFs     |    98.6 | 10.14ms | 11.43ms | ±1.56% |      50 |
| merge 2 x 100-page PDFs |    18.9 | 53.00ms | 54.05ms | ±1.31% |      10 |

- **merge 2 small PDFs** is 5.50x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 28.72x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   139.5 |  7.17ms | 11.06ms | ±2.25% |      70 |
| draw 100 rectangles                 |   112.7 |  8.88ms | 17.10ms | ±5.57% |      57 |
| draw 100 circles                    |   101.1 |  9.89ms | 13.38ms | ±2.19% |      51 |
| draw 100 text lines (standard font) |    92.5 | 10.81ms | 16.18ms | ±2.89% |      47 |
| create 10 pages with mixed content  |    70.7 | 14.15ms | 15.17ms | ±1.15% |      36 |

- **draw 100 lines** is 1.24x faster than draw 100 rectangles
- **draw 100 lines** is 1.38x faster than draw 100 circles
- **draw 100 lines** is 1.51x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.98x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   301.7 |  3.31ms |  5.46ms | ±1.76% |     151 |
| get form fields   |   262.7 |  3.81ms |  8.02ms | ±4.12% |     132 |
| flatten form      |    85.1 | 11.75ms | 13.33ms | ±1.61% |      43 |
| fill text fields  |    61.4 | 16.27ms | 21.19ms | ±2.83% |      31 |

- **read field values** is 1.15x faster than get form fields
- **read field values** is 3.55x faster than flatten form
- **read field values** is 4.91x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   13.5K |    74us |   218us | ±1.84% |   6,751 |
| load medium PDF (19KB) |    9.9K |   101us |   147us | ±0.94% |   4,961 |
| load form PDF (116KB)  |   722.3 |  1.38ms |  2.25ms | ±1.40% |     362 |
| load heavy PDF (2.0MB) |    68.6 | 14.58ms | 16.18ms | ±1.50% |      35 |

- **load small PDF (888B)** is 1.36x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.69x faster than load form PDF (116KB)
- **load small PDF (888B)** is 196.86x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.2K |   122us |   323us | ±2.24% |   4,107 |
| incremental save (19KB)            |    2.4K |   416us |   962us | ±1.62% |   1,202 |
| save with modifications (19KB)     |   833.0 |  1.20ms |  2.36ms | ±2.18% |     417 |
| save heavy PDF (2.0MB)             |    68.2 | 14.67ms | 16.66ms | ±1.60% |      35 |
| incremental save heavy PDF (2.0MB) |    62.0 | 16.14ms | 17.78ms | ±1.32% |      31 |

- **save unmodified (19KB)** is 3.42x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.86x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 120.51x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 132.54x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   711.3 |  1.41ms |  3.33ms | ±3.93% |     356 |
| extractPages (1 page from 100-page PDF)  |   222.8 |  4.49ms |  6.73ms | ±1.99% |     112 |
| extractPages (1 page from 2000-page PDF) |    12.4 | 80.76ms | 86.62ms | ±2.97% |      10 |

- **extractPages (1 page from small PDF)** is 3.19x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 57.44x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.5 | 79.81ms | 85.03ms | ±4.08% |       7 |
| split 2000-page PDF (0.9MB) |   0.737 |   1.36s |   1.36s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.01x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    11.9 |  84.05ms |  86.32ms | ±2.42% |       6 |
| extract first 100 pages from 2000-page PDF             |     9.4 | 106.80ms | 113.74ms | ±7.09% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.7 | 115.34ms | 117.91ms | ±1.72% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.27x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.37x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
