import { createContext } from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import FirstChild from "../../components/context/FirstChild";

export const AuthorContext = createContext();

const UseContextPage = () => {
  const authorProfile = {
    name: "てっぺい",
    birthDate: "1992年11月19日",
    job: "クリエイター",
    icon: "/img/author.PNG",
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20">
      <p className="text-2xl mb-5">useContext</p>
      <AuthorContext.Provider value={authorProfile}>
        <FirstChild />
      </AuthorContext.Provider>
      <Box sx={{ width: 800, mb: 10 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useContextとは？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>ReactのContext APIを利用するためのフック。</p>
              <p className="mt-5">
                Context APIは、Reactにおいて<span className="font-bold">「グローバルな状態」</span>
                を作成する機能を提供する。
              </p>
              <p>
                この「グローバルな状態」のことを
                <span className="font-bold">Context(コンテクスト)</span>
                といい、useContextを利用することで、どの階層のコンポーネントからも、Context内のデータにアクセスすることができるようになる。
              </p>
              <p>
                つまり、useContextを利用してContextにアクセスすることにより、
                <span className="font-bold">
                  「propsを介さないコンポーネント間でのデータの受け渡し」
                </span>
                を実現することができる。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>propsを介さないコンポーネント間でのデータの受け渡しとは？🤔</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                通常のコンポーネント間でのデータの受け渡し(=
                "propsを介した"コンポーネント間でのデータの受け渡し)のイメージは以下の通り↓
              </p>
              <code className="bg-slate-200 block my-5">
                <p className="mb-5">例: 親コンポーネントから子コンポーネント_3 へデータを渡す</p>
                <p>
                  {"<"}親コンポーネント{"/>"}
                </p>
                <p className="ml-4">↓</p>
                <p className="ml-4">props</p>
                <p className="ml-4">↓</p>
                <p className="ml-4">
                  {"<"}子コンポーネント1{"/>"}
                </p>
                <p className="ml-6">↓</p>
                <p className="ml-6">props</p>
                <p className="ml-6">↓</p>
                <p className="ml-6">
                  {"<"}子コンポーネント2{"/>"}
                </p>
                <p className="ml-8">↓</p>
                <p className="ml-8">props</p>
                <p className="ml-8">↓</p>
                <p className="ml-8">
                  {"<"}子コンポーネント3{"/>"}
                </p>
              </code>
              <p>
                「バケツリレー(Props drilling)」とよく言われるもので、親コンポーネントから目的の子コンポーネントまでに存在する子コンポーネントに順番に1つずつpropsを介してstateを渡していかなければならない。つまり、コンポーネントの階層が深くなればなるほど、propsに渡す引数(=
                子コンポーネントに渡すデータ)が増える。
              </p>
              <p className="mt-5">
                例えば、最下層のコンポーネントで必要なpropsに変更が生じた場合、上位のコンポーネントまで遡って修正しないといけなくなるというデメリットが生じる。このデメリットはアプリケーションの規模が大きいほど深刻なものとなる。
              </p>
              <p className="mt-5">
                では、propsを介さないコンポーネント間でのデータの受け渡しはどのような流れになるかというと・・・↓
              </p>
              <code className="bg-slate-200 block my-5">
                <p className="mb-5">例: 親コンポーネントから子コンポーネント_3 へデータを渡す</p>
                <p>
                  {"<"}親コンポーネント{"/>"}
                  <span>---Context</span>
                </p>
                <p className="ml-48">↓</p>
                <p className="ml-4">
                  {"<"}子コンポーネント1{"/>"}
                  <span className="ml-4">↓</span>
                </p>
                <p className="ml-6">
                  {"<"}子コンポーネント2{"/>"}
                  <span className="ml-2">↓</span>
                </p>
                <p className="ml-48">↓</p>
                <p className="ml-10">
                  {"<"}子コンポーネント3{"/>"}
                </p>
              </code>
              <p>
                いわゆる「バケツリレー」にはならず、親コンポーネントから目的の子コンポーネントに直接、Context(Contextオブジェクト)を介してデータを渡すことができる。
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Contextによるデータ受け渡しの仕組み</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                ページ上部に表示されている、このチュートリアルを作った中の人のプロフィール表示部分は、本ページを親コンポーネントとした以下の階層構造となっている↓
              </p>
              <code className="bg-slate-200 block my-5">
                <p>
                  {"<"}親コンポーネント(本ページ){"/>"}
                </p>
                <p className="ml-4">
                  {"<"}子コンポーネント1(この領域はContextコンポーネント1です の記述部分){"/>"}
                </p>
                <p className="ml-6">
                  {"<"}子コンポーネント2(この領域はContextコンポーネント2です の記述部分){"/>"}
                </p>
                <p className="ml-8">
                  {"<"}子コンポーネント3(この領域はContextコンポーネント3です の記述部分){"/>"}
                </p>
              </code>
              <p className="mb-5">データ元: 親コンポーネント データ受け取り先: 子コンポーネント3 という構成で、データ受け渡しの流れは以下の3ステップとなる。</p>
              <p className="font-bold">1. 親コンポーネントでContextオブジェクトを生成、Contextオブジェクトに渡すデータを定義する。</p>
              <iframe
                title="create-context-object"
                className="my-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/bwt853v7/6/embedded/js/dark/"
              ></iframe>
              <p>
                createContext
                でAuthorContextというContextオブジェクトを生成する。子コンポーネントでimportして利用するため、export
                で変数宣言している。
              </p>
              <p>
                Contextオブジェクト生成後、その中身(=Contextオブジェクトのデータ)となる
                authorProfile を定義する。
              </p>
              <p className="my-5 font-bold">2. ContextProviderにデータを渡す</p>
              <iframe
                title="create-context-provider"
                className="mb-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/7j2ghL3v/6/embedded/js/dark/"
              ></iframe>
              <p>
                ContextProviderは、Contextオブジェクトの持つデータの適用範囲を定める役割を持つ。
              </p>
              <code className="bg-slate-200 block my-5">
                <p>
                  {"<"}AuthorContext.Provider value={"{"}authorProfile{"}"}
                  {">"}
                </p>
                <p className="ml-5">
                  {"<"}FirstChild /{">"}
                </p>
                <p>
                  {"<"}/AuthorContext.Provider{">"}
                </p>
              </code>
              <p>
                サンプルコード内の上記の記述は、1.で定義したauthorProfileの適用範囲を、「FirstChild配下すべての子コンポーネントとする」というものである。
              </p>
              <p className="my-5 font-bold">
                3. useContextを使い、子コンポーネントでContextオブジェクトのデータを受け取る
              </p>
              <iframe
                title="get-context-object-data-by-usecontext"
                className="mb-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/z9hfgw3d/7/embedded/js/dark/"
              ></iframe>
              <p>
                useContextの引数に、AuthorContext(=Contextオブジェクトのデータ)を渡すことで、オブジェクトからプロパティを指定して値を取り出すよう形で、Contextオブジェクトからデータを受け取ることができる。
              </p>
              <p className="mt-5">
                上記のソースコードは3つ目の子コンポーネント。階層構造でいうと最下層のものになる。
              </p>
              <p>
                上位層にある残りのコンポーネント(子コンポーネント1と子コンポーネント2)に関しては、以下のようなコードとなっている。
              </p>
              <iframe
                title="remaining-child-components"
                className="my-5 h-96 w-full"
                src="//jsfiddle.net/Teppeichang/sg8o9k6p/3/embedded/js/dark/"
              ></iframe>
              <p>コンポーネントは階層構造になっているが、コンポーネント間でのpropsによるデータの受け渡しに関する記述が一切ないことがわかる。</p>
              <p className="mt-5">本ページの冒頭で説明した通り、Contextはグローバルな状態で、どの階層のコンポーネントからもアクセスすることができる。</p>
              <p>なので、子コンポーネント1や子コンポーネント2でuseContextを使用すれば、子コンポーネント3と同様、親コンポーネントからデータを受け取ることができる。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>便利だが注意点あり</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>ContextProvider配下のコンポーネントは、<span className="font-bold">ContextProviderのvalueプロパティの値が更新されると、配下全てのコンポーネントに再レンダリングが発生する。</span></p>
              <p className="mt-5">本ページの実例に置き換えると、親コンポーネントで定義しているauthorProfileの値が更新されれば、子コンポーネント1から子コンポーネント3まで全て再レンダリングされるということである。</p>
              <p className="mt-5">意図しない<Link to="/glossaries/re-render" className="font-bold hover:text-sky-400 hover:underline">再レンダリング</Link>を防ぐためにコンポーネントのメモ化をしたり、Contextとして使用する値は更新や変更が発生しないような、定数として定義するものにとどめるといった配慮をした方がよい。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseContextPage;
