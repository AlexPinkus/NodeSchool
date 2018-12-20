module.exports = function (str) {
  /* returns the number found after the equal sign 
    should only match `x=` when there are no word
    characters immediately before `x=` or immediately after the number to the right
    of the equal sign.*/
  var m = /\bx=(\d+)\b/.exec(str);
  console.log('m :', m);
  // console.log('m[1] :', m[1]);
  return m ? m[1] : null;
}