// src/insertionSort.js
export const insertionSort = async (array, setArray, speed) => {
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]); // Update the array state
        await new Promise((resolve) => setTimeout(resolve, speed)); // Delay for visualization
      }
      arr[j + 1] = key;
      setArray([...arr]); // Update the array state
    }
  };
  