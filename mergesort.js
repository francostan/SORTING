function split(arr) {//[[3,4,7],[1,9,2]]
  //divide the array into two subarrays
  //usamos math.floor para redondear hacia abajo
  var mid = Math.floor(arr.length / 2);
  //usamos slice para dividir el array en dos
  //la primera mitad izquierda del array
  var left = arr.slice(0, mid);
  //la segunda mitad derecha del array
  var right = arr.slice(mid);
  //retornamos un array con los dos subarrays
  return [left, right];
}
function merge(left, right) {
  //combinar dos arreglos ordenados en uno solo ordenado
  //creamos un array vacio
  var result = [];
  
  //chequemos que los arrays no esten vacios
  while (left.length && right.length) {
    //si el elemento del array izquierdo es mayor que el del array derecho
    if (left[0] > right[0]) {
      //agregamos el elemento del array derecho al array vacio
      result.push(right[0]);
      //eliminamos el elemento del array derecho
      right.shift();
    } else {
      //agregamos el elemento del array izquierdo al array vacio
      result.push(left[0]);
      //eliminamos el elemento del array izquierdo
      left.shift();
    }
}
    //en algun momento alguno de los sub arreglos quedara vacio
    //por lo que agregamos el otro sub arreglo al array vacio
    
    while (left.length > 0) {
      result.push(left[0]);
      left.shift();
    }
    while (right.length > 0) {
      result.push(right[0]);
      right.shift();
    }
    
    return result;
  }


function mergeSort(array){
  //usamos split para dividir el array en dos
  if (array.length < 2) {
    return array;
  }
  //llamamos a la funcion split para dividir el array hasta que quede un array de un solo elemento
  let left= mergeSort(split(array)[0]);
  let right= mergeSort(split(array)[1]);
  
  
  //llamamos a la funcion merge para combinar los arrays
  
  return merge(left,right);
}
