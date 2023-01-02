import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./pages/Top";
import AboutHooks from "./pages/AboutHooks";
import AboutES6 from "./pages/AboutES6";
import LetAndConst from "./pages/LetAndConst";
import TemplateLiterals from "./pages/TemplateLiterals";
import AllowFunction from "./pages/AllowFunction";
import DestructuringAssignment from "./pages/DestructuringAssignment";
import SpreadSyntax from "./pages/SpreadSyntax";
import ConditionalOperator from "./pages/ConditionalOperator";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import UseRefPage from "./pages/UseRefPage";
import Glossary from "./pages/Glossary";
import References from "./pages/References";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/about-es6" element={<AboutES6 />}/>
        <Route path="/let-and-const" element={<LetAndConst />}/>
        <Route path="/template-literals" element={<TemplateLiterals />}/>
        <Route path="/allow-function" element={<AllowFunction />}/>
        <Route path="/destructing-assignment" element={<DestructuringAssignment />}/>
        <Route path="/spread-syntax" element={<SpreadSyntax />}/>
        <Route path="/conditional-operator" element={<ConditionalOperator />}/>
        <Route path="/about-hooks" element={<AboutHooks />}/>
        <Route path="/usestate" element={<UseStatePage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
        <Route path="/useref" element={<UseRefPage />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/references" element={<References />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
