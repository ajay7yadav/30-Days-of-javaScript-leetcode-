/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let newArr = [];
    let p = 0;
    let insertArr = [];
    for(let i=0; i<arr.length; i++){

        if(p < size){
            insertArr.push(arr[i])
        }
        p ++;
        if(p === size){
            newArr.push(insertArr);
            insertArr = [];
            p = 0;
        }
    }
    if(insertArr.length > 0){
        newArr.push(insertArr)
    }
    return newArr;
};

let arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
arr = [1,9,6,3,2], size = 3
console.log(chunk(arr, size));