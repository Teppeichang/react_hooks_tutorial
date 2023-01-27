import { Link } from "react-router-dom";

const AsyncAndAwait = () => {
  return (
    <div className="my-20 p-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold">async / await とは</p>
      <hr />
      <p className="mt-5">
        <Link to="es6/promise-object" className="font-bold hover:text-sky-400 hover:underline">
          Promise
        </Link>
        と同様、非同期処理構文であるが、Promiseより簡潔に記述することができる。
      </p>
      <iframe
        title="promise-vs-async-await"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/98kmsgba/28/embedded/js/dark/"
      ></iframe>
      <p className="text-2xl font-bold">async / await の async</p>
      <hr />
      <p className="mt-5">
        非同期関数(async function)の宣言。関数の先頭に async
        を付けることで、async/awaitによる非同期関数を定義することができる。
      </p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>
          async function hoge (arguments) {"{"}...{"}"}
        </p>
        <p>
          const hoge = async (arguments) ={">"} {"{"}...{"}"}
        </p>
      </code>
      <p className="mt-5">非同期関数とは、呼び出されるとPromiseインスタンスを返す関数である。</p>
      <p>
        非同期関数は値を return
        した場合、Promiseインスタンスがreturnされた値をresolveし、.thenの処理に移行する。
      </p>
      <p>また、例外や値を throw した時は、その値をrejectし、.catchの処理に移行する。</p>
      <iframe
        title="async-func-sample"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/6aLus5bo/10/embedded/js/dark/"
      ></iframe>
      <p className="text-2xl font-bold">async / await の await</p>
      <hr />
      <p className="mt-5">
        async functionで定義された非同期関数内で、Promiseの結果(resolve or
        reject)が返されるまで、処理を待機させる演算子である。
      </p>
      <p>結果が返され次第、処理を再開する。</p>
      <iframe
        title="await-sample"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/4pLmo6qz/23/embedded/js/dark/"
      ></iframe>
      <p>上記はasync / awaitを使ったサンプルコードだが、これをPromiseで書くと以下のようになる。</p>
      <iframe
        title="await-sample-convert-by-promise"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/4wdp2ztc/4/embedded/js/dark/"
      ></iframe>
      <p>
        2つのコードを見比べてみると、async / await
        で記述したコードの方が、簡潔で直感的に見える。(感覚には個人差あり)
      </p>
      <p className="mt-5 text-2xl font-bold">async / await の活用例</p>
      <hr />
      <p className="mt-5 text-xl font-bold underline">並列処理(async / await + Promise.all)</p>
      <iframe
        title="async-await-and-promise-all-sample"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/29s6w0dp/17/embedded/js/dark/"
      ></iframe>
      <p>Promiseだけで同じ動きをするコードを書くと・・・</p>
      <iframe
        title="async-await-and-promise-all-sample-promise-only-ver"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/otu1s9a6/12/embedded/js/dark/"
      ></iframe>
      <p className="mt-5 text-xl font-bold underline">非同期処理の例外処理</p>
      <p className="mt-5">
        例外処理(try~catch)にasync/awaitを組み合わせることで、非同期処理の例外処理を行うことができる。
      </p>
      <iframe
        title="asynchronous-error-handling"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/ekmd7ao1/9/embedded/js/dark/"
      ></iframe>
      <p>こちらもPromiseで書くと・・・</p>
      <iframe
        title="asynchronous-error-handling-promise-only-ver"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/0wqdL28h/3/embedded/js/dark/"
      ></iframe>
      <p>
        サンプルコードのような、複数の値を扱ったり、例外の有無により分岐する処理はある程度コードが長くなるので、Promiseで書くよりも
        async / await で書いた方が、より簡潔で明瞭であることがわかる。
      </p>
      <p>
        しかしながら、async / await も<span className="font-bold">元はPromise</span>なので、
        <span className="font-bold">Promiseの書き方や処理の流れに関する理解は必須</span>となる。
      </p>
      <p>
        (フレームワークを使う前に、フレームワークのベースとなっている言語を理解せよ...に通ずるものがありますね。)
      </p>
    </div>
  );
};

export default AsyncAndAwait;
