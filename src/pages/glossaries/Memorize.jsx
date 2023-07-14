const Memorize = () => {
  return (
    <div className="my-20 p-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold">メモ化とは</p>
      <hr />
      <p className="mt-5">
        関数の呼び出し結果(=値)をキャッシュ(記憶)しておき、再度同じ関数の呼び出しが発生した際に、
        <span className="font-bold">
          同じ関数を再度実行するのではなく、キャッシュから関数の呼び出し結果を返す
        </span>
        こと。
      </p>
      <p className="text-2xl font-bold">メモ化による効果</p>
      <hr />
      <p className="mt-5">不要な関数の再実行や、再レンダリングの発生を抑えることができる。</p>
      <p></p>
    </div>
  );
};

export default Memorize;
