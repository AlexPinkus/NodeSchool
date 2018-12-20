module.exports = function (str) {
  /* returns an array of
    the quoted strings contained in the input.*/
  return str.match(/"[^"]*"/g);
}