const SpreadSyntax = () => {
  return (
    <div>
      <div className="my-20 p-10 flex flex-col min-h-screen">
        <p className="text-2xl font-bold">スプレッド構文とは</p>
        <hr />
        <p className="mt-5">
          配列の要素を展開したり、オブジェクトのキーと値の組を展開したりすることができる構文。
        </p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p>const fruitList = ['バナナ', 'りんご', 'みかん'];</p>
          <p>console.log(...fruitList) ={">"} バナナ, りんご, みかん</p>
        </code>
        <p>
          上記は配列に対してスプレッド構文を使用した例だが、
          <span className="font-bold">...fruitList</span> と記述することで、配列fruitListの要素が
          <span className="font-bold">順番に展開</span>されていることがわかる。
        </p>
        <p className="mt-5">
          また、配列の要素を順番に展開してくれる特性から、複数の引数を関数に渡す際の記述を簡潔に行うことができる。
        </p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p>const fruitList = ['バナナ', 'りんご', 'みかん'];</p>
          <p>
            const getFruits = (fruit_1, fruit_2, fruit_3) ={">"} {"{"}
          </p>
          <p className="ml-5">
            console.log(`${"{"}fruit_1{"}"}, ${"{"}fruit_2{"}"}, ${"{"}fruit_3{"}"}`)
          </p>
          <p>{"}"}</p>
          <br />
          <p># スプレッド構文で引数を渡す</p>
          <p>getFruits(...fruitList) ={">"} バナナ, りんご, みかん</p>
          <p># Notスプレッド構文</p>
          <p>getFruits(fruitList[0], fruitList[1], fruitList[2]) ={">"} バナナ, りんご, みかん</p>
        </code>
        <p className="text-2xl font-bold mt-10">要素の展開以外にできること</p>
        <hr />
        <p className="mt-5">要素をまとめる</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p># 分割代入時に要素をまとめる</p>
          <p>const fruitList = ['バナナ', 'りんご', 'みかん', 'いちご', 'ぶどう'];</p>
          <p>const [fruit_1, fruit_2, ...restFruits] = fruitList;</p>
          <br />
          <p>console.log(fruit_1) ={">"} バナナ</p>
          <p>console.log(fruit_2) ={">"} りんご</p>
          <p>console.log(restFruits) ={">"} ['みかん', 'いちご', 'ぶどう']</p>
        </code>
        <p className="mt-5">要素のコピー・結合</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p># 要素をコピーする</p>
          <p>const fruitList_1 = ['バナナ', 'りんご'];</p>
          <p>const fruitList_2 = ['みかん', 'いちご'];</p>
          <p>const fruitList_3 = [...fruitList_1];</p>
          <br />
          <p>console.log(fruitList_1) ={">"} ['バナナ', 'りんご']</p>
          <p>console.log(fruitList_3) ={">"} ['バナナ', 'りんご']</p>
        </code>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p># 要素を結合する</p>
          <p>const fruitList_1 = ['バナナ', 'りんご'];</p>
          <p>const fruitList_2 = ['みかん', 'いちご'];</p>
          <p>const fruitList_3 = [...fruitList_1, ...fruitList_2];</p>
          <br />
          <p>console.log(fruitList_3) ={">"} ['バナナ', 'りんご', 'みかん', 'いちご']</p>
        </code>
        <p className="mt-5">引数を配列形式・可変長で受け取る</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p>function getFruits(...fruits) {'{'}</p>
          <p className="ml-5">console.log(fruits)</p>
          <p className="ml-5">console.log(fruits[0])</p>
          <p>{'}'}</p>
          <p>getFruits('バナナ', 'りんご', 'みかん', 'いちご', 'ぶどう');</p>
          <p>={">"} ['バナナ', 'りんご', 'みかん', 'いちご', 'ぶどう']</p>
          <p>={">"} バナナ</p>
        </code>
        <p className="text-2xl font-bold mt-10">注意! 配列のコピーに関する挙動の違い</p>
        <hr />
        <p className="mt-5">配列の要素のコピーはスプレッド構文でなくとも、以下の方法でコピーができる。</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p>const fruitList_1 = ['バナナ', 'りんご'];</p>
          <p>const fruitList_2 = fruitList_1;</p>
          <br />
          <p>console.log(fruitList_2) ={">"} ['バナナ', 'りんご']</p>
        </code>
        <p>コピーはされるのだが、注意すべきは<span className="font-bold">「参照値もまとめてコピーされる」</span>ところにある。</p>
        <p><span className="font-bold">「参照値」</span>とは変数を実際に格納している場所で、要するに<span className="font-bold">コピー元の値</span>のことである。</p>
        <p className="mt-5">上記サンプルコードにてfruitList_1をコピーした配列fruitList_2に値を加えてみると・・・</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p>const fruitList_1 = ['バナナ', 'りんご'];</p>
          <p>const fruitList_2 = fruitList_1;</p>
          <p>fruitList_2[2] = 'みかん';</p>
          <br />
          <p>console.log(fruitList_1) ={">"} ["バナナ", "りんご", "みかん"]</p>
          <p>console.log(fruitList_2) ={">"} ["バナナ", "りんご", "みかん"]</p>
        </code>
        <p>fruitList_2のコピー元である、fruitList_1の値も変わってしまっている。</p>
        <p>このような挙動をするのは、「参照値もまとめてコピーされている」ためである。</p>
        <p className="mt-5">ではスプレッド構文は = でコピーする方法と何が違うのかと言うと、<span className="font-bold">「全く新しい配列を生成する」</span>、つまり<span className="font-bold">参照値はコピーされない</span>ところにある。</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p>const fruitList_1 = ['バナナ', 'りんご'];</p>
          <p>const fruitList_2 = [...fruitList_1];</p>
          <p>fruitList_2[2] = 'みかん';</p>
          <br />
          <p>console.log(fruitList_1) ={">"} ["バナナ", "りんご"]</p>
          <p>console.log(fruitList_2) ={">"} ["バナナ", "りんご", "みかん"]</p>
        </code>
        <p>Reactにおいてスプレッド構文が使用されるのは「全く新しい配列を生成する」挙動が、Reactの<span className="font-bold">「stateの変化に応じてコンポーネントをレンダリングする(=再レンダリング)」</span>という特性に必要とされているからである。React側が再レンダリングを行うには<span className="font-bold">「値が変わった→これは全く新しい値である」</span>と言う判別が出来ないといけない。</p>
      </div>
    </div>
  );
};

export default SpreadSyntax;
