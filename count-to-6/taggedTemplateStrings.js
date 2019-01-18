console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(inputArray, ...args) {
    // what goes here?
    // don't forget to return the escaped string!
    const replacedArgs = args.map(elem => elem
        .replace(/&/g, "&amp;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;"));
    inputArray = inputArray.map((elem, index) => {
        if(index === inputArray.length-1) {return elem}
        return elem + replacedArgs[index];
    });
    const outputString = inputArray.reduce((acc, elem) => acc + elem);

    return outputString;
}