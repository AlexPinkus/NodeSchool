process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null) {
        const uarr = new Uint8Array(chunk);
        console.log(JSON.stringify(uarr));
    }
});
