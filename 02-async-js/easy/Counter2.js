
var counter = 0;

const increarseCounter = () =>{
    console.clear()
    console.log(counter)
    counter = counter+1
}


for(let i =1 ;i<1000;i++){
    setTimeout(increarseCounter,(i)*1000)
    
}