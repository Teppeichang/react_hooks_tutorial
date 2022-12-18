import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const UseEffectPage = () => {
  const [yesButton, setYesButton] = useState(false);
  const [noButton, setNoButton] = useState(false);

  // useEffect(() => {
  //   Swal.fire({
  //     title: 'useEffectの解説ページです!',
  //     showConfirmButton: false,
  //   })
  // }, [])

  useEffect(() => {
    if(yesButton === true){
      Swal.fire({
        icon: 'error',
        title: 'ARE YOU FUCKING SERIOUS?',
        text: 'Press button to cool your head',
        confirmButtonText: 'Cool Down'
      })
    }
  },[yesButton])

  useEffect(() => {
    if(noButton === true){
      Swal.fire({
        icon: 'success',
        title: 'YOU ARE ALRIGHT!',
        showConfirmButton: false,
      })
    }
  },[noButton])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20">
      <p className="text-2xl mb-10">useEffect</p>
      <button className="px-10 py-2.5 font-medium text-center bg-white border border-black rounded-lg">
          <span className="ml-2 w-4 h-4 font-semibold">TECH CAMP is the best programming school ever.</span>
      </button>
      <div className="mt-5 mb-20">
        <button
          type="button"
          className="text-white bg-black font-medium rounded-lg px-10 py-2.5 text-center mr-10"
          onClick={()=>setYesButton(true)}
        >
          YES
        </button>
        <button
          type="button"
          className="text-black bg-slate-200 font-medium rounded-lg px-10 py-2.5 text-center ml-10"
          onClick={()=>setNoButton(true)}
        >
          NO
        </button>
      </div>
      <Box sx={{width: 800, mb: 10}}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>いきなりフラッシュメッセージが出たけど、何が起こっているのか？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              useEffectを用いて、コンポーネントの初回レンダリング時のみフラッシュメッセージを表示させる様にしている。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              useEffectとは？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="font-bold">結論: コンポーネントの副作用を制御・実行するフック。</p>
              <br />
              <p>フラッシュメッセージの挙動を再現するコードは下記の通り</p>
              <code className="bg-slate-200 block my-5">
                <p>※フラッシュメッセージにはSweetalert2というライブラリを用いています。JS組み込みのalertでもOK。</p>
                <br />
                <p>import {"{"} useEffect {"}"} from "react";</p>
                <p>import Swal from "sweetalert2";</p>
                <br />
                <p>useEffect(() ={'>'} {'{'}</p>
                  <p className="ml-5">Swal.fire({'{'}</p>
                  <p className="ml-10">title: 'useEffectの解説ページです!',</p>
                  <p className="ml-10">showConfirmButton: false,</p>
                  <p className="ml-5">{'}'})</p>
                <p>{'}'}, [])</p>
              </code>
              <p>「コンポーネントの副作用」とuseEffectの詳しい役割については後ほど解説するが、一旦は<span className="font-bold">「ある値が変わった時に限り、ある処理を実行するフック」</span>と言う理解でOK。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>「コンポーネントの副作用」とは？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="font-bold">コンポーネントのレンダリングとは直接関係のない処理のことである。</p>
              <p>以下、副作用に該当する例↓</p>
              <code className="bg-slate-200 block my-5">
                <p className="ml-5">・ DOMを手動で変更</p>
                <p className="ml-5">・ ログを出力</p>
                <p className="ml-5">・ タイマーのセット</p>
                <p className="ml-5">・ データの取得</p>
              </code>
              <p>Reactでは、副作用の適切な管理が重要とされている。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>副作用を管理できないと何が起きる？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>副作用による処理をuseEffectを使用せずにそのままコンポーネント内で実行すると、処理の中で参照しているDOMが描き変わってしまったり、stateの更新をする処理であれば「state更新→レンダリング→state更新・・・」の無限ループに陥る可能性がある。
              </p>
              <p>useEffectを使用することで、副作用による処理を「propsやstateが更新され、再レンダリングが終わった後に処理が実行される」ようになる。</p>
              <p>useEffectの仕組みは以下の通りである</p>
              <code className="bg-slate-200 block my-5">
                <p>import {"{"} useEffect {"}"} from "react";</p>
                <br />
                <p>useEffect(() ={'>'} {'{'}</p>
                  <p className="ml-5"></p>
                <p>{'}'}, [])</p>
              </code>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  )
}

export default UseEffectPage
