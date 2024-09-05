const fs = require('fs')

fs.writeFile('4-write-to-file.md','bac',(err)=>{

    if(err) throw err;
    console.log("writing Done")

    // fs.readFile('4-write-to-file.md',(data,err) =>{
    //     if(err) throw err;

    //     console.log(data.toString())
    // })
})