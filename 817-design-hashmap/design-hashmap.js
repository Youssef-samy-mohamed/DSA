// we need to design hashmap without any built-in hash table libraires 

// we gonna make the store where we hold the keys and the values
// first method put : we gonna insert the key and value but if the key does exist in the map update the value
//  second method get : return the value if if is exist if not return -1 


var MyHashMap = function() {
    this.store = {}
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.store[key] = value;

};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.store.hasOwnProperty(key) ? this.store[key] : -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.store[key]
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */


//  const obj = new MyHashMap()

//  obj.put(1,1)


//  console.log(obj.get())