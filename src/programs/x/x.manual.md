## Quick calculator.

**x** allows you to evaluate quick everyday calculations on the fly.

---

## Examples

Estimated calories for humanity per year:

`$ x 7*B*2000*365`:

```hs
  5,110,000,000,000,000
```

Same thing, scientific mode:

`$ x 7*B*2000*365 -s`:

```hs
  5.11 × 10^15
```

Sum of integers from 1 to 100:

`$ x 'sum(ints(100))'`:

```hs
  5,050
```

Using common constants:

`$ x '[c, pi, e]' -s`:

```hs
[
  2.998 × 10^8,
  3.141592653589793 × 10^0,
  2.718281828459045 × 10^0
]
```

Using common functions:

`$ x 'log(e**2) - cos(0) + max(5,2)'`:

```hs
  6
```

One hundred million in hexadecimal:

`$ x 100*M -0x`:

```hs
  5f5e100
```
