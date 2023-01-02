const TemplateLiterals = () => {
  return (
    <div className="my-20 px-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold mt-10">テンプレート文字列とは</p>
      <hr />
      <p className="mt-5">ES6から追加された、文字列の中で変数・関数を展開することができる記法。</p>
      <p>テンプレート文字列はバッククォート(``)で文字列を囲んで使用することができる。</p>
      <p>従来の文字列と関数・変数を + で連結する記法よりも簡潔・明瞭にコーディングすることができる。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p># 従来の記法</p>
        <p>const name = "John";</p>
        <p>const age = 20;</p>
        <p>console.log("My name is" + name + "I am" + age + "years old.")</p>
        <br />
        <p># テンプレート文字列</p>
        <p>const name = "John";</p>
        <p>const age = 20;</p>
        <p>console.log(`My name is ${'{'}name{'}'} I am $ {'{'}age{'}'} years old.`)</p>
      </code>
    </div>
  );
};

export default TemplateLiterals;
