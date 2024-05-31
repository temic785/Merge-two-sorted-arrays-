function mergeArrays(arr1, arr2) {
  const arr = arr1.concat(arr2);
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  unique.sort((a, b) => a - b);
  return unique;
}
const mas1 = [5, 4, 2, 4, 3, 2, 1];
const mas2 = [6, 8, 7, 9, 10];
mergeArrays(mas1, mas2);
