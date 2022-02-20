const _log = (message) =>
  console.log(`
${message}
	`)

const _br = () => console.log('')

const _error = (reason) => _log('  Error: ' + reason)

const _args = process.argv

const _has = (array, test) => array.indexOf(test) >= 0
