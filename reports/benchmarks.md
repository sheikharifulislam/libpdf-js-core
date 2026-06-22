# Benchmark Report

> Generated on 2026-06-22 at 11:54:13 UTC
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
| libpdf    |   401.1 |  2.49ms |  4.22ms | ±1.74% |     201 |
| pdf-lib   |    27.4 | 36.51ms | 41.31ms | ±3.02% |      14 |

- **libpdf** is 14.65x faster than pdf-lib

### Create blank PDF

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |   13.3K |  75us |  176us | ±1.84% |   6,648 |
| pdf-lib   |    3.2K | 317us | 1.31ms | ±2.59% |   1,580 |

- **libpdf** is 4.21x faster than pdf-lib

### Add 10 pages

| Benchmark | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------- | ------: | ----: | -----: | -----: | ------: |
| libpdf    |    6.7K | 149us |  672us | ±2.10% |   3,360 |
| pdf-lib   |    2.3K | 426us | 1.83ms | ±3.33% |   1,174 |

- **libpdf** is 2.86x faster than pdf-lib

### Draw 50 rectangles

| Benchmark | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------- | ------: | -----: | -----: | -----: | ------: |
| pdf-lib   |   723.1 | 1.38ms | 5.66ms | ±6.58% |     364 |
| libpdf    |   245.6 | 4.07ms | 6.22ms | ±2.46% |     123 |

- **pdf-lib** is 2.94x faster than libpdf

### Load and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   408.1 |  2.45ms |  4.03ms | ±1.65% |     205 |
| pdf-lib   |    13.7 | 73.19ms | 82.95ms | ±4.41% |      10 |

- **libpdf** is 29.87x faster than pdf-lib

### Load, modify, and save PDF

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |    16.0 | 62.50ms | 68.85ms | ±4.26% |      10 |
| pdf-lib   |    13.4 | 74.49ms | 80.91ms | ±2.97% |      10 |

- **libpdf** is 1.19x faster than pdf-lib

### Extract single page from 100-page PDF

| Benchmark | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------- | ------: | -----: | ------: | -----: | ------: |
| libpdf    |   201.8 | 4.96ms |  6.45ms | ±2.58% |     101 |
| pdf-lib   |   114.0 | 8.77ms | 10.90ms | ±1.95% |      57 |

- **libpdf** is 1.77x faster than pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------- | ------: | ------: | ------: | ------: | ------: |
| libpdf    |    13.2 | 75.96ms | 87.58ms |  ±6.65% |       7 |
| pdf-lib   |    12.5 | 80.30ms | 92.45ms | ±11.00% |       7 |

- **libpdf** is 1.06x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark | ops/sec |  Mean |   p99 |    RME | Samples |
| :-------- | ------: | ----: | ----: | -----: | ------: |
| libpdf    |   0.766 | 1.31s | 1.31s | ±0.00% |       1 |
| pdf-lib   |   0.762 | 1.31s | 1.31s | ±0.00% |       1 |

- **libpdf** is 1.01x faster than pdf-lib

### Copy 10 pages between documents

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| libpdf    |   128.7 |  7.77ms | 11.62ms | ±2.72% |      65 |
| pdf-lib   |    88.9 | 11.25ms | 13.93ms | ±1.44% |      45 |

- **libpdf** is 1.45x faster than pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------- | ------: | ------: | ------: | -----: | ------: |
| pdf-lib   |    19.3 | 51.72ms | 53.33ms | ±0.92% |      10 |
| libpdf    |    18.4 | 54.32ms | 56.01ms | ±1.33% |      10 |

- **pdf-lib** is 1.05x faster than libpdf

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |    Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | ------: | ------: | -----: | ------: |
| copy 1 page                     |   842.4 |  1.19ms |  2.73ms | ±2.89% |     422 |
| copy 10 pages from 100-page PDF |   142.7 |  7.01ms | 11.14ms | ±2.87% |      72 |
| copy all 100 pages              |    39.0 | 25.66ms | 28.57ms | ±1.94% |      20 |

- **copy 1 page** is 5.90x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 21.62x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   888.9 | 1.12ms | 2.09ms | ±1.71% |     445 |
| duplicate page 0                          |   884.7 | 1.13ms | 2.10ms | ±2.00% |     443 |

- **duplicate all pages (double the document)** is 1.00x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   595.9 |  1.68ms |  2.64ms | ±1.60% |     298 |
| merge 10 small PDFs     |   111.9 |  8.94ms | 14.19ms | ±2.57% |      56 |
| merge 2 x 100-page PDFs |    20.0 | 50.05ms | 56.91ms | ±4.33% |      10 |

- **merge 2 small PDFs** is 5.33x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 29.82x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------------------- | ------: | ------: | ------: | -----: | ------: |
| draw 100 lines                      |   155.6 |  6.42ms | 10.30ms | ±1.73% |      78 |
| draw 100 rectangles                 |   126.3 |  7.92ms | 17.36ms | ±5.63% |      64 |
| draw 100 circles                    |   109.5 |  9.13ms | 12.68ms | ±1.80% |      55 |
| draw 100 text lines (standard font) |   101.5 |  9.85ms | 12.91ms | ±2.52% |      51 |
| create 10 pages with mixed content  |    76.9 | 13.00ms | 13.82ms | ±1.19% |      39 |

- **draw 100 lines** is 1.23x faster than draw 100 rectangles
- **draw 100 lines** is 1.42x faster than draw 100 circles
- **draw 100 lines** is 1.53x faster than draw 100 text lines (standard font)
- **draw 100 lines** is 2.02x faster than create 10 pages with mixed content

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   322.2 |  3.10ms |  5.15ms | ±1.82% |     162 |
| get form fields   |   289.3 |  3.46ms |  7.03ms | ±4.46% |     145 |
| flatten form      |    90.4 | 11.06ms | 12.69ms | ±1.81% |      46 |
| fill text fields  |    68.2 | 14.66ms | 19.34ms | ±2.73% |      35 |

- **read field values** is 1.11x faster than get form fields
- **read field values** is 3.56x faster than flatten form
- **read field values** is 4.72x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   16.9K |   59us |  133us | ±1.21% |   8,439 |
| load medium PDF (19KB) |   10.9K |   91us |  120us | ±0.95% |   5,475 |
| load form PDF (116KB)  |   792.3 | 1.26ms | 2.19ms | ±1.40% |     397 |
| load heavy PDF (9.9MB) |   437.8 | 2.28ms | 2.77ms | ±0.77% |     219 |

- **load small PDF (888B)** is 1.54x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 21.30x faster than load form PDF (116KB)
- **load small PDF (888B)** is 38.55x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    9.5K |  105us |  235us | ±1.13% |   4,751 |
| incremental save (19KB)            |    2.7K |  369us |  884us | ±1.74% |   1,355 |
| save with modifications (19KB)     |   917.0 | 1.09ms | 2.47ms | ±2.27% |     460 |
| save heavy PDF (9.9MB)             |   406.9 | 2.46ms | 3.01ms | ±0.78% |     204 |
| incremental save heavy PDF (9.9MB) |   201.8 | 4.96ms | 5.30ms | ±0.36% |     101 |

- **save unmodified (19KB)** is 3.51x faster than incremental save (19KB)
- **save unmodified (19KB)** is 10.36x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 23.35x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 47.09x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   814.9 |  1.23ms |  2.57ms | ±3.28% |     408 |
| extractPages (1 page from 100-page PDF)  |   234.3 |  4.27ms |  5.18ms | ±1.25% |     118 |
| extractPages (1 page from 2000-page PDF) |    13.3 | 75.09ms | 80.85ms | ±3.36% |      10 |

- **extractPages (1 page from small PDF)** is 3.48x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 61.19x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------------------- | ------: | ------: | ------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    13.4 | 74.49ms | 78.75ms | ±3.07% |       7 |
| split 2000-page PDF (0.9MB) |   0.808 |   1.24s |   1.24s | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 16.61x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |     Mean |      p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | -------: | -------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    12.9 |  77.26ms |  79.94ms | ±2.75% |       7 |
| extract first 100 pages from 2000-page PDF             |    10.4 |  96.29ms | 102.92ms | ±4.30% |       6 |
| extract every 10th page from 2000-page PDF (200 pages) |     9.4 | 106.32ms | 108.58ms | ±2.54% |       5 |

- **extract first 10 pages from 2000-page PDF** is 1.25x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.38x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
