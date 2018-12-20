module.exports = function (str) {
  /* returns an array that
  splits the string on commas separated by arbitrary amounts of whitespace.*/
  return str.split(/\s*\,\s*/);
}