import { useRef } from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const UseRefPage = () => {
  const textRef = useRef(null);

  console.log(typeof textRef);
  console.log(textRef);
  console.log(textRef.current);

  const [textError, setTextError] = useState(false);

  const formValidation = () => {
    let valid = true;

    const isTextRefExists = textRef?.current;
    if (isTextRefExists) {
      const isTextValid = isTextRefExists.validity.valid;
      setTextError(!isTextValid);
      valid &&= isTextValid;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20">
      <p className="text-2xl mb-10">useRef</p>
      <div className="flex flex-col items-center mt-5 mb-20">
        <TextField
          label="Input text"
          inputRef={textRef}
          error={textError}
          helperText={textError && textRef?.current?.validationMessage}
          inputProps={{ required: true }}
        />
        <button
          className="bg-black hover:bg-slate-700 text-white font-medium mt-5 py-2 px-4 rounded w-max"
          onClick={() => formValidation()}
        >
          Check Text
        </button>
      </div>
      <Box sx={{ width: 800, mb: 10 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useRefとは？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>要素(変数の値,DOM要素内の値)への参照(=Reference)を行うことができるフック。</p>
              <p>useRefで参照した要素の値は、保持することができる。</p>
              <br />
              <p className="font-bold underline">基本的な構文</p>
              <code className="bg-slate-200 block my-5">
                <p>
                  import {"{"} useRef {"}"} from "react";
                </p>
                <br />
                <p>const hogeRef = useRef(初期値)</p>
              </code>
              <p className="font-bold underline">DOM要素内の値を参照</p>
              <code className="bg-slate-200 block my-5">
                <p>
                  import {"{"} useRef {"}"} from "react";
                </p>
                <br />
                <p>const textRef = useRef(null)</p>
                <p>
                  {"<"}TextField inputRef={"{"}textRef{"}"} ... / {">"}
                </p>
                <br />
                <p># 参照先のDOM要素の中身を出力</p>
                <p>console.log(textRef.current)</p>
                <p className="ml-5">
                  = {">"} {"<"}input required type="text" ...{">"}
                </p>
              </code>
              <p>
                useRefは、.currentプロパティが渡された引数をrefObject(上記例における、hogeRefやtextRef)へ返す。
              </p>
              <p>
                この引数の値が書き換え可能な.currentプロパティーの値であり、
                .currentプロパティ内に保持することができる。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useStateと変わらないのでは？🤔</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>値の保持ができると言う点では共通しているが、以下の点が異なる。</p>
              <ul className="list-disc list-inside pl-2 mt-5 leading-8">
                <li>useState: 保持した値を更新すると、コンポーネントが再レンダリングされる</li>
                <li>useRef: 保持した値を更新しても、<span className="font-bold underline">コンポーネントが再レンダリングされない</span></li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useStateとの棲み分け</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>「コンポーネント内で値を保持したいが、ブラウザ上に更新した内容をリアルタイムで表示させる必要がない」場合は、useRefを利用するとよい。</p>
              <p>例えば、フォームのバリデーションエラーはリアルタイムで表示させることがマストではないので、useRefでフォームの値を保持しておいて、フォーム送信時にuseRefで保持したフォームの値を検証し、バリデーションエラーを表示させる というような使い方ができる。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseRefPage;
