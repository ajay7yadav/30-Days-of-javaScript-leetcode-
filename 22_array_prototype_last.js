/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    console.log(this);
    if(this.length === 0){
        return -1;
    }
    else{
        return this[this.length-1]
    }
};

const arr = [null];
console.log(arr.last()); // 3
