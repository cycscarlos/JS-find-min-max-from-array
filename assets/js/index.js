const users = [
  ['Nicole', 31],
  ['Chris', 33],
  ['Yaatree', 2],
  ['Sanne', 29]
]

const highest = users.reduce((previous, current) => {
  return current[1] > previous[1] ? current : previous;
})

console.log('highest', highest);


const lowest = users.reduce((previous, current) => {
  return current[1] < previous[1] ? current : previous;
})

console.log('lowest', lowest);