module.exports = function (str) {
  /* returns the number found after the equal sign */
  var m = /x=(\d+)/.exec(str);
  console.log('m :', m);
  // console.log('m[1] :', m[1]);
  return m ? m[1] : null;
}