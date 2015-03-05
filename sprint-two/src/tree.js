var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var result = Tree(value)
  this.children.push(result)
};

treeMethods.contains = function(target, node){
  var found = false
  node = node || this
  
  if (node.value === target) {
    found = true
  } 
  else {
    debugger
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
