import { useState } from "react";

const UseStatePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <button
          type="button"
          class="inline-flex items-center px-10 py-2.5 font-medium text-center bg-white border border-black rounded-lg"
        >
          Count:
          <span class="inline-flex justify-center items-center ml-2 w-4 h-4 font-semibold">
            {count}
          </span>
        </button>
      </div>
      <div className="mt-5">
        <button
          type="button"
          class="text-white bg-green-500 hover:bg-green-600 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-5 mb-2"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-red-700 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-5 mb-2"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default UseStatePage;
