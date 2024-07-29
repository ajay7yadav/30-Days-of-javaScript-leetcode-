/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let isArray = Array.isArray(obj);
    if( isArray ){
        if(obj.length > 0){
            return false;
        }
        else{
            return true;
        }
    }
    else if(Object.getOwnPropertyNames(obj).length > 0){
        return false;
    }
    else {
        return true;
    }
};

let obj = {"x": 5, "y": 42};
console.log(isEmpty(obj));

obj = {};
console.log(isEmpty(obj));

obj = [null, false, 0];
console.log(isEmpty(obj));

obj = [];
console.log(isEmpty(obj));