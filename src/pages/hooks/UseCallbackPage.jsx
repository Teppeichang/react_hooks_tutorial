import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import UseCallbackChild from "../../components/UseCallbackChild";

const UseCallbackPage = () => {
  console.log("親コンポーネントがレンダリングされました");

  const [count, setCount] = useState(0);

  const handleChildButtonClick = useCallback(() => {
    console.log("子コンポーネントのボタンがクリックされました");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20">
      <p className="text-2xl mb-5">useCallback</p>
      <div className="flex flex-col items-center mt-5 mb-20">
        <p className="font-semibold">Count: {count}</p>
        <button
          className="bg-black hover:bg-slate-700 text-white font-medium mt-5 py-2 px-4 rounded w-max"
          onClick={() => setCount(count + 1)}
        >
          Parent Component Button
        </button>
        <UseCallbackChild handleChildButtonClick={handleChildButtonClick} />
      </div>
      <Box sx={{ width: 800, mb: 10 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>解説の前に① JavaScriptの関数に関する特性を理解する</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <iframe
                title="function-identity"
                className="my-5 h-64 w-full"
                src="//jsfiddle.net/Teppeichang/3Lx5wutv/7/embedded/js/dark/"
              ></iframe>
              <p>
                上記ソースコードのコンソール出力結果は true であるが、厳密に言えば false である。
              </p>
              <p>
                2つの変数が同じ関数を受け取っており、一見同じに見えるが、参照値(=関数が渡される先)が異なるため、
                <span className="font-bold">「同じ値を返す違うもの」</span>として扱われる。
              </p>
              <p>
                JavaScriptにおいて関数はオブジェクト型として扱われるため、受け渡しは「参照値」をもとに行われる(=参照渡しと呼ばれる)。
              </p>
              <p>バグやエラーではなく、参照値をもとに同一かを判断する、仕様に基づく挙動である。</p>
              <iframe
                title="primitive-type-identity"
                className="my-5 h-56 w-full"
                src="//jsfiddle.net/Teppeichang/o2smq8gp/17/embedded/js/dark/"
              ></iframe>
              <p>
                プリミティブ型(stringやnumber)の場合は、受け渡しは「値」をもとに行われるため、他の変数に代入しても同じものとして扱われる。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>解説の前に② Reactにおける再レンダリングと関数呼び出しの挙動</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                <Link
                  to="/glossaries/re-render"
                  className="font-bold hover:text-sky-400 hover:underline"
                >
                  用語集: 再レンダリング
                </Link>
                で解説しているように、再レンダリングが発生すると、JavaScriptのコードが一番上から読み直される。
              </p>
              <p>
                つまり、<span className="font-bold">再レンダリングの度に関数が呼び出される</span>
                ということである。
              </p>
              <p className="mt-5">
                stateを持ったコンポーネントのサンプルで例えると、以下のようなイメージ↓
              </p>
              <iframe
                title="function-identity-on-react"
                className="my-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/hcpuLk39/20/embedded/js/dark/"
              ></iframe>
              <p>
                再レンダリングの度に同じ関数が呼び出されたとしても、参照値が異なるため、それぞれが別の関数として扱われる。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useCallbackとは？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>メモ化された「コールバック関数」を返すフック。</p>
              <p>
                メモ化により余計な処理を無くすことで、パフォーマンスの向上や予期しないコンポーネントの
                <Link
                  to="/glossaries/re-render"
                  className="font-bold hover:text-sky-400 hover:underline"
                >
                  再レンダリング
                </Link>
                を防ぐことができる。
              </p>
              <iframe
                title="usecallback-syntax"
                className="my-5 h-24 w-full"
                src="//jsfiddle.net/Teppeichang/vhbLzsyp/2/embedded/js/dark/"
              ></iframe>
              <p>
                第二引数の依存配列に指定した値が更新されれば、第一引数に指定したコールバック関数が実行される
                という仕組みである。
              </p>
              <iframe
                title="usecallback-syntax-empty-array"
                className="my-5 h-24 w-full"
                src="//jsfiddle.net/Teppeichang/y8zgow6L/embedded/js/dark/"
              ></iframe>
              <p>第二引数の依存配列は空配列を指定することもできる。</p>
              <p>
                空配列を指定した場合は
                <span className="font-bold">コンポーネントの初回レンダリング時のみ</span>
                、第一引数のコールバック関数が実行される。
              </p>
              <p className="mt-5">本ページのサンプルは、第二引数の依存配列に空配列を指定したパターンで実装している。</p>
              <iframe
                title="usecallback-sample-parent"
                className="my-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/7wj018o3/22/embedded/js/dark/"
              ></iframe>
              <iframe
                title="usecallback-sample-child"
                className="my-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/9spnvf4u/3/embedded/js/dark/"
              ></iframe>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseCallbackPage;
