import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const UseCallbackPage = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-2xl mb-5">useCallback</p>
      <div className="flex flex-col items-center mt-5 mb-20">
        <TextField label="何か入力してください" onChange={(event) => setText(event.target.value)} />
        <button
          className="bg-black hover:bg-slate-700 text-white font-medium mt-5 py-2 px-4 rounded w-max"
          onClick={() => setCount(count + 1)}
        >
          Submit
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
                メモ化とは、関数の呼び出し結果をキャッシュ(記憶)しておき、再度同じ関数の呼び出しが発生した際に、
                <span>同じ処理を再度行うのではなく、キャッシュから関数の呼び出し結果を返す</span>
                機能である。
              </p>
              <p>
                メモ化は余計な処理を無くすことによるパフォーマンスの向上や、予期しないコンポーネントの
                <Link
                  to="/glossaries/re-render"
                  className="font-bold hover:text-sky-400 hover:underline"
                >
                  再レンダリング
                </Link>
                を防ぐことができる。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              使い方の前に① JavaScriptの関数に関する特性を理解する
            </Typography>
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
              <p>プリミティブ型(stringやnumber)の場合は、受け渡しは「値」をもとに行われるため、他の変数に代入しても同じものとして扱われる。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>使い方の前に② Reactにおける再レンダリングと関数呼び出しの挙動</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useCallbackの使い方① useEffectと組み合わせる</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useCallbackの使い方② memo(React.memo)と組み合わせる</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseCallbackPage;
