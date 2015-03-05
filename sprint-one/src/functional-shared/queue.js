var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}
  // var storage = {}
  someInstance.start = -1
  someInstance.end = -1
  someInstance.storage = {}

  _.extend(someInstance, queueMethods)
  debugger
  return someInstance
};

var queueMethods = {
	enqueue : function(val){
		this.end++
		this.storage[this.end] = val
	},

	dequeue : function(){
		this.end - this.start && this.start++
		var result = this.storage[this.start]
		delete this.storage[this.start]
		return result
	},

	size : function(){
		return this.end - this.start
	}
};



