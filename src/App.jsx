import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./pages/Top";
import AboutHooks from "./pages/hooks/About";
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
import Glossaries from "./pages/Glossaries";
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
        <Route path="hooks/about" element={<AboutHooks />}/>
        <Route path="hooks/usestate" element={<UseStatePage />} />
        <Route path="hooks/useeffect" element={<UseEffectPage />} />
        <Route path="hooks/useref" element={<UseRefPage />} />
        <Route path="/glossaries" element={<Glossaries />} />
        <Route path="/references" element={<References />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
