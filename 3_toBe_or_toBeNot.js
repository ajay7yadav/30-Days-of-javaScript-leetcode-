/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    // let toBe = val 
    return {
        toBe : function (value){
            if(val === value){
                return true;
            }
            else{
                throw Error("Not Equal");
            }
        },
        notToBe : function (value){
            if(val === value){
                throw Error("Equal");
            }
            else return true;
        }
    }
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"