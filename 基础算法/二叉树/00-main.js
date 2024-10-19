const  { BST } = require('./01-二叉树设计.js')
var bst = new BST();
bst.insert(10);
bst.insert(8);
bst.insert(2);
bst.insert(7);
bst.insert(5);

// console.log('bst', bst);
bst.inOrder();

console.log('- - - - - - ->>>')

console.log('最大的', bst.getMax());
console.log('最小的', bst.getMin());

// 查找
console.log('是否存在 11', bst.getValue(11));
console.log('是否存在 2', bst.getValue(2));