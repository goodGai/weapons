const doSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 在完成 Promise 之前的其他操作
            console.log("开始");
            // promise 的兑现值
            resolve("https://example.com/");
            // reject("https://example.com/");
        }, 200);
    });
}
const doSomethingElse = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // 在完成 Promise 之前的其他操作
            console.log("doSomethingElse 完成了一些事情");
            // promise 的兑现值
            resolve("https://example.com/");
        }, 200);
    });
}
// const doThirdThing = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             // 在完成 Promise 之前的其他操作
//             console.log("doThirdThing 完成了一些事情");
//             // promise 的兑现值
//             resolve("https://example.com/");
//         }, 200);
//     });
// }

const failureCallback1 = (err) => {
    // console.log('出错啦！', err);
    console.log('错误1', err);
    return '错误1';
}
const failureCallback2 = (err) => {
    // console.log('出错啦！', err);
    console.log('错误2', err);
    // return '错误2';
    throw Error('不刷新');
}
const failureCallback3 = (err) => {
    // console.log('出错啦！', err);
    console.log('错误3', err);
    throw Error('刷新吗')
    // return '错误3';
}
const failureCallback = (err) => {
    // console.log('出错啦！', err);
    console.log('大错误', err);
    throw Error('大错误')
    return '大错误';
}

doSomething()
    .then(function (result) {
        console.log('1', result);
        throw Error('略略略');
        return doSomethingElse(result);
    })
    .then(function (newResult) {
        console.log('2', newResult);
        return doThirdThing(newResult);
    }, failureCallback2)
    .then(function (finalResult) {
        console.log('3');
        console.log(`得到最终结果：${finalResult}`);
    })
    .catch(failureCallback);