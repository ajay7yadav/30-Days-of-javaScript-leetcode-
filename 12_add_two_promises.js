var addTwoPromises = async function(promise1, promise2) {  
 let val = await promise1
 let val2 = await promise2;
 return val+val2;
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4