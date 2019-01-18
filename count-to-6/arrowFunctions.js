var inputs = process.argv.slice(2);
var result = inputs.map( word => word[0] )
                    .reduce( (acc, elem) => elem + acc);
console.log(`[${inputs}] becomes "${result}"`);
