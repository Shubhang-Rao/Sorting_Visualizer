// src/SortingVisualizer/Input.jsx
import React from 'react';

const Input = ({ value, onChange, onSubmit }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="border border-gray-300 px-3 py-2 rounded mb-2 w-48 text-center"
        min="1"
        max="50"
        placeholder="Enter number of elements"
      />
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Update Array
      </button>
    </div>
  );
};

export default Input;
