const Top = () => {
  return (
    <div className="my-20 p-10 min-h-screen">
      <p className="text-2xl font-bold">これは何？🤔</p>
      <hr />
      <p className="mt-5">
        React ver16.8から実装されたReact
        Hooksのうち、組み込みのフックで使用頻度の高いものについて解説する、実例付きチュートリアルです。
      </p>
      <p className="text-2xl font-bold mt-10">チュートリアルの構成📕</p>
      <hr />
      <p className="mt-5">内容は随時アップデートしております。</p>
      <ul className="list-disc list-inside pl-2 mt-5 leading-8">
        <li>ES6解説</li>
        <ul className="list-decimal list-inside pl-2 leading-8">
          <li>let, const</li>
          <li>分割代入</li>
          <li>スプレッド構文...and more</li>
        </ul>
        <li className="mt-5">React Hooks解説</li>
        <ul className="list-decimal list-inside pl-2 leading-8">
          <li>useState</li>
          <li>useEffect</li>
          <li>useRef... and more</li>
        </ul>
        <li className="mt-5">React用語集</li>
        <li className="mt-5">参考記事</li>
      </ul>
      <p className="text-2xl font-bold mt-10">本チュートリアルの対象者🙋‍♂️</p>
      <hr />
      <ul className="list-disc list-inside pl-2 mt-5 leading-8">
        <li>Reactに興味がある方</li>
        <li>これからReactを始める方</li>
        <li>Reactを始めたばかりで、フックやReactで頻出するES6構文にまだ慣れていない方</li>
      </ul>
      <p className="text-2xl font-bold mt-10">ご注意事項⚠️</p>
      <hr />
      <ul className="list-decimal list-inside leading-8 mt-5 pl-2">
        <li>
          本チュートリアルの解説はさまざまな参考資料をもとに、作者自身の感覚でポイントを押さえたものとなっております。
        </li>
        <ul className="list-disc list-inside pl-5">
          <li>
            より詳細な情報が必要な場合はReact公式ドキュメントや技術書籍・記事等をご参照ください。
          </li>
        </ul>
        <li>
          プログラミングスクール生・関係者による盗用防止の観点から、本チュートリアルのソースコードのCloneおよびForkついては原則禁止とさせていただきます。ご了承ください。
        </li>
        <li>
          カスタムフックに関してはどこまで取り扱うか検討中です。（react-router-domやReact Hook Form、window.onloadに関するフックは解説予定）
        </li>
        <li>
          クラスコンポーネントに関しては取り扱いません。(フックのチュートリアルなので。悪しからず🙏)
        </li>
      </ul>
    </div>
  );
};

export default Top;
