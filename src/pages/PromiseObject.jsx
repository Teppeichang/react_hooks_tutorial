import { Link } from "react-router-dom";

const PromiseAndAsyncAwait = () => {
  return (
    <div className="my-20 p-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold">Promiseとは</p>
      <hr />
      <p className="mt-5">JavaScriptの処理実行をハンドリングするもの。</p>
      <p>
        Promiseを使ってJavaScriptの処理を実行することで、処理を待機したり、処理の実行結果によって次に控えている処理を実行することができる。
      </p>
      <p className="text-2xl font-bold mt-10">Promiseの有無による挙動の違い</p>
      <hr />
      <p className="mt-5">Promiseなし</p>
      <iframe
        title="without-promise-code"
        className="my-5 h-52"
        src="//jsfiddle.net/Teppeichang/jyLbtu8a/10/embedded/js/dark/"
      ></iframe>
      <p>Promiseあり(コードの解説は後述)</p>
      <iframe
        title="promise-code"
        className="my-5 h-64"
        src="//jsfiddle.net/Teppeichang/5e0narqd/5/embedded/js/dark/"
      ></iframe>
      <p>それぞれのコードの実行結果は下記の通り</p>
      <code className="bg-slate-200 block my-5 p-5">
        <p># Promiseなし</p>
        <p>先頭に並んでいる人</p>
        <p className="text-red-600">3番目に並んでいる人</p>
        <p>2番目に並んでいる人</p>
        <br />
        <p># Promiseあり</p>
        <p>先頭に並んでいる人</p>
        <p>2番目に並んでいる人</p>
        <p>3番目に並んでいる人</p>
      </code>
      <p>
        実行結果から分かるように、Promise無しの場合、「2番目に実行されるであろうsetTimeout」よりも先に、「3番目に控えているconsole.log」が実行されている。
      </p>
      <p className="text-2xl font-bold mt-10">Promiseなしで処理を実行 = 順番通りにならない？</p>
      <hr />
      <p className="mt-5 font-bold">結論: JavaScriptは先に実行できる処理から実行する</p>
      <p className="mt-5">
        2番目に書かれているsetTimeoutの処理は1秒後に実行されるもの。1秒待ってからsetTimeout内の処理が実行され、その後次の処理が実行される・・・というのが自然な流れではあるが、JavaScriptは良くも悪くも
        <span className="font-bold">「1秒待つ間に先にできる処理はやっておこう」</span>
        という動きをする仕様の言語である。
      </p>
      <p>
        なので、実行結果だけ見ると処理の順番が逆転してしまっている様に見えるが、実はそうではなく、
        <span className="font-bold">JavaScriptからすれば順番通りの処理</span>である。
      </p>
      <p className="mt-5">では、いわゆる「順番通り」の処理をした場合はどうすれば良いか。</p>
      <p className="mt-5">そこで Promise の出番である</p>
      <p className="text-2xl font-bold mt-10">Promiseで処理の順序が決められる流れ</p>
      <hr />
      <iframe
        title="promise-code"
        className="my-5 h-64"
        src="//jsfiddle.net/Teppeichang/5e0narqd/5/embedded/js/dark/"
      ></iframe>
      <p>
        Promiseの有無による挙動の違い
        で登場したこちらのサンプルコードをなぞる形で、Promiseで処理の順序が決められる仕組みを解説していく。
      </p>
      <p className="mt-5 text-xl font-bold underline">
        new Promise()で、Promiseオブジェクトのインスタンス(以下、Promiseインスタンス)を生成する
      </p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>
          const promise = new Promise((resolve) = {">"} {"{"}
          {"}"});
        </p>
        <p>もしくは</p>
        <p>
          const promise = new Promise((resolve, reject) = {">"} {"{"}
          {"}"});
        </p>
        <p># 第二引数の reject は任意でOK</p>
      </code>
      <p>console.logで中身を確認すると、Promiseインスタンスが生成されていることが確認できる。</p>
      <img src="../img/promise_sample_1.png" alt="console.log実行結果" />
      <p className="mt-5 text-xl font-bold underline">Promiseインスタンスの状態</p>
      <p className="mt-5">
        生成されたPromiseインスタンスの中身にある [[PromiseState]]
        がPromiseインスタンスの状態を表すもの。
      </p>
      <p>Promiseインスタンスの状態は、以下の3つに分けられている。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p># [[PromiseState]]一覧</p>
        <p className="mt-5 font-bold underline">pending</p>
        <p>
          →処理が終わるのを待っている状態で、new
          Promise()で生成されるPromiseインスタンスはこのステータスとなる。
        </p>
        <p className="mt-5 font-bold underline">fulfilled</p>
        <p>→処理が成功(= resolveが呼び出される)、もしくは処理が完了。</p>
        <p className="mt-5 font-bold underline">rejected</p>
        <p>→処理に失敗(= rejectが呼び出される)。</p>
      </code>
      <iframe
        title="resolve-and-reject"
        className="my-5 h-96"
        src="//jsfiddle.net/Teppeichang/05sbhdop/9/embedded/js/dark/"
      ></iframe>
      <p className="mt-5 text-xl font-bold underline">fulfilled への状態遷移の違い</p>
      <p className="mt-5 font-bold">結論↓</p>
      <p className="mt-5">
        <span className="bg-slate-200">処理が成功(resolve)</span> →
        .thenの処理へ移行するが、成功した時点でfulfilled となる。
      </p>
      <p>
        <span className="bg-slate-200">処理が失敗(reject)</span> → rejected状態を経て、.catch
        の処理に移行、.catchに書かれた処理が完了すると fulfilled となる。
      </p>
      <p className="mt-5">
        なので、前項でfulfilledの説明文をあえて「処理が成功、もしくは処理が完了」と記述した。
      </p>
      <p>
        下記サンプルコードは、あえて.thenと.catchを取り除いたもので、成功or失敗した時点でのPromiseオブジェクトの状態を確認することができる。
      </p>
      <iframe
        title="promise-state-before-then-or-catch"
        className="my-5 h-72"
        src="//jsfiddle.net/Teppeichang/acf9zy5L/7/embedded/js/dark/"
      ></iframe>
      <p className="mt-5 text-2xl font-bold">Promiseのメソッドチェーン(Promiseチェーン)</p>
      <hr />
      <p className="my-5">前項で</p>
      <p>処理が成功(resolve) → .thenの処理へ移行</p>
      <p>処理が失敗(reject) → .catchの処理に移行</p>
      <p className="my-5">と説明しているが、</p>
      <p>処理が成功(resolve) → .thenの処理へ移行 → 次の.thenの処理に移行</p>
      <p>処理が失敗(reject) → .catchの処理に移行 → 次の.thenの処理に移行</p>
      <p className="mt-5">という様に、Promiseは処理を連鎖(チェーン)させることもできる。</p>
      <iframe
        title="promise-chain-sample"
        className="my-5 h-80"
        src="//jsfiddle.net/Teppeichang/q31awepd/31/embedded/js/dark/"
      ></iframe>
      <p className="mt-5 text-2xl font-bold">
        複数のPromiseの実行結果に応じた処理(Promiseの並列処理)
      </p>
      <hr />
      <p className="mt-5">
        <span className="font-bold">Promise.all()</span>と
        <span className="font-bold">Promise.race()</span>
        は、「複数のPromiseの実行結果に応じて行う処理」を定義することができる。
      </p>
      <p className="my-5">all() と race() の挙動の違いは下記の通り↓</p>
      <p>
        <span className="bg-slate-200">all()</span> → 複数のPromiseインスタンス実行結果が
        <span className="font-bold">全てfulfilledであれば</span>
        .thenの処理に移行。どれか一つでもrejectedなら.catchの処理に移行
      </p>
      <p>
        <span className="bg-slate-200">race()</span> → 複数のPromiseインスタンス実行結果が
        <span className="font-bold">どれか一つでもfulfilledであれば</span>
        .thenの処理に移行。全てrejectedなら.catchの処理に移行
      </p>
      <iframe
        title="promise-all-sample"
        className="my-5 h-80"
        src="//jsfiddle.net/Teppeichang/gduwzxym/12/embedded/js/dark/"
      ></iframe>
      <iframe
        title="promise-race-sample"
        className="my-5 h-80"
        src="//jsfiddle.net/Teppeichang/d9jm3k0h/5/embedded/js/dark/"
      ></iframe>
      <p className="mt-5 text-2xl font-bold">Promiseの処理をより簡潔に記述する方法</p>
      <hr />
      <p className="mt-5">
        連続する処理が長い場合、then, catch, then...
        が続く分、コードがどうしても長くなってしまいがちである。
      </p>
      <p>
        Promiseと同様の処理をしたいが、より簡潔に記述したいという場合は
        <Link to="/async-and-await" className="font-bold hover:text-sky-400 hover:underline"> async /await </Link>
        を使うとよい。
      </p>
    </div>
  );
};

export default PromiseAndAsyncAwait;
