var BinarySearchTree = function(value){
  var newTree = Object.create(binaryTreeMethods)
  newTree.value = value
  newTree.left = false
  newTree.right = false
  newTree.minDepth = 1
  newTree.maxDepth = 0
  newTree.leftDepth =0 
  newTree.rightDepth = 0
  return newTree
};

var binaryTreeMethods = {}

binaryTreeMethods.insert = function(val, node){
  node = node || this
  if (val < node.value){
    if (!node.left){ 
      node.left = BinarySearchTree(val)
      this.leftDepth++
    } else {
      this.insert(val, node.left) 
    }
  }

  else if (val > node.value) {
    if (!node.right){
      node.right = BinarySearchTree(val)
      this.rightDepth++
      this.maxDepth = Math.max(this.leftDepth, this.rightDepth)
      this.minDepth = Math.min(this.leftDepth,this.rightDepth)  
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

binaryTreeMethods.breadthFirstLog = function(func, node) {
  node = node || this
  var firstPass = true
  if (firstPass){
    func(node.value)
    firstPass = false    
  }
  var logChildren = function (node) {
    node.left && func(node.left.value)
    node.right && func(node.right.value)
    node.left && logChildren(node.left)
    node.right && logChildren(node.right)    
  }
  logChildren(node)
}

binaryTreeMethods.sort = function() {
  var sortArray=[]
  this.depthFirstLog(function(value){
    sortArray.push(value)
  })
  return sortArray
}

binaryTreeMethods.rebalance = function() {
  var sortArray = this.sort();
  //Make a tree with the node as the middle of the array
  //if midpoint-start = 0
  //make that tree's left tree be a tree with the middle of 0-mid
    //make second trees left be middle of 0-mid-mid
    //make second trees right be middle of mid-mid and middle
    //if end-midpoint=0
  //make that tree's right tree be a tree with the middle of mid-length
    //make second trees left tree - mid - midmidlenght
    //make secodn trees right tree - midmidlenght, length

  var makeTree = function (start, end) {
    var midPoint = (end-start)/2
    var balancedTree = BinarySearchTree(sortArray[midPoint])
    if (midPoint-start > 0) {
      balancedTree.left = this.makeTree(start, midPoint)
    }
    if (end-midPoint >0){
      balancedTree.right = this.makeTree(midPoint, end)       
    }
    return balancedTree
  }
  debugger
  this = makeTree(0, sortArray.length)
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
