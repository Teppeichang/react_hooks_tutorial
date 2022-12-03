import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import UseStatePage from "./pages/UseStatePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <p>React Hooks Tutorial</p>
        <Link to="/usestate">useState解説</Link>
        <p>useEffect解説</p>
      </div>
      <Routes>
        <Route path="/usestate" element={<UseStatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
