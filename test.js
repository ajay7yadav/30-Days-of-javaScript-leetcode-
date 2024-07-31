let nums = [0,0,1,1,1,2,2,3,3,4];
nums = [1,1,2]

function removeDuplicate(nums){
    let map = new Map();
    let k = 0;
    for(let i=0; i<nums.length; i++){
        if(!map.has(nums[i])){
            k ++;
            map.set(nums[i], 1);
        }
        else{
            map.set(nums[i], map.get(nums[i])+1)
        }
    }
    nums = [];
    for(let i of map){
        // console.log(i[0]);
        nums.push(i[0])
    }

    return nums;
}

console.log(removeDuplicate(nums));