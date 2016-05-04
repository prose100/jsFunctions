//This feature has been proposed to lodash.

// This feature would distribute the elements of an input array into
// output arrays consisting of every nth element. For example:

// Arguments:
// array (Array): The array to process.
// nth (number): The number of indicIes between the elements of the output arrays.

// _.distribute(array, nth)
// _.distribute(['a', 'b', 'c', 'd','e','f'], 2);
// → [['a', 'c', 'e'], [b', 'd', 'f']]

// _.distribute(['a', 'b', 'c', 'd', 'e', 'f'', 'g', 'h'], 3);
// → [['a', 'd', 'g'], [b', 'e', 'h'],['c', 'f']]

// Use cases:
// 1) Take sequential data (input array) and place it into categories (output arrays).
// 2) Distribute the elements of an array as though one is dealing cards.

function distribute(array, stepSize) {
  //handles special cases
    //case 1:
  if (stepSize <= 0) {
    return;
  }
    //case 2:
  if (stepSize >= array.length) {
    return array;
  }

  //sets variables
  var start = 0;
  var index;
  var stepQuantity = parseInt(((array.length/stepSize) + 1), 0);
  var result = [];
  var results = [];
  var element;

  //run outer and inner loops
    //outer loop: begins a new array build at a new step (or start)
    //inner loop: steps through the array parameter during the build process
  while (start < stepSize) {
    index = 0;
    while (index < stepQuantity) {
      element = array[stepSize*index + start]
      if (element) {
        result[index] = element;
      }
      ++index;
    }
    results[start] = result;
    result = [];
    ++start;
  }
  return results;
}