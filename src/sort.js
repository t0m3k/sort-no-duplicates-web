const mergeSort = (array) => {
  if (array.length < 2) return array;

  // find middle point and split array
  const middle = Math.floor(array.length / 2);
  const arr1 = array.slice(0, middle);
  const arr2 = array.slice(middle);

  // use reccurency to get to arrays of size 1 and merge them
  return merge(mergeSort(arr1), mergeSort(arr2));
};

const merge = (arr1, arr2) => {
  const result = [];

  // add item to result if it't value isn't equal to the last item in result
  const addWithCheck = (item) => {
    if (result.length === 0 || item != result[result.length - 1])
      result.push(item);
  };

  while (arr1.length && arr2.length) {
    // assign smaller first element from arrays to e.
    const e = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();

    // if there are elements in result and e is different than last element add e to resul
    addWithCheck(e);
  }

  // Clear arrays if there is anything left in either one of them.
  arr1.forEach(addWithCheck);
  arr2.forEach(addWithCheck);

  return result;
};
