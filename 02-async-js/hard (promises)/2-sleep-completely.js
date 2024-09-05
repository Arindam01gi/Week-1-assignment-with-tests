/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {

    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>(
            resolve("foo")
        ),seconds)
    })

}

sleep(5000)