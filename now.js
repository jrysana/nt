// GENERATED CODE. DO NOT EDIT.

const _log = (message) =>
  console.log(`
${message}
	`)

const _text = {
  red: (s) => '\x1b[31m' + s + '\x1b[0m',
  yellow: (s) => '\x1b[38;5;228m' + s + '\x1b[0m',
  cyan: (s) => '\x1b[36m' + s + '\x1b[0m',
  dim: (s) => '\x1b[2m' + s + '\x1b[0m',
  underscore: (s) => '\x1b[4m' + s + '\x1b[0m',
}

const _br = () => console.log('')

const _error = (reason) =>
  _log('  ' + _text.red(_text.underscore('Error')) + _text.red(': ' + reason))

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
  _log(`now.js: Quick time display.

Usage:
  now

Options:
  -h, --help`)

if (_has(['-h', '--help'], _args[2])) {
  _help()

  return
}

const date = new Date()

let ts = date.toTimeString().split(' ')

let t = ts[0].replace(/\:/g, ' : ')

let z = ts.slice(1).join(' ')

_log(
  _text.dim(` Date |`) +
    `    ${date.toDateString()}` +
    '\n' +
    _text.dim(`——————|`) +
    '\n' +
    _text.dim(` Time |`) +
    `    ${t}` +
    '\n' +
    _text.dim(`——————|`) +
    '\n' +
    _text.dim(` Zone |`) +
    `    ${z}` +
    '\n',
)
