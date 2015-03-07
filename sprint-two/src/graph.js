

var Graph = function(){
  this.storage = {}
};

Graph.prototype.addNode = function(node){
  var result = {}
  result.edges = {}
  this.storage[node] = result
};

Graph.prototype.contains = function(node){
  return _.contains(Object.keys(this.storage), node)
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node]
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(Object.keys(this.storage[fromNode]["edges"]), toNode)
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode]["edges"][toNode] = this.storage[toNode]
  this.storage[toNode]["edges"][fromNode] = this.storage[fromNode]
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode]["edges"][toNode]
  delete this.storage[toNode]["edges"][fromNode]
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function(value, key){
    cb(key)
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



