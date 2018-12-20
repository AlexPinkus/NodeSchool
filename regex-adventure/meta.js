module.exports = function (str) {
  /* returns whether the string
  ends with a literal `.` (dot). */
  return /\.$/.test(str);
}