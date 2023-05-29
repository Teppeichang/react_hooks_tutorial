import ThirdChild from "./ThirdChild";

const SecondChild = () => {
  return (
    <div className="bg-slate-300 p-5">
      <p className="pb-2">この領域はContextコンポーネント2です</p>
      <ThirdChild />
    </div>
  );
};

export default SecondChild;
