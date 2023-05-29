import SecondChild from "./SecondChild";

const FirstChild = () => {
  return (
    <div className="bg-slate-200 mb-5 p-5">
      <p className="pb-2">この領域はContextコンポーネント1です</p>
      <SecondChild />
    </div>
  )
};

export default FirstChild;