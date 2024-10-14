const getRandom = (low = 0, high = 100) => {
    return Math.round(Math.random() * (high - low)) + low;
}

const delayFn = (delay = 3) => {
    let n = 1000000000 * delay;
    while(n) { n-- };
}

const getStart = (boom) => {
    if (!boom) return '请设置一个炸弹！';
    let startIdx = 0;
    let endIdx = 100;
    let n = getRandom();
    while (n !== boom) {    
        console.log(`计算机小A选择数字：${n}`);
        console.log('…')
        delayFn(2)
        if (n > boom) {
            endIdx = n;
        }   else {
            startIdx = n;
        }
        console.log(`游戏继续：${startIdx}--${endIdx}`)
        n = getRandom(startIdx + 1, endIdx - 1)
        console.log('')
        console.log('')
        console.log('')
        delayFn(3)
    };
    return `计算机小A选择数字：${boom}，炸弹爆炸！`;
}

console.log(getStart(getRandom()));
