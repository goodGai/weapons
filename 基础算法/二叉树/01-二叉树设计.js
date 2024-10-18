import {getMin} from './03-二叉树查找';

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data;
    }
}

export class BST {
    constructor() {
        this.root = null;
        // 插入
        this.insert = insert;
        // 最小值
        this.getMin = getMin;
        // 最大值

        // 删除

        // 遍历
    }
}

//插入
function insert(val) {
    const node = new Node(val);
    if (!this.root) {
        this.root = node;
    } else {
        let currentNode = this.root;
        let parentNode;
        while (true) {
            parentNode = currentNode;
            const direction = val > currentNode.data ? 'right' : 'left';
            currentNode = currentNode[direction];
            if (!currentNode) {
                parentNode[direction] = node;
                break;
            }
        }
    }
}