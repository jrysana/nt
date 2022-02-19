# **nt**

## Some useful programs

- [**x**](x.md): Quick calculator.
- [**now**](now.md): Quick time display.

## Add to your terminal

### From source:

0. Install the [dependencies](#dependencies), if you haven't.

1. Download the code. You can `git clone` this repository to stay up to date.

2. Create aliases in `~/.bashrc`, or your equivalent terminal settings:

```bash
# ~/.bashrc

alias x="node ~/path/to/nt/x.js "
alias now="node ~/path/to/nt/now.js "
```

3. Use anywhere!

```hs
$ x pi

  3.141,592,653,589,793

```

## Dependencies

You'll need to have [**NodeJS**](https://nodejs.org/) installed and in your path as `node` for the above.

No other dependencies or node package installs required.

---

Copyright (c) 2022 JWM - See `/LICENSE`
