const fs = require('fs')
const path = require('path');

fs.readFile(path.join(__dirname,'../../01-js/hard/calculator.js'),(err,data)=>{
    if (err) throw err;

    console.log('data',data.toString())
})