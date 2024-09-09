// src/mergeSort.js
const merge = async (array, left, mid, right, setArray, speed) => {
    let i = left;
    let j = mid + 1;
    let k = left;
    const tempArray = [...array];
  
    while (i <= mid && j <= right) {
      if (tempArray[i] <= tempArray[j]) {
        array[k++] = tempArray[i++];
      } else {
        array[k++] = tempArray[j++];
      }
      setArray([...array]); // Update the array state
      await new Promise((resolve) => setTimeout(resolve, speed)); // Delay for visualization
    }
  
    while (i <= mid) {
      array[k++] = tempArray[i++];
      setArray([...array]); // Update the array state
      await new Promise((resolve) => setTimeout(resolve, speed)); // Delay for visualization
    }
  
    while (j <= right) {
      array[k++] = tempArray[j++];
      setArray([...array]); // Update the array state
      await new Promise((resolve) => setTimeout(resolve, speed)); // Delay for visualization
    }
  };
  
  const mergeSortRecursive = async (array, left, right, setArray, speed) => {
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    await mergeSortRecursive(array, left, mid, setArray, speed);
    await mergeSortRecursive(array, mid + 1, right, setArray, speed);
    await merge(array, left, mid, right, setArray, speed);
  };
  
  export const mergeSort = async (array, setArray, speed) => {
    await mergeSortRecursive(array, 0, array.length - 1, setArray, speed);
  };
  