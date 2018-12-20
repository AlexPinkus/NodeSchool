module.exports = function (str) {
  /* return whether str starts with a vowel or a digit */
  return /^[aeiou0-9]/.test(str);
}