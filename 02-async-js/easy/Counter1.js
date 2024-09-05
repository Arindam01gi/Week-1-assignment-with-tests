
let counter = 0

function modify(){
    console.clear()
    console.log(counter)
    counter += 1
}

setInterval(modify,1000)