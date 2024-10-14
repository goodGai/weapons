const arr = ['A', 'E', 'B', 'D', 'C'];

// 写法一
// const bubleSort = (arr) => {
//     let length = arr.length - 1;
//     for (var i = 0; i < length; i++) {
//         for (var j = 0; j < length - i ;j++) {
//             if (arr[j] > arr[j+1]) {
//                 const temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// 写法二
const bubleSort = (arr) => {
    let length = arr.length - 1;
    while(length) {
        for (var j = 0; j < length ;j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        length--
    }
    return arr;
}


console.log(bubleSort(arr))