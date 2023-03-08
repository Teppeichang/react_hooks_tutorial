const ReRenderChild = ({count}) => {
  console.log("子コンポーネントの再レンダリングが発生しました");
  return (
    <div>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>ここに表示されているのは再レンダリング解説ページの子コンポーネントです</p>
        <p>下記のカウントは親コンポーネントからpropsとして受け取っている数値です。</p>
        <p>Count: {count}</p>
      </code>
    </div>
  );
};

export default ReRenderChild;
