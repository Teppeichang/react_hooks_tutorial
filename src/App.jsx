import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <p>React Hooks Tutorial</p>
        <Link to="/">Top</Link>
        <Link to="/usestate">useState解説</Link>
        <Link to="/useeffect">useEffect解説</Link>
      </div>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/usestate" element={<UseStatePage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
