// 快排
// 1. 找基值
// 2. 遍历，大的放基值右边，小的放基值左边
// 3. 递归，子序列

const arr = ['A', 'E', 'B', 'D', 'C'];

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let temp = arr[0];
    let leftArr = [];
    let rightArr = [];
    for (var i = 1; i < arr.length; i++) {
        arr[i] > temp ? rightArr.push(arr[i]) : leftArr.push(arr[i])
    }
    return quickSort(leftArr).concat(temp, quickSort(rightArr))
}

console.log(quickSort(arr))