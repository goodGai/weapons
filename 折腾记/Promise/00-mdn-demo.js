// 为了尝试错误处理，使用“阈值”值会随机地引发错误。
const THRESHOLD_A = 8; // 可以使用 0 使错误必现

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(`太大了：${value}`);
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("获取数据时遇到问题", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`还是太大了：${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "奇数" : "偶数";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`得到了：${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("已经在前面处理过错误了");
    } else {
      console.error(`运行 promiseGetWord() 时遇到问题：${reason}`);
    }
  })
  .finally((info) => console.log("所有回调都完成了"));
