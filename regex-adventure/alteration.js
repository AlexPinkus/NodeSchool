module.exports = function (str) {
  /* Export a function that takes a string argument and returns whether the string
    starts with `cat`, `dog`, or `robot` followed by a number to the end of the
    string. */
  return /^(cat|dog|robot)\d+$/.test(str);
}