/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    console.log("1")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("result 1")
        }, 1000)
    })

}

function waitTwoSecond() {
    console.log("2")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("result 2")
        }, 2000)
    })
}

function waitThreeSecond() {
    console.log("3")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("result 3")
        }, 3000)
    })
}

function calculateTime() {
    let today = new Date()
    let startTime = Date.now()

    waitOneSecond().then((result1) => {
        return waitTwoSecond();
    })
        .then((result2) => {
            return waitThreeSecond()
        })
        .then((result3) => {
            console.log("ALl promise completed")
            let EndTime = Date.now()

            let elapsedTime = (EndTime - startTime) / 1000

            console.log(`elapsedTime ->${elapsedTime}s`)
        })




}
calculateTime()