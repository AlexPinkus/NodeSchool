var marked = require('marked');

module.exports = function (str) {
  /* returns an array of
    the quoted strings contained in the input.*/
    var ops = str.match(/@@[^@@]*@@/g);
    ops.forEach(element => {
      var toReplace = element.replace('@@', '<blink>');
      var toReplace2 = toReplace.replace('@@', '</blink>');
      str = str.replace(element, toReplace2);
    });
  return marked(str);
}

// Here is the reference solution:

// var marked = require('marked')

// module.exports = function (str) {
//   var md = marked(str)
//   return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
// }