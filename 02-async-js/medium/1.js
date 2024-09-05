const fs = require('fs')

fs.readFile('dummy.txt',(err,data) =>{
    if(err) throw err;

    let string = data.toString()
    let newstring = string.replace(/\s+/g,' ').trim()

    fs.writeFile('dummy.txt',newstring, (err)=>{
        if(err) throw err;

        console.log('writing completed')
    })


    console.log('data',newstring)
})
