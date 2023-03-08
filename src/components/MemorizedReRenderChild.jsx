import { memo } from 'react';

const MemorizedReRenderChild = memo(({memoCount}) => {
  console.log("メモ化された子コンポーネントの再レンダリングが発生しました");
  return (
    <div>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>ここに表示されているのは再レンダリング解説ページのメモ化された子コンポーネントです</p>
        <p>下記のカウントは親コンポーネントからpropsとして受け取っている数値です。</p>
        <p>Count: {memoCount}</p>
      </code>
    </div>
  );
});

export default MemorizedReRenderChild;