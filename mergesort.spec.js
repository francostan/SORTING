describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([3, 4, 7], [1,2,9])).toEqual([1, 2, 3, 4, 7, 9]);
  });
});

describe("MergeSort", function () {
  it("dividir arreglos en subarreglos", function () {
    expect(mergeSort([3, 4, 7, 1, 9, 2])).toEqual([1, 2, 3, 4, 7, 9]);
  });
});
