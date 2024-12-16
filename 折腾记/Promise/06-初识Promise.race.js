// 全部成功的情况
const fn1 = new Promise((resolve, reject) => reject(1));
const fn2 = new Promise((resolve) => resolve(2));
const fn3 = new Promise((resolve, reject) => resolve(3));
const fn4 = new Promise((resolve) => resolve(4));
const fn5 = new Promise((resolve) => resolve(5));

Promise.race([fn1, fn2, fn3, fn4, fn5]).then((res) => console.log(res), (err) => console.log(err)) // 1 返回第一个


// 有失败的情况
// const fn1 = new Promise((resolve) => resolve(1));
// const fn2 = new Promise((resolve) => resolve(2));
// const fn3 = new Promise((resolve, reject) => reject(3)); // reject
// const fn4 = new Promise((resolve) => setTimeout(() => resolve('延时'), 0)); //等待0后，返回结果
// const fn5 = new Promise((resolve) => resolve(5));

// Promise.race([fn4, fn5, fn1, fn2, fn3]).then((res) => {
//   console.log('res', res); // 打印5，因为4在等待中，这里5返回最快的
// }, (err) => {
//   console.log('err', err);
// })


// 全部失败的情况
// const fn1 = new Promise((resolve, reject) => reject(1)); // reject
// const fn2 = new Promise((resolve, reject) => reject(2)); // reject
// const fn3 = new Promise((resolve, reject) => reject(3)); // reject
// const fn4 = new Promise((resolve, reject) => reject(4)); // reject
// const fn5 = new Promise((resolve, reject) => reject(5)); // reject

// Promise.race([fn4, fn5, fn1, fn2, fn3]).then((res) => {
//   console.log('res', res);
// }, (err) => {
//   console.log('err', err); // 4
// })