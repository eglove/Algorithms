// Insert, Delete, Contains
// Average: O(log(n)) Time | O(1) Space
// Worst: O(n) Time | O(1) Space
class BST {
  constructor () {
    this.value = null;
    this.left = null
    this.right = null
  }

  insert (value) {
    if (this.value === null) {
      this.value = value;
    } else {
      let currentNode = this
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = new BST(value)
            break
          } else {
            currentNode = currentNode.left
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = new BST(value)
            break
          } else {
            currentNode = currentNode.right
          }
        }
      }
      return this;
    }
  }

  contains (value) {
    let currentNode = this
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        return true
      }
    }
    return false
  }

  remove (value, parentNode = null) {
    let currentNode = this
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else {
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue()
          currentNode.right.remove(currentNode.value, currentNode)
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value
            currentNode.right = currentNode.left.right
            currentNode.left = currentNode.left.left
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value
            currentNode.left = currentNode.right.left
            currentNode.right = currentNode.right.right
          } else {
            return null
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right
        }
        break
      }
    }
    return this
  }

  getMinValue () {
    let currentNode = this
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
}

// Average: O(log(n)) Time | O(1) Space
// Worst: O(n) Time | O(1) Space
const findClosestValue = (tree, target) => {
  let closestValue = tree.value;

  const findClosestBstValue = () => {
    let currentNode = tree;
    while(currentNode !== null) {
      if(Math.abs(target - currentNode.value) < Math.abs(target - closestValue)) {
        closestValue = currentNode.value;
      }
      if(target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return closestValue;
  }

  return findClosestBstValue();
}

// O(n) Time | O(n) Space
const branchSums = (root) => {
  const sums = [];

  const calculateBranchSums = (node, runningSum, sums) => {
    if(!node) return;

    const newRunningSum = runningSum + node.value;
    if(!node.left && !node.right) {
      sums.push(newRunningSum);
      return;
    }

    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
  }

  calculateBranchSums(root, 0, sums);
  return sums;
}

const createNewBSTFromArray = (array) => {
  const binarySearchTree = new BST();

  for(let i = 0; i < array.length; i++) {
    binarySearchTree.insert(array[i]);
  }

  return binarySearchTree;
}

let binarySearchTree = createNewBSTFromArray([10, 5, 15, 2, 5, 13, 22, 1, 14]);
console.log(JSON.stringify(binarySearchTree));
console.log(findClosestValue(binarySearchTree, 12));

binarySearchTree = createNewBSTFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(JSON.stringify(binarySearchTree));
console.log(branchSums(binarySearchTree));
