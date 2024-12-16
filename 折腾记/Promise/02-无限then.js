const fn = () => {
    console.log('暂停');
    return new Promise((reslove) => setTimeout(reslove, 3000));
};

const demo = () => {
    let num = 0;
    return function () {
        return num++;
    }
}

const test = demo();

fn()
    .then((res) => console.log(test()))
    .then((res) => console.log(test()))
    .then((res) => console.log(test()))
    .then((res) => console.log(test()))
    .then((res) => fn())
    .then((res) => console.log(test()))
    .then((res) => console.log(test()))
    .then((res) => console.log(test()))