/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("result1")
    },1000)
   })
}

 function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("result2")
        },2000)
       })
}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("result3")
        },3000)
       })
}

async function calculateTime() {

    let startTime = Date.now()
    try {
        const result1 = await waitOneSecond();
        console.log(result1); 

        const result2 = await waitTwoSecond();
        console.log(result2); 

        const result3 = await waitThreeSecond();
        console.log(result3);

        console.log("All promises completed");

        const endTime = Date.now(); 
        const elapsedTime = (endTime - startTime) / 1000; 
        console.log(`Elapsed time: ${elapsedTime} seconds`);
    } catch (err) {
        console.error("Error occurred:", err);
    }
}

calculateTime()