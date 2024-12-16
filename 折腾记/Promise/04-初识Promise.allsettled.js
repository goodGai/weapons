// 全部成功的情况
// const fn1 = new Promise((resolve) => resolve(1));
// const fn2 = new Promise((resolve) => resolve(2));
// const fn3 = new Promise((resolve, reject) => resolve(3));
// const fn4 = new Promise((resolve) => resolve(4));
// const fn5 = new Promise((resolve) => resolve(5));

// Promise.allSettled([fn1, fn2, fn3, fn4, fn5]).then((res) => console.log(res)) 
/*
[
  { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 2 },
  { status: 'fulfilled', value: 3 },
  { status: 'fulfilled', value: 4 },
  { status: 'fulfilled', value: 5 }
]
*/


// 失败的情况
const fn1 = new Promise((resolve) => resolve(1));
const fn2 = new Promise((resolve) => resolve(2));
const fn3 = new Promise((resolve, reject) => reject(3)); // reject
const fn4 = new Promise((resolve) => setTimeout(() => resolve('延时'), 3000)); //等待三秒后，返回结果
const fn5 = new Promise((resolve) => resolve(5));

Promise.allSettled([fn1, fn2, fn3, fn4, fn5]).then((res) => {
    console.log('res', res);
}, (err) => {
    console.log('err', err);
})
/*
等待三秒后，返回结果
res [
  { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 2 },
  { status: 'rejected', reason: 3 },
  { status: 'fulfilled', value: 4 },
  { status: 'fulfilled', value: 5 }
]
*/


/** 
 * 结论：
 * 等待三秒后，返回数组
 *      status：fulfilled | rejected
 *      成功：value，失败：reason
 */