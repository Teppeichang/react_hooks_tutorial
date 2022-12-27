import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./pages/Top";
import AboutHooks from "./pages/AboutHooks";
import AboutES6 from "./pages/AboutES6";
import LetAndConst from "./pages/LetAndConst";
import DestructuringAssignment from "./pages/DestructuringAssignment";
import SpreadSyntax from "./pages/SpreadSyntax";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
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
        <Route path="/destructing-assignment" element={<DestructuringAssignment />}/>
        <Route path="/spread-syntax" element={<SpreadSyntax />}/>
        <Route path="/about-hooks" element={<AboutHooks />}/>
        <Route path="/usestate" element={<UseStatePage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/references" element={<References />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
