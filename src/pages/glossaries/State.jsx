import { Link } from "react-router-dom";

const State = () => {
  return (
    <div className="my-20 p-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold">state とは</p>
      <hr />
      <p className="mt-5">
        Reactのコンポーネントの<span className="font-bold">「状態(=state)」を表す値</span>
        のことである。
      </p>
      <p>
        Reactに限った話ではないが、Webアプリケーションにおける画面には、さまざまな「状態」がある。例えば...↓
      </p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>エラーが出ている/出ていない</p>
        <p>モーダルを開いている/閉じている</p>
        <p>ボタンがクリックできる/できない</p>
        <p>テキストボックスに文字が入力されている/されていない</p>
      </code>
      <p>
        上記例にあるような「状態」を、Reactではstateという値として管理し、イベント実行時に更新処理を行うことで、動的なWebアプリケーションを実現している。
      </p>
      <p className="text-2xl font-bold mt-5">state の管理と更新</p>
      <hr />
      <p className="mt-5">ステートフック(useState)を使用する。</p>
      <p>
        実例は
        <Link to="/hooks/usestate" className="font-bold hover:text-sky-400 hover:underline">
          こちら
        </Link>
      </p>
      <p className="text-2xl font-bold mt-5">props との違い</p>
      <hr />
      <p className="mt-5 font-bold">
        props:
        コンポーネントの外側から受け取ることのできる値。コンポーネント間で値の受け渡しができる。
      </p>
      <p className="font-bold">
        state:
        コンポーネントの内部で保持される値で、コンポーネントの外側から値を受け取ることはできない。
      </p>
      <p p className="mt-5">
        props については、
        <Link to="/glossaries/props" className="font-bold hover:text-sky-400 hover:underline">
          こちら
        </Link>
        でもう少し踏み込んで解説しているのでご参照のほど。
      </p>
    </div>
  );
};

export default State;
