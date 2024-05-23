/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  let map = new Map()
  let res = [[], []]
  for (const [win, loser] of matches) {
      if(!map.has(win)) map.set(win, 0)
      map.set(loser, (map.get(loser) || 0) + 1)
  }
  for (const [key, value] of map) {
      if(value < 2) res[value].push(key)
  }
  res[0].sort((a,b)=>a-b)
  res[1].sort((a,b)=>a-b)
  return res
};