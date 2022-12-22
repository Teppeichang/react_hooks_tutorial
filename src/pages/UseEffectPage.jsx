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
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   Swal.fire({
  //     title: 'useEffectの解説ページです!',
  //     showConfirmButton: false,
  //   })
  // }, [])

  useEffect(() => {
    if(count === 10){
      Swal.fire({
        icon: 'info',
        title: 'カウントが10になりました',
      })
    }
  },[count])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20">
      <p className="text-2xl mb-10">useEffect</p>
      <div className="mt-5 mb-20">
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
              <code className="bg-slate-200 block my-5">
                <p>import {"{"} useEffect {"}"} from "react";</p>
                <br />
                <p>useEffect(() ={'>'} {'{'}</p>
                  <p className="ml-5">実行する関数</p>
                <p>{'}'}, [依存する値])</p>
              </code>
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
              <br />
              <p>useEffectを使用することで、副作用による処理を「propsやstateが更新され、再レンダリングが終わった後に処理が実行される」ようにしたり、「コンポーネント初回レンダリング時のみ処理が実行される」ようにすることができる。</p>
              <br />
              <p>また、Reactのコンポーネントはレンダリングを何度も繰り返している。stateの数が増えてくるとその分コンポーネントのレンダリングの回数が増えてくる。</p>
              <p>「毎回全てのコンポーネントをレンダリングしているとページのパフォーマンスが悪くなるから、特定のコンポーネントは特定の条件を満たした時にレンダリングさせたい」時にもuseEffectによる副作用の管理で、意図しないタイミングでのレンダリングを防ぐこともできる。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>このページにおけるuseEffectの活用例</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="font-bold mb-5 underline">ページ訪問時のフラッシュメッセージ</p>
              <p>useEffectの第二引数(依存する値)に空配列を渡すことで、ページ訪問時(=コンポーネント初回レンダリング時)のみ第一引数に渡している関数が実行される。</p>
              <code className="bg-slate-200 block my-5">
                <p>import {"{"} useEffect {"}"} from "react";</p>
                <br />
                <p>useEffect(() ={'>'} {'{'}</p>
                <p className="ml-5">Swal.fire({'{'}</p>
                <p className="ml-5">title: 'useEffectの解説ページです!',</p>
                <p className="ml-5">showConfirmButton: false,</p>
                <p className="ml-5">{'}'})</p>
                <p>{'}'}, [])</p>
              </code>
              <br />
              <p className="font-bold mb-5 underline">カウントが10になった際にフラッシュメッセージを表示する</p>
              <p>第二引数に値を渡すことで、値に何か変化があった際に第一引数に渡している関数を実行することができる。(=stateの監視ができる)</p>
              <code className="bg-slate-200 block my-5">
                <p>import {"{"} useEffect {"}"} from "react";</p>
                <br />
                <p>useEffect(() ={'>'} {'{'}</p>
                <p className="ml-5">if(count === 10){'{'}</p>
                <p className="ml-10">Swal.fire({'{'}</p>
                <p className="ml-10">icon: 'info',</p>
                <p className="ml-10">title: 'カウントが10になりました',</p>
                <p className="ml-5">{'}'})</p>
                <p>{'}'}, [count])</p>
              </code>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useEffect使用時の注意</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="font-bold mb-5 underline">無限ループ</p>
              <p>useEffect内でstateを更新すると起こる。useEffectはstateが更新されたら実行されるようになっているので、「state更新→useEffect実行→state更新→useEffect実行・・・」の無限ループが発生する。useEffectの中でstateの更新は行わないこと。</p>
              <code className="bg-slate-200 block my-5">
                <p>useEffect(() ={'>'} {'{'}</p>
                <p className="ml-5">setCount(count + 1)</p>
                <p>{'}'}, [count])</p>
              </code>
              <p className="font-bold mb-5 underline">addEventListenerの無限ループ</p>
              <p>useEffect内でaddEventListenerを実行すると起こる。クリーンアップの処理(=addEventListenerを削除する処理)を記述することで避けることができる。</p>
              <code className="bg-slate-200 block my-5">
                <p>useEffect(() ={'>'} {'{'}</p>
                <p className="ml-5">window.addEventListener('resize', handleResize);</p>
                <p className="ml-5"># クリーンアップ処理</p>
                <p className="ml-5">return (</p>
                <p className="ml-5">window.removeEventListener('resize', handleResize);</p>
                <p className="ml-5">)</p>
                <p>{'}'}, [handleResize])</p>
              </code>
              <p>クリーンアップ処理はuseEffectに機能として備わっており、不要な動作が行われることや、メモリリークを防ぐことができる。</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  )
}

export default UseEffectPage
