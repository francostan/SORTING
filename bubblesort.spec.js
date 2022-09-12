//Funcion bubbleSort: deberia volver un array ordenado.
//la parte de describe es la denominada suite, que recibe un nombre y callback (arrow function) o function normal
describe("Bubble Sort", function () {
  //la parte de it es la denominada spec, que recibe un nombre(string)y callback (arrow function) o function normal
  //es importante que el it sea bien descriptivo
    it("Maneja arreglos vacios", function () {
      expect(bubbleSort([])).toEqual([]);
    });
    //aqui validamos lo que necesitemos, esperamos que algo sea igual a algo
    //puedo ir ejecturando otras funciones

    it("Ordena un array", function () {
      expect(bubbleSort([2, 4, 1, 3])).toEqual([1, 2, 3, 4]);
    });
    it("Un arreglo ordenado, deberia mantenerse ordenado", function () {
      expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
    it("Un arreglo a la inversa, deberia de estar ordenado", function () {
      expect(bubbleSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
    });
    //Funcion Spy on: para saber cuantas veces se ejecuto una funcion
    //tambien cuenta los parametros que se le pasan a la funcion y mas
    //SpyOn(window(si esta en el contexto global), "nombre de la funcion").and.callThrough();
    //expect(window.nombre de la funcion.calls.count()).toEqual(1);
  });
  
  //Funcion Swap
  
  describe("Swap", function () {
    it("Toma un arreglo y cambia los valores", function () {
      expect(swap([90, 20], 0)).toEqual([20, 90]);
    });
  });
  