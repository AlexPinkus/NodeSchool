let buf;

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null){
        buf = buf ? Buffer.concat([buf, chunk]) : chunk;
    }
});

process.stdin.on('end', () => {
    console.log(buf);
});