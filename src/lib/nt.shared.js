const _log = (message) =>
  console.log(`
${message}
	`)

const _error = (reason) => _log('  Error: ' + reason)

const _arg = process.argv[2]

const _has = (array, test) => array.indexOf(test) >= 0
