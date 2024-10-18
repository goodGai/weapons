// 根序遍历 根左右
function preOrder(node) {
    if(node) {
        console.log(node.show())
        inOrder(node.left)
        inOrder(node.right)
    }
}

// 中序遍历 左中右
function inOrder(node) {
    if(node) {
        inOrder(node.left)
        console.log(node.show())
        inOrder(node.right)
    }
}

// 后序遍历 左右根
function postOrder(node) {
    if(node !== null) {
        //左右根
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show())
    }
}