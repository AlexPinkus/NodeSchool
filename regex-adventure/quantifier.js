module.exports = function (str) {
  /* returns
  whether the entire filename is a sequence of one or more digits followed by
  `.jpg` or `.jpeg`.*/
  return /^\d+\.jpe?g$/.test(str);
}