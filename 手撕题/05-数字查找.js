const digitCounts = (n, k) => {
    let num = 0;
    for (let i = 0 ; i <= n ; i++) {
        if (String(i).indexOf(k) !== -1) {
            num += String(i).split(k).length - 1;
        }
    }
    return num;
}

console.log(digitCounts(12, 1)) // 5