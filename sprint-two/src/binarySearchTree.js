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

  return val === node.value ? 
    true :
    val < node.value ? 
      node.left ? 
        this.contains(val, node.left) :
        false : 
      node.right ?
        this.contains(val, node.right) :
        false
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
