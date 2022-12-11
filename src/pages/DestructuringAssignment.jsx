const DestructuringAssignment = () => {
  return (
    <div>
      <div className="my-20 p-10 flex flex-col min-h-screen">
        <p className="text-2xl font-bold">分割代入とは</p>
        <hr />
        <p className="mt-5">
          配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入することを可能にする構文。
        </p>
        <p className="text-2xl font-bold mt-10">分割代入で何ができるのか</p>
        <hr />
        <ul className="list-disc list-inside pl-2 mt-5 leading-8">
          <li>配列やオブジェクトからデータを取り出して個別の変数に代入できる。</li>
          <li>分割代入を使わずとも同じことはできるが、より簡潔な記述にできる。</li>
        </ul>
        <p className="text-2xl font-bold mt-10">分割代入のメリット・デメリット</p>
        <hr />
        <p className="mt-5">メリット 👍</p>
        <ul className="list-disc list-inside mt-5 pl-2 leading-8">
          <li>記述がシンプルになる。</li>
          <li>引数の順番を考慮する必要がなくなるため、引数の追加や削除が楽。</li>
          <li>関数を実行する側は引数の順番を知らなくて良いので依存関係が減る。</li>
          <li>引数を渡す時に何を渡しているのかがわかりやすい。</li>
        </ul>
        <p className="mt-5">デメリット 👎</p>
        <ul className="list-disc list-inside mt-5 pl-2 leading-8">
          <li>変数の記述が少なくなることで意図が伝わりづらくなる可能性がある。</li>
        </ul>
        <p className="text-2xl font-bold mt-10">サンプルコード</p>
        <hr />
        <p className="mt-5">配列の分割代入</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          /* 分割代入 */ <br />
          let [name, age, gender] = ["山田太郎", 25, "男"]; <br />
          console.log(name, age, gender); ={'>'} "山田太郎", 25, "男" <br />
          <br />
          /* Not分割代入 */ <br />
          let array = ['山田太郎', 25, '男']; <br />
          let name = array[0]; <br />
          let age = array[1]; <br />
          let gender = array[2]; <br />
          console.log(name, age, gender); ={'>'} "山田太郎", 25, "男"
        </code>
        <p>変数を入れ替える</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          /* 分割代入 */ <br />
          let str_a = 'チキン'; <br />
          let str_b = '南蛮'; <br />
          [str_a, str_b] = [str_b, str_a]; <br />
          console.log(str_a + str_b); ={'>'} 南蛮チキン <br />
          <br />
          /* Not分割代入 */ <br />
          let str_a = 'チキン'; <br />
          let str_b = '南蛮'; <br />
          let hoge = str_a; <br />
          str_a = str_b; <br />
          str_b = hoge; <br />
          console.log(str_a + str_b); ={'>'} 南蛮チキン
        </code>
        <p>関心のない値をreturnしない</p>
        <code className="bg-slate-200 block mt-5 mb-5 p-5">
          function hoge () {'{'} <br />
          <p className="ml-5">return ['バナナ', 'りんご', 'メロン']</p>
          {'}'} <br />
          <br />
          const [a, , b] = hoge(); <br />
          console.log(a); ={'>'} バナナ <br />
          console.log(b); ={'>'} メロン
        </code>
      </div>
    </div>
  );
};

export default DestructuringAssignment;
