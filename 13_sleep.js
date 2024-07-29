/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    // console.log(millis);
    let promise = new Promise((resolve, reject) =>{
        let val = setTimeout(() => {
            return millis;
            
        }, millis);
        if(val){
            console.log(val);
            resolve(millis);
        }
            
    });
    
    // return val;
}

let t = Date.now()
console.log(t);
sleep(100).then(() => console.log(Date.now() - t)) // 100
