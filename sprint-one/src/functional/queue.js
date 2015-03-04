var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value
    size ++

  };

  someInstance.dequeue = function(){
    var result = storage[0]

    for (var key in storage) {
      storage[key] = storage[+key+1]
    }
    delete storage[size-1]
    size && size--
// {}
// {0: a}
// {0: a, 1:b}
// {0: b }
// {0: b, 1: c}
// 
//   {0:a, 1:b, 2:c, 3: d}
   return result
  };

  someInstance.size = function(){
    return size
  };

  return someInstance;
};
