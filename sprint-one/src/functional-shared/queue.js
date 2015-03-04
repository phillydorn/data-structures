var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}
  var storage = {}
  var size = 0
  _.extend(someInstance, queueMethods)
  debugger
  return someInstance
};

var queueMethods = {
	enqueue : function(val){
		storage[size] = val
		size++
	},

	dequeue : function(){
		var result = storage[0]
		_.each(storage, function(value, key, list){
			list[key] = list[+key + 1]
		})
		delete storage[size-1]
		size && size--
		return result
	},

	size : function(){
		return size
	}
};



