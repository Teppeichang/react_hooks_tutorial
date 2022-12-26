import React from 'react'

const References = () => {
  return (
    <div className='my-20 p-10 min-h-screen'>
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
            分割代入はどこが便利なのか - けーちゃんのプログラム開発ノート(運営: 金澤忍 様)
          </a>
        </li>
        <li>
          <a href="https://qiita.com/cheez921/items/f3ff76865f943345107c" className="text-decoration: underline">
            【React】useEffectの基本的な使い方・活用術・注意点 - Qiita(cheez921 様)
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
          <a href="https://ja.reactjs.org/docs/hooks-state.html" className="text-decoration: underline">
            ステートフックの利用法 - React公式ドキュメント
          </a>
        </li>
      </ul>
    </div>
  )
}

export default References
