// 全部成功的情况
// const fn1 = new Promise((resolve) => resolve(1));
// const fn2 = new Promise((resolve) => resolve(2));
// const fn3 = new Promise((resolve, reject) => resolve(3));
// const fn4 = new Promise((resolve) => resolve(4));
// const fn5 = new Promise((resolve) => resolve(5));

// Promise.all([fn1, fn2, fn3, fn4, fn5]).then((res) => console.log(res)) // 1,2,3,4,5


// 失败的情况
const fn1 = new Promise((resolve) => resolve(1));
const fn2 = new Promise((resolve) => resolve(2));
const fn3 = new Promise((resolve, reject) => reject(3)); // reject
const fn4 = new Promise((resolve) => resolve(4));
const fn5 = new Promise((resolve) => resolve(5));

Promise.all([fn1, fn2, fn3, fn4, fn5]).then(null, (err) => {
    console.log(err);
}) // 打印 reject 内容 3

Promise.all([fn1, fn2, fn3, fn4, fn5]).then((res) => console.log(res)) // 不打印， 报错 UnhandledPromiseRejection

/** 
 * 结论：
 * 1. 全部成功，返回数组
 * 2. 失败，直接返回失败原因
*/