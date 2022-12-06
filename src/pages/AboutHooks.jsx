const AboutHooks = () => {
  return (
    <div className="mt-5 p-10">
      <p className="text-2xl font-bold">React Hooksって何？</p>
      <hr />
      <p className="mt-5">
        React 16.8 で追加された新機能。
        state などの React の機能を、クラスを書かずに使えるようになる。
        <br />
        関数コンポーネントに state やライフサイクルといった React の機能を <span className="font-bold">“接続する (hook into)” 関数</span>ということから、React Hooks(通称フック)と呼ばれるものである。
      </p>
      <p className="text-2xl font-bold mt-10">なぜReact Hooksが導入されたのか</p>
      <hr />
      <p className="mt-5 font-bold text-decoration: underline">結論: stateを持ったロジックを関数単位に分割し、再利用やロジックごとのテストを容易にするため</p>
      <p className="mt-5">
        関数コンポーネント + Hooksが普及する前のReactは、クラスでコンポーネントを作っていた。<br />
        クラスコンポーネントはstateを持っている という特性から、規模の大きいコンポーネントになってくるとstateを扱うロジックがコンポーネント内で混在し、かつどのstateがどのロジックで管理されているのか把握が難しくなり、結果としてバグや不整合を引き起こす。<br />
        また、JavaScriptの便利ワードかつバグの温床である <span className="font-bold">this</span>の存在がある。this の挙動の理解が難しいのと、コードが冗長になることからクラスでコンポーネントを書くこと自体のハードルが高いと言う側面もある。</p>
      <p className="text-2xl font-bold mt-10">React Hooksの記述ルール</p>
      <hr />
      <ul className="list-decimal list-inside mt-5 pl-2 leading-8">
        <li>関数のトップレベルで呼び出すこと。</li>
          <ul className="list-disc list-inside pl-5">
            <li>ループや条件分岐の中で呼び出すことはできない</li>
          </ul>
        <li>Reactの関数コンポーネントの内部で呼び出すこと</li>
          <ul className="list-disc list-inside pl-5">
            <li>通常のJavaScript関数内で呼び出すことはできない(独自定義のカスタムフック除く)</li>
          </ul>
      </ul>
      <p className="text-2xl font-bold mt-10">クラスコンポーネントは今後どうなるのか</p>
      <hr />
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        TLDR: React からクラスを削除する予定はありません。 - from React公式ドキュメント
      </code>
      <p>下記3点が主な理由</p>
      <ul className="list-disc list-inside mt-2 pl-2 leading-8">
        <li>既存のクラスコンポーネントとフックは併用できる</li>
        <li>既存のクラスコンポーネントが大規模であれば、大幅な書き換えは非推奨</li>
        <li>Facebookでもクラスコンポーネントとフックを併用して開発を続ける予定</li>
      </ul>
    </div>
  );
};

export default AboutHooks;
