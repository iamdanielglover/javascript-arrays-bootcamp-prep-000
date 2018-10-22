var chocolateBars = new Array('snickers','hundred grand','kitkat','skittles');

// add an element to the beginning of the array, keeping the original array intact
function addElementToBeginningOfArray(array, element) {
  newArray = [element,...array];
  return newArray;
}

// add an element to the beginning of the array, altering the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var num = array[2];
  return num;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length -1);
  return newArray;
}
