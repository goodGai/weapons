// 二分查找，是在一个有序的序列里查找某一个值
// 与数字炸弹游戏特别相似
// 1. 区间：一个low值，一个high值
// 2. target：结果值
const binaryFind = (arr, target, low = 0, high = arr.length -1) => {
    let n = Math.floor((low + high) / 2)
    if (target === arr[n]) {
        return `恭喜你！找到了！${target}在第${n + 1}个！`
    }   else if (target > arr[n]) {
        return binaryFind(arr, target, n + 1, high)
    }   else if (target < arr[n]) {
        return binaryFind(arr, target, low, n -1)
    }
    return -1;
}

const arr = []
for (var i = 0; i < 100; i++) {
    arr.push(i+1)
}

console.log(binaryFind(arr, 60))