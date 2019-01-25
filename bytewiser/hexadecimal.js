const bytes = process.argv.slice(2);

buf = new Buffer(bytes)
console.log(buf.toString('hex'));