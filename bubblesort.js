function swap(array, i) {
  let num1 = array[i];
  let num2 = array[i + 1];
  array[i] = num2;
  array[i + 1] = num1;

  return array;
}

function bubbleSort(array) {
  for (j = 0; j < array.length; j++) {
    for (i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i);
      }
    }
  }
  return array;
}
