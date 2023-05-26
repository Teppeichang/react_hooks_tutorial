import{ createContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import Context_1  from "../../components/context/Context_1";

export const AuthorContext = createContext();

const UseContextPage = () => {
  const authorProfile = {
    name: "てっぺい",
    birthDate: "1992年11月19日",
    job: "クリエイター",
    icon: "/img/author.PNG"
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20">
      <p className="text-2xl mb-5">useContext</p>
      <AuthorContext.Provider value={authorProfile}>
        <Context_1 />
      </AuthorContext.Provider>
      <Box sx={{ width: 800, mb: 10 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useContextとは？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>ReactのContext APIを利用するためのフック。</p>
              <p className="mt-5">Context APIは、Reactにおいて<span className="font-bold">「グローバルな状態(= state)」</span>を作成する機能を提供する。</p>
              <p>この「グローバルな状態」のことを<span className="font-bold">Context(コンテクスト)</span>といい、useContextを利用することで、どの階層のコンポーネントからも、Context内のデータにアクセスすることができるようになる。</p>
              <p>つまり、useContextを利用してContextにアクセスすることにより、<span className="font-bold">「propsを介さないコンポーネント間でのstateの受け渡し」</span>を実現することができる。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>propsを介さないコンポーネント間でのstateの受け渡しとは？🤔</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>通常のコンポーネント間でのstateの受け渡し(= "propsを介した"コンポーネント間でのstateの受け渡し)のイメージは以下の通り↓</p>
              <code className="bg-slate-200 block my-5">
                <p className="mb-5">例: 親コンポーネントから子コンポーネント_3 へstateを渡す</p>
                <p>{"<"}親コンポーネント{"/>"}</p>
                <p className="ml-4">↓</p>
                <p className="ml-4">props</p>
                <p className="ml-4">↓</p>
                <p className="ml-4">{"<"}子コンポーネント_1{"/>"}</p>
                <p className="ml-6">↓</p>
                <p className="ml-6">props</p>
                <p className="ml-6">↓</p>
                <p className="ml-6">{"<"}子コンポーネント_2{"/>"}</p>
                <p className="ml-8">↓</p>
                <p className="ml-8">props</p>
                <p className="ml-8">↓</p>
                <p className="ml-8">{"<"}子コンポーネント_3{"/>"}</p>
              </code>
              <p>「バケツリレー」とよく言われるもので、親コンポーネントから目的の子コンポーネントまでに存在する子コンポーネントに順番に1つずつpropsを介してstateを渡していかなければならない。つまり、コンポーネントの階層が深くなればなるほど、propsに渡す引数(= コンポーネントのstate)が増える。</p>
              <p className="mt-5">例えば、最下層のコンポーネントで必要なpropsに変更が生じた場合、上位のコンポーネントも併せて修正しないといけなくなるというデメリットが生じる。このデメリットはアプリケーションの規模が大きいほど深刻なものとなる。</p>
              <p className="mt-5">では、propsを介さないコンポーネント間でのstateの受け渡しはどのような流れになるかというと・・・↓</p>
              <code className="bg-slate-200 block my-5">
                <p className="mb-5">例: 親コンポーネントから子コンポーネント_3 へstateを渡す</p>
                <p>{"<"}親コンポーネント{"/>"}<span>---Context</span></p>
                <p className="ml-48">↓</p>
                <p className="ml-4">{"<"}子コンポーネント_1{"/>"}<span className="ml-4">↓</span></p>
                <p className="ml-6">{"<"}子コンポーネント_2{"/>"}<span className="ml-2">↓</span></p>
                <p className="ml-48">↓</p>
                <p className="ml-10">{"<"}子コンポーネント_3{"/>"}</p>
              </code>
              <p>いわゆる「バケツリレー」にはならず、親コンポーネントから目的の子コンポーネントに直接、Contextを介してstateを渡すことができる。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Contextによるstate受け渡しの仕組み</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p></p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>メリットと注意点</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p></p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseContextPage;
