import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./pages/Top";
import AboutHooks from "./pages/AboutHooks";
import AboutES6 from "./pages/AboutES6";
import LetAndConst from "./pages/LetAndConst";
import DestructuringAssignment from "./pages/DestructuringAssignment";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/about-es6" element={<AboutES6 />}/>
        <Route path="/let-and-const" element={<LetAndConst />}/>
        <Route path="/destructing-assignment" element={<DestructuringAssignment />}/>
        <Route path="/about-hooks" element={<AboutHooks />}/>
        <Route path="/usestate" element={<UseStatePage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
