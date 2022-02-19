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
