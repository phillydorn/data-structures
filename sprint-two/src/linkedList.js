var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value) // 5
    if (list.tail !== null){
      var oldTail = list.tail // 4
      oldTail.next = newTail
    }

    list.tail = newTail
    if (list.head === null){
      list.head = newTail
    }
  };

  list.removeHead = function(){
    var result = list.head
    list.head = result.next
    return result.value
  };

  list.contains = function(target, node){
    var found = false

    if (node === null) {
      return found
    }

    node = node || list.head
    
    if (node.value === target) {
      found = true
    }
    else {
      found = list.contains(target, node.next)
    }

    return found
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
