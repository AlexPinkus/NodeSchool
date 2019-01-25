const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, (err, data)=>{
    if (err) throw err;
    let prevIndex = 0;
    for (let index = 0; index < data.length; index++) {
        if(data[index] === 10) { // Decimal Ascci value for \n
            console.log(data.slice(prevIndex, index));
            prevIndex = index + 1;
        } 
    }
    console.log(data.slice(prevIndex, data.length-1));
})

