import { Link } from "react-router-dom";

const Props = () => {
  return (
    <div className="my-20 p-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold">props とは</p>
      <hr />
      <p className="mt-5">
        Reactのコンポーネント間で受け渡すことのできる値で、propsを受け取ったコンポーネントはpropsの内容に応じた表示やスタイルが適用される。
      </p>
      <p>stateが「状態」と言われているのに対し、propsは<span className="font-bold">「属性(=properties)」</span>と言われている。</p>
      <p className="mt-5">身近な「属性」の例としては、HTMLがある。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p># id,class,onclickが「属性」にあたる。</p>
        {'<div id="name" class="label" onclick="alert("Hello World!");">Hello World!</div>'}
      </code>
      <p>
        このHTMLの「属性」にデータの受け渡し機能を拡張機能として追加したものが、Reactにおけるpropsである。
      </p>
      <p>先ほどのHTMLのサンプルコードをReact風に書くと...↓</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p># App = 親コンポーネント(子へpropsを渡す)</p>
        <p># Child = 子コンポーネント(親からのpropsを受け取る)</p>
        <br />
        <p>const App = () => {"{"}</p>
        <p className="ml-5">return {'<Text text="Hello World!" />'}</p>
        <p>{"}"}</p>
        <br />
        <p>const Child = (props) => {"{"}</p>
        <p className="ml-5">return {"<div>{props.text}</div>"}</p>
        <br />
        <p># こちらの書き方でもOK</p>
        <p>
          const Child = ({"{"}text{"}"}) => {"{"}
        </p>
        <p className="ml-5">return {"<div>{text}</div>"}</p>
        <p>{"}"}</p>
      </code>
      <p className="text-2xl font-bold mt-5">props の管理と更新</p>
      <hr />
      <p className="mt-5">propsは子コンポーネント側では編集・更新することができない。</p>
      <p>
        propsで受け渡す値を変更したい場合は、受け渡す側(=親コンポーネント側)でpropsの中身を編集・更新してあげる必要がある。
      </p>
      <p className="mt-5">
        また、実装の過程でコンポーネントが増えてくると、コンポーネント間のprops受け渡し関係の把握が困難になったり、propsを受け取る→渡す→受け取る...といったバケツリレー地獄にハマったりする。
      </p>
      <p>
        これらの問題への対策として、propsをグローバルデータとして管理できる{" "}
        <span className="font-bold">useContext</span> というフックがある。
      </p>
      <p className="text-2xl font-bold mt-5">state との違い</p>
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
        state については、
        <Link to="/glossaries/state" className="font-bold hover:text-sky-400 hover:underline">
          こちら
        </Link>
        で解説しているのでご参照のほど。
      </p>
    </div>
  );
};

export default Props;
