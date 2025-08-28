import { useState, useEffect } from "react";
import { RotateCcw, Minus, Plus } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 0) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count])

  return (
    <div className="shadow-lg rounded-2xl p-6 flex flex-col items-center gap-6 w-72 sm:w-80">
      {/* Row for - Count + */}
      <div className="flex flex-row items-center justify-between w-full">
        {/* Minus Button (only visible when count is greater than 1)*/}
        {count > 0 ? (
          <button
            onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
            aria-label="Decrement"
            className="w-14 h-14 flex items-center justify-center border-2 border-neutral-700 rounded-full 
                      text-neutral-400 hover:text-red-400 hover:border-red-500 transition"
          >
            <Minus className="w-7 h-7" />
          </button>
        ) : (
          <div className="w-14 h-14" />
        )}

        {/* Count */}
        <p className="font-title text-7xl sm:text-8xl font-extrabold text-white tracking-tight">
          {count}
        </p>

        {/* Plus Button */}
        <button
          onClick={() => setCount(count + 1)}
          aria-label="Increment"
          className="w-14 h-14 flex items-center justify-center border-2 border-neutral-700 rounded-full 
                     text-neutral-400 hover:text-green-400 hover:border-green-500 transition"
        >
          <Plus className="w-7 h-7" />
        </button>
      </div>

      {/* Reset Button below count */}
      <button
        onClick={() => setCount(0)}
        aria-label="Reset"
        className="mt-2 flex items-center justify-center w-12 h-12 border-2 border-neutral-700 
                   rounded-full text-neutral-400 hover:text-white hover:border-blue-500 transition"
      >
        <RotateCcw className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Counter;
