const LetAndConst = () => {
  return (
    <div className="my-20 px-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold mt-10">let と constとは</p>
      <hr />
      <p className="mt-5">ES6から追加されたJavaScriptの変数宣言。JavaScriptの変数宣言は3通りあり、それぞれ以下の特徴がある。</p>
      <ul className="list-disc list-inside pl-2 mt-5 leading-8">
        <li>var: 再代入・再宣言ともに可能</li>
        <li>let: 再代入可能・再宣言不可能</li>
        <li>const: 再代入・再宣言ともに不可能</li>
      </ul>
      <p className="mt-5">varはES6以前の変数宣言で、古いプロジェクトでない限りは近年は使用されることはない。<br />(余談&作者の体感だが、Google Apps Sciript関連のブログ記事などでは var による変数宣言が用いられたコードを見ることがある。これは記事作成時点でのGoogle Apps Scriptが、ES6に対応していなかったためだと思われる。)</p>
      <p className="text-2xl font-bold mt-10">varも使えるのでは? varで変数宣言してはいけないのか</p>
      <hr />
      <p className="mt-5 font-bold">結論: varによる変数宣言は非推奨</p>
      <p>varによる変数宣言には以下の問題点がある。</p>
      <ul className="list-disc list-inside pl-2 mt-5 leading-8">
        <li>再代入・再宣言ともに可能</li>
        <li>varで宣言した変数は関数スコープの変数となる</li>
      </ul>
      <p className="font-bold mt-5 underline">再代入・再宣言ともに可能</p>
      <p>一見、便利そうに思えるがこれが落とし穴で、予期しない変数の再代入や変数の二重宣言を行ってしまっても、エラーとならない。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p># letによる変数宣言</p>
          <p>let name = "山田太郎";</p>
          <p>let name = "鈴木次郎";</p>
          <p>console.log(name) ={'>'} エラー</p>
          <br />
          <p># varによる変数宣言</p>
          <p>var name = "山田太郎";</p>
          <p>var name = "鈴木次郎";</p>
          <p>console.log(name) ={'>'} 鈴木次郎</p>
        </code>
        <p className="font-bold mt-5 underline">varで宣言した変数は関数スコープ</p>
        <p>letやconstで宣言された変数はブロックスコープで、関数内の記述位置によってスコープから外れる。</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p># letによる変数宣言</p>
          <p>function hoge () {'{'}</p>
          <p className="ml-5">let name = 'John'</p>
          <p className="ml-5">console.log(name) ={'>'} John</p>
          <p className="ml-5">{'{'}</p>
          <p className="ml-10">name = 'Bob'</p>
          <p className="ml-10">console.log(name) ={'>'} Bob</p>
          <p className="ml-5">{'}'}</p>
          <p className="ml-5">console.log(name) ={'>'} John</p>
          <p>{'}'}</p>
        </code>
        <p>varで宣言された変数は関数スコープで、ある関数内で宣言した変数はその関数のどこからでも呼び出せてしまう。</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          <p># varによる変数宣言</p>
          <p>function hoge () {'{'}</p>
          <p className="ml-5">var name = 'John'</p>
          <p className="ml-5">console.log(name) ={'>'} John</p>
          <p className="ml-5">{'{'}</p>
          <p className="ml-10">name = 'Bob'</p>
          <p className="ml-10">console.log(name) ={'>'} Bob</p>
          <p className="ml-5">{'}'}</p>
          <p className="ml-5">console.log(name) ={'>'} Bob</p>
          <p>{'}'}</p>
        </code>
        <p>上記の特徴から、関数内に条件分岐やループで変数を操作する場合、varで宣言された変数だと意図しない変数の書き代わりが起こる恐れがある。</p>
    </div>
  )
}

export default LetAndConst
