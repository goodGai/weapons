type A = {
    name: string,
}

type B = {
    name: string,
    age: number,
}

type C = B extends A ? string : number;

// 不能将类型“number”分配给类型“string”。
// const c: C = 12

const c: C = 'haha'