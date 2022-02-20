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
