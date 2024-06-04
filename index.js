function invert(array) {
  let result = [];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      result[i] = 0;
    } else {
      result[i] = array[i] * -1;
    }
  }
  console.log(result);
  return result;
}

function spinWords(string) {
  let arr = string.split(" ");
  let editedArray = [];
  let reverseEl;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      reverseEl = arr[i].split("").reverse().join("");
      editedArray += reverseEl + " ";
    } else {
      editedArray += arr[i] + " ";
    }
  }
  editedArray = editedArray.slice(0, -1);
  return editedArray;
}
let str = "This is another test";
spinWords(str);

let mas = [-1, 2, 4, 5, -3, 0, 9, -10, 0];
invert(mas);
