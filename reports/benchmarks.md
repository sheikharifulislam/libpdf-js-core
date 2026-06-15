# Benchmark Report

> Generated on 2026-06-15 at 12:14:14 UTC
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

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   409.7 |  2.44ms |  3.45ms | ±1.68% |     206 |
| pdf-lib   |    27.1 | 36.92ms | 42.99ms | ±3.15% |      14 |

- **libpdf** is 15.13x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   12.3K |  81us |  182us | ±2.73% |   6,169 |
| pdf-lib   |    3.1K | 321us | 1.51ms | ±2.82% |   1,559 |

- **libpdf** is 3.96x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.3K | 159us |  658us | ±2.60% |   3,142 |
| pdf-lib   |    2.4K | 421us | 2.03ms | ±3.95% |   1,189 |

- **libpdf** is 2.64x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   711.2 | 1.41ms | 6.32ms | ±7.83% |     356 |
| libpdf    |   225.5 | 4.44ms | 6.49ms | ±2.93% |     113 |

- **pdf-lib** is 3.15x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   420.1 |  2.38ms |  3.33ms | ±1.63% |     211 |
| pdf-lib   |    13.5 | 74.28ms | 85.15ms | ±4.18% |      10 |

- **libpdf** is 31.20x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    15.6 | 64.15ms | 73.45ms | ±6.66% |      10 |
| pdf-lib   |    12.9 | 77.34ms | 85.76ms | ±3.87% |      10 |

- **libpdf** is 1.21x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   201.7 | 4.96ms |  6.39ms | ±2.41% |     101 |
| pdf-lib   |   109.5 | 9.13ms | 11.88ms | ±2.56% |      55 |

- **libpdf** is 1.84x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |      p99 |     RME | Samples |
| :-------- | ------: | ------: | -------: | ------: | ------: |
| libpdf    |    13.4 | 74.69ms |  78.07ms |  ±2.60% |       7 |
| pdf-lib   |    12.5 | 80.11ms | 101.59ms | ±13.38% |       7 |

- **libpdf** is 1.07x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| pdf-lib   |   0.751 | 1.33s | 1.33s | ±0.00% |       1 |
| libpdf    |   0.732 | 1.37s | 1.37s | ±0.00% |       1 |

- **pdf-lib** is 1.03x faster than libpdf

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   127.5 |  7.84ms |  9.85ms | ±2.48% |      64 |
| pdf-lib   |    87.5 | 11.43ms | 13.08ms | ±1.23% |      44 |

- **libpdf** is 1.46x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    18.9 | 52.92ms | 55.87ms | ±1.83% |      10 |
| libpdf    |    18.0 | 55.66ms | 57.37ms | ±2.26% |       9 |

- **pdf-lib** is 1.05x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   808.8 |  1.24ms |  2.78ms | ±3.57% |     405 |
| copy 10 pages from 100-page PDF |   142.2 |  7.03ms |  9.88ms | ±2.32% |      72 |
| copy all 100 pages              |    38.1 | 26.28ms | 29.98ms | ±2.35% |      20 |

- **copy 1 page** is 5.69x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 21.25x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   885.7 | 1.13ms | 2.18ms | ±1.91% |     443 |
| duplicate page 0                          |   857.3 | 1.17ms | 2.29ms | ±2.32% |     429 |

- **duplicate all pages (double the document)** is 1.03x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   587.8 |  1.70ms |  2.75ms | ±1.75% |     294 |
| merge 10 small PDFs     |   110.7 |  9.04ms | 10.75ms | ±1.70% |      56 |
| merge 2 x 100-page PDFs |    19.6 | 50.97ms | 54.32ms | ±2.13% |      10 |

- **merge 2 small PDFs** is 5.31x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 29.96x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   137.5 |  7.27ms | 17.77ms | ±7.12% |      69 |
| draw 100 rectangles                 |   126.8 |  7.89ms | 17.60ms | ±4.98% |      64 |
| draw 100 circles                    |   107.5 |  9.30ms | 13.51ms | ±2.08% |      54 |
| draw 100 text lines (standard font) |   100.2 |  9.98ms | 11.71ms | ±1.59% |      51 |
| create 10 pages with mixed content  |    75.0 | 13.33ms | 14.40ms | ±1.23% |      38 |

- **draw 100 lines** is 1.08x faster than draw 100 rectangles
- **draw 100 lines** is 1.28x faster than draw 100 circles
- **draw 100 lines** is 1.37x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 1.83x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   312.1 |  3.20ms |  4.97ms | ±1.85% |     157 |
| get form fields   |   283.7 |  3.52ms |  6.61ms | ±4.10% |     142 |
| flatten form      |    85.8 | 11.66ms | 14.44ms | ±2.09% |      43 |
| fill text fields  |    67.6 | 14.79ms | 18.79ms | ±2.93% |      34 |

- **read field values** is 1.10x faster than get form fields
- **read field values** is 3.64x faster than flatten form
- **read field values** is 4.62x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   16.6K |   60us |  130us | ±1.60% |   8,306 |
| load medium PDF (19KB) |   10.6K |   95us |  167us | ±1.26% |   5,290 |
| load form PDF (116KB)  |   748.0 | 1.34ms | 2.36ms | ±1.82% |     374 |
| load heavy PDF (9.9MB) |   449.9 | 2.22ms | 2.83ms | ±1.00% |     225 |

- **load small PDF (888B)** is 1.57x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 22.21x faster than load form PDF (116KB)
- **load small PDF (888B)** is 36.92x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |   10.0K |  100us |  223us | ±1.37% |   5,024 |
| incremental save (19KB)            |    2.8K |  363us |  900us | ±1.73% |   1,378 |
| save with modifications (19KB)     |   911.0 | 1.10ms | 2.47ms | ±2.41% |     456 |
| save heavy PDF (9.9MB)             |   443.6 | 2.25ms | 3.08ms | ±1.37% |     223 |
| incremental save heavy PDF (9.9MB) |   199.2 | 5.02ms | 6.08ms | ±1.37% |     100 |

- **save unmodified (19KB)** is 3.65x faster than incremental save (19KB)
- **save unmodified (19KB)** is 11.03x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 22.65x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 50.45x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   818.4 |  1.22ms |  2.63ms | ±3.32% |     410 |
| extractPages (1 page from 100-page PDF)  |   232.2 |  4.31ms |  5.32ms | ±1.55% |     117 |
| extractPages (1 page from 2000-page PDF) |    13.3 | 75.32ms | 79.57ms | ±2.70% |      10 |

- **extractPages (1 page from small PDF)** is 3.52x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 61.64x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    13.3 | 74.91ms | 78.79ms | ±3.89% |       7 |
| split 2000-page PDF (0.9MB) |   0.780 |   1.28s |   1.28s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.11x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    11.5 |  86.76ms |  96.68ms | ±7.81% |       6 |
| extract first 100 pages from 2000-page PDF             |    10.3 |  97.55ms | 102.28ms | ±3.75% |       6 |
| extract every 10th page from 2000-page PDF (200 pages) |     9.3 | 107.30ms | 110.15ms | ±2.07% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.12x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.24x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
