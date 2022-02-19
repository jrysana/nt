const arg = process.argv[2]

const has = (array, test) => array.indexOf(test) >= 0

if (has(['-h', '--help'], arg)) {
  console.log(`
now.js: Quick time display.

Usage:
  now

Options:
  -h, --help
`)

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
