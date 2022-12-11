import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./pages/Top";
import AboutHooks from "./pages/AboutHooks";
import DestructuringAssignment from "./pages/DestructuringAssignment";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/about-hooks" element={<AboutHooks />}/>
        <Route path="/destructing-assignment" element={<DestructuringAssignment />}/>
        <Route path="/usestate" element={<UseStatePage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
