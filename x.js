// GENERATED CODE. DO NOT EDIT.

const _log = (message) =>
  console.log(`
${message}
	`)

const _br = () => console.log('')

const _error = (reason) => _log('  Error: ' + reason)

const _args = process.argv

const _has = (array, test) => array.indexOf(test) >= 0

let _options = [
  {
    option: 'Help',
    flags: ['-h', '--help'],
    handle: () => {
      _help()
      return true
    },
  },
]

const _getOption = (_maybeFlag) => {
  for (const _option of _options) {
    if (_has(_option.flags, _maybeFlag)) {
      return _option
    }
  }
  return null
}

const _help = () =>
  _log(`x.js: Quick calculator.

Usage:
  x [args] [mode]

Basic functions:
  log, sqrt, abs, sin, cos, tan, ceil,
  floor, rand, min, max, round, sign

More functions:
  sum, prod, ints, hash, hash64

Useful constants:
  pi, e, c

Scaling constants:
  f, p, n, mu, m, k, M, G, B, T, P

Options:
  -s, --scientific
  -x, --hexadecimal
  -d, --decimal
  -q, --quit
  -h, --help

For more information and help:
  https://github.com/jwmza/nt/blob/main/x.md`)

if (_has(['-h', '--help'], _args[2])) {
  _help()

  return
}

// Calculate with Nodejs REPL from command line

let _mode = 'x10'
let _precision = null
let _quitREPL = () => {}

_options = [
  ..._options,
  {
    op: 'DecimalMode',
    flags: ['-d', '--decimal'],
    handle: () => {
      _mode = 'x10'
      return false
    },
  },
  {
    op: 'ScientificMode',
    flags: ['-s', '--scientific'],
    handle: () => {
      _mode = '10^'
      return false
    },
  },
  {
    op: 'Base16Mode',
    flags: ['-x', '--hexadecimal'],
    handle: () => {
      _mode = 'x16'
      return false
    },
  },
  {
    op: 'Quit',
    flags: ['-q', '--quit'],
    handle: () => {
      _quitREPL()
      return true
    },
  },
  {
    op: 'FixedPrecision',
    flags: ['-p', '--precision'],
    args: 1,
    handle: (precision) => {
      _precision = precision
      return false
    },
  },
]

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

const sum = (...xs) => {
  if (Array.isArray(xs[0])) {
    xs = [...xs[0]]
  }

  let y = 0

  for (let j = 0; j < xs.length; j++) {
    y += xs[j]
  }

  return y
}

// Product of array of numbers or multiple number arguments

const prod = (...xs) => {
  if (Array.isArray(xs[0])) {
    xs = [...xs[0]]
  }

  let y = 1

  for (let j = 0; j < xs.length; j++) {
    y *= xs[j]
  }

  return y
}

// Array of integers 0 to 10, or 0 to a, or a to b

const ints = (a = 10, b = null) => {
  let x, y

  b !== null ? ([x, y] = [a, b]) : ([x, y] = [0, a])

  return Array(y - x + 1)
    .fill(0)
    .map((_, j) => j + x)
}

// Hash

const _hash = (_algo, _value, _digest) =>
  require('crypto').createHash(_algo).update(_value).digest(_digest)

const hash = (x, _algo = 'sha256') => _hash(_algo, x, 'hex')
const hash64 = (x, _algo = 'sha256') => _hash(_algo, x, 'base64')

// INTERNAL

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

// Format like 3.141592653589793 × 10^6

const _formatNumberScientific = (_mantissa, _exponent) =>
  _mantissa + ' × 10^' + _exponent

// Format like 3,141,592.653,589,793

const _formatNumberDecimal = (_mantissa, _exponent) => {
  const _mantissaDigits = _mantissa.replace(/\./, '')

  const _leadingZeros = max(-1 * _exponent, 0)
  let _leadingZeroDigits = ''

  for (let j = 0; j < _leadingZeros; j++) {
    _leadingZeroDigits += '0'
  }

  const _endingZeros = max(1 + max(_exponent, 0) - _mantissaDigits.length, 0)
  let _endingZeroDigits = ''

  for (let j = 0; j < _endingZeros; j++) {
    _endingZeroDigits += '0'
  }

  const _decimalBefore = max(0, _exponent) + 1

  const _digits = _leadingZeroDigits + _mantissaDigits + _endingZeroDigits
  let _out = ''

  for (let j = 0; j < _digits.length; j++) {
    if (j !== 0 && j < _decimalBefore && (j - _decimalBefore) % 3 === 0) {
      _out += ','
    }
    if (j === _decimalBefore) {
      _out += '.'
    }
    _out += _digits[j]
  }

  return _out
}

// Format any number

const _formatNumber = (_number) => {
  let _pre = ''

  if (_number < 0) {
    _number = -1 * _number
    _pre = '-'
  }

  const [_mantissa, _signedExponent] = _number.toExponential().split('e')

  const _exponent = _signedExponent.replace(/\+/, '')

  switch (true) {
    case _mode === 'x16':
      return _pre + '0x' + round(_number).toString(16)
    case _mode === '10^':
      return _pre + _formatNumberScientific(_mantissa, _exponent)
    default:
      return _pre + _formatNumberDecimal(_mantissa, _exponent)
  }
}

const _eval = (_args) => {
  let _expr = []

  let _skipEvaluation = false
  let _skipLogging = false

  for (let j = 0; j < _args.length; j++) {
    const _option = _getOption(_args[j])
    if (_option !== null) {
      if (_option.args) {
        let _optionArgs = []

        for (let jj = 0; jj < _option.args; jj++) {
          j++
          _optionArgs.push(_args[j])
        }

        _skipEvaluation = _option.handle(..._optionArgs)
      } else {
        _skipEvaluation = _option.handle()
      }
    } else {
      _expr.push(_args[j])
    }
  }

  if (!_skipEvaluation) {
    _expr = _expr.join(' ')

    try {
      const ev = eval(_expr)

      let out

      switch (true) {
        case ev === Infinity:
          out = ' ≈  ∞ (Positive infinity)'
          break

        case ev === -Infinity:
          out = ' ≈  -∞ (Negative infinity)'
          break

        case ev === undefined:
          _error('Undefined.')
          _skipLogging = true
          break

        case _isSingleNumber(ev):
          out = ' ≈  ' + _formatNumber(ev)
          break

        case _isNumberArray(ev):
          out = ev.map((x) => _formatNumber(x))
          out = JSON.stringify(out, null, 2).replace(/\"/g, '')
          break

        default:
          out = JSON.stringify(ev, null, 2)
      }

      !_skipLogging && _log(out)
    } catch (err) {
      _error(`Evaluation failed.
  ${err}.`)
    }
  }
}

// Result

if (!_args[2]) {
  _log('  Welcome to x.js REPL. -h for help.')

  const _readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  let _q = false

  _readline.on('close', () => {
    // Quit
    !_q && _br()
    _log('  Goodbye!')
  })

  _quitREPL = () => {
    _q = true
    _readline.close()
  }

  const _repl = () => {
    _readline.question(_mode + '>  ', (ans) => {
      // REPL
      _eval(ans.trim().split(/\s+/))
      !_q && _repl()
    })
  }

  _repl()
} else {
  _eval(_args.slice(2))
}
