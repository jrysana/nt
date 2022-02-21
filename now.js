// GENERATED CODE. DO NOT EDIT.

const _log = (message) =>
  console.log(`
${message}
	`)

const _text = {
  red: (s) => '\x1b[38;5;196m' + s + '\x1b[0m',
  yellow: (s) => '\x1b[38;5;156m' + s + '\x1b[0m',
  cyan: (s) => '\x1b[38;5;158m' + s + '\x1b[0m',
  orange: (s) => '\x1b[38;5;215m' + s + '\x1b[0m',
  bold: (s) => '\x1b[1m' + s + '\x1b[22m',
  dim: (s) => '\x1b[2m' + s + '\x1b[22m',
  italic: (s) => '\x1b[3m' + s + '\x1b[23m',
  underscore: (s) => '\x1b[4m' + s + '\x1b[24m',
}

const _br = () => console.log('')

const _error = (reason) =>
  _log('  ' + _text.red(_text.underscore('Error') + ': ' + reason))

const _help = () =>
  _log(
    _helpText.replace(/\n\S.+\:\n/g, (x) =>
      x.replace(
        /\S.+\:/g,
        (y) => _text.underscore(_text.italic(y.trim())) + '\n',
      ),
    ),
  )

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

const _helpText = `now.js: Quick time display.

Usage:
  now

Options:
  -h, --help`

if (_has(['-h', '--help'], _args[2])) {
  _help()

  return
}

const date = new Date()

let ts = date.toTimeString().split(' ')

let t = ts[0].replace(/\:/g, ' : ')

let z = ts.slice(1).join(' ')

_log(
  _text.italic(` Date `) +
    _text.dim(`|`) +
    `    ${date.toDateString()}` +
    '\n' +
    _text.dim(`——————|`) +
    '\n' +
    _text.italic(` Time `) +
    _text.dim(`|`) +
    `    ${t}` +
    '\n' +
    _text.dim(`——————|`) +
    '\n' +
    _text.italic(` Zone `) +
    _text.dim(`|`) +
    `    ${z}`,
)
