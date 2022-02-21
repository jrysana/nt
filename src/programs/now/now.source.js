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
