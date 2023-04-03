import { useState } from "react";
import { Link } from "react-router-dom";

const SideEffect = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="my-20 p-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold">プログラミング全般における「副作用」</p>
      <hr />
      <p className="mt-5">
        ある関数がプログラム上のデータを変化させ、それ以降の処理の結果に影響を与えることを指す。
      </p>
      <p>
        例えば、計算結果を返す目的の関数があるとする。その関数が
        <span className="font-bold">
          計算結果を返す過程で、関数外のリソースの状態を変化させてしまうこと
        </span>
        が、プログラミングにおける「副作用」である。
      </p>
      <p>
        「副作用」と聞くと、薬の副作用のように「悪いもの」という感覚を覚えると思うが、プログラミングにおける副作用は、適切に管理さえできていれば決して悪いものではない。
      </p>
      <p className="text-2xl font-bold mt-5">実例: 「副作用」が ない 関数</p>
      <hr />
      <iframe
        title="no-side-effect-function"
        className="my-5 h-44"
        src="//jsfiddle.net/Teppeichang/umrf4hoa/5/embedded/js/dark/"
      ></iframe>
      <p className="text-2xl font-bold mt-5">実例: 「副作用」が ある 関数</p>
      <hr />
      <iframe
        title="side-effect-function"
        className="my-5 h-64"
        src="//jsfiddle.net/Teppeichang/zfxyo0qc/8/embedded/js/dark/"
      ></iframe>
      <p className="text-2xl font-bold">Reactにおける「副作用」</p>
      <hr />
      <p className="mt-5">
        ある関数が「DOMの手動変更」「APIからのデータ取得」のような処理(※)を実行して、コンポーネント外のリソースの状態を変化させることを指す。
      </p>
      <p className="text-2xl font-bold mt-5">実例: Reactにおける「副作用」</p>
      <hr />
      <div className="mt-5">
        <span className="px-10 py-2.5 font-medium text-center bg-white border border-black rounded-xl">
          <span className="ml-2 w-4 h-4 font-semibold">Count:{count}</span>
        </span>
        <button
          type="button"
          className="text-white bg-black font-medium rounded-xl px-5 py-2 text-center ml-5"
          onClick={() => setCount(count + 1)}
        >
          ＋
        </button>
      </div>
      <iframe
        title="side-effect-on-react"
        className="my-5 h-80"
        src="//jsfiddle.net/Teppeichang/dcb6g0sa/4/embedded/js/dark/"
      ></iframe>
      <p className="text-2xl font-bold mt-5">「副作用」 = 「再レンダリング」ってこと？🤔</p>
      <hr />
      <p className="mt-5 font-bold">結論: 「副作用」 ≠ 「再レンダリング」</p>
      <p>
        前項の実例にある、ボタンをクリックすると同時にCountの値が変わる動きは、以下の順序で行われている。
      </p>
      <ul className="list-decimal list-inside my-5 pl-2 leading-8 font-bold">
        <li>
          ボタンをクリック、Countの値が変わる(この段階では、画面上でCountの値は変わっていない)
        </li>
        <li>画面上でCountの値が変わる</li>
      </ul>
      <p className="font-bold underline">1. は「副作用」に該当する。</p>
      <p>
        onClick に割り当てられた関数 setCount(count + 1)
        により、stateとして保持しているcountの値が変わる。
      </p>
      <p>stateはコンポーネントの外側で定義されている値。</p>
      <p>
        コンポーネントの外側で定義されている値が変わるということは「副作用」で、onClickは「副作用のある関数」である。
      </p>
      <p className="mt-5 font-bold underline">2. は「再レンダリング」に該当する。</p>
      <p>
        「副作用」により、stateの値が変わったため「再レンダリング」が実行。画面上にCountの値の変更が反映される。
      </p>
      <p className="text-2xl font-bold mt-5">副作用が起こるタイミングと管理</p>
      <hr />
      <p className="mt-5">Reactにおいて副作用が起こるタイミングは以下の2つ↓</p>
      <ul className="list-disc list-inside my-5 pl-2 leading-8 font-bold">
        <li>コンポーネントの再レンダリングが起こる前(= 実例: Reactにおける「副作用」)</li>
        <li>コンポーネントの初回レンダリングが起こった後</li>
      </ul>
      <p>
        つまり、一度でもコンポーネントのレンダリングが完了すれば、常に副作用が起こりうる状態ということとなる。
      </p>
      <p>
        過度な副作用の発生はパフォーマンスの低下につながるので、副作用が起こるタイミングと回数を制御する必要がある。
      </p>
      <p>
        副作用の制御のために使用されるフックが、
        <Link to="/hooks/useeffect" className="font-bold hover:text-sky-400 hover:underline">
          useEffect
        </Link>{" "}
        である。
      </p>
    </div>
  );
};

export default SideEffect;
