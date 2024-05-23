// function isSuperset(set, subset) {
//   for (const elem of subset) {
//     if (!set.has(elem)) {
//       return false;
//     }
//   }
//   return true;
// }

// function union(setA, setB) {
//   const _union = new Set(setA);
//   for (const elem of setB) {
//     _union.add(elem);
//   }
//   return _union;
// }

// function intersection(setA, setB) {
//   const _intersection = new Set();
//   for (const elem of setB) {
//     if (setA.has(elem)) {
//       _intersection.add(elem);
//     }
//   }
//   return _intersection;
// }

// function symmetricDifference(setA, setB) {
//   const _difference = new Set(setA);
//   for (const elem of setB) {
//     if (_difference.has(elem)) {
//       _difference.delete(elem);
//     } else {
//       _difference.add(elem);
//     }
//   }
//   return _difference;
// }

// function difference(setA, setB) {
//   const _difference = new Set(setA);
//   for (const elem of setB) {
//     _difference.delete(elem);
//   }
//   return _difference;
// }

function isSuperset(set, subset) {
  for (const key of subset) {
    if(!set.has(key)) {
      return false
    }
  }
  return true
}

function union(setA, setB) {
  return new Set([...setA, ...setB])
}

function intersection (setA, setB) {
  return new Set(Array.from(setA).filter(item => setB.has(item)))
}

function symmetricDifference (setA, setB) {
  return new Set(Array.from(setA).filter(item => !setB.has(item)).concat(Array.from(setB).filter(item => !setA.has(item))))
}

function difference (setA, setB) {
  return new Set(Array.from(setA).filter(item => !setB.has(item)))
}

// 示例
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

// console.log(isSuperset(setA, setB)); // 返回 true
// console.log(union(setA, setC)); // 返回 Set {1, 2, 3, 4, 5, 6}
// console.log(intersection(setA, setC)); // 返回 Set {3, 4}
console.log(symmetricDifference(setA, setC)); // 返回 Set {1, 2, 5, 6}
// console.log(difference(setA, setC)); // 返回 Set {1, 2}
