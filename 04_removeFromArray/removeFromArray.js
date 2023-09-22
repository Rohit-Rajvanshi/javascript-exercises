const removeFromArray = function(array, ...elementToRemove) {
    const newArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (elementToRemove.includes(array[i])) {
        // If the element matches what we want to remove, skip it
        continue;
      }
      newArray.push(array[i]);
    }
  
    return newArray;
  }
  
  const resultArray = removeFromArray([1, 2, 3, 4], 3,2)

// Do not edit below this line
module.exports = removeFromArray;
