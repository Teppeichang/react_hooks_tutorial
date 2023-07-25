import { useState, useMemo } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const UseMemoPage = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const iterator = (count) => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return count * 2;
  };

  const doubledCount = useMemo(() => iterator(count2), [count2]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20">
      <p className="text-2xl mb-5">useMemo</p>
      <div className="flex flex-col justify-center items-center mt-5 mb-10">
        <div className="flex flex-col font-medium text-center">
          <div className="flex items-center mt-2">
            <p className="font-semibold">Count1: {count1}</p>
            <button
              type="button"
              className="text-white bg-black font-medium text-center ml-10 px-2"
              onClick={() => setCount1(count1 + 1)}
            >
              ＋
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex flex-col">
              <div className="flex">
                <p className="font-semibold">Count2: {count2}</p>
              </div>
              <div className="flex">
                <p className="font-semibold">Doubled Count: {doubledCount}</p>
                <button
                  type="button"
                  className="text-white bg-black font-medium text-center ml-5 px-2"
                  onClick={() => setCount2(count2 + 1)}
                >
                  ＋
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>※本ページの表示が他ページと比べて遅いのは仕様です。</p>
      <div className="flex flex-col items-center mt-5 mb-20"></div>
      <Box sx={{ width: 800, mb: 10 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useMemoとは？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>メモ化された「値」を返すフック。値とは「関数の実行結果」のこと。</p>
              <p>useMemoを使用することで、関数の実行結果がキャッシュされる。</p>
              <p className="mt-5">
                例えば、実行結果が一貫して同じ値を返すような関数にuseMemoを使用すれば、再レンダリングに伴う関数の再実行をスキップできるので、パフォーマンスの向上につながる。
              </p>
              <iframe
                title="usememo-syntax"
                className="my-5 h-24 w-full"
                src="//jsfiddle.net/Teppeichang/9ufv8ngs/5/embedded/js/dark"
              ></iframe>
              <p>
                第二引数の依存配列に指定した値が更新されれば、第一引数に指定した関数が再実行される
                という仕組みである。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useMemoが効果を発揮するシチュエーション</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                「一貫して同じ値を返すような関数」「複雑な処理・重い処理をする関数」を有するコンポーネントに対して有効。
              </p>
              <iframe
                title="usememo-sample"
                className="my-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/n7mfragz/16/embedded/js/dark/"
              ></iframe>
              <p>
                本ページ上部のサンプルは、count1・count2という2つのstateがあり、それぞれがボタンクリックにより1ずつ値が加算されていく形になっている。
              </p>
              <p>
                加えて、Count2に2を掛けた値を返す「useMemoでメモ化した処理の重い関数」を含んでいる。
              </p>
              <p className="mt-5">
                本ページのサンプルをuseMemoでメモ化せずに実装した場合は、関数実行の基準となる値がキャッシュされていないため、
                <span className="font-bold">
                  count1を更新する際も「処理の重い関数」と同じ処理時間
                </span>
                がかかってしまう。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>コンポーネント内に関数があればとりあえずuseMemoを使えば良い？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="font-bold">結論はNO</p>
              <p>useMemoの実行自体にも処理時間は発生しているためである。</p>
              <p className="mt-5">
                useMemoは、第二引数の依存配列に渡されている値が変わっているか否かを判断したうえで、関数を実行するか否かを判定する処理を行う。
              </p>
              <p>
                処理の重くない関数に対してuseMemoを使ってしまうと、判定処理の方に時間がかかってしまい、逆にパフォーマンスが低下する恐れがある。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseMemoPage;
