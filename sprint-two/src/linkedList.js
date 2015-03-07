var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value)
    if (list.tail !== null){
      var oldTail = list.tail
      oldTail.next = newTail
      newTail.previous = oldTail
    } else {
      list.head = newTail     
    }
    list.tail = newTail
  };

  list.addToHead = function(value) {
    var newHead = Node(value)
    if (list.head !== null) {
      var oldHead = list.head
      oldHead.previous = newHead
      newHead.next = oldHead
    } else {
      list.tail = newHead
    }
    list.head = newHead
  }

  list.removeHead = function(){
    var result = list.head
    list.head = result.next
    return result.value
  };

  list.removeTail = function() {
    var result = list.tail
    list.tail = result.previous
    return result.value
  }

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
  var node = {}

  node.value = value
  node.next = null
  node.previous = null

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
