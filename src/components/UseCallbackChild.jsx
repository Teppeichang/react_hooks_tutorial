import { memo } from "react";

const UseCallbackChild = memo(({handleChildButtonClick}) => {
  console.log("子コンポーネントがレンダリングされました");
  return (
    <div>
      <button className="bg-black hover:bg-slate-700 text-white font-medium mt-5 py-2 px-4 rounded w-max" onClick={handleChildButtonClick}>
        Child Component Button
      </button>
    </div>
  );
});

export default UseCallbackChild;