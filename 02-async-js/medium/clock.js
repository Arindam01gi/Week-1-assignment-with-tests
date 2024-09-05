


function time() {
    const today = new Date()

    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()

    let time = h + ':' + m + ':' + s
    console.clear()
    console.log(time);

}
let currentTime = setInterval(time, 1000)

