const AllowFunction = () => {
  return (
    <div className="my-20 px-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold mt-10">アロー関数とは</p>
      <hr />
      <p className="mt-5">
        ES6から追加された無名関数の記述方式で、従来の無名関数の記述で必要だった function
        の記述を、「={">"}
        」で省略することができる。この省略形の見た目が矢の様な形をしていることから、「アロー関数」と呼ばれている。俗称のようだが、正式名称である。
      </p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p># 従来の無名関数</p>
        <p>var hoge = function (a, b) {"{"}</p>
        <p className="ml-5">return a + b;</p>
        <p>{"}"}</p>
        <br />
        <p># アロー関数</p>
        <p>const hoge = (a, b) ={'>'} {"{"}</p>
        <p className="ml-5">return a + b;</p>
        <p>{"}"}</p>
      </code>
      <p className="text-2xl font-bold mt-10">アロー関数特有の挙動</p>
      <hr />
      <p className="mt-5">以下の関数は同じ動作をするが、関数内の「this」の参照先が異なっている</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>function MyClass() {'{'}</p>
        <p className="ml-5">window.setTimeout(function() {'{'} console.log(this) {'}'}, 1000);</p>
        <p className="ml-5">window.setTimeout(() ={'>'} {'{'} console.log(this) {'}'}, 1000);</p>
        <p>{'}'}</p>
        <p>new MyClass();</p>
        <p className="ml-5">= {'>'} Window(従来の関数記述)</p>
        <p className="ml-5">= {'>'} MyClass(アロー関数)</p>
      </code>
      <p>従来の関数記述におけるthisの参照先はWindowオブジェクトとなるが、アロー関数におけるthisはMyClass、つまり関数を呼び出す側を参照している。</p>
      <p className="mt-5">また、引数(arguments)の参照先も異なる。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>function hoge(a, b) {'{'}</p>
        <p className="ml-5">let func1 = function(a, b) {'{'}  console.log(arguments); {'}'}</p>
        <p className="ml-5">func1(1, 2);</p>
        <p className="ml-5">let func2 = (a, b) ={'>'} {'{'}  console.log(arguments); {'}'}</p>
        <p className="ml-5">func2(3, 4);</p>
        <p>{'}'}</p>
        <p>hoge(5, 6);</p>
        <p className="ml-5">= {'>'} [1, 2] (従来の関数記述(func_1実行結果))</p>
        <p className="ml-5">= {'>'} [5, 6] (アロー関数(func_2実行結果))</p>
      </code>
      <p>従来の関数記述における引数の参照先は「関数の引数」だが、アロー関数における引数の参照先は「関数を呼び出す側の引数」となっている。</p>
      <p className="text-2xl font-bold mt-10">アロー関数の省略形</p>
      <hr />
      <p className="mt-5">省略記述であるアロー関数を、さらに省略した形で記述することができる。<span className="font-bold underline">(ただし条件あり)</span></p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p># カッコを省略</p>
        <p># 引数が1つだけの場合に限る</p>
        <p>const hoge = value ={'>'} {"{"}</p>
        <p className="ml-5">return value;</p>
        <p>{"}"}</p>
        <br />
        <p># return記述とブラケットを省略</p>
        <p># 関数内の処理が単一行の場合に限る</p>
        <p>const hoge = (a, b) ={'>'} a + b;</p>
      </code>
    </div>
  );
};

export default AllowFunction;
