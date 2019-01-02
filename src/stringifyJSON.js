// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined || typeof obj === 'function' || typeof obj === 'symbol') {
    return 'undefined';
  } else if (obj === Infinity || obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    return '' + obj + '';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) { return '[]'; }
    let tempArray = [];
    for (let i = 0; i < obj.length; i++) {
      tempArray.push(stringifyJSON(obj[i]));
    }
    return '[' + tempArray.join(',') + ']';
  } else if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) { return '{}'; }
    let tempObjectArray = [];
    for (let key in obj) {
      if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
        continue;
      }
      tempObjectArray.push('"' + key + '":' + stringifyJSON(obj[key]));
    }
    return '{' + tempObjectArray.join(',') + '}';
  }

  //logic for array
  //temp array
  //iterate through
  // array.push recursion () ['fdsafads', dfsafads ,fdsaffadsf ]
  //return '[' + recursion + ']'



  //logic for object
  //temp aray
  //iterate through
  //run recursion
  //aray.push('' + key + ':' + value)
  //
  //return '{' + key + ':' + value + '}'

  //return



};
