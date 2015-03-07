var BinarySearchTree = function(value){
  var newTree = Object.create(binaryTreeMethods)
  newTree.value = value
  newTree.left = false
  newTree.right = false
  return newTree
};

var binaryTreeMethods = {}

binaryTreeMethods.insert = function(val, node){
  node = node || this
  if (val < node.value){
    if (!node.left){ 
      node.left = BinarySearchTree(val)
    } else {
      this.insert(val, node.left) 
    }
  }
  else if (val > node.value) {
    if (!node.right){
      node.right = BinarySearchTree(val)
    } else {
      this.insert(val, node.right)
    }
  }
}

binaryTreeMethods.contains = function(val, node){
  node = node || this
  if (val === node.value) {
    return true
  } else if (val < node.value) {
      if (node.left){
        return this.contains(val, node.left)
      } else {
        return false
      }
  } else {
      if (node.right) {
        return this.contains(val, node.right)
      } else {
          return false
      }
    }
}

binaryTreeMethods.depthFirstLog = function(func, node){
  node = node || this
  func(node.value)
  node.left && this.depthFirstLog(func, node.left) 
  node.right && this.depthFirstLog(func, node.right)
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
