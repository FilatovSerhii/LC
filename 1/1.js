//put your code here
function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  let tmp;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  let tmp;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] < array[j + 1]) {
        tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
}

console.log(sortAsc([3, 4, 1, 5, 2, 6, 2]));
console.log(sortDesc([3, 4, 1, 5, 2, 6, 2]));
