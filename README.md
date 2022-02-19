# nt

## Some useful programs

- **x**: quick calculator
- **now**: quick time display

## Add to your terminal

In `~/.bashrc`:

```
alias x="node ~/path/to/nt/x.js "
alias now="node ~/path/to/nt/now.js "
```

## Dependencies

You'll need to have NodeJS installed and in your path as `node` for the above.

No other dependencies or node package installs required.

---

## **x.js**: Quick calculator.

### Help

```
Usage:
  x [args] [mode]

Unary functions:
  log, sqrt, abs, sin, cos, tan, ceil,
  floor, rand, min, max, round, sign

More functions:
  sum       Sum of a or a,b,c,...
  prod      Product of a or a,b,c,...
  ints      List of integers 0-10, 0-a, or a-b

Useful constants:
  pi        3.14159...
  e         2.71828...
  c         2.998 × 10^8

Scaling constants:
  10^x      k, M, G/B, T, P
  10^-x     m, mu, n, p, f

Options:
  -h, --help
```

---

## **now.js**: Quick time display.

### Help

```
Usage:
  now

Options:
  -h, --help
```

---

Copyright (c) 2022 JWM - See `/LICENSE`
