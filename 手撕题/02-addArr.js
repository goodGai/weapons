const arr = [1,2,3,4,5]



Array.prototype.reduce = function(cb, initNum) {
  let res = this[0]
  let i = 1
  if(initNum) {
    res = initNum
    i = 0
  }
  for(; i < this.length; i++) {
    res = cb(res, this[i], i, this)
  }
  return res
}

console.log(arr.reduce(function(val1, val2,){
  return val1 + val2
}))