var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fixed
  newTree.parent = null
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var result = Tree(value)
  result.parent = this
  this.children.push(result)
};

treeMethods.removeFromParent = function(){
  var parentArray = this.parent.children
  var index = parentArray.indexOf(this)
  parentArray[index] = undefined
  this.parent = null
  return this
}

treeMethods.contains = function(target, node){
  var found = false
  node = node || this
  
  if (node.value === target) {
    found = true
  } 
  else {
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        found = this.contains(target, node.children[i])
          if (found) {
            return found
          }
      }
    }
  }
  return found

};

treeMethods.traverse = function(callback, node) {
  node = node || this.children[0]
  callback(node)
  _.each(node.children, function(childNode) {
    node.traverse(callback, childNode)
  })
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
