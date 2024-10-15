import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold p-4 mt-4">Number is {num}</h1>
      <button
        className="text-5xl bg-green-700 text-white p-4 rounded-md"
        id="Plus"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Plus
      </button>
      <button
        className="text-5xl bg-red-700 text-white p-4 rounded-md mt-4"
        id="Minus"
        onClick={() => {
          setNum(num - 1);
        }}
      >
        Minus
      </button>
      <button
        className="text-5xl bg-blue-700 text-white p-4 rounded-md mt-4"
        id="Multiply"
        onClick={() => {
          setNum(num * 2);
        }}
      >
        Multiply by 2
      </button>
      <button
        className="text-5xl bg-yellow-700 text-white p-4 rounded-md mt-4"
        id="Divide"
        onClick={() => {
          setNum(num / 2);
        }}
      >
        Divide by 2
      </button>
    </div>
  );
}

export default App;
