let range = function (start, end, step) {
  let arr = [];
  if (start > end || step <= 0 || (start | end | step) === undefined) {
    return arr;
  }
  for (let i = start; i < end; i += step) {
    arr.push(i);
  }
  return arr;
};

console.log(range(101, undefined, -2));
