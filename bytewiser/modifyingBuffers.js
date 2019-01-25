// process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null){
    const buf = new Buffer(chunk);
    for (let index = 0; index < buf.length; index++) {
        if(buf[index] === 46) {
            buf.write('!', index);
        }
    }
    console.log(buf);
    }
});




// const buf = process.stdin.read();

