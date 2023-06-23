import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./pages/Top";
import Hooks from "./pages/glossaries/Hooks";
import AboutES6 from "./pages/es6/About";
import LetAndConst from "./pages/es6/LetAndConst";
import TemplateLiterals from "./pages/es6/TemplateLiterals";
import AllowFunction from "./pages/es6/AllowFunction";
import DefaultParaeters from "./pages/es6/DefaultParaeters";
import DestructuringAssignment from "./pages/es6/DestructuringAssignment";
import SpreadSyntax from "./pages/es6/SpreadSyntax";
import PromiseObject from "./pages/es6/PromiseObject";
import AsyncAndAwait from "./pages/es6/AsyncAndAwait";
import ConditionalOperator from "./pages/es6/appendix/ConditionalOperator";
import UseStatePage from "./pages/hooks/UseStatePage";
import UseEffectPage from "./pages/hooks/UseEffectPage";
import UseRefPage from "./pages/hooks/UseRefPage";
import UseContextPage from "./pages/hooks/UseContextPage";
import UseCallbackPage from "./pages/hooks/UseCallbackPage";
import UseMemoPage from "./pages/hooks/UseMemoPage";
import State from "./pages/glossaries/State";
import Props from "./pages/glossaries/Props";
import ReRender from "./pages/glossaries/ReRender";
import SideEffect from "./pages/glossaries/SideEffect";
import Memorize from "./pages/glossaries/Memorize";
import References from "./pages/References";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="es6/about" element={<AboutES6 />}/>
        <Route path="es6/let-and-const" element={<LetAndConst />}/>
        <Route path="es6/template-literals" element={<TemplateLiterals />}/>
        <Route path="es6/allow-function" element={<AllowFunction />}/>
        <Route path="es6/default-parameters" element={<DefaultParaeters />}/>
        <Route path="es6/destructing-assignment" element={<DestructuringAssignment />}/>
        <Route path="es6/spread-syntax" element={<SpreadSyntax />}/>
        <Route path="es6/promise-object" element={<PromiseObject />}/>
        <Route path="es6/async-and-await" element={<AsyncAndAwait />}/>
        <Route path="es6/appendix/conditional-operator" element={<ConditionalOperator />}/>
        <Route path="hooks/usestate" element={<UseStatePage />} />
        <Route path="hooks/useeffect" element={<UseEffectPage />} />
        <Route path="hooks/useref" element={<UseRefPage />} />
        <Route path="hooks/usecontext" element={<UseContextPage />} />
        <Route path="hooks/usecallback" element={<UseCallbackPage />} />
        <Route path="hooks/usememo" element={<UseMemoPage />} />
        <Route path="glossaries/about" element={<Hooks />}/>
        <Route path="glossaries/state" element={<State />} />
        <Route path="glossaries/props" element={<Props />} />
        <Route path="glossaries/re-render" element={<ReRender />} />
        <Route path="glossaries/side-effect" element={<SideEffect />} />
        <Route path="glossaries/memorize" element={<Memorize />} />
        <Route path="/references" element={<References />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
