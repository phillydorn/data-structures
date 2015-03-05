var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods)
  newQueue.storage = {}
  newQueue.start = -1
  newQueue.end = -1
  return newQueue
};

var queueMethods = {};


queueMethods.enqueue = function(value){
	this.end++
	this.storage[this.end] = value
}

queueMethods.dequeue = function() {
	this.end-this.start && this.start++
	var result= this.storage[this.start]
	delete this.storage[this.start]
	return result
}

queueMethods.size = function() {
	return this.end-this.start
}