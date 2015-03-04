var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = -1
  var end = -1
  // Implement the methods below

  someInstance.enqueue = function(value){
    
    end ++
    storage[end] = value

  };

  someInstance.dequeue = function(){
    
    end-start && start++
    var result = storage[start]
    delete storage[start]
    return result
  };

  someInstance.size = function(){
    return end-start
  };

  return someInstance;
};
