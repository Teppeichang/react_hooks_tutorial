const Top = () => {
  return (
    <div className="mt-5 p-10">
      <p className="text-2xl font-bold">React Hooks Tutorialへようこそ</p>
      <hr />
      <p className="mt-2">
        本チュートリアルでは、React ver16.8から実装されたReact
        Hooksのうち、組み込みの7種類のフックについて実例を用いて解説を行います。
      </p>
      <p className="text-2xl font-bold mt-10">ご注意事項</p>
      <hr />
      <ul className="list-decimal list-inside leading-8 mt-2 pl-2">
        <li>
          本チュートリアルの解説はさまざまな参考資料をもとに、作者自身の感覚でポイントを押さえたものとなっております。
        </li>
        <ul className="list-disc list-inside pl-5">
          <li>
            より詳細な情報が必要な場合はReact公式ドキュメントや技術書籍・記事等をご参照ください。
          </li>
        </ul>
        <li>
          プログラミングスクール生やその関係者による盗作防止の観点から、本チュートリアルのソースコードについては原則非公開とさせていただきます。ご了承ください。
        </li>
        <ul className="list-disc list-inside pl-5">
          <li>作者は二度の盗作（一度は未遂）を経験しています。</li>
        </ul>
        <li>
          カスタムフックに関する解説については検討中です。（ユーザー定義フックということで、触れ出すとキリがないので。）
        </li>
      </ul>
      <p className="text-2xl font-bold mt-10">
        本チュートリアル作成にあたって参考にさせていただいたページ等
      </p>
      <hr />
      <ul className="list-disc list-inside mt-2 pl-2 leading-8">
        <li>
          <a href="https://www.youtube.com/watch?v=uuAdVs7sbAs&t=208s" className="text-decoration: underline">
            【React Hooks入門】完全初心者OK！8種類のHooksを学んでReactの理解を深めよう -
            YouTubeチャンネル: プログラミングチュートリアル 様
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
  );
};

export default Top;
