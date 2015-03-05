var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {}
  newStack.storage = {}
  newStack.size = 0

  _.extend(newStack, stackMethods)
  return newStack
};

var stackMethods = {};

stackMethods.push = function(val) {
	this.storage[this.size] = val
	this.size++
}

stackMethods.pop = function() {
	this.size && this.size--
	var result = this.storage[this.size]
	delete this.storage[this.size]
	return result
}

stackMethods.size = function() {
	return this.size
}