const arr = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
]
const delId = 2
console.log(arr.filter(item => item.id !== delId))

function _filter(fn) {
  const res = []
  for (let i = 0 ; i < this.length; i++) {
    if(fn(this[i])) res.push(this[i])
  }
  return res
}
Array.prototype.filter = _filter

// const temp = [1,2,3,4,5]
// console.log(temp.filter( item => item > 1))