type Todo = {
    name: string,
    des: string,
    title: string
}

type TodoDemo = Pick<Todo, 'name' | 'des'>

const todo: TodoDemo = {
    name: '张三',
    des: '描述',
}