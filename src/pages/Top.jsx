const Top = () => {
  return (
    <div className="my-20 p-10 min-h-screen">
      <p className="text-2xl font-bold">React Hooks Tutorialへようこそ</p>
      <hr />
      <p className="mt-5">
        本チュートリアルでは、React ver16.8から実装されたReact
        Hooksのうち、組み込みのフックで使用頻度の高いものについて実例を用いて解説を行います。
      </p>
      <p className="text-2xl font-bold mt-10">ご注意事項</p>
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
          カスタムフックに関する解説については検討中です。（react-router-domやReact Hook Form、window.onloadに関するフックは解説予定）
        </li>
      </ul>
    </div>
  );
};

export default Top;
