const integer = process.argv[2];
const u32arr = new Uint32Array(1);
u32arr[0]= integer;
const u16arr = new Uint16Array(u32arr.buffer);
console.log(JSON.stringify(u16arr));