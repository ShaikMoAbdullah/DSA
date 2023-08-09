const arr = [2, 34, 5, 1, 65, 3];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temporaryVariable = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temporaryVariable;
    }
  }
}

// console.log(arr);
// Uncomment the above line and run the program using node to see the sorted array
