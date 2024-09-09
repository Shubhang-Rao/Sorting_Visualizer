// src/SortingVisualizer/quickSort.js
export const quickSort = async (array, setArray, speed) => {
    const arr = [...array];
  
    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]); // Update the array state
          await new Promise((resolve) => setTimeout(resolve, speed)); // Delay for visualization
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]); // Update the array state
      await new Promise((resolve) => setTimeout(resolve, speed)); // Delay for visualization
      return i + 1;
    };
  
    const quickSortRecursive = async (arr, low, high) => {
      if (low < high) {
        const pi = await partition(arr, low, high);
        await quickSortRecursive(arr, low, pi - 1);
        await quickSortRecursive(arr, pi + 1, high);
      }
    };
  
    await quickSortRecursive(arr, 0, arr.length - 1);
  };
  