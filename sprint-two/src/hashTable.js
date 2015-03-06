var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var inBucket = [k,v]
  if (!Array.isArray(this._storage[i])) {
    this._storage[i]=[]
  }
  this._storage[i].push(inBucket)
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i]
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1]
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i]
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      this._storage[i][j][1] = null
      // this._storage[i] = bucket.slice(0, j) + bucket.slice(j + 1, bucket.length)
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
