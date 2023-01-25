import React from 'react'

const ConditionalOperator = () => {
  return (
    <div className="my-20 px-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold mt-10">三項演算子とは</p>
      <hr />
      <p className="mt-5">条件分岐(if ~ else)を簡略化できる記法。ES6以前から使用できる記法であるが、Reactでよく見かける記法なので取り上げる。</p>
      <p>例えば、下記のサンプルコードは同じ意味である。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p># Not三項演算子</p>
        <p>const fruit = "バナナ"</p>
        <p>function hoge () {'{'}</p>
        <p className="ml-5">if (fruit === "みかん") {'{'}</p>
        <p className="ml-10">console.log("YES")</p>
        <p className="ml-5">{'}'} else {'{'}</p>
        <p className="ml-10">console.log("NO")</p>
        <p className="ml-5">{'}'}</p>
        <p>{'}'}</p>
        <p>hoge();</p>
        <br />
        <p># 三項演算子</p>
        <p>const fruit = "バナナ"</p>
        <p>function hoge () {'{'}</p>
        <p className="ml-5">fruit === "みかん" ? console.log("YES") : console.log("NO")</p>
        <p>{'}'}</p>
        <p>hoge();</p>
        <br />
        <p># この書き方でもOK</p>
        <p>const fruit = "バナナ" === "みかん" ? console.log("YES") : console.log("NO");</p>
      </code>
      <p>単一条件・単一式の場合はコードが冗長にならずに済む利点はあるが、あまり多用しすぎたり、複雑な条件式を三項演算子で書くとコードの可読性が下がるので、使い所には注意が必要。</p>
      <p className="text-2xl font-bold mt-10">なぜ三項演算子と呼ばれているのか</p>
      <hr />
      <p className="mt-5">三項演算子の構文が由来。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>ある条件 ? trueの時の処理 : falseの時の処理</p>
      </code>
      <p><span className="font-bold underline">「条件」「trueの場合の処理」「falseの場合の処理」の三項</span>をとることから、三項演算子と呼ばれている。</p>
      <p className="text-2xl font-bold mt-10">応用: 三項演算子による条件連鎖(if ~ else if ~ else)</p>
      <hr />
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>const fruit = "バナナ";</p>
        <p>function hoge () {'{'}</p>
        <p className="ml-5">fruit === "みかん" ? console.log("YES"!)</p>
        <p className="ml-10">: fruit === "はっさく" ? console.log("惜しい!")</p>
        <p className="ml-10">: fruit === "レモン" ? console.log("柑橘系ではあるが・・・")</p>
        <p className="ml-10">: console.log("全然違う!");</p>
        <p className="ml-5">{'}'}</p>
      </code>
      <p>以下のコードと同義である。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        <p>const fruit = "バナナ";</p>
        <p>function hoge () {'{'}</p>
        <p className="ml-5">if (fruit === "みかん") {'{'}</p>
        <p className="ml-10">console.log("YES")</p>
        <p className="ml-5">{'}'} else if (fruit === "はっさく") {'{'}</p>
        <p className="ml-10">console.log("惜しい!")</p>
        <p className="ml-5">{'}'} else if (fruit === "レモン") {'{'}</p>
        <p className="ml-10">console.log("柑橘系ではあるが・・・")</p>
        <p className="ml-5">{'}'} else {'{'}</p>
        <p className="ml-10">console.log("全然違う!");</p>
        <p className="ml-5">{'}'}</p>
        <p>{'}'}</p>
      </code>
    </div>
  )
}

export default ConditionalOperator
