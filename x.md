<!-- GENERATED FILE. DO NOT EDIT. -->
# **x**.js: Quick calculator.

`x` allows you to evaluate quick everyday calculations on the fly.

---

## Examples

Estimated calories for humanity per year:

```hs
x>    7*B*2000*365

 ≈  5,110,000,000,000,000

```

Same thing, scientific mode:

```hs
x>    7*B*2000*365 -s

 ≈  5.11 × 10^15

```

Sum of integers from 1 to 100:

```hs
x>    sum(ints(100))

 ≈  5,050

```

Using common constants:

```hs
x>    [c, pi, e] -s
[
  2.998 × 10^8,
  3.141592653589793 × 10^0,
  2.718281828459045 × 10^0
]
```

Using common functions:

```hs
x>    log(e**2) - cos(0) + max(5,2)

 ≈  6

```

One hundred million in hexadecimal:

```hs
x>    100*M -x

 ≈  0x5f5e100

```

SHA-256 hash in hexadecimal:

```hs
x>    hash("Hello")

  "185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969"

```

---

## REPL

You can enter the REPL by calling `x` with no arguments.

You can quit with `^D` / `^C` or equivalent, or with the `-q` / `--quit` flags.

The REPL is preferable for long inputs as it:

1. Does not require quoting for function calls, whitespace, etc..
2. Allows typical REPL history navigation, allowing you to modify your expression with ease.

### Coming soon:

- Mode support
- Variables

---

## Motivation

There are, of course, many alternatives: native calculator apps, pen&paper, search engine calculator tools, and even other terminal-based calculators and REPLs.

The motivation for `x` however was simple: I have a habit, not always but sometimes, of using the NodeJS REPL for quick calculations.

That process would require more typing, naturally.

1. Type "node" + `Enter`.
2. Type expression + `Enter` for results.
3. _(Optional)_ Execute additional expressions.
4. Type `^C` or equivalent to return to terminal.

I wanted something quicker, since I rarely _need_ step 3, and would prefer less repetitive typing for the rest.

There are additional considerations here like having to use `Math.` prefix or manually creating common functions and pasting in common constants - all a waste of time, frankly.

But I still love the ability of arbitrary code execution for on-the-fly calculations, hence, `x` makes sense.

- Faster to call
- No exit step
- Well-formatted results (faster reading & understanding)
- Pre-defined functions and constants (faster to type)
- Easy to extend
- Simple code (verifiable & trustworthy)

---

## Help
```
x.js: Quick calculator.

Usage:
  x [args] [options]

Functions:
  log, sqrt, abs, sin, cos, tan, ceil,
  floor, rand, min, max, round, sign,
  sum, prod, ints, hash, hash64

Useful constants:
  π, pi, e, c, φ, phi

Scaling constants:
  f, p, n, μ, mu, m, k, M, G, B, T, P

Options:
  -s, --scientific,  -x, --hexadecimal,
  -d, --decimal,     -q, --quit,
  -h, --help

For more information and help:
  github.com/jwmza/nt/blob/main/x.md
```