# **nt**: Some useful programs.

- [**x**](x.md): Quick calculator.
- [**now**](now.md): Quick time display.

---

## Installation

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

_Note: you can put `nt`'s source anywhere you want, and call the aliases whatever you want._

```hs
$ x pi

  3.141,592,653,589,793

```

---

## Warning

The `x` calculator uses NodeJS `eval()` to evaluate your expression. Please be aware of the risks, and do not copy and paste any expressions from the internet or third party sources directly into `x`.

---

## Dependencies

You'll need to have [**NodeJS**](https://nodejs.org/) installed and in your path as `node` for the above.

No other dependencies or node package installs required.

---

## Uninstall

1. Delete the source code `nt` folder on your machine.

2. _(Optional)_ Remove the aliases from your `~/.bashrc`.

Copyright (c) 2022 JWM - See `/LICENSE`
