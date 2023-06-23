import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const UseMemoPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-2xl mb-5">useMemo</p>
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
              <p>
                例えば、実行結果が一貫して同じ値を返すような関数にuseMemoを使用すれば、再レンダリングに伴う関数の再実行をスキップできるので、パフォーマンスの向上につながる。
              </p>
              <iframe
                title="usememo-syntax"
                className="my-5 h-24 w-full"
                src="//jsfiddle.net/Teppeichang/9ufv8ngs/1/embedded/js/dark/"
              ></iframe>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useCallbackとの違い</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>useMemo: メモ化された「値」を返すフック</p>
              <p>useCallback: メモ化された「コールバック関数」を返すフック</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useMemoが効果を発揮するシチュエーション</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useCallbackとの使い分け</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseMemoPage;
