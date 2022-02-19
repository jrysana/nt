// GENERATED CODE. DO NOT EDIT.

const _log = (message) =>
  console.log(`
${message}
	`)

const _error = (reason) => _log('  Error: ' + reason)

const _arg = process.argv[2]

const _has = (array, test) => array.indexOf(test) >= 0

const _help = () =>
  _log(`now.js: Quick time display.

Usage:
  now

Options:
  -h, --help`)

if (_has(['-h', '--help'], _arg)) {
  _help()

  return
}

const date = new Date()

let ts = date.toTimeString().split(' ')

let t = ts[0].replace(/\:/g, ' : ')

let z = ts.slice(1).join(' ')

console.log(`
 Date |    ${date.toDateString()}
------|  
 Time |    ${t}
------|  
 Zone |    ${z}
`)
