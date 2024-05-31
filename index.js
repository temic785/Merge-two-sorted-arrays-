function mergeArrays(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  let unique = [];
  for (i = 0; i < arr3.length; i++) {
    if (unique.indexOf(arr3[i]) === -1) {
      unique.push(arr3[i]);
    }
  }
  unique.sort((a, b) => a - b);
  return unique;
}
const mas1 = [5, 4, 2, 4, 3, 2, 1, 20, 12, 55];
const mas2 = [6, 8, 7, 9, 10];
mergeArrays(mas1, mas2);
