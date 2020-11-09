let lastIndexOf = function (arr, x) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      index = i;
    }
  }
  return index;
};

console.log(lastIndexOf([1, 2, 4, 2, 1], 5));
