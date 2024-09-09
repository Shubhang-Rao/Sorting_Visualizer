import React, { useState, useEffect } from 'react';
import Input from './Input';
import { bubbleSort } from './bubblesort';
import { selectionSort } from './selectionsort';
import { insertionSort } from './insertionsort';
import { mergeSort } from './mergesort';
import { quickSort } from './quicksort';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [elementCount, setElementCount] = useState(20);

  const generateNewArray = () => {
    if (isSorting) return;
    const newArray = Array.from({ length: elementCount }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
  };

  const handleSorting = async (sortFunction) => {
    setIsSorting(true);
    await sortFunction(array, setArray, speed);
    setIsSorting(false);
  };

  const handleElementCountChange = (e) => {
    setElementCount(e.target.value);
  };

  const handleArrayUpdate = () => {
    generateNewArray();
  };

  useEffect(() => {
    generateNewArray();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-center text-2xl font-bold mb-4">Sorting Visualizer</h1>
      <Input
        value={elementCount}
        onChange={handleElementCountChange}
        onSubmit={handleArrayUpdate}
      />
      <div className="flex justify-center items-end space-x-2 h-64 border border-gray-300 p-2">
        {array.map((value, index) => (
          <div
            key={index}
            style={{ height: `${value * 3}px` }}
            className="bg-green-500 w-4"
          />
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-1">
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          onClick={generateNewArray}
          disabled={isSorting}
        >
          Generate New Array
        </button>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => handleSorting(bubbleSort)}
          disabled={isSorting}
        >
          Bubble Sort
        </button>
        <button 
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => handleSorting(selectionSort)}
          disabled={isSorting}
        >
          Selection Sort
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => handleSorting(insertionSort)}
          disabled={isSorting}
        >
          Insertion Sort
        </button>
        <button 
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => handleSorting(mergeSort)}
          disabled={isSorting}
        >
          Merge Sort
        </button>

        <button 
          className="bg-violet-400 text-white px-4 py-3 rounded"
          onClick={() => handleSorting(quickSort)}
          disabled={isSorting}
        >
          Quick Sort
        </button>

        <label className="flex items-center ml-4">
          <span className="mr-2">Speed:</span>
          <input
            type="range"
            min="50"
            max="500"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="w-24"
          />
        </label>
      </div>
    </div>
  );
};

export default SortingVisualizer;
