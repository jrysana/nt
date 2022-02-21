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
