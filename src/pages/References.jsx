import React from 'react'

const References = () => {
  return (
    <div className='my-20 px-10 flex flex-col min-h-screen'>
      <p className="text-2xl font-bold mt-10">
        本チュートリアル作成にあたって参考にさせていただいた記事
      </p>
      <hr />
      <ul className="list-disc list-inside mt-5 pl-2 leading-8">
        <li>
          <a href="https://www.youtube.com/watch?v=uuAdVs7sbAs&t=208s" className="text-decoration: underline">
            【React Hooks入門】完全初心者OK！8種類のHooksを学んでReactの理解を深めよう -
            YouTubeチャンネル: プログラミングチュートリアル 様
          </a>
        </li>
        <li>
          <a href="https://www.tohoho-web.com/js/what.htm" className="text-decoration: underline">
            JavaScriptって何? - とほほのJavaScriptリファレンス
          </a>
        </li>
        <li>
          <a href="https://note.affi-sapo-sv.com/js-split-assignment.php#title4" className="text-decoration: underline">
            分割代入はどこが便利なのか - (けーちゃんのプログラム開発ノート 様)
          </a>
        </li>
        <li>
          <a href="https://qiita.com/cheez921/items/f3ff76865f943345107c" className="text-decoration: underline">
            【React】useEffectの基本的な使い方・活用術・注意点 - Qiita(cheez921 様)
          </a>
        </li>
        <li>
          <a href="https://reffect.co.jp/react/react-hook-useref#useStateuseRef" className="text-decoration: underline">
            初心者にもわかるReact HookのuseRefの使い方(アールエフェクト 様)
          </a>
        </li>
        <li>
          <a href="https://qiita.com/seira/items/0e6a2d835f1afb50544d#useref%E3%81%A8usestate%E3%82%92%E3%81%8F%E3%82%89%E3%81%B9%E3%81%A6%E3%81%BF%E3%82%8B" className="text-decoration: underline">
          React hooksを基礎から理解する (useRef編) - Qiita(seira 様)
          </a>
        </li>
        <li>
          <a href="https://qiita.com/soarflat/items/b251caf9cb59b72beb9b" className="text-decoration: underline">
            ES2015(ES6) 入門 - Qiita(soarflat 様)
          </a>
        </li>
        <li>
          <a href="https://dimzakki.com/javascript-var/" className="text-decoration: underline">
          変数varは使わない方が良い理由(Dim雑記 様)
          </a>
        </li>
        <li>
          <a href="https://ja.reactjs.org/docs/hooks-intro.html#motivation" className="text-decoration: underline">
            フックの導入 - React公式ドキュメント
          </a>
        </li>
        <li>
          <a href="https://ja.reactjs.org/docs/hooks-overview.html" className="text-decoration: underline">
            フック早わかり - React公式ドキュメント
          </a>
        </li>
        <li>
          <a href="https://ja.reactjs.org/docs/hooks-reference.html" className="text-decoration: underline">
            フックAPIリファレンス - React公式ドキュメント
          </a>
        </li>
        <li>
          <a href="https://ja.reactjs.org/docs/hooks-state.html" className="text-decoration: underline">
            ステートフックの利用法 - React公式ドキュメント
          </a>
        </li>
      </ul>
    </div>
  )
}

export default References
