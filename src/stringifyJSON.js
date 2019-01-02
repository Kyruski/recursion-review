// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //logic for primitive values (bool, string, number)
  //if (typeof obj 'string' || typeof obj 'boolean')
    //want to return value as string
  //if (typeof obj === Infinity || typeof obj === 'boolean')
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
