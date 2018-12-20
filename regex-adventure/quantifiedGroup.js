module.exports = function (str) {
  /* Export a function that takes a string argument and returns whether the string
    contains exactly 8 columns of hex codes formatted like: 0xFF with one or more
    characters of trailing whitespace after each hex code to separate the columns. */
  return /^(0x(\d*[A-Fa-f]*\d*)\s+){8}$/.test(str);
}