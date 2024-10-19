function getMin() {
    let currentNode = this.root;
    while(true) {
        if (!currentNode.left) {
            return currentNode.data;
        }
        currentNode = currentNode.left;
    }
}

function getMax() {
    let currentNode = this.root;
    while(true) {
        if (!currentNode.right) {
            return currentNode.data;
        }
        currentNode = currentNode.right;
    }
}

function getValue(value) {
    let currentNode = this.root;
    while(currentNode) {
        if (currentNode.data === value) {
            return true;
        }
        currentNode = value < currentNode.data ? currentNode.left : currentNode.right;
    }
    return -1;
}

module.exports = {
    getMin,
    getMax,
    getValue
}