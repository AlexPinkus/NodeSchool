module.exports = function (str) {
  /* returns true only when:
  the first character is not a digit
  and the second character is not a capital letter. */
  return /^\D[^A-Z]/.test(str);
}