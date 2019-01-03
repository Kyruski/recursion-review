// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var tempArray = [];
  var helper = function (location) {
    if (location.classList) {
      if (location.classList.contains(className)) {
        tempArray.push(location);
      }
    }
    console.log(location.childNodes);
    if (location.childNodes) {
      for (var i = 0; i < location.childNodes.length; i++) {
        helper(location.childNodes[i]);
      }
    }
  };
  helper($(document.body)[0]);
  return tempArray;
};