function swap(array, i) {
  let num1 = array[i];
  let num2 = array[i + 1];
  array[i] = num2;
  array[i + 1] = num1;
  //forma del review
  // [array[i], array[i + 1]] = [array[i + 1], array[i]];


  return array;
}

function bubbleSort(array) {
//usamos dos for para pararnos en un elemento del array
// e ir comparandolo con todos los elementos de este
// si tuvieramos [5,4,3,2,1], en la primer vuelta del for de arriba nos quedaria asi [4,3,2,1,5]
  for (let j = 0; j < array.length; j++) {
    for (i = 0; i < array.length; i++) {
      //manejamos la posibilidad de que el array sea vacio/undefined
      if (array[i] > array[i + 1] && array[i + 1]) {
        swap(array, i);
      }
    }
  }
  return array;
  //hay otra forma en la que podemos hacer el for de arriba dando vuelta j = array.length - 1, etc
  //la podemos ver en review min 40:00
}
