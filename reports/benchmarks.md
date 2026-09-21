# Benchmark Report

> Generated on 2026-09-21 at 12:09:49 UTC
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
| libpdf    |    59.3 |  16.88ms |  20.47ms | ±1.95% |      30 |
| pdf-lib   |     4.7 | 213.73ms | 218.71ms | ±1.09% |      10 |

- **libpdf** is 12.67x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   11.3K |  88us |  194us | ±1.48% |   5,659 |
| pdf-lib   |    3.1K | 323us | 1.30ms | ±2.39% |   1,550 |

- **libpdf** is 3.65x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.1K | 165us |  560us | ±1.72% |   3,027 |
| pdf-lib   |    2.3K | 441us | 1.71ms | ±3.64% |   1,137 |

- **libpdf** is 2.67x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   748.5 | 1.34ms | 5.10ms | ±5.79% |     377 |
| libpdf    |   256.4 | 3.90ms | 5.89ms | ±2.34% |     129 |

- **pdf-lib** is 2.92x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    59.3 |  16.85ms |  18.40ms | ±1.83% |      30 |
| pdf-lib   |     3.2 | 317.20ms | 326.71ms | ±1.41% |      10 |

- **libpdf** is 18.83x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------- | ------: | -------: | -------: | -----: | ------: |
| libpdf    |    26.8 |  37.32ms |  48.87ms | ±5.83% |      14 |
| pdf-lib   |     3.2 | 315.04ms | 322.94ms | ±1.25% |      10 |

- **libpdf** is 8.44x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   189.7 | 5.27ms |  7.16ms | ±2.16% |      95 |
| pdf-lib   |   114.2 | 8.76ms | 10.87ms | ±1.37% |      58 |

- **libpdf** is 1.66x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    14.0 | 71.66ms | 74.94ms | ±4.36% |       7 |
| libpdf    |    13.8 | 72.49ms | 74.53ms | ±1.70% |       7 |

- **pdf-lib** is 1.01x faster than libpdf

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.736 | 1.36s | 1.36s | ±0.00% |       1 |
| pdf-lib   |   0.732 | 1.37s | 1.37s | ±0.00% |       1 |

- **libpdf** is 1.00x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   119.8 |  8.35ms | 10.45ms | ±2.54% |      60 |
| pdf-lib   |    87.4 | 11.44ms | 12.40ms | ±1.14% |      44 |

- **libpdf** is 1.37x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.4 | 54.35ms | 56.07ms | ±1.30% |      10 |
| libpdf    |    17.0 | 58.75ms | 66.96ms | ±4.53% |       9 |

- **pdf-lib** is 1.08x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   753.0 |  1.33ms |  2.97ms | ±3.26% |     377 |
| copy 10 pages from 100-page PDF |   130.7 |  7.65ms | 10.67ms | ±2.36% |      66 |
| copy all 100 pages              |    36.5 | 27.43ms | 33.25ms | ±2.74% |      19 |

- **copy 1 page** is 5.76x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 20.65x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate page 0                          |   829.8 | 1.21ms | 2.14ms | ±1.50% |     415 |
| duplicate all pages (double the document) |   823.7 | 1.21ms | 2.18ms | ±1.64% |     412 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   540.3 |  1.85ms |  2.81ms | ±1.50% |     271 |
| merge 10 small PDFs     |    98.9 | 10.11ms | 12.80ms | ±2.12% |      50 |
| merge 2 x 100-page PDFs |    19.0 | 52.53ms | 55.46ms | ±2.17% |      10 |

- **merge 2 small PDFs** is 5.46x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 28.38x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   146.8 |  6.81ms | 10.14ms | ±1.73% |      74 |
| draw 100 rectangles                 |   120.5 |  8.30ms | 16.27ms | ±4.42% |      61 |
| draw 100 circles                    |   104.2 |  9.59ms | 13.82ms | ±2.17% |      53 |
| draw 100 text lines (standard font) |    94.2 | 10.62ms | 15.19ms | ±2.58% |      48 |
| create 10 pages with mixed content  |    71.9 | 13.91ms | 14.85ms | ±1.10% |      36 |

- **draw 100 lines** is 1.22x faster than draw 100 rectangles
- **draw 100 lines** is 1.41x faster than draw 100 circles
- **draw 100 lines** is 1.56x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.04x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   297.8 |  3.36ms |  5.74ms | ±2.41% |     149 |
| get form fields   |   265.8 |  3.76ms |  8.12ms | ±4.53% |     134 |
| flatten form      |    79.3 | 12.60ms | 18.37ms | ±3.59% |      40 |
| fill text fields  |    62.3 | 16.06ms | 18.88ms | ±2.56% |      32 |

- **read field values** is 1.12x faster than get form fields
- **read field values** is 3.75x faster than flatten form
- **read field values** is 4.78x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   13.4K |    75us |   198us | ±2.88% |   6,689 |
| load medium PDF (19KB) |    9.8K |   102us |   139us | ±1.10% |   4,908 |
| load form PDF (116KB)  |   722.3 |  1.38ms |  2.27ms | ±1.27% |     362 |
| load heavy PDF (2.0MB) |    69.3 | 14.42ms | 15.82ms | ±1.59% |      35 |

- **load small PDF (888B)** is 1.36x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 18.52x faster than load form PDF (116KB)
- **load small PDF (888B)** is 192.91x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.0K |   125us |   341us | ±1.60% |   4,002 |
| incremental save (19KB)            |    2.5K |   407us |   870us | ±1.42% |   1,230 |
| save with modifications (19KB)     |   829.3 |  1.21ms |  2.14ms | ±2.08% |     415 |
| save heavy PDF (2.0MB)             |    64.4 | 15.53ms | 24.91ms | ±4.25% |      33 |
| incremental save heavy PDF (2.0MB) |    59.1 | 16.91ms | 18.08ms | ±1.29% |      30 |

- **save unmodified (19KB)** is 3.25x faster than incremental save (19KB)
- **save unmodified (19KB)** is 9.65x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 124.31x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 135.34x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   731.7 |  1.37ms |  3.18ms | ±3.74% |     366 |
| extractPages (1 page from 100-page PDF)  |   213.5 |  4.68ms |  5.98ms | ±1.80% |     107 |
| extractPages (1 page from 2000-page PDF) |    12.6 | 79.18ms | 83.10ms | ±2.08% |      10 |

- **extractPages (1 page from small PDF)** is 3.43x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 57.93x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    12.5 | 79.78ms | 88.98ms | ±4.87% |       7 |
| split 2000-page PDF (0.9MB) |   0.750 |   1.33s |   1.33s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.70x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.4 |  80.60ms |  85.99ms | ±3.53% |       7 |
| extract first 100 pages from 2000-page PDF             |     9.4 | 106.48ms | 118.71ms | ±8.98% |       5 |
| extract every 10th page from 2000-page PDF (200 pages) |     8.9 | 111.84ms | 114.44ms | ±2.38% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.32x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.39x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
