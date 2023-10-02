function divideArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      console.log("Arrays must have the same length");
      return null;
    }
  
    const resultArray = [];
  
    for (let i = 0; i < arr1.length; i++) {
      resultArray.push(arr1[i] / arr2[i]);
    }
  
    return resultArray;
  }
  
  // Example usage:
  const Array1 = [15, 30, 45, 60];
  const Array2 = [5, 6, 3, 10];
  
  const result = divideArrays(Array1, Array2);
  console.log(result);