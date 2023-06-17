const Top = () => {
  return (
    <div className="my-20 p-10 min-h-screen">
      <p className="text-2xl font-bold">これは何？</p>
      <hr />
      <p className="mt-5">
        React ver16.8から実装されたReact
        Hooksのうち、組み込みのフックで使用頻度の高いものについて解説する、実例付きチュートリアルです。
      </p>
      <p className="text-2xl font-bold mt-10">チュートリアルの構成</p>
      <hr />
      <p className="mt-5">内容は随時アップデートしております。</p>
      <ul className="list-disc list-inside pl-2 mt-5 leading-8">
        <li>ES6解説 + おまけ</li>
        <li className="mt-5">React Hooks解説&実例集</li>
        <li className="mt-5">React頻出用語集</li>
      </ul>
      <p className="text-2xl font-bold mt-10">本チュートリアルの対象者</p>
      <hr />
      <ul className="list-disc list-inside pl-2 mt-5 leading-8">
        <li>Reactに興味がある方</li>
        <li>これからReactを始める方</li>
        <li>Reactを始めたばかりで、フックやReactで頻出するES6構文にまだ慣れていない方</li>
      </ul>
      <p className="text-2xl font-bold mt-10">ご注意・ご留意事項</p>
      <hr />
      <ul className="list-decimal list-inside leading-8 mt-5 pl-2">
        <li>
          本チュートリアルの解説は、React公式ドキュメント等、様々な参考資料をもとに作者自身の感覚でポイントを押さえたものです。
        </li>
        <ul className="list-disc list-inside pl-5">
          <li>
            より厳密な情報が必要な場合はReact公式ドキュメントや技術書籍・記事等をご参照ください。
          </li>
        </ul>
        <li>
          当ページのソースコードのCloneおよびForkついては原則禁止とさせていただきます。ご了承ください。
        </li>
        <ul className="list-disc list-inside pl-5">
          <li>プログラミングスクール生・関係者による盗用・悪用防止のためです。</li>
          <li>作者は過去、2度に亘ってプログラミングスクール生に制作物を盗用・転職活動で使用されたことがあります。</li>
        </ul>
        <li>
          カスタムフックに関しては解説範囲を検討中です。
        </li>
        <li>
        サンプルコードは全て関数コンポーネントベースとなっております。
        </li>
      </ul>
    </div>
  );
};

export default Top;
