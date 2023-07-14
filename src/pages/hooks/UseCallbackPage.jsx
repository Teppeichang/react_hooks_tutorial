import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const UseCallbackPage = () => {
  const [memorizedText, setMemorizedText] = useState("");
  const [memorizedCount, setMemorizedCount] = useState(0);
  const memorizedRenderLog = useCallback(
    (value) => {
      console.log(`フォームの中身(useCallbackあり): ${value}\nボタンクリック数: ${memorizedCount}`);
    },
    // eslint-disable-next-line
    [memorizedText]
  );

  useEffect(() => {
    memorizedRenderLog(memorizedText);
    // eslint-disable-next-line
  }, [memorizedRenderLog]);

  const [noMemorizedText, setNoMemorizedText] = useState("");
  const [noMemorizedCount, setNoMemorizedCount] = useState(0);
  const noMemorizedRenderLog = (value) => {
    console.log(`フォームの中身(useCallbackなし): ${value}\nボタンクリック数: ${noMemorizedCount}`);
  };

  useEffect(() => {
    noMemorizedRenderLog(noMemorizedText);
    // eslint-disable-next-line
  }, [noMemorizedRenderLog]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-2xl mb-5">useCallback</p>
      <div className="flex flex-col items-center mt-5 mb-20">
        <TextField
          label="何か入力してください"
          value={memorizedText}
          onChange={(event) => setMemorizedText(event.target.value)}
        />
        <button
          className="bg-black hover:bg-slate-700 text-white font-medium mt-5 py-2 px-4 rounded w-max"
          onClick={() => setMemorizedCount(memorizedCount + 1)}
        >
          Click
        </button>
      </div>
      <Box sx={{ width: 800, mb: 10 }}>
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
                src="//jsfiddle.net/Teppeichang/vhbLzsyp/embedded/js/dark/"
              ></iframe>
              <p>
                第二引数の依存配列に指定した値が更新されれば、第一引数に指定したコールバック関数が実行される
                という仕組みである。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>使い方の前に① JavaScriptの関数に関する特性を理解する</Typography>
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
            <Typography>使い方の前に② Reactにおける再レンダリングと関数呼び出しの挙動</Typography>
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
              <div className="flex flex-col my-5">
                <TextField
                  label="何か入力してください"
                  value={noMemorizedText}
                  onChange={(event) => setNoMemorizedText(event.target.value)}
                />
                <button
                  className="bg-black hover:bg-slate-700 text-white font-medium mt-2 py-2 px-8 rounded w-max"
                  onClick={() => setNoMemorizedCount(noMemorizedCount + 1)}
                >
                  Click
                </button>
              </div>
              <iframe
                title="no-usecallback"
                className="my-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/14253hsm/13/embedded/js/dark/"
              ></iframe>
              <p>
                例えば、上記のサンプルは関数 renderLog
                の引数(=フォームに入力された内容)に変更が発生すると関数 renderLog
                が呼び出されるようになっている。
              </p>
              <p className="mt-5">
                前項(JavaScriptの関数に関する特性)のサンプルコードで例えると、以下のようなイメージ↓
              </p>
              <iframe
                title="function-identity-on-react"
                className="my-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/hcpuLk39/8/embedded/js/dark/"
              ></iframe>
              <p>
                再レンダリングの度に同じ関数が呼び出されたとしても、それらはそれぞれ異なる関数として扱われる。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useCallbackの使い方</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                前項のサンプルコードはuseEffectの第二引数(依存配列)に関数 renderLog
                を渡しているので、このままでは関数 renderLog
                の引数の変更の有無に関わらず、再レンダリングの度に関数 renderLog
                が呼び出されてしまう。
              </p>
              <p>
                想定している挙動が「renderLogの引数(=フォームの内容)に変更が発生したときのみ」としているのであれば、これは予期しない関数の呼び出しということなる。
              </p>
              <p>
                この「予期しない関数の呼び出し」を防ぐために使用するフックが、useCallbackである。
              </p>
              <iframe
                title="usecallback"
                className="my-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/7wj018o3/14/embedded/js/dark/"
              ></iframe>
              <p>
                上記サンプルコードのように、useEffectの第二引数に渡している関数 renderLog に
                useCallbackを使用することで、関数の呼び出し結果がキャッシュされる。
              </p>
              <p>
                これにより、「renderLogの引数(=フォームの内容)に変更が発生したときのみ」、関数
                renderLog が呼び出されるようになる。
              </p>
              <p className="mt-5">
                さらに、memo(React.memo)と組み合わせて使うことで、
                <span className="font-bold">
                  親コンポーネント側で props
                  として渡す関数がある場合は、useCallbackを関数に使用し、memoでメモ化した子コンポーネントで
                  props として関数を受け取る
                </span>
                ことができる。
              </p>
              <p>
                memoとの組み合わせにより、「予期せぬ関数の呼び出し」に加えて「予期せぬコンポーネントの再レンダリング」も防ぐことができる。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseCallbackPage;
