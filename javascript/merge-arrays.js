/*
In order to win the prize for most cookies sold, my friend Alice and I are going
to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a
function to merge our arrays of orders into one sorted array.

For example:

var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

*/

var myArray     = [3, 4, 6, 10, 11, 20];
var alicesArray = [1, 5, 8, 12, 14, 19];

let mergeArrays = (myArray, alicesArray) => {
  var newArray = [],
      m = 0,
      a = 0;

while (newArray.length < myArray.length + alicesArray.length) {
    if (myArray[m] < alicesArray[a] || a === alicesArray.length) {
      newArray.push(myArray[m]);
      m++;
    } else {
      newArray.push(alicesArray[a]);
      a++;
    }
  }
  return newArray;
}

console.log(mergeArrays(myArray, alicesArray));
