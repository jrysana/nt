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
  ` Date |    ${date.toDateString()}
------|  
 Time |    ${t}
------|  
 Zone |    ${z}`,
)
