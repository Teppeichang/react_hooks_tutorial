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
      <p className="mt-5 text-2xl font-bold">メモ化による効果</p>
      <hr />
      <p className="mt-5">不要な関数の再実行や、不要な再レンダリングの発生を抑えることができる。</p>
      <p>上記の効果は一般的に「パフォーマンスの最適化」と呼ばれている。</p>
      <p>
        階層構造化されたコンポーネント間をデータが行き来するというReactの特性上、不要な処理はパフォーマンスの低下につながる。
      </p>
      <p className="mt-5">
        Reactで開発する際は、いかにしてパフォーマンスを最適化するかを念頭に置く必要がある
      </p>
      <p className="mt-5 text-2xl font-bold">メモ化のための機能</p>
      <hr />
      <p className="mt-5">Reactにはメモ化を行うための3つの機能が備わっている</p>
      <ul className="list-disc list-inside mt-5 pl-2 leading-8 font-bold">
        <li>memo</li>
        <li>useCallback</li>
        <li>useMemo</li>
      </ul>
      <p className="mt-5">
        これら3つのメモ化のための機能は、メモ化を行うという点では共通しているが、メモ化の対象となる部分や効果を発揮するシチュエーションが異なるので、適切な使い分けをする必要がある。
      </p>
      <p className="mt-5 text-2xl font-bold">memo/useCallback/useMemo の違い</p>
      <hr />
      <p className="mt-5 font-bold">memo</p>
      <p className="font-bold">メモ化の対象: コンポーネント</p>
      <p className="mt-2">
        コンポーネントを定義する時に使用する機能で、コンポーネントの不要な再レンダリングを防ぐために使用する。
      </p>
      <p className="mt-5 font-bold">useCallback</p>
      <p className="font-bold">メモ化の対象: 関数</p>
      <p className="mt-2">
        親コンポーネントから子コンポーネントにpropsとして渡す関数を、不要な再レンダリングが起きないような状態にして渡したいときに使用する。
      </p>
      <iframe
        title="usecallback-syntax"
        className="my-5 h-24 w-full"
        src="//jsfiddle.net/Teppeichang/vhbLzsyp/3/embedded/js/dark/"
      ></iframe>
      <p>
        第二引数の依存配列の値の変化の有無を基準に、関数を再実行するのか・再実行しないのかを判断する。
      </p>
      <iframe
        title="usecallback-syntax-empty-array"
        className="my-5 h-24 w-full"
        src="//jsfiddle.net/Teppeichang/y8zgow6L/2/embedded/js/dark/"
      ></iframe>
      <p>
        第二引数の依存配列には空配列を指定することも可能で、第二引数に空配列を指定した場合は
        <span className="font-bold">コンポーネントの初回レンダリング時のみ</span>
        、第一引数の関数が実行される。
      </p>
      <p className="mt-5 font-bold">useMemo</p>
      <p className="font-bold">メモ化の対象: 関数の実行結果(=値)</p>
      <p className="mt-2">
        コンポーネントが再レンダリングされる際の不要な関数の再実行を防ぐために使用する。
      </p>
      <iframe
        title="usememo-syntax"
        className="my-5 h-24 w-full"
        src="//jsfiddle.net/Teppeichang/9ufv8ngs/5/embedded/js/dark"
      ></iframe>
      <p>
        第二引数の依存配列の値の変化の有無を基準に、関数を再実行したうえで値を返すのか・再実行せずキャッシュしておいた値を返すのかを判断する。
      </p>
    </div>
  );
};

export default Memorize;
