import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const UseStatePage = () => {
  const [count, setCount] = useState(0);

  let count_2 = 0;
  const handleClick = () => {
    count_2++;
    console.log(count_2);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex">
        <button type="button" className="px-4 font-medium text-center text-white bg-blue-700 mr-5">
          A
        </button>
        <button className="px-10 py-2.5 font-medium text-center bg-white border border-black rounded-lg">
          <span className="ml-2 w-4 h-4 font-semibold">Count:{count}</span>
        </button>
        <button
          type="button"
          className="text-white bg-black font-medium rounded-full px-5 py-2.5 text-center ml-5"
          onClick={() => setCount(count + 1)}
        >
          ＋
        </button>
      </div>
      <div className="flex mt-5 mb-5">
        <button type="button" className="px-4 font-medium text-center text-white bg-red-600 mr-5">
          B
        </button>
        <button className="px-10 py-2.5 font-medium text-center bg-white border border-black rounded-lg">
          <span className="ml-2 w-4 h-4 font-semibold">Count:{count_2}</span>
        </button>
        <button
          type="button"
          className="text-white bg-black font-medium rounded-full px-5 py-2.5 text-center ml-5"
          onClick={handleClick}
        >
          ＋
        </button>
      </div>
      <Box sx={{width: 800}}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>A と B の違いは？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A は
              Countの状態が管理されている。なので＋ボタンをクリックした際に数値の変更がレンダリングされる。
              <br />
              B は
              Countの状態が管理されていない。なので＋ボタンをクリックした際に数値の変更がレンダリングされない。なのでボタンを何度クリックしてもCountの数値は
              0 のまま。
              <br />
              だが、Bに関しても数値自体に変更は生じている。
              <br />B を A
              と同じ挙動にするためには「データが変わった際にブラウザをレンダリングする」ようにしてあげる必要がある。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              「データが変わった際にブラウザをレンダリングする」にはどうすればよいか？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              結論: useState というフックを使う。
              <br />
              <code className="bg-slate-200 block mb-5">
                import {"{"} useState {"}"} from "react";
                <br />
                const CountComponent = () => {'{'}
                <br />
                  <p className="ml-3">const [count, setCount] = (0);</p>
                  <p className="ml-3">// 以下略</p>
                {'}'}
              </code>
              上記サンプルコードの記述の意味は以下の通り↓
              <br />
              <code className="bg-slate-200 block">
                import {"{"} useState {"}"} from "react";
                <br />
                // フックを使う際は import 記述が必要(useState以外のフックに関しても同様)
              </code>
              <code className="bg-slate-200 block mt-5 mb-5">
              const [count, setCount] = (0);
              <br />
              // const [Countの現在の状態(state), Countのstateを更新するための関数] = (初期値)
              </code>
              useStateを使わないと、変数の中身は変わってもその状態がReact側で保持されず、かつ変更を反映させる関数もないので変数更新時のレンダリングが行われない。
              <br />
              useStateを使うことで、変数の状態がReactで保持されて、変更を反映させる関数(=set〇〇)が変数に変更が生じると動作するので、変数更新時のレンダリングが行われる。
              <br />
              <br />
              変数の更新と同時にレンダリングを実現するには、useStateの「変更を反映させる関数」を変数の更新を行うイベントに合わせて発火させる必要がある。
              <br/>
              例えば、A の動作を再現する場合のコードは以下の通り↓
              <code className="bg-slate-200 block mt-5 mb-5">
                const CountComponent = () => {'{'}<br/>
                const [count, setCount] = useState(0);<br/>
                return (<br/>
                  <p className="ml-5">&lt;div&gt;<br/></p>
                  <p className="ml-10">// return 内でJavaScript変数・関数を呼び出す場合はオブジェクトリテラルで囲う必要がある<br/></p>
                  <p className="ml-10">&lt;button&gt;&lt;span&gt; Count: {'{'}count{'}'} &lt;/span&gt;&lt;/button&gt;<br/></p>
                  <p className="ml-10">&lt;button type="button" onClick={'{'}() => setCount(count + 1){'}'} &gt;＋&lt;/button&gt;<br/></p>
                  <p className="ml-5">&lt;/div&gt;<br/></p>
                )
              </code>
              buttonのonClick属性に、「変更を反映させる関数」を設定することで、「変更を反映させる関数」がイベントハンドラとなり、ボタンクリックと同時にCountの数値が更新、ブラウザがレンダリングされる。<br /><br />
              参考：以下の記述でもOK<br />
              <code className="bg-slate-200 block mt-5 mb-5">
                const CountComponent = () => {'{'}<br/>
                const [count, setCount] = useState(0);<br/>
                const handleClick = () => {'{'}<br />
                <p className="ml-5">count + 1;</p>
                {'}'}<br/>
                return (<br/>
                  <p className="ml-5">&lt;div&gt;<br/></p>
                  <p className="ml-10">&lt;button&gt;&lt;span&gt; Count: {'{'}count{'}'} &lt;/span&gt;&lt;/button&gt;<br/></p>
                  <p className="ml-10">&lt;button type="button" onClick={'{'}handleClick{'}'} &gt;＋&lt;/button&gt;<br/></p>
                  <p className="ml-5">&lt;/div&gt;<br/></p>
                )
              </code>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useStateの宣言形式について</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <code className="bg-slate-200 block mb-5">
                const [count, setCount] = useState(0)
              </code>
              useStateは上記のように配列形式で変数宣言をしている。これは「分割代入」と呼ばれるJavaScript構文で、count と setCount という2つの変数を作って、useStateから返される値の1つ目を count に、2つ目を setCount に代入するというもの。
              <br />
              下記のコードと同様の意味である↓
              <br />
              <code className="bg-slate-200 block mt-5 mb-5">
                let countStateVariable = useState(0)<br />
                let count = countStateVariable[0]<br />
                let setCount = countStateVariable[1]<br />
              </code>
              useStateで変数を宣言する際、ペア、つまり2つの要素を含んだ配列が返される。<br/>
              1つ目の要素はstateの現在の値、2つ目の要素はstateを更新するための関数である。<br/>
              これらには特定の意味があり、アクセスする際に 変数名[0]とか変数名[1] ではわかりづらいので、分割代入を用いている。
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseStatePage;
