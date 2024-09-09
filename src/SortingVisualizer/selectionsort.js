// src/selectionSort.js
export const selectionSort = async (array, setArray, speed) => {
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap elements
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]); // Update the array state
        await new Promise((resolve) => setTimeout(resolve, speed)); // Delay for visualization
      }
    }
  };
  