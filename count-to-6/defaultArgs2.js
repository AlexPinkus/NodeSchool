module.exports = function addExclamations(input, exclamations = input.length) {
    if(!exclamations) { return input }
    input += "!";
    exclamations--;
    return addExclamations(input, exclamations);
};