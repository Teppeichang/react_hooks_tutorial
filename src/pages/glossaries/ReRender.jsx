import { TextField } from "@mui/material";
import { useState } from "react";
import ReRenderChild from "../../components/ReRenderChild";
import MemorizedReRenderChild from "../../components/MemorizedReRenderChild";

const ReRender = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  return (
    <div className="my-20 p-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold">(コンポーネントの)再レンダリング とは</p>
      <hr />
      <p className="mt-5">
        stateの値の更新、propsの値の変更が生じた際に、
        <span className="font-bold">
          対象となるコンポーネントのJavaScriptのコードが一番上から読み直されること
        </span>
        である。
      </p>
      <p>
        また、親コンポーネントのstateを更新するような処理を行なった場合、再レンダリングは親コンポーネントと子コンポーネントの両方に発生する。
      </p>
      <p className="text-2xl font-bold mt-5">実例: stateが更新された時の再レンダリング</p>
      <hr />
      <TextField
        label="何か入力してみてください"
        value={text}
        onChange={(event) => setText(event.target.value)}
        sx={{ mt: 3, maxWidth: 400 }}
      />
      <p>Text: {text}</p>
      <p className="text-2xl font-bold mt-5">実例: propsが更新された時の再レンダリング</p>
      <hr />
      <button
        type="button"
        className="text-white bg-black font-medium px-5 py-2.5 mt-5 max-w-xs"
        onClick={() => setCount(count + 1)}
      >
        Count +
      </button>
      <ReRenderChild count={count} />
      <p className="text-2xl font-bold mt-5">意図しない再レンダリングの発生</p>
      <hr />
      <p className="mt-5">
        本コンポーネント(ReRender.jsx)と子コンポーネント(ReRenderChild.jsx)の親子関係を、ソースコードで表したものがこちら↓
      </p>
      <iframe
        title="parent-and-child"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/c9bpda4z/8/embedded/js/dark/"
      ></iframe>
      <p>
        親コンポーネントではstateとしてtextとcountの2つの値を保持していて、そのうちcountに関してはpropsとして子コンポーネントに渡している。
      </p>
      <p className="font-bold">textに関しては、propsとして子コンポーネントに渡していない</p>
      <p className="mt-5">
        一見、問題のないソースコードのように見えるが、現状のソースコードだと子コンポーネントに「意図しない再レンダリング」が発生する。
      </p>
      <p>具体的な挙動についてはこちら↓</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p># 意図した再レンダリング</p>
        <p>countの値が更新される</p>
        <p>
          countはpropsとして子コンポーネントに渡されている。親コンポーネント側でcountの値を更新する処理を行えば、子コンポーネントがそれに合わせて再レンダリングされる。
        </p>
        <br />
        <p className="text-red-600"># 意図しない再レンダリング</p>
        <p>textの値が更新される</p>
        <p>
          textはpropsとして子コンポーネントに渡されていないが、親コンポーネント側でtextの値を更新する処理を行えば、子コンポーネントがそれに合わせて再レンダリングされる。
        </p>
      </code>
      <p className="mt-5">
        コンソールを確認してみると、countの値が更新された際に「子コンポーネントの再レンダリングが発生しました」が出力されるが、textの値が変わった時も同様に「子コンポーネントの再レンダリングが発生しました」が出力されることが分かる。
      </p>
      <p className="mt-5">
        上記のような「意図しない再レンダリング」は、コンポーネントの数・規模が大きくなるほどパフォーマンスの低下に繋がる。
      </p>
      <p>意図しない再レンダリングを防ぐためには、「再レンダリングの最適化」を行う必要がある。</p>
      <p className="text-2xl font-bold mt-5">再レンダリングの最適化</p>
      <hr />
      <p className="mt-5">
        再レンダリングの最適化とは、無駄な処理・計算を抑えて、予期しない再レンダリングを発生させないようにすること。
      </p>
      <p>再レンダリングの最適化のための、3つの機能がReactに備わっている。</p>
      <ul className="list-disc list-inside mt-5 pl-2 leading-8">
        <li>memo</li>
        <li>useCallback</li>
        <li>useMemo</li>
      </ul>
      <p className="mt-5">
        これらの機能を使った再レンダリングの最適化処理は「（コンポーネントの）メモ化」と呼ばれる。
      </p>
      <p>メモ化によるメリットは以下の通り↓</p>
      <ul className="list-disc list-inside mt-5 pl-2 leading-8">
        <li>
          処理・計算結果を保持・再利用できるようになる。（=メモリに処理結果を記録し、必要な時にそこから取り出すイメージ）これによりパフォーマンスの向上が期待できる
        </li>
        <li>
          「親から渡されたpropsは何か」を判別でき、「propsの値が変わった時に再レンダリング」できるようになる(=再レンダリングの最適化)
        </li>
      </ul>
      <p className="mt-5">
        本ページでは、memo を使用した再レンダリングの最適化とその実例を紹介する。
      </p>
      <p className="mt-5">useCallback の解説は こちら</p>
      <p>useMemo の解説は こちら</p>
      <p className="text-2xl font-bold mt-5">
        実例: memo によりメモ化したコンポーネントの再レンダリング
      </p>
      <hr />
      <button
        type="button"
        className="text-white bg-black font-medium px-5 py-2.5 mt-5 max-w-xs"
        onClick={() => setMemoCount(memoCount + 1)}
      >
        Count +
      </button>
      <MemorizedReRenderChild memoCount={memoCount} />
      <iframe
        title="parent-and-memorized-child"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/auvL6frk/9/embedded/js/dark/"
      ></iframe>
      <p className="mt-5">
        コンソールを確認してみると、countの値が更新された際に「メモ化された子コンポーネントの再レンダリングが発生しました」が出力され、textの値が変わった時は「子コンポーネントの再レンダリングが発生しました」が出力されないことが分かる。
      </p>
    </div>
  );
};

export default ReRender;
