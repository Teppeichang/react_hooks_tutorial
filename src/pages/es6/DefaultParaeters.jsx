const DefaultParaeters = () => {
  return (
    <div className="my-20 px-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold mt-10">関数の引数にデフォルト値を指定する</p>
      <hr />
      <p className="mt-5">ES6から、関数の引数にデフォルト値を指定することができるようになった。</p>
      <p>関数呼び出し時の引数を称略した場合、指定されたデフォルト値が使用される。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>function hoge (a, b = 0, c = 0) {"{"}</p>
        <p className="ml-5">console.log(a + b + c);</p>
        <p>{"}"}</p>
        <br />
        <p>hoge(1);</p>
        <p className="ml-5">={">"} 1</p>
      </code>
      <p>
        上記の例の場合、関数側の引数 a には関数呼び出し側で指定した引数 1 が渡るが、残りの b, c
        に渡る分の引数が省略されているため、関数側の引数のデフォルト値 0
        となる。よって、関数実行結果が 1 となるものである。
      </p>
      <p className="text-2xl font-bold mt-10">関数の引数にデフォルト値を指定しない場合</p>
      <hr />
      <p className="mt-5">値が渡らない引数は undefined となる。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>function hoge (a, b, c) {"{"}</p>
        <p className="ml-5">console.log(a + b + c);</p>
        <p>{"}"}</p>
        <br />
        <p>hoge(1);</p>
        <p className="ml-5">={">"} NaN</p>
      </code>
      <p>前項のサンプルコードの引数からデフォルト値を取り除いて、同じ呼び出し方をした際の実行結果は NaN となる。</p>
      <p>これは、1 + undefined + undefined が関数内で実行され、その実行結果が NaN となるためである。</p>
    </div>
  );
};

export default DefaultParaeters;
