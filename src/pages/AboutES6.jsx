const AboutES6 = () => {
  return (
    <div className="my-20 p-10 flex flex-col min-h-screen">
      <p className="text-2xl font-bold">ES6とは?</p>
      <hr />
      <p className="mt-5">ECMAScript 6th Editionのこと。</p>
      <p>2015年に標準化されたことからES2015が正式名称となっているが、エンジニア間ではES6と呼ばれることが多い。本チュートリアルでは<span className="font-bold">「ES6」</span>表記で統一する。</p>
      <p className="mt-5">ECMAScriptのこれまでの歴史を簡単にまとめると以下のとおり。</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        ECMAScript 1st Edition	ES	1997年6月<br />
        ECMAScript 2nd Edition	ES2	1998年6月<br />
        ECMAScript 3rd Edition	ES3	1999年12月<br />
        ECMAScript 4th Edition	ES4		(放棄)<br />
        ECMAScript 5th Edition	ES5	2009年12月<br />
        ECMAScript 5.1th Edition	ES5.1		2009年12月<br />
        ECMAScript 2015	ES2015(別名ES6)		2011年6月<br />
        ECMAScript 2016	ES2016(別名ES7)		2016年6月<br />
        ECMAScript 2017	ES2017(別名ES8)	2017年6月<br />
        ECMAScript 2018	ES2018(別名ES9)	2018年6月<br />
        ECMAScript 2019	ES2019(別名ES10)	2019年6月<br />
        ECMAScript 2020	ES2020(別名ES11)	2020年6月<br />
        ECMAScript 2021	ES2021(別名ES12)	2021年6月
      </code>
      <p className="text-2xl font-bold mt-10">なぜES6なのか? ES6以前のJavaScriptと比較してみる</p>
      <hr />
      <p className="mt-5 font-bold">結論: ES6からES6以前にはなかった機能が追加され、従来のJavaScriptより格段にコーディングしやすくなったため。</p>
      <p className="mt-5">ES6で追加された機能は以下の通り(使用頻度が高いものや、Reactのコードでよく見られるものを抜粋)</p>
      <code className="bg-slate-200 block mt-5 mb-5 p-5">
        局所変数 (let)<br />
        定数 (const)<br />
        クラス (class)<br />
        テンプレート文字列 (`Hello ${ }`)<br />
        モジュール (import, export)<br />
        アロー関数 (={'>'})<br />
        スプレッド構文 (...args)<br />
        分割代入 ([x, y] = [10, 20])<br />
        デフォルト引数 (function(x=0, y=0))<br />
        Mapオブジェクト・mapメソッド
      </code>
      <p>また、近年の技術書籍やチュートリアル類がES6構文ベースで書かれていること、フレームワークやライブラリみたく流行やバージョン変更による構文の頻繁な変化を気にしなくて良いことから、学習にあたってのハードルが低いと言うこともES6のメリットである。</p>
    </div>
  )
}
export default AboutES6
