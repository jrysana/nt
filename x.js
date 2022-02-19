// Calculate with Nodejs REPL from command line

const _arg = process.argv[2]

const _has = (array, test) => array.indexOf(test) >= 0

const _mode = {
  scientific: _has(['-s', '--scientific'], process.argv[3]),
}

// Math functions

const {
  log,
  sqrt,
  abs,
  sin,
  cos,
  tan,
  ceil,
  floor,
  random: rand,
  min,
  max,
  round,
  sign,
  PI: pi,
  E: e,
} = Math

// Useful constants

const P = 10 ** 15
const T = 10 ** 12
const B = 10 ** 9
const G = 10 ** 9
const M = 10 ** 6
const k = 10 ** 3

const m = 10 ** -3
const mu = 10 ** -6
const n = 10 ** -9
const p = 10 ** -12
const f = 10 ** -15

const c = 2.998 * 10 ** 8

// Sum of array of numbers or multiple number arguments

const sum = (...nums) => {
  if (nums.length === 1) {
    nums = [...nums[0]]
  }

  let o = 0

  for (let j = 0; j < nums.length; j++) {
    o += nums[j]
  }

  return o
}

// Product of array of numbers or multiple number arguments

const prod = (...nums) => {
  if (nums.length === 1) {
    nums = [...nums[0]]
  }

  let o = 1

  for (let j = 0; j < nums.length; j++) {
    o *= nums[j]
  }

  return o
}

// Array of integers 0 to 10, or 0 to a, or a to b

const ints = (a = 10, b = null) => {
  let start, end

  if (b !== null) {
    ;(start = a), (end = b)
  } else {
    ;(start = 0), (end = a)
  }

  return Array(end - start + 1)
    .fill(0)
    .map((_, j) => j + start)
}

const _log = (message) => {
  console.log(`
${message}
	`)
}

const _help = () => {
  _log(`x.js: Quick calculator.

Usage:
  x [args]

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
  -s, --scientific
  -h, --help`)
}

const _error = (reason) => {
  _log('  Error: ' + reason)
}

const _isSingleNumber = (input) => Number.isFinite(input)

const _isNumberArray = (input) => {
  if (Array.isArray(input)) {
    for (let j = 0; j < input.length; j++) {
      if (!_isSingleNumber(input[j])) {
        return false
      }
    }
    return true
  }
  return false
}

const _formatScientific = (num) =>
  String(num.toExponential())
    .replace(/[eE]\+/, ' × 10^')
    .replace(/[eE]\-/, ' × 10^-')

const _formatNumber = (num) => {
  switch (true) {
    case _mode.scientific:
      return _formatScientific(num)
    default:
      return num.toLocaleString('en-uS')
  }
}

// Result

if (!_arg) {
  _error('No argument given.')
} else if (_has(['-h', '--help'], _arg)) {
  _help()
} else {
  try {
    const ev = eval(_arg)

    let out

    switch (true) {
      case _isSingleNumber(ev):
        out = '  ' + _formatNumber(ev)
        break

      case _isNumberArray(ev):
        out = ev.map((x) => _formatNumber(x))
        out = JSON.stringify(out, null, 2).replace(/\"/g, '')
        break

      default:
        out = JSON.stringify(ev, null, 2)
    }

    _log(out)
  } catch (err) {
    _error(`Evaluation failed.
		
  ${err}.`)
  }
}
