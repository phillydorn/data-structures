var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v]
  var bucket = this._storage.get(i)
  var found = false
  if (!Array.isArray(bucket)){
    bucket = []
    this._storage.set(i, bucket)
  }
  for (var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === tuple[0]){
      bucket[j] = tuple
      found = true
      break
    }
  }
  if (!found) {
    bucket.push(tuple)
    this._count++
  }
  if (this._count > this._limit*0.75) {
    this._limit*= 2
   this.resize(this._limit)
  }
};

HashTable.prototype.resize = function(limit) {
    var oldStorage = this._storage
    this._count = 0
    this._storage = LimitedArray(limit)
    var context = this
    oldStorage.each(function (bucket, index, collection){
      if (bucket !== undefined){
        for (var t = 0; t< bucket.length; t++) {
          if (bucket[t][1] !== null){
            context.insert(bucket[t][0],bucket[t][1])
          }
        }  
      }
    })
}

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i)
  if (bucket !== undefined){
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        return bucket[j][1]
      }
    }
  } else {
    return null
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i)
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = null
      this._count--
    }
  }
  if (this._count < this._limit*0.25) {
    this._limit/=2
    this.resize(this._limit)
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
